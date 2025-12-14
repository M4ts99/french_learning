// supabase/functions/generate-example/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // CORS Handle (für Browser Anfragen)
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // 1. Daten vom Frontend empfangen
    const { word, wordId } = await req.json()
    
    if (!word || !wordId) throw new Error("Missing word or wordId")

    console.log(`Generating example for: ${word}`)

    // 2. Gemini API aufrufen
    const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY')
    const prompt = `
      Generate a simple French sentence (CEFR A1/A2 level) using the word "${word}".
      Also provide the English translation.
      Output ONLY valid JSON like this: {"fr": "...", "en": "..."}
    `

    const geminiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    })

    const aiData = await geminiResponse.json()
    
    // 3. Antwort parsen
    // Prüfen ob Gemini überhaupt was zurückgegeben hat
    if (!aiData.candidates || !aiData.candidates[0] || !aiData.candidates[0].content) {
       console.error("Gemini Error:", JSON.stringify(aiData))
       throw new Error("Gemini API returned unexpected format")
    }

    const rawText = aiData.candidates[0].content.parts[0].text
    const jsonString = rawText.replace(/```json/g, '').replace(/```/g, '').trim()
    const result = JSON.parse(jsonString)

    // 4. In Supabase 'examples' Tabelle speichern
    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    const { error: dbError } = await supabaseAdmin
      .from('examples')
      .insert({
        word_id: wordId,
        sentence_fr: result.fr,
        sentence_en: result.en,
        source: 'ai'
      })

    if (dbError) throw dbError

    // 5. Erfolg zurückmelden
    return new Response(
      JSON.stringify({ success: true, data: result }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error(error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})