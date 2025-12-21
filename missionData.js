/* missionData.js */
window.MISSION_DATA = {
    vie_quotidienne: [ // "daily_life" -> "vie_quotidienne"
        {
            id: "bakery_a1",
            level: "A1",
            genre: "Vie Quotidienne",
            title: "À la Boulangerie", // Titel auf Französisch
            author: "Mission 1",
            coverColor: "bg-amber-100",
            textColor: "text-amber-900",
            icon: "Croissant",
            locked: false,
            briefing: {
                description: "Tu es à la boulangerie pour acheter le petit-déjeuner. (You are at the bakery to buy breakfast. Be polite and choose your preferred baking level!)",
                vocab: [
                    { fr: "Je voudrais...", en: "I would like..." },
                    { fr: "Une baguette, s'il vous plaît", en: "A baguette, please" },
                    { fr: "Bien cuite", en: "Well baked / Crunchy" },
                    { fr: "Pas trop cuite", en: "Not too baked / Soft" },
                    { fr: "Ça fait combien ?", en: "How much is it?" },
                    { fr: "Par carte", en: "By card" }
                ],
                goals: [
                    { id: "greet", text: "Saluer poliment (Greet politely)" },
                    { id: "pref", text: "Exprimer eine préférence (Express a preference)" },
                    { id: "pay", text: "Payer la commande (Pay for the order)" }
                ]
            },
            rewardCard: {
                id: "card_bakery_a1",
                title: "Maître de la Boulangerie",
                rank: "A1",
                rarity: "Commune",
                description: "Félicitations ! Du kannst jetzt Brot wie ein Profi bestellen.",
                keyPhrases: [
                    "Une baguette bien cuite, s'il vous plaît.",
                    "Je vais payer par carte.",
                    "Merci, bonne journée !"
                ],
                image: null 
            },
            nodes: {
                start: {
                    npc: "Bonjour ! Vous désirez ?",
                    options: [
                        { text: "Bonjour ! Je voudrais une baguette.", next: "ask_preference", correct: true, goal: "greet" },
                        { text: "Bonjour ! Deux croissants, s'il vous plaît.", next: "anything_else", correct: true, goal: "greet" },
                        { text: "Donne-moi du pain.", next: "rude_1", correct: false }
                    ]
                },
                // Neuer Pfad: Präferenz abfragen (Typisch französisch!)
                ask_preference: {
                    npc: "Une baguette... vous la voulez bien cuite ?",
                    options: [
                        { text: "Oui, bien cuite, s'il vous plaît.", next: "anything_else", correct: true, goal: "pref" },
                        { text: "Non, pas trop cuite, s'il vous plaît.", next: "anything_else", correct: true, goal: "pref" }
                    ]
                },
                anything_else: {
                    npc: "Très bien. Et mit ça ? Ce sera tout ?",
                    options: [
                        { text: "Oui, c'est tout. C'est combien ?", next: "payment_choice", correct: true, goal: "order" },
                        { text: "Je voudrais aussi un pain au chocolat.", next: "payment_choice", correct: true }
                    ]
                },
                // Neuer Pfad: Bezahlmethode
                payment_choice: {
                    npc: "Alors, ça fait 2,20 €. Vous payez comment ?",
                    options: [
                        { text: "Par carte, s'il vous plaît.", next: "win", correct: true, goal: "pay" },
                        { text: "En espèces (cash). Voilà !", next: "win", correct: true, goal: "pay" },
                        { text: "C'est trop cher !", next: "angry_bakery", correct: false }
                    ]
                },
                rude_1: {
                    npc: "Pardon ? On ne dit pas 'Bonjour' ? Je ne vous sers pas.",
                    options: [
                        { text: "Oh, pardon. Bonjour, monsieur !", next: "start", correct: true }
                    ],
                    damage: true
                },
                angry_bakery: {
                    npc: "C'est le prix de l'artisanat, monsieur ! Allez au supermarché !",
                    isEnd: true,
                    success: false
                },
                win: {
                    npc: "Merci beaucoup ! Bonne journée, au revoir !",
                    isEnd: true,
                    success: true
                }
            }
        }
    ]
};