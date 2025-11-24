export async function onRequestPost(context) {
  try {
    const { text } = await context.request.json();
    const apiKey = context.env.GEMINI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Cloudflare Config Error: GEMINI_API_KEY is missing in Settings!" }), { status: 500 });
    }

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: `You are a French translator. Translate to French: "${text}"`
            }]
          }]
        })
      }
    );

    const data = await response.json();

    // --- DEBUGGING START: Zeige den echten Fehler von Google ---
    if (data.error) {
        // Das gibt die echte Fehlermeldung von Google zurück (z.B. "API Key not valid")
        return new Response(JSON.stringify({ error: "Google Error: " + data.error.message }), { status: 400 });
    }
    // --- DEBUGGING ENDE ---

    if (!data.candidates || data.candidates.length === 0) {
        return new Response(JSON.stringify({ error: "Gemini sent empty response (blocked content?)" }), { status: 500 });
    }

    const translatedText = data.candidates[0].content.parts[0].text;

    return new Response(JSON.stringify({ translation: translatedText }), {
      headers: { "Content-Type": "application/json" },
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: "Server Exception: " + err.message }), { status: 500 });
  }
}