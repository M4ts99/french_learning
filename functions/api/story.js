export async function onRequestPost(context) {
  try {
    const { genre, level, weakWords, length } = await context.request.json();
    const apiKey = context.env.GEMINI_API_KEY;

    if (!apiKey) return new Response(JSON.stringify({ error: "Key missing" }), { status: 500 });

    // 1. LÄNGE DEFINIEREN (Basierend auf Slider)
    let lengthInstruction = "approximately 150 words";
    if (length === "short") lengthInstruction = "approximately 60-80 words";
    if (length === "long") lengthInstruction = "approximately 300-400 words";

    // 2. PROMPTS (Mit {LENGTH} Platzhalter)
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
- Vocabulary: Everyday vocabulary (family, shopping, routine).
- Connectors: Simple (et, mais, parce que, d'abord).
- Length: {LENGTH}.`,

      "B1": `Act as a French language teacher for intermediate students. Write an engaging story in French about the topic: {TOPIC}.
Constraints for CEFR Level B1:
- Tenses: Mix Passé Composé and Imparfait correctly. Use Futur Simple.
- Vocabulary: Feelings, opinions, plans.
- Complexity: Relative clauses (qui, que, où).
- Length: {LENGTH}.`,

      "B2": `Act as a French author writing for upper-intermediate learners. Write a story in French about the topic: {TOPIC}.
Constraints for CEFR Level B2:
- Grammar: Full range including Plus-que-parfait, Conditionnel, Subjonctif.
- Vocabulary: Varied, precise, no repetition.
- Connectors: Logical (cependant, par conséquent).
- Content: Abstract ideas allowed.
- Length: {LENGTH}.`,

      "C1": `Act as a skilled French writer. Write a sophisticated story in French about the topic: {TOPIC}.
Constraints for CEFR Level C1:
- Style: Fluid, complex structure. Passé Simple optional but stylish.
- Vocabulary: Nuanced, extensive, idioms.
- Tone: Irony, implicit meanings allowed.
- Syntax: Inversion, varied devices.
- Length: {LENGTH}.`,

      "C2": `Act as a celebrated French novelist. Write a masterfully crafted story in French about the topic: {TOPIC}.
Constraints for CEFR Level C2:
- Proficiency: Indistinguishable from a highly educated native speaker.
- Vocabulary: Rare, poetic, specific. Play with registers.
- Depth: Cultural references, metaphors, layered meaning.
- Freedom: Use the full breadth of the language (Passé Simple, Subjonctif Imparfait).
- Length: {LENGTH}.`
    };

    // 3. LOGIK
    const cleanLevel = level.split(' ')[0]; 
    let basePrompt = "";

    if (cleanLevel === "auto") {
        // Auto-Modus: User-Wörter nutzen
        const vocabString = (weakWords && weakWords.length > 0) 
            ? `Integrate these words naturally: ${weakWords.join(", ")}.` 
            : "Use standard A2/B1 vocabulary.";

        basePrompt = `Act as a helpful tutor. Write a story about ${genre}.
        Level: Adaptive (A2-B1).
        Length: ${lengthInstruction}.
        ${vocabString}`;
    } else {
        // Manueller Modus: Streng nach deinen Vorlagen
        basePrompt = CEFR_PROMPTS[cleanLevel] || CEFR_PROMPTS["A2"];
        
        // Platzhalter ersetzen
        basePrompt = basePrompt.replace("{TOPIC}", genre);
        basePrompt = basePrompt.replace("{LENGTH}", lengthInstruction);
        
        // Sicherstellen, dass keine User-Wörter genutzt werden
        basePrompt += "\nIgnore any user-provided vocabulary lists. Focus strictly on the requested style and level.";
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