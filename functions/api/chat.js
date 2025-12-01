// WICHTIG: Der Name der Funktion MUSS "onRequestPost" sein!
export async function onRequestPost(context) {
  try {
    // 1. Request lesen
    const { history, scenario, level } = await context.request.json();
    const apiKey = context.env.GEMINI_API_KEY;

    if (!apiKey) {
        return new Response(JSON.stringify({ error: "API Key missing in Backend" }), { status: 500 });
    }

    // 2. System Prompt
    let complexity = "Simple words, slow pace. A1/A2 level.";
    if (level === "B1" || level === "B2") complexity = "Standard grammar, normal pace.";
    if (level === "C1" || level === "C2") complexity = "Complex grammar, slang, fast pace.";

    const systemPrompt = `
      Act as a French Roleplay Character.
      Scenario: ${scenario}
      Level: ${level} (${complexity})
      
      Your Task: Reply to the user.
      
      Rules:
      1. Keep answers short (chat style).
      2. Hidden "patience meter" (starts at 3). Rude/English = -1.
      3. Goal achieved = mission_status: "success".
      
      IMPORTANT: Return ONLY raw JSON. No Markdown.
      JSON Format:
      {
        "text": "French reply",
        "translation": "English translation",
        "patience_change": 0,
        "mission_status": "ongoing"
      }
    `;

    // 3. Messages zusammenbauen
    const messages = [
        { role: "user", parts: [{ text: systemPrompt }] },
        ...history.map(msg => ({
            role: msg.role === 'user' ? 'user' : 'model',
            parts: [{ text: msg.content }]
        }))
    ];

    // 4. Fetch an Gemini 2.0 Flash Lite
    // HINWEIS: Das ist der offizielle Name für Flash-Lite in der API aktuell.
    const modelName = "gemini-2.0-flash-lite-preview-02-05";
    
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: messages })
      }
    );

    const data = await response.json();
    
    // Fehlerprüfung Google
    if (data.error) {
        throw new Error(`Gemini Error: ${data.error.message}`);
    }
    if (!data.candidates || !data.candidates[0].content) {
        throw new Error("No content from AI");
    }

    let rawText = data.candidates[0].content.parts[0].text;
    rawText = rawText.replace(/```json/g, '').replace(/```/g, '').trim();

    return new Response(rawText, { headers: { "Content-Type": "application/json" } });

  } catch (err) {
    // Fehler zurückgeben
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}