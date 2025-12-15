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
    console.log(`[PROCESS] Word: "${word}" (Rank: ${wordId})`)

    const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY')
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // --- SCHRITT 1: DATENBANK PRÜFEN (CACHE) ---
    const { data: existingExamples } = await supabaseAdmin
      .from('word_examples') 
      .select('sentence_fr, sentence_en')
      .eq('word_rank', wordId)

    const count = existingExamples ? existingExamples.length : 0

    // Fall A: Wir haben bereits 3 (oder mehr) Sätze -> Cache nutzen
    if (count >= 3) {
      console.log(`[CACHE] Returning ${count} existing examples.`)
      const formatted = existingExamples.map(e => ({ fr: e.sentence_fr, en: e.sentence_en }))
      return new Response(JSON.stringify({ success: true, data: formatted, source: 'cache' }), { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      })
    }

    // Fall B: Wir haben weniger als 3 (z.B. alte Daten) -> Löschen und neu machen
    if (count > 0 && count < 3) {
        console.log("[CLEANUP] Found partial data. Deleting old to regenerate full set...")
        await supabaseAdmin.from('word_examples').delete().eq('word_rank', wordId)
    }

    // --- SCHRITT 2: KI ABFRAGEN ---
    
    // Prompt für 3 Sätze als Array
    const prompt = `
      Task: Create exactly 3 distinct, simple French sentences (A1/A2 level) using the word "${word}".
      Requirement: Provide the English translation for each.
      Output: Strictly a JSON Array. No Markdown.
      Format: [{"fr": "...", "en": "..."}, {"fr": "...", "en": "..."}, {"fr": "...", "en": "..."}]
    `

    console.log("[AI] Requesting Gemini...")
    // Ich nutze hier 1.5 Flash, da es sehr stabil für JSON Arrays ist. Du kannst auch 2.0 nutzen.
    const resAi = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
    })
      
    const jsonAi = await resAi.json()
      
    if (!resAi.ok || jsonAi.error) {
       throw new Error(jsonAi.error?.message || "AI API Error")
    }

    // --- SCHRITT 3: ANTWORT VERARBEITEN ---
    const rawText = jsonAi.candidates?.[0]?.content?.parts?.[0]?.text || "[]"
    const jsonString = rawText.replace(/```json/g, '').replace(/```/g, '').trim()
    
    let resultsArray
    try {
      resultsArray = JSON.parse(jsonString)
      // Sicherheitscheck: Ist es wirklich ein Array? Wenn nicht (z.B. einzelnes Objekt), pack es in ein Array
      if (!Array.isArray(resultsArray)) resultsArray = [resultsArray]
      
      // Begrenzen auf maximal 3, falls die KI durchdreht
      resultsArray = resultsArray.slice(0, 3)
    } catch (e) {
      console.error("[ERROR] JSON Parse Failed:", rawText)
      throw new Error("AI returned invalid format")
    }

    // --- SCHRITT 4: SPEICHERN (BULK INSERT) ---
    console.log(`[DB] Saving ${resultsArray.length} new sentences...`)
    
    // Wir erstellen ein Array von Rows für den Insert
    const rowsToInsert = resultsArray.map(item => ({
        word_rank: wordId,
        lemma: word,
        sentence_fr: item.fr,
        sentence_en: item.en,
        source: 'ai-gemini'
    }))

    const { error: insertError } = await supabaseAdmin.from('word_examples').insert(rowsToInsert)

    if (insertError) {
        console.error("DB Insert Error:", insertError)
    }

    return new Response(
      JSON.stringify({ success: true, data: resultsArray }),
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