export async function onRequest(context) {
  // CORS & GET
  if (context.request.method === "OPTIONS") return new Response(null, { headers: { "Access-Control-Allow-Origin": "*" } });
  if (context.request.method === "GET") return new Response("Chat API Ready");

  try {
    const { history, scenario, goal, level } = await context.request.json();
    const apiKey = context.env.GEMINI_API_KEY;
    if (!apiKey) return new Response(JSON.stringify({ error: "API Key missing" }), { status: 500 });

    // 1. HISTORY REINIGEN (Wichtig!)
    // Die KI soll nicht die alten Korrekturen/Übersetzungen sehen, das verwirrt sie.
    // Wir schicken ihr nur 'user' und 'model' Texte.
    const cleanHistory = (history || []).slice(-6).map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.content }] // Nur der Inhalt, keine Metadaten
    }));

    // Die letzte Nachricht des Users (die wir korrigieren wollen)
    const lastUserMsg = history[history.length - 1]?.content || "";

    const systemPrompt = `
      Role: Strict French Roleplay Game Engine.
      Scenario: ${scenario}
      Goal: ${goal}
      Level: ${level}
      
      YOUR TASK:
      1. Analyze the user's LAST message: "${lastUserMsg}".
      2. If it contains grammar errors, put the corrected sentence in "correction". If it is correct, set "correction" to null.
      3. Reply to the user in character (French).
      4. Suggest 3 follow-up responses in "suggestions".
      
      GAME RULES:
      - English/Rude -> patience_change: -1
      - Goal achieved -> mission_status: "success"
      
      OUTPUT JSON ONLY (No Markdown):
      {
        "text": "French reply",
        "translation": "English translation",
        "correction": "Corrected sentence" (OR null),
        "suggestions": ["A", "B", "C"],
        "patience_change": 0,
        "mission_status": "ongoing"
      }
    `;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
            contents: [
                { role: "user", parts: [{ text: systemPrompt }] },
                ...cleanHistory
            ] 
        })
      }
    );

    const data = await response.json();
    
    // Fehler abfangen, bevor es crasht
    if (!data.candidates || !data.candidates[0].content) {
        // Notfall-Antwort bauen, damit der Chat nicht einfriert (Weiße Nachricht Fix)
        return new Response(JSON.stringify({
            text: "Pardon, je n'ai pas compris. Pouvez-vous répéter ?",
            translation: "Sorry, I didn't understand. Can you repeat?",
            correction: null,
            suggestions: ["Répétez, s'il vous plaît", "Je ne comprends pas"],
            patience_change: 0,
            mission_status: "ongoing"
        }), { headers: { "Content-Type": "application/json" } });
    }

    let rawText = data.candidates[0].content.parts[0].text;
    // Markdown entfernen
    rawText = rawText.replace(/```json/g, '').replace(/```/g, '').trim();

    return new Response(rawText, { headers: { "Content-Type": "application/json" } });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}