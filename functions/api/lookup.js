export async function onRequestPost(context) {
  try {
    const { word } = await context.request.json();
    const apiKey = context.env.GEMINI_API_KEY;

    if (!word) return new Response(JSON.stringify({ error: "No word provided" }), { status: 400 });
    if (!apiKey) return new Response(JSON.stringify({ error: "API Key missing" }), { status: 500 });

    const prompt = `
      You are a French Dictionary API. 
      Analyze the word: "${word}".
      
      Output strict JSON with these fields:
      1. "root": The infinitive/singular form (e.g. "suis" -> "être"). If unknown, use the word itself.
      2. "translation": The English translation in this context.
      3. "type": Grammatical info (e.g. "Verb", "Noun").

      Example: {"root": "être", "translation": "am", "type": "Verb"}
      
      IMPORTANT: Return ONLY the JSON string. No markdown. No backticks.
    `;

    // HIER IST DIE ÄNDERUNG: Wir nutzen das Lite-Modell
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      }
    );

    const data = await response.json();
    
    if (data.error) {
        throw new Error("Gemini API Error: " + data.error.message);
    }
    
    if (!data.candidates || !data.candidates[0].content) {
        throw new Error("No content received from AI");
    }

    let rawText = data.candidates[0].content.parts[0].text;
    
    // Aggressive Reinigung für das Lite-Modell
    rawText = rawText.replace(/```json/g, '').replace(/```/g, '').trim();
    
    // Validierung
    try {
        JSON.parse(rawText); 
    } catch (e) {
        // Fallback, falls Lite mal patzt
        rawText = JSON.stringify({ 
            root: word, 
            translation: "Translation unavailable", 
            type: "Unknown" 
        });
    }

    return new Response(rawText, { 
        headers: { "Content-Type": "application/json" } 
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message, root: word, translation: "Error", type: "API Fail" }), { status: 500 });
  }
}