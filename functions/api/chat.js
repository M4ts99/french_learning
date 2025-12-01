export async function onRequest(context) {
  if (context.request.method === "OPTIONS") {
    return new Response(null, { headers: { "Access-Control-Allow-Origin": "*" } });
  }
  if (context.request.method === "GET") {
    return new Response("Chat API Ready");
  }

  try {
    // NEU: Wir empfangen jetzt auch 'goal'
    const { history, scenario, goal, level } = await context.request.json();
    const apiKey = context.env.GEMINI_API_KEY;

    if (!apiKey) return new Response(JSON.stringify({ error: "API Key missing" }), { status: 500 });

    const recentHistory = (history || []).slice(-6);

    const systemPrompt = `
      Role: French Roleplay Game Engine.
      SCENARIO: ${scenario}
      USER GOAL: "${goal}"
      LEVEL: ${level}
      
      YOUR TASKS:
      1. Reply as the character.
      2. CHECK VICTORY CONDITION: Has the user clearly achieved the "USER GOAL"? 
         - Example: If goal is "Buy bread", and user asked for it and you agreed to sell/gave it -> SUCCESS.
         - If success, say a polite goodbye in French and set "mission_status": "success".
      3. Check grammar errors (strict).
      
      GAME RULES:
      - Speak English -> patience -1
      - Rude -> patience -1
      - Goal achieved -> mission_status "success" (IMMEDIATELY)
      
      JSON OUTPUT ONLY:
      {
        "text": "French reply (Keep it under 15 words)",
        "translation": "English translation",
        "correction": "Corrected user sentence (or null)",
        "suggestions": ["A", "B", "C"],
        "patience_change": 0,
        "mission_status": "ongoing" (or "success" or "failed")
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