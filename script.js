/* script.js */
const { useState, useEffect } = React;

// --- ICONS (Inline SVGs) ---
const Icon = ({ path, size = 24, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        {path}
    </svg>
);

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

// --- MOCK DATA ---
//const INITIAL_DATA = vocab_List;

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
    // NEU: rangeStart und rangeEnd hinzugefügt (Standard: 1 bis 5000)
    const [smartConfig, setSmartConfig] = useState({ sessionSize: 15, rangeStart: 1, rangeEnd: 5000 });

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
    const renderHome = () => {
        const ranges = [100, 500, 1000, 2000, 5000];
        return (
            <div className="space-y-6 animate-in fade-in duration-500 pb-12">
                <div className="text-center space-y-2 mt-4">
                    <h1 className="text-4xl font-bold text-slate-800 tracking-tight">Bonjour! 👋</h1>
                    <p className="text-slate-500">Your Frequency Learning Hub.</p>
                </div>
                <div className="bg-indigo-50 p-5 rounded-2xl border border-indigo-100 text-slate-700 space-y-2">
                    <h3 className="font-bold text-indigo-900 flex items-center gap-2">
                        <Info size={18} /> What is Frequency Based Learning?
                    </h3>
                    <p className="text-sm leading-relaxed">
                        Did you know that the top 2000 most frequent words cover about <strong>80% of daily conversation</strong>? 
                        This app teaches you these high-impact words first. We combine this with smart repetition to ensure you learn efficiently.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                    <button onClick={() => setView('smart-config')} className="group relative overflow-hidden bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white p-6 rounded-2xl shadow-md transition-all hover:scale-[1.01] flex items-center justify-between">
                        <div className="flex items-center gap-4 relative z-10">
                            <div className="bg-white/20 p-3 rounded-xl"><GraduationCap size={32} /></div>
                            <div className="text-left"><h2 className="text-xl font-bold">Personalized Training</h2><p className="text-indigo-100 text-sm">Smart loop based on your progress.</p></div>
                        </div>
                        <ChevronRight size={24} className="text-indigo-200" />
                        <GraduationCap size={120} className="absolute -right-6 -bottom-6 opacity-10 rotate-12" />
                    </button>
                    <button onClick={() => setView('test-config')} className="bg-white hover:bg-slate-50 active:bg-slate-100 border border-slate-200 text-slate-700 p-6 rounded-2xl transition-all flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="bg-amber-100 p-3 rounded-xl text-amber-600"><BookOpen size={24} /></div>
                            <div className="text-left"><div className="font-bold text-lg">Vocabulary Test</div><div className="text-slate-500 text-sm">Quick check without saving progress.</div></div>
                        </div>
                        <ChevronRight size={20} className="text-slate-300" />
                    </button>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                    <div className="flex items-center gap-2 mb-4 text-slate-800 font-bold text-lg"><PieChart className="text-indigo-500" size={20} /><h2>Frequency Mastery</h2></div>
                    <div className="space-y-4">
                        {ranges.map(range => {
                            const percentage = getStatsForRange(range);
                            return (
                                <div key={range} className="space-y-1">
                                    <div className="flex justify-between text-sm font-medium"><span className="text-slate-600">Top {range} Words</span><span className="text-indigo-600">{percentage}%</span></div>
                                    <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden"><div className="bg-indigo-500 h-full rounded-full transition-all duration-1000" style={{ width: `${percentage}%` }}></div></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="flex justify-center">
                    <button onClick={() => setView('data-mgmt')} className="text-slate-400 text-sm hover:text-slate-600 flex items-center gap-1"><Settings size={14} /> Manage Data / Import List</button>
                </div>
            </div>
        );
    };

    const renderSmartConfig = () => {
        // Definition der Bereiche für die Buttons (jetzt mit 2001-5000)
        const ranges = [
            { label: "All Words", start: 1, end: 5000 },
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

/* Ersetze die alte renderFlashcard Funktion hiermit: */

/* Ersetze die renderFlashcard Funktion hiermit: */
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

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 p-4 md:p-8 flex flex-col items-center">
            <div className="w-full max-w-4xl">
                {view === 'home' && renderHome()}
                {view === 'smart-config' && renderSmartConfig()}
                {(view === 'smart-session' || view === 'test-session') && renderFlashcard()}
                {view === 'test-config' && renderTestConfig()}
                {view === 'results' && renderResults()}
                {view === 'data-mgmt' && renderDataMgmt()}
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);