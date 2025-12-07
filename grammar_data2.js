/* grammar_data2.js - A1 Grammar Topics (32 Themen) */

const GRAMMAR_DATA_A1 = {
    
    // ═══════════════════════════════════════════════════════════════
    // BASICS (1-6)
    // ═══════════════════════════════════════════════════════════════
    
    "a1_01": {
        meta: { 
            title: "Nouns & Gender", 
            tags: ["Basics", "Gender", "A1"], 
            color: "text-blue-600 bg-blue-50"
        },
        learn: {
            cheat_sheet: {
                summary: `In French, every noun has a gender: **masculin** (masculine) or **féminin** (feminine). There is no neutral gender like in English!`,
                key_rule: "🔵 **Masculin → le/un** | 🔴 **Féminin → la/une** | ⚡ **Before vowel → l'/un/une**",
                pro_tip: "💡 **Golden Rule:** Always learn new words WITH their article! Not 'maison' but 'la maison'. This is the only reliable way to remember gender."
            },
            explanation: [
                { type: "heading", content: "Why is Gender Important?" },
                { type: "text", content: "Gender affects **everything** in French: articles, adjectives, pronouns, and even some verb forms. Using the wrong gender sounds immediately wrong to native speakers - like saying 'him' instead of 'her' in English." },
                
                { type: "example", fr: "le petit chat", en: "the small cat", note: "petit = masculine form of 'small'" },
                { type: "example", fr: "la petite maison", en: "the small house", note: "petite = feminine form (added -e)" },
                
                { type: "heading", content: "The Definite Articles" },
                { type: "table", headers: ["Gender", "Article", "Example"], rows: [
                    ["Masculine", "le", "le livre (the book)"],
                    ["Feminine", "la", "la table (the table)"],
                    ["Before vowel", "l'", "l'école (the school)"]
                ]},
                
                { type: "heading", content: "Common Masculine Endings" },
                { type: "table", headers: ["Ending", "Examples", "Exceptions"], rows: [
                    ["-age", "le voyage, le garage, le fromage", "la plage, la cage, l'image"],
                    ["-ment", "le moment, le gouvernement", "—"],
                    ["-eau", "le bateau, le gâteau, le château", "l'eau (f), la peau (f)"],
                    ["-isme", "le tourisme, le capitalisme", "— (always masculine!)"],
                    ["-ier", "le papier, le cahier, le calendrier", "—"]
                ]},
                
                { type: "heading", content: "Common Feminine Endings" },
                { type: "table", headers: ["Ending", "Examples", "Exceptions"], rows: [
                    ["-tion / -sion", "la nation, la télévision, la question", "—"],
                    ["-té", "la liberté, la beauté, la santé", "le côté, l'été"],
                    ["-ure", "la nature, la culture, la voiture", "—"],
                    ["-ette", "la baguette, la cigarette", "—"],
                    ["-ence / -ance", "la science, la France, la patience", "le silence"]
                ]},
                
                { type: "heading", content: "Natural Gender" },
                { type: "text", content: "People and animals often have **natural gender** - the grammatical gender matches their biological sex:" },
                { type: "example", fr: "le garçon / la fille", en: "the boy / the girl", note: "Natural gender" },
                { type: "example", fr: "le père / la mère", en: "the father / the mother", note: "Natural gender" },
                { type: "example", fr: "le chat / la chatte", en: "the male cat / the female cat", note: "Same word, different ending" },
                
                { type: "heading", content: "Elision (l')" },
                { type: "text", content: "When a noun starts with a **vowel** (a, e, i, o, u) or a **silent h**, we use **l'** instead of le/la. This is called *élision* - the vowel is dropped to make pronunciation smoother." },
                { type: "example", fr: "l'école (la école ❌)", en: "the school", note: "Starts with 'é' - use l'" },
                { type: "example", fr: "l'homme (le homme ❌)", en: "the man", note: "Silent 'h' - use l'" },
                { type: "example", fr: "l'ami / l'amie", en: "the friend (m/f)", note: "Both use l' but different gender!" },
                
                { type: "warning", content: "With **l'**, you can't tell the gender just by looking! l'ami (m) and l'amie (f) look similar. You must memorize the gender separately." },
                
                { type: "heading", content: "Tricky Cases & Exceptions" },
                { type: "text", content: "Some words don't follow the patterns. Here are common exceptions to memorize:" },
                { type: "rule_box", title: "🎯 Must-Know Exceptions", content: "**la plage** (beach) - despite -age\n**la cage** (cage) - despite -age\n**l'eau** (water) - despite -eau\n**la peau** (skin) - despite -eau\n**le silence** - despite -ence\n**le côté** (side) - despite -té" },
                
                { type: "tip", content: "When you look up a new word in a dictionary, **always note the gender**. Write it down as 'la maison' not just 'maison'. Your future self will thank you!" }
            ],
            vocabulary: [
                { fr: "le chat", en: "the cat", type: "masculine" },
                { fr: "le chien", en: "the dog", type: "masculine" },
                { fr: "le livre", en: "the book", type: "masculine" },
                { fr: "le garçon", en: "the boy", type: "masculine" },
                { fr: "le soleil", en: "the sun", type: "masculine" },
                { fr: "la maison", en: "the house", type: "feminine" },
                { fr: "la voiture", en: "the car", type: "feminine" },
                { fr: "la table", en: "the table", type: "feminine" },
                { fr: "la fille", en: "the girl", type: "feminine" },
                { fr: "la lune", en: "the moon", type: "feminine" },
                { fr: "l'école", en: "the school", type: "vowel" },
                { fr: "l'ami", en: "the friend", type: "vowel" },
                { fr: "l'eau", en: "the water", type: "exception (f)" },
                { fr: "la plage", en: "the beach", type: "exception (f)" }
            ],
        },
        practice: [
            // --- LESSON 1: Basics (Recognition) - Multiple Choice ---
            // Focus: Simple recognition of le/la/l' for basic words
            { id: "a1_01_q01", type: "choice", question: "Which article? ___ chat (cat)", options: ["le", "la", "l'"], correct: "le", hint: "Cat is masculine in French (le chat)." },
            { id: "a1_01_q02", type: "choice", question: "Which article? ___ maison (house)", options: ["le", "la", "l'"], correct: "la", hint: "House is feminine (la maison)." },
            { id: "a1_01_q03", type: "choice", question: "Which article? ___ livre (book)", options: ["le", "la", "l'"], correct: "le", hint: "Book is masculine." },
            { id: "a1_01_q04", type: "choice", question: "Which article? ___ école (school)", options: ["le", "la", "l'"], correct: "l'", hint: "Starts with a vowel, so use l'." },
            { id: "a1_01_q05", type: "choice", question: "Which article? ___ table (table)", options: ["le", "la", "l'"], correct: "la", hint: "Table is feminine." },
            { id: "a1_01_q06", type: "choice", question: "Which article? ___ ami (friend)", options: ["le", "la", "l'"], correct: "l'", hint: "Starts with a vowel." },
            { id: "a1_01_q07", type: "choice", question: "Which article? ___ voiture (car)", options: ["le", "la", "l'"], correct: "la", hint: "Car is feminine." },
            { id: "a1_01_q08", type: "choice", question: "Which article? ___ chien (dog)", options: ["le", "la", "l'"], correct: "le", hint: "Dog is masculine." },
            { id: "a1_01_q09", type: "choice", question: "Which article? ___ pizza", options: ["le", "la", "l'"], correct: "la", hint: "Pizza is feminine." },
            { id: "a1_01_q10", type: "choice", question: "Which article? ___ sport", options: ["le", "la", "l'"], correct: "le", hint: "Sport is masculine." },

            // --- LESSON 2: Recognizing Endings - Multiple Choice ---
            // Focus: Applying rules (-age, -tion, -eau)
            { id: "a1_01_q11", type: "choice", question: "Words ending in '-tion' are usually...", options: ["masculine (le)", "feminine (la)"], correct: "feminine (la)", hint: "Think of 'la nation'." },
            { id: "a1_01_q12", type: "choice", question: "Words ending in '-age' are usually...", options: ["masculine (le)", "feminine (la)"], correct: "masculine (le)", hint: "Think of 'le garage'." },
            { id: "a1_01_q13", type: "choice", question: "Which article? ___ fromage (cheese)", options: ["le", "la"], correct: "le", hint: "Ending is -age." },
            { id: "a1_01_q14", type: "choice", question: "Which article? ___ télévision", options: ["le", "la"], correct: "la", hint: "Ending is -sion (like -tion)." },
            { id: "a1_01_q15", type: "choice", question: "Which article? ___ bateau (boat)", options: ["le", "la"], correct: "le", hint: "Ending -eau is mostly masculine." },
            { id: "a1_01_q16", type: "choice", question: "Which article? ___ liberté (freedom)", options: ["le", "la"], correct: "la", hint: "Ending -té is mostly feminine." },
            { id: "a1_01_q17", type: "choice", question: "Which article? ___ nature", options: ["le", "la"], correct: "la", hint: "Ending -ure is feminine." },
            { id: "a1_01_q18", type: "choice", question: "Which article? ___ tourisme", options: ["le", "la"], correct: "le", hint: "-isme is always masculine." },
            { id: "a1_01_q19", type: "choice", question: "Which article? ___ baguette", options: ["le", "la"], correct: "la", hint: "Ending -ette is feminine." },
            { id: "a1_01_q20", type: "choice", question: "Which article? ___ monument", options: ["le", "la"], correct: "le", hint: "Ending -ment is masculine." },

            // --- LESSON 3: Gap Fill ---
            // Focus: Typing the article (le, la, l')
            { id: "a1_01_q21", type: "gap_fill", question: "This is the father: C'est ___ père.", answer: "le", hint: "Father is masculine." },
            { id: "a1_01_q22", type: "gap_fill", question: "This is the mother: C'est ___ mère.", answer: "la", hint: "Mother is feminine." },
            { id: "a1_01_q23", type: "gap_fill", question: "I like the hotel: J'aime ___ hôtel.", answer: "l'", hint: "Hôtel starts with silent H -> Vowel sound." },
            { id: "a1_01_q24", type: "gap_fill", question: "Here is the garden: Voici ___ jardin.", answer: "le", hint: "Garden is masculine." },
            { id: "a1_01_q25", type: "gap_fill", question: "Where is the key? Où est ___ clé ?", answer: "la", hint: "Key is feminine (la clé)." },
            { id: "a1_01_q26", type: "gap_fill", question: "He loves music: Il aime ___ musique.", answer: "la", hint: "Music is feminine." },
            { id: "a1_01_q27", type: "gap_fill", question: "The man is tall: ___ homme est grand.", answer: "L'", hint: "Homme has a silent H." },
            { id: "a1_01_q28", type: "gap_fill", question: "The apple is red: ___ pomme est rouge.", answer: "La", hint: "Pomme is feminine." },
            { id: "a1_01_q29", type: "gap_fill", question: "The train is coming: ___ train arrive.", answer: "Le", hint: "Train is masculine." },
            { id: "a1_01_q30", type: "gap_fill", question: "That is the idea: C'est ___ idée.", answer: "l'", hint: "Idea starts with a vowel." },

            // --- LESSON 4: Sentence Builder (Simple) ---
            // Focus: Building sentences, 1 Distractor
            { id: "a1_01_q31", type: "sentence_builder", question: "Build: 'The house is small.'", blocks: ["La", "maison", "est", "petite", "Le"], solution: ["La", "maison", "est", "petite"], hint: "House is feminine." },
            { id: "a1_01_q32", type: "sentence_builder", question: "Build: 'The boy is eating.'", blocks: ["Le", "garçon", "mange", "La"], solution: ["Le", "garçon", "mange"], hint: "Boy is masculine." },
            { id: "a1_01_q33", type: "sentence_builder", question: "Build: 'I like the beach.'", blocks: ["J'aime", "la", "plage", "le"], solution: ["J'aime", "la", "plage"], hint: "Plage is an exception (feminine)!" },
            { id: "a1_01_q34", type: "sentence_builder", question: "Build: 'It is a problem.'", blocks: ["C'est", "un", "problème", "une"], solution: ["C'est", "un", "problème"], hint: "Problem is masculine (Exception!)." },
            { id: "a1_01_q35", type: "sentence_builder", question: "Build: 'The water is cold.'", blocks: ["L'eau", "est", "froide", "La"], solution: ["L'eau", "est", "froide"], hint: "Water starts with a vowel -> L'eau." },
            { id: "a1_01_q36", type: "sentence_builder", question: "Build: 'The flower is beautiful.'", blocks: ["La", "fleur", "est", "belle", "le"], solution: ["La", "fleur", "est", "belle"], hint: "Flower is feminine." },
            { id: "a1_01_q37", type: "sentence_builder", question: "Build: 'Where is the bus?'", blocks: ["Où", "est", "le", "bus", "la"], solution: ["Où", "est", "le", "bus"], hint: "Bus is masculine." },
            { id: "a1_01_q38", type: "sentence_builder", question: "Build: 'This is the city.'", blocks: ["C'est", "la", "ville", "le"], solution: ["C'est", "la", "ville"], hint: "City is feminine." },
            { id: "a1_01_q39", type: "sentence_builder", question: "Build: 'The computer.'", blocks: ["L'", "ordinateur", "La", "Le"], solution: ["L'", "ordinateur"], hint: "Vowel at the beginning." },
            { id: "a1_01_q40", type: "sentence_builder", question: "Build: 'This is the coffee.'", blocks: ["C'est", "le", "café", "la"], solution: ["C'est", "le", "café"], hint: "Coffee is masculine." },

            // --- LESSON 5: Input (Typing) ---
            // Focus: Writing Word + Article correctly
            { id: "a1_01_q41", type: "input", question: "Translate: 'the boy'", answer: "le garçon", hint: "masculine" },
            { id: "a1_01_q42", type: "input", question: "Translate: 'the girl'", answer: "la fille", hint: "feminine" },
            { id: "a1_01_q43", type: "input", question: "Translate: 'the sun'", answer: "le soleil", hint: "masculine" },
            { id: "a1_01_q44", type: "input", question: "Translate: 'the moon'", answer: "la lune", hint: "feminine" },
            { id: "a1_01_q45", type: "input", question: "Translate: 'the school'", answer: "l'école", hint: "Vowel start" },
            { id: "a1_01_q46", type: "input", question: "Translate: 'the book'", answer: "le livre", hint: "masculine" },
            { id: "a1_01_q47", type: "input", question: "Translate: 'the street'", answer: "la rue", hint: "feminine" },
            { id: "a1_01_q48", type: "input", question: "Translate: 'the bag'", answer: "le sac", hint: "masculine" },
            { id: "a1_01_q49", type: "input", question: "Translate: 'the bicycle'", answer: "le vélo", hint: "masculine" },
            { id: "a1_01_q50", type: "input", question: "Translate: 'the friend (female)'", answer: "l'amie", hint: "Vowel start + e at the end" },

            // --- LESSON 6: Mixed & Tricky (Exceptions) ---
            // Focus: Exceptions and harder constructions
            { id: "a1_01_q51", type: "sentence_builder", question: "Build: 'The cage is open.' (Exception!)", blocks: ["La", "cage", "est", "ouverte", "Le"], solution: ["La", "cage", "est", "ouverte"], hint: "Cage ends in -age, but is feminine!" },
            { id: "a1_01_q52", type: "input", question: "Translate (Exception): 'the water'", answer: "l'eau", hint: "Ends in -eau, but is feminine (and vowel start)." },
            { id: "a1_01_q53", type: "choice", question: "Which word is an exception (feminine)?", options: ["le voyage", "la plage", "le garage"], correct: "la plage", hint: "Plage ends in -age, but is 'la'." },
            { id: "a1_01_q54", type: "sentence_builder", question: "Build: 'I love silence.' (Exception)", blocks: ["J'aime", "le", "silence", "la"], solution: ["J'aime", "le", "silence"], hint: "Silence ends in -ence, but is masculine!" },
            { id: "a1_01_q55", type: "input", question: "Translate (Exception): 'the skin'", answer: "la peau", hint: "Ends in -eau, but is feminine." },
            { id: "a1_01_q56", type: "sentence_builder", question: "Build: 'The side is white.' (Exception)", blocks: ["Le", "côté", "est", "blanc", "La", "blanche"], solution: ["Le", "côté", "est", "blanc"], hint: "Côté ends in -té, but is masculine!" },
            { id: "a1_01_q57", type: "gap_fill", question: "We go to the museum: Nous allons au ___.", answer: "musée", hint: "Musée ends in -ée, but is masculine (le musée)." },
            { id: "a1_01_q58", type: "input", question: "Write article and word for 'the morning'", answer: "le matin", hint: "Times of day are usually masculine." },
            { id: "a1_01_q59", type: "input", question: "Write article and word for 'the night'", answer: "la nuit", hint: "Night is feminine." },
            { id: "a1_01_q60", type: "sentence_builder", question: "Summary: 'The male friend and the female friend.'", blocks: ["L'ami", "et", "l'amie", "le", "la"], solution: ["L'ami", "et", "l'amie"], hint: "Both start with a vowel." }
        ]
    },

    "a1_02": {
        meta: { title: "Definite Articles", tags: ["Articles", "Basics", "A1"], color: "text-blue-600 bg-blue-50" },
        learn: {
            cheat_sheet: { summary: "Coming soon...", key_rule: "🔥 Coming soon..." },
            explanation: [{ type: "text", content: "**Coming soon:** This lesson is being prepared." }]
        },
        practice: [{ id: "a1_02_q01", type: "choice", question: "Coming soon...", options: ["—", "—", "—"], correct: 0, hint: "Lesson in progress" }]
    },

    "a1_03": {
        meta: { title: "Indefinite Articles", tags: ["Articles", "Basics", "A1"], color: "text-blue-600 bg-blue-50" },
        learn: {
            cheat_sheet: { summary: "Coming soon...", key_rule: "🔥 Coming soon..." },
            explanation: [{ type: "text", content: "**Coming soon:** This lesson is being prepared." }]
        },
        practice: [{ id: "a1_03_q01", type: "choice", question: "Coming soon...", options: ["—", "—", "—"], correct: 0, hint: "Lesson in progress" }]
    },

    "a1_04": {
        meta: { title: "Subject Pronouns", tags: ["Pronouns", "Basics", "A1"], color: "text-blue-600 bg-blue-50" },
        learn: {
            cheat_sheet: { summary: "Coming soon...", key_rule: "🔥 Coming soon..." },
            explanation: [{ type: "text", content: "**Coming soon:** This lesson is being prepared." }]
        },
        practice: [{ id: "a1_04_q01", type: "choice", question: "Coming soon...", options: ["—", "—", "—"], correct: 0, hint: "Lesson in progress" }]
    },

    "a1_05": {
        meta: { title: "Être (to be)", tags: ["Verbs", "Essential", "A1"], color: "text-blue-600 bg-blue-50" },
        learn: {
            cheat_sheet: { summary: "Coming soon...", key_rule: "🔥 Coming soon..." },
            explanation: [{ type: "text", content: "**Coming soon:** This lesson is being prepared." }]
        },
        practice: [{ id: "a1_05_q01", type: "choice", question: "Coming soon...", options: ["—", "—", "—"], correct: 0, hint: "Lesson in progress" }]
    },

    "a1_06": {
        meta: { title: "Avoir (to have)", tags: ["Verbs", "Essential", "A1"], color: "text-blue-600 bg-blue-50" },
        learn: {
            cheat_sheet: { summary: "Coming soon...", key_rule: "🔥 Coming soon..." },
            explanation: [{ type: "text", content: "**Coming soon:** This lesson is being prepared." }]
        },
        practice: [{ id: "a1_06_q01", type: "choice", question: "Coming soon...", options: ["—", "—", "—"], correct: 0, hint: "Lesson in progress" }]
    },

    // ═══════════════════════════════════════════════════════════════
    // NUMBERS & TIME (7-10)
    // ═══════════════════════════════════════════════════════════════

    "a1_07": {
        meta: { title: "Numbers 0-30", tags: ["Numbers", "Vocabulary", "A1"], color: "text-blue-600 bg-blue-50" },
        learn: {
            cheat_sheet: { summary: "Coming soon...", key_rule: "🔥 Coming soon..." },
            explanation: [{ type: "text", content: "**Coming soon:** This lesson is being prepared." }]
        },
        practice: [{ id: "a1_07_q01", type: "choice", question: "Coming soon...", options: ["—", "—", "—"], correct: 0, hint: "Lesson in progress" }]
    },

    "a1_08": {
        meta: { title: "Numbers 31-100", tags: ["Numbers", "Vocabulary", "A1"], color: "text-blue-600 bg-blue-50" },
        learn: {
            cheat_sheet: { summary: "Coming soon...", key_rule: "🔥 Coming soon..." },
            explanation: [{ type: "text", content: "**Coming soon:** This lesson is being prepared." }]
        },
        practice: [{ id: "a1_08_q01", type: "choice", question: "Coming soon...", options: ["—", "—", "—"], correct: 0, hint: "Lesson in progress" }]
    },

    "a1_09": {
        meta: { title: "Days & Months", tags: ["Time", "Vocabulary", "A1"], color: "text-blue-600 bg-blue-50" },
        learn: {
            cheat_sheet: { summary: "Coming soon...", key_rule: "🔥 Coming soon..." },
            explanation: [{ type: "text", content: "**Coming soon:** This lesson is being prepared." }]
        },
        practice: [{ id: "a1_09_q01", type: "choice", question: "Coming soon...", options: ["—", "—", "—"], correct: 0, hint: "Lesson in progress" }]
    },

    "a1_10": {
        meta: { title: "Telling Time", tags: ["Time", "Vocabulary", "A1"], color: "text-blue-600 bg-blue-50" },
        learn: {
            cheat_sheet: { summary: "Coming soon...", key_rule: "🔥 Coming soon..." },
            explanation: [{ type: "text", content: "**Coming soon:** This lesson is being prepared." }]
        },
        practice: [{ id: "a1_10_q01", type: "choice", question: "Coming soon...", options: ["—", "—", "—"], correct: 0, hint: "Lesson in progress" }]
    },

    // ═══════════════════════════════════════════════════════════════
    // FIRST VERBS (11-17)
    // ═══════════════════════════════════════════════════════════════

    "a1_11": {
        meta: { title: "Regular -ER Verbs", tags: ["Verbs", "Conjugation", "A1"], color: "text-blue-600 bg-blue-50" },
        learn: {
            cheat_sheet: { summary: "Coming soon...", key_rule: "🔥 Coming soon..." },
            explanation: [{ type: "text", content: "**Coming soon:** This lesson is being prepared." }]
        },
        practice: [{ id: "a1_11_q01", type: "choice", question: "Coming soon...", options: ["—", "—", "—"], correct: 0, hint: "Lesson in progress" }]
    },

    "a1_12": {
        meta: { title: "Regular -IR Verbs", tags: ["Verbs", "Conjugation", "A1"], color: "text-blue-600 bg-blue-50" },
        learn: {
            cheat_sheet: { summary: "Coming soon...", key_rule: "🔥 Coming soon..." },
            explanation: [{ type: "text", content: "**Coming soon:** This lesson is being prepared." }]
        },
        practice: [{ id: "a1_12_q01", type: "choice", question: "Coming soon...", options: ["—", "—", "—"], correct: 0, hint: "Lesson in progress" }]
    },

    "a1_13": {
        meta: { title: "Regular -RE Verbs", tags: ["Verbs", "Conjugation", "A1"], color: "text-blue-600 bg-blue-50" },
        learn: {
            cheat_sheet: { summary: "Coming soon...", key_rule: "🔥 Coming soon..." },
            explanation: [{ type: "text", content: "**Coming soon:** This lesson is being prepared." }]
        },
        practice: [{ id: "a1_13_q01", type: "choice", question: "Coming soon...", options: ["—", "—", "—"], correct: 0, hint: "Lesson in progress" }]
    },

    "a1_14": {
        meta: { title: "Aller (to go)", tags: ["Verbs", "Irregular", "A1"], color: "text-blue-600 bg-blue-50" },
        learn: {
            cheat_sheet: { summary: "Coming soon...", key_rule: "🔥 Coming soon..." },
            explanation: [{ type: "text", content: "**Coming soon:** This lesson is being prepared." }]
        },
        practice: [{ id: "a1_14_q01", type: "choice", question: "Coming soon...", options: ["—", "—", "—"], correct: 0, hint: "Lesson in progress" }]
    },

    "a1_15": {
        meta: { title: "Faire (to do/make)", tags: ["Verbs", "Irregular", "A1"], color: "text-blue-600 bg-blue-50" },
        learn: {
            cheat_sheet: { summary: "Coming soon...", key_rule: "🔥 Coming soon..." },
            explanation: [{ type: "text", content: "**Coming soon:** This lesson is being prepared." }]
        },
        practice: [{ id: "a1_15_q01", type: "choice", question: "Coming soon...", options: ["—", "—", "—"], correct: 0, hint: "Lesson in progress" }]
    },

    "a1_16": {
        meta: { title: "Venir & Prendre", tags: ["Verbs", "Irregular", "A1"], color: "text-blue-600 bg-blue-50" },
        learn: {
            cheat_sheet: { summary: "Coming soon...", key_rule: "🔥 Coming soon..." },
            explanation: [{ type: "text", content: "**Coming soon:** This lesson is being prepared." }]
        },
        practice: [{ id: "a1_16_q01", type: "choice", question: "Coming soon...", options: ["—", "—", "—"], correct: 0, hint: "Lesson in progress" }]
    },

    "a1_17": {
        meta: { title: "Pouvoir, Vouloir, Devoir", tags: ["Verbs", "Modal", "A1"], color: "text-blue-600 bg-blue-50" },
        learn: {
            cheat_sheet: { summary: "Coming soon...", key_rule: "🔥 Coming soon..." },
            explanation: [{ type: "text", content: "**Coming soon:** This lesson is being prepared." }]
        },
        practice: [{ id: "a1_17_q01", type: "choice", question: "Coming soon...", options: ["—", "—", "—"], correct: 0, hint: "Lesson in progress" }]
    },

    // ═══════════════════════════════════════════════════════════════
    // SENTENCE STRUCTURE (18-22)
    // ═══════════════════════════════════════════════════════════════

    "a1_18": {
        meta: { title: "Negation", tags: ["Sentence Structure", "Basics", "A1"], color: "text-blue-600 bg-blue-50" },
        learn: {
            cheat_sheet: { summary: "Coming soon...", key_rule: "🔥 Coming soon..." },
            explanation: [{ type: "text", content: "**Coming soon:** This lesson is being prepared." }]
        },
        practice: [{ id: "a1_18_q01", type: "choice", question: "Coming soon...", options: ["—", "—", "—"], correct: 0, hint: "Lesson in progress" }]
    },

    "a1_19": {
        meta: { title: "Asking Questions", tags: ["Questions", "Sentence Structure", "A1"], color: "text-blue-600 bg-blue-50" },
        learn: {
            cheat_sheet: { summary: "Coming soon...", key_rule: "🔥 Coming soon..." },
            explanation: [{ type: "text", content: "**Coming soon:** This lesson is being prepared." }]
        },
        practice: [{ id: "a1_19_q01", type: "choice", question: "Coming soon...", options: ["—", "—", "—"], correct: 0, hint: "Lesson in progress" }]
    },

    "a1_20": {
        meta: { title: "Question Words", tags: ["Questions", "Vocabulary", "A1"], color: "text-blue-600 bg-blue-50" },
        learn: {
            cheat_sheet: { summary: "Coming soon...", key_rule: "🔥 Coming soon..." },
            explanation: [{ type: "text", content: "**Coming soon:** This lesson is being prepared." }]
        },
        practice: [{ id: "a1_20_q01", type: "choice", question: "Coming soon...", options: ["—", "—", "—"], correct: 0, hint: "Lesson in progress" }]
    },

    "a1_21": {
        meta: { title: "Word Order", tags: ["Sentence Structure", "Basics", "A1"], color: "text-blue-600 bg-blue-50" },
        learn: {
            cheat_sheet: { summary: "Coming soon...", key_rule: "🔥 Coming soon..." },
            explanation: [{ type: "text", content: "**Coming soon:** This lesson is being prepared." }]
        },
        practice: [{ id: "a1_21_q01", type: "choice", question: "Coming soon...", options: ["—", "—", "—"], correct: 0, hint: "Lesson in progress" }]
    },

    "a1_22": {
        meta: { title: "C'est vs Il est", tags: ["Expressions", "Common Mistakes", "A1"], color: "text-blue-600 bg-blue-50" },
        learn: {
            cheat_sheet: { summary: "Coming soon...", key_rule: "🔥 Coming soon..." },
            explanation: [{ type: "text", content: "**Coming soon:** This lesson is being prepared." }]
        },
        practice: [{ id: "a1_22_q01", type: "choice", question: "Coming soon...", options: ["—", "—", "—"], correct: 0, hint: "Lesson in progress" }]
    },

    // ═══════════════════════════════════════════════════════════════
    // DESCRIPTIONS (23-27)
    // ═══════════════════════════════════════════════════════════════

    "a1_23": {
        meta: { title: "Basic Adjectives", tags: ["Adjectives", "Vocabulary", "A1"], color: "text-blue-600 bg-blue-50" },
        learn: {
            cheat_sheet: { summary: "Coming soon...", key_rule: "🔥 Coming soon..." },
            explanation: [{ type: "text", content: "**Coming soon:** This lesson is being prepared." }]
        },
        practice: [{ id: "a1_23_q01", type: "choice", question: "Coming soon...", options: ["—", "—", "—"], correct: 0, hint: "Lesson in progress" }]
    },

    "a1_24": {
        meta: { title: "Adjective Agreement", tags: ["Adjectives", "Grammar", "A1"], color: "text-blue-600 bg-blue-50" },
        learn: {
            cheat_sheet: { summary: "Coming soon...", key_rule: "🔥 Coming soon..." },
            explanation: [{ type: "text", content: "**Coming soon:** This lesson is being prepared." }]
        },
        practice: [{ id: "a1_24_q01", type: "choice", question: "Coming soon...", options: ["—", "—", "—"], correct: 0, hint: "Lesson in progress" }]
    },

    "a1_25": {
        meta: { title: "Adjective Placement", tags: ["Adjectives", "Word Order", "A1"], color: "text-blue-600 bg-blue-50" },
        learn: {
            cheat_sheet: { summary: "Coming soon...", key_rule: "🔥 Coming soon..." },
            explanation: [{ type: "text", content: "**Coming soon:** This lesson is being prepared." }]
        },
        practice: [{ id: "a1_25_q01", type: "choice", question: "Coming soon...", options: ["—", "—", "—"], correct: 0, hint: "Lesson in progress" }]
    },

    "a1_26": {
        meta: { title: "Possessive Adjectives", tags: ["Possessives", "Grammar", "A1"], color: "text-blue-600 bg-blue-50" },
        learn: {
            cheat_sheet: { summary: "Coming soon...", key_rule: "🔥 Coming soon..." },
            explanation: [{ type: "text", content: "**Coming soon:** This lesson is being prepared." }]
        },
        practice: [{ id: "a1_26_q01", type: "choice", question: "Coming soon...", options: ["—", "—", "—"], correct: 0, hint: "Lesson in progress" }]
    },

    "a1_27": {
        meta: { title: "Colors & Shapes", tags: ["Vocabulary", "Descriptions", "A1"], color: "text-blue-600 bg-blue-50" },
        learn: {
            cheat_sheet: { summary: "Coming soon...", key_rule: "🔥 Coming soon..." },
            explanation: [{ type: "text", content: "**Coming soon:** This lesson is being prepared." }]
        },
        practice: [{ id: "a1_27_q01", type: "choice", question: "Coming soon...", options: ["—", "—", "—"], correct: 0, hint: "Lesson in progress" }]
    },

    // ═══════════════════════════════════════════════════════════════
    // MORE GRAMMAR (28-32)
    // ═══════════════════════════════════════════════════════════════

    "a1_28": {
        meta: { title: "Prepositions of Place", tags: ["Prepositions", "Vocabulary", "A1"], color: "text-blue-600 bg-blue-50" },
        learn: {
            cheat_sheet: { summary: "Coming soon...", key_rule: "🔥 Coming soon..." },
            explanation: [{ type: "text", content: "**Coming soon:** This lesson is being prepared." }]
        },
        practice: [{ id: "a1_28_q01", type: "choice", question: "Coming soon...", options: ["—", "—", "—"], correct: 0, hint: "Lesson in progress" }]
    },

    "a1_29": {
        meta: { title: "Partitive Articles", tags: ["Articles", "Grammar", "A1"], color: "text-blue-600 bg-blue-50" },
        learn: {
            cheat_sheet: { summary: "Coming soon...", key_rule: "🔥 Coming soon..." },
            explanation: [{ type: "text", content: "**Coming soon:** This lesson is being prepared." }]
        },
        practice: [{ id: "a1_29_q01", type: "choice", question: "Coming soon...", options: ["—", "—", "—"], correct: 0, hint: "Lesson in progress" }]
    },

    "a1_30": {
        meta: { title: "Demonstratives", tags: ["Demonstratives", "Grammar", "A1"], color: "text-blue-600 bg-blue-50" },
        learn: {
            cheat_sheet: { summary: "Coming soon...", key_rule: "🔥 Coming soon..." },
            explanation: [{ type: "text", content: "**Coming soon:** This lesson is being prepared." }]
        },
        practice: [{ id: "a1_30_q01", type: "choice", question: "Coming soon...", options: ["—", "—", "—"], correct: 0, hint: "Lesson in progress" }]
    },

    "a1_31": {
        meta: { title: "Basic Adverbs", tags: ["Adverbs", "Vocabulary", "A1"], color: "text-blue-600 bg-blue-50" },
        learn: {
            cheat_sheet: { summary: "Coming soon...", key_rule: "🔥 Coming soon..." },
            explanation: [{ type: "text", content: "**Coming soon:** This lesson is being prepared." }]
        },
        practice: [{ id: "a1_31_q01", type: "choice", question: "Coming soon...", options: ["—", "—", "—"], correct: 0, hint: "Lesson in progress" }]
    },

    "a1_32": {
        meta: { title: "Passé Composé Intro", tags: ["Verbs", "Past Tense", "A1"], color: "text-blue-600 bg-blue-50" },
        learn: {
            cheat_sheet: { summary: "Coming soon...", key_rule: "🔥 Coming soon..." },
            explanation: [{ type: "text", content: "**Coming soon:** This lesson is being prepared." }]
        },
        practice: [{ id: "a1_32_q01", type: "choice", question: "Coming soon...", options: ["—", "—", "—"], correct: 0, hint: "Lesson in progress" }]
    }
};
