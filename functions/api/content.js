export async function onRequestPost(context) {
  try {
    const { type } = await context.request.json(); // type: 'joke'
    const apiKey = context.env.GEMINI_API_KEY;

    if (type === 'joke') {
        const prompt = `
          Tell me a short, funny joke in French suitable for a language learner.
          
          Output JSON format:
          {
            "fr": "French joke text...",
            "en": "English translation/explanation...",
            "keyword": "Main vocab word (e.g. 'Chat')" 
          }
          Return ONLY raw JSON.
        `;

        const response = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${apiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
          }
        );

        const data = await response.json();
        let rawText = data.candidates[0].content.parts[0].text;
        rawText = rawText.replace(/```json/g, '').replace(/```/g, '').trim();

        return new Response(rawText, { headers: { "Content-Type": "application/json" } });
    }

    return new Response("Invalid type", { status: 400 });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}