// functions/api/translate.js
export async function onRequestPost(context) {
  try {
    // Text aus dem Frontend empfangen
    const { text } = await context.request.json();

    // API Key aus Cloudflare Umgebungsvariablen holen
    const apiKey = context.env.GEMINI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Server Error: API Key missing" }), { status: 500 });
    }

    // Anfrage an Google Gemini
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are a French translator. Translate the following text into French. Output ONLY the translation. If the input is already French, correct any grammar mistakes. Input: "${text}"`
            }]
          }]
        })
      }
    );

    const data = await response.json();
    
    // Prüfen ob Google eine gültige Antwort gab
    if (!data.candidates || data.candidates.length === 0) {
        throw new Error("No response from Gemini");
    }

    const translatedText = data.candidates[0].content.parts[0].text;

    // Antwort zurück ans Frontend
    return new Response(JSON.stringify({ translation: translatedText }), {
      headers: { "Content-Type": "application/json" },
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}