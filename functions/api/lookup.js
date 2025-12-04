import { getGeminiUrl } from './_config.js';

export async function onRequest(context) {
  // Preflight & GET Check
  if (context.request.method === "OPTIONS") return new Response(null, { headers: { "Access-Control-Allow-Origin": "*" } });
  if (context.request.method === "GET") return new Response("Lookup API Online");

  try {
    const { word } = await context.request.json();
    const apiKey = context.env.GEMINI_API_KEY;

    if (!word) return new Response(JSON.stringify({ error: "No word" }), { status: 400 });
    if (!apiKey) return new Response(JSON.stringify({ error: "API Key missing" }), { status: 500 });

    const prompt = `
      Act as a French Dictionary. 
      Analyze the word: "${word}".
      
      Output strict JSON with these 3 fields:
      1. "root": The infinitive/singular form (e.g. "suis" -> "être").
      2. "translation": The English translation.
      3. "type": Grammatical info.

      Example: {"root": "être", "translation": "am", "type": "Verb"}
      RETURN ONLY JSON.
    `;

    // UPDATE: Nutzt das stabile Lite-Modell
    const response = await fetch(
      getGeminiUrl(apiKey),
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      }
    );

    const data = await response.json();
    
    if (data.error) throw new Error(data.error.message);

    let rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!rawText) throw new Error("AI returned empty result");

    rawText = rawText.replace(/```json/g, '').replace(/```/g, '').trim();

    return new Response(rawText, { headers: { "Content-Type": "application/json" } });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}