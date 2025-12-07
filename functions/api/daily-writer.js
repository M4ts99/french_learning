import { getGeminiUrl } from './_config.js';

export async function onRequestPost(context) {
  try {
    const { grammarTopic, grammarTitle, level } = await context.request.json();
    const apiKey = context.env.GEMINI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "API Key missing" }), { status: 500 });
    }

    // CEFR Level-specific scenarios - simpler for beginners, more complex for advanced
    const LEVEL_SCENARIOS = {
      A1: [
        { type: "message", recipient: "a friend", context: "casual", topic: "simple greeting or plans" },
        { type: "list", recipient: "yourself", context: "personal", topic: "shopping list or daily schedule" },
        { type: "message", recipient: "a classmate", context: "casual", topic: "meeting for coffee" },
        { type: "postcard", recipient: "family", context: "personal", topic: "short vacation greeting" },
        { type: "message", recipient: "a friend", context: "casual", topic: "what you like to eat or drink" },
        { type: "note", recipient: "a roommate", context: "casual", topic: "simple household reminder" }
      ],
      A2: [
        { type: "email", recipient: "a friend", context: "personal", topic: "weekend plans" },
        { type: "message", recipient: "a classmate", context: "casual", topic: "homework help" },
        { type: "email", recipient: "family members", context: "personal", topic: "recent activities" },
        { type: "message", recipient: "a neighbor", context: "casual", topic: "small request or invitation" },
        { type: "postcard", recipient: "a friend", context: "personal", topic: "vacation experience" },
        { type: "email", recipient: "a pen pal", context: "personal", topic: "describing your city or home" }
      ],
      B1: [
        { type: "email", recipient: "a teacher", context: "semi-formal", topic: "course question or feedback" },
        { type: "email", recipient: "a friend", context: "personal", topic: "giving advice on a problem" },
        { type: "message", recipient: "a colleague", context: "semi-formal", topic: "work coordination" },
        { type: "letter", recipient: "a hotel", context: "formal", topic: "reservation inquiry" },
        { type: "email", recipient: "a friend", context: "personal", topic: "sharing an experience or opinion" },
        { type: "review", recipient: "other customers", context: "public", topic: "restaurant or product review" }
      ],
      B2: [
        { type: "email", recipient: "your boss", context: "professional", topic: "project update or proposal" },
        { type: "letter", recipient: "a company", context: "formal", topic: "complaint or inquiry" },
        { type: "email", recipient: "a doctor's office", context: "formal", topic: "appointment or medical question" },
        { type: "essay", recipient: "a teacher", context: "academic", topic: "opinion piece" },
        { type: "email", recipient: "a colleague", context: "professional", topic: "discussing work challenges" },
        { type: "letter", recipient: "an organization", context: "formal", topic: "volunteer application or feedback" }
      ],
      C1: [
        { type: "report", recipient: "management", context: "professional", topic: "analysis or recommendation" },
        { type: "essay", recipient: "academic audience", context: "formal", topic: "argumentative essay" },
        { type: "letter", recipient: "a newspaper", context: "public", topic: "letter to the editor" },
        { type: "email", recipient: "business partners", context: "professional", topic: "negotiation or proposal" },
        { type: "article", recipient: "readers", context: "public", topic: "explaining a complex topic" },
        { type: "critique", recipient: "academic audience", context: "formal", topic: "book or film analysis" }
      ]
    };

    // Level-specific vocabulary and grammar constraints
    const LEVEL_CONSTRAINTS = {
      A1: {
        vocabHint: "Use only the most basic vocabulary: numbers, colors, family, food, weather, days, simple adjectives (bon, petit, grand).",
        grammarHint: "Keep it simple: present tense, basic articles (le, la, les), simple negation (ne...pas), basic prepositions (à, de, dans).",
        complexity: "Very short sentences. Maximum 5-8 words per sentence.",
        emotions: "Only basic: content(e), triste, fatigué(e)",
        minWords: 25,
        maxWords: 50,
        timeMinutes: 8
      },
      A2: {
        vocabHint: "Basic everyday vocabulary: daily activities, hobbies, transport, shopping, simple descriptions.",
        grammarHint: "Present tense, passé composé with avoir/être, futur proche (aller + infinitif), common reflexive verbs.",
        complexity: "Short to medium sentences. Can link with et, mais, parce que.",
        emotions: "Can express: heureux, content, inquiet, surpris",
        minWords: 40,
        maxWords: 70,
        timeMinutes: 10
      },
      B1: {
        vocabHint: "Wider vocabulary: work, health, travel, opinions, comparisons.",
        grammarHint: "All past tenses (passé composé, imparfait), conditional, relative pronouns (qui, que), indirect speech.",
        complexity: "Can write connected paragraphs. Use transition words.",
        emotions: "Can express nuanced feelings and opinions",
        minWords: 60,
        maxWords: 100,
        timeMinutes: 12
      },
      B2: {
        vocabHint: "Advanced vocabulary: abstract concepts, professional terms, idioms.",
        grammarHint: "Subjunctive mood, plus-que-parfait, complex conditionals, passive voice.",
        complexity: "Complex sentences with multiple clauses. Formal register when needed.",
        emotions: "Can express subtle emotions and complex opinions with nuance",
        minWords: 80,
        maxWords: 150,
        timeMinutes: 15
      },
      C1: {
        vocabHint: "Sophisticated vocabulary: specialized terms, nuanced expressions, literary language.",
        grammarHint: "All tenses including passé simple (recognition), subjunctive variations, stylistic inversions.",
        complexity: "Elegant, flowing prose. Varied sentence structure. Persuasive or analytical writing.",
        emotions: "Full range of emotional and intellectual expression",
        minWords: 100,
        maxWords: 200,
        timeMinutes: 20
      }
    };

    // Determine effective level (default to A2 if unknown)
    const effectiveLevel = ['A1', 'A2', 'B1', 'B2', 'C1'].includes(level) ? level : 'A2';
    const scenarios = LEVEL_SCENARIOS[effectiveLevel] || LEVEL_SCENARIOS.A2;
    const constraints = LEVEL_CONSTRAINTS[effectiveLevel] || LEVEL_CONSTRAINTS.A2;

    const randomScenario = scenarios[Math.floor(Math.random() * scenarios.length)];

    const prompt = `You are a French language learning expert creating a writing exercise.

STUDENT LEVEL: ${effectiveLevel} (CEFR Framework)
This is CRITICAL - you must design the task appropriate for this level!

LEVEL CONSTRAINTS FOR ${effectiveLevel}:
- Vocabulary: ${constraints.vocabHint}
- Grammar: ${constraints.grammarHint}  
- Complexity: ${constraints.complexity}
- Emotional range: ${constraints.emotions}

SPECIFIC GRAMMAR FOCUS: ${grammarTitle || 'General'} (ID: ${grammarTopic || 'none'})

WRITING SCENARIO:
- Type: ${randomScenario.type}
- Recipient: ${randomScenario.recipient}
- Context: ${randomScenario.context}
- Topic area: ${randomScenario.topic}

CRITICAL REQUIREMENTS:
1. ALL instructions and task descriptions MUST be in ENGLISH
2. The student will write their response in FRENCH
3. The tasks MUST be achievable with ${effectiveLevel}-level vocabulary and grammar
4. DO NOT ask students to express complex emotions, abstract thoughts, or use vocabulary beyond their level
5. For A1: Only ask for very basic, concrete information (names, numbers, simple preferences)
6. For A2: Can ask about daily life, simple past events, basic plans
7. For B1+: Can include opinions, explanations, and more nuanced expression

TASK:
Create a writing mission appropriate for ${effectiveLevel} level. The mission should:
1. Have ONE clear main task in English (simple for A1, more detailed for higher levels)
2. Include exactly 5 specific mini-tasks in English
3. Each mini-task should be achievable with ${effectiveLevel} vocabulary
4. If grammar focus is "${grammarTitle}", ensure mini-tasks naturally use this structure

OUTPUT FORMAT (Return ONLY valid JSON, no markdown):
{
  "mainTask": "A clear description IN ENGLISH (keep very simple for A1, can be more detailed for B1+)",
  "topic": "Short topic label in English",
  "recipient": "${randomScenario.recipient}",
  "type": "${randomScenario.type}",
  "level": "${effectiveLevel}",
  "grammarFocus": "${grammarTitle || 'General French'}",
  "grammarExplanation": "Brief explanation IN ENGLISH of when/how to use this grammar (1 sentence)",
  "miniTasks": [
    "First mini-task IN ENGLISH (use simple verbs like: say, write, tell, ask, mention)",
    "Second mini-task IN ENGLISH",
    "Third mini-task IN ENGLISH",
    "Fourth mini-task IN ENGLISH", 
    "Fifth mini-task IN ENGLISH"
  ],
  "bonusWord": "A relevant French word the student knows at ${effectiveLevel} level",
  "minWords": ${constraints.minWords},
  "timeMinutes": ${constraints.timeMinutes},
  "exampleOpener": "A short example opening sentence IN FRENCH at ${effectiveLevel} level"
}

EXAMPLES OF APPROPRIATE TASKS BY LEVEL:
- A1: "Write your name and age" ✓ | "Describe your emotions" ✗
- A1: "Say what you like to eat" ✓ | "Explain why you prefer it" ✗
- A2: "Tell what you did yesterday" ✓ | "Reflect on how it made you feel" ✗
- B1: "Give your opinion about..." ✓ | "Analyze the societal implications" ✗
- B2+: "Argue for or against..." ✓ | "Write a philosophical treatise" ✗

Make the mission practical and achievable for a ${effectiveLevel} student!`;

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
