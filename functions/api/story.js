export async function onRequestPost(context) {
  try {
    const { genre, level, weakWords } = await context.request.json();
    const apiKey = context.env.GEMINI_API_KEY;

    if (!apiKey) return new Response(JSON.stringify({ error: "Key missing" }), { status: 500 });

    const wordsString = weakWords && weakWords.length > 0 ? weakWords.join(", ") : "common A1 words";

    const prompt = `
      Task: Write a short, engaging story in French for a language learner.
      Level: ${level || "A1"} (Keep grammar simple).
      Genre: ${genre}.
      Mandatory Vocabulary to include: ${wordsString}.
      
      Structure:
      1. Title (French)
      2. Story Text (French, approx 100-150 words). Mark the mandatory vocabulary in bold markdown (**word**) if possible.
      3. Quiz: 3 multiple choice questions in English about the story content.
      
      Format: Return ONLY a raw JSON object with this structure:
      {
        "title": "...",
        "text": "...",
        "quiz": [
          { 
            "question": "Why did Paul run?", 
            "options": ["He was hungry", "He saw a ghost", "It was raining"], 
            "correctIndex": 1 
          }
        ]
      }
    `;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
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

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}