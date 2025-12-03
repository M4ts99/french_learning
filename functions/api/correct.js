export async function onRequest(context) {
  // CORS & GET Handling (Verhindert 405 Fehler)
  if (context.request.method === "OPTIONS") {
    return new Response(null, { headers: { "Access-Control-Allow-Origin": "*" } });
  }
  if (context.request.method === "GET") {
    return new Response("Grammar Coach API Online");
  }

  try {
    const { text, instruction } = await context.request.json();
    const apiKey = context.env.GEMINI_API_KEY;

    if (!text) return new Response(JSON.stringify({ error: "No text provided" }), { status: 400 });
    if (!apiKey) return new Response(JSON.stringify({ error: "API Key missing" }), { status: 500 });

    let prompt;

    if (instruction) {
        // Custom instruction mode (e.g. for Daily Writer scoring)
        prompt = `
        Act as a strict French Language Tutor.
        Analyze this user text: "${text}"
        
        Instruction: ${instruction}
        
        IMPORTANT: Return ONLY valid JSON. No Markdown formatting. No code blocks.
        `;
    } else {
        // Default Grammar Coach mode
        prompt = `
        Act as a strict French Grammar Coach.
        Analyze this user text: "${text}"
        
        Task:
        1. Correct all grammar and spelling mistakes.
        2. Explain the biggest mistake in simple English.
        3. If the text is already perfect, just return it and praise the user.
        
        Output JSON ONLY (No Markdown):
        {
            "corrected": "The corrected French sentence",
            "explanation": "Short explanation in English (max 1 sentence)"
        }
        `;
    }

    // Wir nutzen das schnelle, neue Modell
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
        throw new Error(data.error.message);
    }

    let rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
    
    if (!rawText) throw new Error("No correction generated");

    // Markdown entfernen
    rawText = rawText.replace(/```json/g, '').replace(/```/g, '').trim();

    return new Response(rawText, { headers: { "Content-Type": "application/json" } });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}