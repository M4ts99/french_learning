export async function onRequestPost(context) {
  try {
    const { text } = await context.request.json();
    const apiKey = context.env.GEMINI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Cloudflare Config Error: GEMINI_API_KEY is missing" }), { status: 500 });
    }

    // ÄNDERUNG: Wir nutzen 'gemini-1.5-flash-latest' statt nur 'gemini-1.5-flash'
    // Das ist oft robuster bei der Erkennung.
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [{
            parts: [{
              // Der Prompt bleibt gleich
              text: `You are a French translator. Translate to French: "${text}"`
            }]
          }]
        })
      }
    );
    //test 123123

    const data = await response.json();

    // Fehlerbehandlung: Falls Google immer noch meckert
    if (data.error) {
        return new Response(JSON.stringify({ error: "Google Error: " + data.error.message }), { status: 400 });
    }

    if (!data.candidates || data.candidates.length === 0) {
        return new Response(JSON.stringify({ error: "No translation found." }), { status: 500 });
    }

    const translatedText = data.candidates[0].content.parts[0].text;

    return new Response(JSON.stringify({ translation: translatedText }), {
      headers: { "Content-Type": "application/json" },
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: "Server Error: " + err.message }), { status: 500 });
  }
}