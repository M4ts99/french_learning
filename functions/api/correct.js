export async function onRequestPost(context) {
  try {
    const { text } = await context.request.json();
    const apiKey = context.env.GEMINI_API_KEY;

    const prompt = `
      Role: Strict French Language Teacher.
      Task: Correct the following French text provided by a student.
      Input: "${text}"
      
      Format: Return ONLY a raw JSON object:
      {
        "corrected": "The corrected sentence",
        "explanation": "Brief explanation of mistakes (in English). Keep it short and helpful."
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