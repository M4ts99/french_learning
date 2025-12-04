/* grammar_data.js */

const GRAMMAR_DATA = {
    "a1_01": {
        meta: {
            title: "Nouns & Articles",
            tags: ["Basics", "Gender", "A1"],
            color: "text-blue-600 bg-blue-50"
        },

        // --- TAB 1: LEARN ---
        learn: {
            cheat_sheet: {
                summary: "In French, every noun has a gender: Masculine or Feminine. The article must match the gender.",
                key_rule: "🔥 Golden Rule: Nouns ending in '-e' are usually feminine (une table). Others are usually masculine (un café)."
            },
            explanation: [
                {
                    type: "text",
                    content: "There are two types of articles: Definite (The) and Indefinite (A/An)."
                },
                {
                    type: "table",
                    headers: ["Type", "Masculine (M)", "Feminine (F)", "Plural (Pl)"],
                    rows: [
                        ["Definite (The)", "le (l')", "la (l')", "les"],
                        ["Indefinite (A/An)", "un", "une", "des"]
                    ]
                },
                {
                    type: "warning",
                    title: "⚠️ The Vowel Clash",
                    content: "If a singular word starts with a vowel (a, e, i, o, u) or 'h', 'le' and 'la' become l'. Example: l'école (the school), l'hôtel."
                },
                {
                    type: "text",
                    content: "For plural words, it is always 'les' or 'des', regardless of gender."
                }
            ]
        },

        // --- TAB 2: PRACTICE ---
        practice: [
            // Exercise 1: Simple Choice (Gender)
            {
                id: "ex_1",
                type: "choice",
                question: "Choose the correct article for: ___ garçon (boy)",
                options: ["Le", "La", "Les"],
                correct: 0, // Index 0 -> Le
                hint: "Boy is masculine."
            },
            // Exercise 2: Vowel Rule (Choice)
            {
                id: "ex_2",
                type: "choice",
                question: "___ homme (man)",
                options: ["Le", "La", "L'"],
                correct: 2, // Index 2 -> L'
                hint: "Watch out! 'Homme' starts with a silent H."
            },
            // Exercise 3: Indefinite (Input)
            {
                id: "ex_3",
                type: "input",
                question: "C'est ___ (a) banane.",
                answer: "une",
                hint: "Banane ends with -e, so it's likely feminine."
            },
            // Exercise 4: Plural (Choice)
            {
                id: "ex_4",
                type: "choice",
                question: "J'aime ___ (the) pommes.",
                options: ["le", "la", "les"],
                correct: 2,
                hint: "Pommes ends in 's', so it's plural."
            },
            // Exercise 5: Sentence Sorting
            {
                id: "ex_5",
                type: "sort",
                question: "Build the sentence: 'The cat is black'",
                blocks: ["chat", "Le", "noir", "est"],
                correct_order: ["Le", "chat", "est", "noir"], // Muss exakt matchen
                hint: "Start with the article (Le)."
            }
        ]
    },
    "a1_02": {
        meta: {
            title: "Subject Pronouns",
            tags: ["Basics", "People", "A1"],
            color: "text-blue-600 bg-blue-50"
        },

        // --- TAB 1: LEARN ---
        learn: {
            cheat_sheet: {
                summary: "Subject pronouns replace the person doing the action (e.g., 'Kevin' becomes 'He').",
                key_rule: "🔥 Golden Rule: Use 'Tu' for friends/family. Use 'Vous' for strangers, elders, or plural 'you'."
            },
            explanation: [
                {
                    type: "text",
                    content: "Here is the list of all subject pronouns in French:"
                },
                {
                    type: "table",
                    headers: ["Person", "Singular (1 person)", "Plural (Multiple)"],
                    rows: [
                        ["1st (Me/Us)", "Je (I)", "Nous (We)"],
                        ["2nd (You)", "Tu (You - informal)", "Vous (You - formal/plural)"],
                        ["3rd (Him/Her)", "Il (He) / Elle (She)", "Ils (They - masc/mixed)"],
                        ["3rd (Special)", "On (We - informal)", "Elles (They - female only)"]
                    ]
                },
                {
                    type: "warning",
                    title: "⚠️ The 'On' vs 'Nous'",
                    content: "'Nous' is the formal word for 'We'. In daily spoken French, everyone uses 'On' instead. Example: 'On va au cinéma' (We go to the movies)."
                },
                {
                    type: "warning",
                    title: "⚠️ The Group Rule",
                    content: "If a group has 100 women and 1 man, you use the masculine plural 'Ils'. 'Elles' is strictly for 100% female groups."
                }
            ]
        },

        // --- TAB 2: PRACTICE ---
        practice: [
            // Exercise 1: Gender Replacement
            {
                id: "ex_1",
                type: "choice",
                question: "Replace the name: 'Sophie' est belle.",
                options: ["Il", "Elle", "Ils"],
                correct: 1, // Elle
                hint: "Sophie is a girl's name."
            },
            // Exercise 2: Formal vs Informal
            {
                id: "ex_2",
                type: "choice",
                question: "You are talking to your boss. Which 'You' do you use?",
                options: ["Tu", "Vous", "Il"],
                correct: 1, // Vous
                hint: "It must be formal."
            },
            // Exercise 3: The Mixed Group Rule
            {
                id: "ex_3",
                type: "choice",
                question: "Marc et Marie (They) sont ici.",
                options: ["Ils", "Elles", "Nous"],
                correct: 0, // Ils
                hint: "There is at least one male in the group, so it becomes masculine."
            },
            // Exercise 4: Simple Translation (Input)
            {
                id: "ex_4",
                type: "input",
                question: "Translate 'I' into French.",
                answer: "je",
                hint: "It's a very short word."
            },
            // Exercise 5: Sentence Sorting
            {
                id: "ex_5",
                type: "sort",
                question: "Build the sentence: 'We speak French'",
                blocks: ["Nous", "parlons", "français", "Tu"],
                correct_order: ["Nous", "parlons", "français"],
                hint: "Start with the pronoun for 'We'."
            }
        ]
    },
};