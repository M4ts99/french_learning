export async function onRequest(context) {
  // CORS & GET Handling
  if (context.request.method === "OPTIONS") {
    return new Response(null, { headers: { "Access-Control-Allow-Origin": "*" } });
  }
  if (context.request.method === "GET") {
    return new Response("Chat API Ready");
  }

  try {
    const { history, scenario, level } = await context.request.json();
    const apiKey = context.env.GEMINI_API_KEY;

    if (!apiKey) return new Response(JSON.stringify({ error: "API Key missing" }), { status: 500 });

    const recentHistory = (history || []).slice(-6);

    const systemPrompt = `
      Role: French Roleplay Game Engine.
      SCENARIO: ${scenario}
      LEVEL: ${level}
      
      TASK:
      1. Reply to the user (playing the character).
      2. Check user's grammar strictly. If there is an error, provide a "correction".
      3. Provide 3 short French follow-up phrases the user could say next in "suggestions".
      
      OUTPUT RULES:
      - Return ONLY JSON.
      - "suggestions" MUST be an array of 3 strings (e.g. ["Oui, merci", "Non", "Combien?"]).
      - "correction" should be null if the user was correct, otherwise the corrected sentence string.
      
      JSON Structure:
      {
        "text": "French reply...",
        "translation": "English translation...",
        "correction": "Corrected user sentence" (or null),
        "suggestions": ["Option A", "Option B", "Option C"],
        "patience_change": 0,
        "mission_status": "ongoing"
      }
    `;

    const messages = [
        { role: "user", parts: [{ text: systemPrompt }] },
        ...recentHistory.map(msg => ({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.content }]
        }))
    ];

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: messages })
      }
    );

    const data = await response.json();
    
    if (!data.candidates) throw new Error("AI Overload");

    let rawText = data.candidates[0].content.parts[0].text;
    rawText = rawText.replace(/```json/g, '').replace(/```/g, '').trim();

    return new Response(rawText, { headers: { "Content-Type": "application/json" } });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}