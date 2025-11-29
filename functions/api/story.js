export async function onRequestPost(context) {
  try {
    const { genre, level, weakWords, length } = await context.request.json();
    const apiKey = context.env.GEMINI_API_KEY;

    if (!apiKey) return new Response(JSON.stringify({ error: "Key missing" }), { status: 500 });

    // 1. LÄNGE DEFINIEREN
    let lengthInstruction = "approximately 150 words";
    if (length === "short") lengthInstruction = "approximately 60-80 words";
    if (length === "long") lengthInstruction = "approximately 300 words";

    // 2. PROMPTS (Deine definierten Level)
const CEFR_PROMPTS = {
      "A1": `Act as a French language teacher for absolute beginners. Write a short story in French about the topic: {TOPIC}.
Constraints for CEFR Level A1:
- Tenses: Use ONLY the Présent de l'indicatif. Avoid past/future.
- Vocabulary: High-frequency, basic words (top 500).
- Sentence Structure: Very short, simple (Subject-Verb-Object).
- Tone: Clear, slow-paced.
- Length: {LENGTH}.`,

      "A2": `Act as a French language teacher for elementary students. Write a story in French about the topic: {TOPIC}.
Constraints for CEFR Level A2:
- Tenses: Présent, Passé Composé, Futur Proche. Avoid Imparfait/Passé Simple.
- Vocabulary: Everyday vocabulary.
- Connectors: Simple (et, mais, parce que).
- Length: {LENGTH}.`,

      "B1": `Act as a French language teacher for intermediate students. Write an engaging story in French about the topic: {TOPIC}.
Constraints for CEFR Level B1:
- Tenses: Mix Passé Composé and Imparfait correctly. Use Futur Simple.
- Complexity: Relative clauses (qui, que, où).
- Length: {LENGTH}.`,

      "B2": `Act as a French author writing for upper-intermediate learners. Write a story in French about the topic: {TOPIC}.
Constraints for CEFR Level B2:
- Grammar: Full range including Subjonctif.
- Vocabulary: Varied, precise.
- Connectors: Logical (cependant, par conséquent).
- Length: {LENGTH}.`,

      "C1": `Act as a skilled French writer. Write a sophisticated story in French about the topic: {TOPIC}.
Constraints for CEFR Level C1:
- Style: Fluid, complex structure.
- Vocabulary: Nuanced, idioms.
- Tone: Irony, implicit meanings.
- Length: {LENGTH}.`,

      "C2": `Act as a celebrated French novelist. Write a masterfully crafted story in French about the topic: {TOPIC}.
Constraints for CEFR Level C2:
- Proficiency: Native speaker level (Literature).
- Vocabulary: Rare, poetic, specific.
- Freedom: Use Passé Simple, Subjonctif Imparfait.
- Length: {LENGTH}.`
    };

    // 3. LOGIK
    const cleanLevel = level.split(' ')[0]; 
    let basePrompt = "";

    if (cleanLevel === "auto") {
        // --- AUTO MODUS ---
        if (weakWords && weakWords.length > 0) {
            // Fall A: User hat schon Wörter gelernt -> Nutze sie!
            basePrompt = `Act as a helpful tutor. Write a story in French about ${genre}.
            Level: Adaptive (A2-B1).
            Length: ${lengthInstruction}.
            Integrate these words naturally: ${weakWords.join(", ")}.
            Ensure the story is 100% in French.`;
        } else {
            // Fall B: User ist neu (0 Wörter) -> ABSOLUTE BEGINNER (A0) FIX
            // Hier erzwingen wir "Je m'appelle..." Stil
            basePrompt = `Act as a French teacher for total beginners (Level A0).
            Write a very simple story in French about ${genre}.
            
            Strict Constraints:
            1. The story MUST be written in FRENCH (not English).
            2. Use extremely basic sentence structures (Subject + Verb + Attribute).
            3. Use primarily fundamental verbs: être, avoir, s'appeler, habiter, aimer, aller.
            4. Style: "Je m'appelle Paul. J'habite à Paris. J'aime le café."
            5. Length: ${lengthInstruction}.
            Ensure the story is 100% in French.
            `;
        }
    } else {
        // --- MANUELLER MODUS ---
        basePrompt = CEFR_PROMPTS[cleanLevel] || CEFR_PROMPTS["A2"];
        basePrompt = basePrompt.replace("{TOPIC}", genre);
        basePrompt = basePrompt.replace("{LENGTH}", lengthInstruction);
        basePrompt += "\nIgnore user vocabulary. Write strictly in French according to the level.";
    }

    // 4. OUTPUT FORMATIERUNG
    const finalPrompt = `
      ${basePrompt}
      
      IMPORTANT OUTPUT RULES:
      1. Return ONLY a raw JSON object.
      2. Do NOT use markdown formatting (no **bold**, no *italics*). Plain text only.
      3. JSON Structure:
      {
        "title": "French Title",
        "text": "The story text (in French)...",
        "quiz": [
          { "question": "Question in English?", "options": ["A", "B", "C"], "correctIndex": 0 },
          { "question": "Question in English?", "options": ["A", "B", "C"], "correctIndex": 0 },
          { "question": "Question in English?", "options": ["A", "B", "C"], "correctIndex": 0 }
        ]
      }
    `;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
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