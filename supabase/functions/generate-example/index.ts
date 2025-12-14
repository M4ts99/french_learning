import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })

  try {
    const { word, wordId } = await req.json()
    console.log(`[PROCESS] Word: "${word}" (ID: ${wordId})`)

    const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY')
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // --- SCHRITT 1: DATENBANK PRÜFEN ---
    const { data: existingExamples } = await supabaseAdmin
      .from('examples')
      .select('sentence_fr, sentence_en')
      .eq('word_id', wordId)

    const count = existingExamples ? existingExamples.length : 0

    // Fall A: Wir haben schon 3 (oder mehr) Sätze -> Cache nutzen
    if (count >= 3) {
      console.log("[CACHE] Returning existing examples.")
      const formatted = existingExamples.map(e => ({ fr: e.sentence_fr, en: e.sentence_en }))
      return new Response(JSON.stringify({ success: true, data: formatted, source: 'cache' }), { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      })
    }

    // Fall B: Wir haben alte Daten (1 oder 2 Sätze) -> Löschen und neu machen
    if (count > 0 && count < 3) {
      console.log("[CLEANUP] Deleting old examples to regenerate 3 fresh ones...")
      await supabaseAdmin.from('examples').delete().eq('word_id', wordId)
    }

    // --- SCHRITT 2: KI ABFRAGEN (MIT FALLBACK) ---
    
    const prompt = `
      Task: Create exactly 3 distinct, simple French sentences (A1/A2 level) using the word "${word}".
      Requirement: Provide the English translation for each.
      Output: Strictly a JSON Array. No Markdown.
      Format: [{"fr": "...", "en": "..."}, {"fr": "...", "en": "..."}, {"fr": "...", "en": "..."}]
    `

    let aiData = null;
    let usedModel = "";

    // VERSUCH 1: Gemini 2.0 Flash (Dein Favorit)
    try {
      console.log("[AI] Trying Primary Model: Gemini 2.0 Flash...")
      const res2 = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      })
      
      const json2 = await res2.json()
      
      // Prüfen ob Fehler 429 (Quota) oder anderer Fehler
      if (!res2.ok || json2.error) {
        throw new Error(json2.error?.message || "2.0 API Error")
      }
      
      aiData = json2;
      usedModel = "gemini-2.0-flash";
      console.log("[AI] Success with Gemini 2.0 Flash!")

    } catch (err2) {
      console.warn(`[AI WARNING] Gemini 2.0 failed (${err2.message}). Switching to backup...`)
      
      // VERSUCH 2: Gemini 1.5 Flash (Der stabile Retter)
      try {
        console.log("[AI] Trying Backup Model: Gemini 1.5 Flash...")
        const res15 = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        })
        
        const json15 = await res15.json()
        
        if (!res15.ok || json15.error) {
           throw new Error(json15.error?.message || "1.5 API Error")
        }

        aiData = json15;
        usedModel = "gemini-1.5-flash";
        console.log("[AI] Success with Backup Gemini 1.5 Flash.")

      } catch (err15) {
        // Wenn beide scheitern, geben wir auf
        throw new Error(`All AI models failed. Last error: ${err15.message}`)
      }
    }

    // --- SCHRITT 3: ANTWORT VERARBEITEN ---
    const rawText = aiData.candidates?.[0]?.content?.parts?.[0]?.text || "[]"
    const jsonString = rawText.replace(/```json/g, '').replace(/```/g, '').trim()
    
    let result
    try {
      result = JSON.parse(jsonString)
      if (!Array.isArray(result)) result = [result]
    } catch (e) {
      console.error("[ERROR] JSON Parse Failed:", rawText)
      throw new Error("AI returned invalid format")
    }

    // --- SCHRITT 4: SPEICHERN ---
    console.log(`[DB] Saving ${result.length} sentences...`)
    const rowsToInsert = result.map(item => ({
      word_id: wordId,
      sentence_fr: item.fr,
      sentence_en: item.en,
      source: `ai-${usedModel}` // Wir speichern sogar, welches Modell es war!
    }))

    const { error: insertError } = await supabaseAdmin.from('examples').insert(rowsToInsert)
    if (insertError) throw insertError

    return new Response(
      JSON.stringify({ success: true, data: result }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error("[CRITICAL]", error.message)
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})