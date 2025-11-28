export async function onRequestPost(context) {
  try {
    const { text, targetLang } = await context.request.json(); // targetLang: 'fr' oder 'en'
    const apiKey = context.env.GEMINI_API_KEY;

    if (!apiKey) return new Response(JSON.stringify({ error: "Key missing" }), { status: 500 });

    // Der Prompt ist jetzt komplexer und verlangt JSON
    const prompt = `
      Task: Translate the text and provide context.
      Input Text: "${text}"
      Target Language: ${targetLang === 'fr' ? 'French' : 'English'}
      
      Requirements:
      1. Translate the input text accurately.
      2. Generate 3 short, simple example sentences using the translated word/phrase in context.
      
      Format: Return ONLY a raw JSON object with this structure:
      {
        "translation": "The translated text",
        "examples": [
          {"fr": "Example 1 in French", "en": "Translation 1"},
          {"fr": "Example 2 in French", "en": "Translation 2"},
          {"fr": "Example 3 in French", "en": "Translation 3"}
        ]
      }
    `;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash :generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      }
    );

    const data = await response.json();
    if (!data.candidates) throw new Error("No response from AI");

    let rawText = data.candidates[0].content.parts[0].text;
    rawText = rawText.replace(/```json/g, '').replace(/```/g, '').trim();

    return new Response(rawText, { headers: { "Content-Type": "application/json" } });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}