/* script.js */
const { useState, useEffect } = React;

// --- ICONS (Inline SVGs) ---
const Icon = ({ path, size = 24, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        {path}
    </svg>
);
const BookCheck = (p) => <Icon {...p} path={<><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path d="m9 9.5 2 2 4-4"/></>} />;
const BookOpen = (p) => <Icon {...p} path={<><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></>} />;
const Check = (p) => <Icon {...p} path={<polyline points="20 6 9 17 4 12"/>} />;
const X = (p) => <Icon {...p} path={<><path d="M18 6 6 18"/><path d="m6 6 12 12"/></>} />;
const RotateCcw = (p) => <Icon {...p} path={<><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></>} />;
const BarChart3 = (p) => <Icon {...p} path={<><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></>} />;
const Settings = (p) => <Icon {...p} path={<><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></>} />;
const Play = (p) => <Icon {...p} path={<polygon points="5 3 19 12 5 21 5 3"/>} />;
const GraduationCap = (p) => <Icon {...p} path={<><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></>} />;
const ChevronRight = (p) => <Icon {...p} path={<path d="m9 18 6-6-6-6"/>} />;
const Save = (p) => <Icon {...p} path={<><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></>} />;
const PieChart = (p) => <Icon {...p} path={<><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></>} />;
const Layers = (p) => <Icon {...p} path={<><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></>} />;
const Info = (p) => <Icon {...p} path={<><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></>} />;
const User = (p) => <Icon {...p} path={<><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>} />;
const Search = (p) => <Icon {...p} path={<><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></>} />;
const HomeIcon = (p) => <Icon {...p} path={<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>} />;
// --- MOCK DATA ---
//const INITIAL_DATA = vocab_List;
const BottomNav = ({ activeTab, onTabChange }) => {
    const tabs = [
        { id: 'home', label: 'Home', icon: <HomeIcon size={24} /> },
        { id: 'library', label: 'Library', icon: <BookOpen size={24} /> },
        { id: 'stats', label: 'Profile', icon: <User size={24} /> },
        { id: 'settings', label: 'Settings', icon: <Settings size={24} /> },
    ];

    return (
        /* pb-safe sorgt für Abstand zum unteren Bildschirmrand (iPhone Strich) */
        <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-slate-200 px-6 pt-3 pb-2 pb-safe shadow-[0_-5px_20px_rgba(0,0,0,0.03)] z-50 transition-transform duration-300">
            <div className="flex justify-between items-center max-w-md mx-auto">
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => onTabChange(tab.id)}
                            className={`flex flex-col items-center gap-1 min-w-[60px] rounded-xl transition-all duration-300 active:scale-90 ${
                                isActive ? 'text-indigo-600 -translate-y-1' : 'text-slate-400 hover:text-slate-600'
                            }`}
                        >
                            {tab.icon}
                            <span className={`text-[10px] font-bold tracking-wide transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                                {tab.label}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
function App() {
    // --- STATE MANAGEMENT ---
    const [view, setView] = useState('home'); 
    const [vocabulary, setVocabulary] = useState(vocab_List);
    const [userProgress, setUserProgress] = useState({}); 
    
    // Session State
    const [activeSession, setActiveSession] = useState([]);
    const [sessionQueue, setSessionQueue] = useState([]); 
    const [currentIndex, setCurrentIndex] = useState(0); 
    const [isFlipped, setIsFlipped] = useState(false);
    const [sessionResults, setSessionResults] = useState({ correct: 0, wrong: 0 });

    // Configurations
// Configurations
    const [testConfig, setTestConfig] = useState({ startRank: 1, endRank: 50, count: 20 });
    const [smartConfig, setSmartConfig] = useState({ sessionSize: 15, rangeStart: 1, rangeEnd: 5000 });
    const [reviewCount, setReviewCount] = useState(20);

    // Initial Load & Persistence
    useEffect(() => {
        const savedProgress = localStorage.getItem('vocabApp_progress');
        const savedVocab = localStorage.getItem('vocabApp_vocab');
        if (savedProgress) setUserProgress(JSON.parse(savedProgress));
        if (savedVocab) setVocabulary(JSON.parse(savedVocab));
    }, []);

    useEffect(() => {
        localStorage.setItem('vocabApp_progress', JSON.stringify(userProgress));
    }, [userProgress]);

    // --- HELPERS ---
    const getNextReviewTime = (box) => {
        const now = Date.now();
        const oneDay = 24 * 60 * 60 * 1000;
        const intervals = [0, 1, 3, 7, 14, 30]; 
        const daysToAdd = intervals[Math.min(box, intervals.length - 1)];
        return now + (daysToAdd * oneDay);
    };

    const getStatsForRange = (limit) => {
        const wordsInRange = vocabulary.filter(w => w.rank <= limit);
        if (wordsInRange.length === 0) return 0;
        const knownWords = wordsInRange.filter(w => {
            const progress = userProgress[w.rank];
            return progress && progress.box > 0;
        });
        return Math.round((knownWords.length / wordsInRange.length) * 100);
    };

    // --- SESSION LOGIC ---
    const startSmartSession = () => {
        const now = Date.now();
        const sessionSize = smartConfig.sessionSize; 
        let sessionWords = [];

        // SCHRITT 1: Erstmal nur Wörter im gewählten Bereich holen
        const pool = vocabulary.filter(w => w.rank >= smartConfig.rangeStart && w.rank <= smartConfig.rangeEnd);

        // SCHRITT 2: Aus DIESEM Pool die fälligen Wörter suchen
        const dueWords = pool.filter(word => {
            const progress = userProgress[word.rank];
            return progress && progress.nextReview <= now;
        });

        // SCHRITT 3: Aus DIESEM Pool neue Wörter suchen
        const newWords = pool
            .filter(word => !userProgress[word.rank])
            .sort((a, b) => a.rank - b.rank); 

        // Priorität: Erst Wiederholungen, dann neue
        sessionWords = [...dueWords];
        
        if (sessionWords.length < sessionSize) {
            const needed = sessionSize - sessionWords.length;
            sessionWords = [...sessionWords, ...newWords.slice(0, needed)];
        }
        
        if (sessionWords.length > sessionSize) {
            sessionWords = sessionWords.slice(0, sessionSize);
        }

        if (sessionWords.length === 0) {
            alert("All caught up in this range! Try selecting a different rank range or increase the limit.");
            return;
        }

        setSessionQueue(sessionWords);
        setIsFlipped(false);
        setSessionResults({ correct: 0, wrong: 0 });
        setView('smart-session');
    };

    const startTestSession = () => {
        let pool = vocabulary.filter(w => w.rank >= testConfig.startRank && w.rank <= testConfig.endRank);
        for (let i = pool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pool[i], pool[j]] = [pool[j], pool[i]];
        }
        const selected = pool.slice(0, testConfig.count);
        if (selected.length === 0) {
            alert("No words found in the selected range.");
            return;
        }
        setActiveSession(selected);
        setCurrentIndex(0);
        setIsFlipped(false);
        setSessionResults({ correct: 0, wrong: 0 });
        setView('test-session');
    };
    const startReviewSession = () => {
        // 1. Alle gelernten Wörter holen (Box > 0)
        const learnedWords = vocabulary.filter(w => userProgress[w.rank] && userProgress[w.rank].box > 0);
        
        if (learnedWords.length === 0) {
            alert("You haven't learned any words yet! Go to Personal Training first.");
            return;
        }

        // 2. Mischen (Fisher-Yates Shuffle)
        let pool = [...learnedWords];
        for (let i = pool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pool[i], pool[j]] = [pool[j], pool[i]];
        }

        // 3. Auf gewünschte Anzahl begrenzen
        const selected = pool.slice(0, reviewCount);

        // 4. Session starten (Wir nutzen den existierenden Test-Modus, da er keine Boxen verändert)
        setActiveSession(selected);
        setCurrentIndex(0);
        setIsFlipped(false);
        setSessionResults({ correct: 0, wrong: 0 });
        setView('test-session'); // Wir nutzen test-session für reines Abfragen
    };

    const handleResult = (known) => {
        if (view === 'smart-session') {
            const currentWord = sessionQueue[0];
            setUserProgress(prev => {
                const currentStats = prev[currentWord.rank] || { box: 0, correctCount: 0 };
                let newBox = currentStats.box;
                let newCorrectCount = currentStats.correctCount;

                if (known) {
                    newBox = Math.min(newBox + 1, 5); 
                    newCorrectCount += 1;
                } else {
                    newBox = Math.max(newBox - 1, 0); 
                }

                return {
                    ...prev,
                    [currentWord.rank]: {
                        box: newBox,
                        nextReview: getNextReviewTime(newBox),
                        correctCount: newCorrectCount
                    }
                };
            });

            if (known) {
                const newQueue = sessionQueue.slice(1);
                if (newQueue.length === 0) {
                    setSessionResults(prev => ({ ...prev, correct: prev.correct + 1 }));
                    setView('results');
                } else {
                    setSessionResults(prev => ({ ...prev, correct: prev.correct + 1 }));
                    setIsFlipped(false);
                    setSessionQueue(newQueue);
                }
            } else {
                const newQueue = [...sessionQueue.slice(1), currentWord];
                setSessionResults(prev => ({ ...prev, wrong: prev.wrong + 1 }));
                setIsFlipped(false);
                setSessionQueue(newQueue);
            }
        } else {
            setSessionResults(prev => ({
                ...prev,
                correct: known ? prev.correct + 1 : prev.correct,
                wrong: !known ? prev.wrong + 1 : prev.wrong
            }));

            if (currentIndex < activeSession.length - 1) {
                setIsFlipped(false);
                setTimeout(() => setCurrentIndex(currentIndex + 1), 150);
            } else {
                setView('results');
            }
        }
    };

    const handleDataUpload = (e) => {
        e.preventDefault();
        const text = e.target.elements.jsonInput.value;
        try {
            const parsed = JSON.parse(text);
            if (Array.isArray(parsed) && parsed[0].french && (parsed[0].english || parsed[0].german) && parsed[0].rank) {
                setVocabulary(parsed);
                localStorage.setItem('vocabApp_vocab', JSON.stringify(parsed));
                alert(`${parsed.length} words imported successfully!`);
                setView('home');
            } else {
                alert("Invalid format.");
            }
        } catch (err) {
            alert("Error parsing JSON.");
        }
    };

    // --- RENDERERS ---
    const renderHome = () => (
        <div className="space-y-6 animate-in fade-in duration-500 pt-4">
            {/* Begrüßung */}
            <div className="flex justify-between items-end mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-slate-800">Bonjour! 👋</h1>
                    <p className="text-slate-500">Ready to expand your vocabulary?</p>
                </div>
            </div>

            {/* Haupt-Aktion: Personal Training */}
            <button onClick={() => setView('smart-config')} className="w-full group relative overflow-hidden bg-indigo-600 text-white p-8 rounded-3xl shadow-lg shadow-indigo-200 transition-all hover:scale-[1.02]">
                <div className="relative z-10 flex flex-col items-start gap-4">
                    <div className="bg-white/20 p-4 rounded-2xl"><Play size={32} fill="currentColor" /></div>
                    <div>
                        <h2 className="text-3xl font-bold">Start Training</h2>
                        <p className="text-indigo-100 mt-1">Continue your frequency loop.</p>
                    </div>
                </div>
                <GraduationCap size={180} className="absolute -right-8 -bottom-8 opacity-10 rotate-12" />
            </button>

            {/* Sekundäre Aktionen */}
            <div className="grid grid-cols-2 gap-4">
                <button onClick={() => setView('test-config')} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-indigo-100 transition-all text-left">
                    <div className="bg-amber-100 w-fit p-3 rounded-xl text-amber-600 mb-3"><BookOpen size={24} /></div>
                    <div className="font-bold text-slate-700">Quick Test</div>
                    <div className="text-xs text-slate-400 mt-1">No progress saved</div>
                </button>
                {/* Hier könnte ein "Daily Challenge" Button hin */}
                <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200 text-left opacity-60 flex flex-col justify-between">
                    <div className="bg-slate-200 w-fit p-3 rounded-xl text-slate-400 mb-3"><BarChart3 size={24} /></div>
                    <div>
                        <div className="font-bold text-slate-500">Leaderboard</div>
                        <div className="text-xs text-slate-400 mt-1">Coming soon</div>
                    </div>
                </div>
            </div>
        </div>
    );

    const renderSmartConfig = () => {
        // Definition der Bereiche für die Buttons (jetzt mit 2001-5000)
        const ranges = [
            { label: "Individuel", start: 1, end: 5000 },
            { label: "Top 100", start: 1, end: 100 },
            { label: "101 - 500", start: 101, end: 500 },
            { label: "501 - 1000", start: 501, end: 1000 },
            { label: "1001 - 2000", start: 1001, end: 2000 },
            { label: "2001 - 5000", start: 2001, end: 5000 }, // <--- NEU
        ];

        return (
            <div className="max-w-lg mx-auto bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-6">
                    <button onClick={() => setView('home')} className="p-2 hover:bg-slate-100 rounded-full"><RotateCcw size={20} className="text-slate-500" /></button>
                    <h2 className="text-2xl font-bold text-slate-800">Learning Setup</h2>
                </div>
                
                <div className="space-y-8">
                    {/* RANGE SELECTION */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-3">Focus Range</label>
                        <div className="grid grid-cols-2 gap-3">
                            {ranges.map((r) => {
                                const isActive = smartConfig.rangeStart === r.start && smartConfig.rangeEnd === r.end;
                                return (
                                    <button 
                                        key={r.label}
                                        onClick={() => setSmartConfig({ ...smartConfig, rangeStart: r.start, rangeEnd: r.end })}
                                        className={`p-3 rounded-xl text-sm font-medium transition-all border ${
                                            isActive 
                                            ? "bg-indigo-600 text-white border-indigo-600 shadow-md transform scale-[1.02]" 
                                            : "bg-white text-slate-600 border-slate-200 hover:border-indigo-300 hover:bg-indigo-50"
                                        }`}
                                    >
                                        {r.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* SESSION SIZE SLIDER */}
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">New words per session</label>
                        <input type="range" min="5" max="50" step="5" value={smartConfig.sessionSize} onChange={(e) => setSmartConfig({...smartConfig, sessionSize: parseInt(e.target.value)})} className="w-full accent-indigo-600 h-12" />
                        <div className="flex justify-between mt-2 text-xs text-slate-400">
                            <span>5 (Light)</span>
                            <span className="text-indigo-600 font-bold text-lg">{smartConfig.sessionSize} Words</span>
                            <span>50 (Heavy)</span>
                        </div>
                    </div>

                    <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 text-sm text-indigo-900 flex gap-3">
                        <Info className="shrink-0" size={18} />
                        <p>We prioritize words due for review within your selected range, then fill up with new words.</p>
                    </div>

                    <button onClick={startSmartSession} className="w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white p-4 rounded-xl font-bold shadow-lg shadow-indigo-200 transition-all flex justify-center items-center gap-2">
                        <Play size={20} fill="currentColor" /> Start Session
                    </button>
                </div>
            </div>
        );
    };

    const renderTestConfig = () => (
        <div className="max-w-lg mx-auto bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
                <button onClick={() => setView('home')} className="p-2 hover:bg-slate-100 rounded-full"><RotateCcw size={20} className="text-slate-500" /></button>
                <h2 className="text-2xl font-bold text-slate-800">Configure Test</h2>
            </div>
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Frequency Range (Rank)</label>
                    <div className="flex items-center gap-4">
                        <div className="flex-1"><span className="text-xs text-slate-500 block">From</span><input type="number" min="1" max={vocabulary.length} value={testConfig.startRank} onChange={(e) => setTestConfig({...testConfig, startRank: parseInt(e.target.value)})} className="w-full mt-1 p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" /></div>
                        <span className="text-slate-400 mt-4">-</span>
                        <div className="flex-1"><span className="text-xs text-slate-500 block">To</span><input type="number" min="1" max={vocabulary.length} value={testConfig.endRank} onChange={(e) => setTestConfig({...testConfig, endRank: parseInt(e.target.value)})} className="w-full mt-1 p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none" /></div>
                    </div>
                </div>
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Number of Questions</label>
                    <input type="range" min="5" max="50" step="5" value={testConfig.count} onChange={(e) => setTestConfig({...testConfig, count: parseInt(e.target.value)})} className="w-full accent-indigo-600 h-12" />
                    <div className="text-center text-indigo-600 font-bold mt-2">{testConfig.count} words</div>
                </div>
                <button onClick={startTestSession} className="w-full bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white p-4 rounded-xl font-bold shadow-lg shadow-indigo-200 transition-all flex justify-center items-center gap-2"><Play size={20} fill="currentColor" /> Start Test</button>
            </div>
        </div>
    );
    const renderFlashcard = () => {
            const isSmartMode = view === 'smart-session';
            const word = isSmartMode ? sessionQueue[0] : activeSession[currentIndex];
            let progressText = isSmartMode ? `${sessionQueue.length} remaining` : `${currentIndex + 1} / ${activeSession.length}`;
            let progressPercent = !isSmartMode ? (currentIndex / activeSession.length) * 100 : 0;

            return (
                <div className="flex flex-col h-full max-w-xl mx-auto w-full">
                    {/* Header mit Fortschritt - Abstände (mb) verringert, damit es hochrutscht */}
                    <div className="flex items-center justify-between mb-2">
                        <button onClick={() => setView('home')} className="p-2 -ml-2 text-slate-400 hover:text-slate-600"><X size={24} /></button>
                        <div className="text-sm font-medium text-slate-500">{progressText}</div>
                        <div className="w-6"></div> 
                    </div>
                    
                    {/* Fortschrittsbalken (nur im Test-Modus) - Abstand nach unten verringert */}
                    {!isSmartMode && <div className="w-full bg-slate-200 h-2 rounded-full mb-4"><div className="bg-indigo-600 h-2 rounded-full transition-all duration-300" style={{ width: `${progressPercent}%` }}></div></div>}
                    
                    {/* HIER WURDE DAS STACK LOOP BADGE ENTFERNT */}

                    {/* DIE KARTE */}
                    {/* min-h wurde von 400px auf 300px reduziert, damit sie kompakter startet */}
                    <div className="bg-white border-2 border-slate-100 rounded-3xl shadow-lg p-6 flex flex-col items-center justify-center min-h-[300px] relative transition-all">
                        
                        {/* Rang Anzeige oben rechts */}
                        <div className="absolute top-4 right-4 bg-slate-100 text-slate-400 text-xs px-2 py-1 rounded-md">Rank #{word.rank}</div>
                        {/* Box Anzeige oben links (nur Smart Mode) */}
                        {isSmartMode && userProgress[word.rank] && <div className="absolute top-4 left-4 bg-indigo-50 text-indigo-400 text-xs px-2 py-1 rounded-md flex items-center gap-1"><Layers size={10} /> Box {userProgress[word.rank].box}</div>}

                        {/* --- FRONT: FRANZÖSISCH --- */}
                        <div className="mb-4 text-center w-full">
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">French</div>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 break-words mb-4">{word.french}</h2>
                            
                            {/* Französischer Beispielsatz */}
                            {word.example_fr && (
                                <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl text-slate-600 italic text-lg leading-relaxed">
                                    "{word.example_fr}"
                                </div>
                            )}
                        </div>

                        {/* --- INTERAKTION --- */}
                        {!isFlipped ? (
                            /* ZUSTAND 1: Button zum Anzeigen */
                            <button 
                                onClick={() => setIsFlipped(true)} 
                                className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 flex items-center gap-2"
                            >
                                <BookOpen size={20} /> Show Translation
                            </button>
                        ) : (
                            /* ZUSTAND 2: Lösung + Buttons */
                            <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-300 flex flex-col items-center">
                                <div className="w-full h-px bg-slate-100 my-4"></div> {/* Trennlinie */}
                                
                                {/* ENGLISCH */}
                                <div className="text-center mb-6 w-full">
                                    <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">English</div>
                                    <h3 className="text-3xl font-bold text-indigo-600 mb-2">{word.english || word.german}</h3>
                                    
                                    {/* Englischer Beispielsatz */}
                                    {word.example_en && (
                                        <p className="text-indigo-400 italic">
                                            "{word.example_en}"
                                        </p>
                                    )}
                                </div>

                                {/* Bewertungs-Buttons */}
                                <div className="grid grid-cols-2 gap-3 w-full">
                                    <button onClick={() => handleResult(false)} className="bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 p-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors">
                                        <X size={20} /> Missed
                                    </button>
                                    <button onClick={() => handleResult(true)} className="bg-green-50 hover:bg-green-100 text-green-600 border border-green-200 p-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors">
                                        <Check size={20} /> Got it
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            );
        };

    const renderResults = () => (
        <div className="text-center max-w-md mx-auto py-10 animate-in zoom-in duration-300">
            <div className="inline-block p-6 bg-green-100 rounded-full mb-6"><BarChart3 size={48} className="text-green-600" /></div>
            <h2 className="text-3xl font-bold text-slate-800 mb-2">Session Finished!</h2>
            <p className="text-slate-500 mb-8">Here is your summary.</p>
            <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-green-50 p-6 rounded-2xl border border-green-100"><div className="text-3xl font-bold text-green-600">{sessionResults.correct}</div><div className="text-sm text-green-800">Correct</div></div>
                <div className="bg-red-50 p-6 rounded-2xl border border-red-100"><div className="text-3xl font-bold text-red-600">{sessionResults.wrong}</div><div className="text-sm text-red-800">Wrong (Repeats)</div></div>
            </div>
            <button onClick={() => setView('home')} className="bg-slate-900 text-white px-8 py-3 rounded-xl font-medium hover:bg-slate-800 transition-colors">Back to Home</button>
        </div>
    );

    const renderDataMgmt = () => (
        <div className="max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
                <button onClick={() => setView('home')} className="p-2 hover:bg-slate-100 rounded-full"><X size={20} className="text-slate-500" /></button>
                <h2 className="text-xl font-bold text-slate-800">Import Data</h2>
            </div>
            <p className="text-sm text-slate-500 mb-4">Paste your JSON list here. Format: <br/><code className="bg-slate-100 px-1 py-0.5 rounded text-xs break-all">[{`{"rank": 1, "french": "le", "english": "the"}`}, ...]</code></p>
            <form onSubmit={handleDataUpload}>
                <textarea name="jsonInput" className="w-full h-64 p-4 bg-slate-50 border border-slate-200 rounded-xl font-mono text-xs focus:ring-2 focus:ring-indigo-500 outline-none mb-4" placeholder='[{"rank": 1, "french": "le", "english": "the"}, ...]'></textarea>
                <button type="submit" className="flex items-center justify-center gap-2 w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors"><Save size={18} /> Save List & Overwrite</button>
            </form>
        </div>
    );
    const renderLearnedSection = () => {
        // Filtere die gelernten Wörter
        const learnedList = vocabulary.filter(w => userProgress[w.rank] && userProgress[w.rank].box > 0);
        // Sortiere sie nach Rang (optional)
        const sortedList = [...learnedList].sort((a, b) => a.rank - b.rank);

        return (
            <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-500">
                {/* Header */}
                <div className="flex items-center gap-3">
                    <button onClick={() => setView('home')} className="p-2 hover:bg-slate-100 rounded-full"><RotateCcw size={20} className="text-slate-500" /></button>
                    <h2 className="text-2xl font-bold text-slate-800">My Collection</h2>
                </div>

                {/* Stats Card */}
                <div className="bg-emerald-600 text-white p-6 rounded-3xl shadow-lg shadow-emerald-100 relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="text-emerald-100 font-medium mb-1">Total Words Learned</div>
                        <div className="text-5xl font-bold">{learnedList.length}</div>
                        <div className="mt-4 text-sm text-emerald-100 bg-emerald-700/30 inline-block px-3 py-1 rounded-full">
                            {((learnedList.length / 5000) * 100).toFixed(1)}% of top 5000
                        </div>
                    </div>
                    <BookCheck size={140} className="absolute -right-6 -bottom-8 opacity-20 rotate-12" />
                </div>

                {/* Review Config Section */}
                {learnedList.length > 0 ? (
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                        <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2">
                            <RotateCcw size={18} className="text-emerald-600" /> Review Session
                        </h3>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-slate-700 mb-2">How many words to review?</label>
                            <input 
                                type="range" 
                                min="5" 
                                max={Math.min(50, learnedList.length)} 
                                step="5" 
                                value={reviewCount} 
                                onChange={(e) => setReviewCount(parseInt(e.target.value))} 
                                className="w-full accent-emerald-600 h-12" 
                            />
                            <div className="flex justify-between mt-2 text-xs text-slate-400">
                                <span>5</span>
                                <span className="text-emerald-600 font-bold text-lg">{reviewCount} Words</span>
                                <span>{Math.min(50, learnedList.length)}</span>
                            </div>
                        </div>
                        <button onClick={startReviewSession} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white p-4 rounded-xl font-bold shadow-lg shadow-emerald-100 transition-all flex justify-center items-center gap-2">
                            <Play size={20} fill="currentColor" /> Start Random Review
                        </button>
                    </div>
                ) : (
                    <div className="text-center p-8 bg-slate-50 rounded-2xl border border-dashed border-slate-300 text-slate-500">
                        You haven't mastered any words yet! <br/>Start your Personal Training to fill this list.
                    </div>
                )}

                {/* Word List Preview (Die letzten 50 gelernten oder alle) */}
                {learnedList.length > 0 && (
                    <div className="space-y-3">
                        <h3 className="font-bold text-slate-700 px-1">Your Library (Top {Math.min(100, learnedList.length)})</h3>
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                            <div className="max-h-[400px] overflow-y-auto">
                                <table className="w-full text-left text-sm">
                                    <thead className="bg-slate-50 text-slate-500 sticky top-0">
                                        <tr>
                                            <th className="p-4 font-medium">Rank</th>
                                            <th className="p-4 font-medium">French</th>
                                            <th className="p-4 font-medium">English</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {sortedList.slice(0, 100).map(word => (
                                            <tr key={word.rank} className="hover:bg-slate-50">
                                                <td className="p-4 text-slate-400">#{word.rank}</td>
                                                <td className="p-4 font-bold text-slate-700">{word.french}</td>
                                                <td className="p-4 text-slate-600">{word.english || word.german}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {learnedList.length > 100 && <div className="p-3 text-center text-xs text-slate-400 bg-slate-50 border-t border-slate-100">...and {learnedList.length - 100} more</div>}
                        </div>
                    </div>
                )}
            </div>
        );
    };


    // Helper: Prüfen, ob wir gerade lernen (dann Menu ausblenden)
    const isSessionActive = ['smart-session', 'test-session', 'results'].includes(view);

    // Helper: Content basierend auf dem Tab rendern (wenn wir nicht in einer Session sind)
    const renderTabContent = () => {
        switch (view) {
            case 'home':
            case 'smart-config': // Config gehört logisch zum Home-Tab flow
            case 'test-config':
                return renderHome(); // Dein bestehendes Home, ggf. angepasst
            
            case 'library':
            case 'learned-section':
                // Hier könntest du renderLearnedSection() direkt aufrufen oder ein Untermenü bauen
                return renderLearnedSection(); 
            
            case 'stats':
                return (
                    <div className="text-center p-10 text-slate-500">
                        <BarChart3 size={48} className="mx-auto mb-4 opacity-50"/>
                        <h2 className="text-xl font-bold">Statistics</h2>
                        <p>Coming soon: Heatmaps & Detailed Graphs</p>
                    </div>
                );

            case 'settings':
            case 'data-mgmt':
                return renderDataMgmt(); // Oder ein erweitertes Settings-Menü
            
            default:
                return renderHome();
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col items-center">
            {/* Main Content Area */}
            {/* pb-24 sorgt dafür, dass Inhalt nicht hinter der Leiste verschwindet */}
            <div className={`w-full max-w-4xl p-4 md:p-8 ${!isSessionActive ? 'pb-24' : ''}`}>
                
                {/* Wenn Session aktiv -> Session Views zeigen */}
                {isSessionActive ? (
                    <>
                        {(view === 'smart-session' || view === 'test-session') && renderFlashcard()}
                        {view === 'results' && renderResults()}
                    </>
                ) : (
                    /* Sonst -> Tab Content zeigen */
                    <>
                        {/* Sonderfall: Config Screens sind "Full Screen" overlays im Home Tab */}
                        {view === 'smart-config' ? renderSmartConfig() : 
                         view === 'test-config' ? renderTestConfig() :
                         renderTabContent()}
                    </>
                )}
            </div>

            {/* Navigation Bar - Nur anzeigen wenn KEINE Session aktiv ist */}
            {!isSessionActive && (
                <BottomNav 
                    activeTab={['home', 'smart-config', 'test-config'].includes(view) ? 'home' : 
                               ['library', 'learned-section'].includes(view) ? 'library' : 
                               ['settings', 'data-mgmt'].includes(view) ? 'settings' : view}
                    onTabChange={(tabId) => {
                        // Reset auf die Hauptansicht des Tabs
                        if(tabId === 'library') setView('learned-section');
                        else if(tabId === 'settings') setView('data-mgmt');
                        else setView(tabId);
                    }} 
                />
            )}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);