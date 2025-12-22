window.MISSION_DATA = {
    daily_life: [
        //BOULANGERIE A1
        {
            id: "bakery_a1",
            groupId: "bakery",
            level: "A1",
            unlocks: ["bakery_a2", "cafe_a1"],
            genre: "Daily Life",
            title: "À la Boulangerie",
            author: "Mission 1",
            coverColor: "bg-amber-100",
            textColor: "text-amber-900",
            icon: "Croissant",
            briefing: {
                description: "You're hungry! Go to the bakery and get a baguette for breakfast.",
                mainGoal: { id: "buy_baguette", text: "Buy a baguette" },
                subGoals: [
                    { id: "greet", text: "Greet the baker politely" },
                    { id: "croissants", text: "Buy 2 croissants as well" },
                    { id: "pay_cash", text: "Pay using cash" }
                ]
            },
            rewardCard: { id: "card_bakery_a1", title: "Baguette Master", rank: "A1", rarity: "Common", description: "First mission complete!" },
            nodes: {
                start: {
                    npc: "Bonjour ! Bienvenue à la boulangerie. Vous désirez ?",
                    options: [
                        { text: "Bonjour ! Je voudrais une baguette.", next: "anything_else", goal: "greet" },
                        { text: "Une baguette.", next: "anything_else" }
                    ]
                },
                anything_else: {
                    npc: "Très bien. Et avec ceci ?",
                    options: [
                        { text: "Deux croissants aussi, s'il vous plaît.", next: "payment", goal: "croissants" },
                        { text: "C'est tout, merci.", next: "payment" }
                    ]
                },
                payment: {
                    npc: "Alors, ça fait 3,20 €. Comment payez-vous ?",
                    options: [
                        { text: "Par carte, s'il vous plaît.", next: "win", goal: "buy_baguette" },
                        { text: "En espèces. Voici la monnaie.", next: "win", goal: "pay_cash" }
                    ]
                },
                win: { 
                    npc: "Merci beaucoup ! Bonne journée, au revoir !", 
                    isEnd: true, 
                    // Das Main Goal muss am Ende erreicht sein!
                    // (Die Logik im Player prüft am Ende nur das completedGoalIds Array)
                    // Da der letzte Pfad immer "buy_baguette" triggert, gewinnt man.
                    options: [] 
                }
            }
        },
        // --- CAFÉ A1 ---
        {
            id: "cafe_a1",
            groupId: "cafe",
            level: "A1",
            unlocks: ["cafe_a2", "market_a1"],
            genre: "Daily Life",
            title: "Au Café",
            author: "Mission 2",
            coverColor: "bg-blue-100",
            textColor: "text-blue-900",
            icon: "Coffee",
            briefing: {
                description: "Enjoy the sun! Find a spot on the terrace and order a drink.",
                mainGoal: { id: "order_drink", text: "Order a drink" },
                subGoals: [
                    { id: "terrace", text: "Ask for a table on the terrace" },
                    { id: "sugar", text: "Ask for sugar with your drink" },
                    { id: "compliment", text: "Tell the waiter it's delicious" }
                ]
            },
            rewardCard: { id: "c2", title: "Café regular", rank: "A1", rarity: "Common", description: "You mastered the terrace!" },
            nodes: {
                start: {
                    npc: "Bonjour ! On s'installe ?",
                    options: [
                        { text: "Une table en terrasse, s'il vous plaît.", next: "order", goal: "terrace" },
                        { text: "À l'intérieur, merci.", next: "order" }
                    ]
                },
                order: {
                    npc: "Voilà la carte. Qu'est-ce que je vous sers ?",
                    options: [
                        { text: "Un café s'il vous plaît.", next: "sugar_node", goal: "order_drink" },
                        { text: "Un thé, merci.", next: "sugar_node", goal: "order_drink" }
                    ]
                },
                sugar_node: {
                    npc: "Très bien. Je vous apporte ça.",
                    options: [
                        { text: "Est-ce que je peux avoir du sucre ?", next: "tasting", goal: "sugar" },
                        { text: "Merci.", next: "tasting" }
                    ]
                },
                tasting: {
                    npc: "Voilà. C'est bon ?",
                    options: [
                        { text: "Oui, c'est délicieux !", next: "win", goal: "compliment" },
                        { text: "Oui, merci.", next: "win" }
                    ]
                },
                win: { npc: "Parfait. Je vous laisse profiter !", isEnd: true, success: true }
            }
        },
        // --- BOULANGERIE A2 ---
        {
            id: "bakery_a2",
            groupId: "bakery",
            level: "A2",
            unlocks: ["bakery_b1"],
            genre: "Daily Life",
            title: "Boulangerie: The Crisis",
            author: "Mission 3",
            coverColor: "bg-amber-200",
            textColor: "text-amber-950",
            icon: "Croissant",
            briefing: {
                description: "The bakery is crowded and your favorite bread is sold out. You need to find a solution and check for allergies.",
                mainGoal: { id: "find_alt", text: "Buy an alternative bread" },
                subGoals: [
                    { id: "stock_check", text: "Ask when the baguettes will be back" },
                    { id: "allergy", text: "Ask if the bread contains nuts" },
                    { id: "exact_change", text: "Offer to pay the exact amount" }
                ]
            },
            rewardCard: { id: "card_bakery_a2", title: "Problem Solver", rank: "A2", rarity: "Rare", description: "You handled the 'Rupture de Stock' like a pro!" },
            nodes: {
                start: {
                    npc: "Désolé ! Il n'y a plus de baguettes pour l'instant. Il faut attendre 20 minutes.",
                    options: [
                        { text: "Oh non ! À quelle heure est la prochaine fournée ?", next: "alt_choice", goal: "stock_check" },
                        { text: "C'est dommage. Qu'est-ce que vous avez d'autre ?", next: "alt_choice" }
                    ]
                },
                alt_choice: {
                    npc: "Il me reste du pain de campagne ou des traditions. C'est très bon aussi !",
                    options: [
                        { text: "Je vais prendre un pain de campagne. Est-ce qu'il y a des noix dedans ?", next: "payment_a2", goal: "allergy" },
                        { text: "D'accord, je prends une tradition alors.", next: "payment_a2", goal: "find_alt" }
                    ]
                },
                payment_a2: {
                    npc: "Très bien. Ça fera 2,10 € s'il vous plaît.",
                    options: [
                        { text: "J'ai la monnaie exacte, tenez.", next: "win", goal: "exact_change" },
                        { text: "Je vais payer par carte.", next: "win", goal: "find_alt" }
                    ]
                },
                win: { npc: "Merci ! Bonne dégustation, au revoir !", isEnd: true, success: true }
            }
        },

        // --- CAFÉ A2 ---
        {
            id: "cafe_a2",
            groupId: "cafe",
            level: "A2",
            unlocks: ["cafe_b1"],
            genre: "Daily Life",
            title: "Au Café: The Mistake",
            author: "Mission 4",
            coverColor: "bg-blue-200",
            textColor: "text-blue-950",
            icon: "Coffee",
            briefing: {
                description: "The waiter brought the wrong drink and you are missing a spoon. Get it fixed politely!",
                mainGoal: { id: "correct_order", text: "Get the correct drink" },
                subGoals: [
                    { id: "spoon", text: "Ask for a spoon" },
                    { id: "wifi", text: "Ask for the WiFi password" },
                    { id: "tip", text: "Leave a tip" }
                ]
            },
            rewardCard: { id: "c4", title: "Polite Critic", rank: "A2", rarity: "Rare", description: "You know how to complain gracefully." },
            nodes: {
                start: {
                    npc: "Et voilà, un café noir pour vous !",
                    options: [
                        { text: "Pardon, mais j'ai commandé un café au lait.", next: "waiter_sorry", goal: "correct_order" },
                        { text: "Excusez-moi, il y a une erreur. Je voulais un thé.", next: "waiter_sorry", goal: "correct_order" }
                    ]
                },
                waiter_sorry: {
                    npc: "Ah ! Je suis vraiment désolé, je change ça immédiatement. Autre chose ?",
                    options: [
                        { text: "Oui, est-ce que je peux avoir une petite cuillère ?", next: "wifi_check", goal: "spoon" },
                        { text: "Non, c'est bon, merci.", next: "wifi_check" }
                    ]
                },
                wifi_check: {
                    npc: "Bien sûr. Je vous apporte ça. Vous avez besoin d'autre chose ?",
                    options: [
                        { text: "Est-ce que vous avez le code du Wifi ?", next: "checkout_a2", goal: "wifi" },
                        { text: "Non, l'addition s'il vous plaît.", next: "checkout_a2" }
                    ]
                },
                checkout_a2: {
                    npc: "Voilà votre boisson. Le code wifi est sur le ticket. Ça fait 3,50 €.",
                    options: [
                        { text: "Voici 4 euros, gardez la monnaie.", next: "win", goal: "tip" },
                        { text: "Voici 3,50 €, merci.", next: "win" }
                    ]
                },
                win: { npc: "Merci beaucoup ! Bonne fin d'après-midi.", isEnd: true, success: true }
            }
        },

        // --- BOULANGERIE B1 ---
        {
            id: "bakery_b1",
            groupId: "bakery",
            level: "B1",
            unlocks: [],
            genre: "Daily Life",
            title: "Boulangerie: The Party",
            author: "Mission 5",
            coverColor: "bg-amber-300",
            textColor: "text-amber-900",
            icon: "Croissant",
            briefing: {
                description: "You are organizing a dinner for tomorrow. Place a large order and negotiate a custom cake.",
                mainGoal: { id: "order_dinner", text: "Place a large order for tomorrow" },
                subGoals: [
                    { id: "homemade", text: "Verify if the pastries are homemade" },
                    { id: "flavor", text: "Request a specific fruit for the cake" },
                    { id: "discount", text: "Ask for a small discount for the large quantity" }
                ]
            },
            rewardCard: { id: "c5", title: "Event Manager", rank: "B1", rarity: "Epic", description: "Large orders don't scare you anymore." },
            nodes: {
                start: {
                    npc: "Bonjour ! Je peux vous aider pour une commande spéciale ?",
                    options: [
                        { text: "Oui, je voudrais commander 20 baguettes pour demain soir.", next: "cake_discuss", goal: "order_dinner" },
                        { text: "Bonjour, je cherche à organiser un grand dîner.", next: "cake_discuss" }
                    ]
                },
                cake_discuss: {
                    npc: "Vingt baguettes, c'est noté. Vous voulez un dessert aussi ? Un grand gâteau ?",
                    options: [
                        { text: "Oui, mais est-ce que vos pâtisseries sont faites maison ?", next: "flavor_choice", goal: "homemade" },
                        { text: "Oui, quel genre de gâteaux proposez-vous ?", next: "flavor_choice" }
                    ]
                },
                flavor_choice: {
                    npc: "Tout est fait ici le matin même ! Nous faisons des tartes aux fraises oder aux pommes.",
                    options: [
                        { text: "Serait-il possible de faire une tarte aux framboises ? J'adore ça.", next: "negotiation", goal: "flavor" },
                        { text: "Je vais prendre la tarte aux fraises alors.", next: "negotiation" }
                    ]
                },
                negotiation: {
                    npc: "D'accord, c'veut dire 45 euros au total avec le pain.",
                    options: [
                        { text: "Comme c'est une grosse commande, vous pourriez faire un petit geste commercial ?", next: "win", goal: "discount" },
                        { text: "C'est parfait, je passerai chercher ça demain.", next: "win" }
                    ]
                },
                win: { npc: "C'est entendu, je vous fais 10% de remise. À demain !", isEnd: true, success: true }
            }
        },

        // --- CAFÉ B1 ---
        {
            id: "cafe_b1",
            groupId: "cafe",
            level: "B1",
            unlocks: [],
            genre: "Daily Life",
            title: "Au Café: The Food Critic",
            author: "Mission 6",
            coverColor: "bg-blue-300",
            textColor: "text-blue-900",
            icon: "Coffee",
            briefing: {
                description: "You are meeting a friend. Discuss the origin of the coffee and handle a complex billing issue.",
                mainGoal: { id: "settle_bill", text: "Pay the bill and resolve an overcharge" },
                subGoals: [
                    { id: "origin", text: "Ask about where the coffee beans come from" },
                    { id: "recommend", text: "Ask for a recommendation for a snack" },
                    { id: "dispute", text: "Explain that you didn't order the second croissant" }
                ]
            },
            rewardCard: { id: "c6", title: "Gourmet Traveller", rank: "B1", rarity: "Epic", description: "You speak French with a rich, aromatic vocabulary." },
            nodes: {
                start: {
                    npc: "Bonjour ! Voici vos cafés. Ils sont excellents aujourd'hui.",
                    options: [
                        { text: "Merci ! Ils ont un goût particulier, d'où viennent les grains ?", next: "snack_time", goal: "origin" },
                        { text: "Merci, ils ont l'air très bons.", next: "snack_time" }
                    ]
                },
                snack_time: {
                    npc: "C'est un mélange de Colombie et du Brésil. Vous voulez grignoter quelque chose ?",
                    options: [
                        { text: "Qu'est-ce que vous me conseillez avec ce type de café ?", next: "bill_dispute", goal: "recommend" },
                        { text: "Non merci, juste l'addition s'il vous plaît.", next: "bill_dispute" }
                    ]
                },
                bill_dispute: {
                    npc: "Voici l'addition. Ça fait 12,50 € pour les deux cafés et les deux croissants.",
                    options: [
                        { text: "Attendez, il y a une erreur. Nous n'avons pris qu'un seul croissant.", next: "win", goal: "dispute" },
                        { text: "D'accord, je vais payer.", next: "win", goal: "settle_bill" }
                    ]
                },
                win: { npc: "Oh, vous avez raison ! Je retire le deuxième croissant. Désolé !", isEnd: true, success: true }
            }
        }
    ]
};