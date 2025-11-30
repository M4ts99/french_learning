export async function onRequestPost(context) {
  try {
    const { genre, level, weakWords, length } = await context.request.json();
    const apiKey = context.env.GEMINI_API_KEY;

    if (!apiKey) return new Response(JSON.stringify({ error: "Key missing" }), { status: 500 });

    // --- 1. LÄNGE & STIL (Dynamic Density) ---
    // Wir übersetzen die Zahl in eine "Regie-Anweisung"
    let lengthInstruction = "around 150 words. Standard pacing.";
    let lengthNum = parseInt(length) || 150;

    if (lengthNum <= 80) {
        lengthInstruction = `VERY SHORT (${lengthNum} words). Be extremely concise. Jump straight to the action. No filler sentences.`;
    } else if (lengthNum >= 250) {
        lengthInstruction = `LONG and DETAILED (${lengthNum} words). Be descriptive. Describe the atmosphere, feelings, and surroundings in detail. Take time to build the scene.`;
    } else {
        lengthInstruction = `Medium length (${lengthNum} words). Balanced pacing.`;
    }

    // --- 2. RANDOM "SPICE" (Gegen Langeweile) ---
    // Wir würfeln einen "Vibe", damit die Geschichten nicht immer gleich klingen.
    const TONES = [
        "Humorous and light-hearted. Try to be funny.",
        "Mysterious and slightly suspenseful.",
        "Dramatic and emotional.",
        "Witty and clever.",
        "Surprising. Include a small plot twist at the end.",
        "Absurd and imaginative (like a strange dream)."
    ];
    const randomTone = TONES[Math.floor(Math.random() * TONES.length)];

    // --- 3. LEVEL PROMPTS ---
    const CEFR_PROMPTS = {
      "A1": `Act as a creative writer for beginners. Write a story in French about: {TOPIC}.
Constraints for A1:
- Tenses: Present tense ONLY.
- Vocabulary: Basic but creative.
- Tone: {TONE}
- Length: {LENGTH}`,

      "A2": `Act as a creative writer for elementary learners. Write a story in French about: {TOPIC}.
Constraints for A2:
- Tenses: Présent & Passé Composé.
- Tone: {TONE}
- Length: {LENGTH}`,

      "B1": `Act as a storyteller. Write an engaging story in French about: {TOPIC}.
Constraints for B1:
- Tenses: Mix Past tenses. Use connectors.
- Tone: {TONE}
- Length: {LENGTH}`,

      "B2": `Act as a French author. Write a story in French about: {TOPIC}.
Constraints for B2:
- Complex grammar allowed (Subjonctif).
- Tone: {TONE}
- Length: {LENGTH}`,

      "C1": `Act as a skilled French novelist. Write a sophisticated story in French about: {TOPIC}.
Constraints for C1:
- Style: Literary and fluid.
- Tone: {TONE}
- Length: {LENGTH}`,

      "C2": `Act as a famous French literature author (like Proust or Hugo). Write a masterpiece about: {TOPIC}.
Constraints for C2:
- Use Passé Simple, Subjonctif Imparfait.
- Vocabulary: Archaic, rare, highly specific.
- Tone: {TONE}
- Length: {LENGTH}`
    };

    // --- 4. LOGIK ZUSAMMENBAUEN ---
    const cleanLevel = level.split(' ')[0]; 
    let basePrompt = "";

    if (cleanLevel === "auto") {
        // Auto-Modus
        if (weakWords && weakWords.length > 0) {
            // A: Mit Weak Words -> Wir müssen etwas einfacher bleiben, damit die Wörter passen
            basePrompt = `Write a creative story in French about ${genre}.
            Level: Adaptive (A2-B1).
            Tone: ${randomTone}
            Length: ${lengthInstruction}
            IMPORTANT: You MUST naturally integrate these words: ${weakWords.join(", ")}.`;
        } else {
            // B: Beginner (A0) Fallback
            basePrompt = `Write a very simple, funny story in French about ${genre}.
            Level: Absolute Beginner (A0).
            Tone: ${randomTone}
            Length: ${lengthInstruction}
            Use verbs like: être, avoir, habiter, aimer. Short sentences.`;
        }
    } else {
        // Manueller Modus
        basePrompt = CEFR_PROMPTS[cleanLevel] || CEFR_PROMPTS["A2"];
        basePrompt = basePrompt.replace("{TOPIC}", genre);
        basePrompt = basePrompt.replace("{LENGTH}", lengthInstruction);
        basePrompt = basePrompt.replace("{TONE}", randomTone); // Hier kommt der Zufall rein!
        basePrompt += "\nIgnore user vocabulary. Focus purely on the story quality and level.";
    }

    // --- 5. OUTPUT ---
    const finalPrompt = `
      ${basePrompt}
      
      IMPORTANT OUTPUT RULES:
      1. Return ONLY a raw JSON object.
      2. Story text must be PLAIN TEXT. Do NOT use markdown bolding (**word**) or asterisks.
      3. JSON Structure:
      {
        "title": "French Title",
        "text": "The story text...",
        "quiz": [
          { "question": "Question in English?", "options": ["A", "B", "C"], "correctIndex": 0 },
          { "question": "Question in English?", "options": ["A", "B", "C"], "correctIndex": 0 },
          { "question": "Question in English?", "options": ["A", "B", "C"], "correctIndex": 0 }
        ]
      }
    `;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents: [{ parts: [{ text: finalPrompt }] }] })
      }
    );

    const data = await response.json();
    if (!data.candidates) throw new Error("No response from AI");

    let rawText = data.candidates[0].content.parts[0].text;
    rawText = rawText.replace(/```json/g, '').replace(/```/g, '').trim();

    return new Response(rawText, { headers: { "Content-Type": "application/json" } });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}