/* grammar_data.js */

const GRAMMAR_DATA = {
    //A1 Section
    
    "a1_01": {
        meta: {
            title: "Nouns & Articles",
            tags: ["Basics", "Gender", "A1"],
            color: "text-blue-600 bg-blue-50"
        },

        // --- TAB 1: LEARN ---
        learn: {
            cheat_sheet: {
                summary: "In French, every noun has a gender: **Masculine** (le/un) or **Feminine** (la/une). The article must always match the gender of the noun.",
                key_rule: "🔥 **Golden Rule:** Nouns ending in **'-e'** are *usually* feminine (e.g., *une table*, *la pomme*). Nouns ending in other letters are *usually* masculine (e.g., *un café*, *le stylo*). But beware of exceptions!"
            },
            explanation: [
                {
                    type: "text",
                    content: "There are two main types of articles you need to know right away: **Definite Articles** (The) and **Indefinite Articles** (A/An)."
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
                    type: "text",
                    content: "**1. Definite Articles (The):** Use these when talking about a specific object or general truths.\n* **Le** for masculine words (*le livre*).\n* **La** for feminine words (*la voiture*).\n* **Les** for plural words (*les chiens*)."
                },
                {
                    type: "warning",
                    title: "⚠️ The Vowel Clash (L')",
                    content: "If a singular noun starts with a vowel (a, e, i, o, u) or a silent 'h', both *le* and *la* shorten to **l'**. This makes pronunciation smoother.\n* *Le* + *école* = **L'école** (The school)\n* *La* + *orange* = **L'orange** (The orange)\n* *Le* + *hôpital* = **L'hôpital** (The hospital)"
                },
                {
                    type: "text",
                    content: "**2. Indefinite Articles (A/An/Some):** Use these when talking about non-specific objects.\n* **Un** for masculine (*un garçon* - a boy).\n* **Une** for feminine (*une fille* - a girl).\n* **Des** for plural (*des livres* - some books). Note: English often omits 'some', but French usually requires *des*."
                },
                {
                     type: "text",
                     content: "**3. Gender Patterns:** While memorizing gender is key, some endings can help guide you:\n* **Feminine endings:** -e, -ion, -té, -ure (*la nation, la liberté, la voiture*)\n* **Masculine endings:** -age, -ment, -eau, -isme (*le fromage, le gouvernement, le bateau*)"
                }
            ]
        },

        // --- TAB 2: PRACTICE ---
        // --- TAB 2: PRACTICE ---
        practice: [
            // --- Definite Articles (Le/La/Les/L') ---
            {
                id: "a1_01_q01",
                type: "choice",
                question: "Choose the correct article: ___ garçon (boy)",
                options: ["Le", "La", "Les"],
                correct: 0,
                hint: "Boy is masculine."
            },
            {
                id: "a1_01_q02",
                type: "choice",
                question: "___ fille (girl) est ici.",
                options: ["Le", "La", "Les"],
                correct: 1,
                hint: "Girl is feminine."
            },
            {
                id: "a1_01_q03",
                type: "choice",
                question: "___ homme (man) mange.",
                options: ["Le", "La", "L'"],
                correct: 2,
                hint: "Starts with a silent 'H'."
            },
            {
                id: "a1_01_q04",
                type: "choice",
                question: "J'aime ___ pommes (apples).",
                options: ["le", "la", "les"],
                correct: 2,
                hint: "Plural nouns take 'les'."
            },
            {
                id: "a1_01_q05",
                type: "choice",
                question: "___ école (school) est grande.",
                options: ["Le", "La", "L'"],
                correct: 2,
                hint: "Starts with a vowel 'é'."
            },
            {
                id: "a1_01_q06",
                type: "choice",
                question: "Où est ___ livre (book)?",
                options: ["le", "la", "l'"],
                correct: 0,
                hint: "Livre is masculine."
            },
            {
                id: "a1_01_q07",
                type: "choice",
                question: "___ table est rouge.",
                options: ["Le", "La", "Les"],
                correct: 1,
                hint: "Table is feminine."
            },
            {
                id: "a1_01_q08",
                type: "choice",
                question: "___ arbre (tree) est vert.",
                options: ["Le", "La", "L'"],
                correct: 2,
                hint: "Starts with a vowel 'a'."
            },
            {
                id: "a1_01_q09",
                type: "choice",
                question: "Regarde ___ oiseaux (birds).",
                options: ["le", "la", "les"],
                correct: 2,
                hint: "Plural 'x' at the end."
            },
            {
                id: "a1_01_q10",
                type: "choice",
                question: "___ amie (friend, female) s'appelle Marie.",
                options: ["Le", "La", "L'"],
                correct: 2,
                hint: "Starts with a vowel 'a'."
            },

            // --- Indefinite Articles (Un/Une/Des) ---
            {
                id: "a1_01_q11",
                type: "input",
                question: "C'est ___ (a) banane.",
                answer: "une",
                hint: "Banane ends in -e and is feminine."
            },
            {
                id: "a1_01_q12",
                type: "input",
                question: "J'ai ___ (a) vélo (bike).",
                answer: "un",
                hint: "Vélo is masculine."
            },
             {
                id: "a1_01_q13",
                type: "choice",
                question: "Il y a ___ (some) fleurs.",
                options: ["un", "une", "des"],
                correct: 2,
                hint: "Fleurs is plural."
            },
            {
                id: "a1_01_q14",
                type: "input",
                question: "C'est ___ (a) maison.",
                answer: "une",
                hint: "Maison is feminine."
            },
            {
                id: "a1_01_q15",
                type: "input",
                question: "Je veux ___ (a) sandwich.",
                answer: "un",
                hint: "Sandwich is masculine."
            },
             {
                id: "a1_01_q16",
                type: "choice",
                question: "Tu as ___ (a) idée ?",
                options: ["un", "une", "des"],
                correct: 1,
                hint: "Idée is feminine."
            },
             {
                id: "a1_01_q17",
                type: "choice",
                question: "Nous avons ___ (some) amis.",
                options: ["un", "une", "des"],
                correct: 2,
                hint: "Amis is plural."
            },
            {
                id: "a1_01_q18",
                type: "input",
                question: "Voici ___ (a) cadeau pour toi.",
                answer: "un",
                hint: "Cadeau is masculine."
            },
            {
                id: "a1_01_q19",
                type: "input",
                question: "C'est ___ (a) voiture.",
                answer: "une",
                hint: "Voiture is feminine."
            },
            {
                id: "a1_01_q20",
                type: "choice",
                question: "Il mange ___ (some) frites.",
                options: ["un", "une", "des"],
                correct: 2,
                hint: "Frites is plural."
            },

            // --- Mixed Practice & Gender Identification ---
            {
                id: "a1_01_q21",
                type: "choice",
                question: "Is 'Soleil' (Sun) masculine or feminine?",
                options: ["Masculine (Le)", "Feminine (La)"],
                correct: 0,
                hint: "It's 'Le Soleil'."
            },
            {
                id: "a1_01_q22",
                type: "choice",
                question: "Is 'Lune' (Moon) masculine or feminine?",
                options: ["Masculine (Le)", "Feminine (La)"],
                correct: 1,
                hint: "It's 'La Lune'."
            },
            {
                id: "a1_01_q23",
                type: "sort",
                question: "Build: 'The cat is black'",
                blocks: ["chat", "Le", "noir", "est"],
                correct_order: ["Le", "chat", "est", "noir"], 
                hint: "Start with 'Le'."
            },
             {
                id: "a1_01_q24",
                type: "choice",
                question: "___ ordinateur (computer) est nouveau.",
                options: ["Le", "La", "L'"],
                correct: 2,
                hint: "Starts with vowel 'o'."
            },
             {
                id: "a1_01_q25",
                type: "choice",
                question: "___ chaise (chair) est confortable.",
                options: ["Le", "La", "L'"],
                correct: 1,
                hint: "Chaise is feminine."
            },
             {
                id: "a1_01_q26",
                type: "choice",
                question: "___ fromage (cheese) est bon.",
                options: ["Le", "La", "L'"],
                correct: 0,
                hint: "Fromage ends in -age, usually masculine."
            },
             {
                id: "a1_01_q27",
                type: "choice",
                question: "___ liberté (freedom) est importante.",
                options: ["Le", "La", "L'"],
                correct: 1,
                hint: "Ends in -té, usually feminine."
            },
            {
                id: "a1_01_q28",
                type: "input",
                question: "J'achète ___ (a) journal.",
                answer: "un",
                hint: "Journal is masculine."
            },
            {
                id: "a1_01_q29",
                type: "choice",
                question: "___ hôtel est grand.",
                options: ["Le", "La", "L'"],
                correct: 2,
                hint: "Starts with silent 'H'."
            },
             {
                id: "a1_01_q30",
                type: "sort",
                question: "Build: 'A dog eats.'",
                blocks: ["Un", "chien", "mange"],
                correct_order: ["Un", "chien", "mange"],
                hint: "Start with the article."
            },
            
             // --- More Advanced / Mixed ---
            {
                id: "a1_01_q31",
                type: "choice",
                question: "___ eau (water) est froide.",
                options: ["Le", "La", "L'"],
                correct: 2,
                hint: "Starts with 'e'."
            },
            {
                id: "a1_01_q32",
                type: "input",
                question: "C'est ___ (an) orange.",
                answer: "une",
                hint: "Orange is feminine."
            },
            {
                id: "a1_01_q33",
                type: "choice",
                question: "___ sac (bag) est lourd.",
                options: ["Le", "La", "L'"],
                correct: 0,
                hint: "Sac is masculine."
            },
            {
                id: "a1_01_q34",
                type: "choice",
                question: "___ fenêtre (window) est ouverte.",
                options: ["Le", "La", "L'"],
                correct: 1,
                hint: "Fenêtre is feminine."
            },
            {
                id: "a1_01_q35",
                type: "choice",
                question: "Is 'Problème' masculine or feminine?",
                options: ["Masculine (Un)", "Feminine (Une)"],
                correct: 0,
                hint: "Exception! Ends in -e but is Masculine."
            },
            {
                id: "a1_01_q36",
                type: "choice",
                question: "___ amis (friends) sont gentils.",
                options: ["Le", "La", "Les"],
                correct: 2,
                hint: "Plural."
            },
            {
                id: "a1_01_q37",
                type: "input",
                question: "J'ai ___ (a) question.",
                answer: "une",
                hint: "Question is feminine."
            },
             {
                id: "a1_01_q38",
                type: "choice",
                question: "___ café est chaud.",
                options: ["Le", "La", "L'"],
                correct: 0,
                hint: "Café is masculine."
            },
            {
                id: "a1_01_q39",
                type: "choice",
                question: "___ musique est belle.",
                options: ["Le", "La", "L'"],
                correct: 1,
                hint: "Musique is feminine."
            },
            {
                id: "a1_01_q40",
                type: "sort",
                question: "Build: 'The girls play.'",
                blocks: ["jouent", "filles", "Les"],
                correct_order: ["Les", "filles", "jouent"],
                hint: "Start with 'Les'."
            },
             {
                id: "a1_01_q41",
                type: "choice",
                question: "___ argent (money).",
                options: ["Le", "La", "L'"],
                correct: 2,
                hint: "Starts with 'a'."
            },
            {
                id: "a1_01_q42",
                type: "choice",
                question: "___ bus arrive.",
                options: ["Le", "La", "L'"],
                correct: 0,
                hint: "Bus is masculine."
            },
            {
                id: "a1_01_q43",
                type: "input",
                question: "C'est ___ (a) belle journée.",
                answer: "une",
                hint: "Journée is feminine."
            },
            {
                id: "a1_01_q44",
                type: "choice",
                question: "___ train part.",
                options: ["Le", "La", "L'"],
                correct: 0,
                hint: "Train is masculine."
            },
            {
                id: "a1_01_q45",
                type: "choice",
                question: "___ gare (station) est loin.",
                options: ["Le", "La", "L'"],
                correct: 1,
                hint: "Gare is feminine."
            },
            {
                id: "a1_01_q46",
                type: "choice",
                question: "___ yeux (eyes) sont bleus.",
                options: ["Le", "La", "Les"],
                correct: 2,
                hint: "Plural."
            },
            {
                id: "a1_01_q47",
                type: "choice",
                question: "___ pain (bread) est frais.",
                options: ["Le", "La", "L'"],
                correct: 0,
                hint: "Pain is masculine."
            },
             {
                id: "a1_01_q48",
                type: "choice",
                question: "___ main (hand) est petite.",
                options: ["Le", "La", "L'"],
                correct: 1,
                hint: "Exception: Main doesn't end in -e but is feminine."
            },
            {
                id: "a1_01_q49",
                type: "input",
                question: "Je regarde ___ (a) film.",
                answer: "un",
                hint: "Film is masculine."
            },
             {
                id: "a1_01_q50",
                type: "sort",
                question: "Build: 'A plane flies.'",
                blocks: ["vole", "avion", "Un"],
                correct_order: ["Un", "avion", "vole"],
                hint: "Start with 'Un'."
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
                summary: "Subject pronouns replace the person or thing doing the action (e.g., 'Kevin' becomes 'He', 'The car' becomes 'It').",
                key_rule: "🔥 **Golden Rules:**\n1. **Tu** = One friend/family/child.\n2. **Vous** = One stranger/elder OR a group of people.\n3. **On** = We (informal/spoken)."
            },
            explanation: [
                {
                    type: "text",
                    content: "Here is the complete list of subject pronouns in French. You need to memorize these to conjugate verbs."
                },
                {
                    type: "table",
                    headers: ["Person", "Singular (1 person)", "Plural (Multiple people)"],
                    rows: [
                        ["1st (Me/Us)", "Je (I)", "Nous (We - formal) / On (We - informal)"],
                        ["2nd (You)", "Tu (You - informal)", "Vous (You - formal OR plural)"],
                        ["3rd (Him/Her)", "Il (He/It masc.) / Elle (She/It fem.)", "Ils (They - masc/mixed) / Elles (They - all female)"]
                    ]
                },
                {
                    type: "warning",
                    title: "⚠️ The 'Tu' vs. 'Vous' Trap",
                    content: "Unlike English 'You', French distinguishes between formal and informal.\n* Use **Tu** with friends, family, peers, and children.\n* Use **Vous** with strangers, elders, bosses, or whenever you speak to **more than one person** (even if they are friends!)."
                },
                {
                    type: "warning",
                    title: "⚠️ The Group Rule (Ils/Elles)",
                    content: "French is gendered even in plural.\n* **Elles** refers to a group of 100% women/feminine objects.\n* **Ils** refers to a group of men OR a mixed group (99 women + 1 man = **Ils**!)."
                },
                 {
                    type: "text",
                    content: "**Special Case: 'On'**\nAlthough 'Nous' is the textbook word for 'We', in spoken daily French, almost everyone uses **On**. It conjugates like 'Il/Elle' (3rd person singular) but means 'We'. Example: *On va au cinéma* (We go to the movies)."
                }
            ]
        },

        // --- TAB 2: PRACTICE ---
        practice: [
            // --- Identifying Pronouns (He/She/They) ---
            {
                id: "a1_02_q01",
                type: "choice",
                question: "Replace 'Sophie': ___ est belle.",
                options: ["Il", "Elle", "Ils"],
                correct: 1,
                hint: "Sophie is a girl's name."
            },
            {
                id: "a1_02_q02",
                type: "choice",
                question: "Replace 'Marc': ___ est grand.",
                options: ["Il", "Elle", "Elles"],
                correct: 0,
                hint: "Marc is a boy's name."
            },
            {
                id: "a1_02_q03",
                type: "choice",
                question: "Replace 'Marc et Sophie': ___ sont ici.",
                options: ["Ils", "Elles", "Nous"],
                correct: 0,
                hint: "Mixed group -> Masculine Plural."
            },
            {
                id: "a1_02_q04",
                type: "choice",
                question: "Replace 'Marie et Julie': ___ sont amies.",
                options: ["Ils", "Elles", "Vous"],
                correct: 1,
                hint: "100% female group."
            },
            {
                id: "a1_02_q05",
                type: "choice",
                question: "Replace 'Le livre' (The book - masc): ___ est rouge.",
                options: ["Il", "Elle", "On"],
                correct: 0,
                hint: "Objects also use Il/Elle based on gender."
            },
            {
                id: "a1_02_q06",
                type: "choice",
                question: "Replace 'La voiture' (The car - fem): ___ est rapide.",
                options: ["Il", "Elle", "Tu"],
                correct: 1,
                hint: "Voiture is feminine."
            },
            {
                id: "a1_02_q07",
                type: "choice",
                question: "Replace 'Les chats' (The cats - masc plural): ___ dorment.",
                options: ["Ils", "Elles", "Il"],
                correct: 0,
                hint: "Masculine plural."
            },
            {
                id: "a1_02_q08",
                type: "choice",
                question: "Replace 'Les fleurs' (The flowers - fem plural): ___ sont belles.",
                options: ["Ils", "Elles", "Elle"],
                correct: 1,
                hint: "Feminine plural."
            },
            {
                id: "a1_02_q09",
                type: "choice",
                question: "Replace 'L'homme' (The man): ___ parle.",
                options: ["Il", "Elle", "On"],
                correct: 0,
                hint: "Man is masculine."
            },
            {
                id: "a1_02_q10",
                type: "choice",
                question: "Replace 'La femme' (The woman): ___ chante.",
                options: ["Il", "Elle", "Tu"],
                correct: 1,
                hint: "Woman is feminine."
            },

            // --- Tu vs. Vous (Context) ---
            {
                id: "a1_02_q11",
                type: "choice",
                question: "Talking to your boss: ___ parlez bien.",
                options: ["Tu", "Vous", "Il"],
                correct: 1,
                hint: "Boss = Formal."
            },
            {
                id: "a1_02_q12",
                type: "choice",
                question: "Talking to your little brother: ___ es gentil.",
                options: ["Tu", "Vous", "Nous"],
                correct: 0,
                hint: "Family/Child = Informal."
            },
            {
                id: "a1_02_q13",
                type: "choice",
                question: "Talking to two friends: ___ venez ?",
                options: ["Tu", "Vous", "Ils"],
                correct: 1,
                hint: "Plural 'you' is always Vous, even for friends."
            },
            {
                id: "a1_02_q14",
                type: "choice",
                question: "Talking to a stranger on the street: Excusez-___.",
                options: ["moi", "vous", "nous"],
                correct: 1,
                hint: "Stranger = Formal."
            },
            {
                id: "a1_02_q15",
                type: "choice",
                question: "Talking to a dog: ___ es mignon.",
                options: ["Tu", "Vous", "Il"],
                correct: 0,
                hint: "We use 'Tu' for pets."
            },
             {
                id: "a1_02_q16",
                type: "choice",
                question: "Talking to your teacher: ___ expliquez bien.",
                options: ["Tu", "Vous", "Ils"],
                correct: 1,
                hint: "Teacher = Formal/Respect."
            },
            {
                id: "a1_02_q17",
                type: "choice",
                question: "Talking to your best friend: ___ viens ce soir ?",
                options: ["Tu", "Vous", "Il"],
                correct: 0,
                hint: "Friend = Informal."
            },

            // --- Translations & On vs Nous ---
            {
                id: "a1_02_q18",
                type: "input",
                question: "Translate 'I' into French.",
                answer: "je",
                hint: "First person singular."
            },
            {
                id: "a1_02_q19",
                type: "input",
                question: "Translate 'We' (formal).",
                answer: "nous",
                hint: "The textbook word for 'We'."
            },
            {
                id: "a1_02_q20",
                type: "choice",
                question: "Informal 'We' used in speaking: ___ va au parc.",
                options: ["Nous", "On", "Ils"],
                correct: 1,
                hint: "Very common spoken 'We'."
            },
            {
                id: "a1_02_q21",
                type: "input",
                question: "Translate 'They' (group of women).",
                answer: "elles",
                hint: "Feminine plural."
            },
            {
                id: "a1_02_q22",
                type: "input",
                question: "Translate 'They' (group of men).",
                answer: "ils",
                hint: "Masculine plural."
            },

            // --- Sentence Sorting & Structure ---
            {
                id: "a1_02_q23",
                type: "sort",
                question: "Build: 'We speak French' (Formal)",
                blocks: ["Nous", "parlons", "français", "Tu"],
                correct_order: ["Nous", "parlons", "français"],
                hint: "Start with the formal 'We'."
            },
            {
                id: "a1_02_q24",
                type: "sort",
                question: "Build: 'She is happy'",
                blocks: ["heureuse", "est", "Elle", "Il"],
                correct_order: ["Elle", "est", "heureuse"],
                hint: "Subject + Verb + Adjective."
            },
            {
                id: "a1_02_q25",
                type: "sort",
                question: "Build: 'You (friend) are nice'",
                blocks: ["es", "gentil", "Tu", "Vous"],
                correct_order: ["Tu", "es", "gentil"],
                hint: "Informal 'You'."
            },
             {
                id: "a1_02_q26",
                type: "sort",
                question: "Build: 'We (informal) eat'",
                blocks: ["mange", "On", "Nous", "mangons"],
                correct_order: ["On", "mange"],
                hint: "'On' takes 3rd person singular verb (like Il)."
            },

            // --- Advanced Substitution (Object Pronouns basics preview) ---
            {
                id: "a1_02_q27",
                type: "choice",
                question: "___ (Paul and I) sommes amis.",
                options: ["Nous", "Vous", "Ils"],
                correct: 0,
                hint: "Paul + Me = We."
            },
            {
                id: "a1_02_q28",
                type: "choice",
                question: "___ (Sophie and you) êtes en retard.",
                options: ["Nous", "Vous", "Elles"],
                correct: 1,
                hint: "Someone + You = You (plural)."
            },
             {
                id: "a1_02_q29",
                type: "choice",
                question: "___ (The dog and the cat) jouent.",
                options: ["Ils", "Elles", "Nous"],
                correct: 0,
                hint: "Two masculine nouns = Ils."
            },
            {
                id: "a1_02_q30",
                type: "choice",
                question: "___ (My mother and my sister) parlent.",
                options: ["Ils", "Elles", "Nous"],
                correct: 1,
                hint: "Two females = Elles."
            },

            // --- Mixed / Quick Fire ---
            {
                id: "a1_02_q31",
                type: "choice",
                question: "Singular or Plural? 'Elles'",
                options: ["Singular", "Plural"],
                correct: 1,
                hint: "Ends in s."
            },
            {
                id: "a1_02_q32",
                type: "choice",
                question: "Singular or Plural? 'On'",
                options: ["Singular", "Plural"],
                correct: 0,
                hint: "Grammatically singular (conjugates like Il), even if it means 'We'."
            },
             {
                id: "a1_02_q33",
                type: "choice",
                question: "Masculine or Feminine? 'Il'",
                options: ["Masculine", "Feminine"],
                correct: 0,
                hint: "He."
            },
             {
                id: "a1_02_q34",
                type: "choice",
                question: "Correct pronoun for 'My Dad'?",
                options: ["Il", "Elle", "Tu"],
                correct: 0,
                hint: "He."
            },
             {
                id: "a1_02_q35",
                type: "choice",
                question: "Correct pronoun for 'My House' (La maison)?",
                options: ["Il", "Elle"],
                correct: 1,
                hint: "Maison is feminine."
            },
             {
                id: "a1_02_q36",
                type: "choice",
                question: "10 boys and 1 girl. Which pronoun?",
                options: ["Ils", "Elles"],
                correct: 0,
                hint: "Mixed group = Masculine."
            },
             {
                id: "a1_02_q37",
                type: "choice",
                question: "10 girls and 1 boy. Which pronoun?",
                options: ["Ils", "Elles"],
                correct: 0,
                hint: "Still mixed group = Masculine! Even 1 boy changes it."
            },
             {
                id: "a1_02_q38",
                type: "choice",
                question: "Talking to Mr. President.",
                options: ["Tu", "Vous"],
                correct: 1,
                hint: "Very formal."
            },
             {
                id: "a1_02_q39",
                type: "choice",
                question: "Talking to classmates (plural).",
                options: ["Tu", "Vous"],
                correct: 1,
                hint: "Plural 'you' is always Vous."
            },
             {
                id: "a1_02_q40",
                type: "input",
                question: "Translate 'You' (informal singular).",
                answer: "tu",
                hint: "Two letters."
            },
             {
                id: "a1_02_q41",
                type: "choice",
                question: "___ suis fatigué.",
                options: ["Je", "Tu", "Il"],
                correct: 0,
                hint: "Verb is 'suis' (am)."
            },
            {
                id: "a1_02_q42",
                type: "choice",
                question: "___ es drôle.",
                options: ["Je", "Tu", "Il"],
                correct: 1,
                hint: "Verb is 'es' (are)."
            },
            {
                id: "a1_02_q43",
                type: "choice",
                question: "___ est ici.",
                options: ["Je", "Tu", "Il"],
                correct: 2,
                hint: "Verb is 'est' (is)."
            },
             {
                id: "a1_02_q44",
                type: "choice",
                question: "___ sommes contents.",
                options: ["Nous", "Vous", "Ils"],
                correct: 0,
                hint: "Verb is 'sommes' (are)."
            },
             {
                id: "a1_02_q45",
                type: "choice",
                question: "___ avez faim ?",
                options: ["Nous", "Vous", "Ils"],
                correct: 1,
                hint: "Verb is 'avez' (have)."
            },
             {
                id: "a1_02_q46",
                type: "choice",
                question: "___ ont soif.",
                options: ["Nous", "Vous", "Ils"],
                correct: 2,
                hint: "Verb is 'ont' (have)."
            },
             {
                id: "a1_02_q47",
                type: "input",
                question: "Short form of 'Je' before a vowel (e.g. __'aime).",
                answer: "j",
                hint: "One letter."
            },
             {
                id: "a1_02_q48",
                type: "choice",
                question: "Does 'Tu' change to 'T'' before a vowel?",
                options: ["Officially No", "Yes always"],
                correct: 0,
                hint: "In formal writing, Tu never contracts. Only in spoken slang (T'es là?)."
            },
             {
                id: "a1_02_q49",
                type: "choice",
                question: "Replace 'Toi et moi'.",
                options: ["Nous", "Vous", "Ils"],
                correct: 0,
                hint: "You and I = We."
            },
             {
                id: "a1_02_q50",
                type: "choice",
                question: "Replace 'Les enfants' (The children).",
                options: ["Ils", "Elles", "Nous"],
                correct: 0,
                hint: "Masculine/Mixed plural."
            }
        ]
    },
    "a1_03": {
        meta: {
            title: "Auxiliary Verbs",
            tags: ["Basics", "Verbs", "A1"],
            color: "text-blue-600 bg-blue-50"
        },

        // --- TAB 1: LEARN ---
        learn: {
            cheat_sheet: {
                summary: "The two pillars of French grammar are **Être** (To be) and **Avoir** (To have). You must memorize them perfectly because they are used everywhere, even to build the past tense later!",
                key_rule: "🔥 **The Age Trap:** In English, you ARE an age. In French, you **HAVE** years. Always say *J'ai 20 ans* (I have 20 years), never *Je suis 20 ans*."
            },
            explanation: [
                {
                    type: "text",
                    content: "These verbs are irregular, meaning they don't follow standard patterns. Here are the conjugations:"
                },
                {
                    type: "table",
                    headers: ["Person", "Être (To be)", "Avoir (To have)"],
                    rows: [
                        ["Je (I)", "suis (am)", "ai (have)"],
                        ["Tu (You - singular)", "es (are)", "as (have)"],
                        ["Il / Elle (He/She)", "est (is)", "a (has)"],
                        ["Nous (We)", "sommes (are)", "avons (have)"],
                        ["Vous (You - plural/formal)", "êtes (are)", "avez (have)"],
                        ["Ils / Elles (They)", "sont (are)", "ont (have)"]
                    ]
                },
                {
                    type: "warning",
                    title: "⚠️ Pronunciation Alert: S vs. Z",
                    content: "The plural forms sound very distinct because of the 'liaison' (linking sound):\n* **Ils sont** (They are) = Sharp 'S' sound (like *Snake*).\n* **Ils ont** (They have) = Buzzing 'Z' sound (like *Zebra*)."
                },
                {
                    type: "text",
                    content: "**Common Expressions with AVOIR:**\nFrench uses 'To have' for many physical sensations where English uses 'To be'.\n* *J'ai faim* (I am hungry - lit. I have hunger)\n* *J'ai soif* (I am thirsty)\n* *J'ai chaud* (I am hot)\n* *J'ai froid* (I am cold)\n* *J'ai peur* (I am afraid)"
                }
            ]
        },

        // --- TAB 2: PRACTICE ---
        practice: [
            // --- Être Conjugation ---
            {
                id: "a1_03_q01",
                type: "choice",
                question: "Je ___ étudiant.",
                options: ["suis", "es", "est"],
                correct: 0,
                hint: "First person singular of Être (I am)."
            },
            {
                id: "a1_03_q02",
                type: "choice",
                question: "Tu ___ gentil.",
                options: ["est", "es", "êtes"],
                correct: 1,
                hint: "Second person singular of Être."
            },
            {
                id: "a1_03_q03",
                type: "choice",
                question: "Il ___ fatigué.",
                options: ["es", "est", "sont"],
                correct: 1,
                hint: "Third person singular of Être."
            },
            {
                id: "a1_03_q04",
                type: "input",
                question: "Nous ___ (are) ici.",
                answer: "sommes",
                hint: "First person plural of Être."
            },
            {
                id: "a1_03_q05",
                type: "choice",
                question: "Vous ___ prêts ?",
                options: ["sommes", "êtes", "sont"],
                correct: 1,
                hint: "Second person plural/formal of Être."
            },
            {
                id: "a1_03_q06",
                type: "choice",
                question: "Elles ___ (are) belles.",
                options: ["sont", "ont", "est"],
                correct: 0,
                hint: "Third person plural of Être."
            },
             {
                id: "a1_03_q07",
                type: "sort",
                question: "Build: 'I am French.'",
                blocks: ["suis", "français", "Je"],
                correct_order: ["Je", "suis", "français"],
                hint: "Subject + Verb + Adjective."
            },

            // --- Avoir Conjugation ---
            {
                id: "a1_03_q08",
                type: "choice",
                question: "J'___ un chat.",
                options: ["ai", "as", "a"],
                correct: 0,
                hint: "First person singular of Avoir."
            },
            {
                id: "a1_03_q09",
                type: "choice",
                question: "Tu ___ un stylo ?",
                options: ["a", "as", "avez"],
                correct: 1,
                hint: "Second person singular of Avoir."
            },
            {
                id: "a1_03_q10",
                type: "choice",
                question: "Elle ___ (has) une voiture.",
                options: ["as", "a", "ont"],
                correct: 1,
                hint: "Third person singular of Avoir."
            },
            {
                id: "a1_03_q11",
                type: "input",
                question: "Nous ___ (have) le temps.",
                answer: "avons",
                hint: "First person plural of Avoir."
            },
            {
                id: "a1_03_q12",
                type: "choice",
                question: "Vous ___ des questions ?",
                options: ["avez", "avons", "ont"],
                correct: 0,
                hint: "Second person plural/formal of Avoir."
            },
            {
                id: "a1_03_q13",
                type: "choice",
                question: "Ils ___ (have) beaucoup d'argent.",
                options: ["sont", "ont", "a"],
                correct: 1,
                hint: "Third person plural of Avoir."
            },
             {
                id: "a1_03_q14",
                type: "sort",
                question: "Build: 'He has a dog.'",
                blocks: ["chien", "a", "un", "Il"],
                correct_order: ["Il", "a", "un", "chien"],
                hint: "Subject + Verb + Object."
            },

            // --- The Age Trap (J'ai ... ans) ---
            {
                id: "a1_03_q15",
                type: "choice",
                question: "How to say: 'I am 30 years old'?",
                options: ["Je suis 30 ans", "J'ai 30 ans", "Je vais 30 ans"],
                correct: 1,
                hint: "In French, you HAVE age."
            },
            {
                id: "a1_03_q16",
                type: "choice",
                question: "Tu ___ quel âge ?",
                options: ["es", "as", "a"],
                correct: 1,
                hint: "Asking age uses Avoir."
            },
            {
                id: "a1_03_q17",
                type: "choice",
                question: "Il ___ 10 ans.",
                options: ["est", "a", "as"],
                correct: 1,
                hint: "He HAS 10 years."
            },
            {
                id: "a1_03_q18",
                type: "input",
                question: "Elle ___ (has) 20 ans.",
                answer: "a",
                hint: "She has."
            },
             {
                id: "a1_03_q19",
                type: "sort",
                question: "Build: 'We are 18.' (We have 18 years)",
                blocks: ["avons", "ans", "18", "Nous"],
                correct_order: ["Nous", "avons", "18", "ans"],
                hint: "Don't forget 'ans' (years)."
            },

            // --- Avoir Expressions (Hunger, Thirst, Hot, Cold, Fear) ---
            {
                id: "a1_03_q20",
                type: "choice",
                question: "Translate: 'I am hungry'.",
                options: ["Je suis faim", "J'ai faim", "Je fais faim"],
                correct: 1,
                hint: "I have hunger."
            },
            {
                id: "a1_03_q21",
                type: "choice",
                question: "Translate: 'She is cold'.",
                options: ["Elle est froid", "Elle a froid"],
                correct: 1,
                hint: "She has cold."
            },
             {
                id: "a1_03_q22",
                type: "choice",
                question: "Nous ___ soif (We are thirsty).",
                options: ["sommes", "avons", "faisons"],
                correct: 1,
                hint: "We have thirst."
            },
            {
                id: "a1_03_q23",
                type: "choice",
                question: "Ils ___ peur (They are afraid).",
                options: ["sont", "ont"],
                correct: 1,
                hint: "They have fear."
            },
            {
                id: "a1_03_q24",
                type: "input",
                question: "Tu ___ (have) chaud ?",
                answer: "as",
                hint: "Are you hot? (Do you have heat?)"
            },

            // --- Mixed / Discrimination (Être vs Avoir) ---
            {
                id: "a1_03_q25",
                type: "choice",
                question: "Je ___ content (happy).",
                options: ["suis", "ai"],
                correct: 0,
                hint: "Happy is a state/adjective -> Être."
            },
            {
                id: "a1_03_q26",
                type: "choice",
                question: "Je ___ un vélo (a bike).",
                options: ["suis", "ai"],
                correct: 1,
                hint: "A bike is a possession -> Avoir."
            },
            {
                id: "a1_03_q27",
                type: "choice",
                question: "Il ___ malade (sick).",
                options: ["est", "a"],
                correct: 0,
                hint: "Being sick is a state -> Être."
            },
            {
                id: "a1_03_q28",
                type: "choice",
                question: "Il ___ mal à la tête (headache).",
                options: ["est", "a"],
                correct: 1,
                hint: "Having a pain -> Avoir."
            },
            {
                id: "a1_03_q29",
                type: "choice",
                question: "Vous ___ en retard (late).",
                options: ["êtes", "avez"],
                correct: 0,
                hint: "Being late is a state -> Être."
            },
            {
                id: "a1_03_q30",
                type: "choice",
                question: "Nous ___ le temps (the time).",
                options: ["sommes", "avons"],
                correct: 1,
                hint: "Possessing time -> Avoir."
            },
             {
                id: "a1_03_q31",
                type: "choice",
                question: "Elles ___ intelligentes.",
                options: ["sont", "ont"],
                correct: 0,
                hint: "Adjective describing them -> Être."
            },
             {
                id: "a1_03_q32",
                type: "choice",
                question: "Ils ___ des problèmes.",
                options: ["sont", "ont"],
                correct: 1,
                hint: "Possessing problems -> Avoir."
            },
            {
                id: "a1_03_q33",
                type: "input",
                question: "Tu ___ (are) mon ami.",
                answer: "es",
                hint: "Être for identity."
            },
            {
                id: "a1_03_q34",
                type: "input",
                question: "J'___ (have) une idée.",
                answer: "ai",
                hint: "Avoir for abstract possession."
            },

            // --- Pronunciation / Listening Check (Concept) ---
            {
                id: "a1_03_q35",
                type: "choice",
                question: "Which one sounds like 'Zebra'? (Liaison)",
                options: ["Ils sont", "Ils ont"],
                correct: 1,
                hint: "Ils ont (They have) links the S to the O, making a Z sound."
            },
            {
                id: "a1_03_q36",
                type: "choice",
                question: "Which one sounds like 'Snake'? (No Z sound)",
                options: ["Ils sont", "Ils ont"],
                correct: 0,
                hint: "Ils sont (They are) starts the verb with S."
            },

            // --- Negation Preview (Ne...pas) ---
            {
                id: "a1_03_q37",
                type: "choice",
                question: "Negative: Je ne ___ pas fatigué.",
                options: ["suis", "ai"],
                correct: 0,
                hint: "I am not tired."
            },
            {
                id: "a1_03_q38",
                type: "choice",
                question: "Negative: Je n'___ pas de chien.",
                options: ["suis", "ai"],
                correct: 1,
                hint: "I don't have a dog. (Notice n' because ai starts with vowel)."
            },
             {
                id: "a1_03_q39",
                type: "sort",
                question: "Build: 'I am not rich.'",
                blocks: ["suis", "pas", "ne", "riche", "Je"],
                correct_order: ["Je", "ne", "suis", "pas", "riche"],
                hint: "Je + ne + verb + pas + adj."
            },

            // --- Rapid Fire / Review ---
            {
                id: "a1_03_q40",
                type: "choice",
                question: "On ___ (is) ici.",
                options: ["est", "sont", "es"],
                correct: 0,
                hint: "'On' takes the same conjugation as Il/Elle."
            },
            {
                id: "a1_03_q41",
                type: "choice",
                question: "Qui ___ (is) là ?",
                options: ["est", "es", "suis"],
                correct: 0,
                hint: "Who is there? (3rd person singular)."
            },
             {
                id: "a1_03_q42",
                type: "choice",
                question: "C'___ (it is) facile.",
                options: ["est", "a", "es"],
                correct: 0,
                hint: "C'est (It is)."
            },
             {
                id: "a1_03_q43",
                type: "choice",
                question: "Il y ___ (there is/has) un chat.",
                options: ["est", "a", "as"],
                correct: 1,
                hint: "The expression is 'Il y a' (literally 'It there has')."
            },
            {
                id: "a1_03_q44",
                type: "input",
                question: "Tu ___ (have) raison (right).",
                answer: "as",
                hint: "You are right -> You have reason (Avoir)."
            },
            {
                id: "a1_03_q45",
                type: "input",
                question: "Tu ___ (are) tort (wrong).",
                answer: "as",
                hint: "Wait! Trick question. In French, you HAVE wrong (Avoir tort)."
            },
             {
                id: "a1_03_q46",
                type: "choice",
                question: "Nous ___ (are) désolés.",
                options: ["sommes", "avons"],
                correct: 0,
                hint: "We are sorry."
            },
             {
                id: "a1_03_q47",
                type: "choice",
                question: "Vous ___ (have) de la chance (lucky).",
                options: ["êtes", "avez"],
                correct: 1,
                hint: "You have luck."
            },
             {
                id: "a1_03_q48",
                type: "sort",
                question: "Build: 'Where are you?' (Formal)",
                blocks: ["êtes", "Où", "vous", "?"],
                correct_order: ["Où", "êtes", "vous", "?"],
                hint: "Where + Verb + Subject."
            },
            {
                id: "a1_03_q49",
                type: "choice",
                question: "Elles ___ (are) sœurs.",
                options: ["sont", "ont"],
                correct: 0,
                hint: "They are sisters."
            },
            {
                id: "a1_03_q50",
                type: "choice",
                question: "J'___ (have) sommeil (sleepy).",
                options: ["ai", "suis"],
                correct: 0,
                hint: "I have sleepiness."
            }
        ]
    },
    "a1_04": {
        meta: {
            title: "Verbs ending in -er",
            tags: ["Basics", "Verbs", "Group 1", "A1"],
            color: "text-blue-600 bg-blue-50"
        },
        learn: {
            cheat_sheet: {
                summary: "90% of French verbs end in '-er'. They are regular and follow a strict pattern.",
                key_rule: "🔥 Drop the '-er'. Add: e, es, e, ons, ez, ent. (Pronunciation hack: 'ent' is silent!)"
            },
            explanation: [
                {
                    type: "text",
                    content: "Let's conjugate 'Parler' (to speak). The stem is 'Parl-'."
                },
                {
                    type: "table",
                    headers: ["Subject", "Ending", "Full Verb"],
                    rows: [
                        ["Je", "-e", "parle"],
                        ["Tu", "-es", "parles"],
                        ["Il/Elle", "-e", "parle"],
                        ["Nous", "-ons", "parlons"],
                        ["Vous", "-ez", "parlez"],
                        ["Ils/Elles", "-ent", "parlent (silent!)"]
                    ]
                },
                {
                    type: "warning",
                    title: "⚠️ The 'G' Rule (Manger)",
                    content: "For verbs ending in -ger (like Manger), we keep the 'e' in the 'Nous' form to keep the soft G sound. So it becomes 'Nous mangeons' (not mangons)."
                }
            ]
        },
        practice: [
            {
                id: "a1_04_q01",
                type: "choice",
                question: "Tu ___ (parler) anglais.",
                options: ["parle", "parles", "parlez"],
                correct: 1,
                hint: "With 'Tu', always add 's'."
            },
            {
                id: "a1_04_q02",
                type: "input",
                question: "Nous ___ (aimer) la France.",
                answer: "aimons",
                hint: "The ending is -ons."
            },
            {
                id: "a1_04_q03",
                type: "choice",
                question: "Ils ___ (habiter) à Paris.",
                options: ["habite", "habitent", "habitons"],
                correct: 1,
                hint: "Plural 'They' needs the silent '-ent' ending."
            },
            {
                id: "a1_04_q04",
                type: "choice",
                question: "Special Rule: Nous ___ (manger) une pizza.",
                options: ["mangons", "mangeons", "manges"],
                correct: 1,
                hint: "We need the extra 'e' to keep the G soft."
            },
            {
                id: "a1_04_q05",
                type: "sort",
                question: "Build: 'She watches TV' (regarder)",
                blocks: ["regarde", "la", "télé", "Elle"],
                correct_order: ["Elle", "regarde", "la", "télé"],
                hint: "Verb ending is -e for She."
            }
        ]
    },
    "a1_05": {
        meta: {
            title: "Negation",
            tags: ["Basics", "Sentence Structure", "A1"],
            color: "text-blue-600 bg-blue-50"
        },
        learn: {
            cheat_sheet: {
                summary: "To say 'not', you create a sandwich around the verb.",
                key_rule: "🔥 The Sandwich: ne + VERB + pas. (Je ne mange pas)."
            },
            explanation: [
                {
                    type: "text",
                    content: "Example: 'Je suis fatigué' (I am tired) -> 'Je NE suis PAS fatigué' (I am not tired)."
                },
                {
                    type: "warning",
                    title: "⚠️ The Vowel Crash",
                    content: "If the verb starts with a vowel, 'ne' becomes n'. Example: 'Je n'aime pas' (not 'Je ne aime pas')."
                },
                {
                    type: "text",
                    content: "In fast spoken French, people often drop the 'ne'. You might just hear 'Je mange pas'."
                }
            ]
        },
        practice: [
            {
                id: "a1_05_q01",
                type: "sort",
                question: "Negate: 'Je parle'",
                blocks: ["pas", "ne", "parle", "Je"],
                correct_order: ["Je", "ne", "parle", "pas"],
                hint: "Sandwich the verb."
            },
            {
                id: "a1_05_q02",
                type: "choice",
                question: "Correct negation for: 'J'aime le café'.",
                options: ["Je ne aime pas le café", "Je n'aime pas le café", "Je aime ne pas le café"],
                correct: 1,
                hint: "Aime starts with a vowel, so 'ne' becomes n'."
            },
            {
                id: "a1_05_q03",
                type: "input",
                question: "Tu ___ (are not) triste.",
                answer: "n'es pas",
                hint: "Verb is 'es'. Don't forget the n'."
            }
        ]
    },
    "a1_06": {
        meta: {
            title: "Asking Questions",
            tags: ["Basics", "Communication", "A1"],
            color: "text-blue-600 bg-blue-50"
        },
        learn: {
            cheat_sheet: {
                summary: "There are 3 ways to ask a question in French: Intonation (Easy), Est-ce que (Standard), and Inversion (Formal).",
                key_rule: "🔥 Easiest way: Just add '?' and raise your voice at the end. (Tu aimes le café ?)."
            },
            explanation: [
                {
                    type: "table",
                    headers: ["Method", "Example (You speak French?)"],
                    rows: [
                        ["1. Intonation (Casual)", "Tu parles français ?"],
                        ["2. Est-ce que (Standard)", "Est-ce que tu parles français ?"],
                        ["3. Inversion (Formal)", "Parles-tu français ?"]
                    ]
                },
                {
                    type: "text",
                    content: "Question words go at the beginning or end: 'Où' (Where), 'Quand' (When), 'Qui' (Who), 'Comment' (How)."
                }
            ]
        },
        practice: [
            {
                id: "a1_06_q01",
                type: "choice",
                question: "Make it a question: 'Il est ici.'",
                options: ["Est-ce qu'il est ici ?", "Il est ici est-ce que ?", "Quoi il est ici ?"],
                correct: 0,
                hint: "Start with 'Est-ce que'."
            },
            {
                id: "a1_06_q02",
                type: "input",
                question: "___ (Where) habites-tu ?",
                answer: "Où",
                hint: "3 letters. Means 'Where'."
            },
            {
                id: "a1_06_q03",
                type: "sort",
                question: "Build: 'Do you like Paris?' (Standard way)",
                blocks: ["tu", "aimes", "Est-ce", "que", "Paris", "?"],
                correct_order: ["Est-ce", "que", "tu", "aimes", "Paris", "?"],
                hint: "Start with the magic phrase 'Est-ce que'."
            }
        ]
    },
    "a1_07": {
        meta: {
            title: "Irregular: Aller & Faire",
            tags: ["Vital Verbs", "Irregular", "A1"],
            color: "text-blue-600 bg-blue-50"
        },
        learn: {
            cheat_sheet: {
                summary: "You cannot speak French without 'Aller' (to go) and 'Faire' (to do/make). They follow NO pattern.",
                key_rule: "🔥 Memorize these! 'Je vais' (I go) and 'Je fais' (I do)."
            },
            explanation: [
                {
                    type: "text",
                    content: "These are completely irregular. Don't try to find a rule."
                },
                {
                    type: "table",
                    headers: ["Subject", "Aller (to go)", "Faire (to do)"],
                    rows: [
                        ["Je", "vais", "fais"],
                        ["Tu", "vas", "fais"],
                        ["Il/Elle", "va", "fait"],
                        ["Nous", "allons", "faisons"],
                        ["Vous", "allez", "faites (!)",],
                        ["Ils/Elles", "vont (!)", "font (!)"]
                    ]
                },
                {
                    type: "warning",
                    title: "⚠️ Watch out!",
                    content: "Note the plural forms: 'Ils vont' (not allent) and 'Ils font' (not faisent). Also 'Vous faites' is very special!"
                }
            ]
        },
        practice: [
            {
                id: "a1_13_q01",
                type: "choice",
                question: "Je ___ (aller) au cinéma.",
                options: ["alle", "vais", "vas"],
                correct: 1,
                hint: "It sounds like 'vay'."
            },
            {
                id: "a1_13_q02",
                type: "choice",
                question: "Vous ___ (faire) du sport ?",
                options: ["faisez", "faisons", "faites"],
                correct: 2,
                hint: "It's a strict exception: faites."
            },
            {
                id: "a1_13_q03",
                type: "input",
                question: "Ils ___ (aller) à Paris.",
                answer: "vont",
                hint: "Starts with v."
            }
        ]
    },
    "a1_08": {
        meta: {
            title: "Verbs ending in -ir",
            tags: ["Grammar", "Verbs", "Group 2"],
            color: "text-blue-600 bg-blue-50"
        },
        learn: {
            cheat_sheet: {
                summary: "This is the '2nd Group'. They follow a regular pattern, but watch out for the plural forms!",
                key_rule: "🔥 The 'SS' Rule: In plural (nous/vous/ils), add '-iss-' before the ending. (Finir -> Nous finissons)."
            },
            explanation: [
                {
                    type: "text",
                    content: "Common verbs: Finir (to finish), Choisir (to choose), Réussir (to succeed). Drop the -ir and add:"
                },
                {
                    type: "table",
                    headers: ["Subject", "Ending", "Example (Finir)"],
                    rows: [
                        ["Je", "-is", "finis"],
                        ["Tu", "-is", "finis"],
                        ["Il/Elle", "-it", "finit"],
                        ["Nous", "-issons", "finissons"],
                        ["Vous", "-issez", "finissez"],
                        ["Ils/Elles", "-issent", "finissent"]
                    ]
                }
            ]
        },
        practice: [
            {
                id: "a1_11_q01",
                type: "choice",
                question: "Tu ___ (choisir) le dessert.",
                options: ["choisis", "choisit", "choisissez"],
                correct: 0,
                hint: "Tu always ends in 's' here."
            },
            {
                id: "a1_11_q02",
                type: "input",
                question: "Nous ___ (finir) le travail.",
                answer: "finissons",
                hint: "Don't forget the 'iss' for plural!"
            },
            {
                id: "a1_11_q03",
                type: "sort",
                question: "Build: 'She succeeds.'",
                blocks: ["Elle", "réussit", "réussis"],
                correct_order: ["Elle", "réussit"],
                hint: "3rd person singular ends in 't'."
            }
        ]
    },
    "a1_09": {
        meta: {
            title: "Verbs ending in -re",
            tags: ["Grammar", "Verbs", "Group 3"],
            color: "text-blue-600 bg-blue-50"
        },
        learn: {
            cheat_sheet: {
                summary: "Regular -re verbs (like Vendre or Attendre). They are easy because the 'Il/Elle' form has NO ending!",
                key_rule: "🔥 Drop the -re. Add: s, s, (nothing), ons, ez, ent."
            },
            explanation: [
                {
                    type: "text",
                    content: "Common verbs: Vendre (sell), Attendre (wait), Descendre (go down)."
                },
                {
                    type: "table",
                    headers: ["Subject", "Ending", "Example (Vendre)"],
                    rows: [
                        ["Je", "-s", "vends"],
                        ["Tu", "-s", "vends"],
                        ["Il/Elle", "-(nothing)", "vend"],
                        ["Nous", "-ons", "vendons"],
                        ["Vous", "-ez", "vendez"],
                        ["Ils/Elles", "-ent", "vendent"]
                    ]
                }
            ]
        },
        practice: [
            {
                id: "a1_12_q01",
                type: "choice",
                question: "Il ___ (attendre) le bus.",
                options: ["attends", "attend", "attendent"],
                correct: 1,
                hint: "He/She form has no extra ending letter."
            },
            {
                id: "a1_12_q02",
                type: "input",
                question: "Je ___ (vendre) mon vélo.",
                answer: "vends",
                hint: "First person adds 's'."
            }
        ]
    },
    "a1_10": {
        meta: {
            title: "Basic Adjectives",
            tags: ["Basics", "Description", "A1"],
            color: "text-blue-600 bg-blue-50"
        },
        learn: {
            cheat_sheet: {
                summary: "Adjectives must match the noun they describe in gender (masc/fem) and number (singular/plural).",
                key_rule: "🔥 General Rule: Add 'e' for feminine. Add 's' for plural. (Petit -> Petite -> Petits -> Petites)."
            },
            explanation: [
                {
                    type: "text",
                    content: "Most adjectives go AFTER the noun (une voiture rouge). But everyday adjectives (BAGS: Beauty, Age, Goodness, Size) go BEFORE (un petit garçon)."
                },
                {
                    type: "table",
                    headers: ["Masc", "Fem (+e)", "Masc Plural (+s)", "Fem Plural (+es)"],
                    rows: [
                        ["Grand (Tall)", "Grande", "Grands", "Grandes"],
                        ["Joli (Pretty)", "Jolie", "Jolis", "Jolies"],
                        ["Français", "Française", "Français (stays same)", "Françaises"]
                    ]
                },
                {
                    type: "warning",
                    title: "⚠️ Silent Letters",
                    content: "In 'Grand' (masc), the D is silent. In 'Grande' (fem), you pronounce the D because of the E at the end!"
                }
            ]
        },
        practice: [
            {
                id: "a1_10_q01",
                type: "choice",
                question: "Une ___ (green) pomme.",
                options: ["vert", "verte", "verts"],
                correct: 1,
                hint: "Pomme is feminine (une), so add 'e'."
            },
            {
                id: "a1_10_q02",
                type: "choice",
                question: "Des chats ___ (black).",
                options: ["noir", "noire", "noirs"],
                correct: 2,
                hint: "Chats is plural masculine."
            },
            {
                id: "a1_10_q03",
                type: "input",
                question: "Elle est ___ (intelligent).",
                answer: "intelligente",
                hint: "Add 'e' for feminine."
            },
            {
                id: "a1_10_q04",
                type: "sort",
                question: "Build: 'A little house' (Maison is fem)",
                blocks: ["Maison", "Une", "petite"],
                correct_order: ["Une", "petite", "Maison"],
                hint: "Size adjectives go BEFORE the noun."
            }
        ]
    },

    "a1_11": {
        meta: {
            title: "Prepositions (Place)",
            tags: ["Basics", "Location", "A1"],
            color: "text-blue-600 bg-blue-50"
        },
        learn: {
            cheat_sheet: {
                summary: "How to say 'in' or 'at' depends on what follows (City, Country, or Person).",
                key_rule: "🔥 Cities = À (à Paris). Female Countries = En (en France). Male Countries = Au (au Japon). People = Chez (chez moi)."
            },
            explanation: [
                {
                    type: "table",
                    headers: ["Destination", "Preposition", "Example"],
                    rows: [
                        ["City", "À", "Je suis à Berlin."],
                        ["Country (Fem - ends in e)", "En", "Je vais en Espagne."],
                        ["Country (Masc)", "Au", "Je vais au Canada."],
                        ["Person / Home", "Chez", "Je vais chez Paul."]
                    ]
                },
                {
                    type: "warning",
                    title: "⚠️ Within / Inside",
                    content: "To say physically 'inside' a building or object, use 'Dans'. Example: 'Je suis dans la cuisine' (I am in the kitchen)."
                }
            ]
        },
        practice: [
            {
                id: "a1_11_q01",
                type: "choice",
                question: "Je habite ___ Londres.",
                options: ["en", "à", "au"],
                correct: 1,
                hint: "Londres is a city."
            },
            {
                id: "a1_11_q02",
                type: "choice",
                question: "Il va ___ Italie.",
                options: ["au", "à", "en"],
                correct: 2,
                hint: "Italie ends in 'e', so it's feminine."
            },
            {
                id: "a1_11_q03",
                type: "input",
                question: "Je dors ___ (at) Thomas.",
                answer: "chez",
                hint: "Use this for people's places."
            },
            {
                id: "a1_11_q04",
                type: "choice",
                question: "Le chat est ___ la boîte (inside).",
                options: ["dans", "en", "à"],
                correct: 0,
                hint: "Physical location inside something."
            }
        ]
    },

    "a1_12": {
        meta: {
            title: "Partitive Articles",
            tags: ["Basics", "Food", "A1"],
            color: "text-blue-600 bg-blue-50"
        },
        learn: {
            cheat_sheet: {
                summary: "In English, you say 'I eat bread'. In French, you must say 'I eat OF THE bread' (Je mange DU pain). You rarely use nouns without articles.",
                key_rule: "🔥 Use 'Du' (masc), 'De la' (fem), or 'Des' (plural) for undefined quantities."
            },
            explanation: [
                {
                    type: "table",
                    headers: ["Gender", "Partitive Article", "Example"],
                    rows: [
                        ["Masculine", "Du", "Je bois du café."],
                        ["Feminine", "De la", "Je mange de la salade."],
                        ["Vowel start", "De l'", "Je bois de l'eau."],
                        ["Plural", "Des", "Je mange des pâtes."]
                    ]
                },
                {
                    type: "warning",
                    title: "⚠️ The Negative Trap",
                    content: "After a negation (pas, jamais), ALL partitive articles change to simply 'DE'. Example: 'J'ai du pain' -> 'Je n'ai PAS DE pain'."
                }
            ]
        },
        practice: [
            {
                id: "a1_12_q01",
                type: "choice",
                question: "Je veux ___ chocolat (m).",
                options: ["le", "du", "une"],
                correct: 1,
                hint: "You want 'some' chocolate, not 'the' chocolate."
            },
            {
                id: "a1_12_q02",
                type: "choice",
                question: "Je ne mange pas ___ viande.",
                options: ["de la", "une", "de"],
                correct: 2,
                hint: "Negative sentence! Always use 'de'."
            },
            {
                id: "a1_12_q03",
                type: "input",
                question: "Tu bois ___ (some) eau ?",
                answer: "de l'",
                hint: "Eau starts with a vowel."
            },
            {
                id: "a1_12_q04",
                type: "sort",
                question: "Build: 'I eat fries' (frites)",
                blocks: ["mange", "Je", "des", "frites"],
                correct_order: ["Je", "mange", "des", "frites"],
                hint: "Frites is plural."
            }
        ]
    },

    "a1_13": {
        meta: {
            title: "Demonstratives",
            tags: ["Basics", "Pointing", "A1"],
            color: "text-blue-600 bg-blue-50"
        },
        learn: {
            cheat_sheet: {
                summary: "Words for 'This', 'That', and 'These'. They point at specific objects.",
                key_rule: "🔥 Ce (Male), Cette (Female), Ces (Plural). Watch out for 'Cet'!"
            },
            explanation: [
                {
                    type: "table",
                    headers: ["Type", "Word", "Example"],
                    rows: [
                        ["Masc (Consonant)", "Ce", "Ce garçon (This boy)"],
                        ["Masc (Vowel)", "Cet", "Cet homme (This man)"],
                        ["Feminine", "Cette", "Cette femme (This woman)"],
                        ["Plural (All)", "Ces", "Ces gens (These people)"]
                    ]
                },
                {
                    type: "text",
                    content: "Tip: 'Cet' is used to make the pronunciation flow (avoiding two vowel sounds clashing), but it is still masculine."
                }
            ]
        },
        practice: [
            {
                id: "a1_13_q01",
                type: "choice",
                question: "___ fille est sympa.",
                options: ["Ce", "Cette", "Ces"],
                correct: 1,
                hint: "Fille is feminine."
            },
            {
                id: "a1_13_q02",
                type: "choice",
                question: "J'aime ___ hôtel.",
                options: ["ce", "cette", "cet"],
                correct: 2,
                hint: "Hôtel is masculine but starts with silent H (vowel sound)."
            },
            {
                id: "a1_13_q03",
                type: "input",
                question: "Regarde ___ (this) chien.",
                answer: "ce",
                hint: "Chien is masculine consonant."
            },
            {
                id: "a1_13_q04",
                type: "choice",
                question: "___ livres sont chers.",
                options: ["Ces", "Ce", "Cette"],
                correct: 0,
                hint: "Livres is plural."
            }
        ]
    },
    // ============================================================
    // LEVEL A2 - ELEMENTARY
    // ============================================================

    "a2_01": {
        meta: {
            title: "Passé Composé (Avoir)",
            tags: ["Past Tense", "Verbs", "A2"],
            color: "text-sky-600 bg-sky-50"
        },
        learn: {
            cheat_sheet: {
                summary: "The most common way to talk about the past. It describes finished actions.",
                key_rule: "🔥 Formula: Subject + AVOIR (conjugated) + Past Participle."
            },
            explanation: [
                {
                    type: "text",
                    content: "To form the Past Participle (the second part):"
                },
                {
                    type: "table",
                    headers: ["Verb Type", "Rule", "Example"],
                    rows: [
                        ["-er Verbs", "Change -er to -é", "Parler -> Parlé"],
                        ["-ir Verbs", "Change -ir to -i", "Finir -> Fini"],
                        ["-re Verbs", "Change -re to -u", "Vendre -> Vendu"]
                    ]
                },
                {
                    type: "warning",
                    title: "⚠️ Irregular Participles",
                    content: "Many common verbs are irregular! Être -> Été, Avoir -> Eu, Faire -> Fait, Boire -> Bu."
                }
            ]
        },
        practice: [
            {
                id: "a2_01_q01",
                type: "choice",
                question: "Hier, j'___ (manger) une pizza.",
                options: ["ai mangé", "as mangé", "a mangé"],
                correct: 0,
                hint: "Subject is 'Je', so helper is 'ai'."
            },
            {
                id: "a2_01_q02",
                type: "input",
                question: "Tu as ___ (finir) ton travail ?",
                answer: "fini",
                hint: "Drop -ir, add -i."
            },
            {
                id: "a2_01_q03",
                type: "sort",
                question: "Build: 'We watched TV'",
                blocks: ["regardé", "Nous", "la", "avons", "télé"],
                correct_order: ["Nous", "avons", "regardé", "la", "télé"],
                hint: "Subject + Helper + Participle."
            }
        ]
    },

    "a2_02": {
        meta: {
            title: "Passé Composé (Être)",
            tags: ["Past Tense", "Motion", "Agreement", "A2"],
            color: "text-sky-600 bg-sky-50"
        },
        learn: {
            cheat_sheet: {
                summary: "A small group of verbs (mostly motion/change of state) use ÊTRE instead of Avoir.",
                key_rule: "🔥 The Agreement Trap: If you use Être, the participle must match the subject! (Elle est allée)."
            },
            explanation: [
                {
                    type: "text",
                    content: "The 'House of Être' verbs (Dr. & Mrs. Vandertramp) include: Aller, Venir, Entrer, Sortir, Monter, Descendre, Naître, Mourir, Tomber, Rester..."
                },
                {
                    type: "table",
                    headers: ["Subject", "Verb (Aller)", "Agreement"],
                    rows: [
                        ["Il", "est allé", "-"],
                        ["Elle", "est allée", "+e"],
                        ["Ils", "sont allés", "+s"],
                        ["Elles", "sont allées", "+es"]
                    ]
                },
                {
                    type: "warning",
                    title: "⚠️ Only Motion!",
                    content: "Don't use Être for everything. 'J'ai marché' (I walked) uses Avoir because it's not in the special list."
                }
            ]
        },
        practice: [
            {
                id: "a2_02_q01",
                type: "choice",
                question: "Elle est ___ (partir).",
                options: ["parti", "partie", "partis"],
                correct: 1,
                hint: "She (Elle) needs an extra 'e'."
            },
            {
                id: "a2_02_q02",
                type: "choice",
                question: "Nous (mixed group) sommes ___ (venir).",
                options: ["venus", "venues", "venu"],
                correct: 0,
                hint: "Plural + Mixed = Masculine Plural (+s)."
            },
            {
                id: "a2_02_q03",
                type: "sort",
                question: "Build: 'They (fem) fell.'",
                blocks: ["tombées", "sont", "Elles"],
                correct_order: ["Elles", "sont", "tombées"],
                hint: "Tomber uses Être. Match gender/number."
            }
        ]
    },
    "a2_03": {
        meta: {
            title: "Reflexive Verbs",
            tags: ["Routine", "Verbs", "A2"],
            color: "text-sky-600 bg-sky-50"
        },
        learn: {
            cheat_sheet: {
                summary: "Verbs where the subject and object are the same (washing oneself).",
                key_rule: "🔥 You need an extra pronoun: Me, Te, Se, Nous, Vous, Se."
            },
            explanation: [
                {
                    type: "text",
                    content: "Example: 'Se laver' (to wash oneself)."
                },
                {
                    type: "table",
                    headers: ["Subject", "Reflexive", "Verb"],
                    rows: [
                        ["Je", "me", "lave"],
                        ["Tu", "te", "laves"],
                        ["Il/Elle", "se", "lave"],
                        ["Nous", "nous", "lavons"],
                        ["Vous", "vous", "lavez"],
                        ["Ils", "se", "lavent"]
                    ]
                },
                {
                    type: "warning",
                    title: "⚠️ Past Tense Alert",
                    content: "In Passé Composé, ALL reflexive verbs use Être! Example: 'Je me suis lavé'."
                }
            ]
        },
        practice: [
            {
                id: "a2_03_q01",
                type: "choice",
                question: "Tu ___ lèves tôt.",
                options: ["me", "te", "se"],
                correct: 1,
                hint: "Tu goes with Te."
            },
            {
                id: "a2_03_q02",
                type: "input",
                question: "Nous ___ couchons tard.",
                answer: "nous",
                hint: "For 'Nous', the pronoun is also 'nous'."
            },
            {
                id: "a2_03_q03",
                type: "sort",
                question: "Build: 'He brushes his teeth' (se brosse)",
                blocks: ["dents", "se", "Il", "brosse", "les"],
                correct_order: ["Il", "se", "brosse", "les", "dents"],
                hint: "Subject + Pronoun + Verb."
            }
        ]
    },

    "a2_04": {
        meta: {
            title: "L'Imparfait",
            tags: ["Past Tense", "Description", "A2"],
            color: "text-sky-600 bg-sky-50"
        },
        learn: {
            cheat_sheet: {
                summary: "Used for descriptions, habits in the past, or setting the scene ('was doing').",
                key_rule: "🔥 Take the 'Nous' form of present tense, drop '-ons', add: ais, ais, ait, ions, iez, aient."
            },
            explanation: [
                {
                    type: "text",
                    content: "Example: Nous parlons -> Stem: Parl-. Conjugation:"
                },
                {
                    type: "table",
                    headers: ["Subject", "Ending", "Example"],
                    rows: [
                        ["Je", "-ais", "parlais"],
                        ["Tu", "-ais", "parlais"],
                        ["Il/Elle", "-ait", "parlait"],
                        ["Nous", "-ions", "parlions"],
                        ["Vous", "-iez", "parliez"],
                        ["Ils", "-aient", "parlaient"]
                    ]
                },
                {
                    type: "warning",
                    title: "⚠️ The Only Irregular",
                    content: "Être is the only irregular stem in Imparfait: 'J'étais' (I was)."
                }
            ]
        },
        practice: [
            {
                id: "a2_04_q01",
                type: "choice",
                question: "Quand j'___ (être) petit...",
                options: ["étais", "suis", "été"],
                correct: 0,
                hint: "Imparfait for 'When I was young'."
            },
            {
                id: "a2_04_q02",
                type: "input",
                question: "Il ___ (faire) beau. (It was nice weather)",
                answer: "faisait",
                hint: "Stem 'fais-' + 'ait'."
            },
            {
                id: "a2_04_q03",
                type: "choice",
                question: "Meaning of: 'Je lisais'.",
                options: ["I read (once)", "I was reading"],
                correct: 1,
                hint: "Imparfait implies an ongoing action."
            }
        ]
    },

    "a2_05": {
        meta: {
            title: "Imparfait vs. P.C.",
            tags: ["Past Tense", "Advanced", "A2"],
            color: "text-sky-600 bg-sky-50"
        },
        learn: {
            cheat_sheet: {
                summary: "The hardest concept in A2! Knowing when to use which past tense.",
                key_rule: "🔥 P.C. = A specific event (BOOM). Imparfait = Background, Habit, or Description (WAVE)."
            },
            explanation: [
                {
                    type: "table",
                    headers: ["Context", "Tense", "Example"],
                    rows: [
                        ["Specific Action", "Passé Composé", "Un jour, je suis tombé."],
                        ["Description/Weather", "Imparfait", "Le ciel était bleu."],
                        ["Habit (Used to)", "Imparfait", "Je jouais souvent."],
                        ["Interruption", "Imp (Background) + PC (Action)", "Je dormais quand tu as téléphoné."]
                    ]
                },
                 // 
                {
                    type: "text",
                    content: "Ask yourself: Did it happen ONCE (PC) or was it ONGOING (Imp)?"
                }
            ]
        },
        practice: [
            {
                id: "a2_05_q01",
                type: "choice",
                question: "Soudain (Suddenly), il ___ (arriver).",
                options: ["arrivait", "est arrivé"],
                correct: 1,
                hint: "'Suddenly' signals a specific event -> PC."
            },
            {
                id: "a2_05_q02",
                type: "choice",
                question: "Tous les jours (Every day), je ___ (manger) des pâtes.",
                options: ["mangeais", "ai mangé"],
                correct: 0,
                hint: "'Every day' signals a habit -> Imparfait."
            },
            {
                id: "a2_05_q03",
                type: "sort",
                question: "Build: 'I was sleeping when he entered.'",
                blocks: ["entré", "Je", "quand", "est", "il", "dormais"],
                correct_order: ["Je", "dormais", "quand", "il", "est", "entré"],
                hint: "Sleeping is background (Imp), entering is action (PC)."
            }
        ]
    },

    "a2_06": {
        meta: {
            title: "Futur Proche",
            tags: ["Future", "Basics", "A2"],
            color: "text-sky-600 bg-sky-50"
        },
        learn: {
            cheat_sheet: {
                summary: "The 'Going to' future. It's very easy and used for immediate plans.",
                key_rule: "🔥 Conjugated ALLER + Infinitive (Je vais manger)."
            },
            explanation: [
                {
                    type: "text",
                    content: "You just need to know the verb Aller (to go) in the present tense."
                },
                {
                    type: "table",
                    headers: ["Subject", "Aller", "Infinitive"],
                    rows: [
                        ["Je", "vais", "partir"],
                        ["Tu", "vas", "partir"],
                        ["Il", "va", "partir"],
                        ["Nous", "allons", "partir"],
                        ["Vous", "allez", "partir"],
                        ["Ils", "vont", "partir"]
                    ]
                }
            ]
        },
        practice: [
            {
                id: "a2_06_q01",
                type: "choice",
                question: "Je ___ (aller) jouer au tennis.",
                options: ["vais", "vas", "va"],
                correct: 0,
                hint: "First person singular of Aller."
            },
            {
                id: "a2_06_q02",
                type: "sort",
                question: "Build: 'We are going to dance.'",
                blocks: ["danser", "allons", "Nous"],
                correct_order: ["Nous", "allons", "danser"],
                hint: "Subject + Aller + Infinitive."
            },
            {
                id: "a2_06_q03",
                type: "choice",
                question: "Negative: 'I am not going to eat.'",
                options: ["Je ne vais pas manger", "Je vais ne pas manger", "Je ne manger pas vais"],
                correct: 0,
                hint: "The sandwich (ne...pas) goes around the conjugated verb (vais)."
            }
        ]
    },

    "a2_07": {
        meta: {
            title: "Futur Simple",
            tags: ["Future", "Predictions", "A2"],
            color: "text-sky-600 bg-sky-50"
        },
        learn: {
            cheat_sheet: {
                summary: "The 'Will' future. Used for distant plans, promises, or predictions.",
                key_rule: "🔥 Use the entire Infinitive as stem + Avoir endings (ai, as, a, ons, ez, ont)."
            },
            explanation: [
                {
                    type: "text",
                    content: "Example: Parler -> Je parler-ai."
                },
                {
                    type: "table",
                    headers: ["Subject", "Ending", "Example (Finir)"],
                    rows: [
                        ["Je", "-ai", "finirai"],
                        ["Tu", "-as", "finiras"],
                        ["Il", "-a", "finira"],
                        ["Nous", "-ons", "finirons"],
                        ["Vous", "-ez", "finirez"],
                        ["Ils", "-ont", "finiront"]
                    ]
                },
                {
                    type: "warning",
                    title: "⚠️ Irregular Stems",
                    content: "Some verbs have special stems: Être (ser-), Avoir (aur-), Aller (ir-), Faire (fer-), Voir (verr-)."
                }
            ]
        },
        practice: [
            {
                id: "a2_07_q01",
                type: "choice",
                question: "Un jour, je ___ (parler) français couramment.",
                options: ["parlerai", "parle", "parlerais"],
                correct: 0,
                hint: "Ending is -ai for Je."
            },
            {
                id: "a2_07_q02",
                type: "input",
                question: "Il ___ (être - irregular) content.",
                answer: "sera",
                hint: "Stem is 'ser-'."
            },
            {
                id: "a2_07_q03",
                type: "choice",
                question: "Nous ___ (avoir - irregular) une maison.",
                options: ["aurons", "avoirons", "avrons"],
                correct: 0,
                hint: "Stem is 'aur-'."
            }
        ]
    },

    "a2_08": {
        meta: {
            title: "Direct Objects (COD)",
            tags: ["Pronouns", "Grammar", "A2"],
            color: "text-sky-600 bg-sky-50"
        },
        learn: {
            cheat_sheet: {
                summary: "Replacing the direct object (the thing/person receiving the action).",
                key_rule: "🔥 Le (him/it), La (her/it), Les (them). It goes BEFORE the verb!"
            },
            explanation: [
                {
                    type: "text",
                    content: "Question: 'Do you see the car?' -> 'Yes, I see IT.' (Oui, je LA vois)."
                },
                {
                    type: "table",
                    headers: ["Object", "Pronoun", "Sentence"],
                    rows: [
                        ["Masculine", "Le", "Je le regarde."],
                        ["Feminine", "La", "Je la regarde."],
                        ["Vowel", "L'", "Je l'aime."],
                        ["Plural", "Les", "Je les regarde."]
                    ]
                },
                 // 
                {
                    type: "text",
                    content: "In 'Passé Composé', place it before the helper: 'Je l'ai vu'."
                }
            ]
        },
        practice: [
            {
                id: "a2_08_q01",
                type: "choice",
                question: "Tu aimes la pizza ? Oui, je ___ aime.",
                options: ["la", "le", "l'"],
                correct: 2,
                hint: "Aime starts with a vowel."
            },
            {
                id: "a2_08_q02",
                type: "sort",
                question: "Build: 'I see him.'",
                blocks: ["vois", "le", "Je"],
                correct_order: ["Je", "le", "vois"],
                hint: "Pronoun goes before the verb."
            },
            {
                id: "a2_08_q03",
                type: "choice",
                question: "Il mange les pommes ? Oui, il ___ mange.",
                options: ["les", "des", "las"],
                correct: 0,
                hint: "Plural is always 'les'."
            }
        ]
    },

    "a2_09": {
        meta: {
            title: "Indirect Objects (COI)",
            tags: ["Pronouns", "Grammar", "A2"],
            color: "text-sky-600 bg-sky-50"
        },
        learn: {
            cheat_sheet: {
                summary: "Replacing a person introduced by 'à' (to someone).",
                key_rule: "🔥 Lui (to him/her), Leur (to them). Note: 'Lui' works for both men and women!"
            },
            explanation: [
                {
                    type: "text",
                    content: "Used with verbs of communication: Parler à, Téléphoner à, Donner à..."
                },
                {
                    type: "table",
                    headers: ["Target", "Pronoun", "Example"],
                    rows: [
                        ["à Paul (M)", "Lui", "Je lui parle."],
                        ["à Marie (F)", "Lui", "Je lui parle (Same!)."],
                        ["à Paul et Marie", "Leur", "Je leur parle."]
                    ]
                },
                {
                    type: "warning",
                    title: "⚠️ COI vs COD",
                    content: "Direct: Je LE vois (I see him). Indirect: Je LUI parle (I speak TO him)."
                }
            ]
        },
        practice: [
            {
                id: "a2_09_q01",
                type: "choice",
                question: "Je téléphone à ma mère -> Je ___ téléphone.",
                options: ["la", "lui", "elle"],
                correct: 1,
                hint: "Téléphoner à = Indirect. Singular = Lui."
            },
            {
                id: "a2_09_q02",
                type: "input",
                question: "Je donne un cadeau aux enfants -> Je ___ donne un cadeau.",
                answer: "leur",
                hint: "Plural indirect object."
            },
            {
                id: "a2_09_q03",
                type: "choice",
                question: "Il parle à Pierre ?",
                options: ["Il lui parle", "Il le parle", "Il se parle"],
                correct: 0,
                hint: "Parler à = Indirect."
            }
        ]
    },

    "a2_10": {
        meta: {
            title: "Imperative",
            tags: ["Verbs", "Commands", "A2"],
            color: "text-sky-600 bg-sky-50"
        },
        learn: {
            cheat_sheet: {
                summary: "Used to give orders or suggestions. You drop the subject pronoun (Tu, Nous, Vous).",
                key_rule: "🔥 For 'Tu' commands with -ER verbs, drop the final 's'! (Tu parles -> Parle !)."
            },
            explanation: [
                {
                    type: "text",
                    content: "There are only 3 forms: Tu (singular), Nous (Let's...), Vous (Plural/Formal)."
                },
                {
                    type: "table",
                    headers: ["Subject", "Present", "Imperative"],
                    rows: [
                        ["Tu", "Tu écoutes", "Écoute ! (No S)"],
                        ["Nous", "Nous écoutons", "Écoutons !"],
                        ["Vous", "Vous écoutez", "Écoutez !"]
                    ]
                },
                {
                    type: "text",
                    content: "Irregulars: Sois (Be!), Aie (Have!), Sache (Know!)."
                }
            ]
        },
        practice: [
            {
                id: "a2_10_q01",
                type: "choice",
                question: "Command: (Tu) Eat your soup!",
                options: ["Manges ta soupe", "Mange ta soupe", "Manger ta soupe"],
                correct: 1,
                hint: "Drop the 's' for -er verbs."
            },
            {
                id: "a2_10_q02",
                type: "choice",
                question: "Command: (Vous) Listen!",
                options: ["Écoutez !", "Écoutes !", "Écouter !"],
                correct: 0,
                hint: "Vous form ends in -ez."
            },
            {
                id: "a2_10_q03",
                type: "sort",
                question: "Build: 'Let's go!'",
                blocks: ["!", "Allons", "-y"],
                correct_order: ["Allons", "-y", "!"],
                hint: "Nous form of Aller."
            }
        ]
    },

    "a2_11": {
        meta: {
            title: "Comparisons",
            tags: ["Adjectives", "A2"],
            color: "text-sky-600 bg-sky-50"
        },
        learn: {
            cheat_sheet: {
                summary: "Comparing two things using adjectives.",
                key_rule: "🔥 Sandwich the adjective: Plus [adj] que... (More than) / Moins [adj] que... (Less than)."
            },
            explanation: [
                {
                    type: "table",
                    headers: ["Meaning", "Structure", "Example"],
                    rows: [
                        ["More (+)", "Plus ... que", "Il est plus grand que moi."],
                        ["Less (-)", "Moins ... que", "C'est moins cher que ça."],
                        ["Equal (=)", "Aussi ... que", "Elle est aussi belle que Marie."]
                    ]
                },
                {
                    type: "warning",
                    title: "⚠️ The 'Better' Trap",
                    content: "Never say 'Plus bon'. The comparative of 'Bon' (Good) is 'Meilleur' (Better). Just like 'Gooder' doesn't exist in English!"
                }
            ]
        },
        practice: [
            {
                id: "a2_11_q01",
                type: "choice",
                question: "Ferrari is ___ (more) fast than Ford.",
                options: ["plus", "moins", "aussi"],
                correct: 0,
                hint: "Superiority."
            },
            {
                id: "a2_11_q02",
                type: "input",
                question: "Ce gâteau est ___ (better) que l'autre.",
                answer: "meilleur",
                hint: "Irregular form of 'bon'."
            },
            {
                id: "a2_11_q03",
                type: "sort",
                question: "Build: 'He is less tall than Paul.'",
                blocks: ["moins", "Il", "grand", "est", "Paul", "que"],
                correct_order: ["Il", "est", "moins", "grand", "que", "Paul"],
                hint: "Sandwich: Moins + Adj + Que."
            }
        ]
    },
    // ============================================================
    // LEVEL B1 - INTERMEDIATE
    // ============================================================

    "b1_01": {
        meta: {
            title: "Pronouns 'y' and 'en'",
            tags: ["Pronouns", "Shortcuts", "B1"],
            color: "text-emerald-600 bg-emerald-50"
        },
        learn: {
            cheat_sheet: {
                summary: "These small words replace places or quantities so you don't repeat yourself.",
                key_rule: "🔥 'Y' replaces places (à + location). 'En' replaces quantities (de + noun)."
            },
            explanation: [
                {
                    type: "table",
                    headers: ["Pronoun", "Replaces", "Example"],
                    rows: [
                        ["Y", "à + Place", "Je vais à Paris -> J'y vais."],
                        ["Y", "à + Thing", "Je pense à mon avenir -> J'y pense."],
                        ["En", "de + Thing", "Je viens de Rome -> J'en viens."],
                        ["En", "Quantity", "J'ai trois pommes -> J'en ai trois."]
                    ]
                },
                {
                    type: "warning",
                    title: "⚠️ Position",
                    content: "Like other pronouns, they go BEFORE the conjugated verb! (Je n'y vais pas)."
                }
            ]
        },
        practice: [
            {
                id: "b1_01_q01",
                type: "choice",
                question: "Tu vas au cinéma ? Oui, j'___ vais.",
                options: ["y", "en", "le"],
                correct: 0,
                hint: "Au cinéma = à + le cinéma (Place)."
            },
            {
                id: "b1_01_q02",
                type: "choice",
                question: "Tu veux du café ? Oui, j'___ veux.",
                options: ["y", "le", "en"],
                correct: 2,
                hint: "Du café = Partitive quantity."
            },
            {
                id: "b1_01_q03",
                type: "sort",
                question: "Build: 'I have two (of them).'",
                blocks: ["ai", "J'", "deux", "en"],
                correct_order: ["J'", "en", "ai", "deux"],
                hint: "Pronoun before verb."
            }
        ]
    },

    "b1_02": {
        meta: {
            title: "Relative Pronouns I",
            tags: ["Sentence Building", "Connections", "B1"],
            color: "text-emerald-600 bg-emerald-50"
        },
        learn: {
            cheat_sheet: {
                summary: "Words like 'Who', 'That', 'Where' to connect two sentences.",
                key_rule: "🔥 QUI followed by a Verb. QUE followed by a Subject. OÙ for place/time."
            },
            explanation: [
                {
                    type: "text",
                    content: "Don't translate 'Who' or 'That' directly from English. Look at the grammar function!"
                },
                {
                    type: "table",
                    headers: ["Word", "Function", "Example"],
                    rows: [
                        ["Qui", "Subject (The actor)", "L'homme QUI parle (The man who speaks)."],
                        ["Que", "Object (The target)", "La pomme QUE je mange (The apple that I eat)."],
                        ["Où", "Place / Time", "La maison OÙ j'habite (The house where I live)."]
                    ]
                },
                {
                    type: "warning",
                    title: "⚠️ Qu' vowel clash",
                    content: "Que becomes Qu' before a vowel. Qui NEVER changes! (L'homme qu'elle aime vs L'homme qui aime)."
                }
            ]
        },
        practice: [
            {
                id: "b1_02_q01",
                type: "choice",
                question: "C'est le film ___ je préfère.",
                options: ["qui", "que", "où"],
                correct: 1,
                hint: "Followed by 'je' (Subject), so we need the Object pronoun."
            },
            {
                id: "b1_02_q02",
                type: "choice",
                question: "C'est le chien ___ aboie (barks).",
                options: ["qui", "que", "qu'"],
                correct: 0,
                hint: "Followed by a verb, so it's the Subject."
            },
            {
                id: "b1_02_q03",
                type: "input",
                question: "Le jour ___ (where/when) je suis né.",
                answer: "où",
                hint: "Refers to a time."
            }
        ]
    },

    "b1_03": {
        meta: {
            title: "Relative Pronouns II (Dont)",
            tags: ["Advanced Grammar", "Dont", "B1"],
            color: "text-emerald-600 bg-emerald-50"
        },
        learn: {
            cheat_sheet: {
                summary: "'Dont' is the tricky one. It replaces anything followed by 'DE'.",
                key_rule: "🔥 Translates to 'Whose', 'Of which', or 'About which'."
            },
            explanation: [
                {
                    type: "text",
                    content: "Use 'Dont' when the verb needs 'de' (parler de, avoir besoin de, être fier de)."
                },
                {
                    type: "table",
                    headers: ["Phrase", "Transformation", "Result"],
                    rows: [
                        ["Parler de", "Le livre (je parle de ce livre)", "Le livre DONT je parle."],
                        ["Avoir besoin de", "L'argent (j'ai besoin de cet argent)", "L'argent DONT j'ai besoin."],
                        ["Possession", "L'homme (le fils de l'homme)", "L'homme DONT le fils... (Whose son)."]
                    ]
                }
            ]
        },
        practice: [
            {
                id: "b1_03_q01",
                type: "choice",
                question: "C'est le livre ___ j'ai besoin.",
                options: ["que", "dont", "qui"],
                correct: 1,
                hint: "Avoir besoin DE -> Dont."
            },
            {
                id: "b1_03_q02",
                type: "choice",
                question: "L'ami ___ je parle est sympa.",
                options: ["que", "dont", "où"],
                correct: 1,
                hint: "Parler DE -> Dont."
            },
            {
                id: "b1_03_q03",
                type: "input",
                question: "L'homme ___ (whose) la femme est médecin.",
                answer: "dont",
                hint: "Possession (of whom)."
            }
        ]
    },

    "b1_04": {
        meta: {
            title: "Conditional Present",
            tags: ["Politeness", "Wishes", "B1"],
            color: "text-emerald-600 bg-emerald-50"
        },
        learn: {
            cheat_sheet: {
                summary: "Used for politeness ('I would like') or advice ('You should').",
                key_rule: "🔥 Stem of Futur Simple + Endings of Imparfait (-ais, -ais, -ait, -ions, -iez, -aient)."
            },
            explanation: [
                {
                    type: "table",
                    headers: ["Context", "Example"],
                    rows: [
                        ["Politeness", "Je voudrais un café (I would like)."],
                        ["Advice (Devoir)", "Tu devrais dormir (You should sleep)."],
                        ["Possibility", "On pourrait aller au parc (We could go)."]
                    ]
                },
                {
                    type: "text",
                    content: "Formula: Infinitive (Whole verb) + ais/ais/ait/ions/iez/aient. (Parler -> Je parlerais)."
                }
            ]
        },
        practice: [
            {
                id: "b1_04_q01",
                type: "choice",
                question: "Je ___ (vouloir) une baguette, s'il vous plaît.",
                options: ["voudrais", "veux", "voulait"],
                correct: 0,
                hint: "Polite form uses Conditional."
            },
            {
                id: "b1_04_q02",
                type: "input",
                question: "Tu ___ (aimer) ce film. (You would like)",
                answer: "aimerais",
                hint: "Aimer + ais."
            },
            {
                id: "b1_04_q03",
                type: "choice",
                question: "Il ___ (devoir - should) travailler.",
                options: ["devrait", "devra", "doit"],
                correct: 0,
                hint: "Stem 'devr-' + ait."
            }
        ]
    },

    "b1_05": {
        meta: {
            title: "Hypothesis (Si clauses)",
            tags: ["Grammar", "If-clauses", "B1"],
            color: "text-emerald-600 bg-emerald-50"
        },
        learn: {
            cheat_sheet: {
                summary: "Expressing 'If X happened, Y would happen'. It's purely hypothetical.",
                key_rule: "🔥 The Combo: Si + Imparfait + Conditionnel."
            },
            explanation: [
                {
                    type: "text",
                    content: "Example: If I were rich (Imparfait), I would buy a boat (Conditional)."
                },
                {
                    type: "table",
                    headers: ["Si Clause (Imparfait)", "Result (Conditionnel)"],
                    rows: [
                        ["Si j'avais le temps,", "je viendrais."],
                        ["Si tu étais là,", "on mangerait."],
                        ["S'il faisait beau,", "elle sortirait."]
                    ]
                },
                {
                    type: "warning",
                    title: "⚠️ No Future in 'Si'",
                    content: "Never say 'Si je serais'. After 'Si', use Imparfait (Si j'étais)!"
                }
            ]
        },
        practice: [
            {
                id: "b1_05_q01",
                type: "choice",
                question: "Si j'___ (avoir) de l'argent, je voyagerais.",
                options: ["ai", "avais", "aurais"],
                correct: 1,
                hint: "Si + Imparfait."
            },
            {
                id: "b1_05_q02",
                type: "choice",
                question: "Si tu étudiais, tu ___ (réussir).",
                options: ["réussirais", "réussissais", "réussiras"],
                correct: 0,
                hint: "Result needs Conditional."
            },
            {
                id: "b1_05_q03",
                type: "sort",
                question: "Build: 'If I knew, I would say.'",
                blocks: ["dirais", "le", "savais", "Si", "je", "je"],
                correct_order: ["Si", "je", "savais", "je", "le", "dirais"],
                hint: "Si + Imparfait -> Conditional."
            }
        ]
    },

    "b1_06": {
        meta: {
            title: "Subjonctif (Basics)",
            tags: ["Moods", "Necessity", "B1"],
            color: "text-emerald-600 bg-emerald-50"
        },
        learn: {
            cheat_sheet: {
                summary: "The Subjunctive is a **Mood** (attitude), not a Tense (time). It expresses **Subjectivity**: Necessity, Doubt, Emotion, or Possibility.",
                key_rule: "🔥 **The 2-Step Formation:**\n1. Take the **'Ils'** form of the present tense (e.g., *Ils finissent*).\n2. Drop **-ent** to get the stem (*finiss-*).\n3. Add: **-e, -es, -e, -ions, -iez, -ent**."
            },
            explanation: [
                {
                    type: "text",
                    content: "The Subjunctive is usually introduced by **QUE** (that) and a specific trigger phrase like *'Il faut que'* (It is necessary that)."
                },
                {
                    type: "table",
                    headers: ["Subject", "Ending", "Example (Lire -> Ils lisent -> Lis-)"],
                    rows: [
                        ["Je / J'", "-e", "que je lis**e**"],
                        ["Tu", "-es", "que tu lis**es**"],
                        ["Il / Elle / On", "-e", "qu'il lis**e**"],
                        ["Nous", "-ions", "que nous lis**ions**"],
                        ["Vous", "-iez", "que vous lis**iez**"],
                        ["Ils / Elles", "-ent", "qu'ils lis**ent**"]
                    ]
                },
                {
                    type: "warning",
                    title: "⚠️ The 'Nous/Vous' Trap",
                    content: "For regular verbs, the 'Nous' and 'Vous' forms look exactly like the **Imparfait** (ions, iez). Don't let this confuse you!"
                },
                {
                    type: "text",
                    content: "**The Irregulars:** Some verbs don't follow the 'Ils' rule. You must memorize their stems:"
                },
                {
                    type: "table",
                    headers: ["Verb", "Stem", "Example (Je)"],
                    rows: [
                        ["Être", "soi- / soy-", "que je sois"],
                        ["Avoir", "ai- / ay-", "que j'aie"],
                        ["Faire", "fass-", "que je fasse"],
                        ["Aller", "aill- / all-", "que j'aille"],
                        ["Pouvoir", "puiss-", "que je puisse"],
                        ["Savoir", "sach-", "que je sache"]
                    ]
                },
                 {
                    type: "text",
                    content: "**Common Triggers (Necessity):**\n* *Il faut que...* (It is necessary that...)\n* *Il est important que...* (It is important that...)\n* *Il est nécessaire que...* (It is necessary that...)\n* *Je veux que...* (I want that...)"
                }
            ]
        },
        practice: [
            // --- GROUP 1: -ER Verbs (Regular) ---
            {
                id: "b1_06_q01",
                type: "choice",
                question: "Il faut que je ___ (parler).",
                options: ["parle", "parles", "parlerais"],
                correct: 0,
                hint: "Regular -er verbs look like present tense for 'Je'."
            },
            {
                id: "b1_06_q02",
                type: "choice",
                question: "Il est important que tu ___ (écouter).",
                options: ["écoutes", "écoute", "écoutez"],
                correct: 0,
                hint: "Ending for Tu is always -es."
            },
            {
                id: "b1_06_q03",
                type: "choice",
                question: "Je veux qu'il ___ (manger).",
                options: ["mange", "manges", "mangent"],
                correct: 0,
                hint: "Ending for Il is -e."
            },
            {
                id: "b1_06_q04",
                type: "choice",
                question: "Il faut qu'ils ___ (regarder).",
                options: ["regardent", "regardes", "regardons"],
                correct: 0,
                hint: "Plural ending is -ent."
            },
            {
                id: "b1_06_q05",
                type: "input",
                question: "Il est nécessaire que j'___ (aimer) ça.",
                answer: "aime",
                hint: "Simple -e ending."
            },
            {
                id: "b1_06_q06",
                type: "choice",
                question: "Pour que nous ___ (danser).",
                options: ["dansions", "dansons", "dansiez"],
                correct: 0,
                hint: "Nous form needs -ions (looks like Imparfait)."
            },
            {
                id: "b1_06_q07",
                type: "choice",
                question: "Il faut que vous ___ (travailler).",
                options: ["travailliez", "travaillez", "travailler"],
                correct: 0,
                hint: "Vous form needs -iez."
            },
            {
                id: "b1_06_q08",
                type: "input",
                question: "Je ne pense pas qu'elle ___ (chanter).",
                answer: "chante",
                hint: "Third person singular -e."
            },
            {
                id: "b1_06_q09",
                type: "choice",
                question: "Il faut que tu ___ (fermer) la porte.",
                options: ["fermes", "ferme"],
                correct: 0,
                hint: "Tu = -es."
            },
            {
                id: "b1_06_q10",
                type: "sort",
                question: "Build: 'I must eat.' (Il faut que...)",
                blocks: ["mange", "que", "je", "Il", "faut"],
                correct_order: ["Il", "faut", "que", "je", "mange"],
                hint: "Standard phrase: Il faut que + Subject + Subjunctive."
            },

            // --- GROUP 2: -IR Verbs (The -ISS- Stem) ---
            {
                id: "b1_06_q11",
                type: "choice",
                question: "Il faut que je ___ (finir) ce soir.",
                options: ["finisse", "finit", "finis"],
                correct: 0,
                hint: "Base is 'Ils finissent' -> stem 'finiss-'."
            },
            {
                id: "b1_06_q12",
                type: "input",
                question: "Je veux que tu ___ (choisir).",
                answer: "choisisses",
                hint: "Stem 'choisiss-' + es."
            },
            {
                id: "b1_06_q13",
                type: "choice",
                question: "Il est important qu'il ___ (réussir).",
                options: ["réussisse", "réussit", "réussi"],
                correct: 0,
                hint: "Stem 'réussiss-' + e."
            },
            {
                id: "b1_06_q14",
                type: "choice",
                question: "Pour que nous ___ (finir).",
                options: ["finissions", "finissons", "finissiez"],
                correct: 0,
                hint: "Stem 'finiss-' + ions."
            },
            {
                id: "b1_06_q15",
                type: "input",
                question: "Il faut qu'ils ___ (agir).",
                answer: "agissent",
                hint: "Stem 'agiss-' + ent."
            },

            // --- GROUP 3: -RE Verbs (Regular-ish) ---
            {
                id: "b1_06_q16",
                type: "choice",
                question: "Il faut que tu ___ (attendre).",
                options: ["attendes", "attends", "attendez"],
                correct: 0,
                hint: "Stem 'attend-' + es."
            },
            {
                id: "b1_06_q17",
                type: "choice",
                question: "Je veux qu'elle ___ (répondre).",
                options: ["réponde", "répond", "répondit"],
                correct: 0,
                hint: "Stem 'répond-' + e."
            },
            {
                id: "b1_06_q18",
                type: "choice",
                question: "Il faut que nous ___ (vendre).",
                options: ["vendions", "vendons", "vendent"],
                correct: 0,
                hint: "Stem 'vend-' + ions."
            },
            {
                id: "b1_06_q19",
                type: "input",
                question: "Il est nécessaire que je ___ (descendre).",
                answer: "descende",
                hint: "Stem 'descend-' + e."
            },
            {
                id: "b1_06_q20",
                type: "choice",
                question: "Il faut qu'ils ___ (entendre).",
                options: ["entendent", "entendaient"],
                correct: 0,
                hint: "Present subjunctive ends in -ent."
            },

            // --- IRREGULARS: ÊTRE (Sois...) ---
            {
                id: "b1_06_q21",
                type: "choice",
                question: "Il faut que je ___ (être) fort.",
                options: ["sois", "suis", "soit"],
                correct: 0,
                hint: "Je sois."
            },
            {
                id: "b1_06_q22",
                type: "choice",
                question: "Je veux que tu ___ (être) heureux.",
                options: ["sois", "es", "soit"],
                correct: 0,
                hint: "Tu sois."
            },
            {
                id: "b1_06_q23",
                type: "choice",
                question: "Il est important qu'il ___ (être) là.",
                options: ["soit", "est", "sois"],
                correct: 0,
                hint: "Il soit."
            },
            {
                id: "b1_06_q24",
                type: "input",
                question: "Il faut que nous ___ (être) prudents.",
                answer: "soyons",
                hint: "Nous form of Être (Subj)."
            },
            {
                id: "b1_06_q25",
                type: "choice",
                question: "Pour que vous ___ (être) contents.",
                options: ["soyez", "êtes", "étiez"],
                correct: 0,
                hint: "Vous form: Soyez."
            },

            // --- IRREGULARS: AVOIR (Aie...) ---
            {
                id: "b1_06_q26",
                type: "choice",
                question: "Il faut que j'___ (avoir) du temps.",
                options: ["aie", "ai", "aies"],
                correct: 0,
                hint: "J'aie (pronounced like 'ai')."
            },
            {
                id: "b1_06_q27",
                type: "choice",
                question: "Je veux que tu ___ (avoir) de la chance.",
                options: ["aies", "as", "ait"],
                correct: 0,
                hint: "Tu aies."
            },
            {
                id: "b1_06_q28",
                type: "input",
                question: "Il faut qu'il ___ (avoir) son passeport.",
                answer: "ait",
                hint: "Il ait."
            },
            {
                id: "b1_06_q29",
                type: "choice",
                question: "Il est nécessaire que nous ___ (avoir) le courage.",
                options: ["ayons", "avons", "aurons"],
                correct: 0,
                hint: "Nous ayons."
            },
            {
                id: "b1_06_q30",
                type: "choice",
                question: "Il faut qu'ils ___ (avoir) de l'eau.",
                options: ["aient", "ont", "aies"],
                correct: 0,
                hint: "Ils aient."
            },

            // --- IRREGULARS: FAIRE & ALLER ---
            {
                id: "b1_06_q31",
                type: "choice",
                question: "Il faut que je ___ (faire) les courses.",
                options: ["fasse", "fais", "fasses"],
                correct: 0,
                hint: "Stem is 'Fass-'."
            },
            {
                id: "b1_06_q32",
                type: "input",
                question: "Je veux que tu ___ (faire) attention.",
                answer: "fasses",
                hint: "Fass- + es."
            },
            {
                id: "b1_06_q33",
                type: "choice",
                question: "Il faut qu'il ___ (aller) chez le médecin.",
                options: ["aille", "va", "allait"],
                correct: 0,
                hint: "Stem is 'Aill-'."
            },
            {
                id: "b1_06_q34",
                type: "choice",
                question: "Il faut que nous ___ (aller) ensemble.",
                options: ["allions", "allons", "aillons"],
                correct: 0,
                hint: "Careful! Nous/Vous forms use the regular 'All-' stem!"
            },
            {
                id: "b1_06_q35",
                type: "choice",
                question: "Je ne veux pas qu'ils ___ (faire) de bruit.",
                options: ["fassent", "font", "faisaient"],
                correct: 0,
                hint: "Plural Faire -> Fassent."
            },

            // --- IRREGULARS: POUVOIR & SAVOIR & VOULOIR ---
            {
                id: "b1_06_q36",
                type: "choice",
                question: "Il faut que tu ___ (pouvoir) venir.",
                options: ["puisses", "peux", "pourras"],
                correct: 0,
                hint: "Stem is 'Puiss-'."
            },
            {
                id: "b1_06_q37",
                type: "input",
                question: "Je veux qu'il ___ (savoir) la vérité.",
                answer: "sache",
                hint: "Stem is 'Sach-'."
            },
            {
                id: "b1_06_q38",
                type: "choice",
                question: "Il est important que vous ___ (pouvoir) partir.",
                options: ["puissiez", "pouvez", "pouviez"],
                correct: 0,
                hint: "Puiss- + iez."
            },
            {
                id: "b1_06_q39",
                type: "choice",
                question: "Il faut qu'elles ___ (vouloir) apprendre.",
                options: ["veuillent", "veulent", "voulent"],
                correct: 0,
                hint: "Stem changes to 'Veuill-'."
            },
            {
                id: "b1_06_q40",
                type: "choice",
                question: "Pour que nous ___ (savoir).",
                options: ["sachions", "savions", "sacheons"],
                correct: 0,
                hint: "Sach- + ions."
            },

            // --- STEM CHANGING & TRICKY VERBS ---
            {
                id: "b1_06_q41",
                type: "choice",
                question: "Il faut que je ___ (boire) de l'eau.",
                options: ["boive", "bois", "buve"],
                correct: 0,
                hint: "Stem changes to 'Boiv-'."
            },
            {
                id: "b1_06_q42",
                type: "choice",
                question: "Il faut que nous ___ (boire) moins.",
                options: ["buvions", "boivions", "buvons"],
                correct: 0,
                hint: "Nous form keeps the 'Buv-' stem from present."
            },
            {
                id: "b1_06_q43",
                type: "choice",
                question: "Il faut que tu ___ (prendre) le train.",
                options: ["prennes", "prends", "prenne"],
                correct: 0,
                hint: "Double N: Prenn-."
            },
            {
                id: "b1_06_q44",
                type: "choice",
                question: "Je veux que vous ___ (prendre) des photos.",
                options: ["preniez", "prenniez", "prenez"],
                correct: 0,
                hint: "Vous form: single N."
            },
            {
                id: "b1_06_q45",
                type: "input",
                question: "Il faut qu'ils ___ (venir).",
                answer: "viennent",
                hint: "Double N: Vienn-."
            },

            // --- MIXED / CHALLENGE ---
            {
                id: "b1_06_q46",
                type: "choice",
                question: "Il faut que tu ___ (lire) ce livre.",
                options: ["lises", "lis", "lit"],
                correct: 0,
                hint: "Stem 'Lis-' + es."
            },
            {
                id: "b1_06_q47",
                type: "choice",
                question: "Je veux qu'il ___ (écrire) une lettre.",
                options: ["écrive", "écrit", "écrives"],
                correct: 0,
                hint: "Stem 'Écriv-' + e."
            },
            {
                id: "b1_06_q48",
                type: "sort",
                question: "Build: 'You must do it.' (Il faut...)",
                blocks: ["fasses", "le", "que", "Il", "tu", "faut"],
                correct_order: ["Il", "faut", "que", "tu", "le", "fasses"],
                hint: "Pronoun 'le' goes before 'fasses'."
            },
            {
                id: "b1_06_q49",
                type: "choice",
                question: "Il est possible qu'il ___ (pleuvoir).",
                options: ["pleuve", "pleut", "pleuvera"],
                correct: 0,
                hint: "Irregular: Il pleuve."
            },
            {
                id: "b1_06_q50",
                type: "choice",
                question: "Je ne pense pas qu'il ___ (dire) la vérité.",
                options: ["dise", "dit", "disent"],
                correct: 0,
                hint: "Stem 'Dis-' + e."
            }
        ]
    },

    "b1_07": {
        meta: {
            title: "Subjonctif (Emotions)",
            tags: ["Moods", "Feelings", "B1"],
            color: "text-emerald-600 bg-emerald-50"
        },

        // --- TAB 1: LEARN ---
        learn: {
            cheat_sheet: {
                summary: "Use the Subjunctive after expressions of emotion (Happiness, Fear, Regret, Surprise, Anger).",
                key_rule: "🔥 **The Subject Rule:**\n* **Different** subjects = **Subjonctif** (Je suis content que *tu sois* là).\n* **Same** subject = **Infinitive** (Je suis content *d'être* là)."
            },
            explanation: [
                {
                    type: "text",
                    content: "When you express a feeling about an action, that action is subjective. Here are common triggers:"
                },
                {
                    type: "table",
                    headers: ["Emotion", "Phrase", "Example"],
                    rows: [
                        ["Happiness", "Être content que...", "...que tu viennes."],
                        ["Sadness", "Être triste que...", "...qu'il parte."],
                        ["Fear", "Avoir peur que...", "...que nous soyons en retard."],
                        ["Surprise", "Être surpris que...", "...qu'elle fasse ça."],
                        ["Regret", "C'est dommage que...", "...que tu ne puisses pas venir."]
                    ]
                },
                {
                    type: "warning",
                    title: "⚠️ Common Irregulars",
                    content: "You must know these by heart for B1:\n* **Être:** je sois, tu sois, il soit, nous soyons, vous soyez, ils soient.\n* **Avoir:** j'aie, tu aies, il ait, nous ayons, vous ayez, ils aient.\n* **Faire:** fass- | **Aller:** aill- | **Pouvoir:** puiss- | **Savoir:** sach-"
                },
                {
                    type: "text",
                    content: "**Pronunciation Tip:** For regular -ER verbs (parler), the singular subjunctive sounds exactly like the present tense (parle/parles/parle). Context is key!"
                }
            ]
        },

        // --- TAB 2: PRACTICE ---
        practice: [
            // --- Regular Verbs (Identification) ---
            {
                id: "b1_07_q01",
                type: "choice",
                question: "Je suis content que tu ___ (parler) français.",
                options: ["parles", "parlez", "parlons"],
                correct: 0,
                hint: "Regular -er verb. Subjunctive 'Tu' ends in -es."
            },
            {
                id: "b1_07_q02",
                type: "choice",
                question: "Elle est triste qu'il ___ (finir) déjà.",
                options: ["finit", "finisse", "finis"],
                correct: 1,
                hint: "IR verbs need the 'iss' base: Finisse."
            },
            {
                id: "b1_07_q03",
                type: "choice",
                question: "J'aime que vous ___ (attendre).",
                options: ["attendez", "attendiez", "attende"],
                correct: 1,
                hint: "Vous form in Subjunctive usually ends in -iez."
            },
            {
                id: "b1_07_q04",
                type: "input",
                question: "Il est surpris que je ___ (chanter).",
                answer: "chante",
                hint: "Regular -er ending for Je is -e."
            },
            {
                id: "b1_07_q05",
                type: "choice",
                question: "Nous sommes heureux qu'ils ___ (réussir).",
                options: ["réussissent", "réussient", "réussit"],
                correct: 0,
                hint: "Ils form requires -issent."
            },

            // --- Irregular Verbs (The Big Ones) ---
            {
                id: "b1_07_q06",
                type: "choice",
                question: "J'ai peur qu'il ___ (être) malade.",
                options: ["est", "soit", "sois"],
                correct: 1,
                hint: "Être is irregular: Il soit."
            },
            {
                id: "b1_07_q07",
                type: "choice",
                question: "Elle est ravie que nous ___ (avoir) le temps.",
                options: ["avons", "aies", "ayons"],
                correct: 2,
                hint: "Avoir is irregular: Nous ayons."
            },
            {
                id: "b1_07_q08",
                type: "input",
                question: "C'est dommage que tu ___ (faire) ça.",
                answer: "fasses",
                hint: "Faire stem is 'fass-'."
            },
            {
                id: "b1_07_q09",
                type: "choice",
                question: "Je crains qu'elle ne ___ (pouvoir) pas venir.",
                options: ["peut", "puisse", "pouvait"],
                correct: 1,
                hint: "Pouvoir stem is 'puiss-'."
            },
            {
                id: "b1_07_q10",
                type: "input",
                question: "Il est étonnant qu'ils ___ (savoir) la réponse.",
                answer: "sachent",
                hint: "Savoir stem is 'sach-'."
            },
             {
                id: "b1_07_q11",
                type: "choice",
                question: "Je suis désolé que vous ___ (être) tristes.",
                options: ["êtes", "soyez", "seriez"],
                correct: 1,
                hint: "Être with Vous = Soyez."
            },
            {
                id: "b1_07_q12",
                type: "choice",
                question: "J'adore que tu ___ (aller) à Paris.",
                options: ["vas", "ailles", "alliez"],
                correct: 1,
                hint: "Aller stem is 'aill-'."
            },

            // --- The "Same Subject" Trap (Infinitive vs Subjunctive) ---
            {
                id: "b1_07_q13",
                type: "choice",
                question: "Je suis content de ___ (voir) mes amis.",
                options: ["voir", "voie", "vois"],
                correct: 0,
                hint: "Same subject (Je... de...) -> Infinitive!"
            },
            {
                id: "b1_07_q14",
                type: "choice",
                question: "Tu as peur de ___ (tomber).",
                options: ["tombes", "tomber", "tombe"],
                correct: 1,
                hint: "Tu as peur de (You fear) -> Same subject -> Infinitive."
            },
            {
                id: "b1_07_q15",
                type: "choice",
                question: "Il regrette qu'elle ___ (partir).",
                options: ["partir", "parte"],
                correct: 1,
                hint: "Different subjects (Il vs Elle) -> Subjunctive."
            },
            {
                id: "b1_07_q16",
                type: "choice",
                question: "Nous sommes heureux d'___ (être) ici.",
                options: ["être", "soyons"],
                correct: 0,
                hint: "Same subject (Nous... de...) -> Infinitive."
            },
            {
                id: "b1_07_q17",
                type: "choice",
                question: "Je suis triste que tu ___ (partir).",
                options: ["partir", "partes"],
                correct: 1,
                hint: "Different subjects (Je vs Tu) -> Subjunctive."
            },

            // --- Emotions Vocabulary & Logic ---
            {
                id: "b1_07_q18",
                type: "choice",
                question: "Select the emotion: 'J'ai peur que...'",
                options: ["Happiness", "Fear", "Surprise"],
                correct: 1,
                hint: "Peur = Fear."
            },
            {
                id: "b1_07_q19",
                type: "choice",
                question: "Select the emotion: 'C'est dommage que...'",
                options: ["Regret/Pity", "Happiness", "Anger"],
                correct: 0,
                hint: "It means 'It is a shame/pity'."
            },
            {
                id: "b1_07_q20",
                type: "choice",
                question: "Select the emotion: 'Je suis ravi que...'",
                options: ["Sadness", "Delight/Happiness", "Fear"],
                correct: 1,
                hint: "Ravi = Delighted."
            },

            // --- Sentence Sorting (Structure) ---
            {
                id: "b1_07_q21",
                type: "sort",
                question: "Build: 'I am happy that you are here.'",
                blocks: ["là", "content", "que", "sois", "tu", "Je", "suis"],
                correct_order: ["Je", "suis", "content", "que", "tu", "sois", "là"],
                hint: "Main clause + que + Subjunctive."
            },
            {
                id: "b1_07_q22",
                type: "sort",
                question: "Build: 'She is afraid that he leaves.'",
                blocks: ["parte", "peur", "qu'", "il", "a", "Elle"],
                correct_order: ["Elle", "a", "peur", "qu'", "il", "parte"],
                hint: "Avoir peur (a peur) + qu' + subjunctive."
            },
            {
                id: "b1_07_q23",
                type: "sort",
                question: "Build: 'It is a shame that it rains.'",
                blocks: ["pleuve", "qu'", "C'est", "dommage", "il"],
                correct_order: ["C'est", "dommage", "qu'", "il", "pleuve"],
                hint: "Pleuvoir becomes Pleuve."
            },

            // --- Mixed & Advanced Drills ---
            {
                id: "b1_07_q24",
                type: "choice",
                question: "Il est furieux que je ne ___ (répondre) pas.",
                options: ["réponde", "réponds", "répond"],
                correct: 0,
                hint: "Regular -re verbs in subjunctive take -e for 'Je'."
            },
            {
                id: "b1_07_q25",
                type: "input",
                question: "J'aimerais que vous ___ (venir).",
                answer: "veniez",
                hint: "Venir -> Ven- -> Veniez."
            },
            {
                id: "b1_07_q26",
                type: "choice",
                question: "C'est bizarre qu'il ___ (boire) du thé.",
                options: ["boive", "boit", "buve"],
                correct: 0,
                hint: "Boire stem changes to 'Boiv-'."
            },
            {
                id: "b1_07_q27",
                type: "choice",
                question: "Je suis surpris qu'elles ___ (écrire) si bien.",
                options: ["écrivent", "écrivent (indicative)", "écrivassent"],
                correct: 0,
                hint: "For 'Elles', subjunctive often looks like present indicative."
            },
            {
                id: "b1_07_q28",
                type: "choice",
                question: "Cela m'énerve que tu ___ (mentir).",
                options: ["mentes", "mens", "mentis"],
                correct: 0,
                hint: "Mentir (to lie). Que tu mentes."
            },
            {
                id: "b1_07_q29",
                type: "input",
                question: "J'ai peur qu'il ___ (pleuvoir).",
                answer: "pleuve",
                hint: "Irregular! Il pleuve."
            },
            {
                id: "b1_07_q30",
                type: "choice",
                question: "Elle préfère que nous ___ (rester) ici.",
                options: ["restions", "restons", "restent"],
                correct: 0,
                hint: "Nous form usually ends in -ions."
            },

            // --- Rapid Fire: Is it Subjunctive? ---
            {
                id: "b1_07_q31",
                type: "choice",
                question: "Trigger? 'Je pense que...'",
                options: ["Indicative", "Subjunctive"],
                correct: 0,
                hint: "Thinking (in positive) is a Fact/Opinion -> Indicative."
            },
            {
                id: "b1_07_q32",
                type: "choice",
                question: "Trigger? 'Je suis heureux que...'",
                options: ["Indicative", "Subjunctive"],
                correct: 1,
                hint: "Emotion -> Subjunctive."
            },
            {
                id: "b1_07_q33",
                type: "choice",
                question: "Trigger? 'Je constate que... (I notice)'",
                options: ["Indicative", "Subjunctive"],
                correct: 0,
                hint: "Observation -> Indicative."
            },
            {
                id: "b1_07_q34",
                type: "choice",
                question: "Trigger? 'Je regrette que...'",
                options: ["Indicative", "Subjunctive"],
                correct: 1,
                hint: "Emotion -> Subjunctive."
            },

            // --- Conjugation Marathon ---
            {
                id: "b1_07_q35",
                type: "choice",
                question: "Que je ___ (finir)",
                options: ["finisse", "finis"],
                correct: 0,
                hint: "The double S is key."
            },
            {
                id: "b1_07_q36",
                type: "choice",
                question: "Que tu ___ (avoir)",
                options: ["aies", "as"],
                correct: 0,
                hint: "Irregular."
            },
            {
                id: "b1_07_q37",
                type: "choice",
                question: "Qu'il ___ (faire)",
                options: ["fasse", "fait"],
                correct: 0,
                hint: "Irregular 'Fass-'."
            },
            {
                id: "b1_07_q38",
                type: "choice",
                question: "Que nous ___ (prendre)",
                options: ["prenions", "prenons"],
                correct: 0,
                hint: "Don't forget the 'i' in -ions."
            },
            {
                id: "b1_07_q39",
                type: "choice",
                question: "Que vous ___ (être)",
                options: ["soyez", "êtes"],
                correct: 0,
                hint: "Irregular 'Soyez'."
            },
            {
                id: "b1_07_q40",
                type: "choice",
                question: "Qu'elles ___ (aller)",
                options: ["aillent", "vont"],
                correct: 0,
                hint: "Irregular 'Aill-'."
            },

            // --- Translation Challenge ---
            {
                id: "b1_07_q41",
                type: "choice",
                question: "Translate: 'I am happy that you are here.'",
                options: ["Je suis content que tu sois là", "Je suis content que tu es là"],
                correct: 0,
                hint: "Requires Subjunctive (Sois)."
            },
            {
                id: "b1_07_q42",
                type: "choice",
                question: "Translate: 'It's a shame he isn't coming.'",
                options: ["C'est dommage qu'il ne vienne pas", "C'est dommage qu'il ne vient pas"],
                correct: 0,
                hint: "Venir becomes Vienne."
            },
            {
                id: "b1_07_q43",
                type: "choice",
                question: "Translate: 'I am afraid of falling.' (Same subject)",
                options: ["J'ai peur de tomber", "J'ai peur que je tombe"],
                correct: 0,
                hint: "Same subject uses Infinitive."
            },

            // --- Complex Structures ---
            {
                id: "b1_07_q44",
                type: "sort",
                question: "Build: 'She wants us to leave.'",
                blocks: ["partions", "que", "veut", "nous", "Elle"],
                correct_order: ["Elle", "veut", "que", "nous", "partions"],
                hint: "Vouloir is a desire/emotion -> Subj."
            },
            {
                id: "b1_07_q45",
                type: "input",
                question: "J'exige (demand) que vous ___ (faire) des efforts.",
                answer: "fassiez",
                hint: "Faire -> Fass -> Fassiez."
            },
            {
                id: "b1_07_q46",
                type: "choice",
                question: "Il est naturel qu'on ___ (avoir) peur.",
                options: ["ait", "a"],
                correct: 0,
                hint: "On conjugates like Il/Elle -> Ait."
            },
            {
                id: "b1_07_q47",
                type: "choice",
                question: "Je suis fier (proud) que mon fils ___ (réussir).",
                options: ["réussisse", "réussit"],
                correct: 0,
                hint: "Emotion -> Subjunctive."
            },
            {
                id: "b1_07_q48",
                type: "choice",
                question: "Ça m'étonne (surprises me) qu'il ___ (savoir) ça.",
                options: ["sache", "sait"],
                correct: 0,
                hint: "Savoir is irregular -> Sache."
            },
            {
                id: "b1_07_q49",
                type: "input",
                question: "Je ne supporte pas qu'elle ___ (mentir).",
                answer: "mente",
                hint: "Emotion (Annoyance) -> Mente."
            },
            {
                id: "b1_07_q50",
                type: "choice",
                question: "Final Check: 'We are sad that you are leaving.'",
                options: ["Nous sommes tristes que vous partiez", "Nous sommes tristes que vous partez"],
                correct: 0,
                hint: "Emotion requires Subjunctive (Partiez)."
            }
        ]
    },

    "b1_08": {
        meta: {
            title: "Le Gérondif",
            tags: ["Simultaneous", "Verbs", "B1"],
            color: "text-emerald-600 bg-emerald-50"
        },
        learn: {
            cheat_sheet: {
                summary: "Expressing two actions happening at the same time ('While doing...').",
                key_rule: "🔥 En + Nous-Form Stem + ANT. (Nous parlons -> En parlant)."
            },
            explanation: [
                {
                    type: "text",
                    content: "Use it for simultaneous actions or 'by doing' something."
                },
                {
                    type: "table",
                    headers: ["Verb", "Nous form", "Gérondif"],
                    rows: [
                        ["Manger", "Mangeons", "En mangeant (While eating)"],
                        ["Faire", "Faisons", "En faisant (While doing)"],
                        ["Boire", "Buvons", "En buvant (While drinking)"]
                    ]
                },
                {
                    type: "warning",
                    title: "⚠️ Only 3 Irregulars",
                    content: "Être (En étant), Avoir (En ayant), Savoir (En sachant)."
                }
            ]
        },
        practice: [
            {
                id: "b1_08_q01",
                type: "choice",
                question: "Il lit le journal ___ (while drinking) son café.",
                options: ["buvant", "en buvant", "boire"],
                correct: 1,
                hint: "Don't forget the 'En'."
            },
            {
                id: "b1_08_q02",
                type: "input",
                question: "C'est ___ (by working) qu'on apprend.",
                answer: "en travaillant",
                hint: "Travailler -> Travaillons -> Travaillant."
            },
            {
                id: "b1_08_q03",
                type: "sort",
                question: "Build: 'He fell while running.'",
                blocks: ["courant", "tombé", "est", "Il", "en"],
                correct_order: ["Il", "est", "tombé", "en", "courant"],
                hint: "Main action first, then Gérondif."
            }
        ]
    },

    "b1_09": {
        meta: {
            title: "Plus-que-parfait",
            tags: ["Past Tense", "Advanced", "B1"],
            color: "text-emerald-600 bg-emerald-50"
        },
        learn: {
            cheat_sheet: {
                summary: "The 'Past Perfect'. Used for an action that happened BEFORE another past action.",
                key_rule: "🔥 Helper (Avoir/Être) in IMPARFAIT + Past Participle. (J'avais mangé)."
            },
            explanation: [
                {
                    type: "text",
                    content: "Timeline: [PQP: I had eaten] -> [PC: You arrived] -> [NOW]."
                },
                {
                    type: "table",
                    headers: ["Subject", "Helper (Imparfait)", "Participle"],
                    rows: [
                        ["J'", "avais", "fini (I had finished)"],
                        ["Elle", "était", "partie (She had left)"],
                        ["Nous", "avions", "vu (We had seen)"]
                    ]
                }
            ]
        },
        practice: [
            {
                id: "b1_09_q01",
                type: "choice",
                question: "Quand je suis arrivé, ils ___ (déjà partir).",
                options: ["sont partis", "étaient partis", "seront partis"],
                correct: 1,
                hint: "They left BEFORE I arrived -> PQP."
            },
            {
                id: "b1_09_q02",
                type: "input",
                question: "J'___ (had lost) mes clés.",
                answer: "avais perdu",
                hint: "Avoir in Imparfait (avais) + Perdu."
            },
            {
                id: "b1_09_q03",
                type: "choice",
                question: "Elle a dit qu'elle ___ (manger).",
                options: ["avait mangé", "a mangé", "mangeait"],
                correct: 0,
                hint: "She said (Past) that she had eaten (Earlier Past)."
            }
        ]
    },

    "b1_10": {
        meta: {
            title: "Passive Voice",
            tags: ["Sentence Structure", "B1"],
            color: "text-emerald-600 bg-emerald-50"
        },
        learn: {
            cheat_sheet: {
                summary: "Focus on the object receiving the action. 'The mouse is eaten by the cat'.",
                key_rule: "🔥 Subject + ÊTRE + Participle + PAR + Agent. Agreement is mandatory!"
            },
            explanation: [
                {
                    type: "text",
                    content: "Active: Le chat mange la souris. Passive: La souris EST mangée PAR le chat."
                },
                {
                    type: "table",
                    headers: ["Tense", "Active", "Passive"],
                    rows: [
                        ["Present", "Il ferme la porte.", "La porte est fermée par lui."],
                        ["Past", "Il a fermé la porte.", "La porte a été fermée par lui."],
                        ["Future", "Il fermera la porte.", "La porte sera fermée par lui."]
                    ]
                },
                {
                    type: "warning",
                    title: "⚠️ Agreement",
                    content: "The participle acts like an adjective with Être. 'Les pommes sont mangéES'."
                }
            ]
        },
        practice: [
            {
                id: "b1_10_q01",
                type: "choice",
                question: "Le livre est ___ (écrire) par Hugo.",
                options: ["écrit", "écrite", "écrivé"],
                correct: 0,
                hint: "Livre is masculine. Participle of écrire is écrit."
            },
            {
                id: "b1_10_q02",
                type: "sort",
                question: "Build: 'The apple is eaten by the boy.'",
                blocks: ["mangée", "par", "garçon", "est", "La", "pomme", "le"],
                correct_order: ["La", "pomme", "est", "mangée", "par", "le", "garçon"],
                hint: "Agreement: Pomme is feminine."
            },
            {
                id: "b1_10_q03",
                type: "input",
                question: "Les voitures sont ___ (réparer) par le mécanicien.",
                answer: "réparées",
                hint: "Voitures = Fem Plural -> ées."
            }
        ]
    },

    "b1_11": {
        meta: {
            title: "Reported Speech I",
            tags: ["Communication", "Verbs", "B1"],
            color: "text-emerald-600 bg-emerald-50"
        },
        learn: {
            cheat_sheet: {
                summary: "Reporting what someone else said without quoting them directly.",
                key_rule: "🔥 Use 'que' (that). Change the pronouns (Je -> Il/Elle)."
            },
            explanation: [
                {
                    type: "text",
                    content: "Direct: Il dit : 'Je suis fatigué'. Indirect: Il dit QU'il est fatigué."
                },
                {
                    type: "table",
                    headers: ["Type", "Direct Quote", "Reported (Indirect)"],
                    rows: [
                        ["Statement", "Il dit : 'J'aime Paris'.", "Il dit qu'il aime Paris."],
                        ["Question (Yes/No)", "Il demande : 'Tu viens ?'", "Il demande SI tu viens."],
                        ["Question (What)", "Il demande : 'Qu'est-ce que tu fais ?'", "Il demande CE QUE tu fais."]
                    ]
                }
            ]
        },
        practice: [
            {
                id: "b1_11_q01",
                type: "choice",
                question: "Elle dit : 'Je suis prête' -> Elle dit ___ prête.",
                options: ["qu'elle est", "que je suis", "qu'elle soit"],
                correct: 0,
                hint: "Je becomes Elle. Verb matches new subject."
            },
            {
                id: "b1_11_q02",
                type: "choice",
                question: "Il demande : 'Est-ce que tu aimes ?' -> Il demande ___ tu aimes.",
                options: ["que", "si", "ce que"],
                correct: 1,
                hint: "Yes/No question becomes 'Si' (If)."
            },
            {
                id: "b1_11_q03",
                type: "sort",
                question: "Build: 'He says that he is coming.'",
                blocks: ["qu'", "vient", "Il", "il", "dit"],
                correct_order: ["Il", "dit", "qu'", "il", "vient"],
                hint: "Que + il = Qu'il."
            }
        ]
    },
    // ============================================================
    // LEVEL B2 - UPPER INTERMEDIATE
    // ============================================================

    "b2_01": {
        meta: {
            title: "Hypothesis (Past)",
            tags: ["Advanced", "Unreal Past", "B2"],
            color: "text-purple-600 bg-purple-50"
        },
        learn: {
            cheat_sheet: {
                summary: "Expressing regrets or things that didn't happen. 'If I had known, I would have come'.",
                key_rule: "🔥 Si + Plus-que-parfait -> Conditionnel Passé."
            },
            explanation: [
                {
                    type: "text",
                    content: "This is the 'Third Conditional'. It describes an unreal past situation."
                },
                {
                    type: "table",
                    headers: ["Si Clause (Had done)", "Result (Would have done)"],
                    rows: [
                        ["Si j'avais su,", "je serais venu."],
                        ["S'il avait fait beau,", "nous serions sortis."],
                        ["Si tu m'avais écouté,", "tu n'aurais pas perdu."]
                    ]
                },
                {
                    type: "warning",
                    title: "⚠️ Double Auxiliaries",
                    content: "Both parts are compound tenses! Don't forget the auxiliary verbs."
                }
            ]
        },
        practice: [
            {
                id: "b2_01_q01",
                type: "choice",
                question: "Si j'___ (savoir), je t'aurais aidé.",
                options: ["avais su", "aurez su", "savais"],
                correct: 0,
                hint: "Plus-que-parfait: Avais + Su."
            },
            {
                id: "b2_01_q02",
                type: "choice",
                question: "Si tu étais venu, on ___ (s'amuser).",
                options: ["se serait amusé", "s'amusait", "s'est amusé"],
                correct: 0,
                hint: "Conditional Past: Serait + Amusé."
            },
            {
                id: "b2_01_q03",
                type: "sort",
                question: "Build: 'I would have eaten if I had been hungry.'",
                blocks: ["faim", "mangé", "J'aurais", "si", "j'avais", "eu"],
                correct_order: ["J'aurais", "mangé", "si", "j'avais", "eu", "faim"],
                hint: "Result (Cond Passé) + Si + Condition (PQP)."
            }
        ]
    },

    "b2_02": {
        meta: {
            title: "Conditional Past",
            tags: ["Regrets", "Modals", "B2"],
            color: "text-purple-600 bg-purple-50"
        },
        learn: {
            cheat_sheet: {
                summary: "Used to express regrets ('I should have') or reproaches ('You could have').",
                key_rule: "🔥 Conditional of Avoir/Être + Past Participle."
            },
            explanation: [
                {
                    type: "table",
                    headers: ["Concept", "Verb", "Example"],
                    rows: [
                        ["Regret", "Devoir (Should have)", "J'aurais dû travailler plus."],
                        ["Possibility", "Pouvoir (Could have)", "Tu aurais pu me le dire."],
                        ["Wish", "Aimer (Would have liked)", "J'aurais aimé te voir."]
                    ]
                },
                {
                    type: "text",
                    content: "Note: 'J'aurais dû' (I should have) is extremely common for self-criticism."
                }
            ]
        },
        practice: [
            {
                id: "b2_02_q01",
                type: "choice",
                question: "Tu ___ (should have) m'appeler !",
                options: ["aurais dû", "devrais", "avais dû"],
                correct: 0,
                hint: "Conditional Past of Devoir."
            },
            {
                id: "b2_02_q02",
                type: "input",
                question: "Il ___ (could have) gagner.",
                answer: "aurait pu",
                hint: "Conditional of Avoir (aurait) + Pu."
            },
            {
                id: "b2_02_q03",
                type: "sort",
                question: "Build: 'We would have liked to come.'",
                blocks: ["aimé", "venir", "Nous", "aurions"],
                correct_order: ["Nous", "aurions", "aimé", "venir"],
                hint: "Aimer in Cond Past."
            }
        ]
    },

    "b2_03": {
        meta: {
            title: "Subjonctif Past",
            tags: ["Moods", "Past", "B2"],
            color: "text-purple-600 bg-purple-50"
        },
        learn: {
            cheat_sheet: {
                summary: "Used when the action in the subjunctive clause happened BEFORE the main verb.",
                key_rule: "🔥 Subjunctive of Avoir/Être + Past Participle."
            },
            explanation: [
                {
                    type: "text",
                    content: "Example: 'I am happy (now) that you finished (yesterday)'."
                },
                {
                    type: "table",
                    headers: ["Main Clause", "Subjonctif Passé"],
                    rows: [
                        ["Je suis content...", "...que tu aies fini."],
                        ["Il est dommage...", "...qu'il soit parti."],
                        ["Je ne crois pas...", "...qu'elle ait vu ça."]
                    ]
                },
                {
                    type: "warning",
                    title: "⚠️ The Auxiliary",
                    content: "Remember the irregular subjonctif of helpers! Avoir -> que j'aie. Être -> que je sois."
                }
            ]
        },
        practice: [
            {
                id: "b2_03_q01",
                type: "choice",
                question: "Je regrette qu'il ___ (partir - already).",
                options: ["soit parti", "parte", "est parti"],
                correct: 0,
                hint: "Action is in the past -> Subjonctif Passé."
            },
            {
                id: "b2_03_q02",
                type: "input",
                question: "C'est bien que tu ___ (finir).",
                answer: "aies fini",
                hint: "Avoir (subj) + Fini."
            },
            {
                id: "b2_03_q03",
                type: "choice",
                question: "Je doute qu'ils ___ (comprendre).",
                options: ["aient compris", "ont compris", "aies compris"],
                correct: 0,
                hint: "Plural Avoir Subjunctive: Aient."
            }
        ]
    },

    "b2_04": {
        meta: {
            title: "Subjonctif vs Indicative",
            tags: ["Moods", "Nuances", "B2"],
            color: "text-purple-600 bg-purple-50"
        },
        learn: {
            cheat_sheet: {
                summary: "Some verbs change mood depending on certainty or negation.",
                key_rule: "🔥 Espérer = Indicative. Penser/Croire (Negative) = Subjonctif."
            },
            explanation: [
                {
                    type: "table",
                    headers: ["Verb", "Affirmative (+)", "Negative/Question (?)"],
                    rows: [
                        ["Penser", "Je pense qu'il EST là.", "Je ne pense pas qu'il SOIT là."],
                        ["Croire", "Je crois qu'il VIENT.", "Crois-tu qu'il VIENNE ?"],
                        ["Espérer", "J'espère qu'il VIENDRA.", "J'espère qu'il VIENDRA (Exception!)."]
                    ]
                },
                {
                    type: "text",
                    content: "Rule of thumb: If it's a fact in your head -> Indicative. If you doubt it -> Subjunctive."
                }
            ]
        },
        practice: [
            {
                id: "b2_04_q01",
                type: "choice",
                question: "Je ne pense pas qu'il ___ (avoir) raison.",
                options: ["a", "ait"],
                correct: 1,
                hint: "Negative thinking = Doubt = Subjonctif."
            },
            {
                id: "b2_04_q02",
                type: "choice",
                question: "J'espère qu'il ___ (faire) beau.",
                options: ["fera", "fasse"],
                correct: 0,
                hint: "Espérer takes the Future (Indicative), not Subjunctive!"
            },
            {
                id: "b2_04_q03",
                type: "choice",
                question: "Je constate que tu ___ (être) en retard.",
                options: ["es", "sois"],
                correct: 0,
                hint: "Constater = Fact = Indicative."
            }
        ]
    },

    "b2_05": {
        meta: {
            title: "Logical Connectors",
            tags: ["Structure", "Writing", "B2"],
            color: "text-purple-600 bg-purple-50"
        },
        learn: {
            cheat_sheet: {
                summary: "Words to structure complex arguments. Essential for B2 writing.",
                key_rule: "🔥 Watch out: 'Bien que' (Although) ALWAYS triggers the Subjunctive!"
            },
            explanation: [
                {
                    type: "table",
                    headers: ["Function", "Connectors", "Followed by"],
                    rows: [
                        ["Contrast", "Pourtant, Cependant (However)", "Indicative"],
                        ["Concession", "Bien que, Quoique (Although)", "SUBJUNCTIVE (!)"],
                        ["Cause", "Car, Puisque, Grâce à", "Indicative"],
                        ["Consequence", "Donc, Par conséquent", "Indicative"]
                    ]
                }
            ]
        },
        practice: [
            {
                id: "b2_05_q01",
                type: "choice",
                question: "Il est sorti ___ il pleuve.",
                options: ["bien que", "parce que", "pourtant"],
                correct: 0,
                hint: "'Pleuve' is subjunctive. Only 'Bien que' fits."
            },
            {
                id: "b2_05_q02",
                type: "choice",
                question: "Il est riche, ___ il est radin (stingy).",
                options: ["pourtant", "puisque", "donc"],
                correct: 0,
                hint: "Expressing contrast."
            },
            {
                id: "b2_05_q03",
                type: "sort",
                question: "Build: 'Although he is sick...'",
                blocks: ["soit", "malade", "il", "Bien", "qu'"],
                correct_order: ["Bien", "qu'", "il", "soit", "malade"],
                hint: "Bien que + Être (Subj)."
            }
        ]
    },

    "b2_06": {
        meta: {
            title: "Emphasis (Mise en relief)",
            tags: ["Style", "Speaking", "B2"],
            color: "text-purple-600 bg-purple-50"
        },
        learn: {
            cheat_sheet: {
                summary: "French speakers love to highlight specific parts of a sentence using 'C'est...'.",
                key_rule: "🔥 C'est [Subject] QUI... vs. C'est [Object] QUE..."
            },
            explanation: [
                {
                    type: "text",
                    content: "Instead of 'Paul ate the apple', say 'It is Paul who ate the apple'."
                },
                {
                    type: "table",
                    headers: ["Focus", "Structure", "Example"],
                    rows: [
                        ["Subject", "C'est ... QUI", "C'est MOI qui ai gagné."],
                        ["Object", "C'est ... QUE", "C'est PARIS que j'aime."],
                        ["Place/Time", "C'est ... OÙ", "C'est ICI que je dors."]
                    ]
                }
            ]
        },
        practice: [
            {
                id: "b2_06_q01",
                type: "choice",
                question: "C'est le gâteau ___ j'ai fait.",
                options: ["qui", "que", "dont"],
                correct: 1,
                hint: "Gâteau is the object (I made IT)."
            },
            {
                id: "b2_06_q02",
                type: "choice",
                question: "C'est Marie ___ chante.",
                options: ["qui", "que", "où"],
                correct: 0,
                hint: "Marie is the subject (SHE sings)."
            },
            {
                id: "b2_06_q03",
                type: "sort",
                question: "Build: 'It is here that I live.'",
                blocks: ["habite", "ici", "C'est", "que", "j'"],
                correct_order: ["C'est", "ici", "que", "j'", "habite"],
                hint: "Standard structure."
            }
        ]
    },

    "b2_07": {
        meta: {
            title: "Reported Speech II",
            tags: ["Tenses", "Backshifting", "B2"],
            color: "text-purple-600 bg-purple-50"
        },
        learn: {
            cheat_sheet: {
                summary: "When the main verb is in the PAST ('Il a dit que...'), you must shift the tense of the second verb.",
                key_rule: "🔥 Present -> Imparfait. Future -> Conditional. Passé Composé -> Plus-que-parfait."
            },
            explanation: [
                {
                    type: "table",
                    headers: ["Direct Speech", "Reported (Past Main Verb)"],
                    rows: [
                        ["Il dit: 'Je mange'", "Il a dit qu'il MANGEAIT."],
                        ["Il dit: 'Je mangerai'", "Il a dit qu'il MANGERAIT."],
                        ["Il dit: 'J'ai mangé'", "Il a dit qu'il AVAIT MANGÉ."]
                    ]
                },
                {
                    type: "text",
                    content: "This is called 'Concordance des temps'. It doesn't happen if the main verb is Present ('Il dit que...')."
                }
            ]
        },
        practice: [
            {
                id: "b2_07_q01",
                type: "choice",
                question: "Il a dit : 'Je suis malade' -> Il a dit qu'il ___ malade.",
                options: ["était", "est", "serait"],
                correct: 0,
                hint: "Present (suis) becomes Imparfait (était)."
            },
            {
                id: "b2_07_q02",
                type: "choice",
                question: "Elle a promis : 'Je viendrai' -> Elle a promis qu'elle ___.",
                options: ["viendrait", "viendra", "venait"],
                correct: 0,
                hint: "Future (viendrai) becomes Conditional (viendrait)."
            },
            {
                id: "b2_07_q03",
                type: "input",
                question: "Il a dit qu'il ___ (had finished).",
                answer: "avait fini",
                hint: "PQP: Imparfait of Avoir + Fini."
            }
        ]
    },

    "b2_08": {
        meta: {
            title: "Participe Présent",
            tags: ["Verbs", "Written", "B2"],
            color: "text-purple-600 bg-purple-50"
        },
        learn: {
            cheat_sheet: {
                summary: "Using a verb as an adjective or to replace 'qui...'. Ends in -ANT.",
                key_rule: "🔥 It looks like Gérondif but WITHOUT 'en'. It is more formal/written."
            },
            explanation: [
                {
                    type: "text",
                    content: "Usage: 'Les personnes AYANT un ticket...' (People HAVING a ticket). It replaces 'Les personnes QUI ONT un ticket'."
                },
                {
                    type: "table",
                    headers: ["Verb", "Participe Présent"],
                    rows: [
                        ["Être", "Étant"],
                        ["Avoir", "Ayant"],
                        ["Savoir", "Sachant"],
                        ["Faire", "Faisant"]
                    ]
                }
            ]
        },
        practice: [
            {
                id: "b2_08_q01",
                type: "choice",
                question: "Replacement: 'Les élèves qui veulent sortir...' -> 'Les élèves ___ sortir...'",
                options: ["voulant", "en voulant", "voulons"],
                correct: 0,
                hint: "Just the -ant form, no 'en'."
            },
            {
                id: "b2_08_q02",
                type: "choice",
                question: "___ (Being) malade, il n'est pas venu.",
                options: ["Étant", "Soit", "Est"],
                correct: 0,
                hint: "Participle of Être."
            },
            {
                id: "b2_08_q03",
                type: "input",
                question: "Un homme ___ (knowing) la vérité.",
                answer: "sachant",
                hint: "Participle of Savoir."
            }
        ]
    },

    "b2_09": {
        meta: {
            title: "Future Perfect",
            tags: ["Future", "Timeline", "B2"],
            color: "text-purple-600 bg-purple-50"
        },
        learn: {
            cheat_sheet: {
                summary: "The 'Futur Antérieur'. An action that will be finished BEFORE another future action.",
                key_rule: "🔥 Helper in Future Simple + Past Participle. (J'aurai mangé)."
            },
            explanation: [
                {
                    type: "text",
                    content: "Timeline: [NOW] -> [Futur Antérieur: I will have finished] -> [Future Simple: You will arrive]."
                },
                {
                    type: "text",
                    content: "Usage: 'Quand tu arriveras, j'AURAI FINI mes devoirs.' (When you arrive, I will have finished my homework)."
                }
            ]
        },
        practice: [
            {
                id: "b2_09_q01",
                type: "choice",
                question: "Dans un an, nous ___ (finir) le projet.",
                options: ["aurons fini", "aurions fini", "avons fini"],
                correct: 0,
                hint: "Future of Avoir (aurons) + Fini."
            },
            {
                id: "b2_09_q02",
                type: "choice",
                question: "Quand tu rentreras, je ___ (partir - déjà).",
                options: ["serai parti", "suis parti", "serais parti"],
                correct: 0,
                hint: "Future of Être (serai) + Parti."
            },
            {
                id: "b2_09_q03",
                type: "sort",
                question: "Build: 'I will have eaten.'",
                blocks: ["mangé", "aurai", "J'"],
                correct_order: ["J'", "aurai", "mangé"],
                hint: "Avoir Future + Participle."
            }
        ]
    },

    "b2_10": {
        meta: {
            title: "Passé Simple",
            tags: ["Literary", "Reading Only", "B2"],
            color: "text-purple-600 bg-purple-50"
        },
        learn: {
            cheat_sheet: {
                summary: "The 'Literary Past'. You will NEVER speak it, but you must recognize it in books (novels, history).",
                key_rule: "🔥 Weird endings like -a, -it, -ut, -rent. (Il parla, Il fut, Il eut)."
            },
            explanation: [
                {
                    type: "table",
                    headers: ["Verb", "Passé Composé (Spoken)", "Passé Simple (Written)"],
                    rows: [
                        ["Être", "Il a été", "Il FUT"],
                        ["Avoir", "Il a eu", "Il EUT"],
                        ["Parler", "Il a parlé", "Il PARLA"],
                        ["Finir", "Il a fini", "Il FINIT"],
                        ["Faire", "Il a fait", "Il FIT"],
                        ["Venir", "Il est venu", "Il VINT"]
                    ]
                }
            ]
        },
        practice: [
            {
                id: "b2_10_q01",
                type: "choice",
                question: "Recognize: 'Le roi mourut.'",
                options: ["The king died", "The king dies", "The king will die"],
                correct: 0,
                hint: "Mourut = Il est mort (Past)."
            },
            {
                id: "b2_10_q02",
                type: "choice",
                question: "Match: 'Il fut heureux'.",
                options: ["He was happy", "He went happy", "He had happy"],
                correct: 0,
                hint: "Fut = Était/A été (Être)."
            },
            {
                id: "b2_10_q03",
                type: "input",
                question: "Il ___ (alla / va) à la porte. (Past narrative)",
                answer: "alla",
                hint: "The Passé Simple form of Aller."
            }
        ]
    }
};  