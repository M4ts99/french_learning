import { getGeminiUrl } from './_config.js';

export async function onRequestPost(context) {
  try {
    const { grammarTopic, grammarTitle, level } = await context.request.json();
    const apiKey = context.env.GEMINI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "API Key missing" }), { status: 500 });
    }

    // Scenarios für authentische Situationen
    const SCENARIOS = [
      { type: "email", recipient: "a friend", context: "personal" },
      { type: "email", recipient: "your boss", context: "professional" },
      { type: "message", recipient: "a neighbor", context: "casual" },
      { type: "letter", recipient: "a hotel", context: "formal" },
      { type: "email", recipient: "a teacher", context: "academic" },
      { type: "message", recipient: "a colleague", context: "semi-formal" },
      { type: "email", recipient: "a doctor's office", context: "formal" },
      { type: "message", recipient: "a classmate", context: "casual" },
      { type: "letter", recipient: "a company", context: "formal" },
      { type: "email", recipient: "family members", context: "personal" }
    ];

    const randomScenario = SCENARIOS[Math.floor(Math.random() * SCENARIOS.length)];

    const prompt = `You are a French language learning expert creating a writing exercise.

CONTEXT:
- Student Level: ${level || 'A2-B1'}
- Grammar Focus: ${grammarTitle || 'General'} (ID: ${grammarTopic || 'none'})
- Writing Type: ${randomScenario.type}
- Recipient: ${randomScenario.recipient}
- Context: ${randomScenario.context}

CRITICAL REQUIREMENTS:
1. ALL instructions and task descriptions MUST be in ENGLISH
2. The student will write their response in FRENCH
3. The grammar focus "${grammarTitle || 'General'}" MUST be explicitly practiced in the mini-tasks
4. Design the mini-tasks so the student HAS to use the grammar structure

TASK:
Create an engaging, realistic writing mission for a French learner. The mission should:
1. Have ONE clear main task in English (the big picture scenario)
2. Include exactly 5 specific mini-tasks in English that require using "${grammarTitle || 'basic French grammar'}"
3. Each mini-task should explicitly require the grammar focus
4. Be achievable in 5-15 minutes of writing

OUTPUT FORMAT (Return ONLY valid JSON, no markdown):
{
  "mainTask": "A clear description IN ENGLISH of what to write (1-2 sentences)",
  "topic": "Short topic label in English (e.g., 'Vacation Request', 'Dinner Invitation')",
  "recipient": "${randomScenario.recipient}",
  "type": "${randomScenario.type}",
  "grammarFocus": "${grammarTitle || 'General French'}",
  "grammarExplanation": "Brief explanation IN ENGLISH of when/how to use this grammar (1 sentence)",
  "miniTasks": [
    "First task IN ENGLISH requiring the grammar (e.g., 'Use passé composé to describe what you did yesterday')",
    "Second task IN ENGLISH requiring the grammar",
    "Third task IN ENGLISH",
    "Fourth task IN ENGLISH", 
    "Fifth task IN ENGLISH"
  ],
  "bonusWord": "A relevant French word to include",
  "minWords": 50,
  "timeMinutes": 10,
  "exampleOpener": "A short example opening sentence IN FRENCH the student could use"
}

IMPORTANT: The mini-tasks are instructions for the student, so they must be in English. The exampleOpener is an example of what to write, so it's in French.
Make the mission interesting and practical - something the student could actually encounter in real life!`;

    const response = await fetch(
      getGeminiUrl(apiKey),
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.9,
            topP: 0.95
          }
        })
      }
    );

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error.message);
    }

    let rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!rawText) {
      throw new Error("No mission generated");
    }

    // Clean up markdown formatting
    rawText = rawText.replace(/```json/g, '').replace(/```/g, '').trim();

    // Validate JSON
    const parsed = JSON.parse(rawText);
    
    // Ensure all required fields exist
    if (!parsed.mainTask || !parsed.miniTasks || parsed.miniTasks.length < 5) {
      throw new Error("Invalid mission format");
    }

    return new Response(JSON.stringify(parsed), { 
      headers: { "Content-Type": "application/json" } 
    });

  } catch (err) {
    console.error("Daily Writer API Error:", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
