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
                question: "Replace 'La voiture': ___ est rapide.",
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
                summary: "The vast majority (90%) of French verbs end in **-er** (Group 1). They are regular and easy to learn!",
                key_rule: "🔥 **The Formula:**\n1. Drop the **-er** to get the stem (e.g., *Parl-*).\n2. Add: **e, es, e, ons, ez, ent**."
            },
            explanation: [
                {
                    type: "text",
                    content: "Here is the conjugation of 'Parler' (to speak). Pay attention to the pronunciation notes!"
                },
                {
                    type: "table",
                    headers: ["Subject", "Ending", "Full Verb", "Pronunciation"],
                    rows: [
                        ["Je", "-e", "parle", "parl (silent e)"],
                        ["Tu", "-es", "parles", "parl (silent es)"],
                        ["Il/Elle/On", "-e", "parle", "parl (silent e)"],
                        ["Nous", "-ons", "parlons", "parl-on"],
                        ["Vous", "-ez", "parlez", "parl-ay"],
                        ["Ils/Elles", "-ent", "parlent", "parl (silent ent!)"]
                    ]
                },
                {
                    type: "warning",
                    title: "⚠️ Spelling Changes (-ger & -cer)",
                    content: "To keep pronunciation smooth:\n* **-ger verbs** (Manger): Add an **e** in the *Nous* form -> *Nous mang**e**ons* (to keep the soft G).\n* **-cer verbs** (Commencer): Add a **ç** in the *Nous* form -> *Nous commen**ç**ons* (to keep the soft S)."
                },
                 {
                    type: "text",
                    content: "**Common -ER Verbs:** Aimer (to like), Habiter (to live), Regarder (to watch), Travailler (to work), Écouter (to listen), Jouer (to play)."
                }
            ]
        },
        practice: [
            // --- Basic Conjugation Drills ---
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
                type: "choice",
                question: "Je ___ (habiter) à Paris.",
                options: ["habite", "habites", "habiter"],
                correct: 0,
                hint: "Ending for 'Je' is -e."
            },
            {
                id: "a1_04_q03",
                type: "choice",
                question: "Il ___ (aimer) le chocolat.",
                options: ["aimes", "aime", "aimons"],
                correct: 1,
                hint: "Ending for 'Il' is -e."
            },
            {
                id: "a1_04_q04",
                type: "choice",
                question: "Nous ___ (travailler) ici.",
                options: ["travaillons", "travaillez", "travaillent"],
                correct: 0,
                hint: "Ending for 'Nous' is -ons."
            },
            {
                id: "a1_04_q05",
                type: "choice",
                question: "Vous ___ (regarder) la télé.",
                options: ["regardez", "regardons", "regardes"],
                correct: 0,
                hint: "Ending for 'Vous' is -ez."
            },
            {
                id: "a1_04_q06",
                type: "choice",
                question: "Elles ___ (danser) bien.",
                options: ["dansent", "dansez", "danse"],
                correct: 0,
                hint: "Plural 'Elles' ends in -ent."
            },
            {
                id: "a1_04_q07",
                type: "input",
                question: "J'___ (écoute) la radio.",
                answer: "écoute",
                hint: "Drop -er, add -e."
            },
            {
                id: "a1_04_q08",
                type: "input",
                question: "Tu ___ (jouer) au foot ?",
                answer: "joues",
                hint: "Drop -er, add -es."
            },

            // --- Spelling Changes (-ger / -cer) ---
            {
                id: "a1_04_q09",
                type: "choice",
                question: "Nous ___ (manger) une pizza.",
                options: ["mangons", "mangeons", "manges"],
                correct: 1,
                hint: "We need the extra 'e' to keep the G soft."
            },
            {
                id: "a1_04_q10",
                type: "choice",
                question: "Nous ___ (commencer) le cours.",
                options: ["commençons", "commencons", "commenceons"],
                correct: 0,
                hint: "We need the cédille (ç) to keep the C soft."
            },
            {
                id: "a1_04_q11",
                type: "choice",
                question: "Nous ___ (voyager) en France.",
                options: ["voyageons", "voyagons"],
                correct: 0,
                hint: "Voyager ends in -ger, so add 'e'."
            },
            {
                id: "a1_04_q12",
                type: "choice",
                question: "Nous ___ (nager - to swim).",
                options: ["nageons", "nagons"],
                correct: 0,
                hint: "Nager -> Nageons."
            },
            {
                id: "a1_04_q13",
                type: "input",
                question: "Nous ___ (changer) de train.",
                answer: "changeons",
                hint: "Change -> Changeons."
            },

            // --- Sentence Structure & Context ---
            {
                id: "a1_04_q14",
                type: "sort",
                question: "Build: 'She watches TV' (regarder)",
                blocks: ["regarde", "la", "télé", "Elle"],
                correct_order: ["Elle", "regarde", "la", "télé"],
                hint: "Verb ending is -e for She."
            },
            {
                id: "a1_04_q15",
                type: "sort",
                question: "Build: 'We love Paris'",
                blocks: ["aimons", "Paris", "Nous"],
                correct_order: ["Nous", "aimons", "Paris"],
                hint: "Subject + Verb + Object."
            },
            {
                id: "a1_04_q16",
                type: "sort",
                question: "Build: 'They play tennis'",
                blocks: ["jouent", "au", "tennis", "Ils"],
                correct_order: ["Ils", "jouent", "au", "tennis"],
                hint: "Verb ending is -ent."
            },

            // --- Pronunciation Check (Conceptual) ---
            {
                id: "a1_04_q17",
                type: "choice",
                question: "Which ending is silent?",
                options: ["-ez", "-ent", "-ons"],
                correct: 1,
                hint: "The plural 'they' ending is never pronounced."
            },
            {
                id: "a1_04_q18",
                type: "choice",
                question: "Which ending sounds like 'ay'?",
                options: ["-e", "-ez", "-ent"],
                correct: 1,
                hint: "Vous form (-ez)."
            },

            // --- Identifying Verbs ---
            {
                id: "a1_04_q19",
                type: "choice",
                question: "Which verb means 'to help'?",
                options: ["Aider", "Aimer", "Aller"],
                correct: 0,
                hint: "Aimer is love, Aller is go."
            },
            {
                id: "a1_04_q20",
                type: "choice",
                question: "Which verb means 'to find'?",
                options: ["Chercher", "Trouver", "Donner"],
                correct: 1,
                hint: "Chercher is look for, Donner is give."
            },
            {
                id: "a1_04_q21",
                type: "choice",
                question: "Which verb means 'to think'?",
                options: ["Penser", "Parler", "Porter"],
                correct: 0,
                hint: "Parler is speak, Porter is wear."
            },

            // --- Mixed Drills ---
            {
                id: "a1_04_q22",
                type: "choice",
                question: "On ___ (dîner) ensemble.",
                options: ["dîne", "dînent", "dînes"],
                correct: 0,
                hint: "On = 3rd person singular (-e)."
            },
            {
                id: "a1_04_q23",
                type: "choice",
                question: "Marie et Paul ___ (chanter).",
                options: ["chantent", "chantez", "chantons"],
                correct: 0,
                hint: "Mixed plural -> Ils -> -ent."
            },
            {
                id: "a1_04_q24",
                type: "choice",
                question: "Vous ___ (chercher) vos clés ?",
                options: ["cherchez", "cherches"],
                correct: 0,
                hint: "Vous -> -ez."
            },
            {
                id: "a1_04_q25",
                type: "input",
                question: "Tu ___ (donner) un cadeau.",
                answer: "donnes",
                hint: "Tu -> -es."
            },
            {
                id: "a1_04_q26",
                type: "choice",
                question: "Je ___ (détester) le lundi.",
                options: ["déteste", "détester"],
                correct: 0,
                hint: "Je -> -e."
            },
            {
                id: "a1_04_q27",
                type: "choice",
                question: "Nous ___ (étudier) le français.",
                options: ["étudions", "étudiez"],
                correct: 0,
                hint: "Nous -> -ons."
            },
            {
                id: "a1_04_q28",
                type: "choice",
                question: "Ils ___ (fermer) le magasin.",
                options: ["ferment", "fermons"],
                correct: 0,
                hint: "Ils -> -ent."
            },
            {
                id: "a1_04_q29",
                type: "choice",
                question: "Elle ___ (demander) de l'aide.",
                options: ["demande", "demandes"],
                correct: 0,
                hint: "Elle -> -e."
            },
            {
                id: "a1_04_q30",
                type: "input",
                question: "On ___ (rester) ici.",
                answer: "reste",
                hint: "On -> -e."
            },

            // --- Rapid Fire: Subject-Verb Agreement ---
            {
                id: "a1_04_q31",
                type: "choice",
                question: "___ cuisine.",
                options: ["Je", "Tu", "Nous"],
                correct: 0,
                hint: "Verb ends in -e."
            },
            {
                id: "a1_04_q32",
                type: "choice",
                question: "___ cuisines.",
                options: ["Tu", "Il", "Vous"],
                correct: 0,
                hint: "Verb ends in -es."
            },
            {
                id: "a1_04_q33",
                type: "choice",
                question: "___ cuisinons.",
                options: ["Nous", "Vous", "Ils"],
                correct: 0,
                hint: "Verb ends in -ons."
            },
            {
                id: "a1_04_q34",
                type: "choice",
                question: "___ cuisinez.",
                options: ["Vous", "Nous", "Tu"],
                correct: 0,
                hint: "Verb ends in -ez."
            },
            {
                id: "a1_04_q35",
                type: "choice",
                question: "___ cuisinent.",
                options: ["Ils", "Nous", "Vous"],
                correct: 0,
                hint: "Verb ends in -ent."
            },
            
            // --- Elision (J') ---
            {
                id: "a1_04_q36",
                type: "choice",
                question: "___ (I) habite à Lyon.",
                options: ["J'", "Je"],
                correct: 0,
                hint: "Verb starts with H (vowel sound)."
            },
            {
                id: "a1_04_q37",
                type: "choice",
                question: "___ (I) aime la musique.",
                options: ["J'", "Je"],
                correct: 0,
                hint: "Verb starts with A (vowel)."
            },
            {
                id: "a1_04_q38",
                type: "choice",
                question: "___ (I) parle français.",
                options: ["Je", "J'"],
                correct: 0,
                hint: "Verb starts with consonant P."
            },
            {
                id: "a1_04_q39",
                type: "choice",
                question: "___ (I) écoute.",
                options: ["J'", "Je"],
                correct: 0,
                hint: "Verb starts with E."
            },
            {
                id: "a1_04_q40",
                type: "input",
                question: "___ (I) oublie (forget) tout.",
                answer: "j'",
                hint: "Starts with O."
            },

            // --- Final Challenge ---
            {
                id: "a1_04_q41",
                type: "choice",
                question: "Tu ___ (préparer) le dîner ?",
                options: ["prépares", "prépare"],
                correct: 0,
                hint: "-es."
            },
            {
                id: "a1_04_q42",
                type: "choice",
                question: "Nous ___ (laver) la voiture.",
                options: ["lavons", "lavez"],
                correct: 0,
                hint: "-ons."
            },
            {
                id: "a1_04_q43",
                type: "choice",
                question: "Il ___ (tomber).",
                options: ["tombe", "tombes"],
                correct: 0,
                hint: "-e."
            },
            {
                id: "a1_04_q44",
                type: "choice",
                question: "Elles ___ (porter) des lunettes.",
                options: ["portent", "portons"],
                correct: 0,
                hint: "-ent."
            },
            {
                id: "a1_04_q45",
                type: "choice",
                question: "Vous ___ (marcher) vite.",
                options: ["marchez", "marchons"],
                correct: 0,
                hint: "-ez."
            },
            {
                id: "a1_04_q46",
                type: "input",
                question: "Je ___ (visiter) le musée.",
                answer: "visite",
                hint: "Regular."
            },
            {
                id: "a1_04_q47",
                type: "input",
                question: "Tu ___ (danser) bien.",
                answer: "danses",
                hint: "Regular."
            },
            {
                id: "a1_04_q48",
                type: "input",
                question: "Nous ___ (partager) le gâteau.",
                answer: "partageons",
                hint: "Warning: -ger verb!"
            },
            {
                id: "a1_04_q49",
                type: "input",
                question: "Vous ___ (manger) quoi ?",
                answer: "mangez",
                hint: "Regular for Vous."
            },
            {
                id: "a1_04_q50",
                type: "sort",
                question: "Build: 'I love to travel.'",
                blocks: ["voyager", "J'", "aime"],
                correct_order: ["J'", "aime", "voyager"],
                hint: "Conjugated verb first, then infinitive."
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
                summary: "To make a sentence negative ('I do not eat'), French uses a two-part structure around the verb.",
                key_rule: "🔥 **The Sandwich Rule:** Subject + **ne** + VERB + **pas**.\n(e.g., *Je **ne** suis **pas** d'accord*)."
            },
            explanation: [
                {
                    type: "text",
                    content: "Think of the verb as the meat in a sandwich. 'Ne' and 'Pas' are the bread slices."
                },
                {
                    type: "table",
                    headers: ["Subject", "Part 1", "Verb", "Part 2", "Complement"],
                    rows: [
                        ["Je", "ne", "mange", "pas", "de viande."],
                        ["Il", "n'", "est", "pas", "triste."],
                        ["Nous", "ne", "sommes", "pas", "fatigués."]
                    ]
                },
                {
                    type: "warning",
                    title: "⚠️ The Vowel Clash (N')",
                    content: "If the verb starts with a vowel (a, e, i, o, u) or a silent 'h', **ne** becomes **n'**. \n* Correct: *Je **n'**aime pas.*\n* Incorrect: *Je ~~ne~~ aime pas.*"
                },
                {
                    type: "warning",
                    title: "⚠️ The 'Pas de' Rule (Vital!)",
                    content: "After a negation, indefinite articles (**un, une, des, du**) change to **DE** (or d').\n* J'ai **un** chien -> Je n'ai **pas de** chien.\n* Je mange **du** pain -> Je ne mange **pas de** pain.\n* Exception: This rule does NOT apply with the verb **Être** (C'est une pomme -> Ce n'est pas **une** pomme)."
                },
                {
                    type: "text",
                    content: "**Spoken French:** In casual conversation, French people often drop the 'ne'. You will hear *'J'sais pas'* instead of *'Je ne sais pas'*. But you must write it!"
                }
            ]
        },
        practice: [
            // --- Basic Structure (Ne ... Pas) ---
            {
                id: "a1_05_q01",
                type: "sort",
                question: "Negate: 'Je parle' (I speak)",
                blocks: ["pas", "ne", "parle", "Je"],
                correct_order: ["Je", "ne", "parle", "pas"],
                hint: "Sandwich the verb 'parle'."
            },
            {
                id: "a1_05_q02",
                type: "choice",
                question: "Tu ___ (are not) triste.",
                options: ["n'es pas", "ne es pas", "pas es"],
                correct: 0,
                hint: "Es starts with a vowel -> n'."
            },
            {
                id: "a1_05_q03",
                type: "choice",
                question: "Il ___ (does not eat).",
                options: ["ne mange pas", "mange pas", "ne mange"],
                correct: 0,
                hint: "You need both parts: ne + pas."
            },
            {
                id: "a1_05_q04",
                type: "sort",
                question: "Build: 'She is not here.'",
                blocks: ["pas", "ici", "n'", "est", "Elle"],
                correct_order: ["Elle", "n'", "est", "pas", "ici"],
                hint: "Est starts with vowel."
            },
            {
                id: "a1_05_q05",
                type: "input",
                question: "Nous ___ (do not look) la télé.",
                answer: "ne regardons pas",
                hint: "ne + regardons + pas."
            },

            // --- Elision Drills (Ne vs N') ---
            {
                id: "a1_05_q06",
                type: "choice",
                question: "Je ___ habite pas ici.",
                options: ["n'", "ne"],
                correct: 0,
                hint: "Habite starts with silent H."
            },
            {
                id: "a1_05_q07",
                type: "choice",
                question: "Tu ___ comprends pas.",
                options: ["ne", "n'"],
                correct: 0,
                hint: "Comprends starts with a consonant."
            },
            {
                id: "a1_05_q08",
                type: "choice",
                question: "Il ___ écoute pas.",
                options: ["n'", "ne"],
                correct: 0,
                hint: "Écoute starts with E."
            },
            {
                id: "a1_05_q09",
                type: "choice",
                question: "Elle ___ aime pas le foot.",
                options: ["n'", "ne"],
                correct: 0,
                hint: "Aime starts with A."
            },
            {
                id: "a1_05_q10",
                type: "choice",
                question: "Nous ___ voulons pas partir.",
                options: ["ne", "n'"],
                correct: 0,
                hint: "Voulons starts with V."
            },
            {
                id: "a1_05_q11",
                type: "choice",
                question: "Vous ___ avez pas faim.",
                options: ["n'", "ne"],
                correct: 0,
                hint: "Avez starts with A."
            },
            {
                id: "a1_05_q12",
                type: "choice",
                question: "Ils ___ vont pas au cinéma.",
                options: ["ne", "n'"],
                correct: 0,
                hint: "Vont starts with V."
            },
            {
                id: "a1_05_q13",
                type: "choice",
                question: "On ___ oublie pas.",
                options: ["n'", "ne"],
                correct: 0,
                hint: "Oublie starts with O."
            },
            {
                id: "a1_05_q14",
                type: "choice",
                question: "Ce ___ est pas vrai.",
                options: ["n'", "ne"],
                correct: 0,
                hint: "Est starts with E."
            },
            {
                id: "a1_05_q15",
                type: "choice",
                question: "Je ___ sais pas.",
                options: ["ne", "n'"],
                correct: 0,
                hint: "Sais starts with S."
            },

            // --- The "Pas de" Rule (Article Change) ---
            {
                id: "a1_05_q16",
                type: "choice",
                question: "J'ai un chien -> Je n'ai pas ___ chien.",
                options: ["de", "un", "du"],
                correct: 0,
                hint: "Un changes to De after negation."
            },
            {
                id: "a1_05_q17",
                type: "choice",
                question: "Tu manges une pomme -> Tu ne manges pas ___ pomme.",
                options: ["de", "une", "la"],
                correct: 0,
                hint: "Une changes to De."
            },
            {
                id: "a1_05_q18",
                type: "choice",
                question: "Il a des amis -> Il n'a pas ___ amis.",
                options: ["d'", "des", "les"],
                correct: 0,
                hint: "Des changes to D' (before vowel)."
            },
            {
                id: "a1_05_q19",
                type: "choice",
                question: "Elle boit du café -> Elle ne boit pas ___ café.",
                options: ["de", "du", "le"],
                correct: 0,
                hint: "Du changes to De."
            },
            {
                id: "a1_05_q20",
                type: "choice",
                question: "Nous avons de la chance -> Nous n'avons pas ___ chance.",
                options: ["de", "de la", "la"],
                correct: 0,
                hint: "De la changes to De."
            },
            {
                id: "a1_05_q21",
                type: "choice",
                question: "EXCEPTION: C'est une voiture -> Ce n'est pas ___ voiture.",
                options: ["une", "de"],
                correct: 0,
                hint: "With verb Être, the article does NOT change."
            },
            {
                id: "a1_05_q22",
                type: "choice",
                question: "Ce sont des livres -> Ce ne sont pas ___ livres.",
                options: ["des", "de"],
                correct: 0,
                hint: "Verb Être -> No change."
            },
            {
                id: "a1_05_q23",
                type: "choice",
                question: "J'ai acheté de l'eau -> Je n'ai pas acheté ___ eau.",
                options: ["d'", "de l'", "l'"],
                correct: 0,
                hint: "De l' changes to d'."
            },
            {
                id: "a1_05_q24",
                type: "choice",
                question: "Il y a un problème -> Il n'y a pas ___ problème.",
                options: ["de", "un"],
                correct: 0,
                hint: "Il n'y a pas DE..."
            },
            {
                id: "a1_05_q25",
                type: "choice",
                question: "Je veux du sucre -> Je ne veux pas ___ sucre.",
                options: ["de", "du"],
                correct: 0,
                hint: "Vouloir is not Être, so it changes to De."
            },

            // --- Sentence Sorting Drills ---
            {
                id: "a1_05_q26",
                type: "sort",
                question: "Build: 'I do not like coffee.'",
                blocks: ["pas", "le", "n'", "Je", "café", "aime"],
                correct_order: ["Je", "n'", "aime", "pas", "le", "café"],
                hint: "Je n'aime pas..."
            },
            {
                id: "a1_05_q27",
                type: "sort",
                question: "Build: 'He is not English.'",
                blocks: ["est", "Il", "pas", "anglais", "n'"],
                correct_order: ["Il", "n'", "est", "pas", "anglais"],
                hint: "Verb is Est."
            },
            {
                id: "a1_05_q28",
                type: "sort",
                question: "Build: 'They do not work.'",
                blocks: ["travaillent", "ne", "pas", "Ils"],
                correct_order: ["Ils", "ne", "travaillent", "pas"],
                hint: "Regular order."
            },
            {
                id: "a1_05_q29",
                type: "sort",
                question: "Build: 'We do not have time.'",
                blocks: ["pas", "temps", "n'", "le", "avons", "Nous"],
                correct_order: ["Nous", "n'", "avons", "pas", "le", "temps"],
                hint: "Nous n'avons pas..."
            },
            {
                id: "a1_05_q30",
                type: "sort",
                question: "Build: 'I don't know.'",
                blocks: ["sais", "pas", "Je", "ne"],
                correct_order: ["Je", "ne", "sais", "pas"],
                hint: "Classic phrase."
            },

            // --- Translation / Input ---
            {
                id: "a1_05_q31",
                type: "input",
                question: "Translate 'not' (the second part).",
                answer: "pas",
                hint: "Ne ... ___"
            },
            {
                id: "a1_05_q32",
                type: "input",
                question: "Negate 'Je peux' (I can).",
                answer: "je ne peux pas",
                hint: "Sandwich 'peux'."
            },
            {
                id: "a1_05_q33",
                type: "input",
                question: "Negate 'C'est' (It is).",
                answer: "ce n'est pas",
                hint: "Watch the apostrophes."
            },
            {
                id: "a1_05_q34",
                type: "input",
                question: "Negate 'Il pleut' (It rains).",
                answer: "il ne pleut pas",
                hint: "Sandwich 'pleut'."
            },
            {
                id: "a1_05_q35",
                type: "input",
                question: "Negate 'J'ai' (I have).",
                answer: "je n'ai pas",
                hint: "J' becomes Je n'..."
            },

            // --- Mixed & Context ---
            {
                id: "a1_05_q36",
                type: "choice",
                question: "Ça ___ marche pas.",
                options: ["ne", "n'", "non"],
                correct: 0,
                hint: "Marche starts with consonant."
            },
            {
                id: "a1_05_q37",
                type: "choice",
                question: "Je ___ suis pas d'accord.",
                options: ["ne", "pas", "n'"],
                correct: 0,
                hint: "Verb Suis."
            },
            {
                id: "a1_05_q38",
                type: "choice",
                question: "Il n'y a ___ de problème.",
                options: ["pas", "point", "ne"],
                correct: 0,
                hint: "Standard negation."
            },
            {
                id: "a1_05_q39",
                type: "choice",
                question: "Spoken French: 'J'aime pas ça'. What is missing?",
                options: ["Ne / N'", "Pas", "Le"],
                correct: 0,
                hint: "In spoken French, 'ne' is often dropped."
            },
            {
                id: "a1_05_q40",
                type: "choice",
                question: "Tu ne ___ (parler) pas fort.",
                options: ["parles", "parle", "parlez"],
                correct: 0,
                hint: "Conjugate 'parler' for Tu inside the negation."
            },

            // --- Variations (Jamais / Rien / Personne) - Intro ---
            {
                id: "a1_05_q41",
                type: "choice",
                question: "Je ne mange ___ (never) de viande.",
                options: ["jamais", "pas", "rien"],
                correct: 0,
                hint: "Jamais replaces Pas."
            },
            {
                id: "a1_05_q42",
                type: "choice",
                question: "Je ne vois ___ (nothing).",
                options: ["rien", "pas", "jamais"],
                correct: 0,
                hint: "Rien replaces Pas."
            },
            {
                id: "a1_05_q43",
                type: "choice",
                question: "Il n'y a ___ (nobody) ici.",
                options: ["personne", "pas", "rien"],
                correct: 0,
                hint: "Personne replaces Pas."
            },
            {
                id: "a1_05_q44",
                type: "sort",
                question: "Build: 'I never smoke.'",
                blocks: ["fume", "jamais", "ne", "Je"],
                correct_order: ["Je", "ne", "fume", "jamais"],
                hint: "Jamais takes the spot of Pas."
            },
            {
                id: "a1_05_q45",
                type: "sort",
                question: "Build: 'I understand nothing.'",
                blocks: ["comprends", "rien", "Je", "ne"],
                correct_order: ["Je", "ne", "comprends", "rien"],
                hint: "Rien takes the spot of Pas."
            },

            // --- Final Challenge ---
            {
                id: "a1_05_q46",
                type: "input",
                question: "Full sentence: I am not ready (prêt).",
                answer: "je ne suis pas prêt",
                hint: "Don't forget spaces."
            },
            {
                id: "a1_05_q47",
                type: "choice",
                question: "Which is correct?",
                options: ["Je ne pas mange.", "Je ne mange pas.", "Je mange ne pas."],
                correct: 1,
                hint: "The sandwich rule."
            },
            {
                id: "a1_05_q48",
                type: "choice",
                question: "Which is correct?",
                options: ["Je n'ai pas de argent.", "Je n'ai pas d'argent."],
                correct: 1,
                hint: "De + Argent = D'argent."
            },
            {
                id: "a1_05_q49",
                type: "choice",
                question: "Which is correct? (Être exception)",
                options: ["Ce n'est pas un chat.", "Ce n'est pas de chat."],
                correct: 0,
                hint: "With Être, 'un' stays 'un'."
            },
            {
                id: "a1_05_q50",
                type: "sort",
                question: "Build: 'You do not have a car.'",
                blocks: ["de", "voiture", "n'", "Tu", "pas", "as"],
                correct_order: ["Tu", "n'", "as", "pas", "de", "voiture"],
                hint: "Tu n'as pas + de + noun."
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
                summary: "There are 3 ways to ask a question in French: **Intonation** (Casual), **Est-ce que** (Standard), and **Inversion** (Formal).",
                key_rule: "🔥 **The Magic Phrase:** When in doubt, use **'Est-ce que'** at the start of any sentence to turn it into a question instantly!"
            },
            explanation: [
                {
                    type: "table",
                    headers: ["Method", "Structure", "Example"],
                    rows: [
                        ["1. Intonation (Casual)", "Statement + ?", "Tu aimes le café ?"],
                        ["2. Est-ce que (Standard)", "Est-ce que + Statement + ?", "Est-ce que tu aimes le café ?"],
                        ["3. Inversion (Formal)", "Verb-Subject + ?", "Aimes-tu le café ?"]
                    ]
                },
                {
                    type: "text",
                    content: "**Question Words:**\nThese usually go at the **beginning** (formal) or **end** (casual) of the sentence.\n* **Où** (Where)\n* **Quand** (When)\n* **Qui** (Who)\n* **Quoi / Que** (What)\n* **Comment** (How)\n* **Pourquoi** (Why)\n* **Combien** (How much)"
                },
                {
                    type: "warning",
                    title: "⚠️ The 't' for Sound (Inversion)",
                    content: "In Inversion, if the verb ends in a vowel and the subject starts with a vowel (il/elle), we add a **-t-** in the middle.\n* *A-t-il faim ?* (Is he hungry?)"
                }
            ]
        },
        practice: [
            // --- Method 1: Intonation (Casual) ---
            {
                id: "a1_06_q01",
                type: "choice",
                question: "Which is an 'Intonation' question?",
                options: ["Tu viens ?", "Est-ce que tu viens ?", "Viens-tu ?"],
                correct: 0,
                hint: "It looks exactly like a statement."
            },
            {
                id: "a1_06_q02",
                type: "choice",
                question: "Casual: 'You are French?'",
                options: ["Tu es français ?", "Es-tu français ?", "Est-ce que tu es français ?"],
                correct: 0,
                hint: "Simplest form."
            },
            {
                id: "a1_06_q03",
                type: "sort",
                question: "Build (Casual): 'You are eating?'",
                blocks: ["manges", "Tu", "?", "mangez", "est-ce"], // Distractors: mangez, est-ce
                correct_order: ["Tu", "manges", "?"],
                hint: "Subject + Verb + ?"
            },
            {
                id: "a1_06_q04",
                type: "input",
                question: "Turn into question (Casual): 'Il est là.'",
                answer: "il est là ?",
                hint: "Just add a question mark."
            },
            {
                id: "a1_06_q05",
                type: "choice",
                question: "Spoken French: 'C'est bon ?'",
                options: ["Is it good?", "It is good."],
                correct: 0,
                hint: "Intonation rises at the end."
            },

            // --- Method 2: Est-ce que (Standard) ---
            {
                id: "a1_06_q06",
                type: "sort",
                question: "Build: 'Do you speak English?'",
                blocks: ["parles", "que", "Est-ce", "tu", "anglais", "?", "parlez", "qui"], // Distractors: parlez, qui
                correct_order: ["Est-ce", "que", "tu", "parles", "anglais", "?"],
                hint: "Start with Est-ce que."
            },
            {
                id: "a1_06_q07",
                type: "choice",
                question: "___ tu habites ici ?",
                options: ["Est-ce que", "Est-ce qui", "Est-ce"],
                correct: 0,
                hint: "Full phrase is 'Est-ce que'."
            },
            {
                id: "a1_06_q08",
                type: "choice",
                question: "Est-ce ___ (he) est prêt ?",
                options: ["qu'il", "que il", "qui il"],
                correct: 0,
                hint: "Que + il = Qu'il."
            },
            {
                id: "a1_06_q09",
                type: "sort",
                question: "Build: 'Is she arriving?'",
                blocks: ["qu'", "arrive", "Est-ce", "elle", "?", "que", "il"], // Distractors: que, il
                correct_order: ["Est-ce", "qu'", "elle", "arrive", "?"],
                hint: "Elision: Qu'elle."
            },
            {
                id: "a1_06_q10",
                type: "choice",
                question: "Est-ce que nous ___ (have) le temps ?",
                options: ["avons", "avez", "ont"],
                correct: 0,
                hint: "Conjugate Avoir for Nous."
            },

            // --- Method 3: Inversion (Formal) ---
            {
                id: "a1_06_q11",
                type: "choice",
                question: "Inversion: 'Vous parlez.' -> ___ ?",
                options: ["Parlez-vous", "Vous parlez", "Parlez vous"],
                correct: 0,
                hint: "Don't forget the hyphen (-)."
            },
            {
                id: "a1_06_q12",
                type: "choice",
                question: "Inversion: 'Tu as faim.' -> ___ ?",
                options: ["As-tu faim", "A-tu faim", "Tu as faim"],
                correct: 0,
                hint: "Verb-Subject."
            },
            {
                id: "a1_06_q13",
                type: "sort",
                question: "Build (Formal): 'Are you happy?'",
                blocks: ["Êtes-vous", "content", "?", "Vous êtes", "es-tu"], // Distractors: Vous êtes, es-tu
                correct_order: ["Êtes-vous", "content", "?"],
                hint: "Verb first."
            },
            {
                id: "a1_06_q14",
                type: "choice",
                question: "Special -t- rule: 'Il a un chien' -> ___ un chien ?",
                options: ["A-t-il", "A-il", "As-il"],
                correct: 0,
                hint: "Vowel clash (A - Il) needs a 't' in between."
            },
            {
                id: "a1_06_q15",
                type: "sort",
                question: "Build (Formal): 'Does she speak?'",
                blocks: ["Parle-t-elle", "?", "Parle-elle", "t", "Parles-elle"], // Distractors: Parle-elle, Parles-elle
                correct_order: ["Parle-t-elle", "?"],
                hint: "Needs the extra 't' for sound."
            },

            // --- Question Words (Context) ---
            {
                id: "a1_06_q16",
                type: "input",
                question: "___ (Where) vas-tu ?",
                answer: "Où",
                hint: "Accent grave on the u."
            },
            {
                id: "a1_06_q17",
                type: "choice",
                question: "___ (When) partons-nous ?",
                options: ["Quand", "Qui", "Quoi"],
                correct: 0,
                hint: "Time."
            },
            {
                id: "a1_06_q18",
                type: "choice",
                question: "___ (Who) est là ?",
                options: ["Qui", "Que", "Quand"],
                correct: 0,
                hint: "Person."
            },
            {
                id: "a1_06_q19",
                type: "choice",
                question: "___ (How) ça va ?",
                options: ["Comment", "Combien", "Pourquoi"],
                correct: 0,
                hint: "Manner / State."
            },
            {
                id: "a1_06_q20",
                type: "choice",
                question: "___ (Why) pleures-tu ?",
                options: ["Pourquoi", "Parce que", "Pour"],
                correct: 0,
                hint: "Reason."
            },
            {
                id: "a1_06_q21",
                type: "choice",
                question: "___ (How much) ça coûte ?",
                options: ["Combien", "Comment", "Quand"],
                correct: 0,
                hint: "Quantity / Price."
            },
            {
                id: "a1_06_q22",
                type: "choice",
                question: "___ (What) fais-tu ?",
                options: ["Que", "Qui", "Où"],
                correct: 0,
                hint: "Formal 'What' at start of sentence."
            },
            {
                id: "a1_06_q23",
                type: "choice",
                question: "Tu fais ___ (what) ?",
                options: ["quoi", "que", "qui"],
                correct: 0,
                hint: "Informal 'What' at end of sentence."
            },
            {
                id: "a1_06_q24",
                type: "choice",
                question: "___ est ce garçon ?",
                options: ["Qui", "Que", "Quoi"],
                correct: 0,
                hint: "Asking about a person."
            },
            {
                id: "a1_06_q25",
                type: "input",
                question: "___ (What) est-ce que tu aimes ?",
                answer: "Qu'",
                hint: "Que + est = Qu'."
            },

            // --- Mixed Sorting with Distractors ---
            {
                id: "a1_06_q26",
                type: "sort",
                question: "Build: 'Where do you live?' (Est-ce que)",
                blocks: ["Où", "est-ce", "que", "tu", "habites", "?", "quand", "habitez"], // Distractors: quand, habitez
                correct_order: ["Où", "est-ce", "que", "tu", "habites", "?"],
                hint: "Question word goes first."
            },
            {
                id: "a1_06_q27",
                type: "sort",
                question: "Build: 'How are you?' (Formal Inversion)",
                blocks: ["Allez-vous", "Comment", "?", "va", "tu"], // Distractors: va, tu
                correct_order: ["Comment", "Allez-vous", "?"],
                hint: "Comment + Inversion."
            },
            {
                id: "a1_06_q28",
                type: "sort",
                question: "Build: 'Why are you crying?' (Standard)",
                blocks: ["Pourquoi", "est-ce", "que", "tu", "pleures", "?", "qui", "pleurez"], // Distractors: qui, pleurez
                correct_order: ["Pourquoi", "est-ce", "que", "tu", "pleures", "?"],
                hint: "Q-Word + Est-ce que + Subject + Verb."
            },
            {
                id: "a1_06_q29",
                type: "sort",
                question: "Build: 'Who is it?' (C'est qui)",
                blocks: ["C'", "est", "qui", "?", "que", "ce"], // Distractors: que, ce
                correct_order: ["C'", "est", "qui", "?"],
                hint: "Informal phrasing."
            },
            {
                id: "a1_06_q30",
                type: "sort",
                question: "Build: 'Do you have a car?' (Inversion)",
                blocks: ["As-tu", "une", "voiture", "?", "A-tu", "la"], // Distractors: A-tu, la
                correct_order: ["As-tu", "une", "voiture", "?"],
                hint: "Avoir conjugation."
            },

            // --- Qu'est-ce que vs Qui est-ce que ---
            {
                id: "a1_06_q31",
                type: "choice",
                question: "___ (What) c'est ?",
                options: ["Qu'est-ce que", "Qui est-ce que"],
                correct: 0,
                hint: "Asking about a thing."
            },
            {
                id: "a1_06_q32",
                type: "choice",
                question: "___ (Who) regarde la télé ?",
                options: ["Qui est-ce qui", "Qu'est-ce qui"],
                correct: 0,
                hint: "Asking about a person (subject)."
            },
            
            // --- Rapid Fire Translation ---
            {
                id: "a1_06_q33",
                type: "choice",
                question: "Translate: 'Are we going?'",
                options: ["On y va ?", "On est va ?", "Allons on ?"],
                correct: 0,
                hint: "Common expression: On y va."
            },
            {
                id: "a1_06_q34",
                type: "choice",
                question: "Translate: 'Can you help?' (Formal)",
                options: ["Pouvez-vous aider ?", "Peux-tu aider ?", "Aidez-vous ?"],
                correct: 0,
                hint: "Inversion of Pouvoir."
            },
            {
                id: "a1_06_q35",
                type: "choice",
                question: "Translate: 'What is your name?' (Comment...)",
                options: ["Comment t'appelles-tu ?", "Où t'appelles-tu ?", "Pourquoi t'appelles-tu ?"],
                correct: 0,
                hint: "How do you call yourself."
            },

            // --- Correction Drills (Spot the mistake) ---
            {
                id: "a1_06_q36",
                type: "choice",
                question: "Which is correct?",
                options: ["Où habites-tu ?", "Où tu habites ?", "Où est-ce que tu habites ?"],
                correct: 0,
                hint: "Strictly speaking, 'Où tu habites' is bad grammar (though used casually). Inversion is safest here."
            },
            {
                id: "a1_06_q37",
                type: "choice",
                question: "Which is correct (Inversion)?",
                options: ["A-t-il faim ?", "A-il faim ?", "Est-il faim ?"],
                correct: 0,
                hint: "Needs the T, and uses Avoir."
            },
            {
                id: "a1_06_q38",
                type: "choice",
                question: "Which is correct?",
                options: ["Est-ce qu'il pleut ?", "Est-ce il pleut ?", "Est-ce que pleut ?"],
                correct: 0,
                hint: "Que + il = Qu'il."
            },

            // --- Complex Sorts (Words + Structure) ---
            {
                id: "a1_06_q39",
                type: "sort",
                question: "Build: 'When does the train leave?'",
                blocks: ["part", "le", "Quand", "train", "?", "est", "quoi"], // Distractors: est, quoi
                correct_order: ["Quand", "le", "train", "part", "?"],
                hint: "Intonation style with Q-word."
            },
            {
                id: "a1_06_q40",
                type: "sort",
                question: "Build: 'Why do you like France?' (Est-ce que)",
                blocks: ["Pourquoi", "est-ce", "que", "tu", "aimes", "la", "France", "?", "le", "parce"], // Distractors: le, parce
                correct_order: ["Pourquoi", "est-ce", "que", "tu", "aimes", "la", "France", "?"],
                hint: "Long standard structure."
            },
            
            // --- Final Challenge ---
            {
                id: "a1_06_q41",
                type: "input",
                question: "Formal: ___ (Do you speak) anglais ?",
                answer: "parlez-vous",
                hint: "Inversion of Parler (Vous)."
            },
            {
                id: "a1_06_q42",
                type: "input",
                question: "Casual: Tu ___ (want) du café ?",
                answer: "veux",
                hint: "Tu form of Vouloir."
            },
            {
                id: "a1_06_q43",
                type: "choice",
                question: "Combien ___ (costs) ce t-shirt ?",
                options: ["coûte", "coûtes", "coûtent"],
                correct: 0,
                hint: "Singular subject (ce t-shirt)."
            },
            {
                id: "a1_06_q44",
                type: "choice",
                question: "___ (Who) est ton professeur ?",
                options: ["Qui", "Que"],
                correct: 0,
                hint: "Person."
            },
            {
                id: "a1_06_q45",
                type: "choice",
                question: "___ (When) est ton anniversaire ?",
                options: ["C'est quand", "C'est où", "C'est qui"],
                correct: 0,
                hint: "Time."
            },
            {
                id: "a1_06_q46",
                type: "sort",
                question: "Build: 'Are they (fem) coming?' (Inversion)",
                blocks: ["Viennent-elles", "?", "Viennent-ils", "Elles-viennent"], // Distractors: Viennent-ils, Elles-viennent
                correct_order: ["Viennent-elles", "?"],
                hint: "Verb first."
            },
            {
                id: "a1_06_q47",
                type: "sort",
                question: "Build: 'What are you doing?' (Qu'est-ce que)",
                blocks: ["Qu'", "est-ce", "que", "tu", "fais", "?", "Qui", "faites"], // Distractors: Qui, faites
                correct_order: ["Qu'", "est-ce", "que", "tu", "fais", "?"],
                hint: "What + is it + that + you + do."
            },
            {
                id: "a1_06_q48",
                type: "choice",
                question: "Response to 'Pourquoi ?'",
                options: ["Parce que...", "Pour...", "Oui"],
                correct: 0,
                hint: "Because..."
            },
            {
                id: "a1_06_q49",
                type: "choice",
                question: "Response to 'Qui est-ce ?'",
                options: ["C'est Pierre.", "C'est un livre.", "Il est à Paris."],
                correct: 0,
                hint: "Asking about a person."
            },
            {
                id: "a1_06_q50",
                type: "sort",
                question: "Build: 'Can we go?'",
                blocks: ["Peut-on", "y", "aller", "?", "Peux-je", "allons"], // Distractors: Peux-je, allons
                correct_order: ["Peut-on", "y", "aller", "?"],
                hint: "Using 'On' for We. Inversion. 'Y' stands for 'there'."
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
                summary: "You cannot speak French without **Aller** (to go) and **Faire** (to do/make). They are completely irregular and follow NO pattern.",
                key_rule: "🔥 **Memorize these!** Especially the plurals: *Ils vont* (They go) and *Ils font* (They do)."
            },
            explanation: [
                {
                    type: "text",
                    content: "These verbs change their stem completely. 'Aller' sounds like 'V-' in singular, and 'Faire' has a unique 'Faites' form for 'Vous'."
                },
                {
                    type: "table",
                    headers: ["Subject", "Aller (to go)", "Faire (to do)"],
                    rows: [
                        ["Je", "vais", "fais"],
                        ["Tu", "vas", "fais"],
                        ["Il / Elle", "va", "fait"],
                        ["Nous", "allons", "faisons"],
                        ["Vous", "allez", "faites (!)",],
                        ["Ils / Elles", "vont (!)", "font (!)"]
                    ]
                },
                {
                    type: "warning",
                    title: "⚠️ The Plural Trap",
                    content: "Be careful! \n* **Ils vont** (NOT allent)\n* **Ils font** (NOT faisent)\n* **Vous faites** (NOT faisez). This is one of only 3 verbs in French where 'Vous' does not end in -ez (Êtes, Faites, Dites)."
                },
                {
                    type: "text",
                    content: "**Common Expressions:**\n* *Comment ça va ?* (How is it going?)\n* *Je fais du sport.* (I do sports.)\n* *Il fait beau.* (The weather is nice - lit. It makes nice.)"
                }
            ]
        },
        practice: [
            // --- Conjugation: Aller ---
            {
                id: "a1_07_q01",
                type: "choice",
                question: "Je ___ au cinéma.",
                options: ["vais", "vas", "va"],
                correct: 0,
                hint: "First person singular of Aller."
            },
            {
                id: "a1_07_q02",
                type: "choice",
                question: "Tu ___ bien ?",
                options: ["va", "vas", "allez"],
                correct: 1,
                hint: "How are you doing? (Tu form)."
            },
            {
                id: "a1_07_q03",
                type: "input",
                question: "Il ___ (goes) à l'école.",
                answer: "va",
                hint: "3rd person singular."
            },
            {
                id: "a1_07_q04",
                type: "choice",
                question: "Nous ___ (go) au parc.",
                options: ["allons", "avons", "vont"],
                correct: 0,
                hint: "Regular ending for Nous."
            },
            {
                id: "a1_07_q05",
                type: "choice",
                question: "Vous ___ (go) où ?",
                options: ["allez", "avez", "aller"],
                correct: 0,
                hint: "Regular ending for Vous."
            },
            {
                id: "a1_07_q06",
                type: "choice",
                question: "Ils ___ (go) vite.",
                options: ["vont", "allent", "sont"],
                correct: 0,
                hint: "Irregular plural! Starts with V."
            },
             {
                id: "a1_07_q07",
                type: "sort",
                question: "Build: 'I go to Paris.'",
                blocks: ["Paris", "vais", "à", "Je", "va", "suis"], // Distractors: va, suis
                correct_order: ["Je", "vais", "à", "Paris"],
                hint: "Subject + Verb + Preposition + City."
            },

            // --- Conjugation: Faire ---
            {
                id: "a1_07_q08",
                type: "choice",
                question: "Je ___ (do) mes devoirs.",
                options: ["fais", "fait", "font"],
                correct: 0,
                hint: "Je form ends in s."
            },
            {
                id: "a1_07_q09",
                type: "choice",
                question: "Tu ___ (do) quoi ?",
                options: ["fait", "fais", "faites"],
                correct: 1,
                hint: "Tu form ends in s."
            },
            {
                id: "a1_07_q10",
                type: "choice",
                question: "Elle ___ (does) du yoga.",
                options: ["fais", "fait", "font"],
                correct: 1,
                hint: "Elle form ends in t."
            },
            {
                id: "a1_07_q11",
                type: "input",
                question: "Nous ___ (make) un gâteau.",
                answer: "faisons",
                hint: "Regular ending for Nous."
            },
            {
                id: "a1_07_q12",
                type: "choice",
                question: "Vous ___ (do) du sport ?",
                options: ["faisez", "faites", "faisons"],
                correct: 1,
                hint: "Major irregularity! No -ez here."
            },
            {
                id: "a1_07_q13",
                type: "choice",
                question: "Elles ___ (make) du bruit.",
                options: ["font", "faisent", "sont"],
                correct: 0,
                hint: "Irregular plural! Starts with F."
            },
             {
                id: "a1_07_q14",
                type: "sort",
                question: "Build: 'He makes a cake.'",
                blocks: ["gâteau", "fait", "Il", "un", "fais", "a"], // Distractors: fais, a
                correct_order: ["Il", "fait", "un", "gâteau"],
                hint: "3rd person singular."
            },

            // --- 'Ça va' Expressions ---
            {
                id: "a1_07_q15",
                type: "choice",
                question: "Comment ça ___ ?",
                options: ["va", "vas", "aller"],
                correct: 0,
                hint: "'Ça' takes the 3rd person singular (like Il)."
            },
            {
                id: "a1_07_q16",
                type: "choice",
                question: "Answer: Ça ___ bien.",
                options: ["va", "est", "fais"],
                correct: 0,
                hint: "It 'goes' well."
            },

            // --- Faire Expressions (Weather, Sports) ---
            {
                id: "a1_07_q17",
                type: "choice",
                question: "Il ___ (is) beau aujourd'hui.",
                options: ["fait", "est", "a"],
                correct: 0,
                hint: "Weather uses Faire (It makes nice)."
            },
            {
                id: "a1_07_q18",
                type: "choice",
                question: "Il ___ (is) froid.",
                options: ["fait", "est"],
                correct: 0,
                hint: "Weather = Faire."
            },
            {
                id: "a1_07_q19",
                type: "input",
                question: "Je ___ (do) de la natation.",
                answer: "fais",
                hint: "Je form."
            },
            {
                id: "a1_07_q20",
                type: "choice",
                question: "Nous ___ la cuisine.",
                options: ["faisons", "jouons", "allons"],
                correct: 0,
                hint: "To cook = Faire la cuisine."
            },

            // --- Mixed Discrimination (Aller vs Faire vs Avoir/Être) ---
            {
                id: "a1_07_q21",
                type: "choice",
                question: "Ils ___ (are) contents.",
                options: ["sont", "vont", "font"],
                correct: 0,
                hint: "State -> Être."
            },
            {
                id: "a1_07_q22",
                type: "choice",
                question: "Ils ___ (go) au parc.",
                options: ["vont", "sont", "font"],
                correct: 0,
                hint: "Motion -> Aller."
            },
            {
                id: "a1_07_q23",
                type: "choice",
                question: "Ils ___ (do) leurs devoirs.",
                options: ["font", "vont", "sont"],
                correct: 0,
                hint: "Action -> Faire."
            },
            {
                id: "a1_07_q24",
                type: "choice",
                question: "Vous ___ (are) français ?",
                options: ["êtes", "faites", "allez"],
                correct: 0,
                hint: "Identity -> Être."
            },
            {
                id: "a1_07_q25",
                type: "choice",
                question: "Vous ___ (make) un dessin ?",
                options: ["faites", "êtes", "allez"],
                correct: 0,
                hint: "Creation -> Faire."
            },
            {
                id: "a1_07_q26",
                type: "choice",
                question: "Vous ___ (go) bien ?",
                options: ["allez", "êtes", "avez"],
                correct: 0,
                hint: "Health/State -> Aller."
            },

            // --- The "Vont/Font/Sont/Ont" Challenge ---
            {
                id: "a1_07_q27",
                type: "choice",
                question: "Ils ___ (have) un chat.",
                options: ["ont", "sont", "vont"],
                correct: 0,
                hint: "Avoir."
            },
            {
                id: "a1_07_q28",
                type: "choice",
                question: "Ils ___ (are) ici.",
                options: ["sont", "font", "vont"],
                correct: 0,
                hint: "Être."
            },
            {
                id: "a1_07_q29",
                type: "choice",
                question: "Ils ___ (make) du pain.",
                options: ["font", "vont", "sont"],
                correct: 0,
                hint: "Faire."
            },
            {
                id: "a1_07_q30",
                type: "choice",
                question: "Ils ___ (go) à la plage.",
                options: ["vont", "font", "ont"],
                correct: 0,
                hint: "Aller."
            },

            // --- Sentence Sorting Drills ---
            {
                id: "a1_07_q31",
                type: "sort",
                question: "Build: 'What are you doing?'",
                blocks: ["fais", "Qu'est-ce", "que", "tu", "?", "vas", "fait"], // Distractors: vas, fait
                correct_order: ["Qu'est-ce", "que", "tu", "fais", "?"],
                hint: "Standard question structure."
            },
            {
                id: "a1_07_q32",
                type: "sort",
                question: "Build: 'We are going home.'",
                blocks: ["maison", "allons", "à", "la", "Nous", "sommes"], // Distractors: sommes
                correct_order: ["Nous", "allons", "à", "la", "maison"],
                hint: "Subject + Aller + Destination."
            },
            {
                id: "a1_07_q33",
                type: "sort",
                question: "Build: 'He makes a cake.'",
                blocks: ["gâteau", "fait", "Il", "un", "va", "est"], // Distractors: va, est
                correct_order: ["Il", "fait", "un", "gâteau"],
                hint: "Faire conjugation."
            },
            {
                id: "a1_07_q34",
                type: "sort",
                question: "Build: 'You (formal) do sports.'",
                blocks: ["sport", "du", "faites", "Vous", "faisez", "allez"], // Distractors: faisez, allez
                correct_order: ["Vous", "faites", "du", "sport"],
                hint: "Remember: Vous FAITES."
            },

            // --- Rapid Fire Translation ---
            {
                id: "a1_07_q35",
                type: "choice",
                question: "Translate: 'I go'",
                options: ["Je vais", "Je go", "Je marche"],
                correct: 0,
                hint: "Aller."
            },
            {
                id: "a1_07_q36",
                type: "choice",
                question: "Translate: 'You (friend) do'",
                options: ["Tu fais", "Tu fait", "Tu vas"],
                correct: 0,
                hint: "Faire ending s."
            },
            {
                id: "a1_07_q37",
                type: "choice",
                question: "Translate: 'She goes'",
                options: ["Elle va", "Elle vas", "Elle aller"],
                correct: 0,
                hint: "No 's' for 3rd person."
            },
            {
                id: "a1_07_q38",
                type: "choice",
                question: "Translate: 'They (fem) make'",
                options: ["Elles font", "Elles faisent", "Elles vont"],
                correct: 0,
                hint: "Irregular plural."
            },
            {
                id: "a1_07_q39",
                type: "input",
                question: "Translate: 'We go' (Nous)",
                answer: "allons",
                hint: "Nous ___"
            },
            {
                id: "a1_07_q40",
                type: "input",
                question: "Translate: 'You (plural) do'",
                answer: "faites",
                hint: "Vous ___"
            },

            // --- Advanced Context ---
            {
                id: "a1_07_q41",
                type: "choice",
                question: "Je ___ les courses (shopping).",
                options: ["fais", "vais"],
                correct: 0,
                hint: "To DO the shopping."
            },
            {
                id: "a1_07_q42",
                type: "choice",
                question: "Tu ___ les devoirs.",
                options: ["fais", "vas"],
                correct: 0,
                hint: "To DO homework."
            },
            {
                id: "a1_07_q43",
                type: "choice",
                question: "On ___ au restaurant.",
                options: ["va", "fait"],
                correct: 0,
                hint: "Movement to a place."
            },
            {
                id: "a1_07_q44",
                type: "choice",
                question: "Il ___ la vaisselle (dishes).",
                options: ["fait", "va"],
                correct: 0,
                hint: "Doing a chore."
            },
            {
                id: "a1_07_q45",
                type: "choice",
                question: "Nous ___ en vacances.",
                options: ["allons", "faisons"],
                correct: 0,
                hint: "Going on vacation."
            },
            {
                id: "a1_07_q46",
                type: "choice",
                question: "Vous ___ attention.",
                options: ["faites", "allez"],
                correct: 0,
                hint: "Expression: To pay (make) attention."
            },
            {
                id: "a1_07_q47",
                type: "choice",
                question: "Ils ___ la fête.",
                options: ["font", "vont"],
                correct: 0,
                hint: "To party (make the party)."
            },
            {
                id: "a1_07_q48",
                type: "sort",
                question: "Build: 'Are you doing okay?'",
                blocks: ["va", "ça", "Est-ce", "que", "?", "fais", "bien"], // Distractors: fais, bien
                correct_order: ["Est-ce", "que", "ça", "va", "?"],
                hint: "Using 'Aller' for well-being."
            },
            {
                id: "a1_07_q49",
                type: "choice",
                question: "Qu'est-ce qu'ils ___ ?",
                options: ["font", "faisent"],
                correct: 0,
                hint: "What are they doing?"
            },
            {
                id: "a1_07_q50",
                type: "choice",
                question: "Final Check: 'I am going (aller) to do (faire) it.'",
                options: ["Je vais le faire", "Je fais le aller"],
                correct: 0,
                hint: "Conjugated Aller + Infinitive Faire."
            }
        ]
    },
    "a1_08": {
        meta: {
            title: "Verbs ending in -ir",
            tags: ["Grammar", "Verbs", "Group 2", "A1"],
            color: "text-blue-600 bg-blue-50"
        },
        learn: {
            cheat_sheet: {
                summary: "This is the **2nd Group** of French verbs. They are regular but have a special characteristic in the plural forms.",
                key_rule: "🔥 **The 'SS' Rule:** For plural subjects (Nous, Vous, Ils), you MUST insert **-iss-** before the ending!\n* *Finir -> Nous fin**iss**ons*"
            },
            explanation: [
                {
                    type: "text",
                    content: "To conjugate these verbs (Finir, Choisir, Réussir), drop the **-ir** and add these endings:"
                },
                {
                    type: "table",
                    headers: ["Subject", "Ending", "Example (Finir)", "Pronunciation"],
                    rows: [
                        ["Je", "-is", "finis", "fin-ee"],
                        ["Tu", "-is", "finis", "fin-ee"],
                        ["Il/Elle", "-it", "finit", "fin-ee"],
                        ["Nous", "-issons", "finissons", "fin-ee-son"],
                        ["Vous", "-issez", "finissez", "fin-ee-say"],
                        ["Ils/Elles", "-issent", "finissent", "fin-iss"]
                    ]
                },
                {
                    type: "warning",
                    title: "⚠️ False Friends (Group 3)",
                    content: "Not all -IR verbs follow this pattern! Some (like **Partir, Dormir, Sortir**) are irregular (Group 3) and do NOT take the -iss- stem. \n* *Nous partons* (NOT partissons).\n* *Nous dormons* (NOT dormissons)."
                },
                {
                    type: "text",
                    content: "**Common Group 2 Verbs:** Finir (to finish), Choisir (to choose), Réussir (to succeed), Réfléchir (to think/reflect), Grandir (to grow), Grossir (to gain weight), Rougir (to blush)."
                }
            ]
        },
        practice: [
            // --- Basic Conjugation: Finir (To finish) ---
            {
                id: "a1_08_q01",
                type: "choice",
                question: "Je ___ (finir) mon travail.",
                options: ["finis", "finit", "finissons"],
                correct: 0,
                hint: "Je ends in -is."
            },
            {
                id: "a1_08_q02",
                type: "choice",
                question: "Tu ___ (finir) ton repas.",
                options: ["finis", "finit", "finissez"],
                correct: 0,
                hint: "Tu ends in -is."
            },
            {
                id: "a1_08_q03",
                type: "choice",
                question: "Il ___ (finir) la course.",
                options: ["finit", "finis", "finissent"],
                correct: 0,
                hint: "Il ends in -it."
            },
            {
                id: "a1_08_q04",
                type: "input",
                question: "Nous ___ (finir) le projet.",
                answer: "finissons",
                hint: "Don't forget the -iss- + ons."
            },
            {
                id: "a1_08_q05",
                type: "choice",
                question: "Vous ___ (finir) à quelle heure ?",
                options: ["finissez", "finisez", "finiez"],
                correct: 0,
                hint: "-iss- + ez."
            },
            {
                id: "a1_08_q06",
                type: "choice",
                question: "Elles ___ (finir) leurs devoirs.",
                options: ["finissent", "finisent", "finirent"],
                correct: 0,
                hint: "-iss- + ent."
            },

            // --- Basic Conjugation: Choisir (To choose) ---
            {
                id: "a1_08_q07",
                type: "choice",
                question: "Tu ___ (choisir) le rouge ou le bleu ?",
                options: ["choisis", "choisit", "choisissez"],
                correct: 0,
                hint: "Tu form."
            },
            {
                id: "a1_08_q08",
                type: "input",
                question: "Je ___ (choisir) la liberté.",
                answer: "choisis",
                hint: "Je form."
            },
            {
                id: "a1_08_q09",
                type: "choice",
                question: "Nous ___ (choisir) ce restaurant.",
                options: ["choisissons", "choisons", "choisisons"],
                correct: 0,
                hint: "Double S: Choisiss-."
            },
            {
                id: "a1_08_q10",
                type: "choice",
                question: "Ils ___ (choisir) bien.",
                options: ["choisissent", "choisent", "choisisent"],
                correct: 0,
                hint: "Double S: Choisiss-."
            },

            // --- Other Common Verbs ---
            {
                id: "a1_08_q11",
                type: "choice",
                question: "Elle ___ (réussir - succeed) à l'examen.",
                options: ["réussit", "réussis", "réussit"],
                correct: 0,
                hint: "Ending -it for Elle."
            },
            {
                id: "a1_08_q12",
                type: "input",
                question: "Vous ___ (réussir) toujours.",
                answer: "réussissez",
                hint: "Réuss-iss-ez."
            },
            {
                id: "a1_08_q13",
                type: "choice",
                question: "Je ___ (réfléchir - think) au problème.",
                options: ["réfléchis", "réfléchit"],
                correct: 0,
                hint: "Ending -is."
            },
            {
                id: "a1_08_q14",
                type: "choice",
                question: "Nous ___ (réfléchir) ensemble.",
                options: ["réfléchissons", "réfléchons"],
                correct: 0,
                hint: "The SS rule applies."
            },
            {
                id: "a1_08_q15",
                type: "input",
                question: "Tu ___ (grandir - grow) vite !",
                answer: "grandis",
                hint: "Ending -is."
            },
            {
                id: "a1_08_q16",
                type: "choice",
                question: "Les enfants ___ (grandir).",
                options: ["grandissent", "grandisent"],
                correct: 0,
                hint: "Double S."
            },
            {
                id: "a1_08_q17",
                type: "choice",
                question: "Elle ___ (rougir - blush) facilement.",
                options: ["rougit", "rougis"],
                correct: 0,
                hint: "Ending -it."
            },
            {
                id: "a1_08_q18",
                type: "choice",
                question: "Nous ___ (remplir - fill) les verres.",
                options: ["remplissons", "remplisons"],
                correct: 0,
                hint: "Remplir is a regular Group 2 verb."
            },
            {
                id: "a1_08_q19",
                type: "choice",
                question: "Le chat ___ (grossir - get fat).",
                options: ["grossit", "grossis"],
                correct: 0,
                hint: "3rd person singular."
            },
            {
                id: "a1_08_q20",
                type: "choice",
                question: "Vous ___ (obéir - obey) aux règles.",
                options: ["obéissez", "obéiez"],
                correct: 0,
                hint: "Obéir is Group 2."
            },

            // --- Sentence Sorting (Structure) ---
            {
                id: "a1_08_q21",
                type: "sort",
                question: "Build: 'She finishes the book.'",
                blocks: ["livre", "finit", "le", "Elle", "finis", "la"], // Distractors: finis, la
                correct_order: ["Elle", "finit", "le", "livre"],
                hint: "Verb ends in -it."
            },
            {
                id: "a1_08_q22",
                type: "sort",
                question: "Build: 'We choose the pizza.'",
                blocks: ["choisissons", "Nous", "la", "pizza", "choisons", "le"], // Distractors: choisons, le
                correct_order: ["Nous", "choisissons", "la", "pizza"],
                hint: "Remember the SS."
            },
            {
                id: "a1_08_q23",
                type: "sort",
                question: "Build: 'You (formal) succeed.'",
                blocks: ["réussissez", "Vous", "réussis", "tu"], // Distractors: réussis, tu
                correct_order: ["Vous", "réussissez"],
                hint: "Vous form."
            },
            {
                id: "a1_08_q24",
                type: "sort",
                question: "Build: 'They reflect (think).'",
                blocks: ["réfléchissent", "Ils", "réfléchit", "Elles", "sont"], // Distractors: réfléchit
                correct_order: ["Ils", "réfléchissent"],
                hint: "Plural conjugation."
            },

            // --- False Friends (Group 2 vs Group 3) ---
            {
                id: "a1_08_q25",
                type: "choice",
                question: "Nous ___ (partir - Group 3!) en vacances.",
                options: ["partons", "partissons"],
                correct: 0,
                hint: "Partir is irregular! No SS."
            },
            {
                id: "a1_08_q26",
                type: "choice",
                question: "Nous ___ (dormir - Group 3!) bien.",
                options: ["dormons", "dormissons"],
                correct: 0,
                hint: "Dormir is irregular. No SS."
            },
            {
                id: "a1_08_q27",
                type: "choice",
                question: "Nous ___ (sortir - Group 3!) ce soir.",
                options: ["sortons", "sortissons"],
                correct: 0,
                hint: "Sortir is irregular. No SS."
            },
            {
                id: "a1_08_q28",
                type: "choice",
                question: "But: Nous ___ (finir - Group 2!).",
                options: ["finissons", "finons"],
                correct: 0,
                hint: "Finir is regular Group 2 -> SS."
            },

            // --- Pronunciation Checks ---
            {
                id: "a1_08_q29",
                type: "choice",
                question: "Which ending is silent?",
                options: ["-it", "-issons", "-issez"],
                correct: 0,
                hint: "The T at the end of 'finit' is usually not pronounced."
            },
            {
                id: "a1_08_q30",
                type: "choice",
                question: "Which ending sounds like 'S'?",
                options: ["-is", "-it", "-issons"],
                correct: 2,
                hint: "Issons has the strong S sound."
            },

            // --- Rapid Fire ---
            {
                id: "a1_08_q31",
                type: "choice",
                question: "Je fin___",
                options: ["-is", "-it", "-issons"],
                correct: 0,
                hint: "is."
            },
            {
                id: "a1_08_q32",
                type: "choice",
                question: "Tu fin___",
                options: ["-is", "-it", "-issez"],
                correct: 0,
                hint: "is."
            },
            {
                id: "a1_08_q33",
                type: "choice",
                question: "Il fin___",
                options: ["-it", "-is", "-issent"],
                correct: 0,
                hint: "it."
            },
            {
                id: "a1_08_q34",
                type: "choice",
                question: "Nous fin___",
                options: ["-issons", "-ons", "-iss"],
                correct: 0,
                hint: "issons."
            },
            {
                id: "a1_08_q35",
                type: "choice",
                question: "Vous fin___",
                options: ["-issez", "-ez", "-issiez"],
                correct: 0,
                hint: "issez."
            },
            {
                id: "a1_08_q36",
                type: "choice",
                question: "Ils fin___",
                options: ["-issent", "-ent", "-issont"],
                correct: 0,
                hint: "issent."
            },

            // --- Advanced Context ---
            {
                id: "a1_08_q37",
                type: "input",
                question: "Tu ___ (agir - act) bizarrement.",
                answer: "agis",
                hint: "Agir -> Agis."
            },
            {
                id: "a1_08_q38",
                type: "choice",
                question: "Les plantes ___ (fleurir - bloom).",
                options: ["fleurissent", "fleurisent"],
                correct: 0,
                hint: "Double S."
            },
            {
                id: "a1_08_q39",
                type: "choice",
                question: "Il ___ (guérir - heal) vite.",
                options: ["guérit", "guéris"],
                correct: 0,
                hint: "3rd person."
            },
            {
                id: "a1_08_q40",
                type: "choice",
                question: "Nous ___ (applaudir) le spectacle.",
                options: ["applaudissons", "applaudons"],
                correct: 0,
                hint: "Applaudir is regular Group 2."
            },
            {
                id: "a1_08_q41",
                type: "choice",
                question: "Vous ___ (punir) le chien ?",
                options: ["punissez", "punisez"],
                correct: 0,
                hint: "Double S."
            },
            {
                id: "a1_08_q42",
                type: "choice",
                question: "Je ne ___ (finir) pas.",
                options: ["finis", "finit"],
                correct: 0,
                hint: "Negation doesn't change conjugation."
            },
            {
                id: "a1_08_q43",
                type: "sort",
                question: "Build: 'Do you choose?' (Standard)",
                blocks: ["Est-ce", "que", "tu", "choisis", "?", "choisit", "qui"], // Distractors: choisit, qui
                correct_order: ["Est-ce", "que", "tu", "choisis", "?"],
                hint: "Question structure."
            },
            {
                id: "a1_08_q44",
                type: "input",
                question: "Ils ___ (bâtir - build) une maison.",
                answer: "bâtissent",
                hint: "Bâtir -> Bâtissent."
            },
            {
                id: "a1_08_q45",
                type: "choice",
                question: "On ___ (réussir) ensemble.",
                options: ["réussit", "réussis"],
                correct: 0,
                hint: "On = 3rd person singular (-it)."
            },
            {
                id: "a1_08_q46",
                type: "choice",
                question: "Qui ___ (finir) en premier ?",
                options: ["finit", "finis"],
                correct: 0,
                hint: "Qui acts as singular subject."
            },
            {
                id: "a1_08_q47",
                type: "choice",
                question: "Je ___ (haïr - hate) les lundis.",
                options: ["hais", "hait"],
                correct: 0,
                hint: "Pronounced 'Ay' (silent s)."
            },
            {
                id: "a1_08_q48",
                type: "sort",
                question: "Build: 'We are growing.'",
                blocks: ["grandissons", "Nous", "grandons", "sommes"], // Distractors: grandons, sommes
                correct_order: ["Nous", "grandissons"],
                hint: "Regular conjugation."
            },
            {
                id: "a1_08_q49",
                type: "choice",
                question: "Tu ___ (nourrir - feed) le chat.",
                options: ["nourris", "nourrit"],
                correct: 0,
                hint: "-is."
            },
            {
                id: "a1_08_q50",
                type: "choice",
                question: "Final Check: 'They finish the work.'",
                options: ["Ils finissent le travail", "Ils finisent le travail"],
                correct: 0,
                hint: "Don't forget the double S!"
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
                summary: "These are the 'Regular -RE' verbs. They are the easiest group because the *Il/Elle* form adds NOTHING!",
                key_rule: "🔥 **The Formula:**\n1. Drop the **-re** to get the stem.\n2. Add: **s, s, (nothing), ons, ez, ent**."
            },
            explanation: [
                {
                    type: "text",
                    content: "Let's conjugate **Vendre** (to sell). The stem is **Vend-**."
                },
                {
                    type: "table",
                    headers: ["Subject", "Ending", "Full Verb", "Note"],
                    rows: [
                        ["Je", "-s", "je vends", "Silent 's'"],
                        ["Tu", "-s", "tu vends", "Silent 's'"],
                        ["Il / Elle", "-(nothing)", "il vend", "Stop at the 'd'!"],
                        ["Nous", "-ons", "nous vendons", "Regular"],
                        ["Vous", "-ez", "vous vendez", "Regular"],
                        ["Ils / Elles", "-ent", "ils vendent", "Silent 'ent'"]
                    ]
                },
                {
                    type: "warning",
                    title: "⚠️ Watch out for Irregulars",
                    content: "Many -re verbs are irregular! For example, **Prendre** (to take) changes its stem in plural (*nous prenons*). The rule above only works for 'Regular -RE' verbs like **Attendre, Descendre, Entendre, Perdre, Répondre**."
                },
                {
                    type: "text",
                    content: "**Common Verbs:**\n* *Attendre* (to wait)\n* *Descendre* (to go down)\n* *Entendre* (to hear)\n* *Perdre* (to lose)\n* *Répondre* (to answer)\n* *Rendre* (to give back)"
                }
            ]
        },
        practice: [
            // --- Basic Conjugation: Vendre (To sell) ---
            {
                id: "a1_09_q01",
                type: "choice",
                question: "Je ___ (vendre) ma voiture.",
                options: ["vends", "vend", "vendez"],
                correct: 0,
                hint: "Je adds -s."
            },
            {
                id: "a1_09_q02",
                type: "choice",
                question: "Tu ___ (vendre) des fleurs ?",
                options: ["vends", "vend", "vent"],
                correct: 0,
                hint: "Tu adds -s."
            },
            {
                id: "a1_09_q03",
                type: "choice",
                question: "Il ___ (vendre) sa maison.",
                options: ["vend", "vends", "vent"],
                correct: 0,
                hint: "Il adds nothing (stop at the stem)."
            },
            {
                id: "a1_09_q04",
                type: "input",
                question: "Nous ___ (vendre) des livres.",
                answer: "vendons",
                hint: "Regular -ons ending."
            },
            {
                id: "a1_09_q05",
                type: "choice",
                question: "Vous ___ (vendre) le vélo ?",
                options: ["vendez", "vends", "vendezz"],
                correct: 0,
                hint: "Vous adds -ez."
            },
            {
                id: "a1_09_q06",
                type: "choice",
                question: "Ils ___ (vendre) tout.",
                options: ["vendent", "vendons", "vend"],
                correct: 0,
                hint: "Ils adds -ent."
            },

            // --- Attendre (To wait) ---
            {
                id: "a1_09_q07",
                type: "choice",
                question: "J'___ (attendre) le bus.",
                options: ["attends", "attend", "attender"],
                correct: 0,
                hint: "Je adds -s."
            },
            {
                id: "a1_09_q08",
                type: "input",
                question: "Tu ___ (attendre) qui ?",
                answer: "attends",
                hint: "Tu form."
            },
            {
                id: "a1_09_q09",
                type: "choice",
                question: "Elle ___ (attendre) son ami.",
                options: ["attend", "attends", "attent"],
                correct: 0,
                hint: "No ending. Just the stem."
            },
            {
                id: "a1_09_q10",
                type: "choice",
                question: "Nous ___ (attendre) depuis une heure.",
                options: ["attendons", "attendez"],
                correct: 0,
                hint: "-ons."
            },

            // --- Descendre (To go down / get off) ---
            {
                id: "a1_09_q11",
                type: "choice",
                question: "Je ___ (descendre) l'escalier.",
                options: ["descends", "descend", "descen"],
                correct: 0,
                hint: "Add -s."
            },
            {
                id: "a1_09_q12",
                type: "choice",
                question: "Il ___ (descendre) du train.",
                options: ["descend", "descends", "descent"],
                correct: 0,
                hint: "Stop at the 'd'. No 't'!"
            },
            {
                id: "a1_09_q13",
                type: "input",
                question: "Vous ___ (descendre) ici ?",
                answer: "descendez",
                hint: "Vous form."
            },
            {
                id: "a1_09_q14",
                type: "choice",
                question: "Elles ___ (descendre) à la plage.",
                options: ["descendent", "descendons"],
                correct: 0,
                hint: "Plural."
            },

            // --- Entendre (To hear) ---
            {
                id: "a1_09_q15",
                type: "choice",
                question: "Tu ___ (entendre) la musique ?",
                options: ["entends", "entend"],
                correct: 0,
                hint: "Tu adds -s."
            },
            {
                id: "a1_09_q16",
                type: "choice",
                question: "On n'___ (entendre) rien.",
                options: ["entend", "entends", "entent"],
                correct: 0,
                hint: "On = Il/Elle (Nothing added)."
            },
            {
                id: "a1_09_q17",
                type: "input",
                question: "Nous ___ (entendre) un bruit.",
                answer: "entendons",
                hint: "Standard Nous form."
            },

            // --- Perdre (To lose) ---
            {
                id: "a1_09_q18",
                type: "choice",
                question: "Je ___ (perdre) toujours mes clés.",
                options: ["perds", "perd"],
                correct: 0,
                hint: "Je = -s."
            },
            {
                id: "a1_09_q19",
                type: "choice",
                question: "Il ___ (perdre) son temps.",
                options: ["perd", "perds", "pert"],
                correct: 0,
                hint: "Stop at the 'd'."
            },
            {
                id: "a1_09_q20",
                type: "choice",
                question: "Ils ___ (perdre) le match.",
                options: ["perdent", "perdez"],
                correct: 0,
                hint: "-ent."
            },

            // --- Répondre (To answer) ---
            {
                id: "a1_09_q21",
                type: "choice",
                question: "Tu ___ (répondre) au téléphone ?",
                options: ["réponds", "répond"],
                correct: 0,
                hint: "Tu = -s."
            },
            {
                id: "a1_09_q22",
                type: "choice",
                question: "Elle ne ___ (répondre) pas.",
                options: ["répond", "réponds", "répont"],
                correct: 0,
                hint: "Stop at the 'd'."
            },
            {
                id: "a1_09_q23",
                type: "input",
                question: "Vous ___ (répondre) à la question.",
                answer: "répondez",
                hint: "Vous form."
            },

            // --- Rendre (To give back / return) ---
            {
                id: "a1_09_q24",
                type: "choice",
                question: "Je te ___ (rendre) ton livre.",
                options: ["rends", "rend"],
                correct: 0,
                hint: "Je = -s."
            },
            {
                id: "a1_09_q25",
                type: "choice",
                question: "Nous ___ (rendre) visite à Paul.",
                options: ["rendons", "rendez"],
                correct: 0,
                hint: "Expression: Rendre visite (to visit someone)."
            },

            // --- Sentence Sorting (Structure & Distractors) ---
            {
                id: "a1_09_q26",
                type: "sort",
                question: "Build: 'I wait for the bus.'",
                blocks: ["attends", "bus", "le", "J'", "attend", "la"], // Distractors: attend, la
                correct_order: ["J'", "attends", "le", "bus"],
                hint: "J' adds -s."
            },
            {
                id: "a1_09_q27",
                type: "sort",
                question: "Build: 'He goes down.'",
                blocks: ["descend", "Il", "descends", "descent"], // Distractors: descends, descent
                correct_order: ["Il", "descend"],
                hint: "No ending for Il."
            },
            {
                id: "a1_09_q28",
                type: "sort",
                question: "Build: 'We hear a noise.'",
                blocks: ["bruit", "un", "entendons", "Nous", "entendez", "une"], // Distractors: entendez, une
                correct_order: ["Nous", "entendons", "un", "bruit"],
                hint: "-ons ending."
            },
            {
                id: "a1_09_q29",
                type: "sort",
                question: "Build: 'Do you sell apples?'",
                blocks: ["vendez", "des", "pommes", "Vous", "?", "vendent", "le"], // Distractors: vendent, le
                correct_order: ["Vous", "vendez", "des", "pommes", "?"],
                hint: "Vous form."
            },
            {
                id: "a1_09_q30",
                type: "sort",
                question: "Build: 'She answers no.'",
                blocks: ["non", "répond", "Elle", "réponds", "répont"], // Distractors: réponds, répont
                correct_order: ["Elle", "répond", "non"],
                hint: "Stem only."
            },

            // --- Rapid Fire ---
            {
                id: "a1_09_q31",
                type: "choice",
                question: "Je per___",
                options: ["-ds", "-d", "-t"],
                correct: 0,
                hint: "ds."
            },
            {
                id: "a1_09_q32",
                type: "choice",
                question: "Tu descen___",
                options: ["-ds", "-d", "-dez"],
                correct: 0,
                hint: "ds."
            },
            {
                id: "a1_09_q33",
                type: "choice",
                question: "Il enten___",
                options: ["-d", "-ds", "-t"],
                correct: 0,
                hint: "d (nothing added to stem)."
            },
            {
                id: "a1_09_q34",
                type: "choice",
                question: "Nous ven___",
                options: ["-dons", "-dez", "-dent"],
                correct: 0,
                hint: "dons."
            },
            {
                id: "a1_09_q35",
                type: "choice",
                question: "Vous atten___",
                options: ["-dez", "-dezz", "-dous"],
                correct: 0,
                hint: "dez."
            },
            {
                id: "a1_09_q36",
                type: "choice",
                question: "Elles répon___",
                options: ["-dent", "-don", "-dez"],
                correct: 0,
                hint: "dent."
            },

            // --- Distinguishing from Irregulars ---
            {
                id: "a1_09_q37",
                type: "choice",
                question: "Which one is regular? (Standard -RE)",
                options: ["Vendre", "Prendre", "Boire"],
                correct: 0,
                hint: "Prendre and Boire have irregular stems."
            },
            {
                id: "a1_09_q38",
                type: "choice",
                question: "Conjugate 'Prendre' (Irregular): Nous ___.",
                options: ["prenons", "prendons"],
                correct: 0,
                hint: "Prendre drops the 'd' in plural. Vendre keeps it."
            },
            {
                id: "a1_09_q39",
                type: "choice",
                question: "Conjugate 'Vendre' (Regular): Nous ___.",
                options: ["vendons", "venons"],
                correct: 0,
                hint: "Vendre keeps the 'd'."
            },

            // --- Context & Vocabulary ---
            {
                id: "a1_09_q40",
                type: "choice",
                question: "Il ___ (mordre - bite) la pomme.",
                options: ["mord", "mords"],
                correct: 0,
                hint: "Mordre is regular. Il form."
            },
            {
                id: "a1_09_q41",
                type: "choice",
                question: "Je ___ (défendre - defend).",
                options: ["défends", "défend"],
                correct: 0,
                hint: "Je form."
            },
            {
                id: "a1_09_q42",
                type: "choice",
                question: "Tu ___ (perdre) le nord.",
                options: ["perds", "perd"],
                correct: 0,
                hint: "Expression: To get lost/confused."
            },
            {
                id: "a1_09_q43",
                type: "choice",
                question: "On ___ (attendre) le train.",
                options: ["attend", "attends"],
                correct: 0,
                hint: "On = Il."
            },
            {
                id: "a1_09_q44",
                type: "input",
                question: "Elles ___ (vendre) des gâteaux.",
                answer: "vendent",
                hint: "Plural."
            },
            {
                id: "a1_09_q45",
                type: "sort",
                question: "Build: 'I do not lose.'",
                blocks: ["perds", "pas", "ne", "Je", "perd", "la"], // Distractors: perd, la
                correct_order: ["Je", "ne", "perds", "pas"],
                hint: "Negation sandwich."
            },
            {
                id: "a1_09_q46",
                type: "choice",
                question: "Qui ___ (répondre) ?",
                options: ["répond", "réponds"],
                correct: 0,
                hint: "Qui acts as singular subject."
            },
            {
                id: "a1_09_q47",
                type: "choice",
                question: "Ça ___ (dépendre - depend).",
                options: ["dépend", "dépends"],
                correct: 0,
                hint: "Meaning 'It depends'."
            },
            {
                id: "a1_09_q48",
                type: "choice",
                question: "Tu ___ (fondre - melt) au soleil.",
                options: ["fonds", "fond"],
                correct: 0,
                hint: "Tu form."
            },
            {
                id: "a1_09_q49",
                type: "choice",
                question: "La glace ___ (fondre).",
                options: ["fond", "fonds"],
                correct: 0,
                hint: "La glace = Elle."
            },
            {
                id: "a1_09_q50",
                type: "choice",
                question: "Final Check: 'She waits.'",
                options: ["Elle attend", "Elle attends", "Elle attent"],
                correct: 0,
                hint: "No ending!"
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
                summary: "Adjectives describe nouns (big, red, happy). In French, they must match the noun's **Gender** (M/F) and **Number** (Singular/Plural).",
                key_rule: "🔥 **The Agreement Rule:**\n* Feminine: Add **-e** (Petit -> Petite)\n* Plural: Add **-s** (Petit -> Petits)\n* Fem Plural: Add **-es** (Petites)"
            },
            explanation: [
                {
                    type: "text",
                    content: "Most adjectives go **AFTER** the noun (*une voiture rouge*). However, a small group of common adjectives go **BEFORE** the noun. Remember **BAGS**:\n* **B**eauty (Beau, Joli)\n* **A**ge (Jeune, Vieux, Nouveau)\n* **G**oodness (Bon, Mauvais)\n* **S**ize (Petit, Grand, Gros)"
                },
                {
                    type: "table",
                    headers: ["Masculine", "Feminine (+e)", "Masc Plural (+s)", "Fem Plural (+es)"],
                    rows: [
                        ["Grand (Tall)", "Grande", "Grands", "Grandes"],
                        ["Joli (Pretty)", "Jolie", "Jolis", "Jolies"],
                        ["Français", "Française", "Français (no change)", "Françaises"],
                        ["Heureux", "Heureuse (x->se)", "Heureux (no change)", "Heureuses"]
                    ]
                },
                {
                    type: "warning",
                    title: "⚠️ Silent Letters",
                    content: "In masculine forms like *Grand* or *Petit*, the final consonant is usually silent. In feminine forms (*Grande*, *Petite*), the 'e' makes you pronounce that consonant!"
                }
            ]
        },
        practice: [
            // --- Basic Agreement: Feminine (+e) ---
            {
                id: "a1_10_q01",
                type: "choice",
                question: "Une pomme ___ (green).",
                options: ["verte", "vert"],
                correct: 0,
                hint: "Pomme is feminine -> add 'e'."
            },
            {
                id: "a1_10_q02",
                type: "choice",
                question: "La fille est ___ (intelligent).",
                options: ["intelligente", "intelligent"],
                correct: 0,
                hint: "Feminine subject."
            },
            {
                id: "a1_10_q03",
                type: "choice",
                question: "Une maison ___ (blue).",
                options: ["bleue", "bleu"],
                correct: 0,
                hint: "Maison is feminine."
            },
            {
                id: "a1_10_q04",
                type: "input",
                question: "Elle est ___ (tall).",
                answer: "grande",
                hint: "Grand + e."
            },
            {
                id: "a1_10_q05",
                type: "choice",
                question: "Ma mère est ___ (content).",
                options: ["contente", "content"],
                correct: 0,
                hint: "Mother is female."
            },

            // --- Basic Agreement: Plural (+s) ---
            {
                id: "a1_10_q06",
                type: "choice",
                question: "Des chats ___ (black).",
                options: ["noirs", "noir"],
                correct: 0,
                hint: "Plural -> add 's'."
            },
            {
                id: "a1_10_q07",
                type: "choice",
                question: "Ils sont ___ (strong).",
                options: ["forts", "fort"],
                correct: 0,
                hint: "Ils = Plural."
            },
            {
                id: "a1_10_q08",
                type: "choice",
                question: "Les livres sont ___ (interesting).",
                options: ["intéressants", "intéressant"],
                correct: 0,
                hint: "Livres is plural."
            },
            {
                id: "a1_10_q09",
                type: "choice",
                question: "Des stylos ___ (blue).",
                options: ["bleus", "bleu"],
                correct: 0,
                hint: "Plural."
            },
            {
                id: "a1_10_q10",
                type: "input",
                question: "Ils sont ___ (small).",
                answer: "petits",
                hint: "Petit + s."
            },

            // --- Feminine Plural (+es) ---
            {
                id: "a1_10_q11",
                type: "choice",
                question: "Les voitures sont ___ (red).",
                options: ["rouges", "rouge"],
                correct: 0,
                hint: "Voiture is Fem Plural. Rouge ends in 'e' already, so just add 's'."
            },
            {
                id: "a1_10_q12",
                type: "choice",
                question: "Des filles ___ (blonde).",
                options: ["blondes", "blonds"],
                correct: 0,
                hint: "Fem Plural -> es."
            },
            {
                id: "a1_10_q13",
                type: "choice",
                question: "Elles sont ___ (happy).",
                options: ["contentes", "contents"],
                correct: 0,
                hint: "Fem Plural."
            },
            {
                id: "a1_10_q14",
                type: "choice",
                question: "Les tables sont ___ (round).",
                options: ["rondes", "ronds"],
                correct: 0,
                hint: "Table is feminine."
            },
            {
                id: "a1_10_q15",
                type: "input",
                question: "Elles sont ___ (jolie).",
                answer: "jolies",
                hint: "Fem Plural."
            },

            // --- Adjective Placement (Before vs After) ---
            {
                id: "a1_10_q16",
                type: "sort",
                question: "Build: 'A red car.' (Standard)",
                blocks: ["rouge", "voiture", "Une", "rouges"], // Distractors: rouges
                correct_order: ["Une", "voiture", "rouge"],
                hint: "Color goes AFTER."
            },
            {
                id: "a1_10_q17",
                type: "sort",
                question: "Build: 'A small boy.' (BAGS)",
                blocks: ["petit", "garçon", "Un", "petite"], // Distractors: petite
                correct_order: ["Un", "petit", "garçon"],
                hint: "Size goes BEFORE."
            },
            {
                id: "a1_10_q18",
                type: "sort",
                question: "Build: 'A good friend.' (BAGS)",
                blocks: ["bon", "ami", "Un", "bons"], // Distractors: bons
                correct_order: ["Un", "bon", "ami"],
                hint: "Goodness goes BEFORE."
            },
            {
                id: "a1_10_q19",
                type: "sort",
                question: "Build: 'An Italian pizza.'",
                blocks: ["italienne", "pizza", "Une", "italien"], // Distractors: italien
                correct_order: ["Une", "pizza", "italienne"],
                hint: "Nationality goes AFTER."
            },
            {
                id: "a1_10_q20",
                type: "sort",
                question: "Build: 'A beautiful house.' (BAGS)",
                blocks: ["belle", "maison", "Une", "beau"], // Distractors: beau
                correct_order: ["Une", "belle", "maison"],
                hint: "Beauty goes BEFORE."
            },

            // --- Irregular Adjectives (Beau/Nouveau/Vieux) ---
            {
                id: "a1_10_q21",
                type: "choice",
                question: "Un ___ (beautiful) homme.",
                options: ["bel", "beau", "belle"],
                correct: 0,
                hint: "Before a vowel, 'Beau' becomes 'Bel'."
            },
            {
                id: "a1_10_q22",
                type: "choice",
                question: "Un ___ (old) ami.",
                options: ["vieil", "vieux", "vieille"],
                correct: 0,
                hint: "Before a vowel, 'Vieux' becomes 'Vieil'."
            },
            {
                id: "a1_10_q23",
                type: "choice",
                question: "Un ___ (new) hôtel.",
                options: ["nouvel", "nouveau", "nouvelle"],
                correct: 0,
                hint: "Before a vowel/h, 'Nouveau' becomes 'Nouvel'."
            },
            {
                id: "a1_10_q24",
                type: "choice",
                question: "Une ___ (beautiful) fille.",
                options: ["belle", "beau", "bel"],
                correct: 0,
                hint: "Feminine form."
            },
            {
                id: "a1_10_q25",
                type: "choice",
                question: "Un ___ (beautiful) chien.",
                options: ["beau", "bel", "belle"],
                correct: 0,
                hint: "Consonant start -> Beau."
            },

            // --- Nationalities (Capitalization Rule) ---
            {
                id: "a1_10_q26",
                type: "choice",
                question: "Il est ___ (American).",
                options: ["américain", "Américain"],
                correct: 0,
                hint: "Adjectives are NOT capitalized in French."
            },
            {
                id: "a1_10_q27",
                type: "choice",
                question: "Elle est ___ (French).",
                options: ["française", "Française"],
                correct: 0,
                hint: "Lowercase for adjectives."
            },
            {
                id: "a1_10_q28",
                type: "input",
                question: "Elle est ___ (Spanish).",
                answer: "espagnole",
                hint: "Espagnol + e."
            },
            {
                id: "a1_10_q29",
                type: "choice",
                question: "Ils sont ___ (English).",
                options: ["anglais", "anglaises"],
                correct: 0,
                hint: "Masc Plural. (Ends in s, stays s)."
            },
            {
                id: "a1_10_q30",
                type: "choice",
                question: "Elles sont ___ (Chinese).",
                options: ["chinoises", "chinois"],
                correct: 0,
                hint: "Fem Plural."
            },

            // --- Ending Changes (f->ve, x->se, er->ère) ---
            {
                id: "a1_10_q31",
                type: "choice",
                question: "Il est actif. Elle est ___.",
                options: ["active", "actif", "actife"],
                correct: 0,
                hint: "-f becomes -ve."
            },
            {
                id: "a1_10_q32",
                type: "choice",
                question: "Il est heureux. Elle est ___.",
                options: ["heureuse", "heureux", "heureuxe"],
                correct: 0,
                hint: "-x becomes -se."
            },
            {
                id: "a1_10_q33",
                type: "choice",
                question: "Il est premier. Elle est ___.",
                options: ["première", "premier", "premiere"],
                correct: 0,
                hint: "-er becomes -ère."
            },
            {
                id: "a1_10_q34",
                type: "choice",
                question: "Il est cher. Elle est ___.",
                options: ["chère", "cher", "chere"],
                correct: 0,
                hint: "Accent grave."
            },
            {
                id: "a1_10_q35",
                type: "choice",
                question: "Il est sportif. Elle est ___.",
                options: ["sportive", "sportife"],
                correct: 0,
                hint: "-ve."
            },

            // --- "Invariable" Colors (Orange/Marron) ---
            {
                id: "a1_10_q36",
                type: "choice",
                question: "Des chaussures ___ (brown).",
                options: ["marron", "marrons", "marrones"],
                correct: 0,
                hint: "Marron comes from a noun (chestnut) and NEVER changes!"
            },
            {
                id: "a1_10_q37",
                type: "choice",
                question: "Des fleurs ___ (orange).",
                options: ["orange", "oranges"],
                correct: 0,
                hint: "Orange (fruit) never changes."
            },
            {
                id: "a1_10_q38",
                type: "choice",
                question: "Des pantalons ___ (blue).",
                options: ["bleus", "bleu"],
                correct: 0,
                hint: "Bleu is a normal adjective -> add s."
            },

            // --- Sentence Sorting with Distractors ---
            {
                id: "a1_10_q39",
                type: "sort",
                question: "Build: 'The big black dog.'",
                blocks: ["grand", "chien", "noir", "Le", "grande", "noire"], // Distractors: grande, noire
                correct_order: ["Le", "grand", "chien", "noir"],
                hint: "Size before, color after."
            },
            {
                id: "a1_10_q40",
                type: "sort",
                question: "Build: 'A young French girl.'",
                blocks: ["jeune", "fille", "française", "Une", "français", "vieux"], // Distractors: français, vieux
                correct_order: ["Une", "jeune", "fille", "française"],
                hint: "Age before, nationality after."
            },

            // --- Mixed Review ---
            {
                id: "a1_10_q41",
                type: "choice",
                question: "C'est une ___ (good) idée.",
                options: ["bonne", "bon"],
                correct: 0,
                hint: "Bon doubles the N in feminine -> Bonne."
            },
            {
                id: "a1_10_q42",
                type: "choice",
                question: "Il est ___ (gentle/nice).",
                options: ["gentil", "gentille"],
                correct: 0,
                hint: "Masc form."
            },
            {
                id: "a1_10_q43",
                type: "choice",
                question: "Elle est ___ (gentle/nice).",
                options: ["gentille", "gentile"],
                correct: 0,
                hint: "Doubles the L -> Gentille."
            },
            {
                id: "a1_10_q44",
                type: "choice",
                question: "Ils sont ___ (fat/big).",
                options: ["gros", "grosse"],
                correct: 0,
                hint: "Gros (singular) stays Gros (plural) because it ends in S."
            },
            {
                id: "a1_10_q45",
                type: "choice",
                question: "Ce sont des exercices ___ (difficult).",
                options: ["difficiles", "difficile"],
                correct: 0,
                hint: "Add s."
            },
            {
                id: "a1_10_q46",
                type: "input",
                question: "La soupe est ___ (hot - chaud).",
                answer: "chaude",
                hint: "Feminine."
            },
            {
                id: "a1_10_q47",
                type: "input",
                question: "Le café est ___ (cold - froid).",
                answer: "froid",
                hint: "Masculine."
            },
            {
                id: "a1_10_q48",
                type: "choice",
                question: "C'est un ___ (bad) film.",
                options: ["mauvais", "mauvaise"],
                correct: 0,
                hint: "Goodness goes before."
            },
            {
                id: "a1_10_q49",
                type: "choice",
                question: "Il est ___ (sad).",
                options: ["triste", "tristes"],
                correct: 0,
                hint: "Singular."
            },
            {
                id: "a1_10_q50",
                type: "choice",
                question: "Elle est ___ (funny - drôle).",
                options: ["drôle", "drôles"],
                correct: 0,
                hint: "Drôle ends in e, so it works for M and F."
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
                summary: "How to say 'to', 'in', or 'at' depends entirely on **what follows**: a City, a Country, or a Person.",
                key_rule: "🔥 **The Map Rule:**\n* **Cities** = À (à Paris)\n* **Countries (Fem)** = En (en France)\n* **Countries (Masc)** = Au (au Canada)\n* **People** = Chez (chez moi)"
            },
            explanation: [
                {
                    type: "text",
                    content: "French prepositions change based on the destination. Memorize this table:"
                },
                {
                    type: "table",
                    headers: ["Destination Type", "Preposition", "Example"],
                    rows: [
                        ["City (Any)", "À", "Je vais **à** Berlin."],
                        ["Country (Feminine - ends in 'e')", "En", "Je suis **en** Espagne."],
                        ["Country (Masculine - no 'e')", "Au", "Je suis **au** Japon."],
                        ["Country (Plural)", "Aux", "Je vais **aux** États-Unis."],
                        ["Person / Home / Pro", "Chez", "Je dors **chez** Paul."]
                    ]
                },
                {
                    type: "warning",
                    title: "⚠️ Physical Location (Dans)",
                    content: "To say you are physically **inside** a building, room, or enclosed space, use **Dans**.\n* *Je suis **à** l'école* (General location: I am at school).\n* *Je suis **dans** la classe* (Physical location: I am inside the classroom)."
                },
                {
                    type: "text",
                    content: "**Tip:** Almost all countries ending in **-e** are feminine (La France, L'Italie, La Chine). The exceptions are rare (Le Mexique, Le Cambodge) - these take 'Au'."
                }
            ]
        },
        practice: [
            // --- CITIES (À) ---
            {
                id: "a1_11_q01",
                type: "choice",
                question: "Je vais ___ Paris.",
                options: ["à", "en", "au"],
                correct: 0,
                hint: "Paris is a city."
            },
            {
                id: "a1_11_q02",
                type: "choice",
                question: "Il habite ___ Londres.",
                options: ["en", "à", "au"],
                correct: 1,
                hint: "Londres (London) is a city."
            },
            {
                id: "a1_11_q03",
                type: "choice",
                question: "Nous sommes ___ New York.",
                options: ["au", "en", "à"],
                correct: 2,
                hint: "City."
            },
            {
                id: "a1_11_q04",
                type: "input",
                question: "Tu vas ___ (to) Tokyo ?",
                answer: "à",
                hint: "City."
            },
            {
                id: "a1_11_q05",
                type: "choice",
                question: "Elles vont ___ Madrid.",
                options: ["à", "en", "dans"],
                correct: 0,
                hint: "Madrid is a city."
            },

            // --- FEMININE COUNTRIES (En) ---
            {
                id: "a1_11_q06",
                type: "choice",
                question: "Je vais ___ France.",
                options: ["au", "en", "à"],
                correct: 1,
                hint: "France ends in -e (Feminine)."
            },
            {
                id: "a1_11_q07",
                type: "choice",
                question: "Il habite ___ Italie.",
                options: ["en", "au", "aux"],
                correct: 0,
                hint: "Italie ends in -e."
            },
            {
                id: "a1_11_q08",
                type: "choice",
                question: "Nous voyageons ___ Espagne.",
                options: ["à", "en", "au"],
                correct: 1,
                hint: "Espagne ends in -e."
            },
            {
                id: "a1_11_q09",
                type: "input",
                question: "Elle est ___ (in) Chine.",
                answer: "en",
                hint: "Chine ends in -e."
            },
            {
                id: "a1_11_q10",
                type: "choice",
                question: "On va ___ Allemagne.",
                options: ["en", "au", "à"],
                correct: 0,
                hint: "Allemagne ends in -e."
            },

            // --- MASCULINE COUNTRIES (Au) ---
            {
                id: "a1_11_q11",
                type: "choice",
                question: "Je vais ___ Canada.",
                options: ["en", "au", "à"],
                correct: 1,
                hint: "Canada does not end in -e (Masculine)."
            },
            {
                id: "a1_11_q12",
                type: "choice",
                question: "Il vit ___ Japon.",
                options: ["au", "en", "aux"],
                correct: 0,
                hint: "Japon is masculine."
            },
            {
                id: "a1_11_q13",
                type: "choice",
                question: "Tu vas ___ Brésil ?",
                options: ["à", "en", "au"],
                correct: 2,
                hint: "Brésil is masculine."
            },
            {
                id: "a1_11_q14",
                type: "input",
                question: "Nous sommes ___ (in) Portugal.",
                answer: "au",
                hint: "Portugal is masculine."
            },
            {
                id: "a1_11_q15",
                type: "choice",
                question: "Ils vont ___ Maroc.",
                options: ["au", "en", "à"],
                correct: 0,
                hint: "Maroc is masculine."
            },

            // --- PLURAL COUNTRIES (Aux) ---
            {
                id: "a1_11_q16",
                type: "choice",
                question: "Je vais ___ États-Unis (USA).",
                options: ["aux", "en", "au"],
                correct: 0,
                hint: "Plural country."
            },
            {
                id: "a1_11_q17",
                type: "choice",
                question: "Il habite ___ Pays-Bas (Netherlands).",
                options: ["au", "aux", "en"],
                correct: 1,
                hint: "Plural."
            },

            // --- CHEZ (People/Home) ---
            {
                id: "a1_11_q18",
                type: "choice",
                question: "Je vais ___ Thomas.",
                options: ["à", "chez", "en"],
                correct: 1,
                hint: "Thomas is a person."
            },
            {
                id: "a1_11_q19",
                type: "choice",
                question: "Il rentre ___ lui (home).",
                options: ["chez", "à", "dans"],
                correct: 0,
                hint: "To his place."
            },
            {
                id: "a1_11_q20",
                type: "choice",
                question: "On va ___ le médecin (doctor).",
                options: ["au", "chez", "à"],
                correct: 1,
                hint: "The doctor is a person."
            },
            {
                id: "a1_11_q21",
                type: "input",
                question: "Tu viens ___ (at/to) moi ?",
                answer: "chez",
                hint: "My place."
            },
            {
                id: "a1_11_q22",
                type: "choice",
                question: "Je suis ___ le coiffeur (hairdresser).",
                options: ["chez", "au", "à"],
                correct: 0,
                hint: "A professional person."
            },

            // --- DANS (Inside) ---
            {
                id: "a1_11_q23",
                type: "choice",
                question: "Le chat est ___ la boîte.",
                options: ["dans", "à", "en"],
                correct: 0,
                hint: "Physically inside."
            },
            {
                id: "a1_11_q24",
                type: "choice",
                question: "Je suis ___ ma chambre.",
                options: ["dans", "à", "au"],
                correct: 0,
                hint: "Inside a room."
            },
            {
                id: "a1_11_q25",
                type: "choice",
                question: "Les clés sont ___ le sac.",
                options: ["en", "dans", "chez"],
                correct: 1,
                hint: "Inside the bag."
            },

            // --- MIXED DISCRIMINATION (City vs Country) ---
            {
                id: "a1_11_q26",
                type: "choice",
                question: "Je vais ___ Paris, ___ France.",
                options: ["à / en", "en / à", "à / au"],
                correct: 0,
                hint: "City / Fem Country."
            },
            {
                id: "a1_11_q27",
                type: "choice",
                question: "Il est ___ Tokyo, ___ Japon.",
                options: ["à / en", "à / au", "en / au"],
                correct: 1,
                hint: "City / Masc Country."
            },
            {
                id: "a1_11_q28",
                type: "choice",
                question: "Tu vas ___ Londres, ___ Angleterre.",
                options: ["à / en", "à / au"],
                correct: 0,
                hint: "Angleterre starts with vowel (treated as Fem/En)."
            },

            // --- MIXED DISCRIMINATION (À vs Chez vs Au) ---
            {
                id: "a1_11_q29",
                type: "choice",
                question: "Je vais ___ la banque.",
                options: ["à", "chez", "en"],
                correct: 0,
                hint: "Banque is a place (building), not a person."
            },
            {
                id: "a1_11_q30",
                type: "choice",
                question: "Je vais ___ le boulanger (baker).",
                options: ["à", "chez", "au"],
                correct: 1,
                hint: "The baker is a person."
            },
            {
                id: "a1_11_q31",
                type: "choice",
                question: "Je vais ___ la boulangerie (bakery).",
                options: ["à", "chez"],
                correct: 0,
                hint: "The bakery is a building."
            },
            {
                id: "a1_11_q32",
                type: "choice",
                question: "Il va ___ supermarché.",
                options: ["au", "chez", "en"],
                correct: 0,
                hint: "À + Le = Au."
            },
            {
                id: "a1_11_q33",
                type: "choice",
                question: "Elle est ___ école.",
                options: ["à l'", "en", "chez"],
                correct: 0,
                hint: "General location + Vowel."
            },

            // --- SORTING (Structure) ---
            {
                id: "a1_11_q34",
                type: "sort",
                question: "Build: 'I go to France.'",
                blocks: ["France", "en", "vais", "Je", "à", "au"], // Distractors: à, au
                correct_order: ["Je", "vais", "en", "France"],
                hint: "Feminine Country."
            },
            {
                id: "a1_11_q35",
                type: "sort",
                question: "Build: 'He is at Pierre's place.'",
                blocks: ["chez", "Pierre", "est", "Il", "à", "dans"], // Distractors: à, dans
                correct_order: ["Il", "est", "chez", "Pierre"],
                hint: "Pierre is a person."
            },
            {
                id: "a1_11_q36",
                type: "sort",
                question: "Build: 'We live in Canada.'",
                blocks: ["Canada", "au", "habitons", "Nous", "en", "le"], // Distractors: en, le
                correct_order: ["Nous", "habitons", "au", "Canada"],
                hint: "Masculine country."
            },
            {
                id: "a1_11_q37",
                type: "sort",
                question: "Build: 'The cat is in the garden.'",
                blocks: ["jardin", "dans", "est", "chat", "Le", "le", "en"], // Distractors: en
                correct_order: ["Le", "chat", "est", "dans", "le", "jardin"],
                hint: "Inside a specific place."
            },

            // --- RAPID FIRE & TRICKY ONES ---
            {
                id: "a1_11_q38",
                type: "choice",
                question: "___ Sénégal",
                options: ["Au", "En"],
                correct: 0,
                hint: "Masculine (No 'e')."
            },
            {
                id: "a1_11_q39",
                type: "choice",
                question: "___ Belgique",
                options: ["En", "Au"],
                correct: 0,
                hint: "Feminine (Ends in 'e')."
            },
            {
                id: "a1_11_q40",
                type: "choice",
                question: "___ Suisse",
                options: ["En", "Au"],
                correct: 0,
                hint: "Feminine (Ends in 'e')."
            },
            {
                id: "a1_11_q41",
                type: "choice",
                question: "___ Lisbonne (City)",
                options: ["À", "En"],
                correct: 0,
                hint: "City always À."
            },
            {
                id: "a1_11_q42",
                type: "choice",
                question: "___ Europe",
                options: ["En", "Au"],
                correct: 0,
                hint: "Continents starting with vowels are En."
            },
            {
                id: "a1_11_q43",
                type: "choice",
                question: "___ cinéma",
                options: ["Au", "En"],
                correct: 0,
                hint: "À + Le = Au."
            },
            {
                id: "a1_11_q44",
                type: "choice",
                question: "___ toilettes",
                options: ["Aux", "En", "Au"],
                correct: 0,
                hint: "Plural place."
            },
            {
                id: "a1_11_q45",
                type: "choice",
                question: "Je reste ___ la maison.",
                options: ["à", "chez", "en"],
                correct: 0,
                hint: "Idiom: À la maison (At home)."
            },
            {
                id: "a1_11_q46",
                type: "choice",
                question: "Je suis ___ moi (at my place).",
                options: ["chez", "à"],
                correct: 0,
                hint: "Pronoun = Person."
            },
            
            // --- EXCEPTION PREVIEW (Le Mexique) ---
            {
                id: "a1_11_q47",
                type: "choice",
                question: "Exception: Je vais ___ Mexique.",
                options: ["au", "en"],
                correct: 0,
                hint: "Mexique ends in 'e' but is MASCULINE."
            },
            
            // --- FINAL CHALLENGE ---
            {
                id: "a1_11_q48",
                type: "sort",
                question: "Build: 'I am at the hotel.'",
                blocks: ["hôtel", "l'", "à", "suis", "Je", "dans"], // Distractors: dans
                correct_order: ["Je", "suis", "à", "l'", "hôtel"],
                hint: "General location."
            },
            {
                id: "a1_11_q49",
                type: "choice",
                question: "Je travaille ___ bureau (office).",
                options: ["au", "en"],
                correct: 0,
                hint: "Masculine place."
            },
            {
                id: "a1_11_q50",
                type: "input",
                question: "Il va ___ (in) Australie.",
                answer: "en",
                hint: "Ends in e."
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
                summary: "In English, you can say 'I eat bread'. In French, you must say 'I eat **some** bread' (Je mange **du** pain). You almost never use a noun without an article.",
                key_rule: "🔥 **The Quantity Rule:**\n* **Du** (Masc) = Some\n* **De la** (Fem) = Some\n* **Des** (Plural) = Some\n* **De** (Negative) = Not any"
            },
            explanation: [
                {
                    type: "text",
                    content: "Use the Partitive when you are talking about an undefined quantity of something (usually food, drink, or abstract concepts like courage)."
                },
                {
                    type: "table",
                    headers: ["Gender/Number", "Article", "Example"],
                    rows: [
                        ["Masculine", "Du (de + le)", "Je veux **du** fromage."],
                        ["Feminine", "De la", "Je veux **de la** soupe."],
                        ["Vowel / H", "De l'", "Je bois **de l'**eau."],
                        ["Plural", "Des", "Je mange **des** pâtes."]
                    ]
                },
                {
                    type: "warning",
                    title: "⚠️ The Preference Trap",
                    content: "Verbs of preference (**Aimer, Adorer, Détester, Préférer**) ALWAYS take the Definite Article (**Le, La, Les**), not the Partitive.\n* *J'aime **le** café.* (I like coffee in general).\n* *Je bois **du** café.* (I am drinking some coffee right now)."
                },
                {
                    type: "warning",
                    title: "⚠️ The Negative Rule",
                    content: "After a negation (*ne...pas*), Du/De la/Des ALL change to **DE** (or d').\n* *J'ai du pain.* -> *Je n'ai pas **de** pain.*"
                }
            ]
        },
        practice: [
            // --- Masculine (Du) ---
            {
                id: "a1_12_q01",
                type: "choice",
                question: "Je mange ___ pain.",
                options: ["du", "de la", "des"],
                correct: 0,
                hint: "Pain is masculine."
            },
            {
                id: "a1_12_q02",
                type: "choice",
                question: "Il boit ___ thé.",
                options: ["du", "de la", "de l'"],
                correct: 0,
                hint: "Thé is masculine."
            },
            {
                id: "a1_12_q03",
                type: "choice",
                question: "Tu veux ___ sucre ?",
                options: ["du", "de la", "des"],
                correct: 0,
                hint: "Sucre is masculine."
            },
            {
                id: "a1_12_q04",
                type: "choice",
                question: "Elle achète ___ poisson.",
                options: ["du", "de la", "le"],
                correct: 0,
                hint: "Poisson is masculine."
            },
            {
                id: "a1_12_q05",
                type: "choice",
                question: "Nous avons ___ courage.",
                options: ["du", "de la", "des"],
                correct: 0,
                hint: "Abstract noun (Masc)."
            },

            // --- Feminine (De la) ---
            {
                id: "a1_12_q06",
                type: "choice",
                question: "Je mange ___ salade.",
                options: ["de la", "du", "le"],
                correct: 0,
                hint: "Salade is feminine."
            },
            {
                id: "a1_12_q07",
                type: "choice",
                question: "Il y a ___ glace.",
                options: ["de la", "du", "des"],
                correct: 0,
                hint: "Glace is feminine."
            },
            {
                id: "a1_12_q08",
                type: "choice",
                question: "Tu veux ___ soupe ?",
                options: ["de la", "du", "la"],
                correct: 0,
                hint: "Soupe is feminine."
            },
            {
                id: "a1_12_q09",
                type: "choice",
                question: "Je mets ___ farine (flour).",
                options: ["de la", "du", "de"],
                correct: 0,
                hint: "Farine is feminine."
            },
            {
                id: "a1_12_q10",
                type: "choice",
                question: "Elle a ___ patience.",
                options: ["de la", "du", "des"],
                correct: 0,
                hint: "Abstract noun (Fem)."
            },

            // --- Vowel / H (De l') ---
            {
                id: "a1_12_q11",
                type: "choice",
                question: "Je bois ___ eau.",
                options: ["de l'", "du", "de la"],
                correct: 0,
                hint: "Eau starts with vowel."
            },
            {
                id: "a1_12_q12",
                type: "choice",
                question: "Il faut ___ argent.",
                options: ["de l'", "du", "des"],
                correct: 0,
                hint: "Argent starts with vowel."
            },
            {
                id: "a1_12_q13",
                type: "choice",
                question: "Tu mets ___ huile.",
                options: ["de l'", "du", "de la"],
                correct: 0,
                hint: "Huile starts with silent H."
            },
            {
                id: "a1_12_q14",
                type: "choice",
                question: "Elle achète ___ ail (garlic).",
                options: ["de l'", "du", "de la"],
                correct: 0,
                hint: "Starts with vowel."
            },
            {
                id: "a1_12_q15",
                type: "choice",
                question: "Nous avons ___ amour.",
                options: ["de l'", "du", "de la"],
                correct: 0,
                hint: "Starts with vowel."
            },

            // --- Plural (Des) ---
            {
                id: "a1_12_q16",
                type: "choice",
                question: "Je mange ___ pâtes (pasta).",
                options: ["des", "de la", "du"],
                correct: 0,
                hint: "Pâtes is plural."
            },
            {
                id: "a1_12_q17",
                type: "choice",
                question: "Il achète ___ pommes.",
                options: ["des", "de la", "du"],
                correct: 0,
                hint: "Pommes is plural."
            },
            {
                id: "a1_12_q18",
                type: "choice",
                question: "Tu veux ___ frites ?",
                options: ["des", "de la", "du"],
                correct: 0,
                hint: "Frites is plural."
            },
            {
                id: "a1_12_q19",
                type: "choice",
                question: "Il y a ___ gens (people).",
                options: ["des", "de la", "du"],
                correct: 0,
                hint: "Gens is plural."
            },
            {
                id: "a1_12_q20",
                type: "choice",
                question: "Je prends ___ céréales.",
                options: ["des", "de la", "du"],
                correct: 0,
                hint: "Plural."
            },

            // --- The "Pas de" Rule (Negation) ---
            {
                id: "a1_12_q21",
                type: "choice",
                question: "Je n'ai pas ___ chien.",
                options: ["de", "un", "du"],
                correct: 0,
                hint: "Negative sentence."
            },
            {
                id: "a1_12_q22",
                type: "choice",
                question: "Il ne mange pas ___ viande.",
                options: ["de", "de la", "la"],
                correct: 0,
                hint: "Negative + Partitive."
            },
            {
                id: "a1_12_q23",
                type: "choice",
                question: "Nous ne buvons pas ___ café.",
                options: ["de", "du", "le"],
                correct: 0,
                hint: "Negative."
            },
            {
                id: "a1_12_q24",
                type: "choice",
                question: "Tu n'as pas ___ chance.",
                options: ["de", "de la", "la"],
                correct: 0,
                hint: "Negative."
            },
            {
                id: "a1_12_q25",
                type: "choice",
                question: "Ils ne veulent pas ___ frites.",
                options: ["de", "des", "les"],
                correct: 0,
                hint: "Negative (even for plural nouns)."
            },
            {
                id: "a1_12_q26",
                type: "choice",
                question: "Je ne veux pas ___ eau.",
                options: ["d'", "de", "de l'"],
                correct: 0,
                hint: "De becomes d' before a vowel."
            },

            // --- Aimer vs Manger (The Trap) ---
            {
                id: "a1_12_q27",
                type: "choice",
                question: "J'aime ___ chocolat.",
                options: ["le", "du", "de"],
                correct: 0,
                hint: "Aimer (Preference) -> Le."
            },
            {
                id: "a1_12_q28",
                type: "choice",
                question: "Je mange ___ chocolat.",
                options: ["du", "le", "de"],
                correct: 0,
                hint: "Manger (Consuming) -> Du."
            },
            {
                id: "a1_12_q29",
                type: "choice",
                question: "Elle déteste ___ poisson.",
                options: ["le", "du", "de"],
                correct: 0,
                hint: "Détester (Preference) -> Le."
            },
            {
                id: "a1_12_q30",
                type: "choice",
                question: "Tu cuisines ___ poisson.",
                options: ["du", "le", "de"],
                correct: 0,
                hint: "Cuisiner (Activity/Consuming) -> Du."
            },
            {
                id: "a1_12_q31",
                type: "choice",
                question: "Il préfère ___ thé.",
                options: ["le", "du", "de"],
                correct: 0,
                hint: "Préférer (Preference) -> Le."
            },
            {
                id: "a1_12_q32",
                type: "choice",
                question: "Je prends ___ thé.",
                options: ["du", "le", "de"],
                correct: 0,
                hint: "Prendre (Consuming) -> Du."
            },

            // --- Sentence Sorting with Distractors ---
            {
                id: "a1_12_q33",
                type: "sort",
                question: "Build: 'I drink water.'",
                blocks: ["eau", "bois", "de", "l'", "Je", "du"], // Distractors: du
                correct_order: ["Je", "bois", "de", "l'", "eau"],
                hint: "Vowel start."
            },
            {
                id: "a1_12_q34",
                type: "sort",
                question: "Build: 'I do not eat bread.'",
                blocks: ["pain", "pas", "de", "mange", "ne", "Je", "du"], // Distractors: du
                correct_order: ["Je", "ne", "mange", "pas", "de", "pain"],
                hint: "Negative rule applies."
            },
            {
                id: "a1_12_q35",
                type: "sort",
                question: "Build: 'She has courage.'",
                blocks: ["du", "Elle", "courage", "a", "le", "de"], // Distractors: le, de
                correct_order: ["Elle", "a", "du", "courage"],
                hint: "Positive sentence."
            },
            {
                id: "a1_12_q36",
                type: "sort",
                question: "Build: 'We like pizza.' (Preference)",
                blocks: ["pizza", "la", "aimons", "Nous", "de"], // Distractors: de
                correct_order: ["Nous", "aimons", "la", "pizza"],
                hint: "Aimer = Definite Article (La)."
            },

            // --- Mixed Review ---
            {
                id: "a1_12_q37",
                type: "choice",
                question: "Je voudrais ___ bière (f).",
                options: ["de la", "du", "le"],
                correct: 0,
                hint: "Feminine."
            },
            {
                id: "a1_12_q38",
                type: "choice",
                question: "Il n'y a plus ___ bière.",
                options: ["de", "de la", "une"],
                correct: 0,
                hint: "Expression of quantity (none left) -> De."
            },
            {
                id: "a1_12_q39",
                type: "choice",
                question: "Donne-moi ___ beurre (m).",
                options: ["du", "de la", "le"],
                correct: 0,
                hint: "Masculine."
            },
            {
                id: "a1_12_q40",
                type: "choice",
                question: "C'est ___ bon vin.",
                options: ["du", "de la", "le"],
                correct: 0,
                hint: "Undefined quantity of wine."
            },
            {
                id: "a1_12_q41",
                type: "choice",
                question: "J'adore ___ vin rouge.",
                options: ["le", "du", "de"],
                correct: 0,
                hint: "Adorer = Le."
            },
            {
                id: "a1_12_q42",
                type: "input",
                question: "Il boit ___ (some) lait.",
                answer: "du",
                hint: "Lait is masculine."
            },
            {
                id: "a1_12_q43",
                type: "input",
                question: "Elle mange ___ (some) viande.",
                answer: "de la",
                hint: "Viande is feminine."
            },
            {
                id: "a1_12_q44",
                type: "input",
                question: "Je ne bois pas ___ (any) alcool.",
                answer: "d'",
                hint: "Negative + Vowel."
            },
            {
                id: "a1_12_q45",
                type: "choice",
                question: "Tu as ___ chance.",
                options: ["de la", "du"],
                correct: 0,
                hint: "Fem."
            },
            {
                id: "a1_12_q46",
                type: "choice",
                question: "Il fait ___ bruit.",
                options: ["du", "de la"],
                correct: 0,
                hint: "Masc."
            },
            {
                id: "a1_12_q47",
                type: "choice",
                question: "On mange ___ légumes.",
                options: ["des", "les"],
                correct: 0,
                hint: "Plural partitive."
            },
            {
                id: "a1_12_q48",
                type: "choice",
                question: "Les enfants aiment ___ bonbons.",
                options: ["les", "des"],
                correct: 0,
                hint: "General preference -> Les."
            },
            {
                id: "a1_12_q49",
                type: "sort",
                question: "Build: 'Do you want some cake?'",
                blocks: ["gâteau", "du", "Tu", "veux", "?"],
                correct_order: ["Tu", "veux", "du", "gâteau", "?"],
                hint: "Masculine."
            },
            {
                id: "a1_12_q50",
                type: "choice",
                question: "Final Check: 'I don't have time (temps - m).'",
                options: ["Je n'ai pas de temps", "Je n'ai pas du temps"],
                correct: 0,
                hint: "Negative always De."
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
                summary: "Demonstrative Adjectives are words used to point at specific things: 'This', 'That', 'These', or 'Those'. In French, you must choose the word based on the gender and number of the noun.",
                key_rule: "🔥 **The Pointing Rule:**\n* Male: **Ce** (or **Cet** before vowel)\n* Female: **Cette**\n* Plural: **Ces**"
            },
            explanation: [
                {
                    type: "text",
                    content: "Unlike English, French doesn't strictly distinguish between 'This' (close) and 'That' (far) with the adjective alone. *Ce livre* can mean 'This book' OR 'That book'."
                },
                {
                    type: "table",
                    headers: ["Gender/Number", "Word", "Example", "Pronunciation"],
                    rows: [
                        ["Masc (Consonant)", "Ce", "Ce garçon (This boy)", "Seuh"],
                        ["Masc (Vowel / H)", "Cet", "Cet homme (This man)", "Set"],
                        ["Feminine (All)", "Cette", "Cette fille (This girl)", "Set"],
                        ["Plural (All)", "Ces", "Ces amis (These friends)", "Say"]
                    ]
                },
                {
                    type: "warning",
                    title: "⚠️ The 'Cet' Rule",
                    content: "If a **masculine** noun starts with a vowel (a, e, i, o, u) or a silent 'h', you CANNOT use 'Ce'. You must use **Cet** to bridge the sound.\n* *Ce ami* ❌ -> *Cet ami* ✅\n* Note: Feminine nouns do NOT change for vowels (*Cette amie* is correct)."
                },
                {
                    type: "warning",
                    title: "⚠️ Ce vs. C'est",
                    content: "**Ce** is an adjective (goes before a noun: *Ce chat*). **C'est** is a subject+verb (means 'It is': *C'est un chat*). Don't mix them up!"
                },
                {
                    type: "text",
                    content: "**Tip - This vs That:** If you really need to emphasize distance, you can add suffixes to the noun:\n* *Ce livre-**ci*** (This book here)\n* *Ce livre-**là*** (That book there)"
                }
            ]
        },
        practice: [
            // --- Masculine Consonant (Ce) ---
            {
                id: "a1_13_q01",
                type: "choice",
                question: "___ garçon est gentil.",
                options: ["Ce", "Cet", "Cette"],
                correct: 0,
                hint: "Garçon is masculine consonant."
            },
            {
                id: "a1_13_q02",
                type: "choice",
                question: "Je veux ___ livre.",
                options: ["ce", "cet", "cette"],
                correct: 0,
                hint: "Livre is masculine."
            },
            {
                id: "a1_13_q03",
                type: "choice",
                question: "Regarde ___ chien !",
                options: ["ce", "ces", "cette"],
                correct: 0,
                hint: "Chien is masculine singular."
            },
            {
                id: "a1_13_q04",
                type: "input",
                question: "___ (This) matin, je travaille.",
                answer: "ce",
                hint: "Matin is masculine."
            },
            {
                id: "a1_13_q05",
                type: "choice",
                question: "___ stylo est bleu.",
                options: ["Ce", "Cet"],
                correct: 0,
                hint: "Stylo starts with a consonant."
            },

            // --- Feminine (Cette) ---
            {
                id: "a1_13_q06",
                type: "choice",
                question: "___ fille est sympa.",
                options: ["Ce", "Cette", "Ces"],
                correct: 1,
                hint: "Fille is feminine."
            },
            {
                id: "a1_13_q07",
                type: "choice",
                question: "J'aime ___ maison.",
                options: ["ce", "cet", "cette"],
                correct: 2,
                hint: "Maison is feminine."
            },
            {
                id: "a1_13_q08",
                type: "choice",
                question: "___ pomme est rouge.",
                options: ["Cette", "Ce", "Cet"],
                correct: 0,
                hint: "Pomme is feminine."
            },
            {
                id: "a1_13_q09",
                type: "input",
                question: "___ (This) voiture est rapide.",
                answer: "cette",
                hint: "Voiture is feminine."
            },
            {
                id: "a1_13_q10",
                type: "choice",
                question: "___ année (year).",
                options: ["Cette", "Cet"],
                correct: 0,
                hint: "Année is feminine. Even though it starts with a vowel, feminine is always 'Cette'."
            },

            // --- Masculine Vowel / H (Cet) ---
            {
                id: "a1_13_q11",
                type: "choice",
                question: "___ hôtel est grand.",
                options: ["Ce", "Cet", "Cette"],
                correct: 1,
                hint: "Hôtel is Masc, but starts with silent H."
            },
            {
                id: "a1_13_q12",
                type: "choice",
                question: "___ homme (man) est fort.",
                options: ["Ce", "Cet", "Cette"],
                correct: 1,
                hint: "Homme starts with H."
            },
            {
                id: "a1_13_q13",
                type: "choice",
                question: "J'aime ___ ami (male).",
                options: ["ce", "cet", "cette"],
                correct: 1,
                hint: "Ami starts with a vowel."
            },
            {
                id: "a1_13_q14",
                type: "choice",
                question: "___ arbre (tree) est vieux.",
                options: ["Ce", "Cet", "Cette"],
                correct: 1,
                hint: "Arbre is masculine vowel."
            },
            {
                id: "a1_13_q15",
                type: "input",
                question: "___ (This) ordinateur.",
                answer: "cet",
                hint: "Computer (Masc) starts with O."
            },
            {
                id: "a1_13_q16",
                type: "choice",
                question: "___ après-midi (afternoon).",
                options: ["Ce", "Cet"],
                correct: 1,
                hint: "Starts with A."
            },
            {
                id: "a1_13_q17",
                type: "choice",
                question: "___ hiver (winter).",
                options: ["Ce", "Cet"],
                correct: 1,
                hint: "Starts with H."
            },

            // --- Plural (Ces) ---
            {
                id: "a1_13_q18",
                type: "choice",
                question: "___ livres sont chers.",
                options: ["Ces", "Ce", "Cette"],
                correct: 0,
                hint: "Livres is plural."
            },
            {
                id: "a1_13_q19",
                type: "choice",
                question: "Je veux ___ chaussures.",
                options: ["ces", "ce", "cette"],
                correct: 0,
                hint: "Chaussures is plural."
            },
            {
                id: "a1_13_q20",
                type: "input",
                question: "Regarde ___ (these) photos.",
                answer: "ces",
                hint: "Plural."
            },
            {
                id: "a1_13_q21",
                type: "choice",
                question: "___ gens (people) sont bizarres.",
                options: ["Ces", "Ce", "C'est"],
                correct: 0,
                hint: "Gens is plural."
            },
            {
                id: "a1_13_q22",
                type: "choice",
                question: "___ enfants jouent.",
                options: ["Ces", "Cet", "Ce"],
                correct: 0,
                hint: "Plural (starts with vowel, but Ces works for all plurals)."
            },

            // --- Mixed Discrimination & Traps ---
            {
                id: "a1_13_q23",
                type: "choice",
                question: "___ école (school - f).",
                options: ["Cet", "Cette", "Ce"],
                correct: 1,
                hint: "École is feminine. Feminine always uses 'Cette', even with vowels."
            },
            {
                id: "a1_13_q24",
                type: "choice",
                question: "___ étudiant (student - m).",
                options: ["Cet", "Cette", "Ce"],
                correct: 0,
                hint: "Masculine vowel."
            },
            {
                id: "a1_13_q25",
                type: "choice",
                question: "___ étudiante (student - f).",
                options: ["Cet", "Cette", "Ce"],
                correct: 1,
                hint: "Feminine."
            },
            {
                id: "a1_13_q26",
                type: "choice",
                question: "___ amie (friend - f).",
                options: ["Cet", "Cette", "Ce"],
                correct: 1,
                hint: "Feminine. Don't be tricked by the vowel, it's NOT Cet for females."
            },
            {
                id: "a1_13_q27",
                type: "choice",
                question: "___ hôpital (hospital - m).",
                options: ["Ce", "Cet"],
                correct: 1,
                hint: "Masc H."
            },
            {
                id: "a1_13_q28",
                type: "choice",
                question: "___ table.",
                options: ["Ce", "Cette"],
                correct: 1,
                hint: "Fem."
            },
            {
                id: "a1_13_q29",
                type: "choice",
                question: "___ avion (plane - m).",
                options: ["Ce", "Cet"],
                correct: 1,
                hint: "Masc Vowel."
            },
            {
                id: "a1_13_q30",
                type: "choice",
                question: "___ fleurs (flowers).",
                options: ["Ces", "Cette"],
                correct: 0,
                hint: "Plural."
            },

            // --- Ce/Cet/Cette vs C'est (The Trap) ---
            {
                id: "a1_13_q31",
                type: "choice",
                question: "___ un bon film.",
                options: ["C'est", "Ce", "Cet"],
                correct: 0,
                hint: "It is a good film."
            },
            {
                id: "a1_13_q32",
                type: "choice",
                question: "___ film est bon.",
                options: ["C'est", "Ce", "Cet"],
                correct: 1,
                hint: "This film (pointing)."
            },
            {
                id: "a1_13_q33",
                type: "choice",
                question: "___ une belle maison.",
                options: ["Cette", "C'est"],
                correct: 1,
                hint: "It is a beautiful house."
            },
            {
                id: "a1_13_q34",
                type: "choice",
                question: "___ maison est belle.",
                options: ["Cette", "C'est"],
                correct: 0,
                hint: "This house."
            },
            {
                id: "a1_13_q35",
                type: "choice",
                question: "___ mon frère.",
                options: ["Ce", "C'est", "Cet"],
                correct: 1,
                hint: "It is my brother."
            },

            // --- Sentence Sorting with Distractors ---
            {
                id: "a1_13_q36",
                type: "sort",
                question: "Build: 'I like this cake.'",
                blocks: ["gâteau", "aime", "ce", "J'", "cet", "le"], // Distractors: cet, le
                correct_order: ["J'", "aime", "ce", "gâteau"],
                hint: "Gâteau is masculine consonant."
            },
            {
                id: "a1_13_q37",
                type: "sort",
                question: "Build: 'Look at this star.' (étoile - f)",
                blocks: ["cette", "étoile", "Regarde", "cet", "ce"], // Distractors: cet, ce
                correct_order: ["Regarde", "cette", "étoile"],
                hint: "Étoile is feminine."
            },
            {
                id: "a1_13_q38",
                type: "sort",
                question: "Build: 'These shoes are new.'",
                blocks: ["sont", "chaussures", "Ces", "neuves", "cette", "ce"], // Distractors: cette, ce
                correct_order: ["Ces", "chaussures", "sont", "neuves"],
                hint: "Plural."
            },
            {
                id: "a1_13_q39",
                type: "sort",
                question: "Build: 'This hotel is expensive.'",
                blocks: ["Cet", "hôtel", "cher", "est", "Ce", "Cette"], // Distractors: Ce, Cette
                correct_order: ["Cet", "hôtel", "est", "cher"],
                hint: "Masc H."
            },
            {
                id: "a1_13_q40",
                type: "sort",
                question: "Build: 'I prefer that one.' (celui-là)",
                blocks: ["celui-là", "préfère", "Je", "ce", "cette"], // Distractors: ce, cette
                correct_order: ["Je", "préfère", "celui-là"],
                hint: "Pointing at a specific one."
            },

            // --- Final Review ---
            {
                id: "a1_13_q41",
                type: "choice",
                question: "___ problème.",
                options: ["Ce", "Cette"],
                correct: 0,
                hint: "Problème is masculine (Greek origin)."
            },
            {
                id: "a1_13_q42",
                type: "choice",
                question: "___ idée (idea - f).",
                options: ["Cet", "Cette"],
                correct: 1,
                hint: "Feminine."
            },
            {
                id: "a1_13_q43",
                type: "choice",
                question: "___ animal.",
                options: ["Ce", "Cet"],
                correct: 1,
                hint: "Masc Vowel."
            },
            {
                id: "a1_13_q44",
                type: "choice",
                question: "___ histoire (story - f).",
                options: ["Cet", "Cette"],
                correct: 1,
                hint: "Feminine."
            },
            {
                id: "a1_13_q45",
                type: "input",
                question: "___ (This) garçon.",
                answer: "ce",
                hint: "Masc consonant."
            },
            {
                id: "a1_13_q46",
                type: "sort",
                question: "Build: 'Who is this man?'",
                blocks: ["homme", "est", "cet", "Qui", "?", "ce", "cette"], // Distractors: ce, cette
                correct_order: ["Qui", "est", "cet", "homme", "?"],
                hint: "Masc H."
            },
            {
                id: "a1_13_q47",
                type: "choice",
                question: "___ oranges.",
                options: ["Ces", "Cettes"],
                correct: 0,
                hint: "Cettes does not exist!"
            },
            {
                id: "a1_13_q48",
                type: "choice",
                question: "___ jour.",
                options: ["Ce", "Cet"],
                correct: 0,
                hint: "This day."
            },
            {
                id: "a1_13_q49",
                type: "choice",
                question: "___ semaine (week - f).",
                options: ["Ce", "Cette"],
                correct: 1,
                hint: "This week."
            },
            {
                id: "a1_13_q50",
                type: "sort",
                question: "Build: 'I do not like this.'",
                blocks: ["pas", "n'", "aime", "ça", "Je", "ce"], // Distractors: ce
                correct_order: ["Je", "n'", "aime", "pas", "ça"],
                hint: "'Ça' is used for general 'this/that'."
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
                summary: "The battle of the past tenses! One sets the scene, the other advances the story.",
                key_rule: "🔥 **The Movie Analogy:**\n* **Imparfait** = The Background / The Set / The Weather / What was happening (WAVE 〰️).\n* **Passé Composé** = The Action / The Event / What happened (BOOM 💥)."
            },
            explanation: [
                {
                    type: "text",
                    content: "To choose the right tense, ask yourself: **Is the action finished or was it ongoing?**"
                },
                ,
                {
                    type: "table",
                    headers: ["Context", "Tense", "Signal Words"],
                    rows: [
                        ["Specific Event (Once)", "Passé Composé", "Hier, Soudain, Un jour, Tout à coup, Ce matin"],
                        ["Habit (Repeated)", "Imparfait", "Souvent, Toujours, D'habitude, Tous les jours, Chaque année"],
                        ["Description / State", "Imparfait", "(No specific trigger, usually describing scene, age, time, feelings)"],
                        ["Sequence of events", "Passé Composé", "D'abord... puis... ensuite..."]
                    ]
                },
                {
                    type: "warning",
                    title: "⚠️ The Interruption",
                    content: "The classic structure: 'I **was sleeping** (Imparfait - Background) when the phone **rang** (P.C. - Interruption)' -> *Je dormais quand le téléphone a sonné.*"
                },
                {
                    type: "text",
                    content: "**Tip:** If you can say 'Used to...' or 'Was ...ing' in English, it is 99% likely to be **Imparfait**."
                }
            ]
        },
        practice: [
            // --- SIGNAL WORDS (The easiest way to tell) ---
            {
                id: "a2_05_q01",
                type: "choice",
                question: "Hier (Yesterday), je ___ (aller) au cinéma.",
                options: ["suis allé", "allais"],
                correct: 0,
                hint: "'Hier' marks a specific time -> PC."
            },
            {
                id: "a2_05_q02",
                type: "choice",
                question: "Soudain (Suddenly), le chien ___ (aboyer).",
                options: ["a aboyé", "aboyait"],
                correct: 0,
                hint: "'Soudain' introduces a sudden event -> PC."
            },
            {
                id: "a2_05_q03",
                type: "choice",
                question: "D'habitude (Usually), elle ___ (manger) à midi.",
                options: ["mangeait", "a mangé"],
                correct: 0,
                hint: "Habit -> Imparfait."
            },
            {
                id: "a2_05_q04",
                type: "choice",
                question: "Tous les étés, nous ___ (voyager).",
                options: ["voyagions", "avons voyagé"],
                correct: 0,
                hint: "Repetition/Habit -> Imparfait."
            },
            {
                id: "a2_05_q05",
                type: "choice",
                question: "Un jour (One day), il ___ (décider) de partir.",
                options: ["a décidé", "décidait"],
                correct: 0,
                hint: "Specific moment in the story -> PC."
            },
            {
                id: "a2_05_q06",
                type: "choice",
                question: "En 1990, je ___ (naître).",
                options: ["suis né", "naissais"],
                correct: 0,
                hint: "Birth is a specific event -> PC."
            },
            {
                id: "a2_05_q07",
                type: "choice",
                question: "Autrefois (In the past), il n'y ___ (avoir) pas de voitures.",
                options: ["avait", "a eu"],
                correct: 0,
                hint: "Description of a past era -> Imparfait."
            },
            {
                id: "a2_05_q08",
                type: "choice",
                question: "Ce matin, tu ___ (boire) un café.",
                options: ["as bu", "buvais"],
                correct: 0,
                hint: "Completed action this morning -> PC."
            },
            {
                id: "a2_05_q09",
                type: "choice",
                question: "Chaque mardi, il ___ (aller) à la piscine.",
                options: ["allait", "est allé"],
                correct: 0,
                hint: "Repeated habit -> Imparfait."
            },
            {
                id: "a2_05_q10",
                type: "choice",
                question: "Tout à coup (All of a sudden), la lumière ___ (s'éteindre).",
                options: ["s'est éteinte", "s'éteignait"],
                correct: 0,
                hint: "Sudden event -> PC."
            },

            // --- HABIT VS. ONE TIME ---
            {
                id: "a2_05_q11",
                type: "choice",
                question: "Quand j'étais petit, je ___ (aimer) les bonbons.",
                options: ["aimais", "ai aimé"],
                correct: 0,
                hint: "State of mind / habit over a long period -> Imparfait."
            },
            {
                id: "a2_05_q12",
                type: "choice",
                question: "Mardi dernier, j'___ (jouer) au tennis.",
                options: ["ai joué", "jouais"],
                correct: 0,
                hint: "Specific Tuesday -> PC."
            },
            {
                id: "a2_05_q13",
                type: "choice",
                question: "Le mardi, je ___ (jouer) au tennis.",
                options: ["jouais", "ai joué"],
                correct: 0,
                hint: "'Le mardi' implies 'Every Tuesday' -> Imparfait."
            },
            {
                id: "a2_05_q14",
                type: "choice",
                question: "Elle ___ (être) souvent malade.",
                options: ["était", "a été"],
                correct: 0,
                hint: "Souvent (often) -> Imparfait."
            },
            {
                id: "a2_05_q15",
                type: "choice",
                question: "J'___ (visiter) Paris trois fois.",
                options: ["ai visité", "visitais"],
                correct: 0,
                hint: "Specific number of times -> PC."
            },

            // --- DESCRIPTION (Weather, Age, Setting) ---
            {
                id: "a2_05_q16",
                type: "input",
                question: "Il ___ (faire - weather) beau.",
                answer: "faisait",
                hint: "Description of weather -> Imparfait."
            },
            {
                id: "a2_05_q17",
                type: "choice",
                question: "Le ciel ___ (être) gris.",
                options: ["était", "a été"],
                correct: 0,
                hint: "Description of the scene -> Imparfait."
            },
            {
                id: "a2_05_q18",
                type: "choice",
                question: "Elle ___ (avoir) 18 ans quand elle a passé son bac.",
                options: ["avait", "a eu"],
                correct: 0,
                hint: "Age is a description of a state -> Imparfait."
            },
            {
                id: "a2_05_q19",
                type: "choice",
                question: "Les oiseaux ___ (chanter) dans les arbres.",
                options: ["chantaient", "ont chanté"],
                correct: 0,
                hint: "Background atmosphere -> Imparfait."
            },
            {
                id: "a2_05_q20",
                type: "choice",
                question: "La maison ___ (sembler) vide.",
                options: ["semblait", "a semblé"],
                correct: 0,
                hint: "Description of state -> Imparfait."
            },

            // --- THE INTERRUPTION (Background ... WHEN ... Action) ---
            {
                id: "a2_05_q21",
                type: "choice",
                question: "Je ___ (dormir) quand le téléphone a sonné.",
                options: ["dormais", "ai dormi"],
                correct: 0,
                hint: "Sleeping was the background action -> Imparfait."
            },
            {
                id: "a2_05_q22",
                type: "choice",
                question: "Je dormais quand le téléphone ___ (sonner).",
                options: ["a sonné", "sonnait"],
                correct: 0,
                hint: "The ringing interrupted the sleep -> PC."
            },
            {
                id: "a2_05_q23",
                type: "choice",
                question: "Il ___ (marcher) quand il est tombé.",
                options: ["marchait", "a marché"],
                correct: 0,
                hint: "He was walking (process) -> Imparfait."
            },
            {
                id: "a2_05_q24",
                type: "choice",
                question: "Il marchait quand il ___ (tomber).",
                options: ["est tombé", "tombait"],
                correct: 0,
                hint: "Falling is the sudden event -> PC."
            },
            {
                id: "a2_05_q25",
                type: "choice",
                question: "Nous ___ (regarder) la télé quand l'électricité s'est coupée.",
                options: ["regardions", "avons regardé"],
                correct: 0,
                hint: "We were watching (ongoing) -> Imparfait."
            },
             {
                id: "a2_05_q26",
                type: "sort",
                question: "Build: 'I was reading when he entered.'",
                blocks: ["entré", "Je", "quand", "est", "il", "lisais"],
                correct_order: ["Je", "lisais", "quand", "il", "est", "entré"],
                hint: "Background (Imp) + Quand + Interruption (PC)."
            },

            // --- MENTAL STATES & CAUSE ---
            {
                id: "a2_05_q27",
                type: "choice",
                question: "Je n'ai pas mangé parce que je n'___ (avoir - negative) pas faim.",
                options: ["avais", "ai eu"],
                correct: 0,
                hint: "Feeling/State -> Imparfait."
            },
            {
                id: "a2_05_q28",
                type: "choice",
                question: "Il ___ (vouloir) devenir médecin.",
                options: ["voulait", "a voulu"],
                correct: 0,
                hint: "Desire/State of mind -> Imparfait."
            },
            {
                id: "a2_05_q29",
                type: "choice",
                question: "Je ne ___ (savoir) pas la réponse.",
                options: ["savais", "ai su"],
                correct: 0,
                hint: "Mental state -> Imparfait."
            },
            {
                id: "a2_05_q30",
                type: "choice",
                question: "Elle ___ (être) triste.",
                options: ["était", "a été"],
                correct: 0,
                hint: "Emotion/State -> Imparfait."
            },

            // --- DURATION (Pendant vs Description) ---
            {
                id: "a2_05_q31",
                type: "choice",
                question: "Il a habité à Londres ___ 10 ans.",
                options: ["pendant", "quand"],
                correct: 0,
                hint: "Defined duration -> Passé Composé + Pendant."
            },
            {
                id: "a2_05_q32",
                type: "choice",
                question: "J'ai attendu ___ une heure.",
                options: ["pendant", "depuis"],
                correct: 0,
                hint: "Finished duration -> Pendant (with PC)."
            },
            {
                id: "a2_05_q33",
                type: "choice",
                question: "Le film ___ (durer - lasted) 2 heures.",
                options: ["a duré", "durait"],
                correct: 0,
                hint: "The film is over, specific duration -> PC."
            },

            // --- MIXED DRILLS ---
            {
                id: "a2_05_q34",
                type: "input",
                question: "Il ___ (pleuvoir) hier soir.",
                answer: "a plu",
                hint: "Wait! 'Yesterday evening' is a specific completed time -> PC (A plu). (Tricky!)"
            },
             {
                id: "a2_05_q35",
                type: "choice",
                question: "Il ___ (pleuvoir) quand je suis rentré.",
                options: ["pleuvait", "a plu"],
                correct: 0,
                hint: "Here it's the background weather during an action -> Imparfait."
            },
            {
                id: "a2_05_q36",
                type: "choice",
                question: "Qu'est-ce que tu ___ (faire) hier ?",
                options: ["as fait", "faisais"],
                correct: 0,
                hint: "Asking about a completed event."
            },
            {
                id: "a2_05_q37",
                type: "choice",
                question: "Qu'est-ce que tu ___ (faire) quand je suis arrivé ?",
                options: ["faisais", "as fait"],
                correct: 0,
                hint: "Asking about an ongoing activity."
            },
            {
                id: "a2_05_q38",
                type: "sort",
                question: "Build: 'She prepared dinner.' (Event)",
                blocks: ["préparé", "dîner", "a", "le", "Elle"],
                correct_order: ["Elle", "a", "préparé", "le", "dîner"],
                hint: "PC Structure."
            },
            {
                id: "a2_05_q39",
                type: "sort",
                question: "Build: 'She was preparing dinner.' (Description)",
                blocks: ["dîner", "Elle", "le", "préparait"],
                correct_order: ["Elle", "préparait", "le", "dîner"],
                hint: "Imparfait Structure."
            },
            {
                id: "a2_05_q40",
                type: "choice",
                question: "Ils ___ (partir) très tôt ce matin.",
                options: ["sont partis", "partaient"],
                correct: 0,
                hint: "Specific event this morning -> PC."
            },

            // --- STORY SEQUENCING (Then... then...) ---
            {
                id: "a2_05_q41",
                type: "choice",
                question: "Il s'est levé, il a pris son café et il ___ (partir).",
                options: ["est parti", "partait"],
                correct: 0,
                hint: "A sequence of completed actions uses PC for all of them."
            },
            {
                id: "a2_05_q42",
                type: "choice",
                question: "Elle a ouvert la porte et elle ___ (entrer).",
                options: ["est entrée", "entrait"],
                correct: 0,
                hint: "Sequence of events -> PC."
            },

            // --- HARDER NUANCES ---
            {
                id: "a2_05_q43",
                type: "choice",
                question: "Savoir: Je ___ (knew) la réponse (Imparfait).",
                options: ["savais", "ai su"],
                correct: 0,
                hint: "I knew it (state of knowledge)."
            },
            {
                id: "a2_05_q44",
                type: "choice",
                question: "Savoir: J'___ (found out) la réponse (PC).",
                options: ["ai su", "savais"],
                correct: 0,
                hint: "Suddenly realizing something -> PC."
            },
            {
                id: "a2_05_q45",
                type: "choice",
                question: "Avoir: J'___ (had) un chien (Imparfait).",
                options: ["avais", "ai eu"],
                correct: 0,
                hint: "Possession over time."
            },
            {
                id: "a2_05_q46",
                type: "choice",
                question: "Avoir: J'___ (got/received) un chien (PC).",
                options: ["ai eu", "avais"],
                correct: 0,
                hint: "The moment of getting it -> PC."
            },
            {
                id: "a2_05_q47",
                type: "choice",
                question: "Vouloir: Je ___ (wanted - felt like it) partir.",
                options: ["voulais", "ai voulu"],
                correct: 0,
                hint: "Desire/Feeling -> Imparfait."
            },
            {
                id: "a2_05_q48",
                type: "choice",
                question: "Vouloir: J'___ (tried/decided) de partir, mais je n'ai pas pu.",
                options: ["ai voulu", "voulais"],
                correct: 0,
                hint: "Attempted action -> PC."
            },
            {
                id: "a2_05_q49",
                type: "choice",
                question: "Pouvoir: Je ___ (was capable) de le faire.",
                options: ["pouvais", "ai pu"],
                correct: 0,
                hint: "General capability -> Imparfait."
            },
            {
                id: "a2_05_q50",
                type: "choice",
                question: "Pouvoir: J'___ (managed to) le faire.",
                options: ["ai pu", "pouvais"],
                correct: 0,
                hint: "Success in a specific instance -> PC."
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
                summary: "The 'Going to' future. It is the easiest way to talk about the future and is used for immediate plans or things that are almost certain to happen.",
                key_rule: "🔥 **The Formula:** Subject + **ALLER** (conjugated) + **Infinitive** (Main Verb)."
            },
            explanation: [
                {
                    type: "text",
                    content: "You only need to know the present tense of **Aller** (to go). The second verb stays in the infinitive (unchanged)."
                },
                {
                    type: "table",
                    headers: ["Subject", "Helper (Aller)", "Action (Infinitive)"],
                    rows: [
                        ["Je", "vais", "manger"],
                        ["Tu", "vas", "dormir"],
                        ["Il / Elle", "va", "partir"],
                        ["Nous", "allons", "finir"],
                        ["Vous", "allez", "voir"],
                        ["Ils / Elles", "vont", "faire"]
                    ]
                },
                {
                    type: "warning",
                    title: "⚠️ Negation Sandwich",
                    content: "The negation (ne...pas) goes around the **conjugated verb** (Aller), NOT the infinitive.\n* Correct: *Je **ne** vais **pas** manger.*\n* Incorrect: *Je vais ne pas manger.*"
                },
                {
                    type: "text",
                    content: "**Pronouns:** Object pronouns go **before the infinitive**.\n* *Je vais **le** faire.* (I am going to do it)."
                }
            ]
        },
        practice: [
            // --- Basic Conjugation of Aller + Verb ---
            {
                id: "a2_06_q01",
                type: "choice",
                question: "Je ___ (aller) regarder la télé.",
                options: ["vais", "vas", "aller"],
                correct: 0,
                hint: "First person singular: Je vais."
            },
            {
                id: "a2_06_q02",
                type: "choice",
                question: "Tu ___ (aller) finir tes devoirs.",
                options: ["va", "vas", "allez"],
                correct: 1,
                hint: "Second person singular: Tu vas."
            },
            {
                id: "a2_06_q03",
                type: "input",
                question: "Il ___ (aller) pleuvoir.",
                answer: "va",
                hint: "Third person singular: Il va."
            },
            {
                id: "a2_06_q04",
                type: "choice",
                question: "Nous ___ (aller) partir en vacances.",
                options: ["allons", "avons", "sommes"],
                correct: 0,
                hint: "Nous allons (don't confuse with Avoir 'avons')."
            },
            {
                id: "a2_06_q05",
                type: "choice",
                question: "Vous ___ (aller) réussir.",
                options: ["allez", "avez", "êtes"],
                correct: 0,
                hint: "Vous allez."
            },
            {
                id: "a2_06_q06",
                type: "choice",
                question: "Elles ___ (aller) arriver bientôt.",
                options: ["vont", "sont", "ont"],
                correct: 0,
                hint: "Ils/Elles vont (irregular stem)."
            },

            // --- Identifying the Infinitive ---
            {
                id: "a2_06_q07",
                type: "choice",
                question: "Je vais ___ (to eat) une pomme.",
                options: ["manger", "mange", "mangé"],
                correct: 0,
                hint: "The second verb must be the Infinitive (ending in -er)."
            },
            {
                id: "a2_06_q08",
                type: "choice",
                question: "Tu vas ___ (to drink) de l'eau.",
                options: ["boire", "bois", "bu"],
                correct: 0,
                hint: "Infinitive form."
            },
            {
                id: "a2_06_q09",
                type: "input",
                question: "Il va ___ (to take) le bus.",
                answer: "prendre",
                hint: "Infinitive of 'prends'."
            },
            
            // --- Negation Drills (Ne...pas) ---
            {
                id: "a2_06_q10",
                type: "choice",
                question: "Negative: 'Je vais chanter.'",
                options: ["Je ne vais pas chanter", "Je vais ne pas chanter", "Je ne chanter pas vais"],
                correct: 0,
                hint: "Sandwich the conjugated verb 'vais'."
            },
            {
                id: "a2_06_q11",
                type: "sort",
                question: "Build: 'He is not going to come.'",
                blocks: ["venir", "pas", "va", "Il", "ne"],
                correct_order: ["Il", "ne", "va", "pas", "venir"],
                hint: "Ne + Va + Pas + Infinitive."
            },
            {
                id: "a2_06_q12",
                type: "choice",
                question: "Nous ___ (negative) allons pas partir.",
                options: ["n'", "ne", "non"],
                correct: 0,
                hint: "Allons starts with a vowel -> n'."
            },
            {
                id: "a2_06_q13",
                type: "choice",
                question: "Tu ne ___ (aller) pas comprendre.",
                options: ["vas", "va", "vais"],
                correct: 0,
                hint: "The conjugated verb goes inside the negation."
            },

            // --- Reflexive Verbs in Futur Proche ---
            {
                id: "a2_06_q14",
                type: "choice",
                question: "Je vais ___ (me lever).",
                options: ["me lever", "te lever", "se lever"],
                correct: 0,
                hint: "The reflexive pronoun must match the subject (Je -> me)."
            },
            {
                id: "a2_06_q15",
                type: "choice",
                question: "Tu vas ___ (se coucher) tard.",
                options: ["te coucher", "se coucher", "me coucher"],
                correct: 0,
                hint: "Subject Tu -> Pronoun Te."
            },
            {
                id: "a2_06_q16",
                type: "choice",
                question: "Nous allons ___ (se promener).",
                options: ["nous promener", "vous promener", "se promener"],
                correct: 0,
                hint: "Subject Nous -> Pronoun Nous."
            },
            {
                id: "a2_06_q17",
                type: "sort",
                question: "Build: 'She is going to wash herself.'",
                blocks: ["laver", "va", "Elle", "se"],
                correct_order: ["Elle", "va", "se", "laver"],
                hint: "Pronoun stays with the infinitive."
            },

            // --- Object Pronouns Position ---
            {
                id: "a2_06_q18",
                type: "choice",
                question: "Je vais manger la pomme -> Je vais ___ manger.",
                options: ["la", "le", "les"],
                correct: 0,
                hint: "Pronoun goes BEFORE the infinitive."
            },
            {
                id: "a2_06_q19",
                type: "choice",
                question: "Il va regarder le film -> Il va ___ regarder.",
                options: ["le", "la", "l'"],
                correct: 0,
                hint: "Film is masculine."
            },
            {
                id: "a2_06_q20",
                type: "choice",
                question: "Nous allons inviter Marc -> Nous allons ___ inviter.",
                options: ["l'", "le", "lui"],
                correct: 0,
                hint: "Inviter starts with a vowel -> l'."
            },
            {
                id: "a2_06_q21",
                type: "sort",
                question: "Build: 'I am going to do it.'",
                blocks: ["faire", "vais", "le", "Je"],
                correct_order: ["Je", "vais", "le", "faire"],
                hint: "Helper + Pronoun + Infinitive."
            },

            // --- Questions (Inversion & Est-ce que) ---
            {
                id: "a2_06_q22",
                type: "choice",
                question: "___-tu aller au cinéma ?",
                options: ["Vas", "Vais", "Va"],
                correct: 0,
                hint: "Inversion: Verb-Subject."
            },
            {
                id: "a2_06_q23",
                type: "sort",
                question: "Build: 'Are you going to eat?' (Est-ce que)",
                blocks: ["manger", "tu", "Est-ce", "vas", "que", "?"],
                correct_order: ["Est-ce", "que", "tu", "vas", "manger", "?"],
                hint: "Standard question structure."
            },
            {
                id: "a2_06_q24",
                type: "input",
                question: "Où ___ (are you going) aller ?",
                answer: "allez-vous",
                hint: "Formal inversion (verb-subject)."
            },

            // --- Time Indicators (Demain, Bientôt) ---
            {
                id: "a2_06_q25",
                type: "choice",
                question: "___ (Tomorrow), je vais partir.",
                options: ["Demain", "Hier", "Maintenant"],
                correct: 0,
                hint: "Future indicator."
            },
            {
                id: "a2_06_q26",
                type: "choice",
                question: "Nous allons arriver ___ (soon).",
                options: ["bientôt", "hier", "avant"],
                correct: 0,
                hint: "Future indicator."
            },
            {
                id: "a2_06_q27",
                type: "choice",
                question: "Ce soir (Tonight), on ___ sortir.",
                options: ["va", "est", "a"],
                correct: 0,
                hint: "On conjugates like Il -> va."
            },

            // --- Mixed Practice / Translation ---
            {
                id: "a2_06_q28",
                type: "choice",
                question: "Translate: 'It is going to be cold.'",
                options: ["Il va faire froid", "Il est faire froid", "Il aller faire froid"],
                correct: 0,
                hint: "Il va + faire (weather expression)."
            },
            {
                id: "a2_06_q29",
                type: "choice",
                question: "Translate: 'They are going to sell the house.'",
                options: ["Ils vont vendre la maison", "Ils ont vendre la maison"],
                correct: 0,
                hint: "Vont (Aller) vs Ont (Avoir)."
            },
            {
                id: "a2_06_q30",
                type: "input",
                question: "Je ___ (am going) t'aider.",
                answer: "vais",
                hint: "Je form of Aller."
            },

            // --- Speed Drills (Conjugation check) ---
            {
                id: "a2_06_q31",
                type: "choice",
                question: "Je ___",
                options: ["vais", "va"],
                correct: 0,
                hint: "vais."
            },
            {
                id: "a2_06_q32",
                type: "choice",
                question: "Tu ___",
                options: ["vas", "va"],
                correct: 0,
                hint: "vas."
            },
            {
                id: "a2_06_q33",
                type: "choice",
                question: "Il ___",
                options: ["va", "vas"],
                correct: 0,
                hint: "va."
            },
            {
                id: "a2_06_q34",
                type: "choice",
                question: "Nous ___",
                options: ["allons", "avons"],
                correct: 0,
                hint: "allons."
            },
            {
                id: "a2_06_q35",
                type: "choice",
                question: "Vous ___",
                options: ["allez", "avez"],
                correct: 0,
                hint: "allez."
            },
            {
                id: "a2_06_q36",
                type: "choice",
                question: "Ils ___",
                options: ["vont", "sont"],
                correct: 0,
                hint: "vont."
            },

            // --- Advanced Scenarios ---
            {
                id: "a2_06_q37",
                type: "choice",
                question: "Context: 'Attention ! Tu ___ tomber !'",
                options: ["vas", "es"],
                correct: 0,
                hint: "Immediate prediction: You are going to fall."
            },
            {
                id: "a2_06_q38",
                type: "choice",
                question: "Qu'est-ce que tu ___ faire plus tard ?",
                options: ["vas", "fais"],
                correct: 0,
                hint: "Asking about future plans."
            },
            {
                id: "a2_06_q39",
                type: "sort",
                question: "Build: 'I am not going to say it.'",
                blocks: ["dire", "le", "pas", "vais", "ne", "Je"],
                correct_order: ["Je", "ne", "vais", "pas", "le", "dire"],
                hint: "Order: Subject, ne, helper, pas, object, infinitive."
            },
            {
                id: "a2_06_q40",
                type: "choice",
                question: "On ___ (aller) s'amuser.",
                options: ["va", "vont", "allons"],
                correct: 0,
                hint: "On = 3rd person singular."
            },
            {
                id: "a2_06_q41",
                type: "choice",
                question: "Qui ___ (aller) gagner ?",
                options: ["va", "vont"],
                correct: 0,
                hint: "Qui (Who) acts as singular subject (Il)."
            },
            {
                id: "a2_06_q42",
                type: "input",
                question: "Mes parents ___ (aller) venir.",
                answer: "vont",
                hint: "Plural 'Ils'."
            },
            {
                id: "a2_06_q43",
                type: "choice",
                question: "Je vais ___ (être) en retard.",
                options: ["être", "suis", "serai"],
                correct: 0,
                hint: "Must be Infinitive."
            },
            {
                id: "a2_06_q44",
                type: "choice",
                question: "Tu vas ___ (avoir) une surprise.",
                options: ["avoir", "as", "auras"],
                correct: 0,
                hint: "Must be Infinitive."
            },
            {
                id: "a2_06_q45",
                type: "choice",
                question: "Le train ___ partir.",
                options: ["va", "est", "a"],
                correct: 0,
                hint: "Going to depart."
            },
            {
                id: "a2_06_q46",
                type: "choice",
                question: "Nous n'___ pas aller au parc.",
                options: ["allons", "avons"],
                correct: 0,
                hint: "Going to go."
            },
            {
                id: "a2_06_q47",
                type: "input",
                question: "Tu ___ (aller) te coucher.",
                answer: "vas",
                hint: "Tu form."
            },
            {
                id: "a2_06_q48",
                type: "sort",
                question: "Build: 'Is he going to buy bread?'",
                blocks: ["acheter", "du", "pain", "va", "t", "il", "?"],
                correct_order: ["va", "t", "il", "acheter", "du", "pain", "?"],
                hint: "Inversion with 't' for sound (Va-t-il)."
            },
            {
                id: "a2_06_q49",
                type: "choice",
                question: "Je sens que je ___ être malade.",
                options: ["vais", "suis"],
                correct: 0,
                hint: "Prediction: I am going to be."
            },
            {
                id: "a2_06_q50",
                type: "choice",
                question: "Tout ___ bien se passer (Everything is going to be fine).",
                options: ["va", "vont"],
                correct: 0,
                hint: "'Tout' is singular."
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