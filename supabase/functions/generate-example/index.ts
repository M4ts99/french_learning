import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // CORS Handle
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })

  try {
    const { word, wordId } = await req.json()
    // WICHTIG: wordId kommt vom Frontend als Rank (z.B. 50)
    console.log(`[PROCESS] Word: "${word}" (Rank: ${wordId})`)

    const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY')
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // --- SCHRITT 1: DATENBANK PRÜFEN (CACHE) ---
    // Tabelle heißt jetzt 'word_examples' und Spalte 'word_rank'
    const { data: existingExamples } = await supabaseAdmin
      .from('word_examples') 
      .select('sentence_fr, sentence_en')
      .eq('word_rank', wordId) // Wir suchen nach dem Rank!

    const count = existingExamples ? existingExamples.length : 0

    // Fall A: Wir haben schon Sätze -> Cache nutzen
    if (count >= 1) { // Schon 1 Satz reicht uns eigentlich, aber KI macht oft mehrere
      console.log("[CACHE] Returning existing examples.")
      const formatted = existingExamples.map(e => ({ fr: e.sentence_fr, en: e.sentence_en }))
      return new Response(JSON.stringify({ success: true, data: formatted, source: 'cache' }), { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      })
    }

    // --- SCHRITT 2: KI ABFRAGEN ---
    
    const prompt = `
      Task: Create exactly 1 simple French sentence (A1/A2 level) using the word "${word}".
      Requirement: Provide the English translation.
      Output: Strictly a JSON Object (not array). No Markdown.
      Format: {"fr": "...", "en": "..."}
    `

    console.log("[AI] Requesting Gemini...")
    const resAi = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
    })
      
    const jsonAi = await resAi.json()
      
    if (!resAi.ok || jsonAi.error) {
       throw new Error(jsonAi.error?.message || "AI API Error")
    }

    // --- SCHRITT 3: ANTWORT VERARBEITEN ---
    const rawText = jsonAi.candidates?.[0]?.content?.parts?.[0]?.text || "{}"
    const jsonString = rawText.replace(/```json/g, '').replace(/```/g, '').trim()
    
    let resultItem
    try {
      resultItem = JSON.parse(jsonString)
      // Falls die KI doch ein Array schickt, nimm das erste Element
      if (Array.isArray(resultItem)) resultItem = resultItem[0]
    } catch (e) {
      console.error("[ERROR] JSON Parse Failed:", rawText)
      throw new Error("AI returned invalid format")
    }

    // --- SCHRITT 4: SPEICHERN ---
    console.log(`[DB] Saving new sentence...`)
    
    // Wir speichern in 'word_examples'
    const { error: insertError } = await supabaseAdmin.from('word_examples').insert({
      word_rank: wordId, // Das ist der Integer Rank (z.B. 50)
      lemma: word,
      sentence_fr: resultItem.fr,
      sentence_en: resultItem.en,
      source: 'ai-gemini'
    })

    if (insertError) {
        console.error("DB Insert Error:", insertError)
        // Wir werfen keinen Fehler, sondern geben das Ergebnis trotzdem zurück,
        // damit der User den Satz sieht, auch wenn Speichern fehlschlug.
    }

    // Wir geben ein Array zurück, damit dein Frontend glücklich ist
    return new Response(
      JSON.stringify({ success: true, data: [resultItem] }),
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