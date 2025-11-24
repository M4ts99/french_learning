// functions/api/examples.js
export async function onRequestPost(context) {
  try {
    const { word } = await context.request.json();
    const apiKey = context.env.GEMINI_API_KEY;

    if (!apiKey) return new Response("Key missing", { status: 500 });

    // Der Prompt zwingt Gemini, ein JSON-Array zu liefern
    const prompt = `
      Task: Generate 3 simple, everyday French sentences using the word "${word}".
      Requirement: Provide the English translation for each.
      Format: Return ONLY a raw JSON array. No markdown formatting, no code blocks.
      Example Output: [{"fr": "J'aime le chat.", "en": "I like the cat."}, {"fr": "Le chat dort.", "en": "The cat sleeps."}]
    `;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      }
    );

    const data = await response.json();
    
    // Fehlerbehandlung
    if (!data.candidates || !data.candidates[0].content) {
        throw new Error("No content from Gemini");
    }

    let rawText = data.candidates[0].content.parts[0].text;

    // Manchmal packt Gemini das JSON in Markdown ```json ... ```. Das entfernen wir:
    rawText = rawText.replace(/```json/g, '').replace(/```/g, '').trim();

    return new Response(rawText, {
      headers: { "Content-Type": "application/json" },
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}