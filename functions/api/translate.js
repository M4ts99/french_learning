export async function onRequestPost(context) {
  try {
    const { text } = await context.request.json();
    const apiKey = context.env.GEMINI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Cloudflare Config Error: GEMINI_API_KEY is missing" }), { status: 500 });
    }

    // WICHTIG: Wir nutzen jetzt exakt 'gemini-1.5-flash'
    // Das ist die stabilste Version für die v1beta API.
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are a French translator. Translate the following text into French. Output ONLY the translation. If it is already French, correct it. Input: "${text}"`
            }]
          }]
        })
      }
    );

    const data = await response.json();

    // Detaillierte Fehlerprüfung
    if (data.error) {
        return new Response(JSON.stringify({ error: `Google Error (${data.error.code}): ${data.error.message}` }), { status: 400 });
    }

    if (!data.candidates || data.candidates.length === 0) {
        return new Response(JSON.stringify({ error: "Gemini sent empty response." }), { status: 500 });
    }

    const translatedText = data.candidates[0].content.parts[0].text;

    return new Response(JSON.stringify({ translation: translatedText }), {
      headers: { "Content-Type": "application/json" },
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: "Server Exception: " + err.message }), { status: 500 });
  }
}