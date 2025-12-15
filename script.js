/* script.js */
const { useState, useEffect } = React;
/* script.js - Ganz oben */

// --- SUPABASE CONFIG ---
const SUPABASE_URL = 'https://cqokyipxnkohxzswvjrs.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxb2t5aXB4bmtvaHh6c3d2anJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU1MzQyMjYsImV4cCI6MjA4MTExMDIyNn0.BW3Lvdi5Hy4LwJ-IN4b1DcZL4NN3HxUTxA9Jl-1WULQ';

// Client erstellen (global verfügbar machen)
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

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
const PenTool = (p) => <Icon {...p} path={<><path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-17z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></>} />;
// Neue Icons für Topics
// Neue Icons für Topics (Korrigiert mit <>)
const Coffee = (p) => <Icon {...p} path={<><path d="M17 8h1a4 4 0 1 1 0 8h-1M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><path d="M6 2v2"/><path d="M10 2v2"/><path d="M14 2v2"/></>} />;
const PawPrint = (p) => <Icon {...p} path={<><path d="M12 2c.5 0 1 .4 1 1v3h-2V3c0-.6.5-1 1-1Z"/><path d="M18.5 4c.8 0 1.5.7 1.5 1.5v2.5h-3V5.5c0-.8.7-1.5 1.5-1.5Z"/><path d="M5.5 4C4.7 4 4 4.7 4 5.5v2.5h3V5.5C7 4.7 6.3 4 5.5 4Z"/><path d="M12 10a5 5 0 0 1 5 5v3a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3v-3a5 5 0 0 1 5-5Z"/></>} />;
const Car = (p) => <Icon {...p} path={<><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></>} />;
const Heart = (p) => <Icon {...p} path={<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>} />;
const Shirt = (p) => <Icon {...p} path={<path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"/>} />;
const Briefcase = (p) => <Icon {...p} path={<><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></>} />;
const Activity = (p) => <Icon {...p} path={<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>} />;
const Box = (p) => <Icon {...p} path={<><path d="M21 16.5A2.5 2.5 0 0 1 18.5 19H5.5A2.5 2.5 0 0 1 3 16.5v-5C3 10.1 4.1 9 5.5 9H18.5c1.4 0 2.5 1.1 2.5 2.5v5z"/><path d="M7.5 9V5.5A2.5 2.5 0 0 1 10 3h4a2.5 2.5 0 0 1 2.5 2.5V9"/></>} />;
const Palette = (p) => <Icon {...p} path={<><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></>} />;// --- MOCK DATA ---
const Sparkles = (p) => <Icon {...p} path={<><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"/></>} />;
const Volume2 = (p) => <Icon {...p} path={<><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></>} />;
const Trash2 = (p) => <Icon {...p} path={<><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></>} />;
const ArrowLeftRight = (p) => <Icon {...p} path={<><path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/></>} />;
const MessageSquare = (p) => <Icon {...p} path={<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>} />;
// Neue Icons für die 4-Tab Struktur (Korrigiert mit <>)
const Compass = (p) => <Icon {...p} path={<><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></>} />;
const Dumbbell = (p) => <Icon {...p} path={<><path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 4-4"/><path d="m2 6 4-4"/><path d="m3 10 7-7"/><path d="m14 21 7-7"/></>} />;
const Trophy = (p) => <Icon {...p} path={<><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></>} />;
const Flame = (p) => <Icon {...p} path={<><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></>} />;//const INITIAL_DATA = vocab_List;
const Crown = (p) => <Icon {...p} path={<><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/></>} />;
const Zap = (p) => <Icon {...p} path={<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>} />;
const Shield = (p) => <Icon {...p} path={<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>} />;
const Loader2 = (p) => <Icon {...p} path={<path d="M21 12a9 9 0 1 1-6.219-8.56" />} />;
const ArrowLeft = (p) => <Icon {...p} path={<><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></>} />;
const Gamepad2 = (p) => <Icon {...p} path={<><line x1="6" x2="10" y1="11" y2="11"/><line x1="8" x2="8" y1="9" y2="13"/><line x1="15" x2="15.01" y1="12" y2="12"/><line x1="18" x2="18.01" y1="10" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/></>} />;
const Medal = (p) => <Icon {...p} path={<><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></>} />;
const ArrowUp = (p) => <Icon {...p} path={<><path d="m18 15-6-6-6 6"/></>} />;
const ArrowDown = (p) => <Icon {...p} path={<><path d="m6 9 6 6 6-6"/></>} />;
const ArrowUpDown = (p) => <Icon {...p} path={<><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></>} />;
const Hash = (p) => <Icon {...p} path={<><line x1="4" x2="20" y1="9" y2="9"/><line x1="4" x2="20" y1="15" y2="15"/><line x1="10" x2="8" y1="3" y2="21"/><line x1="16" x2="14" y1="3" y2="21"/></>} />;
const Ghost = (p) => <Icon {...p} path={<><path d="M9 22a7 7 0 1 0 0-14h6a7 7 0 1 0 0 14z"/><path d="M9 22v-6.63a3.5 3.5 0 0 0-2.06-6.05"/><path d="M15 22v-6.63a3.5 3.5 0 0 0 2.06-6.05"/><circle cx="10" cy="12" r="1"/><circle cx="14" cy="12" r="1"/></>} />;
const Rocket = (p) => <Icon {...p} path={<><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.1 4-1 4-1s-1 2.4-4 4z"/><path d="M12 15v5s3.03-.55 4-2c1.1-1.62 1-4 1-4s-2.4 1-4 4z"/></>} />;
const Sword = (p) => <Icon {...p} path={<><polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/><line x1="13" x2="19" y1="19" y2="13"/><line x1="16" x2="20" y1="16" y2="20"/><line x1="19" x2="21" y1="21" y2="19"/></>} />;
const Newspaper = (p) => <Icon {...p} path={<><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></>} />;
const Smile = (p) => <Icon {...p} path={<><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" x2="9.01" y1="9" y2="9"/><line x1="15" x2="15.01" y1="9" y2="9"/></>} />;
const Image = (p) => <Icon {...p} path={<><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></>} />;
const Bookmark = (p) => <Icon {...p} path={<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>} />;
const Wifi = (p) => <Icon {...p} path={<><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" x2="12.01" y1="20" y2="20"/></>} />;
const WifiOff = (p) => <Icon {...p} path={<><line x1="1" x2="23" y1="1" y2="23"/><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/><path d="M10.71 5.05A16 16 0 0 1 22.58 9"/><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" x2="12.01" y1="20" y2="20"/></>} />;
const AlertCircle = (p) => <Icon {...p} path={<><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></>} />;
const Copy = (p) => <Icon {...p} path={<><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></>} />;

/* script.js - Oben bei den Icon Definitionen hinzufügen */

// Mapping von String-Namen zu echten Komponenten
const ICON_MAP = {
    "User": <User size={32} className="text-white"/>,
    "Crown": <Crown size={32} className="text-white"/>,
    "Coffee": <Coffee size={32} className="text-white"/>,
    "Sword": <Sword size={32} className="text-white"/>,
    "Sparkles": <Sparkles size={32} className="text-white"/>,
    "BookOpen": <BookOpen size={32} className="text-white"/>
};

// Helper Funktion um das Icon sicher zu holen
const getIcon = (iconName) => {
    return ICON_MAP[iconName] || <BookOpen size={32} className="text-white"/>; // Fallback
};


const BottomNav = ({ activeTab, onTabChange }) => {
    const tabs = [
        { id: 'home', label: 'Home', icon: <HomeIcon size={24} /> },
        { id: 'explore', label: 'Explore', icon: <Compass size={24} /> }, // Content & Themen
        { id: 'skills', label: 'Skills', icon: <Dumbbell size={24} /> }, // Grammatik & Tools
        { id: 'profile', label: 'Profile', icon: <User size={24} /> },
    ];

    return (
        <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-slate-200 px-6 pt-3 pb-2 pb-safe shadow-[0_-5px_20px_rgba(0,0,0,0.03)] z-50">
            <div className="flex justify-between items-center max-w-md mx-auto">
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.id;
                    return (
                        <button
                            key={tab.id}
                            onClick={() => onTabChange(tab.id)}
                            className={`flex flex-col items-center gap-1 min-w-[60px] rounded-xl transition-all active:scale-90 ${
                                isActive ? 'text-indigo-600 -translate-y-1' : 'text-slate-400 hover:text-slate-600'
                            }`}
                        >
                            {tab.icon}
                            <span className={`text-[10px] font-bold tracking-wide transition-opacity ${isActive ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                                {tab.label}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
// --- COLLECTION DATA ---
// Du musst hier nur die "ids" Arrays mit deinen Rank-Nummern füllen
const COLLECTIONS = {
    grammar: [
        { id: 'verbs', label: 'Top Verbs', sub: 'Actions & States', icon: <Activity size={20}/>, color: 'text-blue-600 bg-blue-50 border-blue-100', ids: [290, 413, 676, 1218, 1248, 1535, 1749, 1805, 1979, 1987, 2051, 2081, 2254, 2322, 2883, 2963, 3623, 3905, 4205, 4245, 4393, 4519, 4532, 4611, 4617, 4676, 4894, 4929, 1202, 1476, 1891, 1950, 2449, 2544, 2904, 2928, 3033, 3759, 3788, 4225, 4270, 4330, 4360, 4368, 4370, 4405, 4520, 4604, 4682, 4708, 4730, 4734, 4754, 4852, 4861, 4865, 521, 590, 686, 745, 1095, 1787, 1856, 2056, 2152, 2267, 2725, 3043, 3086, 3372, 3409, 3671, 3772, 3809, 3918, 4022, 4034, 4062, 4072, 4116, 4121, 4347, 4358, 4638] },
        { id: 'nouns', label: 'Top Nouns', sub: 'Objects & Things', icon: <Box size={20}/>, color: 'text-emerald-600 bg-emerald-50 border-emerald-100', ids: [370, 371, 383, 423, 452, 461, 465, 473, 478, 482, 485, 488, 489, 490, 492, 495, 496, 509, 516, 570, 576, 582, 602, 603, 604, 606, 608, 627, 634, 638, 692, 694, 720, 729, 746, 763, 765, 782, 783, 789, 799, 814, 825, 831, 836, 845, 855, 862, 882, 887, 898, 909, 913, 937, 941, 947, 952, 953, 956, 971, 972, 973, 976, 993, 995, 1005, 1006, 1016, 1030, 1036, 1050, 1057, 1073, 1074, 1075, 1076, 1079, 1083, 1085, 1094, 1096, 1139, 1157, 1158, 1159, 1162, 1165, 1174, 1179, 1180, 1182, 1192, 1195, 1199, 1204, 1211, 1215, 1237, 1247, 1250, 1263, 1266, 1278, 1279, 1286, 1298, 1299, 1312, 1324, 1330, 1342, 1345, 1350, 1351, 1352, 1386, 1388, 1402, 1421, 1428, 1432, 1437, 1440, 1464, 1467, 1469, 1494, 1496, 1505, 1512, 1513, 1522, 1525, 1528, 1555, 1558, 1561, 1568, 1570, 1571, 1572, 1573, 1578, 1583, 1587, 1598, 1602, 1607, 1609, 1613, 1617, 1623, 1624, 1626, 1632, 1636, 1638, 1641, 1644, 1649, 1651, 1655, 1656, 1657, 1659, 1662, 1667, 1668, 1669, 1671, 1680, 1685, 1687, 1688, 1693, 1694, 1697, 1698, 1699, 1700, 1707, 1716, 1717, 1723, 1726, 1735, 1741, 1745, 1747, 1752, 1754, 1755, 1756, 1757, 1758, 1761, 1771, 1773, 1776, 1779, 1785, 1788, 1789, 1790, 1791, 1793, 1795, 1799, 1803, 1804, 1806, 1809, 1817, 1818, 1819, 1821, 1822, 1824, 1825, 1826, 1830, 1832, 1834, 1835, 1837] },
        { id: 'adj', label: 'Adjectives', sub: 'Descriptions', icon: <Palette size={20}/>, color: 'text-purple-600 bg-purple-50 border-purple-100', ids: [893, 942, 1090, 1225, 1242, 1244, 1322, 1331, 1488, 1637, 1665, 1739, 1811, 2137, 2238, 2241, 2310, 2348, 2356, 2373, 2382, 2555, 2657, 2663, 2765, 2780, 2800, 2929, 2945, 2968, 2971, 2993, 2995, 3018, 3034, 3050, 3074, 3118, 3134, 3182, 3199, 3218, 3262, 3304, 3357, 3369, 3533, 3548, 3599, 3690, 3761, 3787, 3789, 3819, 3862, 3872, 3966, 4030, 4054, 4126, 4206, 4210, 4243, 4316, 4433, 4463, 4485, 4539, 4543, 4588, 4599, 4655, 4666, 4668, 4680, 4701, 4747, 4841, 4889] },
        { id: 'adv', label: 'Adverbs', sub: 'Modifications', icon: <Layers size={20}/>, color: 'text-amber-600 bg-amber-50 border-amber-100', ids: [150, 192, 193, 234, 284, 304, 361, 615,800, 857, 869, 1009, 1013, 1071, 1319, 1332, 1340,1543,1545,1550,1777,2010,, 2208, 2366,3039, 3349,341,481,805,1591,2036,2310,2362,2384,2491,2497,2637,2742,2990,3013,3058,3066,3170,3242,3594,3800,3902,4015,4267,4535,4550,4795,411,439,678,1025,1382,1504,1547,1710,1769,1965,2018,2055,2333,2363,2659,2767,3116,3394,3432,3538,3555,3739,3965,4057,4090,4252] },
    ],
    topics: [
        { id: 'animals', label: 'Animals', sub: 'Nature', icon: <PawPrint size={24}/>, ids: [1002, 1616, 1744, 2220, 2435, 2591, 2768, 3138, 3353, 3382, 3914, 3927, 4036, 4175, 4290, 4321, 4328, 4739, 4800, 4842, 4947] },
        { id: 'food', label: 'Food & Drink', sub: 'Gastronomy', icon: <Coffee size={24}/>, ids: [475, 896, 1616, 1886, 2167, 2285, 2309, 2340, 2365, 2393, 2465, 2507, 2580, 2618, 2625, 2685, 2692, 2724, 2802, 2845, 2847, 2855, 2948, 2979, 3012, 3117, 3152, 3258, 3265, 3356, 3470, 3517, 3520, 3562, 3641, 3719, 3912, 3914, 4036, 4112, 4175, 4222, 4276, 4321, 4475, 4556, 4563, 4748, 4845, 4983, 4992] },
        { id: 'body', label: 'The Body', sub: 'Anatomy', icon: <User size={24}/>, ids: [343, 414, 418, 474, 538, 563, 568, 626, 712, 1126, 1253, 1292, 1385, 1672, 1729, 1825, 1838, 1884, 1938, 1990, 2122, 2296, 2343, 2417, 2472, 2494, 2661, 2696, 2784, 2892, 2927, 2949, 2967, 3015, 3150, 3260, 3298, 3820, 3889, 3932, 4092, 4168, 4194, 4314, 4404, 4679, 4723, 4817] },
        { id: 'travel', label: 'Transport', sub: 'Travel', icon: <Car size={24}/>, ids: [232, 598, 609, 881, 935, 1287, 1304, 1409, 1416, 1531, 1959, 2113, 2407, 2542, 2581, 2978, 3101, 3452, 3692, 3777, 3794, 3848, 4027, 4216, 4235, 4454, 4494, 4594, 4697, 4814, 4821, 4881] },
        { id: 'family', label: 'Family', sub: 'People', icon: <Heart size={24}/>, ids: [126, 154, 172, 546, 569, 629, 645, 735, 1043, 1210, 1558, 1589, 1953, 2168, 2271, 2458, 2786, 3067, 3387, 3628, 3656, 3748, 3883, 3891, 3955, 4357] },
        { id: 'clothes', label: 'Clothing', sub: 'Fashion', icon: <Shirt size={24}/>, ids: [468, 965, 1940, 2383, 2864, 2908, 3437, 3638, 3746, 3892, 4462, 4538, 4670] },
        { id: 'prof', label: 'Professions', sub: 'Work', icon: <Briefcase size={24}/>, ids: [204, 268, 386, 457, 483, 640, 684, 688, 690, 762, 783, 827, 901, 909, 917, 1098, 1150, 1188, 1203, 1232, 1259, 1264, 1323, 1328, 1337, 1341, 1343, 1406, 1411, 1499, 1546, 1552, 1631, 1706, 1722, 1737, 1738, 1789, 1797, 1861, 1876, 1924, 1957, 1961, 2039, 2049, 2089, 2100, 2101, 2119, 2176, 2183, 2201, 2233, 2248, 2276, 2307, 2404, 2415, 2430, 2436, 2443, 2461, 2523, 2587, 2645, 2741, 2768, 2824, 2848, 2906, 2928, 2954, 2963, 2981, 2995, 3003, 3042, 3048, 3072, 3081, 3085, 3100, 3118, 3163, 3167, 3189, 3223, 3241, 3251, 3262, 3283, 3327, 3350, 3371, 3446, 3494, 3503, 3518, 3630, 3745, 3767, 3886, 4052, 4131, 4261, 4282, 4346, 4430, 4422, 4463, 4787, 4309, 4253, 827, 640, 1264] },
    ]
};
// --- HELPER: IRREGULAR VERBS MAP ---
// Mappt konjugierte Formen auf den Infinitiv (der in deiner Liste steht)
const IRREGULAR_MAP = {
    "suis": "être", "es": "être", "est": "être", "sommes": "être", "êtes": "être", "sont": "être", "été": "être", "était": "être", "fut": "être", "serai": "être",
    "ai": "avoir", "as": "avoir", "a": "avoir", "avons": "avoir", "avez": "avoir", "ont": "avoir", "eu": "avoir", "avait": "avoir", "aura": "avoir",
    "vais": "aller", "vas": "aller", "va": "aller", "allons": "aller", "allez": "aller", "vont": "aller", "ira": "aller",
    "fais": "faire", "fait": "faire", "font": "faire", "ferai": "faire",
    "peux": "pouvoir", "peut": "pouvoir", "pu": "pouvoir", "pourrai": "pouvoir",
    "veux": "vouloir", "veut": "vouloir", "voulu": "vouloir", "voudrai": "vouloir",
    "sais": "savoir", "sait": "savoir", "su": "savoir", "saurai": "savoir",
    "vois": "voir", "voit": "voir", "vu": "voir", "verrai": "voir",
    "dois": "devoir", "doit": "devoir", "dû": "devoir",
    "dis": "dire", "dit": "dire", "dites": "dire"
};
// --- TOPIC HUB CONTENT ---
const TOPIC_CONTENT = {
    animals: {
        idioms: [
            { fr: "Il fait un temps de chien", en: "The weather is awful (lit. dog weather)" },
            { fr: "Avoir un chat dans la gorge", en: "To have a frog in one's throat (lit. cat)" },
            { fr: "Poser un lapin", en: "To stand someone up (lit. to place a rabbit)" }
        ],
        story: {
            title: "Visite au Zoo",
            text: "Aujourd'hui, nous allons au zoo. Le lion dort sous un arbre, mais les singes jouent. J'aime regarder les grands éléphants. C'est une belle journée.",
            en: "Today we are going to the zoo. The lion sleeps under a tree, but the monkeys are playing. I like watching the big elephants. It is a beautiful day."
        },
        roleplay: {
            title: "My Favorite Pet",
            desc: "Tell the AI about your dog or cat. What is its name? What does it like to eat?"
        }
    },
    food: {
        idioms: [
            { fr: "C'est la fin des haricots", en: "It's the last straw (lit. end of the beans)" },
            { fr: "Raconter des salades", en: "To tell lies (lit. to tell salads)" },
            { fr: "Occupe-toi de tes oignons", en: "Mind your own business (lit. your onions)" }
        ],
        story: {
            title: "Au Restaurant",
            text: "Je voudrais réserver une table pour deux personnes. Le menu est délicieux. Je prends un steak avec des frites et un verre de vin rouge. L'addition, s'il vous plaît !",
            en: "I would like to reserve a table for two. The menu is delicious. I'll have a steak with fries and a glass of red wine. The check, please!"
        },
        roleplay: {
            title: "Ordering Dinner",
            desc: "You are at a bistro in Paris. Order a 3-course meal and ask for the bill."
        }
    }
};
// --- AUTH COMPONENT ---
/* script.js - Ersetze die alte AuthScreen Komponente hiermit */

/* script.js - AuthScreen Update */
/* script.js - AuthScreen Update mit Reset-Funktion */
/* script.js - Complete AuthScreen */
/* script.js - AuthScreen (Final Fix) */
const AuthScreen = ({ onLoginSuccess, isEmbedded = false, initialMode = 'login' }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    
    // Initialer State basierend auf Prop, aber danach unabhängig
    const [isSignUp, setIsSignUp] = useState(initialMode === 'signup');
    const [isResetMode, setIsResetMode] = useState(false);
    const [msg, setMsg] = useState(null);

    // Wenn sich der initialMode von außen ändert (z.B. durch Wizard-Buttons), State updaten
    useEffect(() => {
        setIsSignUp(initialMode === 'signup');
    }, [initialMode]);

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMsg(null);
        const { error } = await supabase.auth.resetPasswordForEmail(email, { redirectTo: window.location.href });
        if (error) setMsg({ type: 'error', text: error.message });
        else {
            setMsg({ type: 'success', text: 'Check your emails!' });
            setTimeout(() => setIsResetMode(false), 5000);
        }
        setLoading(false);
    };

    const handleAuth = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMsg(null);

        if (isSignUp && password !== confirmPassword) {
            setMsg({ type: 'error', text: "Passwords do not match!" });
            setLoading(false);
            return;
        }

        try {
            if (isSignUp) {
                const { error } = await supabase.auth.signUp({ email, password });
                if (error) throw error;
                setMsg({ type: 'success', text: 'Account created! Logging in...' });
            } else {
                const { error } = await supabase.auth.signInWithPassword({ email, password });
                if (error) throw error;
            }
            if (onLoginSuccess) onLoginSuccess();
        } catch (error) {
            setMsg({ type: 'error', text: error.message });
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleLogin = async () => {
        setLoading(true);
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: { redirectTo: window.location.href }
        });
        if (error) setMsg({ type: 'error', text: error.message });
    };

    return (
        <div className={`w-full px-4 flex flex-col items-center justify-center ${isEmbedded ? 'py-0' : 'pt-10 pb-24 min-h-[60vh]'}`}>
            <div className={`bg-white w-full max-w-sm text-center ${isEmbedded ? '' : 'p-8 rounded-[2.5rem] shadow-xl border border-slate-100'}`}>
                
                {!isEmbedded && (
                    <>
                        <div className="bg-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-indigo-600">
                            {isResetMode ? <RotateCcw size={32}/> : <User size={32} />}
                        </div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-1">
                            {isResetMode ? 'Reset Password' : (isSignUp ? 'Create Account' : 'Welcome Back')}
                        </h2>
                        <p className="text-slate-400 text-sm mb-6">
                            {isResetMode ? 'Enter email to receive link' : (isSignUp ? 'Start your journey today' : 'Sync your progress')}
                        </p>
                    </>
                )}

                {msg && <div className={`p-3 rounded-xl text-sm mb-4 ${msg.type === 'error' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>{msg.text}</div>}

                {isResetMode ? (
                    <form onSubmit={handlePasswordReset} className="space-y-4">
                        <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-indigo-500 transition-colors" required />
                        <button type="submit" disabled={loading} className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold shadow-lg active:scale-95 transition-all disabled:opacity-50">
                            {loading ? <Loader2 size={24} className="animate-spin mx-auto"/> : 'Send Magic Link'}
                        </button>
                        <button type="button" onClick={() => { setIsResetMode(false); setMsg(null); }} className="text-indigo-600 font-bold hover:underline text-sm block mx-auto mt-4">Back to Login</button>
                    </form>
                ) : (
                    <>
                        <button onClick={handleGoogleLogin} disabled={loading} className="w-full py-3 mb-6 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold shadow-sm hover:bg-slate-50 transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50">
                            {/* HIER IST DAS GOOGLE ICON WIEDER: */}
                            <svg className="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.12c-.22-.66-.35-1.36-.35-2.12s.13-1.46.35-2.12V7.04H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.96l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.04l3.66 2.84c.87-2.6 3.3-4.5 6.16-4.5z" fill="#EA4335"/></svg>
                            Continue with Google
                        </button>
                        
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-px bg-slate-200 flex-1"></div><span className="text-xs text-slate-400 font-bold uppercase">Or with Email</span><div className="h-px bg-slate-200 flex-1"></div>
                        </div>

                        <form onSubmit={handleAuth} className="space-y-3">
                            <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-indigo-500 transition-colors" required />
                            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-indigo-500 transition-colors" required />
                            {isSignUp && <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-indigo-500 transition-colors animate-in fade-in slide-in-from-top-2" required />}
                            <button type="submit" disabled={loading} className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-200 active:scale-95 transition-all disabled:opacity-50">
                                {loading ? <Loader2 size={24} className="animate-spin mx-auto"/> : (isSignUp ? 'Sign Up' : 'Login')}
                            </button>
                        </form>

                        <div className="mt-4 pt-4 border-t border-slate-100 space-y-3">
                            <p className="text-slate-400 text-sm">
                                {isSignUp ? "Already have an account?" : "Don't have an account?"} 
                                <button onClick={() => { setIsSignUp(!isSignUp); setMsg(null); }} className="text-indigo-600 font-bold hover:underline ml-1">
                                    {isSignUp ? 'Login' : 'Sign Up'}
                                </button>
                            </p>
                            {!isSignUp && <button onClick={() => { setIsResetMode(true); setMsg(null); }} className="text-slate-400 text-xs hover:text-slate-600 hover:underline block mx-auto">Forgot Password?</button>}
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};
/* script.js - UpdatePasswordScreen mit Bestätigung */
const UpdatePasswordScreen = ({ onComplete }) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState(''); // NEU
    const [loading, setLoading] = useState(false);
    const [msg, setMsg] = useState(null); // Für Fehler/Erfolg

    const handleUpdate = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMsg(null);

        // 1. Validierung: Übereinstimmung
        if (password !== confirmPassword) {
            setMsg({ type: 'error', text: "Passwords do not match!" });
            setLoading(false);
            return;
        }

        // 2. Validierung: Länge (Supabase verlangt meist min 6)
        if (password.length < 6) {
            setMsg({ type: 'error', text: "Password must be at least 6 characters." });
            setLoading(false);
            return;
        }
        
        // 3. Update an Supabase senden
        const { error } = await supabase.auth.updateUser({ password: password });

        if (error) {
            setMsg({ type: 'error', text: error.message });
            setLoading(false);
        } else {
            setMsg({ type: 'success', text: "Password updated successfully!" });
            // Kurze Verzögerung, damit der User die Erfolgsmeldung sieht
            setTimeout(() => {
                onComplete(); // Zurück zur App
            }, 1500);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
            <div className="bg-white w-full max-w-sm p-8 rounded-[2.5rem] shadow-xl text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-indigo-600">
                    <Shield size={32} />
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Set New Password</h2>
                <p className="text-slate-400 text-sm mb-6">Please enter your new secure password.</p>

                {/* Feedback Meldung */}
                {msg && (
                    <div className={`p-3 rounded-xl text-sm mb-4 ${msg.type === 'error' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                        {msg.text}
                    </div>
                )}

                <form onSubmit={handleUpdate} className="space-y-4">
                    <input 
                        type="password" 
                        placeholder="New Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-indigo-500 transition-colors"
                        required
                        minLength={6}
                    />
                    
                    {/* NEU: Confirm Password Feld */}
                    <input 
                        type="password" 
                        placeholder="Confirm Password" 
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-indigo-500 transition-colors animate-in fade-in slide-in-from-top-2"
                        required
                        minLength={6}
                    />

                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold shadow-lg active:scale-95 transition-all disabled:opacity-50"
                    >
                        {loading ? <Loader2 size={24} className="animate-spin mx-auto"/> : 'Update Password'}
                    </button>
                </form>
            </div>
        </div>
    );
};

// --- JOKE DATABASE (Local & Offline) ---
// --- LOCAL JOKES DATABASE ---
const JOKE_DB = [
    { 
        q: "Que fait un chien qui entre dans une pharmacie ?", 
        a: "Il demande du 'sirop' (six os) !", 
        en: "He asks for 'syrup' (sounds like 'six bones')!" 
    },
    { 
        q: "Pourquoi les plongeurs plongent-ils toujours en arrière ?", 
        a: "Parce que sinon ils tombent dans le bateau.", 
        en: "Because otherwise they fall into the boat." 
    },
    { 
        q: "C'est l'histoire d'un pingouin qui respire par les fesses.", 
        a: "Un jour il s'assoit et il meurt.", 
        en: "One day he sits down and dies." 
    },
    { 
        q: "Quel est le comble pour un électricien ?", 
        a: "De ne pas être au courant.", 
        en: "To not be 'current' (aware/informed)." 
    },
    { 
        q: "Que dit une imprimante dans l'eau ?", 
        a: "J'ai papier peur !", 
        en: "I have 'paper' fear! (Sounds like 'J'ai pas pied' - I can't touch bottom)." 
    },
    { 
        q: "Comment appelle-t-on un chien magicien ?", 
        a: "Un abracadabrador.", 
        en: "A labracadabrador." 
    },
    { 
        q: "Deux œufs discutent. L'un dit : 'Pourquoi tu es tout vert ?'", 
        a: "L'autre répond : 'Parce que je suis kiwi !'", 
        en: "The other says: 'Because I'm a kiwi!' (Sounds like 'cuit, oui' - cooked, yes)." 
    },
    { 
        q: "Qu'est-ce qu'une baguette avec une boussole ?", 
        a: "Du pain perdu.", 
        en: "Lost bread (French toast)." 
    },
    { 
        q: "Pourquoi les Français mangent-ils des escargots ?", 
        a: "Parce qu'ils n'aiment pas le fast-food.", 
        en: "Because they don't like fast food." 
    }
];
// --- GRAMMAR DATA ---
const GRAMMAR_MODULES = [
    { 
        id: 'a1', 
        title: 'Level A1', 
        sub: 'The Absolute Basics', 
        icon: <Box size={24}/>, 
        color: 'bg-blue-50 text-blue-600',
        topics: [
            // BASICS (1-6)
            { id: "a1_01", title: "Nouns & Gender", desc: "Masculine vs Feminine recognition", category: "Basics" },
            { id: "a1_02", title: "Definite Articles", desc: "Le, la, l', les (The)" },
            { id: "a1_03", title: "Indefinite Articles", desc: "Un, une, des (A/Some)" },
            { id: "a1_04", title: "Subject Pronouns", desc: "Je, tu, il, elle, on, nous, vous, ils" },
            { id: "a1_05", title: "Être (to be)", desc: "Present tense conjugation" },
            { id: "a1_06", title: "Avoir (to have)", desc: "Present tense conjugation" },
            
            // NUMBERS & TIME (7-10)
            { id: "a1_07", title: "Numbers 0-30", desc: "Counting basics", category: "Numbers & Time" },
            { id: "a1_08", title: "Numbers 31-100", desc: "Higher numbers & patterns" },
            { id: "a1_09", title: "Days & Months", desc: "Weekdays, months, seasons" },
            { id: "a1_10", title: "Telling Time", desc: "Quelle heure est-il?" },
            
            // FIRST VERBS (11-17)
            { id: "a1_11", title: "Regular -ER Verbs", desc: "Parler, manger, aimer", category: "First Verbs" },
            { id: "a1_12", title: "Regular -IR Verbs", desc: "Finir, choisir (Group 2)" },
            { id: "a1_13", title: "Regular -RE Verbs", desc: "Vendre, attendre (Group 3)" },
            { id: "a1_14", title: "Aller (to go)", desc: "Irregular essential verb" },
            { id: "a1_15", title: "Faire (to do/make)", desc: "Irregular essential verb" },
            { id: "a1_16", title: "Venir & Prendre", desc: "Common irregular verbs" },
            { id: "a1_17", title: "Pouvoir, Vouloir, Devoir", desc: "Modal verbs (can, want, must)" },
            
            // SENTENCE STRUCTURE (18-22)
            { id: "a1_18", title: "Negation", desc: "The ne...pas sandwich", category: "Sentence Structure" },
            { id: "a1_19", title: "Asking Questions", desc: "Est-ce que & Intonation" },
            { id: "a1_20", title: "Question Words", desc: "Qui, quoi, où, quand, comment, pourquoi" },
            { id: "a1_21", title: "Word Order", desc: "Basic French sentence structure" },
            { id: "a1_22", title: "C'est vs Il est", desc: "The #1 beginner mistake" },
            
            // DESCRIPTIONS (23-27)
            { id: "a1_23", title: "Basic Adjectives", desc: "Grand, petit, beau, nouveau...", category: "Descriptions" },
            { id: "a1_24", title: "Adjective Agreement", desc: "Gender & plural matching" },
            { id: "a1_25", title: "Adjective Placement", desc: "Before or after the noun?" },
            { id: "a1_26", title: "Possessive Adjectives", desc: "Mon, ma, mes, ton, ta, tes..." },
            { id: "a1_27", title: "Colors & Shapes", desc: "Basic descriptive vocabulary" },
            
            // MORE GRAMMAR (28-32)
            { id: "a1_28", title: "Prepositions of Place", desc: "À, en, dans, chez, sur, sous", category: "More Grammar" },
            { id: "a1_29", title: "Partitive Articles", desc: "Du, de la, de l', des (some/any)" },
            { id: "a1_30", title: "Demonstratives", desc: "Ce, cet, cette, ces (this/that)" },
            { id: "a1_31", title: "Basic Adverbs", desc: "Très, bien, mal, vite, souvent" },
            { id: "a1_32", title: "Passé Composé Intro", desc: "Introduction to past tense (avoir)" }
        ]
    },
    { 
        id: 'a2', 
        title: 'Level A2', 
        sub: 'Elementary', 
        icon: <Compass size={24}/>, 
        color: 'bg-sky-50 text-sky-600',
        topics: [
            // PAST TENSES (1-5)
            { id: "a2_01", title: "Passé Composé (Avoir)", desc: "Past tense with 'have'", category: "Past Tenses" },
            { id: "a2_02", title: "Passé Composé (Être)", desc: "DR MRS VANDERTRAMP verbs" },
            { id: "a2_03", title: "Reflexive Verbs", desc: "Se laver, se lever (Daily Routine)" },
            { id: "a2_04", title: "L'Imparfait", desc: "Describing the past / Habits" },
            { id: "a2_05", title: "Imparfait vs Passé Composé", desc: "When to use which" },
            
            // FUTURE (6-7)
            { id: "a2_06", title: "Futur Proche", desc: "Going to... (Aller + Infinitif)", category: "Future" },
            { id: "a2_07", title: "Futur Simple", desc: "Will... (Future endings)" },
            
            // PRONOUNS (8-11)
            { id: "a2_08", title: "Direct Object Pronouns", desc: "le, la, les (COD)", category: "Pronouns" },
            { id: "a2_09", title: "Indirect Object Pronouns", desc: "lui, leur (COI)" },
            { id: "a2_10", title: "Pronoun Y", desc: "Replacing places (J'y vais)" },
            { id: "a2_11", title: "Pronoun EN", desc: "Replacing quantities (J'en veux)" },
            
            // SENTENCE STRUCTURE (12-15)
            { id: "a2_12", title: "Double Pronouns", desc: "Order: me le, te la, lui en...", category: "Sentence Structure" },
            { id: "a2_13", title: "Imperative Mood", desc: "Commands (Mange! Allons-y!)" },
            { id: "a2_14", title: "Negative Expressions", desc: "Ne...jamais, rien, plus, personne" },
            { id: "a2_15", title: "Relative Pronouns", desc: "Qui, que, où, dont" },
            
            // COMPARISONS & MORE (16-18)
            { id: "a2_16", title: "Comparatives", desc: "Plus...que, moins...que, aussi...que", category: "Comparisons & More" },
            { id: "a2_17", title: "Superlatives", desc: "Le plus, le moins, le meilleur" },
            { id: "a2_18", title: "Since & For (Depuis)", desc: "Expressing duration" }
        ] 
    },
    { 
        id: 'b1', 
        title: 'Level B1', 
        sub: 'Intermediate', 
        icon: <Layers size={24}/>, 
        color: 'bg-emerald-50 text-emerald-600',
        topics: [
            // PRONOUNS & REFERENCE (1-3)
            { id: "b1_01", title: "Pronouns Y & EN Combined", desc: "Advanced usage & combinations", category: "Pronouns & Reference" },
            { id: "b1_02", title: "Relative Pronouns (Qui, Que, Où)", desc: "Connecting clauses" },
            { id: "b1_03", title: "Relative Pronoun DONT", desc: "The tricky one (whose, of which)" },
            
            // SUBJUNCTIVE (4-6)
            { id: "b1_04", title: "Subjonctif Formation", desc: "How to form it", category: "Subjunctive" },
            { id: "b1_05", title: "Subjonctif with Necessity", desc: "Il faut que, Il est nécessaire que" },
            { id: "b1_06", title: "Subjonctif with Emotions", desc: "Je suis content que, J'ai peur que" },
            
            // CONDITIONAL & HYPOTHESIS (7-9)
            { id: "b1_07", title: "Conditional Present", desc: "Je voudrais, J'aimerais (Politeness)", category: "Conditional & Hypothesis" },
            { id: "b1_08", title: "Si-Clauses (Type 1)", desc: "Si + Présent → Futur" },
            { id: "b1_09", title: "Si-Clauses (Type 2)", desc: "Si + Imparfait → Conditionnel" },
            
            // ADVANCED PAST (10-12)
            { id: "b1_10", title: "Plus-que-parfait", desc: "Had done (Past of the past)", category: "Advanced Past" },
            { id: "b1_11", title: "Passive Voice", desc: "Être + Past Participle" },
            { id: "b1_12", title: "Le Gérondif", desc: "While doing... (En + participe présent)" },
            
            // COMPLEX SENTENCES (13-15)
            { id: "b1_13", title: "Reported Speech (Basics)", desc: "Il dit que... Elle demande si...", category: "Complex Sentences" },
            { id: "b1_14", title: "Cause & Consequence", desc: "Parce que, puisque, donc, alors" },
            { id: "b1_15", title: "Concession & Opposition", desc: "Bien que, malgré, pourtant" }
        ] 
    },
    { 
        id: 'b2', 
        title: 'Level B2', 
        sub: 'Upper Intermediate', 
        icon: <Crown size={24}/>, 
        color: 'bg-purple-50 text-purple-600',
        topics: [
            // ADVANCED HYPOTHESIS (1-3)
            { id: "b2_01", title: "Si-Clauses (Type 3)", desc: "Si + Plus-que-parfait → Cond. Passé", category: "Advanced Hypothesis" },
            { id: "b2_02", title: "Conditional Past", desc: "J'aurais dû, J'aurais aimé (Regrets)" },
            { id: "b2_03", title: "Mixed Conditionals", desc: "Combining different time frames" },
            
            // ADVANCED SUBJUNCTIVE (4-6)
            { id: "b2_04", title: "Subjonctif Past", desc: "Que j'aie fait, qu'il soit parti", category: "Advanced Subjunctive" },
            { id: "b2_05", title: "Subjonctif vs Indicatif", desc: "Nuances: Espérer, penser, croire" },
            { id: "b2_06", title: "Subjonctif with Conjunctions", desc: "Avant que, pour que, bien que" },
            
            // STYLE & NUANCE (7-9)
            { id: "b2_07", title: "Emphasis (Mise en relief)", desc: "C'est moi qui..., Ce que je veux...", category: "Style & Nuance" },
            { id: "b2_08", title: "Reported Speech (Advanced)", desc: "Sequence of tenses (Concordance)" },
            { id: "b2_09", title: "Participe Présent vs Gérondif", desc: "Subtle differences" },
            
            // LITERARY & FORMAL (10-12)
            { id: "b2_10", title: "Passé Simple", desc: "Literary past (for reading)", category: "Literary & Formal" },
            { id: "b2_11", title: "Future Perfect", desc: "J'aurai terminé (Will have done)" },
            { id: "b2_12", title: "Advanced Connectors", desc: "Néanmoins, toutefois, d'ailleurs" }
        ] 
    }
];
// --- NEWS SOURCES ---


/* script.js - Ersetzt LITERATURE_DATA */



// --- NEW COMPONENTS ---
// --- NEW COMPONENTS ---
/* script.js - Einfügen nach JOKE_DB */

const LIBRARY_CONTENT = {
    books: [
        {
            id: 'lupin',
            type: 'book',
            title: "Arsène Lupin",
            author: "Maurice Leblanc",
            coverColor: "bg-indigo-900",
            icon: "User", 
            chapters: [
            {
                    title: "1. L'Arrestation d'Arsène Lupin",
                    // Hier fügst du den Text ein, den wir schon hatten
                    simple: `... (Text hier) ...`, 
                    advanced: `... (Text hier) ...`,
                    original: `L’étrange voyage ! Il avait si bien commencé cependant ! Pour ma part, je n’en fis jamais qui s’annonçât sous de plus heureux auspices. La Provence est un transatlantique rapide, confortable, commandé par le plus affable des hommes. La société la plus choisie s’y trouvait réunie. Des relations se formaient, des divertissements s’organisaient. Nous avions cette impression exquise d’être séparés du monde, réduits à nous-mêmes comme sur une île inconnue, obligés, par conséquent, de nous rapprocher les uns des autres.

Et nous nous rapprochions…

Avez-vous jamais songé à ce qu’il y a d’original et d’imprévu dans ce groupement d’êtres qui, la veille encore, ne se connaissaient pas, et qui, durant quelques jours, entre le ciel infini et la mer immense, vont vivre de la vie la plus intime, ensemble vont défier les colères de l’Océan, l’assaut terrifiant des vagues, la méchanceté des tempêtes et le calme sournois de l’eau endormie ?

C’est, au fond, vécue en une sorte de raccourci tragique, la vie elle-même, avec ses orages et ses grandeurs, sa monotonie et sa diversité, et voilà pourquoi, peut-être, on goûte avec une hâte fiévreuse et une volupté d’autant plus intense ce court voyage dont on aperçoit la fin au moment même où il commence.

Mais, depuis plusieurs années, quelque chose se passe qui ajoute singulièrement aux émotions de la traversée. La petite île flottante dépend encore de ce monde dont on se croyait affranchi. Un lien subsiste, qui ne se dénoue que peu à peu en plein Océan, et peu à peu, en plein Océan, se renoue. Le télégraphe sans fil ! appel d’un autre univers d’où l’on recevrait des nouvelles de la façon la plus mystérieuse qui soit ! L’imagination n’a plus la ressource d’évoquer des fils de fer au creux desquels glisse l’invisible message. Le mystère est plus insondable encore, plus poétique aussi, et c’est aux ailes du vent qu’il faut recourir pour expliquer ce nouveau miracle.

Ainsi, les premières heures, nous sentîmes-nous suivis, escortés, précédés même par cette voix lointaine, qui, de temps en temps, chuchotait à l’un de nous quelques paroles de là-bas. Deux amis me parlèrent. Dix autres, vingt autres nous envoyèrent à tous, au travers de l’espace, leurs adieux attristés ou souriants.

Or, le second jour, à cinq cents milles des côtes françaises, par une après-midi orageuse, le télégraphe sans fil nous transmettait une dépêche dont voici la teneur :

« Arsène Lupin à votre bord, première classe, cheveux blonds, blessure avant-bras droit, voyage seul, sous le nom de R… »

À ce moment précis, un coup de tonnerre violent éclata dans le ciel sombre. Les ondes électriques furent interrompues. Le reste de la dépêche ne nous parvint pas. Du nom sous lequel se cachait Arsène Lupin, on ne sut que l’initiale.

Il se fût agi de toute autre nouvelle, je ne doute point que le secret en eût été scrupuleusement gardé par les employés du poste télégraphique, ainsi que par le commissaire du bord et par le commandant. Mais il est de ces événements qui semblent forcer la discrétion la plus rigoureuse. Le jour même, sans qu’on pût dire comment la chose avait été ébruitée, nous savions tous que le fameux Arsène Lupin se cachait parmi nous.

Arsène Lupin parmi nous ! l’insaisissable cambrioleur dont on racontait les prouesses dans tous les journaux depuis des mois ! l’énigmatique personnage avec qui le vieux Ganimard, notre meilleur policier, avait engagé ce duel à mort dont les péripéties se déroulaient de façon si pittoresque ! Arsène Lupin, le fantaisiste gentleman qui n’opère que dans les châteaux et les salons, et qui, une nuit, où il avait pénétré chez le baron Schormann, en était parti les mains vides et avait laissé sa carte, ornée de cette formule : « Arsène Lupin, gentleman-cambrioleur, reviendra quand les meubles seront authentiques ». Arsène Lupin, l’homme aux mille déguisements : tour à tour chauffeur, ténor, bookmaker, fils de famille, adolescent, vieillard, commis-voyageur marseillais, médecin russe, torero espagnol !

Qu’on se rende bien compte de ceci : Arsène Lupin allant et venant dans le cadre relativement restreint d’un transatlantique, que dis-je ! dans ce petit coin des premières où l’on se retrouvait à tout instant, dans cette salle à manger, dans ce salon, dans ce fumoir ! Arsène Lupin, c’était peut-être ce monsieur… ou celui-là… mon voisin de table… mon compagnon de cabine…

— Et cela va durer encore cinq fois vingt-quatre heures ! s’écria le lendemain miss Nelly Underdown, mais c’est intolérable ! J’espère bien qu’on va l’arrêter.

Et s’adressant à moi :

— Voyons, vous, monsieur d’Andrézy, qui êtes déjà au mieux avec le commandant, vous ne savez rien ?

J’aurais bien voulu savoir quelque chose pour plaire à miss Nelly ! C’était une de ces magnifiques créatures qui, partout où elles sont, occupent aussitôt la place la plus en vue. Leur beauté autant que leur fortune éblouit. Elles ont une cour, des fervents, des enthousiastes.

Élevée à Paris par une mère française, elle rejoignait son père, le richissime Underdown, de Chicago. Une de ses amies, lady Jerland, l’accompagnait.

Dès la première heure, j’avais posé ma candidature de flirt. Mais, dans l’intimité rapide du voyage, tout de suite son charme m’avait troublé, et je me sentais un peu trop ému pour un flirt quand ses grands yeux noirs rencontraient les miens. Cependant elle accueillait mes hommages avec une certaine faveur. Elle daignait rire de mes bons mots et s’intéresser à mes anecdotes. Une vague sympathie semblait répondre à l’empressement que je lui témoignais.

Un seul rival peut-être m’eût inquiété, un assez beau garçon, élégant, réservé, dont elle paraissait quelquefois préférer l’humeur taciturne à mes façons plus « en dehors » de Parisien.

Il faisait justement partie du groupe d’admirateurs qui entourait miss Nelly, lorsqu’elle m’interrogea. Nous étions sur le pont, agréablement installés dans des rocking-chairs. L’orage de la veille avait éclairci le ciel. L’heure était délicieuse.

— Je ne sais rien de précis, mademoiselle, lui répondis-je, mais est-il impossible de conduire nous-mêmes notre enquête, tout aussi bien que le ferait le vieux Ganimard, l’ennemi personnel d’Arsène Lupin ?

— Oh ! oh ! vous vous avancez beaucoup !

— En quoi donc ? Le problème est-il si compliqué ?

— Très compliqué.

— C’est que vous oubliez les éléments que nous avons pour le résoudre.

— Quels éléments ?

— 1o Lupin se fait appeler monsieur R…

— Signalement un peu vague.

— 2o Il voyage seul.

— Si cette particularité vous suffit !

— 3o Il est blond.

— Et alors ?

— Alors nous n’avons plus qu’à consulter la liste des passagers et à procéder par élimination.

J’avais cette liste dans ma poche. Je la pris et la parcourus.

— Je note d’abord qu’il n’y a que treize personnes que leur initiale désigne à notre attention.

— Treize seulement ?

— En première classe, oui. Sur ces treize messieurs R…, comme vous pouvez vous en assurer, neuf sont accompagnés de femmes, d’enfants ou de domestiques. Restent quatre personnages isolés : le marquis de Raverdan…

— Secrétaire d’ambassade, interrompit miss Nelly, je le connais.

— Le major Rawson…

— C’est mon oncle, dit quelqu’un.

— M. Rivolta…

— Présent, s’écria l’un de nous, un Italien dont la figure disparaissait sous une barbe du plus beau noir.

Miss Nelly éclata de rire.

— Monsieur n’est pas précisément blond.

— Alors, repris-je, nous sommes obligés de conclure que le coupable est le dernier de la liste.

— C’est-à-dire ?

— C’est-à-dire, M. Rozaine. Quelqu’un connaît-il M. Rozaine ?

On se tut. Mais miss Nelly, interpellant le jeune homme taciturne dont l’assiduité près d’elle me tourmentait, lui dit :

— Eh bien, monsieur Rozaine, vous ne répondez pas ?

On tourna les yeux vers lui. Il était blond.

Avouons-le, je sentis comme un petit choc au fond de moi. Et le silence gêné qui pesa sur nous m’indiqua que les autres assistants éprouvaient aussi cette sorte de suffocation. C’était absurde d’ailleurs, car enfin rien dans les allures de ce monsieur ne permettait qu’on le suspectât.

— Pourquoi je ne réponds pas ? dit-il, mais parce que, vu mon nom, ma qualité de voyageur isolé et la couleur de mes cheveux, j’ai déjà procédé à une enquête analogue, et que je suis arrivé au même résultat. Je suis donc d’avis qu’on m’arrête.

Il avait un drôle d’air, en prononçant ces paroles. Ses lèvres minces comme deux traits inflexibles s’amincirent encore et pâlirent. Des filets de sang strièrent ses yeux.

Certes, il plaisantait. Pourtant sa physionomie, son attitude nous impressionnèrent. Naïvement, miss Nelly demanda :

— Mais vous n’avez pas de blessure ?

— Il est vrai, dit-il, la blessure manque.

D’un geste nerveux il releva sa manchette et découvrit son bras. Mais aussitôt une idée me frappa. Mes yeux croisèrent ceux de miss Nelly : il avait montré le bras gauche.

Et ma foi, j’allais en faire nettement la remarque, quand un incident détourna notre attention. Lady Jerland, l’amie de miss Nelly, arrivait en courant.

Elle était bouleversée. On s’empressa autour d’elle, et ce n’est qu’après bien des efforts qu’elle réussit à balbutier :

— Mes bijoux, mes perles !… on a tout pris !…

Non, on n’avait pas tout pris, comme nous le sûmes par la suite ; chose bien plus curieuse : on avait choisi !

De l’étoile en diamants, du pendentif en cabochons de rubis, des colliers et des bracelets brisés, on avait enlevé, non point les pierres les plus grosses, mais les plus fines, les plus précieuses, celles, aurait-on dit, qui avaient le plus de valeur tout en tenant le moins de place. Les montures gisaient là, sur la table. Je les vis, tous nous les vîmes, dépouillées de leurs joyaux comme des fleurs dont on eût arraché les beaux pétales étincelants et colorés.

Et pour exécuter ce travail, il avait fallu, pendant l’heure où lady Jerland prenait le thé, il avait fallu, en plein jour, et dans un couloir fréquenté, fracturer la porte de la cabine, trouver un petit sac dissimulé à dessein au fond d’un carton à chapeau, l’ouvrir et choisir !

Il n’y eut qu’un cri parmi nous. Il n’y eut qu’une opinion parmi tous les passagers, lorsque le vol fut connu : c’est Arsène Lupin. Et de fait, c’était bien sa manière compliquée, mystérieuse, inconcevable… et logique cependant, car s’il était difficile de recéler la masse encombrante qu’eût formée l’ensemble des bijoux, combien moindre était l’embarras avec de petites choses indépendantes les unes des autres, perles, émeraudes et saphirs.

Et au dîner, il se passa ceci : à droite et à gauche de Rozaine, les deux places restèrent vides. Et le soir on sut qu’il avait été convoqué par le commandant.

Son arrestation, que personne ne mit en doute, causa un véritable soulagement. On respirait enfin. Ce soir-là on joua aux petits jeux. On dansa. Miss Nelly, surtout, montra une gaieté étourdissante qui me fit voir que, si les hommages de Rozaine avaient pu lui agréer au début, elle ne s’en souvenait guère. Sa grâce acheva de me conquérir. Vers minuit, à la clarté sereine de la lune, je lui affirmai mon dévouement avec une émotion qui ne parut pas lui déplaire.

Mais le lendemain, à la stupeur générale, on apprit que, les charges relevées contre lui n’étant pas suffisantes, Rozaine était libre.

Fils d’un négociant considérable de Bordeaux, il avait exhibé des papiers parfaitement en règle. En outre, ses bras n’offraient pas la moindre trace de blessure.

— Des papiers ! des actes de naissance ! s’écrièrent les ennemis de Rozaine, mais Arsène Lupin vous en fournira tant que vous voudrez ! Quant à la blessure, c’est qu’il n’en a pas reçu… ou qu’il en a effacé la trace !

On leur objectait qu’à l’heure du vol, Rozaine — c’était démontré — se promenait sur le pont. À quoi ils ripostaient :

— Est-ce qu’un homme de la trempe d’Arsène Lupin a besoin d’assister au vol qu’il commet ?

Et puis, en dehors de toute considération étrangère, il y avait un point sur lequel les plus sceptiques ne pouvaient épiloguer : Qui, sauf Rozaine, voyageait seul, était blond, et portait un nom commençant par R ? Qui le télégramme désignait-il, si ce n’était Rozaine ?

Et quand Rozaine, quelques minutes avant le déjeuner, se dirigea audacieusement vers notre groupe, miss Nelly et lady Jerland se levèrent et s’éloignèrent.

C’était bel et bien de la peur.

Une heure plus tard, une circulaire manuscrite passait de main en main parmi les employés du bord, les matelots, les voyageurs de toutes classes : M. Louis Rozaine promettait une somme de dix mille francs à qui démasquerait Arsène Lupin, ou trouverait le possesseur des pierres dérobées.

— Et si personne ne me vient en aide contre ce bandit, déclara Rozaine au commandant, moi, je lui ferai son affaire.

Rozaine contre Arsène Lupin, ou plutôt, selon le mot qui courut, Arsène Lupin lui-même contre Arsène Lupin, la lutte ne manquait pas d’intérêt !

Elle se prolongea durant deux journées. On vit Rozaine errer de droite et de gauche, se mêler au personnel, interroger, fureter. On aperçut son ombre, la nuit, qui rôdait.

De son côté, le commandant déploya l’énergie la plus active. Du haut en bas, en tous les coins, la Provence fut fouillée. On perquisitionna dans toutes les cabines, sans exception, sous le prétexte fort juste que les objets étaient cachés dans n’importe quel endroit, sauf dans la cabine du coupable.

— On finira bien par découvrir quelque chose, n’est-ce pas ? me demandait miss Nelly. Tout sorcier qu’il soit, il ne peut faire que des diamants et des perles deviennent invisibles.

— Mais si, lui répondais-je, ou alors il faudrait explorer la coiffe de nos chapeaux, la doublure de nos vestes, et tout ce que nous portons sur nous.

Et lui montrant mon kodak, un 9 × 12 avec lequel je ne me lassais pas de la photographier dans les attitudes les plus diverses :

— Rien que dans un appareil pas plus grand que celui-ci, ne pensez-vous pas qu’il y aurait place pour toutes les pierres précieuses de lady Jerland ? On affecte de prendre des vues et le tour est joué.

— Mais cependant j’ai entendu dire qu’il n’y a point de voleur qui ne laisse derrière lui un indice quelconque.

— Il y en a un : Arsène Lupin.

— Pourquoi ?

— Pourquoi ? parce qu’il ne pense pas seulement au vol qu’il commet, mais à toutes les circonstances qui pourraient le dénoncer.

— Au début, vous étiez plus confiant.

— Mais, depuis, je l’ai vu à l’œuvre.

— Et alors, selon vous ?

— Selon moi, on perd son temps.

Et de fait, les investigations ne donnaient aucun résultat, ou du moins, celui qu’elles donnèrent ne correspondait pas à l’effort général : la montre du commandant lui fut volée.

Furieux, il redoubla d’ardeur et surveilla de plus près encore Rozaine avec qui il avait eu plusieurs entrevues. Le lendemain, ironie charmante, on retrouvait la montre parmi les faux-cols du commandant en second.

Tout cela avait un air de prodige, et dénonçait bien la manière humoristique d’Arsène Lupin, cambrioleur, soit, mais dilettante aussi. Il travaillait par goût et par vocation, certes, mais par amusement aussi. Il donnait l’impression du monsieur qui se divertit à la pièce qu’il fait jouer, et qui, dans la coulisse, rit à gorge déployée de ses traits d’esprit et des situations qu’il imagina.

Décidément, c’était un artiste en son genre, et quand j’observais Rozaine, sombre et opiniâtre, et que je songeais au double rôle que tenait sans doute ce curieux personnage, je ne pouvais en parler sans une certaine admiration.

Or, l’avant-dernière nuit, l’officier de quart entendit des gémissements à l’endroit le plus obscur du pont. Il s’approcha. Un homme était étendu, la tête enveloppée dans une écharpe grise très épaisse, les poignets ficelés à l’aide d’une fine cordelette.

On le délivra de ses liens. On le releva, des soins lui furent prodigués.

Cet homme, c’était Rozaine.

C’était Rozaine assailli au cours d’une de ses expéditions, terrassé et dépouillé. Une carte de visite fixée par une épingle à son vêtement portait ces mots : « Arsène Lupin accepte avec reconnaissance les dix mille francs de M. Rozaine. »

En réalité, le portefeuille dérobé contenait vingt billets de mille.

Naturellement, on accusa le malheureux d’avoir simulé cette attaque contre lui-même. Mais, outre qu’il lui eût été impossible de se lier de cette façon, il fut établi que l’écriture de la carte différait absolument de l’écriture de Rozaine, et ressemblait au contraire, à s’y méprendre, à celle d’Arsène Lupin, telle que la reproduisait un ancien journal trouvé à bord.

Ainsi donc, Rozaine n’était plus Arsène Lupin. Rozaine était Rozaine, fils d’un négociant de Bordeaux ! Et la présence d’Arsène Lupin s’affirmait une fois de plus, et par quel acte redoutable !

Ce fut la terreur. On n’osa plus rester seul dans sa cabine, et pas davantage s’aventurer seul aux endroits trop écartés. Prudemment on se groupait entre gens sûrs les uns des autres. Et encore, une défiance instinctive divisait les plus intimes. C’est que la menace ne provenait pas d’un individu isolé, surveillé, et par là même moins dangereux. Arsène Lupin, maintenant, c’était… c’était tout le monde. Notre imagination surexcitée lui attribuait un pouvoir miraculeux et illimité. On le supposait capable de prendre les déguisements les plus inattendus, d’être tour à tour le respectable major Rawson, ou le noble marquis de Raverdan, ou même, car on ne s’arrêtait plus à l’initiale accusatrice, ou même telle ou telle personne connue de tous, ayant femme, enfants, domestiques.

Les premières dépêches sans fil n’apportèrent aucune nouvelle. Du moins le commandant ne nous en fit point part, et un tel silence n’était pas pour nous rassurer.

Aussi, le dernier jour parut-il interminable. On vivait dans l’attente anxieuse d’un malheur. Cette fois, ce ne serait plus un vol, ce ne serait plus une simple agression, ce serait le crime, le meurtre. On n’admettait pas qu’Arsène Lupin s’en tînt à ces deux larcins insignifiants. Maître absolu du navire, les autorités réduites à l’impuissance, il n’avait qu’à vouloir, tout lui était permis, il disposait des biens et des existences.

Heures délicieuses pour moi, je l’avoue, car elles me valurent la confiance de miss Nelly. Impressionnée par tant d’événements, de nature déjà inquiète, elle chercha spontanément à mes côtés une protection, une sécurité que j’étais heureux de lui offrir.

Au fond, je bénissais Arsène Lupin. N’était-ce pas lui qui nous rapprochait ? N’était-ce pas grâce à lui que j’avais le droit de m’abandonner aux plus beaux rêves ? Rêves d’amour et rêves moins chimériques, pourquoi ne pas le confesser ? Les Andrézy sont de bonne souche poitevine, mais leur blason est quelque peu dédoré, et il ne me paraît pas indigne d’un gentilhomme de songer à rendre à son nom le lustre perdu.

Et ces rêves, je le sentais, n’offusquaient point Nelly. Ses yeux souriants m’autorisaient à les faire. La douceur de sa voix me disait d’espérer.

Et jusqu’au dernier moment, accoudés aux bastingages, nous restâmes l’un près de l’autre, tandis que la ligne des côtes américaines voguait au-devant de nous.

On avait interrompu les perquisitions. On attendait. Depuis les premières jusqu’à l’entrepont où grouillaient les émigrants, on attendait la minute suprême où s’expliquerait enfin l’insoluble énigme. Qui était Arsène Lupin ? Sous quel nom, sous quel masque se cachait le fameux Arsène Lupin ?

Et cette minute suprême arriva. Dussé-je vivre cent ans, je n’en oublierai pas le plus infime détail.

— Comme vous êtes pâle, miss Nelly, dis-je à ma compagne qui s’appuyait à mon bras, toute défaillante.

— Et vous ! me répondit-elle, ah ! vous êtes si changé !

— Songez donc ! cette minute est passionnante, et je suis si heureux de la vivre auprès de vous, miss Nelly. Il me semble que votre souvenir s’attardera quelquefois…

Elle n’écoutait pas, haletante et fiévreuse. La passerelle s’abattit. Mais avant que nous eûmes la liberté de la franchir, des gens montèrent à bord, des douaniers, des hommes en uniforme, des facteurs.

Miss Nelly balbutia :

— On s’apercevrait qu’Arsène Lupin s’est échappé pendant la traversée que je n’en serais pas surprise.

— Il a peut-être préféré la mort au déshonneur, et plonger dans l’Atlantique plutôt que d’être arrêté.

— Ne riez pas, fit-elle, agacée.

Soudain je tressaillis, et comme elle me questionnait, je lui dis :

— Vous voyez ce vieux petit homme debout à l’extrémité de la passerelle ?

— Avec un parapluie et une redingote vert-olive ?

— C’est Ganimard.

— Ganimard ?

— Oui, le célèbre policier, celui qui a juré qu’Arsène Lupin serait arrêté de sa propre main. Ah ! je comprends que l’on n’ait pas eu de renseignements de ce côté de l’Océan. Ganimard était là ! et il aime bien que personne ne s’occupe de ses petites affaires.

— Alors Arsène Lupin est sûr d’être pris ?

— Qui sait ? Ganimard ne l’a jamais vu, paraît-il, que grimé et déguisé. À moins qu’il ne connaisse son nom d’emprunt…

— Ah ! dit-elle, avec cette curiosité un peu cruelle de la femme, si je pouvais assister à l’arrestation !

— Patientons. Certainement Arsène Lupin a déjà remarqué la présence de son ennemi. Il préférera sortir parmi les derniers, quand l’œil du vieux sera fatigué.

Le débarquement commença. Appuyé sur son parapluie, l’air indifférent, Ganimard ne semblait pas prêter attention à la foule qui se pressait entre les deux balustrades. Je notai qu’un officier du bord, posté derrière lui, le renseignait de temps à autre.

Le marquis de Raverdan, le major Rawson, l’Italien Rivolta, défilèrent, et d’autres, et beaucoup d’autres… Et j’aperçus Rozaine qui s’approchait.

Pauvre Rozaine ! il ne paraissait pas remis de ses mésaventures !

— C’est peut-être lui tout de même, me dit miss Nelly… Qu’en pensez-vous ?

— Je pense qu’il serait fort intéressant d’avoir sur une même photographie Ganimard et Rozaine. Prenez donc mon appareil, je suis si chargé.

Je le lui donnai, mais trop tard pour qu’elle s’en servît. Rozaine passait. L’officier se pencha à l’oreille de Ganimard, celui-ci haussa légèrement les épaules, et Rozaine passa.

Mais alors, mon Dieu, qui était Arsène Lupin ?

— Oui, fit-elle à haute voix, qui est-ce ?

Il n’y avait plus qu’une vingtaine de personnes. Elle les observait tour à tour, avec la crainte confuse qu’il ne fût pas, lui, au nombre de ces vingt personnes.

Je lui dis :

— Nous ne pouvons attendre plus longtemps.

Elle s’avança. Je la suivis. Mais nous n’avions pas fait dix pas que Ganimard nous barra le passage.

— Eh bien, quoi ? m’écriai-je.

— Un instant, monsieur, qui vous presse ?

— J’accompagne mademoiselle.

— Un instant, répéta-t-il d’une voix plus impérieuse.

Il me dévisagea profondément, puis il me dit, les yeux dans les yeux :

— Arsène Lupin, n’est-ce pas ?

Je me mis à rire.

— Non, Bernard d’Andrézy, tout simplement.

— Bernard d’Andrézy est mort il y a trois ans en Macédoine.

— Si Bernard d’Andrézy était mort, je ne serais plus de ce monde. Et ce n’est pas le cas. Voici mes papiers.

— Ce sont les siens. Comment les avez-vous, c’est ce que j’aurai le plaisir de vous expliquer.

— Mais vous êtes fou ! Arsène Lupin s’est embarqué sous le nom de R.

— Oui, encore un truc de vous, une fausse piste sur laquelle vous les avez lancés, là-bas. Ah ! vous êtes d’une jolie force, mon gaillard. Mais cette fois, la chance a tourné. Voyons, Lupin, montrez-vous beau joueur.

J’hésitai une seconde. D’un coup sec, il me frappa sur l’avant-bras droit. Je poussai un cri de douleur. Il avait frappé sur la blessure encore mal fermée que signalait le télégramme.

Allons, il fallait se résigner. Je me tournai vers miss Nelly. Elle écoutait, livide, chancelante.

Son regard rencontra le mien, puis s’abaissa sur le kodak que je lui avais remis. Elle fit un geste brusque, et j’eus l’impression, j’eus la certitude qu’elle comprenait tout à coup. Oui, c’était là, entre les parois étroites de chagrin noir, au creux du petit objet que j’avais eu la précaution de déposer entre ses mains avant que Ganimard ne m’arrêtât, c’était bien là que se trouvaient les vingt mille francs de Rozaine, les perles et les diamants de lady Jerland.

Ah ! je le jure, à ce moment solennel, alors que Ganimard et deux de ses acolytes m’entouraient, tout me fut indifférent, mon arrestation, l’hostilité des gens, tout, hors ceci : la résolution qu’allait prendre miss Nelly au sujet de ce que je lui avais confié.

Que l’on eût contre moi cette preuve matérielle et décisive, je ne songeais même pas à le redouter, mais cette preuve, miss Nelly se déciderait-elle à la fournir ?

Serais-je trahi par elle ? perdu par elle ? Agirait-elle en ennemie qui ne pardonne pas, ou bien en femme qui se souvient et dont le mépris s’adoucit d’un peu d’indulgence, d’un peu de sympathie involontaire ?

Elle passa devant moi, je la saluai très bas, sans un mot. Mêlée aux autres voyageurs, elle se dirigea vers la passerelle, mon kodak à la main.

Sans doute, pensai-je, elle n’ose pas, en public. C’est dans une heure, dans un instant, qu’elle le donnera.

Mais, arrivée au milieu de la passerelle, par un mouvement de maladresse simulée, elle le laissa tomber dans l’eau, entre le mur du quai et le flanc du navire.

Puis, je la vis s’éloigner.

Sa jolie silhouette se perdit dans la foule, m’apparut de nouveau et disparut. C’était fini, fini pour jamais.

Un instant, je restai immobile, triste à la fois et pénétré d’un doux attendrissement, puis je soupirai, au grand étonnement de Ganimard :

— Dommage, tout de même, de ne pas être un honnête homme…

C’est ainsi qu’un soir d’hiver, Arsène Lupin me raconta l’histoire de son arrestation. Le hasard d’incidents dont j’écrirai quelque jour le récit avait noué entre nous des liens… dirai-je d’amitié ? Oui, j’ose croire qu’Arsène Lupin m’honore de quelque amitié, et que c’est par amitié qu’il arrive parfois chez moi à l’improviste, apportant, dans le silence de mon cabinet de travail, sa gaieté juvénile, le rayonnement de sa vie ardente, sa belle humeur d’homme pour qui la destinée n’a que faveurs et sourires.

Son portrait ? Comment pourrais-je le faire ? Vingt fois j’ai vu Arsène Lupin, et vingt fois c’est un être différent qui m’est apparu… ou plutôt le même être dont vingt miroirs m’auraient renvoyé autant d’images déformées, chacune ayant ses yeux particuliers, sa forme spéciale de figure, son geste propre, sa silhouette et son caractère.

— Moi-même, me dit-il, je ne sais plus bien qui je suis. Dans une glace je ne me reconnais plus.

Boutade, certes, et paradoxe, mais vérité à l’égard de ceux qui le rencontrent et qui ignorent ses ressources infinies, sa patience, son art du maquillage, sa prodigieuse faculté de transformer jusqu’aux proportions de son visage, et d’altérer le rapport même de ses traits entre eux.

— Pourquoi, dit-il encore, aurais-je une apparence définie ? Pourquoi ne pas éviter ce danger d’une personnalité toujours identique ? Mes actes me désignent suffisamment.

Et il précise avec une pointe d’orgueil :

— Tant mieux si l’on ne peut jamais dire en toute certitude : Voici Arsène Lupin. L’essentiel est qu’on dise sans crainte d’erreur : Arsène Lupin a fait cela.



Ce sont quelques-uns de ces actes, quelques-unes de ces aventures que j’essaie de reconstituer, d’après les confidences dont il eut la bonne grâce de me favoriser, certains soirs d’hiver, dans le silence de mon cabinet de travail…`
                },
                {
                    title: "2. Arsène Lupin en prison",
                    simple: "Coming soon...", 
                    advanced: "Coming soon...",
                    original: "Text folgt..." 
                },
                {
                    title: "3. L'Évasion d'Arsène Lupin",
                    simple: "Coming soon...", 
                    advanced: "Coming soon...",
                    original: "Text folgt..." 
                },
                {
                    title: "4. Le Mystérieux Voyageur",
                    simple: "Coming soon...", 
                    advanced: "Coming soon...",
                    original: "Text folgt..." 
                },
                {
                    title: "5. Le Collier de la Reine",
                    simple: "Coming soon...", 
                    advanced: "Coming soon...",
                    original: "Text folgt..." 
                },
                {
                    title: "6. Le Sept de Cœur",
                    simple: "Coming soon...", 
                    advanced: "Coming soon...",
                    original: "Text folgt..." 
                },
                {
                    title: "7. Le Coffre-fort de Madame Imbert",
                    simple: "Coming soon...", 
                    advanced: "Coming soon...",
                    original: "Text folgt..." 
                },
                {
                    title: "8. La Perle Noire",
                    simple: "Coming soon...", 
                    advanced: "Coming soon...",
                    original: "Text folgt..." 
                },
                {
                    title: "9. Herlock Sholmès arrive trop tard",
                    simple: "Coming soon...", 
                    advanced: "Coming soon...",
                    original: "Text folgt..." 
                }

            ]
        },
        {
            id: 'prince',
            type: 'book',
            title: "Le Petit Prince",
            author: "Antoine de Saint-Exupéry",
            coverColor: "bg-sky-600",
            icon: "Crown",
            chapters: [
                {
                    title: "Le Dessin",
                    simple: "Quand j'avais six ans, j'ai vu une image magnifique. C'était un serpent qui mangeait un animal. J'ai fait un dessin, mais les grands n'ont pas compris.",
                    advanced: "À l'âge de six ans, j'ai vu une image extraordinaire dans un livre sur la forêt vierge. Elle représentait un serpent boa qui avalait un fauve.",
                    original: "Lorsque j'avais six ans j'ai vu, une fois, une magnifique image, dans un livre sur la Forêt Vierge qui s'appelait 'Histoires Vécues'."
                }
            ]
        }
    ],
    culture: [
        {
            id: 'crepes',
            type: 'recipe',
            title: "La Crêpe Française",
            author: "Recette Traditionnelle",
            coverColor: "bg-amber-500",
            icon: "Coffee",
            chapters: [
                {
                    title: "1. Les Ingrédients (Ingredients)",
                    simple: `Pour 4 personnes, il faut :\n- 250g de farine (flour)\n- 4 œufs (eggs)\n- 500ml de lait (milk)\n- 1 pincée de sel (salt)\n- 2 cuillères de sucre (sugar)\n- 50g de beurre (butter)\n\nC'est tout ! C'est très facile et pas cher.`,
                    advanced: `Voici ce qu'il vous faut pour environ 15 crêpes :\n- 250g de farine de blé type 55\n- 4 œufs entiers de plein air\n- un demi-litre de lait demi-écrémé\n- 1 sachet de sucre vanillé pour le goût\n- une pincée de sel fin\n- 50g de beurre fondu pour la cuisson.\n\nVous pouvez aussi ajouter un peu de rhum ou de fleur d'oranger pour parfumer la pâte.`,
                    original: `La composition de la pâte à crêpes classique requiert des produits de qualité :\n- 250g de farine tamisée\n- 4 gros œufs frais\n- 50 cl de lait entier\n- 1 pincée de sel\n- 2 cuillères à soupe de sucre semoule\n- 50g de beurre noisette\n- Optionnel : Un zeste de citron ou une cuillère de Rhum ambré.\n\nLe secret réside dans la température des ingrédients : ils doivent tous être à température ambiante.`
                },
                {
                    title: "2. La Préparation (The Batter)",
                    simple: "1. Mettez la farine dans un grand bol.\n2. Ajoutez les œufs et le sel.\n3. Mélangez doucement.\n4. Ajoutez le lait petit à petit.\n5. Mélangez bien pour ne pas avoir de morceaux.\n6. Ajoutez le sucre et le beurre fondu.\n7. Laissez reposer une heure au frigo.",
                    advanced: "Dans un saladier, versez la farine et formez un puits (un trou) au milieu. Cassez les œufs dans ce puits. Commencez à mélanger doucement avec un fouet en partant du centre. Incorporez le lait progressivement pour éviter la formation de grumeaux (lumps). Une fois la pâte lisse, ajoutez le beurre fondu et le parfum de votre choix. Il est conseillé de laisser reposer la pâte pendant une heure.",
                    original: "Disposer la farine en fontaine dans une terrine. Y verser les œufs, le sucre, le sel et le beurre fondu (ou noisette). Travailler énergiquement la pâte au fouet ou à la spatule en bois. Mouiller progressivement avec le lait jusqu'à l'obtention d'un ruban lisse et homogène. La pâte doit avoir la consistance d'une crème liquide. Couvrir d'un linge et laisser reposer la pâte (l'appareil) une à deux heures à température ambiante pour permettre au gluten de se détendre."
                },
                {
                    title: "3. La Cuisson (Cooking)",
                    simple: "Chauffez une poêle. Mettez un peu de beurre. Versez une louche de pâte. Tournez la poêle pour étaler la pâte. Attendez une minute. Retournez la crêpe. Attendez encore une minute. C'est prêt ! Mangez avec du sucre ou du chocolat.",
                    advanced: "Faites chauffer une poêle antiadhésive à feu moyen. Graissez la poêle avec un papier absorbant imbibé d'huile ou de beurre. Versez une louche de pâte et faites un mouvement de rotation du poignet pour répartir la pâte uniformément. Lorsque les bords se décollent et dorent, retournez la crêpe avec une spatule. Laissez cuire l'autre face quelques secondes.",
                    original: "Saisir la crêpe dans une poêle très chaude ou sur une billig (plaque bretonne) légèrement graissée au saindoux ou au beurre clarifié. Verser l'appareil et l'étaler rapidement à l'aide d'un rozell (râteau en bois) si vous en avez un. La crêpe doit être fine comme de la dentelle. Retourner dès qu'elle est dorée (« kraz » en breton). Servir immédiatement, saupoudrée de sucre."
                }
            ]
        },
        {
            id: 'napoleon',
            type: 'bio',
            title: "Napoléon Bonaparte",
            author: "Figure Historique",
            coverColor: "bg-red-700",
            icon: "Sword",
            chapters: [
                {
                    title: "L'Empereur",
                    simple: "Napoléon est né en Corse. Il était très fort à l'école militaire. Il est devenu Empereur des Français et a changé l'Europe.",
                    advanced: "Né à Ajaccio, Napoléon Bonaparte a gravi les échelons militaires rapidement durant la Révolution. Son génie stratégique est légendaire.",
                    original: "Napoléon Ier, né le 15 août 1769 à Ajaccio et mort le 5 mai 1821 sur l'île Sainte-Hélène, est le premier empereur des Français."
                }
            ]
        }
    ],
    phrases: [
        {
            id: 'restaurant',
            type: 'phrase',
            title: "Au Restaurant",
            author: "Survival French",
            coverColor: "bg-emerald-600",
            icon: "Coffee",
            chapters: [
                {
                    title: "Commander",
                    simple: "Je voudrais de l'eau. / L'addition s'il vous plaît. / C'est délicieux.",
                    advanced: "Pourrais-je avoir la carte ? / Je vais prendre le menu du jour. / Est-ce que le service est compris ?",
                    original: "Garçon, nous sommes prêts à commander. Pour commencer, nous prendrons une douzaine d'huîtres et le vin blanc sec."
                }
            ]
        }
    ]
};
// Merge grammar data: A1, A2, B1, B2 from separate files
const getMergedGrammarData = () => {
    const merged = {};
    // First add all from original GRAMMAR_DATA (fallback)
    if (typeof GRAMMAR_DATA !== 'undefined') {
        Object.assign(merged, GRAMMAR_DATA);
    }
    // Then override/add A1 topics from GRAMMAR_DATA_A1
    if (typeof GRAMMAR_DATA_A1 !== 'undefined') {
        Object.assign(merged, GRAMMAR_DATA_A1);
    }
    // Then override/add A2 topics from GRAMMAR_DATA_A2
    if (typeof GRAMMAR_DATA_A2 !== 'undefined') {
        Object.assign(merged, GRAMMAR_DATA_A2);
    }
    // Then override/add B1 topics from GRAMMAR_DATA_B1
    if (typeof GRAMMAR_DATA_B1 !== 'undefined') {
        Object.assign(merged, GRAMMAR_DATA_B1);
    }
    // Then override/add B2 topics from GRAMMAR_DATA_B2
    if (typeof GRAMMAR_DATA_B2 !== 'undefined') {
        Object.assign(merged, GRAMMAR_DATA_B2);
    }
    return merged;
};
// --- READER COMPONENT (Ausgelagert) ---
const BookReader = ({ currentStory, pageIndex, setPageIndex, saveProgress, setView, setReaderMode, speak, stopAudio, vocabulary, clickedWord, setClickedWord, loadingTranslation, setLoadingTranslation }) => {
    
    // Lokaler State für Audio
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [aiExamples, setAiExamples] = useState(null);

    // Audio Helper
    const toggleAudio = (text) => {
        if (isSpeaking) {
            stopAudio();
            setIsSpeaking(false);
        } else {
            setIsSpeaking(true);
            const cleanText = text.replace(/[*_#]/g, ""); 
            speak(cleanText);
        }
    };

    // Word Click Logic (Vollständige Logik wie im Haupt-Reader)
    // Word Click Logic (Optimiert: Vocabulary -> Fallback -> AI)
    /* script.js - Innerhalb von const BookReader */

    // Word Click Logic (Hybrid: Lokal -> Supabase Fallback -> AI)
    const handleWordClick = async (e, wordRaw) => {
        e.stopPropagation();
        
        const textWithoutFormat = wordRaw.replace(/[*_]/g, "");
        let cleanWord = textWithoutFormat.replace(/^[.,!?;:"«»()]+|[.,!?;:"«»()]+$/g, "").toLowerCase().trim();
        
        // Elisionen-Logik (bleibt gleich)
        const ELISION_MAP = { "n": {full:"ne",english:"not"}, "j": {full:"je",english:"I"}, "l": {full:"le/la",english:"the"}, "d": {full:"de",english:"of/from"}, "m": {full:"me",english:"me/myself"}, "t": {full:"te",english:"you/yourself"}, "s": {full:"se",english:"oneself"}, "c": {full:"ce",english:"this/it"}, "qu": {full:"que",english:"that/which"} };
        let elisionInfo = null;
        const elisionMatch = cleanWord.match(/^(d|l|n|j|m|t|s|c|qu)'(.+)$/);
        if (elisionMatch) {
            elisionInfo = { original: cleanWord, elision: ELISION_MAP[elisionMatch[1]], elisionKey: elisionMatch[1] + "'" };
            cleanWord = elisionMatch[2]; 
        }
        
        if (/^\d+$/.test(cleanWord)) return; // Zahlen ignorieren

        // --- SCHRITT 1: LOKALE SUCHE (Top 5000) ---
        // Wir suchen im 'vocabulary' Prop, das von App übergeben wird
        let found = vocabulary.find(v => v.french.toLowerCase() === cleanWord);

        // Verb-Lookup / Irregular Map / Stemming (Deine existierende Logik hier einfügen/behalten)
        // ... (Der Code für VERB_LOOKUP und Stemming bleibt hier identisch zum alten Code) ...
        
        // Falls stemming nichts findet, versuchen wir es simpel:
        if (!found) {
             // Kurzer Check in Irregular Map falls vorhanden
             if (typeof IRREGULAR_MAP !== 'undefined' && IRREGULAR_MAP[cleanWord]) {
                 found = vocabulary.find(v => v.french.toLowerCase() === IRREGULAR_MAP[cleanWord]);
             }
        }

        // --- SCHRITT 2: SUPABASE FALLBACK (Tier 2) ---
        // Wenn lokal nichts gefunden wurde, fragen wir die 'dictionary_fallback' Tabelle
        if (!found) {
            // Kleiner UI-Hinweis dass wir laden
            setClickedWord({ french: textWithoutFormat, english: "Loading...", rank: "..." });
            
            try {
                const { data, error } = await supabase
                    .from('dictionary_fallback') // Deine Tier 2 Tabelle
                    .select('translation_en')
                    .eq('lemma', cleanWord)
                    .maybeSingle();

                if (data && data.translation_en) {
                    found = {
                        french: cleanWord,
                        english: data.translation_en,
                        rank: "Ext", // Markierung für External/Tier 2
                        isFallback: true
                    };
                }
            } catch (err) {
                console.error("Fallback lookup failed", err);
            }
        }

        // --- SCHRITT 3: ERGEBNIS ODER AI ---
        if (found) {
            setClickedWord({
                ...found,
                french: textWithoutFormat,
                english: found.english || found.german,
                // rank, verbInfo, etc. vom gefundenen Objekt übernehmen
                elisionInfo: elisionInfo
            });
        } else {
            // Letzter Ausweg: AI API (bleibt wie vorher)
            setLoadingTranslation(true);
            setClickedWord({ french: textWithoutFormat, english: "Translating...", rank: "AI" });
            
            try {
                // Hier rufst du deine translate Funktion auf (oder direkt den fetch)
                const res = await fetch('/api/translate2', { /* ... wie gehabt ... */ body: JSON.stringify({ word: cleanWord }) });
                // ... Rest der AI Logik ...
            } catch (e) {
                setClickedWord({ french: textWithoutFormat, english: "Not found", rank: "?" });
            } finally {
                setLoadingTranslation(false);
            }
        }
    };

    // Pagination Logic (Memoized)
    const pages = React.useMemo(() => {
        if (!currentStory?.text) return [''];
        const paragraphs = currentStory.text.split('\n');
        const pgs = [];
        let currentPage = "";

        paragraphs.forEach(para => {
            if ((currentPage + para).length > 450 && currentPage.length > 0) {
                pgs.push(currentPage);
                currentPage = para + "\n";
            } else {
                currentPage += para + "\n";
            }
        });
        if (currentPage.trim()) pgs.push(currentPage);
        
        // Sicherstellen, dass mindestens eine Seite vorhanden ist
        return pgs.length > 0 ? pgs : [''];
    }, [currentStory?.text]);

    const currentPageText = pages[pageIndex] || "";
    const progressPct = Math.round(((pageIndex + 1) / pages.length) * 100);

    const nextPage = () => {
        if (pageIndex < pages.length - 1) {
            const newPage = pageIndex + 1;
            setPageIndex(newPage);
            saveProgress(currentStory.id, currentStory.chapterIndex, newPage);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            saveProgress(currentStory.id, currentStory.chapterIndex, pageIndex, true);
            setReaderMode('finish');
        }
    };

    const prevPage = () => {
        if (pageIndex > 0) {
            const newPage = pageIndex - 1;
            setPageIndex(newPage);
            saveProgress(currentStory.id, currentStory.chapterIndex, newPage);
        }
    };

    return (
        <div className="pt-6 pb-6 px-1 h-screen flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 px-2 shrink-0">
                <button onClick={() => setView('explore')} className="p-2 -ml-2 hover:bg-slate-100 rounded-full text-slate-500">
                    <X size={24} />
                </button>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Page {pageIndex + 1} of {pages.length || 1}
                </div>
                <button onClick={() => toggleAudio(currentPageText)} className={`p-2 rounded-full ${isSpeaking ? 'bg-red-100 text-red-600 animate-pulse' : 'text-slate-400'}`}>
                    <Volume2 size={24}/>
                </button>
            </div>

            {/* PAGE */}
            <div className="flex-1 bg-[#fffdf5] border-x border-slate-200 shadow-xl mx-1 mb-4 p-6 md:p-8 rounded-lg overflow-y-auto relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-black/5 to-transparent opacity-50"></div>
                
                <h2 className="text-sm font-bold text-slate-400 mb-6 uppercase tracking-wider border-b border-slate-100 pb-2">
                    {currentStory.title}
                </h2>
                
                <div className="text-xl md:text-2xl text-slate-800 leading-loose font-serif text-justify">
                    {currentPageText.split(/(\s+)/).map((segment, i) => {
                        if (segment.match(/\s+/)) return segment; 
                        const clean = segment.replace(/[\*_]/g, "");
                        return (
                            <span key={i} onClick={(e) => handleWordClick(e, segment)} className="cursor-pointer hover:bg-yellow-200 hover:text-slate-900 rounded px-0.5 transition-colors">
                                {clean}
                            </span>
                        );
                    })}
                </div>
            </div>

            {/* CONTROLS */}
            <div className="shrink-0 px-2 pb-safe">
                <div className="w-full bg-slate-200 h-1.5 rounded-full mb-4 overflow-hidden">
                    <div className="bg-indigo-600 h-full transition-all duration-300" style={{width: `${progressPct}%`}}></div>
                </div>

                <div className="flex gap-4">
                    <button onClick={prevPage} disabled={pageIndex === 0} className="flex-1 py-4 bg-slate-100 text-slate-600 rounded-xl font-bold disabled:opacity-30 active:scale-95 transition-all">← Prev</button>
                    <button onClick={nextPage} className="flex-[2] py-4 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-200 active:scale-95 transition-all">
                        {pageIndex < pages.length - 1 ? "Next Page →" : "Finish Chapter 🎉"}
                    </button>
                </div>
            </div>

             {/* POPUP */}
             {clickedWord && (
                <div className="fixed bottom-24 left-4 right-4 bg-slate-900/95 backdrop-blur-md text-white p-4 rounded-2xl shadow-2xl z-50 flex items-center justify-between">
                    <div>
                        <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                            <div className={`text-[10px] font-bold uppercase tracking-wider inline-block px-1.5 rounded ${
                                clickedWord.rank === "API" ? "bg-yellow-500/20 text-yellow-300" : 
                                clickedWord.rank === "External" ? "bg-blue-500/20 text-blue-300" :
                                clickedWord.rank === ">10000" ? "bg-orange-500/20 text-orange-300" : 
                                "text-slate-400"
                            }`}>
                                {clickedWord.rank === "API" ? <RotateCcw className="animate-spin w-3 h-3"/> : 
                                 clickedWord.rank === "External" ? "Web Translation" :
                                 clickedWord.rank === ">10000" ? "Rare Word" : 
                                 `Rank #${clickedWord.rank}`}
                            </div>
                            {/* Verb Tense Badge */}
                            {clickedWord.verbInfo && (
                                <div className="text-[10px] font-bold uppercase tracking-wider inline-block px-1.5 rounded bg-indigo-500/30 text-indigo-300">
                                    {clickedWord.verbInfo.tense} · {clickedWord.verbInfo.person}
                                </div>
                            )}
                            {/* Elision Badge */}
                            {clickedWord.elisionInfo && (
                                <div className="text-[10px] font-bold uppercase tracking-wider inline-block px-1.5 rounded bg-emerald-500/30 text-emerald-300">
                                    {clickedWord.elisionInfo.elisionKey} = {clickedWord.elisionInfo.elision.full} ({clickedWord.elisionInfo.elision.english})
                                </div>
                            )}
                        </div>
                        
                        <div className="text-xl font-bold flex items-baseline gap-2">
                            {clickedWord.french}
                            {clickedWord.root && clickedWord.root.toLowerCase() !== clickedWord.french.toLowerCase() && (
                                <span className="text-xs text-slate-500 font-normal">
                                    → {clickedWord.root}
                                </span>
                            )}
                        </div>
                        <div className="text-slate-300 text-sm italic">{clickedWord.english || clickedWord.german}</div>
                    </div>
                    <div className="flex gap-3">
                        <button onClick={() => speak(clickedWord.french)} className="p-3 bg-white/10 rounded-full hover:bg-white/20"><Volume2 size={20}/></button>
                        <button onClick={() => setClickedWord(null)} className="p-3 text-slate-400 hover:text-white"><X size={20}/></button>
                    </div>
                </div>
            )}
        </div>
    );
};
// --- GRAMMAR DETAIL COMPONENT (Außerhalb von App, um Re-Render-Probleme zu vermeiden) ---
const GrammarDetail = ({ topicId, onBack }) => {
    // Zugriff auf die gemergten Daten aus beiden Dateien
    const allGrammarData = getMergedGrammarData();
    const data = allGrammarData[topicId] || null;

    const [activeTab, setActiveTab] = useState('learn'); // 'learn' oder 'practice'
    
    // LESSON SYSTEM: 6 Lektionen mit je 10 Fragen
    const [currentLesson, setCurrentLesson] = useState(null); // null = Übersicht, 1-6 = in Lektion
    const [currentExIndex, setCurrentExIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [feedback, setFeedback] = useState(null);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    const [correctCount, setCorrectCount] = useState(0);
    const [shuffleKey, setShuffleKey] = useState(0);
    const [hintsUsed, setHintsUsed] = useState(0);
    const [showHint, setShowHint] = useState(false);
    
    // Sentence Builder State
    const [selectedBlocks, setSelectedBlocks] = useState([]);
    const [availableBlocks, setAvailableBlocks] = useState([]);
  
    
    // Vocabulary Flashcard State
    const [vocabIndex, setVocabIndex] = useState(0);
    const [vocabFlipped, setVocabFlipped] = useState(false);
    const [vocabKnown, setVocabKnown] = useState([]);
    const [vocabUnknown, setVocabUnknown] = useState([]);
    const [vocabSessionComplete, setVocabSessionComplete] = useState(false);
    const [vocabList, setVocabList] = useState([]);
    
    // Initialize vocabulary list when data changes
    React.useEffect(() => {
        if (data?.learn?.vocabulary) {
            const shuffled = [...data.learn.vocabulary].sort(() => Math.random() - 0.5);
            setVocabList(shuffled);
            setVocabIndex(0);
            setVocabFlipped(false);
            setVocabKnown([]);
            setVocabUnknown([]);
            setVocabSessionComplete(false);
        }
    }, [topicId]);

    // Lektions-Fortschritt aus localStorage laden
    const getLessonProgress = () => {
        const progress = {};
        for (let i = 1; i <= 6; i++) {
            progress[i] = localStorage.getItem(`grammar_${topicId}_lesson_${i}`) === 'passed';
        }
        return progress;
    };
    const [lessonProgress, setLessonProgress] = useState(getLessonProgress());

    // Fragen für aktuelle Lektion vorbereiten (aus practice Array, aufgeteilt in 6 Lektionen)
    const exerciseList = React.useMemo(() => {
        if (!data || !data.practice || !currentLesson) return [];
        
        const totalQuestions = data.practice.length;
        const questionsPerLesson = Math.ceil(totalQuestions / 6); // Aufteilen auf 6 Lektionen
        const startIdx = (currentLesson - 1) * questionsPerLesson;
        const endIdx = Math.min(startIdx + questionsPerLesson, totalQuestions);
        
        // Hole die Fragen für diese Lektion
        let lessonQuestions = data.practice.slice(startIdx, endIdx).map((q, idx) => ({...q, _originalIdx: startIdx + idx}));
        
        // Falls zu wenig Fragen: mit restlichen auffüllen (aber keine Duplikate)
        if (lessonQuestions.length < 5 && totalQuestions > 0) {
            const remaining = data.practice.filter((_, idx) => idx < startIdx || idx >= endIdx);
            const needed = 5 - lessonQuestions.length;
            lessonQuestions = [...lessonQuestions, ...remaining.slice(0, needed).map((q, idx) => ({...q, _originalIdx: idx}))];
        }
        
        // Nur shufflen, KEINE Duplikate!
        const shuffled = [...lessonQuestions];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        
        return shuffled.map((q, idx) => ({...q, _uniqueId: idx}));
    }, [topicId, currentLesson, shuffleKey]);

    // Sentence Builder: Blöcke initialisieren wenn Frage sich ändert
    React.useEffect(() => {
        if (exerciseList.length > 0 && exerciseList[currentExIndex]?.type === 'sentence_builder') {
            const blocks = [...exerciseList[currentExIndex].blocks];
            // Shuffle blocks
            for (let i = blocks.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [blocks[i], blocks[j]] = [blocks[j], blocks[i]];
            }
            setAvailableBlocks(blocks);
            setSelectedBlocks([]);
        }
    }, [currentExIndex, exerciseList]);

    // Falls ID nicht gefunden wurde
    if (!data) return (
        <div className="pt-10 px-6 text-center">
            <h3 className="font-bold text-slate-800">Content not found</h3>
            <p className="text-slate-500 text-sm mb-4">ID: {topicId}</p>
            <button onClick={onBack} className="bg-slate-200 px-4 py-2 rounded-xl text-sm font-bold">Go Back</button>
        </div>
    );

    const { meta, learn } = data;
    
    // Debug: Check if vocabulary exists
    console.log('Topic:', topicId, 'Vocabulary:', learn.vocabulary);
    
    const practice = exerciseList;
    const totalQuestions = practice.length; // Dynamisch basierend auf tatsächlicher Fragen-Anzahl
    const passThreshold = 9; // 9 von 10 zum Bestehen

    const checkAnswer = (correctAns) => {
        if (userAnswer.trim().toLowerCase() === correctAns.trim().toLowerCase()) {
            setFeedback('correct');
            setCorrectCount(prev => prev + 1);
        } else {
            setFeedback('wrong');
            setCorrectAnswer(correctAns);
        }
    };

    const nextExercise = () => {
        setFeedback(null);
        setUserAnswer('');
        setCorrectAnswer('');
        setShowHint(false);
        setSelectedBlocks([]);
        setAvailableBlocks([]);
        if (currentExIndex < totalQuestions - 1) {
            setCurrentExIndex(prev => prev + 1);
        } else {
            // Lektion beendet - prüfen ob bestanden
            if (correctCount >= passThreshold) {
                localStorage.setItem(`grammar_${topicId}_lesson_${currentLesson}`, 'passed');
                setLessonProgress(prev => ({...prev, [currentLesson]: true}));
            }
            setIsComplete(true);
        }
    };

    const startLesson = (lessonNum) => {
        setCurrentLesson(lessonNum);
        setCurrentExIndex(0);
        setUserAnswer('');
        setFeedback(null);
        setCorrectCount(0);
        setCorrectAnswer('');
        setIsComplete(false);
        setShuffleKey(prev => prev + 1);
        setHintsUsed(0);
        setShowHint(false);
        setSelectedBlocks([]);
        setAvailableBlocks([]);
    };

    const backToOverview = () => {
        setCurrentLesson(null);
        setIsComplete(false);
    };

    // Render markdown helper
    const renderMarkdown = (text) => {
        if (!text) return '';
        return text
            .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.+?)\*/g, '<em>$1</em>')
            .replace(/\n/g, '<br/>');
    };

    // --- LESSON COMPLETE SCREEN ---
    if (isComplete && currentLesson) {
        const passed = correctCount >= passThreshold;
        return (
            <div className="w-full pt-6 pb-24 px-4 h-full flex flex-col items-center justify-center text-center">
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl max-w-sm w-full">
                    <div className="text-6xl mb-4">{passed ? '🎉' : '💪'}</div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">
                        {passed ? 'Lesson Passed!' : 'Keep Practicing!'}
                    </h2>
                    <p className="text-slate-500 mb-2">Lesson {currentLesson} of 6</p>
                    <p className="text-slate-600 mb-4">
                        You scored <span className={`font-bold text-xl ${passed ? 'text-green-600' : 'text-amber-600'}`}>{correctCount}/{totalQuestions}</span>
                    </p>
                    {passed ? (
                        <p className="text-green-600 font-medium mb-6">✓ {passThreshold}/{totalQuestions} required - Passed!</p>
                    ) : (
                        <p className="text-amber-600 font-medium mb-6">Need {passThreshold}/{totalQuestions} to pass</p>
                    )}
                    
                    <div className="space-y-3">
                        {!passed && (
                            <button 
                                onClick={() => startLesson(currentLesson)} 
                                className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold shadow-lg"
                            >
                                🔄 Try Again
                            </button>
                        )}
                        <button 
                            onClick={backToOverview} 
                            className="w-full bg-slate-100 text-slate-600 py-3 rounded-xl font-bold"
                        >
                            ← Back to Lessons
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    // --- IN LESSON VIEW ---
    if (currentLesson && practice.length > 0) {
        const ex = practice[currentExIndex];
        return (
            <div className="w-full pt-6 pb-24 px-4 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                    <button onClick={backToOverview} className="p-2 -ml-2 hover:bg-slate-100 rounded-full text-slate-500">
                        <ArrowLeft size={24} />
                    </button>
                    <div className="flex-1">
                        <h2 className="text-lg font-bold text-slate-800">Lesson {currentLesson}</h2>
                        <p className="text-xs text-slate-400">{meta.title}</p>
                    </div>
                </div>

                {/* Progress */}
                <div className="mb-6">
                    <div className="flex justify-between text-xs font-bold text-slate-400 uppercase mb-2">
                        <span>Question {currentExIndex + 1}/{totalQuestions}</span>
                        <span className="text-green-600">✓ {correctCount}</span>
                    </div>
                    <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                        <div className="bg-indigo-500 h-full transition-all" style={{width: `${((currentExIndex + 1) / totalQuestions) * 100}%`}}></div>
                    </div>
                    <p className="text-center text-sm text-slate-500 mt-2">Need <span className="font-bold text-indigo-600">{passThreshold}/{totalQuestions}</span> to pass</p>
                </div>

                {/* Hint Button (shared for all types) */}
                {ex.hint && (
                    <div className="text-center mb-4">
                        {showHint ? (
                            <p className="text-indigo-600 text-sm italic bg-indigo-50 inline-block px-3 py-1 rounded-lg">💡 {ex.hint}</p>
                        ) : hintsUsed < 3 ? (
                            <button 
                                onClick={() => { setShowHint(true); setHintsUsed(prev => prev + 1); }}
                                className="text-slate-400 text-sm bg-slate-100 hover:bg-slate-200 px-3 py-1 rounded-lg"
                            >
                                💡 Show Hint ({3 - hintsUsed} left)
                            </button>
                        ) : (
                            <p className="text-slate-300 text-sm italic">No hints remaining</p>
                        )}
                    </div>
                )}

                {/* Question Card */}
                <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-lg flex-1 flex flex-col justify-center items-center relative overflow-hidden">
                    
                    {/* === TYPE: CHOICE === */}
                    {ex.type === 'choice' && (
                        <div className="w-full space-y-6">
                            <h3 className="text-xl font-bold text-slate-800 text-center mb-6">{ex.question}</h3>
                            <div className="space-y-3">
                                {ex.options.map((opt, idx) => {
                                    const isCorrectOption = opt === ex.correct;
                                    return (
                                        <button 
                                            key={idx}
                                            disabled={feedback !== null}
                                            onClick={() => {
                                                setUserAnswer(opt);
                                                if(isCorrectOption) {
                                                    setFeedback('correct');
                                                    setCorrectCount(prev => prev + 1);
                                                } else {
                                                    setFeedback('wrong');
                                                    setCorrectAnswer(ex.correct);
                                                }
                                            }}
                                            className={`w-full p-4 rounded-xl font-bold border transition-all text-left flex justify-between items-center ${
                                                feedback && isCorrectOption ? 'bg-green-100 border-green-200 text-green-700' :
                                                feedback === 'wrong' && userAnswer === opt ? 'bg-red-100 border-red-200 text-red-700' :
                                                'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                                            }`}
                                        >
                                            {opt}
                                            {feedback && isCorrectOption && <Check size={20}/>}
                                            {feedback === 'wrong' && userAnswer === opt && <X size={20}/>}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    {/* === TYPE: GAP_FILL === */}
                    {ex.type === 'gap_fill' && (
                        <div className="w-full space-y-6">
                            <h3 className="text-xl font-bold text-slate-800 text-center mb-6">{ex.question}</h3>
                            <div className="flex flex-col items-center gap-4">
                                <input
                                    type="text"
                                    value={userAnswer}
                                    onChange={(e) => setUserAnswer(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && userAnswer.trim() && !feedback) {
                                            const isCorrect = userAnswer.trim().toLowerCase() === ex.answer.trim().toLowerCase();
                                            if (isCorrect) {
                                                setFeedback('correct');
                                                setCorrectCount(prev => prev + 1);
                                            } else {
                                                setFeedback('wrong');
                                                setCorrectAnswer(ex.answer);
                                            }
                                        }
                                    }}
                                    disabled={feedback !== null}
                                    placeholder="Type your answer..."
                                    className={`w-full p-4 text-center text-xl font-bold rounded-xl border-2 outline-none transition-all ${
                                        feedback === 'correct' ? 'border-green-400 bg-green-50 text-green-700' :
                                        feedback === 'wrong' ? 'border-red-400 bg-red-50 text-red-700' :
                                        'border-slate-200 focus:border-indigo-400'
                                    }`}
                                />
                                {!feedback && (
                                    <button 
                                        onClick={() => {
                                            if (!userAnswer.trim()) return;
                                            const isCorrect = userAnswer.trim().toLowerCase() === ex.answer.trim().toLowerCase();
                                            if (isCorrect) {
                                                setFeedback('correct');
                                                setCorrectCount(prev => prev + 1);
                                            } else {
                                                setFeedback('wrong');
                                                setCorrectAnswer(ex.answer);
                                            }
                                        }}
                                        disabled={!userAnswer.trim()}
                                        className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold disabled:opacity-50"
                                    >
                                        Check
                                    </button>
                                )}
                            </div>
                        </div>
                    )}

                    {/* === TYPE: INPUT === */}
                    {ex.type === 'input' && (
                        <div className="w-full space-y-6">
                            <h3 className="text-xl font-bold text-slate-800 text-center mb-6">{ex.question}</h3>
                            <div className="flex flex-col items-center gap-4">
                                <input
                                    type="text"
                                    value={userAnswer}
                                    onChange={(e) => setUserAnswer(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && userAnswer.trim() && !feedback) {
                                            const isCorrect = userAnswer.trim().toLowerCase() === ex.answer.trim().toLowerCase();
                                            if (isCorrect) {
                                                setFeedback('correct');
                                                setCorrectCount(prev => prev + 1);
                                            } else {
                                                setFeedback('wrong');
                                                setCorrectAnswer(ex.answer);
                                            }
                                        }
                                    }}
                                    disabled={feedback !== null}
                                    placeholder="Type your answer..."
                                    className={`w-full p-4 text-center text-xl font-bold rounded-xl border-2 outline-none transition-all ${
                                        feedback === 'correct' ? 'border-green-400 bg-green-50 text-green-700' :
                                        feedback === 'wrong' ? 'border-red-400 bg-red-50 text-red-700' :
                                        'border-slate-200 focus:border-indigo-400'
                                    }`}
                                />
                                {!feedback && (
                                    <button 
                                        onClick={() => {
                                            if (!userAnswer.trim()) return;
                                            const isCorrect = userAnswer.trim().toLowerCase() === ex.answer.trim().toLowerCase();
                                            if (isCorrect) {
                                                setFeedback('correct');
                                                setCorrectCount(prev => prev + 1);
                                            } else {
                                                setFeedback('wrong');
                                                setCorrectAnswer(ex.answer);
                                            }
                                        }}
                                        disabled={!userAnswer.trim()}
                                        className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold disabled:opacity-50"
                                    >
                                        Check
                                    </button>
                                )}
                            </div>
                        </div>
                    )}

                    {/* === TYPE: SENTENCE_BUILDER === */}
                    {ex.type === 'sentence_builder' && (
                        <div className="w-full space-y-6">
                            <h3 className="text-xl font-bold text-slate-800 text-center mb-4">{ex.question}</h3>
                            
                            {/* Selected blocks (answer area) */}
                            <div className="min-h-[60px] bg-slate-100 rounded-xl p-3 flex flex-wrap gap-2 justify-center items-center border-2 border-dashed border-slate-300">
                                {selectedBlocks.length === 0 ? (
                                    <span className="text-slate-400 text-sm">Tap blocks to build your sentence</span>
                                ) : (
                                    selectedBlocks.map((block, idx) => (
                                        <button
                                            key={idx}
                                            disabled={feedback !== null}
                                            onClick={() => {
                                                if (feedback) return;
                                                setSelectedBlocks(prev => prev.filter((_, i) => i !== idx));
                                                setAvailableBlocks(prev => [...prev, block]);
                                            }}
                                            className={`px-4 py-2 rounded-lg font-bold text-lg transition-all ${
                                                feedback === 'correct' ? 'bg-green-500 text-white' :
                                                feedback === 'wrong' ? 'bg-red-500 text-white' :
                                                'bg-indigo-500 text-white hover:bg-indigo-600'
                                            }`}
                                        >
                                            {block}
                                        </button>
                                    ))
                                )}
                            </div>

                            {/* Available blocks */}
                            <div className="flex flex-wrap gap-2 justify-center">
                                {availableBlocks.map((block, idx) => (
                                    <button
                                        key={idx}
                                        disabled={feedback !== null}
                                        onClick={() => {
                                            if (feedback) return;
                                            setAvailableBlocks(prev => prev.filter((_, i) => i !== idx));
                                            setSelectedBlocks(prev => [...prev, block]);
                                        }}
                                        className="px-4 py-2 bg-slate-200 text-slate-700 rounded-lg font-bold text-lg hover:bg-slate-300 transition-all"
                                    >
                                        {block}
                                    </button>
                                ))}
                            </div>

                            {/* Check button */}
                            {!feedback && (
                                <div className="flex justify-center">
                                    <button 
                                        onClick={() => {
                                            const userSolution = selectedBlocks.join(' ');
                                            const correctSolution = ex.solution.join(' ');
                                            if (userSolution === correctSolution) {
                                                setFeedback('correct');
                                                setCorrectCount(prev => prev + 1);
                                            } else {
                                                setFeedback('wrong');
                                                setCorrectAnswer(correctSolution);
                                            }
                                        }}
                                        disabled={selectedBlocks.length === 0}
                                        className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold disabled:opacity-50"
                                    >
                                        Check
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Feedback Actions */}
                    {feedback === 'correct' && (
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-green-50 border-t border-green-100">
                            <button onClick={nextExercise} className="w-full bg-green-500 text-white py-3 rounded-xl font-bold">
                                {currentExIndex < totalQuestions - 1 ? 'Next Question' : 'Finish Lesson'}
                            </button>
                        </div>
                    )}
                    
                    {feedback === 'wrong' && (
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-red-50 border-t border-red-100">
                            <div className="text-center mb-3">
                                <span className="text-red-600 font-bold">Correct: </span>
                                <span className="text-red-800 font-bold">{correctAnswer}</span>
                            </div>
                            <button onClick={nextExercise} className="w-full bg-red-500 text-white py-3 rounded-xl font-bold">
                                {currentExIndex < totalQuestions - 1 ? 'Next Question' : 'Finish Lesson'}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    // --- MAIN VIEW WITH TABS ---
    return (
        <div className="w-full pt-6 pb-24 px-1 h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4 px-1">
                <button onClick={onBack} className="p-2 -ml-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500">
                    <ArrowLeft size={24} />
                </button>
                <div className="flex-1">
                    <h2 className="text-xl font-bold text-slate-800 leading-tight">{meta.title}</h2>
                    <p className="text-xs text-slate-400">{meta.tags?.join(' • ')}</p>
                </div>
            </div>

            {/* Tabs */}
            <div className="bg-slate-200 p-1 rounded-2xl flex mb-6 mx-1 shrink-0">
                {learn.vocabulary && learn.vocabulary.length > 0 && (
                    <button onClick={() => setActiveTab('vocab')} className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'vocab' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500'}`}>
                        🎴 Vocab
                    </button>
                )}
                <button onClick={() => setActiveTab('learn')} className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'learn' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500'}`}>
                    📖 Learn
                </button>
                <button onClick={() => setActiveTab('practice')} className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'practice' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500'}`}>
                    🏋️ Practice
                </button>
            </div>

            {/* --- TAB: VOCAB (Flashcards) --- */}
            {activeTab === 'vocab' && learn.vocabulary && (
                <div className="flex-1 overflow-y-auto px-1 flex flex-col items-center justify-center">
                    {vocabSessionComplete ? (
                        // Session Complete
                        <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl max-w-sm w-full text-center">
                            <div className="text-6xl mb-4">🎉</div>
                            <h2 className="text-2xl font-bold text-slate-800 mb-2">Vocabulary Complete!</h2>
                            <p className="text-slate-500 mb-4">You reviewed all {learn.vocabulary.length} words</p>
                            <div className="flex justify-center gap-4 mb-6">
                                <div className="bg-green-50 px-4 py-2 rounded-xl">
                                    <span className="text-green-600 font-bold text-xl">{vocabKnown.length}</span>
                                    <p className="text-green-600 text-xs">Known</p>
                                </div>
                                <div className="bg-amber-50 px-4 py-2 rounded-xl">
                                    <span className="text-amber-600 font-bold text-xl">{vocabUnknown.length}</span>
                                    <p className="text-amber-600 text-xs">Review</p>
                                </div>
                            </div>
                            <button 
                                onClick={() => {
                                    const shuffled = [...learn.vocabulary].sort(() => Math.random() - 0.5);
                                    setVocabList(shuffled);
                                    setVocabIndex(0);
                                    setVocabFlipped(false);
                                    setVocabKnown([]);
                                    setVocabUnknown([]);
                                    setVocabSessionComplete(false);
                                }}
                                className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold"
                            >
                                🔄 Start Again
                            </button>
                        </div>
                    ) : vocabList.length > 0 ? (
                        // Flashcard View
                        <div className="w-full max-w-sm">
                            {/* Progress */}
                            <div className="mb-4">
                                <div className="flex justify-between text-xs font-bold text-slate-400 uppercase mb-2">
                                    <span>Card {vocabIndex + 1}/{vocabList.length}</span>
                                    <span className="text-green-600">✓ {vocabKnown.length}</span>
                                </div>
                                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                                    <div className="bg-indigo-500 h-full transition-all" style={{width: `${((vocabIndex + 1) / vocabList.length) * 100}%`}}></div>
                                </div>
                            </div>

                            {/* Flashcard */}
                            <div 
                                onClick={() => setVocabFlipped(!vocabFlipped)}
                                className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl min-h-[250px] flex flex-col items-center justify-center cursor-pointer hover:shadow-2xl transition-all"
                            >
                                {!vocabFlipped ? (
                                    <>
                                        <p className="text-3xl font-bold text-slate-800 mb-2">{vocabList[vocabIndex]?.fr}</p>
                                        {vocabList[vocabIndex]?.type && (
                                            <span className={`text-xs px-2 py-1 rounded-full font-bold ${
                                                vocabList[vocabIndex].type === 'masculine' ? 'bg-blue-100 text-blue-600' :
                                                vocabList[vocabIndex].type === 'feminine' ? 'bg-pink-100 text-pink-600' :
                                                vocabList[vocabIndex].type === 'vowel' ? 'bg-purple-100 text-purple-600' :
                                                'bg-amber-100 text-amber-600'
                                            }`}>{vocabList[vocabIndex].type}</span>
                                        )}
                                        <p className="text-slate-400 text-sm mt-4">Tap to reveal</p>
                                    </>
                                ) : (
                                    <>
                                        <p className="text-2xl font-bold text-indigo-600 mb-2">{vocabList[vocabIndex]?.en}</p>
                                        <p className="text-slate-500 text-lg">{vocabList[vocabIndex]?.fr}</p>
                                    </>
                                )}
                            </div>

                            {/* Buttons */}
                            {vocabFlipped && (
                                <div className="flex gap-3 mt-4">
                                    <button 
                                        onClick={() => {
                                            setVocabUnknown(prev => [...prev, vocabList[vocabIndex]]);
                                            if (vocabIndex < vocabList.length - 1) {
                                                setVocabIndex(prev => prev + 1);
                                                setVocabFlipped(false);
                                            } else {
                                                setVocabSessionComplete(true);
                                            }
                                        }}
                                        className="flex-1 bg-amber-100 text-amber-700 py-4 rounded-xl font-bold text-lg"
                                    >
                                        ❌ Again
                                    </button>
                                    <button 
                                        onClick={() => {
                                            setVocabKnown(prev => [...prev, vocabList[vocabIndex]]);
                                            if (vocabIndex < vocabList.length - 1) {
                                                setVocabIndex(prev => prev + 1);
                                                setVocabFlipped(false);
                                            } else {
                                                setVocabSessionComplete(true);
                                            }
                                        }}
                                        className="flex-1 bg-green-100 text-green-700 py-4 rounded-xl font-bold text-lg"
                                    >
                                        ✓ Got it
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <p className="text-slate-400">No vocabulary available</p>
                    )}
                </div>
            )}

            {/* --- TAB: LEARN --- */}
            {activeTab === 'learn' && (
                <div className="flex-1 overflow-y-auto px-1 space-y-6">
                    {/* Cheat Sheet */}
                    {learn.cheat_sheet && (
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-3xl border border-blue-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-3 opacity-10"><Zap size={50} className="text-blue-600"/></div>
                            <h3 className="font-bold text-blue-800 text-sm uppercase tracking-wider mb-3 flex items-center gap-2">
                                ⚡ Quick Reference
                            </h3>
                            <p className="text-blue-900 font-medium mb-4 leading-relaxed text-lg" dangerouslySetInnerHTML={{__html: renderMarkdown(learn.cheat_sheet.summary)}}></p>
                            {learn.cheat_sheet.key_rule && (
                                <div className="bg-white/70 p-4 rounded-xl text-sm text-blue-800 font-bold border border-blue-100/50" dangerouslySetInnerHTML={{__html: renderMarkdown(learn.cheat_sheet.key_rule)}}></div>
                            )}
                        </div>
                    )}

                    {/* Explanation Content */}
                    <div className="space-y-4">
                        {learn.explanation?.map((block, idx) => {
                            if (block.type === 'heading') return (
                                <h3 key={idx} className="text-lg font-bold text-slate-800 mt-6 mb-2">{block.content}</h3>
                            );
                            
                            if (block.type === 'text') return (
                                <p key={idx} className="text-slate-600 leading-relaxed text-base" dangerouslySetInnerHTML={{__html: renderMarkdown(block.content)}}></p>
                            );
                            
                            if (block.type === 'example') return (
                                <div key={idx} className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100">
                                    <div className="flex items-start gap-3">
                                        <span className="text-2xl">💬</span>
                                        <div>
                                            <p className="font-bold text-emerald-800 text-lg">{block.fr}</p>
                                            <p className="text-emerald-600">{block.en || block.de}</p>
                                            {block.note && <p className="text-emerald-500 text-sm italic mt-1">{block.note}</p>}
                                        </div>
                                    </div>
                                </div>
                            );
                            
                            if (block.type === 'tip') return (
                                <div key={idx} className="bg-amber-50 p-4 rounded-2xl border border-amber-100 flex gap-3">
                                    <span className="text-2xl">💡</span>
                                    <div className="text-amber-800" dangerouslySetInnerHTML={{__html: renderMarkdown(block.content)}}></div>
                                </div>
                            );
                            
                            if (block.type === 'warning') return (
                                <div key={idx} className="bg-rose-50 p-4 rounded-2xl border border-rose-100 flex gap-3">
                                    <AlertCircle size={24} className="text-rose-500 shrink-0"/>
                                    <div>
                                        {block.title && <div className="font-bold text-rose-700 text-sm mb-1">{block.title}</div>}
                                        <div className="text-rose-800 text-sm" dangerouslySetInnerHTML={{__html: renderMarkdown(block.content)}}></div>
                                    </div>
                                </div>
                            );

                            if (block.type === 'table') return (
                                <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                                    <table className="w-full text-sm text-left">
                                        <thead className="bg-slate-50 text-slate-500 font-bold uppercase text-xs">
                                            <tr>{block.headers.map((h, i) => <th key={i} className="px-4 py-3">{h}</th>)}</tr>
                                        </thead>
                                        <tbody className="divide-y divide-slate-100">
                                            {block.rows.map((row, rIdx) => (
                                                <tr key={rIdx}>
                                                    {row.map((cell, cIdx) => (
                                                        <td key={cIdx} className={`px-4 py-3 ${cIdx === 0 ? 'font-bold text-indigo-600 bg-slate-50/50' : 'text-slate-700'}`}>{cell}</td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            );

                            if (block.type === 'rule_box') return (
                                <div key={idx} className="bg-indigo-50 p-4 rounded-2xl border-2 border-indigo-200">
                                    <h4 className="font-bold text-indigo-800 mb-2">{block.title}</h4>
                                    <div className="text-indigo-700" dangerouslySetInnerHTML={{__html: renderMarkdown(block.content)}}></div>
                                </div>
                            );

                            return null;
                        })}
                    </div>

                    {/* Pro Tip at bottom */}
                    {learn.cheat_sheet?.pro_tip && (
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-2xl border border-purple-100 mt-6">
                            <p className="text-purple-800 font-medium" dangerouslySetInnerHTML={{__html: renderMarkdown(learn.cheat_sheet.pro_tip)}}></p>
                        </div>
                    )}
                </div>
            )}

            {/* --- TAB: PRACTICE (Lesson Overview) --- */}
            {activeTab === 'practice' && (
                <div className="flex-1 overflow-y-auto px-1">
                    <div className="mb-4">
                        <p className="text-slate-500 text-sm text-center">Complete all 6 lessons to master this topic</p>
                        <p className="text-slate-400 text-xs text-center mt-1">Score 9/10 to pass each lesson</p>
                    </div>

                    {/* Progress Overview */}
                    <div className="flex justify-center gap-2 mb-6">
                        {[1,2,3,4,5,6].map(num => (
                            <div 
                                key={num}
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                                    lessonProgress[num] ? 'bg-green-500 text-white' : 'bg-slate-200 text-slate-400'
                                }`}
                            >
                                {lessonProgress[num] ? '✓' : num}
                            </div>
                        ))}
                    </div>

                    {/* Lesson Cards */}
                    <div className="space-y-3">
                        {[
                            { num: 1, title: "Getting Started", desc: "Basic recognition", icon: "🌱" },
                            { num: 2, title: "Building Up", desc: "Pattern practice", icon: "📈" },
                            { num: 3, title: "Core Practice", desc: "Essential exercises", icon: "💪" },
                            { num: 4, title: "Going Deeper", desc: "More challenging", icon: "🎯" },
                            { num: 5, title: "Almost There", desc: "Advanced practice", icon: "🚀" },
                            { num: 6, title: "Final Challenge", desc: "Master level", icon: "👑" }
                        ].map(lesson => (
                            <button
                                key={lesson.num}
                                onClick={() => startLesson(lesson.num)}
                                className={`w-full p-4 rounded-2xl border text-left flex items-center gap-4 transition-all ${
                                    lessonProgress[lesson.num] 
                                        ? 'bg-green-50 border-green-200' 
                                        : 'bg-white border-slate-200 hover:border-indigo-300 hover:shadow-md'
                                }`}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                                    lessonProgress[lesson.num] ? 'bg-green-100' : 'bg-slate-100'
                                }`}>
                                    {lessonProgress[lesson.num] ? '✅' : lesson.icon}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <span className="font-bold text-slate-800">Lesson {lesson.num}</span>
                                        {lessonProgress[lesson.num] && (
                                            <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">PASSED</span>
                                        )}
                                    </div>
                                    <p className="text-sm text-slate-500">{lesson.title} - {lesson.desc}</p>
                                </div>
                                <ChevronRight size={20} className="text-slate-400"/>
                            </button>
                        ))}
                    </div>

                    {/* Reset Progress Button */}
                    <div className="mt-8 text-center">
                        <button 
                            onClick={() => {
                                for (let i = 1; i <= 6; i++) {
                                    localStorage.removeItem(`grammar_${topicId}_lesson_${i}`);
                                }
                                setLessonProgress({1: false, 2: false, 3: false, 4: false, 5: false, 6: false});
                            }}
                            className="text-xs text-slate-400 hover:text-red-500 transition-colors"
                        >
                            Reset Progress
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};
// --- ONBOARDING COMPONENTS ---

// --- ONBOARDING COMPONENTS ---

// --- ONBOARDING WIZARD (FIXED & ENHANCED) ---
// --- ONBOARDING WIZARD (New Flow) ---
// --- ONBOARDING WIZARD (Fixed Logic) ---
// --- ONBOARDING WIZARD (Fixed Logic) ---
const OnboardingWizard = ({ onComplete, session }) => {
    const [step, setStep] = useState(0); 
    const [authMode, setAuthMode] = useState('signup'); 
    const [nickname, setNickname] = useState("");
    const [showGuestWarning, setShowGuestWarning] = useState(false);
    const [checkingAccount, setCheckingAccount] = useState(false);
    
    const [existingProfile, setExistingProfile] = useState(null);

    // --- CHECK ACCOUNT LOGIC ---
    useEffect(() => {
        const checkExistingUser = async () => {
            if (session?.user) {
                setCheckingAccount(true);
                
                // 1. Profil abrufen
                const { data: profile } = await supabase
                    .from('profiles')
                    .select('*')
                    .eq('id', session.user.id)
                    .maybeSingle(); // 'maybeSingle' verhindert Fehler, wenn noch keins da ist

                // 2. Progress prüfen (Gibt es schon gelernte Wörter?)
                const { count } = await supabase
                    .from('user_progress')
                    .select('*', { count: 'exact', head: true })
                    .eq('user_id', session.user.id);
                
                setCheckingAccount(false);

                // Entscheidung: Ist das ein "echter" genutzter Account?
                // Ja, wenn ein Nickname gesetzt ist ODER wenn Wörter gelernt wurden.
                if (profile && (profile.nickname || (count && count > 0))) {
                    setExistingProfile({
                        name: profile.nickname || "Learner",
                        level: profile.target_level || "A1",
                        wordCount: count || 0
                    });
                    setStep(4); // -> Welcome Back Screen
                } else {
                    // Neu -> Weiter zu Name
                    setStep(2); 
                }
            }
        };

        // Check läuft, wenn Session da ist UND wir noch am Anfang sind (Step 0 oder 1)
        if (session && step < 2) {
            checkExistingUser();
        }
    }, [session]); 

    // --- SUB-COMPONENTS ---

    const GuestWarningModal = () => (
        <div className="fixed inset-0 z-[250] bg-black/50 backdrop-blur-sm flex items-center justify-center p-6 animate-in fade-in duration-200">
            <div className="bg-white p-6 rounded-3xl shadow-2xl w-full max-w-sm">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-amber-600 text-3xl mb-4">⚠️</div>
                <h3 className="text-xl font-bold text-slate-800 text-center mb-2">Guest Mode</h3>
                <p className="text-slate-500 text-sm text-center mb-6">
                    Data is saved on this device <b>only</b>. Clearing cache or switching devices will lose your progress.
                </p>
                <div className="flex flex-col gap-3">
                    <button 
                        onClick={() => { setShowGuestWarning(false); setStep(2); }} 
                        className="w-full bg-amber-500 text-white py-3 rounded-xl font-bold shadow-lg hover:bg-amber-600 active:scale-95 transition-all"
                    >
                        I understand, continue
                    </button>
                    <button 
                        onClick={() => setShowGuestWarning(false)} 
                        className="text-slate-400 font-bold text-sm py-2"
                    >
                        Go back
                    </button>
                </div>
            </div>
        </div>
    );

    const levels = [
        { id: 'Scratch', label: 'Absolute Beginner', icon: '🐣', desc: 'Start from word #1' },
        { id: 'A2', label: 'Elementary', icon: '🚲', desc: 'I know basics' },
        { id: 'B1', label: 'Intermediate', icon: '🚀', desc: 'I can converse' },
        { id: 'B2', label: 'Advanced', icon: '🎩', desc: 'Fluent reader' },
    ];

    if (checkingAccount) return <div className="fixed inset-0 z-[200] bg-slate-50 flex items-center justify-center"><Loader2 className="animate-spin text-indigo-600" size={48}/></div>;

    return (
        <div className="fixed inset-0 z-[200] bg-slate-50 h-[100dvh] w-full overflow-y-auto">
            
            {/* GUEST WARNING OVERLAY (Jetzt global über allem) */}
            {showGuestWarning && <GuestWarningModal />}

            <div className="min-h-full flex flex-col items-center justify-center p-6">
                
                {/* Progress Dots */}
                <div className="flex gap-2 mb-8 w-full max-w-[100px]">
                    {[0, 1, 2, 3].map(i => (<div key={i} className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${i <= (step === 4 ? 1 : step) ? 'bg-indigo-600' : 'bg-slate-200'}`}></div>))}
                </div>

                {/* STEP 0: START */}
                {step === 0 && (
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 w-full max-w-sm">
                        <div className="bg-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto text-indigo-600 text-3xl mb-4">🚀</div>
                        <h2 className="text-2xl font-extrabold text-slate-800 mb-2 text-center">French Frequency</h2>
                        <p className="text-slate-500 text-sm leading-relaxed mb-8 text-center">Learn the 5,000 most used words efficiently.</p>
                        <div className="space-y-3">
                            <button onClick={() => { setAuthMode('signup'); setStep(1); }} className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-200 hover:bg-indigo-700 active:scale-95 transition-all">Get Started</button>
                            <button onClick={() => { setAuthMode('login'); setStep(1); }} className="w-full bg-white text-slate-600 border border-slate-200 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 active:scale-95 transition-all">I have an account</button>
                        </div>
                        <button onClick={() => setShowGuestWarning(true)} className="mt-6 text-slate-400 text-xs font-bold uppercase tracking-wider hover:text-slate-600 w-full text-center">Continue as Guest</button>
                    </div>
                )}

                {/* STEP 1: AUTH */}
                {step === 1 && (
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 w-full max-w-sm">
                        <div className="text-center mb-6">
                            <h2 className="text-xl font-bold text-slate-800">{authMode === 'signup' ? 'Create Account' : 'Welcome Back'}</h2>
                            <p className="text-slate-400 text-xs">{authMode === 'signup' ? 'Start securely.' : 'Sync your progress.'}</p>
                        </div>
                        {/* WICHTIG: initialMode wird übergeben */}
                        <AuthScreen 
                            onLoginSuccess={() => { /* Effect oben übernimmt */ }} 
                            isEmbedded={true} 
                            initialMode={authMode} 
                        />
                        <button onClick={() => setStep(0)} className="w-full mt-4 text-slate-400 text-xs hover:text-slate-600">← Back to Start</button>
                        
                        {/* Guest auch hier verfügbar machen */}
                        <button onClick={() => setShowGuestWarning(true)} className="w-full mt-6 py-3 text-slate-500 font-bold text-sm bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors border border-slate-200">
                            Skip & Continue as Guest
                        </button>
                    </div>
                )}

                {/* STEP 2: NAME */}
                {step === 2 && (
                    <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 w-full max-w-sm text-center">
                        <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 text-purple-600 text-3xl">👋</div>
                        <h2 className="text-xl font-bold text-slate-800 mb-6">What should we call you?</h2>
                        <input type="text" value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder="Your Nickname" className="w-full bg-slate-50 border-2 border-slate-200 p-4 rounded-xl font-bold text-xl text-center text-slate-800 focus:outline-none focus:border-indigo-500 focus:bg-white transition-all mb-6" autoFocus />
                        <button onClick={async () => {
                            if(!nickname.trim()) return;
                            localStorage.setItem('vocabApp_nickname', nickname);
                            // Versuche Update (ignoriere Fehler wenn nicht eingeloggt)
                            if (session) await supabase.from('profiles').update({ nickname: nickname }).eq('id', session.user.id);
                            setStep(3);
                        }} disabled={!nickname.trim()} className="w-full bg-indigo-600 text-white py-3.5 rounded-xl font-bold text-lg shadow-xl">Next Step</button>
                    </div>
                )}

                {/* STEP 3: LEVEL */}
                {step === 3 && (
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 w-full max-w-sm">
                        <h2 className="text-xl font-bold text-slate-800 mb-1 text-center">Where do you start?</h2>
                        <p className="text-slate-400 text-xs mb-6 text-center">This helps us adjust your content.</p>
                        <div className="grid gap-3">
                            {levels.map(l => (
                                <button key={l.id} onClick={async () => {
                                    localStorage.setItem('vocabApp_targetLevel', l.id);
                                    localStorage.setItem('vocabApp_hasOnboarded', 'true'); 
                                    if (session) await supabase.from('profiles').update({ target_level: l.id }).eq('id', session.user.id);
                                    onComplete(nickname, l.id);
                                }} className="bg-slate-50 border border-slate-200 p-3 rounded-xl flex items-center gap-4 hover:border-indigo-500 hover:bg-indigo-50 transition-all text-left group">
                                    <span className="text-2xl">{l.icon}</span>
                                    <div><div className="font-bold text-slate-700 group-hover:text-indigo-700 text-sm">{l.label}</div></div>
                                    <div className="ml-auto opacity-0 group-hover:opacity-100 text-indigo-600"><Check size={18} /></div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* STEP 4: EXISTING USER FOUND */}
                {step === 4 && (
                    <div className="bg-white p-8 rounded-3xl shadow-xl border border-indigo-100 w-full max-w-sm text-center animate-in fade-in slide-in-from-bottom-4">
                        <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 text-4xl">🎉</div>
                        <h2 className="text-2xl font-bold text-slate-800 mb-2">Welcome Back!</h2>
                        <p className="text-slate-500 text-sm mb-6">We found an existing profile.</p>
                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 mb-8">
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Found Data</div>
                            <div className="text-lg font-bold text-slate-800">{existingProfile?.name}</div>
                            <div className="flex justify-center gap-4 mt-2 text-sm text-slate-600">
                                <span>📚 {existingProfile?.wordCount} Words</span>
                                <span>🎓 {existingProfile?.level}</span>
                            </div>
                        </div>
                        <button onClick={() => {
                            localStorage.setItem('vocabApp_nickname', existingProfile.name);
                            localStorage.setItem('vocabApp_hasOnboarded', 'true');
                            onComplete(existingProfile.name, existingProfile.level);
                        }} className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold text-lg shadow-xl hover:bg-indigo-700 transition-all">Continue with this Profile</button>
                        <button onClick={() => setStep(2)} className="mt-4 text-slate-400 text-xs font-bold hover:text-indigo-600">Start fresh / Change setup</button>
                    </div>
                )}

                <div className="h-8 shrink-0"></div>
            </div>
        </div>
    );
};

function App() {
    // --- STATE MANAGEMENT ---
    // --- HACK: Doppelten Hash fixen (Google Login Bug) ---
    if (window.location.hash && window.location.hash.startsWith('##')) {
        window.location.hash = window.location.hash.substring(1);
    }
    // --- NEUE STATES FÜR DEINE ANFORDERUNGEN ---
    const [nickname, setNickname] = useState("Learner"); // Default, bis geladen
    const [showDeleteModal, setShowDeleteModal] = useState(false); // Steuert das Delete-Popup
    const [deleteInput, setDeleteInput] = useState(""); // Für die "DELETE" Eingabe
    // 1. STATES (Hier geht dein normaler Code weiter)
    const [session, setSession] = useState(null);
    // --- ONBOARDING STATE ---
    // Wir prüfen localStorage. Wenn 'true', dann false (kein Wizard). Sonst true.
    
    // --- SYNC CONFLICT STATE ---
    const [syncConflict, setSyncConflict] = useState(null); // Wenn Daten da sind: { local, cloud }
    // --- ONBOARDING STATE (Mit Fix für Password Reset) ---
    const [showWizard, setShowWizard] = useState(() => {
        // 1. Prüfen: Kommen wir gerade von einem Passwort-Reset-Link?
        const hash = window.location.hash;
        const isRecovery = hash && hash.includes('type=recovery');
        
        if (isRecovery) {
            return false; // KEIN Wizard anzeigen, wir müssen zum Passwort-Reset!
        }

        // 2. Normaler Check: War der User schon mal hier?
        return !localStorage.getItem('vocabApp_hasOnboarded');
    });

    const [view, setView] = useState('home'); 
    const [vocabulary, setVocabulary] = useState([]); // Startet leer, useEffect füllt es sofort
    const [userProgress, setUserProgress] = useState({}); 
    const [generatedSentences, setGeneratedSentences] = useState([]); // <--- NEU
    const [librarySearch, setLibrarySearch] = useState(''); // Suche in der Library
    const [showReviewModal, setShowReviewModal] = useState(false); // Modal für Review-Start
    const [selectedWord, setSelectedWord] = useState(null); // Welches Wort wir gerade anschauen
    const [showStats, setShowStats] = useState(false);
    const [exploreMode, setExploreMode] = useState('main');
    const [expandedCategory, setExpandedCategory] = useState(null);
    const [selectedTopicId, setSelectedTopicId] = useState(null); // Welches Thema ist offen?
    const [readerMode, setReaderMode] = useState('select'); // 'select', 'reading', 'quiz', 'finish'
    const [currentStory, setCurrentStory] = useState(null);
    const [loadingStory, setLoadingStory] = useState(false);
    const [quizAnswers, setQuizAnswers] = useState({});
    const [showAuthModal, setShowAuthModal] = useState(false);
    //Generated Story
    const [storyConfig, setStoryConfig] = useState({ length: 'medium', level: 'auto' }); 
    const [clickedWord, setClickedWord] = useState(null);
    const [isSpeaking, setIsSpeaking] = useState(false);  
    // NEU: State für den Lade-Text
    const [loadingTip, setLoadingTip] = useState("Preparing your story...");
    

    // Session State
    const [activeSession, setActiveSession] = useState([]);
    const [sessionQueue, setSessionQueue] = useState([]); 
    const [currentIndex, setCurrentIndex] = useState(0); 
    const [isFlipped, setIsFlipped] = useState(false);
    const [sessionResults, setSessionResults] = useState({ correct: 0, wrong: 0 });

    // AI & Cache State (HIER SIND DIE ÄNDERUNGEN)
    const [exampleCache, setExampleCache] = useState({}); // Speichert Beispiele pro Wort-Rank
    const [examplesVisible, setExamplesVisible] = useState(false); // Klappt Beispiele auf/zu
    // Session State
    const [testConfig, setTestConfig] = useState({ startRank: 1, endRank: 50, count: 20 });
    const [smartConfig, setSmartConfig] = useState({ sessionSize: 15, rangeStart: 1, rangeEnd: 5000 });
    const [reviewCount, setReviewCount] = useState(20);
    const [aiExamples, setAiExamples] = useState(null);
    const [loadingExamples, setLoadingExamples] = useState(false);

    const [sortType, setSortType] = useState('rank'); 
    const [sortDir, setSortDir] = useState('asc'); // 'asc' (aufsteigend) oder 'desc' (absteigend)
    // --- STATE MANAGEMENT ---
    // ... deine anderen States ...
    const [availableVoices, setAvailableVoices] = useState([]); // Liste aller Stimmen
    const [selectedVoiceURI, setSelectedVoiceURI] = useState(null); // Die gewählte Stimme

    // Translator
    const [mode, setMode] = useState('translate'); 
    const [direction, setDirection] = useState('fr-en');
    const [input, setInput] = useState('');
    const [translationData, setTranslationData] = useState(null);
    const [correctionData, setCorrectionData] = useState(null);
    const [loading, setLoading] = useState(false);

    const [loadingTranslation, setLoadingTranslation] = useState(false); // <--- NEU

    const [newsData, setNewsData] = useState([]);
    
    const [currentJoke, setCurrentJoke] = useState(null);
    const [loadingContent, setLoadingContent] = useState(false);
    
    // --- READER & PROGRESS STATE (NEU) ---
    const [pageIndex, setPageIndex] = useState(0); // Aktuelle Seite im Buch
    const [bookProgress, setBookProgress] = useState(() => {
        const saved = localStorage.getItem('vocabApp_bookProgress');
        return saved ? JSON.parse(saved) : {}; 
    });
    // Du solltest diese Zeile haben:
    const [authLoading, setAuthLoading] = useState(true);
    /* Innerhalb von function App(), oben bei den States */
    
    /* Innerhalb von function App() */
    // --- AUTH CHECK EFFECT (Bugfix für Google Redirect) ---
    // --- AUTH CHECK EFFECT (Korrigiert) ---
    // --- AUTH CHECK & DEBUGGING ---
    // --- AUTH CHECK & LISTENER (Final & Stabil) ---
    // --- AUTH & PROFILE CHECK ---
    // --- AUTH & PROFILE CHECK ---
    // --- AUTH & PROFILE CHECK ---
    // --- AUTH & PROFILE CHECK & SYNC ---
    useEffect(() => {
        // Hilfsfunktion: Profil prüfen
        const checkProfile = async (userId) => {
            const { data, error } = await supabase
                .from('profiles')
                .select('nickname')
                .eq('id', userId)
                .maybeSingle(); 
            
            if (data && data.nickname) {
                setNickname(data.nickname);
            } else {
                // Wenn kein Profil da ist (oder wir es nicht lesen konnten):
                console.log("Profile missing or incomplete. Attempting upsert...");
                
                // WICHTIG: .upsert() statt .insert() verhindert den 409 Fehler!
                // Es erstellt das Profil nur, wenn es noch NICHT existiert.
                const { error: upsertError } = await supabase
                    .from('profiles')
                    .upsert({ id: userId, nickname: 'Learner' }, { onConflict: 'id' });

                if (!upsertError) {
                    setNickname('Learner');
                    // Wenn es ein neuer User ist, zeige Wizard
                    setShowWizard(true); 
                } else {
                    console.error("Profile creation failed:", upsertError);
                }
            }
        };

        // 1. Initialer Check beim Laden der Seite
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session) {
                setSession(session);
                checkProfile(session.user.id);
                
                // WICHTIG: Auch beim Neuladen (F5) synchronisieren!
                const currentLocal = JSON.parse(localStorage.getItem('vocabApp_progress') || '{}');
                syncWithCloud(currentLocal);
                
                setAuthLoading(false);
            } else {
                // Check auf Hash für Redirects (damit Loading nicht zu früh aufhört)
                const hash = window.location.hash;
                const isRedirect = hash && (hash.includes('access_token') || hash.includes('error_description'));
                
                if (!isRedirect) setAuthLoading(false);
            }
        });

        // 2. Event Listener (Reagiert auf Login, Logout, Reset)
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            console.log("Auth Event:", event);

            // A: Passwort Reset Link geklickt
            // A: User kommt über Passwort-Reset-Link
            if (event === 'PASSWORD_RECOVERY') {
                setView('update-password'); // Zwinge ihn auf den neuen Screen
                setShowWizard(false);       // Zur Sicherheit Wizard ausblenden
            }
            // B: Erfolgreich eingeloggt
            else if (event === 'SIGNED_IN' || event === 'INITIAL_SESSION') {
                setSession(session);
                if (session) {
                    checkProfile(session.user.id);
                    // Daten mergen
                    const currentLocal = JSON.parse(localStorage.getItem('vocabApp_progress') || '{}');
                    syncWithCloud(currentLocal);
                }
                setAuthLoading(false);

                // URL aufräumen (außer bei Password Recovery, da wird der Token noch gebraucht)
                if (window.location.hash && event !== 'PASSWORD_RECOVERY') {
                    window.history.replaceState(null, null, window.location.pathname);
                }
            } 
            // C: Ausgeloggt
            else if (event === 'SIGNED_OUT') {
                setSession(null);
                setAuthLoading(false);
                setShowOnboarding(false);
                setNickname("Learner"); // Reset auf Default
            }
        });

        return () => subscription.unsubscribe();
    }, []);
// --- REALTIME & FOCUS SYNC ---
// --- REALTIME & FOCUS SYNC (Korrigiert) ---
    // --- STATE ---
    // Speichert IDs der bestandenen Themen: { 'a1_articles': true, 'b2_subjunctive': true }
    const [grammarProgress, setGrammarProgress] = useState(() => {
        // Initial aus LocalStorage laden
        const local = {};
        // Wir iterieren kurz über alle LocalStorage Keys um die Grammar-Sachen zu finden
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key.startsWith('grammar_passed_')) {
                const topicId = key.replace('grammar_passed_', '');
                local[topicId] = true;
            }
        }
        return local;
    });
    // --- REALTIME LISTENER & SYNC ---
    useEffect(() => {
        if (!session) return;

        // Channel abonnieren
        const channel = supabase.channel('global_sync')
            
            // 1. VOKABELN (User Progress)
            .on('postgres_changes', { event: '*', schema: 'public', table: 'user_progress', filter: `user_id=eq.${session.user.id}` }, 
                (payload) => {
                    const newData = payload.new;
                    setUserProgress(prev => {
                        const updated = { ...prev, [newData.word_rank]: { box: newData.box, nextReview: parseInt(newData.next_review||0), interval: newData.interval, ease: newData.ease_factor||2.5 } };
                        localStorage.setItem('vocabApp_progress', JSON.stringify(updated));
                        return updated;
                    });
                }
            )

            // 2. GRAMMATIK (User Grammar)
            .on('postgres_changes', { event: '*', schema: 'public', table: 'user_grammar', filter: `user_id=eq.${session.user.id}` },
                (payload) => {
                    const newTopic = payload.new.topic_id;
                    console.log("📘 Grammar Realtime Update:", newTopic);
                    setGrammarProgress(prev => {
                        const updated = { ...prev, [newTopic]: true };
                        localStorage.setItem(`grammar_passed_${newTopic}`, 'true');
                        return updated;
                    });
                }
            )

            // 3. BEISPIELSÄTZE (NEU: Empfängt KI-Sätze)
            .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'examples' }, 
                (payload) => {
                    console.log("✨ Neuer KI-Satz empfangen:", payload.new);
                    
                    // Wir formatieren den Satz so, wie die UI ihn braucht
                    const newExample = { fr: payload.new.sentence_fr, en: payload.new.sentence_en };
                    
                    // State updaten: Fügt den neuen Satz oben an die Liste an
                    setAiExamples(prev => {
                        const list = Array.isArray(prev) ? prev : [];
                        return [newExample, ...list];
                    });
                    
                    // Lade-Animation beenden
                    setGenerating(false);
                    // Falls du die Beispiele aufgeklappt haben willst:
                    setExamplesVisible(true);
                }
            )
            .subscribe();

        // Focus Listener (Wenn man den Tab wechselt und zurückkommt)
        const handleFocus = () => {
            if (document.visibilityState === 'visible') {
                const currentLocalVocab = JSON.parse(localStorage.getItem('vocabApp_progress') || '{}');
                syncWithCloud(currentLocalVocab, true);
                syncGrammarWithCloud(true);
            }
        };
        
        // Initialer Sync beim Start
        const currentLocalVocab = JSON.parse(localStorage.getItem('vocabApp_progress') || '{}');
        syncWithCloud(currentLocalVocab, true);
        syncGrammarWithCloud(true);

        window.addEventListener('visibilitychange', handleFocus);
        window.addEventListener('focus', handleFocus);

        // Cleanup beim Verlassen
        return () => {
            supabase.removeChannel(channel);
            window.removeEventListener('visibilitychange', handleFocus);
            window.removeEventListener('focus', handleFocus);
        };
    }, [session]); 
    
    // Logout Funktion
    const handleLogout = async () => {
        await supabase.auth.signOut();
        setSession(null);
        alert("Logged out. You are now in Guest Mode.");
    };
    // --- SYNC & MERGE LOGIC ---
    // --- AUTO-SYNC ON FOCUS ---
    useEffect(() => {
        const handleFocus = () => {
            // Wenn wir eingeloggt sind und das Fenster wieder in den Vordergrund kommt
            if (session && document.visibilityState === 'visible') {
                console.log("👀 App in focus - triggering silent sync...");
                
                // Wir nehmen den aktuellsten Stand aus dem LocalStorage (der ist am sichersten)
                const currentLocal = JSON.parse(localStorage.getItem('vocabApp_progress') || '{}');
                
                // Silent Sync starten
                syncWithCloud(currentLocal, true);
            }
        };

        // Event Listener hinzufügen
        window.addEventListener('visibilitychange', handleFocus);
        window.addEventListener('focus', handleFocus);

        return () => {
            window.removeEventListener('visibilitychange', handleFocus);
            window.removeEventListener('focus', handleFocus);
        };
    }, [session]); // Feuert neu, wenn sich der Login-Status ändert
    // --- SYNC & MERGE LOGIC ---
    // --- NEUE SYNC LOGIK (Konflikt-basiert) ---
    // --- SYNC LOGIC (Optimiert für Realtime) ---
    const syncWithCloud = async (localData, silent = false) => {
        if (!session) return;
        const userId = session.user.id;

        try {
            // 1. Cloud Daten holen
            const { data: cloudData, error } = await supabase
                .from('user_progress')
                .select('*')
                .eq('user_id', userId);

            if (error) throw error;

            // 2. Mergen
            const mergedProgress = { ...localData };
            const updatesForCloud = [];

            cloudData.forEach(row => {
                const localEntry = mergedProgress[row.word_rank];
                
                // Logik: Nimm immer den "höheren" Fortschritt oder das neuste Datum
                // Hier vereinfacht: Wenn Cloud-Box höher ist -> Nimm Cloud
                if (!localEntry || row.box > localEntry.box) {
                    mergedProgress[row.word_rank] = {
                        box: row.box,
                        nextReview: parseInt(row.next_review),
                        interval: row.interval,
                        ease: row.ease_factor
                    };
                }
            });

            // Prüfen was wir hochladen müssen (Lokal > Cloud)
            Object.entries(mergedProgress).forEach(([rank, prog]) => {
                const cloudEntry = cloudData.find(c => c.word_rank === parseInt(rank));
                
                // Wenn lokal existiert, aber Cloud nicht ODER lokal Box höher ist
                if (!cloudEntry || prog.box > cloudEntry.box) {
                    updatesForCloud.push({
                        user_id: userId,
                        word_rank: parseInt(rank),
                        box: prog.box,
                        next_review: prog.nextReview,
                        interval: prog.interval,
                        ease_factor: prog.ease || 2.5
                    });
                }
            });

            // 3. Hochladen
            if (updatesForCloud.length > 0) {
                if (!silent) console.log(`Uploading ${updatesForCloud.length} updates...`);
                
                // WICHTIG: Wir nutzen jetzt explizit den Constraint-Namen oder lassen Supabase raten (was oft besser klappt ohne onConflict Angabe bei sauberem Schema)
                const { error } = await supabase
                    .from('user_progress')
                    .upsert(updatesForCloud, { onConflict: 'user_id, word_rank' }); 
                    // ^-- Das muss exakt mit dem UNIQUE Constraint in SQL übereinstimmen

                if (error) {
                    console.error("Sync Upload Error:", error);
                    // Falls Fehler 400 kommt, ist oft der Constraint falsch benannt.
                    // Debugging-Hilfe:
                    // alert("Sync Error: " + error.message); 
                }
            }

            // 4. Lokal anwenden
            setUserProgress(mergedProgress);
            // Speichern in LocalStorage passiert automatisch durch deinen anderen useEffect

            if (!silent) console.log("Sync complete.");

        } catch (err) {
            console.error("Sync failed:", err);
            
            // NEU: Notbremse bei "User nicht gefunden" (Zombie Session)
            if (err.code === '23503' || (err.details && err.details.includes('Key is not present in table "users"'))) {
                console.warn("User does not exist in DB anymore. Forcing logout.");
                supabase.auth.signOut();
                localStorage.clear();
                window.location.reload();
            }
        }
    };
    // In App():
    const markGrammarComplete = async (topicId) => {
        // 1. Lokal update (schnell)
        setGrammarProgress(prev => ({ ...prev, [topicId]: true }));
        localStorage.setItem(`grammar_passed_${topicId}`, 'true');

        // 2. Cloud update (im Hintergrund)
        if (session) {
            await supabase.from('user_grammar').upsert({
                user_id: session.user.id,
                topic_id: topicId,
                passed: true
            });
        }
    };
    
    // --- GRAMMAR SYNC ---
    const syncGrammarWithCloud = async (silent = false) => {
        if (!session) return;
        const userId = session.user.id;

        try {
            // 1. Cloud Daten holen
            const { data: cloudData, error } = await supabase
                .from('user_grammar')
                .select('topic_id')
                .eq('user_id', userId);

            if (error) throw error;

            // 2. Mergen (True gewinnt immer)
            const newProgress = { ...grammarProgress };
            const updatesForCloud = [];

            // A: Cloud -> Lokal
            cloudData.forEach(row => {
                if (!newProgress[row.topic_id]) {
                    newProgress[row.topic_id] = true;
                    // Auch lokal speichern für Offline-Nutzung
                    localStorage.setItem(`grammar_passed_${row.topic_id}`, 'true');
                }
            });

            // B: Lokal -> Cloud (Was fehlt oben?)
            Object.keys(newProgress).forEach(topicId => {
                const inCloud = cloudData.some(row => row.topic_id === topicId);
                if (!inCloud) {
                    updatesForCloud.push({ user_id: userId, topic_id: topicId, passed: true });
                }
            });

            // 3. Upload
            if (updatesForCloud.length > 0) {
                await supabase.from('user_grammar').upsert(updatesForCloud, { onConflict: 'user_id, topic_id' });
                if (!silent) console.log(`Uploaded ${updatesForCloud.length} grammar topics.`);
            }

            setGrammarProgress(newProgress);
            
        } catch (err) {
            console.error("Grammar sync failed:", err);
        }
    };
    // Hilfsfunktion: Cloud mit Lokal überschreiben
    const overwriteCloud = async (data) => {
        const userId = session.user.id;
        const updates = Object.entries(data).map(([rank, prog]) => ({
            user_id: userId,
            word_rank: parseInt(rank),
            box: prog.box,
            next_review: prog.nextReview,
            interval: prog.interval,
            ease_factor: prog.ease || 2.5
        }));

        // Erst alles löschen (damit "tote" Wörter weg sind), dann neu einfügen
        // Oder Upsert nutzen. Upsert ist sicherer.
        if (updates.length > 0) {
            const { error } = await supabase.from('user_progress').upsert(updates, { onConflict: 'user_id, word_rank' });
            if (error) throw error;
        }
    };
    // Helper: Text in Buchseiten aufteilen (ca. 450 Zeichen pro Seite, aber am Satzende/Absatz)
    const paginateText = (text) => {
        if (!text) return [];
        // Wir splitten erst in Absätze
        const paragraphs = text.split('\n');
        const pages = [];
        let currentPage = "";

        paragraphs.forEach(para => {
            // Wenn die Seite voll ist (über 450 Zeichen) -> neue Seite
            if ((currentPage + para).length > 450 && currentPage.length > 0) {
                pages.push(currentPage);
                currentPage = para + "\n";
            } else {
                currentPage += para + "\n";
            }
        });
        if (currentPage.trim()) pages.push(currentPage);
        return pages;
    };

    // Helper: Fortschritt speichern
    const saveProgress = (bookId, chapterIdx, pageIdx, isComplete = false) => {
        const newProgress = { ...bookProgress };
        
        if (!newProgress[bookId]) newProgress[bookId] = { completedChapters: [] };
        
        newProgress[bookId].lastChapter = chapterIdx;
        newProgress[bookId].lastPage = pageIdx;
        newProgress[bookId].lastActive = Date.now(); // Damit wir wissen, was zuletzt gelesen wurde
        
        if (isComplete && !newProgress[bookId].completedChapters.includes(chapterIdx)) {
            newProgress[bookId].completedChapters.push(chapterIdx);
        }

        setBookProgress(newProgress);
        localStorage.setItem('vocabApp_bookProgress', JSON.stringify(newProgress));
    };
    
    // Ist der Witz aufgelöst?
    const [jokeRevealed, setJokeRevealed] = useState(false);
    // Audio & Voices (WICHTIG!)
    // ... oben in function App() ...
    // ... deine anderen States ...
    const [selectedGrammarId, setSelectedGrammarId] = useState(null); // <--- NEU
    const [questionTranslation, setQuestionTranslation] = useState(null); // <--- NEU: Für die Frage
    // ...
    const [seenMemeIds, setSeenMemeIds] = useState(() => {
        const saved = localStorage.getItem('vocabApp_seenMemes');
        return saved ? JSON.parse(saved) : [];
    });
    const [dailyMemeCount, setDailyMemeCount] = useState(() => {
        const today = new Date().toDateString();
        const saved = localStorage.getItem('vocabApp_dailyMemeDate');
        const count = localStorage.getItem('vocabApp_dailyMemeCount');
        // Wenn heute ein neuer Tag ist, reset auf 0
        if (saved !== today) {
            localStorage.setItem('vocabApp_dailyMemeDate', today);
            localStorage.setItem('vocabApp_dailyMemeCount', '0');
            return 0;
        }
        return parseInt(count) || 0;
    });
    
    
    // --- MEME STATE & LOGIC (In App einfügen) ---
/* Innerhalb von function App(), bei den anderen States */
    const [readingLevel, setReadingLevel] = useState('original'); // 'simple', 'advanced', 'original'
    const [selectedBook, setSelectedBook] = useState(null); // Welches Buch ist offen?
    const [libraryTab, setLibraryTab] = useState('books'); // <--- DAS FEHLT DIR

    // --- CHAT STATES ---
    const [chatScenario, setChatScenario] = useState(null); // Das gewählte Objekt
    const [chatLevel, setChatLevel] = useState('A2'); // Default Level
    const [chatHistory, setChatHistory] = useState([]); // [{role: 'user', content: '...'}, ...]
    const [chatHearts, setChatHearts] = useState(3); // Leben (3/3)
    const [chatStatus, setChatStatus] = useState('lobby'); // 'lobby', 'active', 'won', 'lost'
    const [chatInput, setChatInput] = useState('');
    const [chatLoading, setChatLoading] = useState(false);
    const [suggestions, setSuggestions] = useState([]); 
    const [activeTranslation, setActiveTranslation] = useState(null); // Für das schöne Popup
    const [apiStatus, setApiStatus] = useState('checking'); // 'online', 'offline', 'checking'
    
    const [selectedMsg, setSelectedMsg] = useState(null); // Umbenannt von activeTranslation, da es jetzt mehr kann
//s
    // --- JOKE SYSTEM ---
    const [dailyJoke, setDailyJoke] = useState(null); // Der Joke des Tages
    const [savedJokes, setSavedJokes] = useState(() => {
        const saved = localStorage.getItem('vocabApp_savedJokes');
        return saved ? JSON.parse(saved) : [];
    });

    const [viewingJoke, setViewingJoke] = useState(null); // Aktuell angeschauter Joke
    const [showJokeModal, setShowJokeModal] = useState(false); // Popup für Joke
    const [collectionsTab, setCollectionsTab] = useState('jokes'); // 'jokes' oder 'memes'
    
    // --- DAILY WRITER STATES ---
    const [dailyWriterMission, setDailyWriterMission] = useState(null);
    const [dailyWriterLoading, setDailyWriterLoading] = useState(false);
    const [dailyWriterText, setDailyWriterText] = useState('');
    const [dailyWriterScore, setDailyWriterScore] = useState(null);
    const [dailyWriterFeedback, setDailyWriterFeedback] = useState(null); // {explanation, corrected}
    const [completedMiniTasks, setCompletedMiniTasks] = useState([]);
    
    // Helper: Find next grammar topic to learn
    const getNextGrammarTopic = () => {
        for (const module of GRAMMAR_MODULES) {
            for (const topic of module.topics) {
                if (localStorage.getItem(`grammar_passed_${topic.id}`) !== 'true') {
                    return { topic, module };
                }
            }
        }
        return null; // All completed
    };
    
    // Helper: Calculate effective CEFR level based on vocab AND grammar
    const getEffectiveCEFRLevel = () => {
        // Vocabulary level based on learned words
        const learnedCount = Object.values(userProgress).filter(p => p.box >= 2).length;
        let vocabLevel = 'A1';
        if (learnedCount >= 5000) vocabLevel = 'C1';
        else if (learnedCount >= 3000) vocabLevel = 'B2';
        else if (learnedCount >= 1500) vocabLevel = 'B1';
        else if (learnedCount >= 500) vocabLevel = 'A2';
        
        // Grammar level based on completed lessons
        let grammarLevel = 'A1';
        const nextGrammar = getNextGrammarTopic();
        if (nextGrammar) {
            grammarLevel = nextGrammar.module?.id?.toUpperCase() || 'A1';
        } else {
            grammarLevel = 'C1'; // All grammar done
        }
        
        // Use the LOWER of the two levels (bottleneck principle)
        const levels = ['A1', 'A2', 'B1', 'B2', 'C1'];
        const vocabIndex = levels.indexOf(vocabLevel);
        const grammarIndex = levels.indexOf(grammarLevel);
        
        return levels[Math.min(vocabIndex, grammarIndex)];
    };
    
    // Load Daily Writer Mission from API
    const loadDailyWriterMission = async () => {
        setDailyWriterLoading(true);
        try {
            const nextGrammar = getNextGrammarTopic();
            const effectiveLevel = getEffectiveCEFRLevel();
            
            const res = await fetch('/api/daily-writer', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    grammarTopic: nextGrammar?.topic?.id || null,
                    grammarTitle: nextGrammar?.topic?.title || 'General French',
                    level: effectiveLevel
                })
            });
            
            if (!res.ok) throw new Error('Failed to load mission');
            
            const mission = await res.json();
            setDailyWriterMission(mission);
            setCompletedMiniTasks([]);
            setDailyWriterText('');
            setDailyWriterScore(null);
            setDailyWriterFeedback(null);
        } catch (err) {
            console.error('Error loading mission:', err);
            // Fallback mission
            setDailyWriterMission({
                mainTask: "Write an email to a friend about your weekend plans.",
                topic: "Weekend Plans",
                recipient: "a friend",
                type: "email",
                grammarFocus: "General French",
                miniTasks: [
                    "Start with a friendly greeting",
                    "Mention what you did last weekend (passé composé)",
                    "Describe your plans for this weekend",
                    "Ask your friend about their plans",
                    "End with a warm closing"
                ],
                bonusWord: "génial",
                minWords: 50,
                timeMinutes: 10,
                exampleOpener: "Salut ! Comment vas-tu ?"
            });
            setCompletedMiniTasks([]);
        } finally {
            setDailyWriterLoading(false);
        }
    };
    const [showScrollTop, setShowScrollTop] = useState(false); // Scroll-to-Top Button

    // --- HEADER TIME STATE ---
    const [currentTime, setCurrentTime] = useState(new Date());
    
    useEffect(() => {
        const timer = setInterval(() => setCurrentTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);
    
    // --- SCROLL TRACKING ---
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // --- DAILY JOKE SETUP ---
    useEffect(() => {
        const today = new Date().toDateString();
        const lastJokeDate = localStorage.getItem('vocabApp_lastJokeDate');
        
        // Wenn heute ein neuer Tag ist, wähle einen neuen Joke
        if (lastJokeDate !== today) {
            const randomJoke = JOKE_DB[Math.floor(Math.random() * JOKE_DB.length)];
            setDailyJoke(randomJoke);
            localStorage.setItem('vocabApp_lastJokeDate', today);
            localStorage.setItem('vocabApp_dailyJoke', JSON.stringify(randomJoke));
        } else {
            // Lade den gespeicherten Joke
            const saved = localStorage.getItem('vocabApp_dailyJoke');
            if (saved) {
                setDailyJoke(JSON.parse(saved));
            }
        }
    }, []);

    // --- HEALTH CHECK (Beim Start) ---
    const DailyEmailTask = ({ level, onComplete }) => {
        // This mini-card shows a preview and links to the full Daily Writer
        const nextGrammar = getNextGrammarTopic();

        return (
            <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
                <div className="p-5">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-indigo-100 text-indigo-600 p-2.5 rounded-xl"><PenTool size={22}/></div>
                        <div>
                            <h3 className="font-bold text-slate-800 text-lg">Daily Writer</h3>
                            {nextGrammar && (
                                <p className="text-xs text-indigo-500 font-medium">Focus: {nextGrammar.topic.title}</p>
                            )}
                        </div>
                    </div>

                    {/* Preview Info */}
                    {dailyWriterMission ? (
                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-4">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-xs font-bold text-indigo-500 bg-indigo-50 px-2 py-0.5 rounded">{dailyWriterMission.type}</span>
                                <span className="text-xs text-slate-400">→ {dailyWriterMission.recipient}</span>
                            </div>
                            <p className="text-slate-700 font-medium mb-2">{dailyWriterMission.topic}</p>
                            <div className="text-xs text-slate-500">{dailyWriterMission.miniTasks?.length || 5} tasks • Min. {dailyWriterMission.minWords || 50} words</div>
                        </div>
                    ) : (
                        <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 mb-4 text-center">
                            <p className="text-indigo-700 text-sm">Click to generate your personalized writing mission!</p>
                        </div>
                    )}

                    {/* CTA Button */}
                    <button 
                        onClick={() => { 
                            if (!dailyWriterMission) {
                                loadDailyWriterMission();
                            }
                            setDailyWriterText(''); 
                            setDailyWriterScore(null); 
                            setDailyWriterFeedback(null);
                            setCompletedMiniTasks([]);
                            setView('daily-writer'); 
                        }} 
                        className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 active:scale-95 transition-all flex items-center justify-center gap-2"
                    >
                        <Play size={18}/> {dailyWriterMission ? 'Continue Writing' : 'Start Mission'}
                    </button>
                </div>
            </div>
        );
    };
 const checkHealth = async () => {
        setApiStatus('checking'); 
        try {
            // Kurzer Timeout (3s)
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 3000);

            // NUR GET-Request - das nutzt KEINE Gemini API!
            const res = await fetch('/api/lookup', {
                method: 'GET',
                signal: controller.signal
            });
            clearTimeout(timeoutId);
            
            if (res.ok) {
                setApiStatus('online');
            } else {
                console.warn("Health Check: Server returned error", res.status);
                setApiStatus('offline');
            }
        } catch (e) {
            console.error("Health Check failed:", e);
            setApiStatus('offline');
        }
    };

    // --- 2. DER EFFEKT (Ruft die Funktion auf) ---
    // --- 2. DER EFFEKT (Korrigiert: Nur EINMAL beim Start) ---
    useEffect(() => {
        // Sofort beim Start einmal prüfen
        checkHealth();
        
        // WICHTIG: Das Interval wurde entfernt, um API-Quota zu sparen!
        // Wir prüfen nicht mehr jede Minute.
    }, []);


    // Die sichere Fetch-Funktion (Mix aus All-Time und Week)
    

    // MEME HANDLER FUNKTIONEN
    


    // AUTOMATISCHER START (Der Trigger)
    // Feuert nur, wenn wir im Meme-Modus sind UND die Liste noch leer ist
    useEffect(() => {
        if (view === 'explore' && exploreMode === 'memes' && memesData.length === 0) {
            fetchMixedMemes();
        }
    }, [view, exploreMode]);
    // Speichert automatisch bei Änderungen
    useEffect(() => {
        localStorage.setItem('vocabApp_seenMemes', JSON.stringify(seenMemeIds));
    }, [seenMemeIds]);

        // Witze States:
    const [showPunchline, setShowPunchline] = useState(false);   // Zeigt die französische Antwort
    const [showTranslation, setShowTranslation] = useState(false); // Zeigt die englische Erklärung

    const stopAudio = () => {
        window.speechSynthesis.cancel();
    };
    // Initial Load & Persistence
// Initial Load & Persistence
// --- STATE ---
    // ... deine anderen States ...
    const [streak, setStreak] = useState(0); // Neuer State für Flammen

    // --- STREAK LOGIC (Beim Start prüfen) ---
    useEffect(() => {
        const today = new Date().toDateString();
        const storedStreak = JSON.parse(localStorage.getItem('vocabApp_streak')) || { count: 0, lastDate: null };
        
        if (storedStreak.lastDate === today) {
            // Heute schon da gewesen -> Nichts ändern, nur laden
            setStreak(storedStreak.count);
        } else {
            // Datum vergleichen
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            
            if (storedStreak.lastDate === yesterday.toDateString()) {
                // Gestern war der letzte Login -> Streak +1
                const newCount = storedStreak.count + 1;
                setStreak(newCount);
                localStorage.setItem('vocabApp_streak', JSON.stringify({ count: newCount, lastDate: today }));
            } else {
                // Länger her (oder erster Start) -> Reset auf 1
                setStreak(1);
                localStorage.setItem('vocabApp_streak', JSON.stringify({ count: 1, lastDate: today }));
            }
        }
    }, []);  
    useEffect(() => {
            const handleScroll = () => {
                if (window.scrollY > 300) {
                    setShowScrollTop(true);
                } else {
                    setShowScrollTop(false);
                }
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }, []);
    // --- AUDIO CLEANUP (Bugfix) ---
    // Stoppt Audio sofort, wenn man den Tab wechselt oder den Modus im Reader ändert
    useEffect(() => {
        window.speechSynthesis.cancel();
        // Falls du eine "isSpeaking" Variable in renderReader hast, wird diese beim Re-Render eh resettet
    }, [view, readerMode]);
    
    
        // --- VOICES LOADER ---
    useEffect(() => {
        const loadVoices = () => {
            const voices = window.speechSynthesis.getVoices();
            // Filter: Nur Französisch
            const frVoices = voices.filter(v => v.lang.includes('fr'));
            setAvailableVoices(frVoices);

            // Versuche, eine gespeicherte Stimme zu laden
            const savedVoice = localStorage.getItem('vocabApp_voice');
            if (savedVoice) {
                setSelectedVoiceURI(savedVoice);
            } else if (frVoices.length > 0) {
                // Smart Select: Versuche Google oder Premium zu finden, sonst nimm die erste
                const bestVoice = frVoices.find(v => v.name.includes('Google') || v.name.includes('Premium') || v.name.includes('Enhanced')) || frVoices[0];
                setSelectedVoiceURI(bestVoice.voiceURI);
            }
        };

        loadVoices();
        // Chrome braucht diesen Event-Listener, da Stimmen asynchron laden
        window.speechSynthesis.onvoiceschanged = loadVoices;
        
        return () => { window.speechSynthesis.onvoiceschanged = null; };
    }, []);
    /* script.js - Innerhalb von function App() */

    useEffect(() => {
        // 1. Fortschritt laden
        const savedProgress = localStorage.getItem('vocabApp_progress');
        if (savedProgress) {
            setUserProgress(JSON.parse(savedProgress));
        }

        // 2. Vokabeln laden (HIER IST DIE ÄNDERUNG)
        // Wir bevorzugen die lokale Datei (window.vocab_List), da diese sofort da ist.
        if (typeof window.vocab_List !== 'undefined' && Array.isArray(window.vocab_List)) {
            console.log("📂 Loaded local vocabulary:", window.vocab_List.length, "words");
            setVocabulary(window.vocab_List);
        } else {
            console.warn("⚠️ Warning: 'vocab_List' not found. Make sure vocabulary.js is loaded in index.html");
            // Fallback: Leeres Array oder API Call, falls gewünscht
            setVocabulary([]);
        }

        // Nickname laden
        const localNick = localStorage.getItem('vocabApp_nickname');
        if (localNick) setNickname(localNick);
    }, []);

    useEffect(() => {
        localStorage.setItem('vocabApp_progress', JSON.stringify(userProgress));
    }, [userProgress]);
    // --- RESET STATE ON NAVIGATION ---
    useEffect(() => {
        // Klappt Menüs zu
        setExamplesVisible(false); 
        
        // Stoppt Lade-Animationen
        setLoadingExamples(false); 
        
        // Dreht Karte auf Vorderseite
        setIsFlipped(false);       
        
        // FIX: Löscht alte KI-Sätze, damit sie nicht beim nächsten Wort auftauchen!
        setAiExamples(null);       

    }, [currentIndex, view, activeSession]);

    // --- HELPERS ---
    const getNextReviewTime = (box) => {
        const now = Date.now();
        const oneDay = 24 * 60 * 60 * 1000;
        const intervals = [0, 1, 3, 7, 14, 30]; 
        const daysToAdd = intervals[Math.min(box, intervals.length - 1)];
        return now + (daysToAdd * oneDay);
    };

    // --- ANKI ALGORITHM (SM-2 Variation) ---
// --- ANKI ALGORITHM (SM-2 Variation) ---
    // --- ANKI ALGORITHM (SM-2 Variation) ---
    // --- ANKI ALGORITHM (SM-2 Variation) ---
    // --- ANKI ALGORITHM (SM-2 Variation) ---
    // --- ANKI ALGORITHM (SM-2 Variation) ---
    // --- ARTICLE READER LOGIC ---
    // --- ARTICLE READER LOGIC (Optimiert) ---
    // --- ARTICLE READER LOGIC (Verbesserter Cleaner) ---
    // --- ARTICLE READER LOGIC (Aggressiver Cleaner) ---
    // --- IN FUNCTION APP (Verschoben aus renderExplore) ---

    // 1. NEWS FETCHER

    // 2. JOKE HELPERS
    const loadNextJoke = () => {
        setJokeRevealed(false); 
        setQuestionTranslation(null);
        setLoadingContent(true);
        setTimeout(() => {
            // Verhindert, dass der gleiche Witz zweimal hintereinander kommt
            let randomJoke;
            do {
                randomJoke = JOKE_DB[Math.floor(Math.random() * JOKE_DB.length)];
            } while (currentJoke && randomJoke.q === currentJoke.q && JOKE_DB.length > 1);

            setCurrentJoke(randomJoke);
            setLoadingContent(false);
        }, 300);
    };

    const translateQuestion = async () => {
        if (!currentJoke) return;
        try {
            const res = await fetch('/api/translate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: currentJoke.q, targetLang: 'en' })
            });
            const data = await res.json();
            setQuestionTranslation(data.translation);
        } catch (e) {
            setQuestionTranslation("Translation unavailable offline");
        }
    };
    // --- SICHERHEITS-EFFECT (Verhindert API Loops) ---
    useEffect(() => {
        if (view === 'explore') {
            // Nur laden, wenn wir im Artikel-Modus sind UND die Liste leer ist UND wir nicht schon laden
            if (exploreMode === 'articles' && newsData.length === 0 && !loadingContent) {
                fetchNews();
            }
            // Nur laden, wenn wir im Witz-Modus sind UND kein Witz da ist UND wir nicht schon laden
            if (exploreMode === 'jokes' && !currentJoke && !loadingContent) {
                loadNextJoke();
            }
            // Memes Logic ist bereits separat, das ist ok.
        }
    }, [view, exploreMode]); // Feuert nur, wenn man den Tab wechselt
    
    /* Innerhalb von App(), ersetzt openArticle */
    /* Innerhalb von App() */
    const openBookChapter = (book, chapterIndex, restorePage = false) => {
        const chapter = book.chapters[chapterIndex];
        const textContent = chapter[readingLevel] || chapter.original; 
        
        setCurrentStory({
            id: book.id, // Wichtig für den Speicherstand
            chapterIndex: chapterIndex, // Wichtig für den Speicherstand
            title: `${book.title} - ${chapter.title}`,
            text: textContent,
            quiz: null, 
            isArticle: false
        });

        // Lade immer den gespeicherten Fortschritt, wenn vorhanden
        if (bookProgress[book.id]) {
            setPageIndex(bookProgress[book.id].lastPage || 0);
        } else {
            setPageIndex(0);
        }

        setReaderMode('reading');
        setView('reader');
    };
    const calculateAnkiStats = (currentStats, quality) => {
        // quality: 0=Again, 1=Hard, 2=Good, 3=Easy
        
        let interval = currentStats?.interval ?? 0;
        let ease = currentStats?.ease ?? 2.5;
        let repetitions = currentStats?.repetitions ?? 0;
        
        let nextInterval;
        let nextRepetitions = repetitions + 1;
        let nextEase = ease;

        // --- LOGIK: INTERVALL BERECHNEN ---
        
        // 1. Neues Wort (oder nach Reset)
        if (interval === 0) {
            if (quality === 0) { // Again
                nextInterval = 0; 
                nextRepetitions = 0;
            } else if (quality === 1) { // Hard
                nextInterval = 0; // Bleibt 0, muss nochmal geübt werden
                // Strafe für Ease, auch am Anfang!
                nextEase = Math.max(1.3, ease - 0.15); 
            } else if (quality === 2) { // Good
                nextInterval = 1; 
            } else { // Easy
                nextInterval = 3; // Wir reduzieren den "Easy"-Sprung von 4 auf 3 Tage
                nextEase += 0.15;
            }
        } 
        // 2. Wiederholung
        else {
            if (quality === 0) { // Vergessen
                nextInterval = 0;
                nextRepetitions = 0;
                nextEase = Math.max(1.3, ease - 0.2);
            } else {
                // Ease Anpassung
                if (quality === 1) nextEase -= 0.15; // Hard macht es schwerer für die Zukunft
                if (quality === 3) nextEase += 0.15; // Easy macht es leichter
                nextEase = Math.max(1.3, nextEase);
                
                // Faktor Berechnung
                let factor = (quality === 1) ? 1.2 : (quality === 3 ? nextEase * 1.3 : nextEase);
                nextInterval = Math.ceil(interval * factor);
            }
        }

        // --- NEU: BOX BERECHNUNG (Mapping) ---
        // Wir trennen Tage von Boxen, damit es logischer aussieht.
        let visualBox = 0;
        if (nextInterval === 0) visualBox = 1;       // Lernen / Fehler
        else if (nextInterval <= 3) visualBox = 2;   // 1-3 Tage (Frisch)
        else if (nextInterval <= 10) visualBox = 3;  // 4-10 Tage (Sitzt)
        else if (nextInterval <= 30) visualBox = 4;  // 11-30 Tage (Fest)
        else visualBox = 5;                          // >30 Tage (Langzeit)

        // Sonderfall: Wenn es "Hard" war, darf die Box nicht steigen (außer es war 0)
        if (quality === 1 && interval > 0) {
             // Wir begrenzen die Box visuell auf die aktuelle
             // Inline-Berechnung statt externe Funktion
             let oldBox = 1;
             if (interval <= 0) oldBox = 1;
             else if (interval <= 3) oldBox = 2;
             else if (interval <= 10) oldBox = 3;
             else if (interval <= 30) oldBox = 4;
             else oldBox = 5;
             visualBox = Math.min(visualBox, oldBox);
        }

        return { 
            interval: nextInterval,
            box: visualBox, // Das ist jetzt eine saubere 1-5 Skala
            ease: nextEase, 
            repetitions: nextRepetitions,
            nextReview: Date.now() + (nextInterval * 24 * 60 * 60 * 1000) 
        };
    };
    // --- RENDER TOPIC HUB (Die Detailseite für Themen) ---
    const renderTopicHub = () => {
        // Welches Thema wurde gewählt?
        const topicConfig = COLLECTIONS.topics.find(t => t.id === selectedTopicId);
        
        // Sicherheitscheck: Falls ID nicht gefunden oder TopicContent fehlt
        if (!topicConfig) return <div className="p-8 text-center">Topic not found.</div>;
        
        // Inhalte laden (mit Fallback, falls Content noch nicht geschrieben ist)
        const content = TOPIC_CONTENT[selectedTopicId]; 

        return (
            <div className="w-full pt-6 pb-24 px-1">
                
                {/* 1. HERO HEADER */}
                <div className="relative mb-6">
                    <button 
                        onClick={() => setView('explore')} // Zurück zu Explore
                        className="absolute left-0 top-0 p-2 -ml-2 bg-white/50 backdrop-blur-sm rounded-full text-slate-600 hover:bg-white transition-colors z-10"
                    >
                        <ArrowLeft size={24} />
                    </button>
                    
                    <div className="flex flex-col items-center justify-center pt-8 pb-8 bg-gradient-to-b from-emerald-50 to-white rounded-[2.5rem]">
                        <div className="bg-white p-6 rounded-3xl shadow-sm mb-4 text-emerald-600">
                            {/* Wir klonen das Icon und machen es größer */}
                            {React.cloneElement(topicConfig.icon, { size: 48 })}
                        </div>
                        <h1 className="text-3xl font-bold text-slate-800">{topicConfig.label}</h1>
                        <p className="text-emerald-600/80 text-sm font-medium">{topicConfig.sub}</p>
                    </div>
                </div>

                <div className="space-y-6 px-1">
                    
                    {/* 2. CORE VOCABULARY (Der "Start"-Button) */}
                    <button 
                        onClick={() => startCollectionSession(topicConfig.ids)}
                        className="w-full bg-emerald-600 text-white p-5 rounded-3xl shadow-lg shadow-emerald-200 active:scale-[0.98] transition-all flex items-center justify-between group"
                    >
                        <div className="flex items-center gap-4">
                            <div className="bg-white/20 p-3 rounded-2xl"><Dumbbell size={24} fill="currentColor"/></div>
                            <div className="text-left">
                                <div className="font-bold text-lg">Start Vocab Drill</div>
                                <div className="text-emerald-100 text-xs">{topicConfig.ids.length} essential words</div>
                            </div>
                        </div>
                        <Play size={24} fill="currentColor" />
                    </button>

                    {/* 3. IDIOMS & CULTURE (Nur wenn Content da ist) */}
                    {content?.idioms && (
                        <div>
                            <h3 className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-3 px-2">Local Idioms</h3>
                            <div className="grid gap-3">
                                {content.idioms.map((idiom, idx) => (
                                    <button 
                                        key={idx}
                                        onClick={() => speak(idiom.fr)}
                                        className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm text-left active:scale-[0.98] transition-all relative group"
                                    >
                                        <div className="font-bold text-slate-700 text-lg pr-8 italic">"{idiom.fr}"</div>
                                        <div className="text-slate-400 text-xs mt-1">{idiom.en}</div>
                                        <div className="absolute top-4 right-4 text-emerald-200 group-hover:text-emerald-500 transition-colors">
                                            <Volume2 size={20} />
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* 4. MICRO STORY */}
                    {content?.story && (
                        <div className="bg-slate-50 p-6 rounded-3xl border border-slate-200 relative overflow-hidden">
                            <div className="flex items-center gap-2 mb-4">
                                <BookOpen size={18} className="text-slate-400"/>
                                <span className="font-bold text-slate-600 text-sm uppercase tracking-wide">Micro Story</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2">{content.story.title}</h3>
                            <p className="text-slate-600 leading-relaxed font-serif text-lg mb-4">
                                {content.story.text}
                            </p>
                            <div className="flex gap-2">
                                <button onClick={() => speak(content.story.text)} className="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:text-emerald-600 transition-colors">
                                    <Volume2 size={16}/> Listen
                                </button>
                                <button onClick={() => alert(content.story.en)} className="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-xl text-sm font-bold flex items-center gap-2 hover:text-emerald-600 transition-colors">
                                    <ArrowLeftRight size={16}/> Translate
                                </button>
                            </div>
                        </div>
                    )}

                    {/* 5. ROLEPLAY PROMPT */}
                    {content?.roleplay && (
                        <button 
                            onClick={() => {
                                setView('skills'); // Wir leiten zum Skills/Chat Tab um (später deep link)
                                alert(`Coming soon: Jump directly into the Chat Room with scenario "${content.roleplay.title}"`);
                            }}
                            className="w-full bg-gradient-to-r from-violet-100 to-fuchsia-100 p-5 rounded-3xl border border-violet-100 text-left flex items-center gap-4"
                        >
                            <div className="bg-white p-3 rounded-2xl text-violet-500 shadow-sm">
                                <MessageSquare size={24} />
                            </div>
                            <div>
                                <div className="font-bold text-violet-900">Roleplay Challenge</div>
                                <div className="text-violet-700/70 text-xs">{content.roleplay.desc}</div>
                            </div>
                        </button>
                    )}

                    {/* Fallback wenn kein Content da ist */}
                    {!content && (
                        <div className="text-center p-6 text-slate-400 text-sm bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                            More cultural content coming soon for this topic! <br/>
                            You can still practice the vocabulary above.
                        </div>
                    )}
                </div>
            </div>
        );
    };

    // Hilfsfunktion für die Logik oben (muss auch mit rein oder inline gelöst werden)
    // Am besten einfach inline lassen wie oben gelöst, das reicht.

    // Helper für Button-Labels (z.B. "10m", "4d")
    // Helper für Button-Labels
    const formatInterval = (days) => {
        // Sicherheitscheck: Wenn days keine Zahl ist, zeige "1d" als Fallback
        if (typeof days !== 'number' || isNaN(days)) return "1d";

        if (days <= 0) return "<1m"; // Wiederholung sofort
        if (days >= 365) return Math.round(days / 365) + "y";
        if (days >= 30) return Math.round(days / 30) + "mo";
        return days + "d";
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
    // --- AUDIO HELPER ---
    // --- AUDIO HELPER ---
    const speak = (text) => {
        if (!text) return;
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'fr-FR';
        utterance.rate = 0.9; 
        
        // HIER IST DAS UPDATE:
        if (selectedVoiceURI) {
            const allVoices = window.speechSynthesis.getVoices();
            const voiceObj = allVoices.find(v => v.voiceURI === selectedVoiceURI);
            if (voiceObj) utterance.voice = voiceObj;
        }

        window.speechSynthesis.speak(utterance);
    };
    const renderTranslatorContent = () => {
        // KEIN useState HIER! Wir nutzen die Variablen von oben aus App()

        // --- LOGIK ---
        const handleTranslate = async () => {
            if (!input.trim()) return;
            setLoading(true);
            setTranslationData(null);
            
            try {
                const target = direction === 'en-fr' ? 'fr' : 'en';
                const res = await fetch('/api/translate', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ text: input.trim(), targetLang: target })
                });
                const data = await res.json();
                setTranslationData(data);
            } catch (err) {
                alert("Translation failed.");
            } finally {
                setLoading(false);
            }
        };

        const handleCorrection = async () => {
            if (!input.trim()) return;
            setLoading(true);
            setCorrectionData(null); 

            try {
                const res = await fetch('/api/correct', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ text: input.trim() })
                });
                const data = await res.json();
                setCorrectionData(data);
            } catch (err) {
                alert("Correction failed.");
            } finally {
                setLoading(false);
            }
        };

        const copyToClipboard = (text) => {
            navigator.clipboard.writeText(text);
        };

        // Labels bestimmen
        const isFrToEn = direction === 'fr-en';
        const sourceLabel = isFrToEn ? "🇫🇷 French" : "🇬🇧 English";
        const targetLabel = isFrToEn ? "🇬🇧 English" : "🇫🇷 French";

        // --- UI RETURN ---
        return (
            <div className="w-full max-w-xl mx-auto space-y-6">
                
                {/* 1. MODE TABS (Translator vs Coach) */}
                <div className="bg-slate-200 p-1 rounded-2xl flex shadow-sm">
                    <button onClick={() => { setMode('translate'); setInput(''); setTranslationData(null); }} className={`flex-1 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${mode === 'translate' ? 'bg-white text-indigo-600 shadow-sm scale-[1.02]' : 'text-slate-500 hover:text-slate-700'}`}>
                        <ArrowLeftRight size={18}/> Translator
                    </button>
                    <button onClick={() => { setMode('coach'); setInput(''); setCorrectionData(null); }} className={`flex-1 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${mode === 'coach' ? 'bg-white text-emerald-600 shadow-sm scale-[1.02]' : 'text-slate-500 hover:text-slate-700'}`}>
                        <MessageSquare size={18}/> Writing Coach
                    </button>
                </div>

                {/* --- ANSICHT A: TRANSLATOR (Split View) --- */}
                {mode === 'translate' && (
                    <div className="flex flex-col gap-2">
                        
                        {/* BLOCK 1: INPUT */}
                        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden relative z-10">
                            {/* Header Source */}
                            <div className="bg-slate-50 px-5 py-3 border-b border-slate-100 flex justify-between items-center">
                                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                                    {sourceLabel} (Detected)
                                </span>
                                {input && <button onClick={() => { setInput(''); setTranslationData(null); }} className="text-slate-400 hover:text-slate-600"><X size={18}/></button>}
                            </div>
                            
                            <textarea 
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Type here..."
                                className="w-full h-32 p-5 text-lg text-slate-800 outline-none resize-none bg-transparent placeholder-slate-300 font-medium"
                            />

                            {/* Translate Action Button (inside Input Block) */}
                            <div className="px-4 py-3 border-t border-slate-50 flex justify-end bg-white">
                                <button 
                                    onClick={handleTranslate}
                                    disabled={loading || !input}
                                    className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-bold shadow-md shadow-indigo-200 hover:bg-indigo-700 active:scale-95 transition-all flex items-center gap-2 text-sm"
                                >
                                    {loading ? <Loader2 size={16} className="animate-spin"/> : "Translate"}
                                </button>
                            </div>
                        </div>

                        {/* MIDDLE: SWAP BUTTON */}
                        <div className="relative h-6 flex justify-center items-center z-20 -my-5">
                            <button 
                                onClick={() => setDirection(prev => prev === 'en-fr' ? 'fr-en' : 'en-fr')} 
                                className="bg-white p-3 rounded-full shadow-lg border border-slate-100 text-indigo-500 hover:text-indigo-700 hover:scale-110 transition-all"
                            >
                                <ArrowLeftRight size={20} /> 
                            </button>
                        </div>

                        {/* BLOCK 2: OUTPUT */}
                        <div className="bg-indigo-50 rounded-3xl border border-indigo-100 shadow-sm overflow-hidden min-h-[140px] relative z-0 pt-6">
                            {/* Header Target */}
                            <div className="px-5 py-2 flex justify-between items-center">
                                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                                    {targetLabel}
                                </span>
                                {translationData && (
                                    <div className="flex gap-2">
                                        <button onClick={() => copyToClipboard(translationData.translation)} className="p-2 text-indigo-400 hover:text-indigo-600 hover:bg-indigo-100 rounded-full transition-colors"><Copy size={18}/></button>
                                        <button onClick={() => speak(translationData.translation)} className="p-2 text-indigo-400 hover:text-indigo-600 hover:bg-indigo-100 rounded-full transition-colors"><Volume2 size={20}/></button>
                                    </div>
                                )}
                            </div>
                            
                            <div className="p-5 pt-2">
                                {translationData ? (
                                    <p className="text-2xl text-indigo-900 font-serif leading-relaxed">
                                        {translationData.translation}
                                    </p>
                                ) : (
                                    <p className="text-indigo-300 text-lg italic">Translation will appear here...</p>
                                )}
                            </div>

                            {/* Context Examples (Optional) */}
                            {translationData && translationData.examples && translationData.examples.length > 0 && (
                                <div className="px-5 pb-5">
                                    <div className="h-px w-full bg-indigo-200/50 mb-4"></div>
                                    <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider mb-2">Context</p>
                                    <div className="space-y-2">
                                        {translationData.examples.map((ex, idx) => (
                                            <div key={idx} className="text-sm text-indigo-800">
                                                <span className="font-medium">{ex.fr}</span>
                                                <span className="text-indigo-400 mx-2">•</span>
                                                <span className="italic opacity-80">{ex.en}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* --- ANSICHT B: WRITING COACH (Bleibt wie vorher, aber mit Copy Button) --- */}
                {mode === 'coach' && (
                    <div className="space-y-6">
                        {/* Input für Coach */}
                        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                            <div className="bg-emerald-50 px-5 py-3 border-b border-emerald-100 flex justify-between items-center">
                                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider flex items-center gap-2"><PenTool size={16}/> Write French</span>
                                {input && <button onClick={() => setInput('')} className="text-emerald-400 hover:text-emerald-700"><X size={18}/></button>}
                            </div>
                            <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Write here..." className="w-full h-32 p-5 text-lg text-slate-800 outline-none resize-none bg-transparent placeholder-slate-300" />
                            <div className="px-5 py-4 bg-slate-50 border-t border-slate-100 flex justify-end">
                                <button onClick={handleCorrection} disabled={loading || !input} className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-emerald-200 hover:bg-emerald-700 active:scale-95 flex items-center gap-2">
                                    {loading ? <Loader2 size={20} className="animate-spin"/> : <Check size={20}/>} Check
                                </button>
                            </div>
                        </div>

                        {/* Coach Results */}
                        {correctionData && (
                            <div className="space-y-4">
                                <div className="bg-emerald-600 rounded-3xl shadow-lg shadow-emerald-200 overflow-hidden text-white p-6 relative">
                                    <div className="absolute top-4 right-4 flex gap-2">
                                        {/* COPY BUTTON */}
                                        <button onClick={() => copyToClipboard(correctionData.corrected)} className="p-2 bg-emerald-700/50 hover:bg-emerald-500 rounded-full transition-colors"><Copy size={18}/></button>
                                        <button onClick={() => speak(correctionData.corrected)} className="p-2 bg-emerald-700/50 hover:bg-emerald-500 rounded-full transition-colors"><Volume2 size={20}/></button>
                                    </div>
                                    <span className="text-xs font-bold text-emerald-200 uppercase tracking-wide block mb-2">Corrected Version</span>
                                    <p className="text-2xl font-medium leading-snug pr-8">{correctionData.corrected}</p>
                                </div>
                                <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm">
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wide block mb-2 flex items-center gap-2"><Info size={16}/> Teacher's Note</span>
                                    <p className="text-slate-700 text-base leading-relaxed">{correctionData.explanation}</p>
                                </div>
                            </div>
                        )}
                    </div>
                )}

            </div>
        );
    };
    const renderChat = () => {

        const sendMessage = async (textOverride = null) => {
            const msgText = textOverride || chatInput;
            if (!msgText.trim()) return;
            
            const userMsg = { role: 'user', content: msgText };
            setChatHistory(prev => [...prev, userMsg]);
            setChatInput('');
            setChatLoading(true);
            setSuggestions([]); 

            try {
                const currentHistoryForApi = [...chatHistory, userMsg];
                const contextSlice = currentHistoryForApi.slice(-6);

                // ... vor dem fetch ...

                const res = await fetch('/api/chat', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ 
                        history: contextSlice, 
                        scenario: chatScenario.title, 
                        goal: chatScenario.goal, // <--- NEU: Wir schicken das Ziel mit!
                        level: chatLevel 
                    })
                });
                
                // ... nach dem fetch ...
                
                const data = await res.json();

                if (data.suggestions && Array.isArray(data.suggestions)) {
                    setSuggestions(data.suggestions);
                }

                setChatHistory(prev => {
                    const newHistory = [...prev];
                    if (data.correction) {
                        const lastIndex = newHistory.length - 1;
                        if (newHistory[lastIndex].role === 'user') {
                            newHistory[lastIndex].correction = data.correction;
                        }
                    }
                    newHistory.push({ role: 'model', content: data.text, translation: data.translation });
                    return newHistory;
                });

                if (data.patience_change < 0) setChatHearts(h => Math.max(0, h - 1));
                if (data.mission_status === 'success') setChatStatus('won');
                else if (data.mission_status === 'failed' || (chatHearts <= 1 && data.patience_change < 0)) setChatStatus('lost');

            } catch (e) {
                console.error(e);
                // Wichtig: Zeige einen Fehler im Chat an, statt gar nichts
                setChatHistory(prev => [...prev, { role: 'model', content: "⚠️ Connection hiccup. Please try again." }]);
            } finally {
                setChatLoading(false); // Das muss IMMER ausgeführt werden
            }
        };

        // --- LOBBY & GAME OVER BLEIBEN GLEICH (Kopiere sie von vorher oder lass sie so) ---
        if (chatStatus === 'lobby') { 
            // ... dein Lobby Code von vorhin ...
             return (
                <div className="w-full pt-6 pb-24 px-1">
                    <div className="flex items-center gap-3 mb-6 px-1">
                        <button onClick={() => setView('skills')} className="p-2 -ml-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500"><ArrowLeft size={24}/></button>
                        <h2 className="text-2xl font-bold text-slate-800">Roleplay</h2>
                    </div>

                    {/* Level Selector */}
                    <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm mb-6">
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Difficulty</div>
                        <div className="flex justify-between">
                            {['A1','A2','B1','B2','C1','C2'].map(lvl => (
                                <button key={lvl} onClick={() => setChatLevel(lvl)} className={`w-10 h-10 rounded-xl text-xs font-bold transition-all ${chatLevel === lvl ? 'bg-indigo-600 text-white shadow-md scale-110' : 'bg-slate-50 text-slate-400'}`}>{lvl}</button>
                            ))}
                        </div>
                    </div>

                    <p className="text-slate-500 px-2 text-sm font-medium mb-3">Choose your Mission</p>
                    <div className="grid grid-cols-2 gap-3">
                        {CHAT_SCENARIOS.map(s => (
                            <button key={s.id} 
                                onClick={() => {
                                    setChatScenario(s);
                                    setChatHistory([{ role: 'system', content: s.intro }]);
                                    setChatHearts(3);   
                                    setChatStatus('active');
                                    setSuggestions([]); 
                                }}
                                className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm text-left active:scale-[0.98] transition-all h-40 flex flex-col justify-between group hover:border-indigo-200"
                            >
                                <div className="text-3xl bg-slate-50 w-12 h-12 flex items-center justify-center rounded-2xl group-hover:scale-110 transition-transform">{s.icon}</div>
                                <div><h3 className="font-bold text-slate-800">{s.title}</h3><p className="text-[10px] text-slate-400 mt-1 leading-tight">{s.desc}</p></div>
                            </button>
                        ))}
                    </div>
                </div>
            );
        }
        if (chatStatus === 'won' || chatStatus === 'lost') {
             return (
                <div className="h-[80vh] flex flex-col items-center justify-center text-center px-6">
                    <div className="text-6xl mb-4">{chatStatus === 'won' ? '🎉' : '💀'}</div>
                    <h2 className="text-3xl font-bold text-slate-800 mb-2">{chatStatus === 'won' ? 'Mission Accomplished!' : 'Mission Failed'}</h2>
                    <p className="text-slate-500 mb-8">{chatStatus === 'won' ? "Great job! You handled the situation perfectly." : "You ran out of patience."}</p>
                    <button onClick={() => setChatStatus('lobby')} className="bg-indigo-600 text-white px-8 py-3 rounded-2xl font-bold shadow-lg">Back to Lobby</button>
                </div>
            );
        }

        // --- VIEW 3: ACTIVE CHAT (Update) ---
        return (
            <div className="fixed top-0 left-0 w-full h-[100dvh] z-40 bg-slate-50 flex flex-col">
                
                {/* Header */}
                <div className="bg-white border-b border-slate-200 px-4 py-4 pt-safe flex justify-between items-center shadow-sm z-10 shrink-0">
                    <button onClick={() => setChatStatus('lobby')} className="p-2 -ml-2 hover:bg-slate-100 rounded-full"><ArrowLeft size={24}/></button>
                    <div className="text-center">
                        <div className="font-bold text-slate-800">{chatScenario?.title}</div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-wide">Level {chatLevel}</div>
                    </div>
                    <div className="flex gap-1">{[1,2,3].map(i => (<Heart key={i} size={20} className={i <= chatHearts ? "fill-red-500 text-red-500" : "text-slate-200"} />))}</div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                    <div className="bg-indigo-50 border border-indigo-100 p-3 rounded-xl text-center mb-6 text-xs text-indigo-800">🎯 Goal: {chatScenario?.goal}</div>

                    {chatHistory.map((msg, idx) => {
                        if (msg.role === 'system') return <div key={idx} className="text-center text-xs text-slate-400 italic my-4">✨ {msg.content}</div>;

                        return (
                            <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                                
                                {/* Bubble */}
                                <div 
                                    className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed relative group shadow-sm cursor-pointer active:scale-95 transition-transform flex items-center gap-2 ${
                                        msg.role === 'user' 
                                        ? 'bg-indigo-600 text-white rounded-tr-none' 
                                        : 'bg-white border border-slate-100 text-slate-800 rounded-tl-none'
                                    }`}
                                    // Klick öffnet jetzt das Detail-Popup (für Übersetzung ODER Korrektur)
                                    onClick={() => setSelectedMsg(msg)} 
                                >
                                    {/* Rotes Icon wenn Fehler (nur bei User) */}
                                    {msg.role === 'user' && msg.correction && msg.correction !== 'null' && msg.correction !== msg.content && (
                                    <div className="mb-1 mr-1 bg-rose-50 text-rose-700 text-[10px] font-bold px-3 py-1.5 rounded-xl border border-rose-100 max-w-[85%] shadow-sm flex items-start gap-1">
                                        <span className="mt-0.5">💡</span> 
                                        <span>{msg.correction}</span>
                                    </div>
                                )}
                                    
                                    <div>{msg.content}</div>
                                </div>
                            </div>
                        );
                    })}
                    {chatLoading && <div className="flex justify-start"><div className="bg-slate-200 text-slate-500 px-4 py-2 rounded-2xl rounded-tl-none text-xs animate-pulse">...</div></div>}
                    <div style={{ height: 10 }}></div>
                </div>

                {/* Input & Suggestions */}
                <div className="bg-white border-t border-slate-200 p-4 pb-20 w-full shrink-0 flex flex-col gap-3">
                    {suggestions.length > 0 && !chatLoading && (
                        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                            {suggestions.map((sugg, idx) => (
                                <button key={idx} onClick={() => sendMessage(sugg)} className="whitespace-nowrap bg-indigo-50 text-indigo-600 border border-indigo-100 px-3 py-1.5 rounded-full text-xs font-bold active:scale-95 transition-transform">{sugg}</button>
                            ))}
                        </div>
                    )}
                    <div className="flex gap-2">
                        <input type="text" value={chatInput} onChange={(e) => setChatInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && sendMessage()} placeholder="Type your reply..." className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-3 text-slate-800 outline-none focus:ring-2 focus:ring-indigo-500"/>
                        <button onClick={() => sendMessage()} disabled={!chatInput.trim() || chatLoading} className="bg-indigo-600 text-white p-3 rounded-xl disabled:opacity-50"><ArrowUp size={24} className="rotate-90"/></button>
                    </div>
                </div>

                {/* --- DETAIL MODAL (Overlay für Korrektur & Übersetzung) --- */}
                {selectedMsg && (
                    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/30 backdrop-blur-sm" onClick={() => setSelectedMsg(null)}>
                        <div className="bg-white w-full p-6 pb-12 rounded-t-[2.5rem] shadow-2xl0 max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                            
                            <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-6"></div>

                            {/* Sektion 1: Original */}
                            <div className="mb-6">
                                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-2">Original</p>
                                <p className="text-lg text-slate-800 font-medium leading-snug">{selectedMsg.content}</p>
                            </div>

                            {/* Sektion 2: Korrektur (Nur wenn vorhanden) */}
                            {selectedMsg.correction && (
                                <div className="mb-6 bg-rose-50 border border-rose-100 p-4 rounded-2xl">
                                    <div className="flex items-center gap-2 mb-2 text-rose-600">
                                        <AlertCircle size={18} />
                                        <p className="text-xs font-bold uppercase tracking-wider">Correction</p>
                                    </div>
                                    <p className="text-lg text-rose-800 font-medium leading-snug">{selectedMsg.correction}</p>
                                </div>
                            )}

                            {/* Sektion 3: Übersetzung (Nur wenn vorhanden) */}
                            {selectedMsg.translation && (
                                <div className="mb-6">
                                    <div className="flex items-center gap-2 mb-2 text-indigo-500">
                                        <BookOpen size={18} />
                                        <p className="text-xs font-bold uppercase tracking-wider">Translation</p>
                                    </div>
                                    <p className="text-lg text-indigo-900 font-medium leading-snug">{selectedMsg.translation}</p>
                                </div>
                            )}

                            <button onClick={() => setSelectedMsg(null)} className="w-full bg-slate-100 text-slate-600 py-4 rounded-xl font-bold active:scale-[0.98] transition-transform">
                                Close
                            </button>
                        </div>
                    </div>
                )}

            </div>
        );
    };
    
    // --- SESSION LOGIC ---
    // --- ERSETZEN: startSmartSession ---
    const startSmartSession = () => {
        setAiExamples(null);
        const SESSION_SIZE = 20; // Zielgröße der Session

        // 1. Sicherheitscheck: Ist die Liste geladen?
        if (!vocabulary || vocabulary.length === 0) {
            alert("Vocabulary list is empty. Please check your settings or reload.");
            return;
        }

        const now = Date.now();

        // 2. Wörter kategorisieren

        // A: Bad Words (Box 1 - Muss sofort gelernt werden)
        const badWords = vocabulary.filter(w => {
            const p = userProgress[w.rank];
            return p && p.box === 1;
        });

        // B: Due Words (Fällig zur Wiederholung, Box > 1)
        const dueWords = vocabulary.filter(w => {
            const p = userProgress[w.rank];
            // Ist fällig (Zeit abgelaufen) UND nicht in Box 1
            return p && p.box > 1 && p.nextReview <= now;
        });

        // C: New Words (Noch nie gesehen)
        // Strategie: Finde den höchsten Rang, den der User schon gesehen hat, und mache dort weiter.
        // Das verhindert, dass man Wort #1 lernt und dann Wort #5000.
        
        // Alle Ranks sammeln, die der User schon hat
        const knownRanks = Object.keys(userProgress).map(Number);
        
        // Höchsten bekannten Rank finden (oder 0, wenn neu)
        const maxKnownRank = knownRanks.length > 0 ? Math.max(...knownRanks) : 0;
        
        // Pool für neue Wörter: Nimm Wörter, die einen höheren Rang haben als das bisher höchste,
        // aber begrenze es auf die nächsten 50, damit wir nicht zu weit springen.
        // Falls maxKnownRank 0 ist, fangen wir bei 1 an.
        const newWordsPool = vocabulary
            .filter(w => !userProgress[w.rank]) // Darf noch keinen Eintrag im Progress haben
            .sort((a, b) => a.rank - b.rank)     // Sortiere aufsteigend (Wichtig!)
            .slice(0, 50);                       // Nimm nur die nächsten 50 Kandidaten

        
        // 3. Den Mix erstellen (Ziel: ~50% Fehler/Due, Rest Neu)
        let sessionList = [];

        const pickRandom = (arr, count) => {
            return [...arr].sort(() => 0.5 - Math.random()).slice(0, count);
        };

        // Priorität 1: Fehler (Max 10)
        sessionList.push(...pickRandom(badWords, 10));

        // Priorität 2: Fällige Wiederholungen (Fülle auf bis 15, mind. 5)
        const slotsForDue = Math.max(5, 15 - sessionList.length);
        sessionList.push(...pickRandom(dueWords, slotsForDue));

        // Priorität 3: Neue Wörter (Fülle den Rest bis 20 auf)
        const slotsLeftTotal = SESSION_SIZE - sessionList.length;
        
        if (slotsLeftTotal > 0 && newWordsPool.length > 0) {
            // Bei neuen Wörtern nehmen wir die OBERSTEN von der Liste (nicht random),
            // damit man die Liste logisch von 1 bis 5000 abarbeitet.
            sessionList.push(...newWordsPool.slice(0, slotsLeftTotal));
        }

        // Fallback: Wenn immer noch Platz ist (keine neuen Wörter mehr?), nimm mehr Wiederholungen
        if (sessionList.length < SESSION_SIZE) {
            const remaining = SESSION_SIZE - sessionList.length;
            const usedIds = new Set(sessionList.map(w => w.rank));
            const moreDue = dueWords.filter(w => !usedIds.has(w.rank));
            sessionList.push(...pickRandom(moreDue, remaining));
        }

        if (sessionList.length === 0) {
            alert("All caught up! Great job. Nothing to learn right now.");
            return;
        }

        // 4. Mischen & Starten
        const finalQueue = sessionList.sort(() => 0.5 - Math.random());

        setSessionQueue(finalQueue);
        setCurrentIndex(0);
        setIsFlipped(false);
        setSessionResults({ correct: 0, wrong: 0 });
        setView('smart-session');
    };
    const startCollectionSession = (collectionIds) => {
        setAiExamples(null);
        // 1. IDs prüfen
        if (!collectionIds || collectionIds.length === 0) {
            alert("This collection is empty or coming soon! Please add Rank IDs in the code.");
            return;
        }

        // 2. Wörter anhand der IDs holen
        const idSet = new Set(collectionIds);
        const selectedWords = vocabulary.filter(w => idSet.has(w.rank));

        if (selectedWords.length === 0) {
            alert("None of the words in this collection were found in your vocabulary file.");
            return;
        }

        // 3. Mischen
        let pool = [...selectedWords];
        for (let i = pool.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [pool[i], pool[j]] = [pool[j], pool[i]];
        }

        // 4. Session als SMART SESSION starten
        // Wir nutzen sessionQueue statt activeSession, damit die Smart-Logik greift
        setSessionQueue(pool); 
        
        setCurrentIndex(0);
        setIsFlipped(false);
        setSessionResults({ correct: 0, wrong: 0 });
        
        // WICHTIG: Hier schalten wir auf den Smart-Modus um!
        // Dadurch erscheinen automatisch die 4 Anki-Buttons und der Fortschritt wird gespeichert.
        setView('smart-session'); 
    };
    const startTestSession = () => {
        setAiExamples(null);
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
    const [generating, setGenerating] = useState(false);

    /* script.js - Innerhalb von function App() */

    const handleGenerateExample = async (currentWord) => {
        if (generating) return;
        setGenerating(true);

        try {
            // WICHTIG: Wir nutzen den Rank als ID! 
            // Das Backend speichert Sätze unter 'word_id' = Rank (z.B. 50).
            const wordId = currentWord.rank; 

            // Backend aufrufen (Deine Deno Function)
            const { data, error } = await supabase.functions.invoke('generate-example', {
                body: { 
                    word: currentWord.french, 
                    wordId: wordId  // Wir schicken den Rank als ID
                }
            });

            if (error) throw error;

            if (data && data.success && data.data) {
                console.log("Examples received:", data.data);
                
                const examplesArray = Array.isArray(data.data) ? data.data : [data.data];
                
                // 1. Im Cache speichern (für diese Session)
                setExampleCache(prev => ({
                    ...prev,
                    [currentWord.rank]: examplesArray
                }));

                // 2. Direkt anzeigen
                setAiExamples(examplesArray);
                setExamplesVisible(true);
            }

        } catch (err) {
            console.error("Generate Error:", err);
            alert("Could not load examples. Check console.");
        } finally {
            setGenerating(false);
        }
    };
    const handleResult = (quality) => { 
        // Quality: 0=Again, 1=Hard, 2=Good, 3=Easy
        // (Für Test-Mode nutzen wir true/false Mapping: false->0, true->2)
        
        // UI Reset
        setAiExamples(null);
        setLoadingExamples(false);

        if (view === 'smart-session') {
            const currentWord = sessionQueue[0];
            
            // 1. Neue Stats berechnen (Anki Algorithmus)
            const oldStats = userProgress[currentWord.rank];
            const newStats = calculateAnkiStats(oldStats, quality);

            // 2. State Update (Lokal - sofort sichtbar)
            setUserProgress(prev => ({
                ...prev,
                [currentWord.rank]: newStats
            }));

            // --- NEU: CLOUD SYNC (Im Hintergrund) ---
            if (session) {
                supabase.from('user_progress').upsert({
                    user_id: session.user.id,
                    word_rank: currentWord.rank, // Sicherstellen, dass das rank-Feld im Objekt existiert!
                    box: newStats.box,
                    next_review: newStats.nextReview,
                    interval: newStats.interval,
                    ease_factor: newStats.ease
                }, { onConflict: 'user_id, word_rank' }) // Auch hier Constraint angeben
                .then(({ error }) => {
                    if (error) console.error("Cloud save failed:", error);
                });
            }
            // ----------------------------------------

            // 3. Queue Management
            if (quality === 0) {
                // AGAIN: Karte hinten anstellen (bleibt in der Session)
                const newQueue = [...sessionQueue.slice(1), currentWord];
                setSessionResults(prev => ({ ...prev, wrong: prev.wrong + 1 }));
                setGeneratedSentences([]);
                setIsFlipped(false);
                setSessionQueue(newQueue);
            } else {
                // HARD/GOOD/EASY: Karte ist für heute fertig
                const newQueue = sessionQueue.slice(1);
                setSessionResults(prev => ({ ...prev, correct: prev.correct + 1 }));
                
                if (newQueue.length === 0) {
                    setView('results');
                } else {
                    setGeneratedSentences([]);
                    setIsFlipped(false);
                    setSessionQueue(newQueue);
                }
            }
        } else {
            // --- TEST MODE LOGIC (Bleibt unverändert) ---
            // Wir speichern Tests (noch) nicht in der Cloud, da sie keine Boxen ändern
            const isCorrect = quality >= 2; 
            
            setSessionResults(prev => ({
                ...prev,
                correct: isCorrect ? prev.correct + 1 : prev.correct,
                wrong: !isCorrect ? prev.wrong + 1 : prev.wrong
            }));

            if (currentIndex < activeSession.length - 1) {
                setTimeout(() => {
                    setCurrentIndex(currentIndex + 1);
                    setGeneratedSentences([]);
                    setIsFlipped(false);
                }, 150);
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
    const renderHomeHeader = () => {
        const safeVocab = vocabulary || [];
        const learnedCount = safeVocab.filter(w => userProgress[w.rank]?.box > 0).length;
        
        const hour = currentTime.getHours();
        const greeting = hour < 12 ? 'Bonjour' : hour < 18 ? 'Bon après-midi' : 'Bonsoir';
        
        const dateOptions = { weekday: 'long', day: 'numeric', month: 'long' };
        const dateStr = currentTime.toLocaleDateString('fr-FR', dateOptions);
        
        // Titel basierend auf Fortschritt
        let currentTitle = "Tourist";
        let titleColor = "text-slate-600";
        if (learnedCount >= 100 && learnedCount < 500) {
            currentTitle = "Explorer";
            titleColor = "text-blue-600";
        } else if (learnedCount >= 500 && learnedCount < 1000) {
            currentTitle = "Citizen";
            titleColor = "text-indigo-600";
        } else if (learnedCount >= 1000) {
            currentTitle = "Master";
            titleColor = "text-purple-600";
        }

        // CEFR Level Schätzung
        let cefrLevel = "A1";
        let nextGoal = 500;
        let nextLevel = "A2";
        
        if (learnedCount >= 500) {
            cefrLevel = "A2";
            nextGoal = 1000;
            nextLevel = "B1";
        }
        if (learnedCount >= 1000) {
            cefrLevel = "B1";
            nextGoal = 2000;
            nextLevel = "B2";
        }
        if (learnedCount >= 2000) {
            cefrLevel = "B2";
            nextGoal = 3500;
            nextLevel = "C1";
        }
        if (learnedCount >= 3500) {
            cefrLevel = "C1";
            nextGoal = 5000;
            nextLevel = "C2";
        }
        if (learnedCount >= 5000) {
            cefrLevel = "C2";
            nextGoal = 5000;
            nextLevel = "C2";
        }

        // Französische Uhrzeit (Ausgeschrieben)
        const getFrenchNumber = (n) => {
            if (n === 0) return "";
            const units = ["", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"];
            const tens = ["", "dix", "vingt", "trente", "quarante", "cinquante"];
            
            if (n < 20) return units[n];
            const ten = Math.floor(n / 10);
            const unit = n % 10;
            if (unit === 0) return tens[ten];
            if (unit === 1) return `${tens[ten]}-et-un`;
            return `${tens[ten]}-${units[unit]}`;
        };

        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        
        let hStr = getFrenchNumber(hours);
        if (hours === 0) hStr = "minuit";
        else if (hours === 12) hStr = "midi";
        else if (hours === 1) hStr = "une"; 
        
        let frenchTime = `Il est ${hStr}`;
        if (hours !== 0 && hours !== 12) frenchTime += ` heure${hours !== 1 ? 's' : ''}`;
        
        if (minutes > 0) {
            frenchTime += ` ${getFrenchNumber(minutes)}`;
        }

        return (
            <div className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 border-b-2 border-indigo-200 shadow-lg">
                <div className="max-w-lg md:max-w-2xl mx-auto px-5 py-3">
                    {/* Zeile 1: Gruß & Zeit */}
                    <div className="flex justify-between items-center mb-3">
                        <div>
                            <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">{greeting}</h1>
                            <p className="text-slate-500 text-[10px] md:text-sm font-medium capitalize mt-0.5">{dateStr}</p>
                        </div>
                        <div className="text-right">
                            <div className="flex items-center justify-end gap-2">
                                <div className="text-xl md:text-3xl lg:text-4xl font-extrabold text-slate-800 font-mono leading-tight">
                                    {currentTime.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                                </div>
                                <div className={`w-2.5 h-2.5 rounded-full ${apiStatus === 'online' ? 'bg-green-500' : apiStatus === 'offline' ? 'bg-red-500' : 'bg-amber-400 animate-pulse'}`} title={`API: ${apiStatus}`}></div>
                            </div>
                            <div className="text-xs md:text-sm text-indigo-600 font-semibold italic mt-0.5 capitalize">
                                {frenchTime}
                            </div>
                        </div>
                    </div>
                    
                    {/* Zeile 2: Status & Progress */}
                    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 border border-indigo-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-2">
                            {/* Linker Titel */}
                            <div className="flex items-center gap-1.5">
                                <Trophy size={16} className={titleColor} />
                                <span className={`font-bold text-base ${titleColor}`}>{currentTitle}</span>
                            </div>
                            
                            {/* Fortschrittsbalken (Mitte) */}
                            <div className="flex-1">
                                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                                    <div 
                                        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-full rounded-full transition-all"
                                        style={{ width: `${Math.min(100, (learnedCount / nextGoal) * 100)}%` }}
                                    ></div>
                                </div>
                                <div className="flex justify-between mt-0.5 px-1">
                                    <span className="text-[9px] text-slate-400 font-bold">{learnedCount}</span>
                                    <span className="text-[9px] text-indigo-500 font-bold">{nextGoal} ({nextLevel})</span>
                                </div>
                            </div>
                            
                            {/* Rechter Status */}
                            <div className="flex items-center gap-2">
                                <div className="text-right">
                                    <div className="text-[9px] text-slate-400 font-bold uppercase">Words</div>
                                    <div className="text-lg font-extrabold text-slate-800">{learnedCount}</div>
                                </div>
                                <div className="bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-lg">
                                    <div className="text-sm font-bold">{cefrLevel}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    };

    const renderHome = () => {
        // --- DATA SETUP ---
        const safeVocab = vocabulary || [];
        // Daily Joke Logik (nur 1 pro Tag anzeigen, hier vereinfacht random)
        const dailyJokePreview = JOKE_DB[new Date().getDate() % JOKE_DB.length]; 

        return (
            <div className="pb-24 pt-[160px] px-1 space-y-6">
                
                {/* 1. HERO: SMART LEARNING (Keep) */}
                <div className="relative">
                    <h2 className="text-xl font-bold text-slate-800 mb-3 px-1">Today's Focus</h2>
                    <button 
                        onClick={startSmartSession} 
                        className="w-full h-44 bg-gradient-to-br from-indigo-600 to-violet-600 text-white p-6 rounded-[2rem] shadow-xl shadow-indigo-200 transition-transform active:scale-[0.98] flex flex-col justify-between relative overflow-hidden group"
                    >
                        <div className="relative z-10 flex justify-between items-start w-full">
                            <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md">
                                <Play size={28} fill="currentColor" />
                            </div>
                            <div className="bg-indigo-500/30 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md border border-white/10">
                                Priority Loop
                            </div>
                        </div>
                        <div className="relative z-10 text-left">
                            <h2 className="text-2xl font-bold mb-1">Start Smart Session</h2>
                            <p className="text-indigo-100 text-sm font-medium opacity-90">Review words & learn new ones.</p>
                        </div>
                        <GraduationCap size={140} className="absolute -right-6 -bottom-6 text-white opacity-10 rotate-[-15deg] group-hover:scale-110 transition-transform" />
                    </button>
                </div>

                {/* 2. DAILY JOKE (Redesigned as Modal Trigger) */}
                {dailyJoke && (
                    <button 
                        onClick={() => setShowJokeModal(true)}
                        className="w-full bg-amber-50 border border-amber-100 p-4 rounded-2xl relative overflow-hidden hover:bg-amber-100 transition-all active:scale-[0.98] text-left flex items-center gap-4"
                    >
                        <div className="bg-white p-2 rounded-xl text-amber-500 shadow-sm shrink-0"><Smile size={20}/></div>
                        <div className="flex-1 min-w-0">
                            <span className="font-bold text-amber-900 text-sm">Joke of the Day</span>
                            <p className="text-amber-800 text-sm truncate mt-0.5">{dailyJoke.q}</p>
                        </div>
                        <ChevronRight size={20} className="text-amber-400 shrink-0"/>
                    </button>
                )}

                {/* JOKE MODAL */}
                {showJokeModal && dailyJoke && (
                    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setShowJokeModal(false)}>
                        <div className="bg-white rounded-3xl max-w-sm w-full shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
                            {/* Header */}
                            <div className="bg-gradient-to-r from-amber-400 to-orange-400 p-4 flex justify-between items-center">
                                <div className="flex items-center gap-2">
                                    <Smile size={20} className="text-white"/>
                                    <span className="font-bold text-white">Joke of the Day</span>
                                </div>
                                <button onClick={() => setShowJokeModal(false)} className="text-white/80 hover:text-white">
                                    <X size={20}/>
                                </button>
                            </div>
                            
                            {/* Content */}
                            <div className="p-5">
                                {/* Question */}
                                <div className="mb-4">
                                    <div className="flex items-start gap-2">
                                        <p className="text-lg font-bold text-slate-800 italic">"{dailyJoke.q}"</p>
                                        <button onClick={() => speak(dailyJoke.q)} className="p-1.5 text-slate-400 hover:text-amber-600 shrink-0">
                                            <Volume2 size={16}/>
                                        </button>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-1">🇬🇧 {dailyJoke.q_en || "..."}</p>
                                </div>
                                
                                {/* Divider */}
                                <div className="border-t border-slate-100 my-4"></div>
                                
                                {/* Answer */}
                                <div>
                                    <div className="flex items-start gap-2">
                                        <p className="text-lg font-bold text-indigo-600 italic">"{dailyJoke.a}"</p>
                                        <button onClick={() => speak(dailyJoke.a)} className="p-1.5 text-slate-400 hover:text-indigo-600 shrink-0">
                                            <Volume2 size={16}/>
                                        </button>
                                    </div>
                                    <p className="text-xs text-slate-500 mt-1">🇬🇧 {dailyJoke.en}</p>
                                </div>
                            </div>
                            
                            {/* Footer */}
                            <div className="px-5 pb-5">
                                <button 
                                    onClick={() => {
                                        if (!savedJokes.some(j => j.q === dailyJoke.q)) {
                                            const updated = [...savedJokes, dailyJoke];
                                            setSavedJokes(updated);
                                            localStorage.setItem('vocabApp_savedJokes', JSON.stringify(updated));
                                        }
                                        setShowJokeModal(false);
                                    }}
                                    disabled={savedJokes.some(j => j.q === dailyJoke.q)}
                                    className={`w-full py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                                        savedJokes.some(j => j.q === dailyJoke.q)
                                        ? 'bg-slate-100 text-slate-400' 
                                        : 'bg-amber-500 text-white hover:bg-amber-600 active:scale-95'
                                    }`}
                                >
                                    {savedJokes.some(j => j.q === dailyJoke.q) ? <><Check size={16}/> Saved</> : <><Save size={16}/> Save Joke</>}
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* 3. DAILY EMAIL TASK (New Feature) */}
                <DailyEmailTask level="A2" onComplete={(score) => alert(`You got ${score} points!`)} />

                {/* 4. WEAK WORDS / REPAIR (Keep) */}
                <button 
                    onClick={() => {
                        // Repair Logic here
                        setView('smart-config'); 
                    }} 
                    className="w-full bg-white border border-slate-100 p-5 rounded-[2rem] shadow-sm flex items-center justify-between group active:scale-[0.98]"
                >
                    <div className="flex items-center gap-4">
                        <div className="bg-rose-100 w-12 h-12 flex items-center justify-center rounded-2xl text-rose-600"><Activity size={24} /></div>
                        <div className="text-left">
                            <h3 className="font-bold text-slate-800 text-lg">Repair Weak Words</h3>
                            <p className="text-slate-400 text-xs font-medium">Fix mistakes from yesterday</p>
                        </div>
                    </div>
                    <ChevronRight size={24} className="text-slate-200 group-hover:text-rose-400 transition-colors" />
                </button>

                {/* 5. SUGGESTED GRAMMAR (New Placement) */}
                {(() => {
                    // Find the next unpassed grammar lesson
                    let nextLesson = null;
                    let nextModule = null;
                    for (const module of GRAMMAR_MODULES) {
                        for (const topic of module.topics) {
                            if (localStorage.getItem(`grammar_passed_${topic.id}`) !== 'true') {
                                nextLesson = topic;
                                nextModule = module;
                                break;
                            }
                        }
                        if (nextLesson) break;
                    }
                    
                    // If all lessons are passed, show congratulations
                    if (!nextLesson) {
                        return (
                            <div className="w-full bg-green-50 border border-green-100 p-5 rounded-[2rem] text-left relative overflow-hidden">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="bg-white text-green-600 p-2 rounded-xl shadow-sm"><GraduationCap size={18} /></div>
                                    <span className="font-bold text-green-900 text-sm">Grammar Complete!</span>
                                </div>
                                <h3 className="font-bold text-green-800 text-xl">All lessons passed!</h3>
                                <p className="text-green-700/70 text-xs mt-1">Amazing work. Keep practicing!</p>
                            </div>
                        );
                    }
                    
                    return (
                        <button 
                            onClick={() => { 
                                setSelectedGrammarId(nextLesson.id); 
                                setView('grammar-detail'); 
                            }} 
                            className="w-full bg-emerald-50 border border-emerald-100 p-5 rounded-[2rem] text-left active:scale-[0.98] relative overflow-hidden"
                        >
                            <div className="flex items-center gap-3 mb-2">
                                <div className="bg-white text-emerald-600 p-2 rounded-xl shadow-sm"><Layers size={18} /></div>
                                <span className="font-bold text-emerald-900 text-sm">Next Grammar • {nextModule.title}</span>
                            </div>
                            <h3 className="font-bold text-emerald-800 text-xl">{nextLesson.title}</h3>
                            <p className="text-emerald-700/70 text-xs mt-1">{nextLesson.desc}</p>
                        </button>
                    );
                })()}
            </div>
        );
    };
    const renderExplore = () => {
        // A. EINZELANSICHT (Wenn ein Buch/Rezept offen ist)
        if (selectedBook) {
            return (
                <div className="w-full pt-6 pb-24 px-1">
                    <div className="flex items-center gap-3 mb-6 px-1">
                        <button onClick={() => setSelectedBook(null)} className="p-2 -ml-2 hover:bg-slate-100 rounded-full text-slate-500">
                            <ArrowLeft size={24}/>
                        </button>
                        <div className="flex-1 min-w-0">
                            <h2 className="text-xl font-bold text-slate-800 truncate">{selectedBook.title}</h2>
                            <p className="text-xs text-slate-400">{selectedBook.author}</p>
                        </div>
                    </div>

                    {/* Level Selector */}
                    <div className="bg-white p-2 rounded-2xl border border-slate-100 shadow-sm mb-6 sticky top-2 z-20 flex gap-1">
                        {['simple', 'advanced', 'original'].map(lvl => (
                            <button 
                                key={lvl}
                                onClick={() => setReadingLevel(lvl)}
                                className={`flex-1 py-2 rounded-xl text-xs font-bold capitalize transition-all ${
                                    readingLevel === lvl 
                                    ? 'bg-indigo-600 text-white shadow-sm' 
                                    : 'text-slate-500 hover:bg-slate-50'
                                }`}
                            >
                                {lvl}
                            </button>
                        ))}
                    </div>

                    {/* Chapters List */}
                    <div className="space-y-3">
                        {selectedBook.chapters.map((chap, idx) => (
                            <button 
                                key={idx}
                                onClick={() => openBookChapter(selectedBook, idx)}
                                className="w-full bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-left active:scale-[0.98] transition-all group"
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <div className="flex items-center gap-2">
                                        <h3 className="font-bold text-slate-700">{chap.title}</h3>
                                        {/* Checkmark wenn gelesen */}
                                        {bookProgress[selectedBook.id]?.completedChapters?.includes(idx) && (
                                            <div className="bg-green-100 text-green-600 p-0.5 rounded-full"><Check size={12}/></div>
                                        )}
                                    </div>
                                    <div className="bg-slate-50 p-1.5 rounded-full text-slate-300 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-colors">
                                        <Play size={16} fill="currentColor"/>
                                    </div>
                                </div>
                                <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed opacity-80">
                                    {/* Preview based on level */}
                                    {chap[readingLevel] || chap.original}
                                </p>
                            </button>
                        ))}
                    </div>
                </div>
            );
        }

        // B. HAUPTANSICHT (Regal Übersicht)
        const activeCollection = LIBRARY_CONTENT[libraryTab] || [];

        return (
            <div className="w-full pt-6 pb-24 px-1">
                <div className="flex items-center gap-3 mb-6 px-1">
                    <div className="bg-indigo-100 p-2 rounded-full text-indigo-600"><BookOpen size={24} /></div>
                    <h2 className="text-2xl font-bold text-slate-800">Library</h2>
                </div>

                {/* RESUME BANNER (Nur wenn ein Buch angefangen wurde & wir im Books Tab sind) */}
                {(() => {
                    // Finde das zuletzt gelesene Buch (sortiert nach Zeitstempel)
                    const lastReadBookId = Object.keys(bookProgress).sort((a,b) => bookProgress[b].lastActive - bookProgress[a].lastActive)[0];
                    
                    if (lastReadBookId && libraryTab === 'books') {
                        const prog = bookProgress[lastReadBookId];
                        // Finde Buch-Daten in LIBRARY_CONTENT
                        let bookData = null;
                        // Wir suchen in allen Kategorien sicherheitshalber
                        ['books', 'culture', 'phrases'].forEach(cat => {
                            if (LIBRARY_CONTENT[cat]) {
                                const found = LIBRARY_CONTENT[cat].find(b => b.id === lastReadBookId);
                                if(found) bookData = found;
                            }
                        });

                        if (bookData) {
                            // Sicherstellen dass Kapitel existiert (Fallback auf 0)
                            const chapterIdx = prog.lastChapter || 0;
                            const chapterTitle = bookData.chapters[chapterIdx]?.title || "Chapter " + (chapterIdx + 1);
                            
                            return (
                                <div className="mb-6 px-1">
                                    <button 
                                        onClick={() => { setSelectedBook(bookData); openBookChapter(bookData, chapterIdx, true); }}
                                        className="w-full bg-slate-800 text-white p-4 rounded-3xl shadow-xl shadow-slate-200 flex items-center justify-between group active:scale-[0.98] transition-all"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="bg-white/10 p-3 rounded-2xl">
                                                <RotateCcw size={20} className="text-white"/>
                                            </div>
                                            <div className="text-left">
                                                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Continue Reading</div>
                                                <div className="font-bold text-lg leading-tight truncate max-w-[150px]">{bookData.title}</div>
                                                <div className="text-xs text-slate-400">Page {(prog.lastPage || 0) + 1} • {chapterTitle}</div>
                                            </div>
                                        </div>
                                        <div className="bg-indigo-500 p-2 rounded-full group-hover:bg-indigo-400 transition-colors">
                                            <Play size={16} fill="currentColor"/>
                                        </div>
                                    </button>
                                </div>
                            );
                        }
                    }
                    return null;
                })()}

                {/* Library Tabs */}
                <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide px-1">
                    <button onClick={() => setLibraryTab('books')} className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${libraryTab === 'books' ? 'bg-slate-800 text-white shadow-lg' : 'bg-white text-slate-500 border border-slate-200'}`}>📚 Books</button>
                    <button onClick={() => setLibraryTab('culture')} className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${libraryTab === 'culture' ? 'bg-amber-600 text-white shadow-lg' : 'bg-white text-slate-500 border border-slate-200'}`}>🥐 Culture & Bios</button>
                    <button onClick={() => setLibraryTab('phrases')} className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${libraryTab === 'phrases' ? 'bg-emerald-600 text-white shadow-lg' : 'bg-white text-slate-500 border border-slate-200'}`}>💬 Phrasebook</button>
                </div>

                {/* Content Grid */}
                <div className="grid gap-5">
                    {activeCollection.map(item => (
                        <button 
                            key={item.id}
                            onClick={() => setSelectedBook(item)}
                            className={`w-full ${item.coverColor} text-white p-5 rounded-[2rem] shadow-xl text-left relative overflow-hidden group active:scale-[0.98] transition-all`}
                        >
                            {/* Deko Icon Background */}
                            <div className="absolute -right-4 -bottom-4 p-8 opacity-20 rotate-12 scale-150">
                                {getIcon(item.icon)}
                            </div>
                            
                            <div className="relative z-10 flex gap-4 items-start">
                                <div className="bg-white/20 backdrop-blur-md w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                                    {getIcon(item.icon)}
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1 opacity-80">
                                        <span className="text-[10px] font-bold uppercase tracking-wider border border-white/30 px-2 py-0.5 rounded-full">{item.type}</span>
                                        <span className="text-[10px] font-bold">{item.chapters.length} Parts</span>
                                    </div>
                                    <h3 className="text-xl font-serif font-bold leading-tight mb-1">{item.title}</h3>
                                    <p className="text-white/70 text-xs font-medium">{item.author}</p>
                                </div>
                            </div>
                        </button>
                    ))}
                    
                    {activeCollection.length === 0 && (
                        <div className="p-10 text-center text-slate-400 border-2 border-dashed border-slate-200 rounded-[2rem]">
                            Nothing here yet. Coming soon!
                        </div>
                    )}
                </div>
            </div>
        );
    };
    const renderSkills = () => {
        // Lokaler State für das Akkordeon
        const toggleCategory = (id) => {
            setExpandedCategory(expandedCategory === id ? null : id);
        };

        return (
            <div className="space-y-6 animate-in fade-in duration-500 pt-6 pb-24 px-1">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4 px-1">
                     <div className="bg-indigo-100 p-2 rounded-full text-indigo-600"><Dumbbell size={24} /></div>
                     <h2 className="text-2xl font-bold text-slate-800">Skill Library</h2>
                </div>

                {/* DAILY WRITER (Top Priority) */}
                <div className="mb-2">
                      <button onClick={() => setView('daily-writer')} className="w-full bg-gradient-to-br from-indigo-600 to-violet-600 p-[2px] rounded-3xl shadow-lg shadow-indigo-200 active:scale-[0.98] transition-all group">
                        <div className="bg-white rounded-[1.4rem] p-5 flex items-center justify-between h-full relative overflow-hidden">
                            <div className="absolute right-0 top-0 w-32 h-32 bg-indigo-50 rounded-full -mr-10 -mt-10 opacity-50 group-hover:scale-150 transition-transform duration-500"></div>
                            
                            <div className="flex items-center gap-5 relative z-10">
                                <div className="bg-indigo-100 w-14 h-14 flex items-center justify-center rounded-2xl text-indigo-600 shadow-sm group-hover:rotate-6 transition-transform duration-300">
                                    <PenTool size={28}/>
                                </div>
                                <div className="text-left">
                                    <div className="font-bold text-slate-800 text-xl group-hover:text-indigo-700 transition-colors">Daily Writer</div>
                                    <div className="text-sm text-slate-500 font-medium">Complete your mission</div>
                                </div>
                            </div>
                            <div className="relative z-10 bg-slate-50 p-2 rounded-full text-slate-300 group-hover:text-indigo-600 group-hover:bg-indigo-50 transition-colors">
                                <ChevronRight size={24} />
                            </div>
                        </div>
                      </button>
                </div>

                {/* 1. GRAMMAR (Updated Navigation) */}
                <div>
                    <h3 className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-3 px-1">Grammar Reference</h3>
                    <div className="space-y-3">
                        {GRAMMAR_MODULES.map((module) => {
                            const isOpen = expandedCategory === module.id;
                            return (
                                <div key={module.id} className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden transition-all duration-300">
                                    {/* Main Card */}
                                    <button onClick={() => toggleCategory(module.id)} className="w-full p-5 flex items-center gap-4 text-left active:bg-slate-50 transition-colors">
                                        <div className={`w-12 h-12 flex items-center justify-center rounded-2xl ${module.color}`}>{module.icon}</div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-slate-800 text-lg">{module.title}</h4>
                                            <p className="text-xs text-slate-400">{module.sub}</p>
                                        </div>
                                        <ChevronRight size={20} className={`text-slate-300 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
                                    </button>
                                    
                                    {/* Sub-List (Accordion) */}
                                    {isOpen && (
                                        <div className="bg-slate-50 border-t border-slate-100 animate-in slide-in-from-top-2 fade-in duration-200">
                                            {module.topics.map((t, index) => {
                                                const isPassed = localStorage.getItem(`grammar_passed_${t.id}`) === 'true';
                                                return (
                                                <React.Fragment key={t.id}>
                                                    {/* Category Header */}
                                                    {t.category && (
                                                        <div className="px-5 py-2 bg-slate-100 border-b border-slate-200">
                                                            <span className="text-xs font-black text-slate-600 uppercase tracking-wider">{t.category}</span>
                                                        </div>
                                                    )}
                                                    <button 
                                                        // HIER IST DIE NAVIGATIONS-LOGIK:
                                                        onClick={() => { 
                                                            setSelectedGrammarId(t.id); 
                                                            setView('grammar-detail'); 
                                                        }} 
                                                        className={`w-full p-4 pl-[5rem] text-left transition-colors border-b border-slate-100 last:border-0 flex justify-between items-center group ${isPassed ? 'bg-green-50 hover:bg-green-100' : 'hover:bg-slate-100 hover:text-indigo-600'}`}
                                                    >
                                                        <div>
                                                            <div className={`text-sm font-bold ${isPassed ? 'text-green-700' : 'text-slate-700 group-hover:text-indigo-700'}`}>{t.title}</div>
                                                            <div className={`text-xs font-medium ${isPassed ? 'text-green-600' : 'text-slate-400 group-hover:text-indigo-400/80'}`}>{t.desc}</div>
                                                        </div>
                                                        <BookOpen size={14} className="opacity-0 group-hover:opacity-100 text-indigo-400 transition-opacity"/>
                                                    </button>
                                                </React.Fragment>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* 2. VOCAB SETS & CONJUGATOR */}
                <div>
                    <h3 className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-3 px-1">Tools & Sets</h3>
                    <div className="grid grid-cols-2 gap-3">
                        <button onClick={() => { setExploreMode('grammar'); setView('explore'); }} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm active:scale-[0.98] h-32 flex flex-col justify-between group">
                            <div className="bg-indigo-50 w-10 h-10 flex items-center justify-center rounded-xl text-indigo-600"><Layers size={20}/></div>
                            <div><div className="font-bold text-slate-700">Vocab Sets</div><div className="text-[10px] text-slate-400">By Topic</div></div>
                        </button>
                        
                        {/* CONJUGATOR (Simplified) */}
                        <button onClick={() => alert("Conjugation Tables: \nêtre: je suis, tu es...\navoir: j'ai, tu as...")} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm active:scale-[0.98] h-32 flex flex-col justify-between group">
                            <div className="bg-fuchsia-50 w-10 h-10 flex items-center justify-center rounded-xl text-fuchsia-600"><Settings size={20}/></div>
                            <div><div className="font-bold text-slate-700">Conjugator</div><div className="text-[10px] text-slate-400">Verb Tables</div></div>
                        </button>
                    </div>
                </div>
            </div>
        );
    };
    const renderSmartConfig = () => {
        const setMode = (mode) => {
            if (mode === 'new') {
                setSmartConfig({ ...smartConfig, rangeStart: 1, rangeEnd: 5000, sessionSize: 15 });
                startSmartSession(); 
            } else if (mode === 'review') {
                setSmartConfig({ ...smartConfig, rangeStart: 1, rangeEnd: 5000, sessionSize: 20 });
                startSmartSession();
            } else if (mode === 'repair') {
                const difficultWords = vocabulary.filter(w => {
                    const p = userProgress[w.rank];
                    return p && (p.box === 1 || (p.wrongCount && p.wrongCount >= 2));
                });
                if (difficultWords.length === 0) {
                    alert("Good news! You don't have any 'critical' words right now.");
                    return;
                }
                setSessionQueue(difficultWords.slice(0, 20));
                setIsFlipped(false);
                setSessionResults({ correct: 0, wrong: 0 });
                setView('smart-session');
            }
        };

        return (
            <div className="w-full pt-4">
                
                {/* Header */}
                <div className="flex items-center gap-3 mb-6 pl-1">
                    <button onClick={() => setView('home')} className="p-2 -ml-2 hover:bg-slate-200 rounded-full transition-colors">
                        <RotateCcw size={20} className="text-slate-500" />
                    </button>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800">Training Mode</h2>
                        <p className="text-slate-400 text-sm">Select your focus.</p>
                    </div>
                </div>
                
                <div className="space-y-4">
                    {/* OPTION 1: EXPAND */}
                    <button onClick={() => setMode('new')} className="w-full group relative overflow-hidden bg-indigo-600 hover:bg-indigo-700 text-white p-5 rounded-3xl shadow-lg shadow-indigo-200 transition-all text-left active:scale-[0.98]">
                        <div className="relative z-10 flex items-center gap-4">
                            <div className="bg-white/20 p-3 rounded-2xl shrink-0"><Play size={24} fill="currentColor" /></div>
                            <div>
                                <div className="font-bold text-lg leading-tight">Expand Vocabulary</div>
                                <div className="text-indigo-100 text-xs mt-1 opacity-80">Learn new high-frequency words.</div>
                            </div>
                        </div>
                        <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-white/10 to-transparent"></div>
                    </button>

                    {/* OPTION 2: REVIEW */}
                    <button onClick={() => setMode('review')} className="w-full group bg-white hover:bg-slate-50 border border-slate-200 p-5 rounded-3xl shadow-sm transition-all text-left active:scale-[0.98] flex items-center gap-4">
                        <div className="bg-emerald-100 text-emerald-600 p-3 rounded-2xl shrink-0"><ArrowLeft size={24} /></div>
                        <div>
                            <div className="font-bold text-slate-700 text-lg leading-tight">Review Due Words</div>
                            <div className="text-slate-400 text-xs mt-1">Keep your memory fresh.</div>
                        </div>
                    </button>

                    {/* OPTION 3: REPAIR */}
                    <button onClick={() => setMode('repair')} className="w-full group bg-red-50 hover:bg-red-100 border border-red-100 p-5 rounded-3xl shadow-sm transition-all text-left active:scale-[0.98] flex items-center gap-4">
                        <div className="bg-red-200 text-red-600 p-3 rounded-2xl shrink-0"><Activity size={24} /></div>
                        <div>
                            <div className="font-bold text-red-900 text-lg leading-tight">Difficult Words</div>
                            <div className="text-red-400 text-xs mt-1">Fix words you got wrong often.</div>
                        </div>
                    </button>
                </div>
            </div>
        );
    };

    // --- DAILY WRITER EDITOR VIEW ---
    const renderDailyWriterEditor = () => {
        const submitDailyWriter = async () => {
            if (!dailyWriterText.trim()) return alert('Please write something first.');
            setLoadingContent(true);
            setDailyWriterFeedback(null); // Reset previous feedback
            try {
                const miniTasksText = dailyWriterMission?.miniTasks?.join(', ') || '';
                const res = await fetch('/api/correct', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ 
                        text: dailyWriterText, 
                        instruction: `Rate this text from 1 to 10 (1=poor,10=excellent). 
                        Check if the text fulfills these mini-tasks: ${miniTasksText}
                        Grammar focus: ${dailyWriterMission?.grammarFocus || 'General'}
                        Bonus word to use: "${dailyWriterMission?.bonusWord || ''}"
                        
                        IMPORTANT: The student may have written some words or phrases in ENGLISH because they didn't know how to say it in French. 
                        - Identify any English words/phrases in the text
                        - In the explanation, tell them how to say those words in French
                        - In the corrected version, replace the English words with the correct French translation
                        - Don't penalize too harshly for using English - this is a learning tool!
                        
                        Return JSON with:
                        {
                            "score": number (1-10),
                            "explanation": "Detailed feedback in English. If there were English words, explain: 'You wrote [English word] - in French you would say [French translation]'. Also mention what was good and what could be improved.",
                            "corrected": "The fully corrected French version with all English words translated to French and grammar/spelling fixed",
                            "completedTasks": [array of task indices that were completed, 0-indexed],
                            "englishWords": ["list of English words found in the text, if any"]
                        }` 
                    })
                });
                const data = await res.json();
                let score = null;
                if (typeof data.score === 'number') score = Math.max(1, Math.min(10, Math.round(data.score)));
                else if (data.explanation) {
                    const m = data.explanation.match(/\b(\d{1,3})\b/);
                    if (m) {
                        const n = parseInt(m[1], 10);
                        score = Math.max(1, Math.min(10, Math.round(n)));
                    }
                }
                if (score === null && typeof data.percentage === 'number') score = Math.max(1, Math.min(10, Math.ceil(data.percentage / 10)));
                if (score === null) score = Math.max(1, Math.min(10, Math.round((Math.random() * 4) + 6)));
                setDailyWriterScore(score);
                if (data.completedTasks && Array.isArray(data.completedTasks)) {
                    setCompletedMiniTasks(data.completedTasks);
                }
                // Save feedback to state instead of alert
                setDailyWriterFeedback({
                    explanation: data.explanation || 'Good effort! Keep practicing.',
                    corrected: data.corrected || null,
                    englishWords: data.englishWords || []
                });
            } catch (e) {
                setDailyWriterFeedback({
                    explanation: 'Scoring failed. Please try again later.',
                    corrected: null,
                    englishWords: [],
                    error: true
                });
                console.error(e);
            } finally {
                setLoadingContent(false);
            }
        };

        const toggleMiniTask = (index) => {
            setCompletedMiniTasks(prev => 
                prev.includes(index) 
                    ? prev.filter(i => i !== index) 
                    : [...prev, index]
            );
        };

        // Loading State
        if (dailyWriterLoading) {
            return (
                <div className="w-full pt-6 pb-24 px-1 h-full flex items-center justify-center">
                    <div className="text-center">
                        <Loader2 size={48} className="animate-spin text-indigo-500 mx-auto mb-4" />
                        <p className="text-slate-500 font-medium">Generating your mission...</p>
                    </div>
                </div>
            );
        }

        // No Mission State - Load one
        if (!dailyWriterMission) {
            return (
                <div className="w-full pt-6 pb-24 px-1 h-full">
                    <div className="flex items-center gap-3 mb-4 px-1">
                        <button onClick={() => setView('skills')} className="p-2 -ml-2 hover:bg-slate-100 rounded-full text-slate-500"><ArrowLeft size={20}/></button>
                        <h2 className="text-2xl font-bold text-slate-800">Daily Writer</h2>
                    </div>
                    <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-lg text-center">
                        <div className="bg-indigo-100 text-indigo-600 p-4 rounded-full inline-block mb-4">
                            <PenTool size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">Ready to Write?</h3>
                        <p className="text-slate-500 mb-6">Get a personalized writing mission based on your current grammar level.</p>
                        <button 
                            onClick={loadDailyWriterMission}
                            className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 active:scale-95 transition-all"
                        >
                            Generate Mission
                        </button>
                    </div>
                </div>
            );
        }

        const nextGrammar = getNextGrammarTopic();
        const wordCount = dailyWriterText.trim() ? dailyWriterText.trim().split(/\s+/).length : 0;

        return (
            <div className="w-full pt-6 pb-24 px-1 h-full">
                {/* Header */}
                <div className="flex items-center justify-between mb-4 px-1">
                    <div className="flex items-center gap-3">
                        <button onClick={() => setView('skills')} className="p-2 -ml-2 hover:bg-slate-100 rounded-full text-slate-500"><ArrowLeft size={20}/></button>
                        <h2 className="text-2xl font-bold text-slate-800">Daily Writer</h2>
                    </div>
                    <button 
                        onClick={loadDailyWriterMission}
                        className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-indigo-600 transition-colors"
                        title="New Mission"
                    >
                        <RotateCcw size={20}/>
                    </button>
                </div>

                <div className="space-y-4">
                    {/* Grammar Focus Badge */}
                    {dailyWriterMission.grammarFocus && (
                        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 p-4 rounded-2xl text-white shadow-lg">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="bg-white/20 p-2 rounded-xl">
                                    <GraduationCap size={20} />
                                </div>
                                <div>
                                    <div className="text-xs font-medium text-white/70 uppercase tracking-wider">Grammar Focus</div>
                                    <div className="font-bold text-lg">{dailyWriterMission.grammarFocus}</div>
                                </div>
                            </div>
                            {dailyWriterMission.grammarExplanation && (
                                <p className="text-white/80 text-sm pl-11">{dailyWriterMission.grammarExplanation}</p>
                            )}
                        </div>
                    )}

                    {/* Mission Card - Redesigned */}
                    <div className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs font-bold text-indigo-500 bg-indigo-50 px-2 py-1 rounded-lg uppercase">{dailyWriterMission.type}</span>
                                    <span className="text-xs text-slate-400">→ {dailyWriterMission.recipient}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-800">{dailyWriterMission.topic}</h3>
                            </div>
                            <div className="bg-indigo-50 text-indigo-600 p-2.5 rounded-xl">
                                <PenTool size={20} />
                            </div>
                        </div>

                        {/* Main Task */}
                        <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-4">
                            <p className="text-slate-700 leading-relaxed">{dailyWriterMission.mainTask}</p>
                        </div>

                        {/* Grammar Requirement - Highlighted */}
                        <div className="bg-purple-50 p-4 rounded-xl border border-purple-200 mb-4">
                            <div className="flex items-start gap-3">
                                <div className="bg-purple-100 text-purple-600 p-2 rounded-lg shrink-0">
                                    <GraduationCap size={18} />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-purple-500 uppercase tracking-wider mb-1">Required Grammar</div>
                                    <p className="text-purple-900 font-semibold">{dailyWriterMission.grammarFocus || getNextGrammarTopic()?.topic?.title || 'General French'}</p>
                                    {dailyWriterMission.grammarExplanation && (
                                        <p className="text-purple-700 text-sm mt-1">{dailyWriterMission.grammarExplanation}</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Mini Tasks Checklist */}
                        <div className="mb-4">
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                                <Layers size={14} />
                                Tasks ({completedMiniTasks.length}/{dailyWriterMission.miniTasks?.length || 0})
                            </div>
                            <div className="space-y-2">
                                {dailyWriterMission.miniTasks?.map((task, idx) => {
                                    const isCompleted = completedMiniTasks.includes(idx);
                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => toggleMiniTask(idx)}
                                            className={`w-full flex items-start gap-3 p-3 rounded-xl border transition-all text-left ${
                                                isCompleted 
                                                    ? 'bg-green-50 border-green-200 text-green-700' 
                                                    : 'bg-white border-slate-100 text-slate-600 hover:border-indigo-200 hover:bg-indigo-50/50'
                                            }`}
                                        >
                                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 ${
                                                isCompleted 
                                                    ? 'bg-green-500 border-green-500 text-white' 
                                                    : 'border-slate-300'
                                            }`}>
                                                {isCompleted && <Check size={12} />}
                                            </div>
                                            <span className={`text-sm ${isCompleted ? 'line-through opacity-70' : ''}`}>
                                                {task}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-wrap gap-3 pt-3 border-t border-slate-100">
                            <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-50 px-3 py-1.5 rounded-lg">
                                <Sparkles size={12} className="text-amber-400"/>
                                <span className="font-medium text-slate-600">"{dailyWriterMission.bonusWord}"</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-50 px-3 py-1.5 rounded-lg">
                                <Activity size={12}/>
                                <span>Min {dailyWriterMission.minWords} words</span>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-slate-400 bg-slate-50 px-3 py-1.5 rounded-lg">
                                <RotateCcw size={12}/>
                                <span>~{dailyWriterMission.timeMinutes} min</span>
                            </div>
                        </div>
                    </div>

                    {/* Example Opener - Helpful Hint */}
                    {dailyWriterMission.exampleOpener && (
                        <div className="bg-amber-50 border border-amber-100 p-4 rounded-xl">
                            <div className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-1 flex items-center gap-1">
                                <Info size={12}/> Example Opener
                            </div>
                            <p className="text-amber-800 italic">"{dailyWriterMission.exampleOpener}"</p>
                        </div>
                    )}

                    {/* Editor Area */}
                    <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden">
                        <textarea 
                            value={dailyWriterText} 
                            onChange={(e) => setDailyWriterText(e.target.value)} 
                            placeholder="Start writing your text here..." 
                            className="w-full min-h-[200px] p-5 bg-transparent text-base text-slate-700 outline-none resize-none placeholder:text-slate-300" 
                        />
                        <div className="px-5 py-3 border-t border-slate-100 flex justify-between items-center bg-slate-50/50">
                            <div className={`text-xs font-bold uppercase tracking-wider ${
                                wordCount >= (dailyWriterMission.minWords || 50) 
                                    ? 'text-green-500' 
                                    : 'text-slate-400'
                            }`}>
                                {wordCount} / {dailyWriterMission.minWords || 50} words
                            </div>
                            <div className="flex gap-2">
                                <button 
                                    onClick={() => { setDailyWriterText(''); setDailyWriterScore(null); setDailyWriterFeedback(null); setCompletedMiniTasks([]); }} 
                                    className="text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100 transition-colors"
                                    title="Reset"
                                >
                                    <Trash2 size={18}/>
                                </button>
                                <button 
                                    onClick={submitDailyWriter} 
                                    disabled={loadingContent || !dailyWriterText.trim()}
                                    className="bg-indigo-600 text-white px-5 py-2.5 rounded-xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 active:scale-95 transition-all flex items-center gap-2 disabled:opacity-50 disabled:shadow-none text-sm"
                                >
                                    {loadingContent ? <Loader2 size={18} className="animate-spin"/> : <><Check size={18}/> Submit</>}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Score Result */}
                    {dailyWriterScore !== null && (
                        <div className="space-y-4">
                            {/* Score Header */}
                            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-[2rem] border border-green-100 shadow-sm">
                                <div className="flex items-center gap-4">
                                    <div className="bg-green-100 text-green-600 p-4 rounded-2xl shadow-sm">
                                        <Trophy size={28} />
                                    </div>
                                    <div>
                                        <div className="font-bold text-3xl text-slate-800">{dailyWriterScore}<span className="text-lg text-slate-400">/10</span></div>
                                        <div className="text-green-700 font-medium text-sm">Great work! Keep it up.</div>
                                    </div>
                                </div>
                                <div className="mt-4 pt-4 border-t border-green-200/50">
                                    <div className="text-xs text-green-700 font-medium mb-2">Completed tasks: {completedMiniTasks.length}/{dailyWriterMission.miniTasks?.length || 0}</div>
                                    <div className="flex gap-1">
                                        {dailyWriterMission.miniTasks?.map((_, idx) => (
                                            <div 
                                                key={idx} 
                                                className={`h-2 flex-1 rounded-full ${completedMiniTasks.includes(idx) ? 'bg-green-500' : 'bg-slate-200'}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Feedback Block */}
                            {dailyWriterFeedback && (
                                <div className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm">
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className={`p-2 rounded-xl ${dailyWriterFeedback.error ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
                                            <MessageSquare size={20} />
                                        </div>
                                        <h4 className="font-bold text-slate-800">Feedback</h4>
                                    </div>

                                    {/* English Words Found - Special Hint */}
                                    {dailyWriterFeedback.englishWords && dailyWriterFeedback.englishWords.length > 0 && (
                                        <div className="bg-amber-50 p-4 rounded-xl border border-amber-200 mb-4">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Info size={16} className="text-amber-600" />
                                                <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">English words detected</span>
                                            </div>
                                            <p className="text-amber-800 text-sm">
                                                You used these English words: <span className="font-semibold">{dailyWriterFeedback.englishWords.join(', ')}</span>
                                            </p>
                                            <p className="text-amber-700 text-xs mt-1">Check the explanation below to learn how to say them in French!</p>
                                        </div>
                                    )}
                                    
                                    {/* Explanation */}
                                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-4">
                                        <p className="text-slate-700 leading-relaxed text-sm whitespace-pre-wrap">{dailyWriterFeedback.explanation}</p>
                                    </div>

                                    {/* Corrected Version */}
                                    {dailyWriterFeedback.corrected && (
                                        <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Check size={16} className="text-indigo-600" />
                                                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Corrected Version</span>
                                            </div>
                                            <p className="text-indigo-900 leading-relaxed text-sm italic whitespace-pre-wrap">{dailyWriterFeedback.corrected}</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        );
    };

    const renderTestConfig = () => {
        const levels = [
            { label: "Foundation", limit: 100, sub: "Survival" },
            { label: "Essentials", limit: 500, sub: "Daily Life" },
            { label: "Base", limit: 1000, sub: "Solid Core" },
            { label: "Extension", limit: 2000, sub: "Fluent" },
            { label: "Mastery", limit: 5000, sub: "Native" },
            { label: "Individual", limit: -1, sub: "Custom" },
        ];

        const currentLimit = testConfig.endRank;
        const isCustomActive = testConfig.startRank !== 1 || !levels.some(l => l.limit === currentLimit);

        return (
            // ÄNDERUNG: Kein Wrapper-Container mehr, nur "pt-4"
            <div className="w-full pt-4">
                
                {/* Header */}
                <div className="flex items-center gap-3 mb-6 pl-1">
                    <button onClick={() => setView('home')} className="p-2 -ml-2 hover:bg-slate-200 rounded-full transition-colors">
                        <ArrowLeft size={20} className="text-slate-500" />
                    </button>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800">Quick Test</h2>
                        <p className="text-slate-400 text-sm">Test your knowledge.</p>
                    </div>
                </div>

                <div className="space-y-6">
                    {/* KARTE 1: Difficulty Selection */}
                    <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Difficulty Level</label>
                        <div className="grid grid-cols-2 gap-3">
                            {levels.map((l) => {
                                const isCustomBtn = l.limit === -1;
                                const isActive = isCustomBtn ? isCustomActive : (!isCustomActive && currentLimit === l.limit);

                                return (
                                    <button
                                        key={l.label}
                                        onClick={() => {
                                            if (isCustomBtn) {
                                                setTestConfig({ ...testConfig, startRank: 1, endRank: 5001 });
                                            } else {
                                                setTestConfig({ ...testConfig, startRank: 1, endRank: l.limit });
                                            }
                                        }}
                                        className={`p-3 rounded-2xl border text-left transition-all ${
                                            isActive
                                                ? 'bg-indigo-600 border-indigo-600 text-white shadow-md scale-[1.02]'
                                                : 'bg-slate-50 border-slate-100 text-slate-600 hover:border-indigo-200 hover:bg-indigo-50'
                                        }`}
                                    >
                                        <div className={`font-bold text-sm ${isActive ? 'text-white' : 'text-slate-800'}`}>{l.label}</div>
                                        <div className={`text-[10px] mt-0.5 ${isActive ? 'text-indigo-200' : 'text-slate-400'}`}>
                                            {isCustomBtn ? 'Set Range' : `Top ${l.limit}`}
                                        </div>
                                    </button>
                                );
                            })}
                        </div>

                        {/* Manuelle Eingabe (Innerhalb der Karte, klappt auf) */}
                        {isCustomActive && (
                            <div className="mt-4 pt-4 border-t border-slate-100">
                                <div className="flex items-center gap-3">
                                    <input type="number" min="1" value={testConfig.startRank} onChange={(e) => setTestConfig({ ...testConfig, startRank: parseInt(e.target.value) || 1 })} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none font-mono text-center font-bold" placeholder="Start" />
                                    <span className="text-slate-300 font-bold">-</span>
                                    <input type="number" min="1" value={testConfig.endRank} onChange={(e) => setTestConfig({ ...testConfig, endRank: parseInt(e.target.value) || 1 })} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none font-mono text-center font-bold" placeholder="End" />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* KARTE 2: Slider */}
                    <div className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100">
                        <div className="flex justify-between items-center mb-4">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Question Count</label>
                            <span className="bg-indigo-100 text-indigo-700 text-sm font-bold px-3 py-1 rounded-full">{testConfig.count}</span>
                        </div>
                        <input type="range" min="5" max="50" step="5" value={testConfig.count} onChange={(e) => setTestConfig({ ...testConfig, count: parseInt(e.target.value) })} className="w-full accent-indigo-600 h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer" />
                        <div className="flex justify-between mt-2 text-[10px] text-slate-400 font-bold tracking-wide uppercase">
                            <span>Quick (5)</span>
                            <span>Deep (50)</span>
                        </div>
                    </div>

                    {/* Start Button */}
                    <button onClick={startTestSession} className="w-full bg-slate-900 hover:bg-slate-800 active:scale-[0.98] text-white p-5 rounded-3xl font-bold shadow-xl shadow-slate-200 transition-all flex justify-center items-center gap-3">
                        <Play size={24} fill="currentColor" /> 
                        Start Test
                    </button>
                </div>
            </div>
        );
    };
    const renderTranslator = () => (
        <div className="w-full pt-6 pb-24 px-1 h-full">
            {/* Header... */}
            {renderTranslatorContent()} 
        </div>
    );
    // --- ROBUSTER AI GENERATOR ---
    const fetchAiExamples = async (input) => {
        // 1. Input analysieren (String oder Objekt?)
        let wordText = "";
        let wordRank = "temp";

        if (typeof input === 'string') {
            wordText = input;
        } else if (input && input.french) {
            wordText = input.french;
            wordRank = input.rank;
        } else {
            console.error("Invalid input for examples:", input);
            return;
        }

        setLoadingExamples(true);
        try {
            const res = await fetch('/api/examples', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ word: wordText })
            });
            const data = await res.json();
            
            if (Array.isArray(data)) {
                // 2. Sowohl im Cache als auch im direkten State speichern
                setExampleCache(prev => ({
                    ...prev,
                    [wordRank]: data
                }));
                setAiExamples(data); // Damit wir es sofort anzeigen können
                setExamplesVisible(true);
            }
        } catch (e) {
            console.error(e);
            alert("Could not load examples.");
        } finally {
            setLoadingExamples(false);
        }
    };
    const generateStory = async (genre, length, selectedLevel) => {
        setLoadingStory(true);
        
        // 1. Level-Code bereinigen (Frontend zeigt evtl "A1 (Beginner)" an)
        // Wir wollen nur "A1", "C2" oder "auto"
        let levelToSend = selectedLevel === 'auto' ? 'auto' : selectedLevel;

        // 2. Schwache Wörter sammeln (NUR für Auto-Modus)
        let weakWordsToSend = [];

        if (selectedLevel === 'auto') {
            weakWordsToSend = vocabulary
                .filter(w => {
                    const p = userProgress[w.rank];
                    return p && (p.box === 1 || (p.wrongCount && p.wrongCount >= 2));
                })
                .slice(0, 5)
                .map(w => w.french);
            
            // Falls keine schwachen Wörter da sind, bleibt es bei auto, 
            // aber das Backend nimmt dann den Fallback.
        } 
        // HINWEIS: Wenn selectedLevel NICHT auto ist (z.B. C2), bleibt weakWordsToSend leer [].
        // Das Backend sieht das leere Array und ignoriert deine Lernwörter.

        try {
            const res = await fetch('/api/story', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    genre, 
                    level: levelToSend, 
                    weakWords: weakWordsToSend, 
                    length 
                })
            });
            const data = await res.json();
            if (data.error) throw new Error(data.error);
            
            setCurrentStory(data);
            setReaderMode('reading'); 
        } catch (e) {
            console.error(e);
            alert("Could not generate story. Please try again.");
        } finally {
            setLoadingStory(false);
        }
    };
    const renderWordDetail = () => {
        if (!selectedWord) return null;
        const word = selectedWord;

        return (
            <div className="flex flex-col h-full max-w-xl mx-auto w-full pt-4">
                {/* Header: Zurück zur Library */}
                <div className="flex items-center justify-between mb-4 pl-1">
                    <button 
                        onClick={() => {
                            setSelectedWord(null); 
                            setView('learned-section'); // Zurück zur Liste
                            setAiExamples(null); // Reset AI
                            setIsFlipped(false);
                        }} 
                        className="flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors"
                    >
                        <div className="p-2 bg-white border border-slate-200 rounded-full"><ArrowLeft size={16} /></div>
                        <span className="font-bold text-sm">Back to Library</span>
                    </button>
                </div>

                {/* DIE KARTE (Wiederverwendetes Design) */}
                <div className="bg-white border-2 border-slate-100 rounded-3xl shadow-lg p-6 flex flex-col items-center justify-center min-h-[400px] relative transition-all">
                    <div className="absolute top-4 right-4 bg-slate-100 text-slate-400 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Rank #{word.rank}</div>

                    {/* FRONT */}
                    <div className="mb-6 text-center w-full relative">
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">French</div>
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 break-words text-center leading-tight">{word.french}</h2>
                            <button onClick={(e) => { e.stopPropagation(); speak(word.french); }} className="p-3 bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-100 transition-all shadow-sm shrink-0"><Volume2 size={24} /></button>
                        </div>
                        {word.example_fr && (
                            <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl text-left relative group mx-2">
                                <p className="text-slate-600 italic text-lg leading-relaxed pr-8">"{word.example_fr}"</p>
                                <button onClick={(e) => { e.stopPropagation(); speak(word.example_fr); }} className="absolute right-2 top-2 p-2 text-slate-300 hover:text-indigo-600 hover:bg-white rounded-full transition-colors"><Volume2 size={18} /></button>
                            </div>
                        )}
                    </div>

                    {/* BACK / INTERACTION */}
                    {!isFlipped ? (
                        <button onClick={() => setIsFlipped(true)} className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg transition-all flex items-center gap-2">
                            <BookOpen size={20} /> Show Details
                        </button>
                    ) : (
                        <div className="w-full flex flex-col items-center border-t border-slate-100 pt-6 mt-2 w-full">
                            <div className="text-center mb-6 w-full">
                                <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">English</div>
                                <h3 className="text-3xl font-bold text-indigo-900 mb-2 leading-tight">{word.english || word.german}</h3>
                                {word.example_en && <p className="text-indigo-400 italic text-sm mt-2 px-4">"{word.example_en}"</p>}
                            </div>

                            {/* AI GENERATOR (Funktioniert auch hier!) */}
                            <div className="w-full px-2">
                                {!aiExamples && !loadingExamples && (
                                    <button 
                                        onClick={() => handleGenerateExample(word)} 
                                        disabled={generating}
                                        className={`w-full py-3 rounded-xl font-bold text-sm border transition-colors flex items-center justify-center gap-2
                                        ${generating 
                                            ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-wait' 
                                            : 'bg-indigo-50 text-indigo-600 border-indigo-100 hover:bg-indigo-100 shadow-sm'
                                        }`}
                                    >
                                        {generating ? (
                                            <>
                                                <Loader2 className="animate-spin" size={18}/> 
                                                <span>Writing sentence...</span>
                                            </>
                                        ) : (
                                            <>
                                                <Sparkles size={18}/> 
                                                <span>Generate with AI</span>
                                            </>
                                        )}
                                    </button>
                                )}
                                {loadingExamples && <div className="w-full py-4 text-center text-amber-500 text-sm font-medium animate-pulse flex justify-center items-center gap-2"><ArrowLeft className="animate-spin" size={16}/> generating...</div>}
                                {aiExamples && (
                                    <div className="space-y-3 text-left">
                                        {aiExamples.map((ex, idx) => (
                                            <div key={idx} className="bg-white border border-slate-200 p-3 rounded-xl shadow-sm relative">
                                                <div className="flex justify-between items-start gap-2">
                                                    <p className="text-slate-700 font-medium text-base leading-snug pr-6">{ex.fr}</p>
                                                    <button onClick={() => speak(ex.fr)} className="absolute right-2 top-2 text-indigo-300 hover:text-indigo-600 transition-colors"><Volume2 size={16} /></button>
                                                </div>
                                                <p className="text-slate-400 text-sm italic mt-1 border-t border-slate-50 pt-1">{ex.en}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    };
    const renderFlashcard = () => {
        const isSmartMode = view === 'smart-session';
        const word = isSmartMode ? sessionQueue[0] : activeSession[currentIndex];
        
        if (!word) return <div>Loading...</div>;

        let progressText = isSmartMode ? `${sessionQueue.length} remaining` : `${currentIndex + 1} / ${activeSession.length}`;
        let progressPercent = !isSmartMode ? (currentIndex / activeSession.length) * 100 : 0;

        const rawExamples = exampleCache[word.rank] || aiExamples;
        const currentExamples = Array.isArray(rawExamples) ? rawExamples : (rawExamples ? [rawExamples] : null);
        const hasExamples = currentExamples && currentExamples.length > 0;

        return (
            // CONTAINER: h-[calc(100vh-140px)] sorgt dafür, dass wir den ganzen Screen nutzen (minus Header/Nav)
            <div className="flex flex-col w-full max-w-xl mx-auto pt-4 h-[calc(100vh-140px)]">
                
                {/* Header */}
                <div className="flex items-center justify-between mb-2 pl-1 shrink-0">
                    <button 
                        onClick={() => {
                            setAiExamples(null); 
                            setExamplesVisible(false);
                            setIsFlipped(false);
                            setView('home');
                        }} 
                        className="p-2 -ml-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
                    >
                        <X size={24} />
                    </button>
                    <div className="text-sm font-medium text-slate-500 font-mono">{progressText}</div>
                    <div className="w-6"></div> 
                </div>
                
                {!isSmartMode && <div className="w-full bg-slate-200 h-2 rounded-full mb-4 shrink-0"><div className="bg-indigo-600 h-2 rounded-full transition-all" style={{ width: `${progressPercent}%` }}></div></div>}
                
                {/* DIE KARTE */}
                {/* ÄNDERUNG: flex-1 lässt die Karte wachsen. mb-4 für Abstand zum Rand unten. */}
                <div className="bg-white border-2 border-slate-100 rounded-[2.5rem] shadow-xl p-6 flex flex-col items-center relative transition-all flex-1 mb-4 overflow-hidden">
                    
                    <div className="absolute top-5 right-6 bg-slate-100 text-slate-400 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Rank #{word.rank}</div>
                    {isSmartMode && userProgress[word.rank] && <div className="absolute top-5 left-6 bg-indigo-50 text-indigo-400 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider flex items-center gap-1"><Layers size={10} /> Box {userProgress[word.rank].box}</div>}

                    {/* SCROLLABLE CONTENT AREA (Mitte) */}
                    {/* Dieser Bereich nimmt den Platz ein und ist scrollbar, falls der Text zu lang ist */}
                    <div className="flex-1 w-full overflow-y-auto flex flex-col items-center justify-center py-4 no-scrollbar">
                        
                        {/* VORDERSEITE (Französisch) */}
                        {!isFlipped ? (
                            <div className="text-center w-full">
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">French</div>
                                <div className="flex items-center justify-center gap-3 mb-6">
                                    <h2 className="text-5xl md:text-6xl font-bold text-slate-800 break-words text-center leading-tight">{word.french}</h2>
                                    <button onClick={(e) => { e.stopPropagation(); speak(word.french); }} className="p-3 bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-100 transition-all shadow-sm shrink-0"><Volume2 size={24} /></button>
                                </div>
                                {word.example_fr && (
                                    <div className="bg-slate-50/50 border border-slate-100 p-4 rounded-2xl text-left relative group mx-2 inline-block max-w-full">
                                        <p className="text-slate-600 italic text-lg leading-relaxed pr-8">"{word.example_fr}"</p>
                                        <button onClick={(e) => { e.stopPropagation(); speak(word.example_fr); }} className="absolute right-2 top-2 p-2 text-slate-300 hover:text-indigo-600 hover:bg-white rounded-full transition-colors"><Volume2 size={18} /></button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            /* RÜCKSEITE (Englisch + AI) */
                            <div className="w-full flex flex-col items-center animate-in fade-in zoom-in-95 duration-300">
                                {/* Französisches Wort oben (kleiner) */}
                                <div className="text-center mb-6 w-full opacity-50 scale-90">
                                    <h2 className="text-2xl font-bold text-slate-800">{word.french}</h2>
                                </div>
                                
                                {/* Übersetzung */}
                                <div className="text-center mb-6 w-full border-t border-b border-slate-100 py-6">
                                    <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">Meaning</div>
                                    <h3 className="text-3xl font-bold text-indigo-900 leading-tight">{word.english || word.german}</h3>
                                    {word.example_en && <p className="text-indigo-400 italic text-sm mt-2 px-4 text-center">"{word.example_en}"</p>}
                                </div>

                                {/* AI Context Area */}
                                <div className="w-full px-1">
                                    {!aiExamples && !loadingExamples && (
                                        <button 
                                            onClick={() => handleGenerateExample(word)} 
                                            disabled={generating}
                                            className={`w-full py-3 rounded-xl font-bold text-sm border transition-colors flex items-center justify-center gap-2
                                            ${generating ? 'bg-slate-100 text-slate-400 border-slate-200 cursor-wait' : 'bg-indigo-50 text-indigo-600 border-indigo-100 hover:bg-indigo-100 shadow-sm'}`}
                                        >
                                            {generating ? <><Loader2 className="animate-spin" size={18}/> <span>Writing...</span></> : <><Sparkles size={18}/> <span>Generate Context</span></>}
                                        </button>
                                    )}
                                    {loadingExamples && <div className="w-full py-4 text-center text-amber-500 text-sm font-medium animate-pulse flex justify-center items-center gap-2"><ArrowLeft className="animate-spin" size={16}/> generating...</div>}
                                    {aiExamples && (
                                        <div className="space-y-3 text-left w-full">
                                            {currentExamples.map((ex, idx) => (
                                                <div key={idx} className="bg-slate-50 border border-slate-100 p-3 rounded-xl shadow-sm relative group">
                                                    <div className="flex justify-between items-start gap-2">
                                                        <p className="text-slate-700 font-medium text-sm leading-snug pr-6">{ex.fr}</p>
                                                        <button onClick={() => speak(ex.fr)} className="absolute right-2 top-2 text-indigo-300 hover:text-indigo-600 transition-colors"><Volume2 size={16} /></button>
                                                    </div>
                                                    <p className="text-slate-400 text-xs italic mt-1 border-t border-slate-200/50 pt-1">{ex.en}</p>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* BOTTOM ACTIONS AREA (Sticky Bottom) */}
                    {/* ÄNDERUNG: mt-auto drückt diesen Bereich ganz nach unten */}
                    <div className="w-full mt-auto pt-6 border-t border-slate-50">
                        {!isFlipped ? (
                            <button onClick={() => setIsFlipped(true)} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-5 rounded-2xl font-bold text-xl shadow-xl shadow-indigo-200 transition-all flex items-center justify-center gap-3 active:scale-[0.98]">
                                <BookOpen size={24} /> Reveal
                            </button>
                        ) : (
                            isSmartMode ? (
                                <div className="grid grid-cols-4 gap-2 w-full">
                                    {[
                                        { q: 0, label: "Again", color: "bg-red-50 text-red-600 border-red-200 hover:bg-red-100" },
                                        { q: 1, label: "Hard", color: "bg-amber-50 text-amber-600 border-amber-200 hover:bg-amber-100" },
                                        { q: 2, label: "Good", color: "bg-green-50 text-green-600 border-green-200 hover:bg-green-100" },
                                        { q: 3, label: "Easy", color: "bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100" }
                                    ].map((btn) => {
                                        const stats = calculateAnkiStats(userProgress[word.rank], btn.q);
                                        return (
                                            <button key={btn.label} onClick={() => handleResult(btn.q)} className={`${btn.color} border p-1 rounded-2xl flex flex-col items-center justify-center transition-all active:scale-95 h-20 shadow-sm`}>
                                                <span className="text-[10px] font-bold uppercase tracking-tighter opacity-60 mb-0.5">{formatInterval(stats.interval)}</span>
                                                <span className="font-bold text-sm leading-none">{btn.label}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="grid grid-cols-2 gap-4 w-full">
                                    <button onClick={() => handleResult(0)} className="bg-red-50 text-red-600 border border-red-100 p-4 rounded-2xl font-bold flex items-center justify-center gap-2 h-16 active:scale-95 transition-all"><X size={24} /> Missed</button>
                                    <button onClick={() => handleResult(2)} className="bg-green-50 text-green-600 border border-green-100 p-4 rounded-2xl font-bold flex items-center justify-center gap-2 h-16 active:scale-95 transition-all"><Check size={24} /> Got it</button>
                                </div>
                            )
                        )}
                    </div>

                </div>
            </div>
        );
    };
    
    const renderResults = () => (
        <div className="text-center max-w-md mx-auto py-10">
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
    //tetsad
    const renderGrammar = () => (
        <div className="flex flex-col items-center justify-start min-h-[60vh] space-y-6 pt-4 pb-20">
            {/* Header */}
            <div className="max-w-xl mx-auto w-full px-1 text-center">
                <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-full text-indigo-600 mb-4 shadow-sm">
                    <PenTool size={32} />
                </div>
                <h2 className="text-2xl font-bold text-slate-800 mb-1">
                    AI Translator
                </h2>
                <p className="text-slate-400 text-sm">
                    Instant corrections & translations 
                </p>
            </div>
            
            {/* Die neue Komponente */}
            <ModernTranslator />
        </div>
    );
    const renderPractice = () => (
        <div className="space-y-6 pt-4 pb-24">
            <div className="flex items-center gap-3 mb-2 px-1">
                 <div className="bg-indigo-100 p-2 rounded-full text-indigo-600"><BookCheck size={24} /></div>
                 <h2 className="text-2xl font-bold text-slate-800">Practice Room</h2>
            </div>
            
            <p className="text-slate-500 px-1">Apply your knowledge in real context.</p>

            <div className="grid gap-4">
                {/* STORIES CARD (Placeholder) */}
                <button className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-left flex items-center gap-4 group hover:border-indigo-200 transition-all active:scale-[0.98]">
                    <div className="bg-amber-100 w-12 h-12 flex items-center justify-center rounded-2xl text-amber-600 group-hover:scale-110 transition-transform">
                        <BookOpen size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-800 text-lg">Stories</h3>
                        <p className="text-slate-400 text-xs">Read adaptive short stories.</p>
                    </div>
                    <div className="ml-auto bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-1 rounded">SOON</div>
                </button>

                {/* NEWS CARD (Placeholder) */}
                <button className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 text-left flex items-center gap-4 group hover:border-indigo-200 transition-all active:scale-[0.98] opacity-60">
                    <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-2xl text-blue-600">
                        <Activity size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-800 text-lg">News Feed</h3>
                        <p className="text-slate-400 text-xs">Real french headlines.</p>
                    </div>
                    <div className="ml-auto"><ChevronRight size={20} className="text-slate-300"/></div>
                </button>
            </div>
        </div>
    );
    const renderDataMgmt = () => {
        // State für Nickname-Bearbeitung (Lokal in dieser Funktion oder oben in App, 
        // da wir 'renderDataMgmt' in App haben, nutzen wir lokale Variablen hier ist ok, 
        // aber für Re-Render brauchen wir State.
        // Da wir das hier inline rendern, nutzen wir 'isEditingName' als State oben in App() 
        // ODER wir machen es einfach per window.prompt (einfacher für jetzt).
        
        const changeNickname = async () => {
            const newName = window.prompt("New Nickname:", nickname);
            if (newName && newName.trim() !== "") {
                setNickname(newName);
                localStorage.setItem('vocabApp_nickname', newName);
                
                if (session) {
                    await supabase
                        .from('profiles')
                        .update({ nickname: newName })
                        .eq('id', session.user.id);
                }
            }
        };

        const handleDeleteAccount = async () => {
            const confirm = window.confirm("⚠️ Delete everything? This cannot be undone.");
            if (confirm) {
                const pin = window.prompt("Type 'DELETE' to confirm:");
                if (pin !== 'DELETE') return;

                if (session) {
                    const { error } = await supabase.rpc('delete_user');
                    if (error) return alert(error.message);
                    await supabase.auth.signOut();
                }

                localStorage.clear();
                setSession(null);
                window.location.reload();
            }
        };

        return (
            <div className="max-w-2xl mx-auto space-y-6 pt-6 pb-24 px-1">
                {/* Header */}
                <div className="flex items-center gap-3 mb-2 px-1">
                    <button onClick={() => setView('profile')} className="p-2 -ml-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500"><ArrowLeft size={24} /></button>
                    <h2 className="text-2xl font-bold text-slate-800">Settings</h2>
                </div>

                {/* 1. Account Info (Unterscheidung Gast vs User) */}
                <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
                     <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3">
                            <div className="bg-indigo-50 text-indigo-600 p-2 rounded-xl"><User size={20}/></div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <h3 className="font-bold text-slate-800">{nickname}</h3>
                                    <button onClick={changeNickname} className="text-slate-400 hover:text-indigo-600"><PenTool size={12}/></button>
                                </div>
                                <p className="text-xs text-slate-400 truncate max-w-[150px]">
                                    {session ? session.user.email : "Guest Account"}
                                </p>
                            </div>
                        </div>
                        {/* Status Badge */}
                        <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${session ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
                            {session ? 'Synced' : 'Local'}
                        </div>
                     </div>

                     {/* LOGOUT BUTTON - NUR WENN EINGELOGGT */}
                     {session ? (
                         <button onClick={handleLogout} className="w-full py-3 bg-slate-50 text-slate-600 rounded-xl font-bold text-sm hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
                            <RotateCcw size={16} className="rotate-180"/> Log Out
                        </button>
                     ) : (
                         <button onClick={() => setShowAuthModal(true)} className="w-full py-3 bg-indigo-600 text-white rounded-xl font-bold text-sm shadow-lg shadow-indigo-200 active:scale-95 transition-all">
                            Connect Account
                         </button>
                     )}
                </div>

                {/* 2. Voice Settings */}
                <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-indigo-50 text-indigo-600 p-2 rounded-xl"><Volume2 size={20}/></div>
                        <div><h3 className="font-bold text-slate-800">Audio Voice</h3><p className="text-xs text-slate-400">Select speaker</p></div>
                    </div>
                    <select 
                        value={selectedVoiceURI || ''}
                        onChange={(e) => { setSelectedVoiceURI(e.target.value); localStorage.setItem('vocabApp_voice', e.target.value); setTimeout(() => speak("Bonjour"), 100); }}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 outline-none"
                    >
                        {availableVoices.map(v => <option key={v.voiceURI} value={v.voiceURI}>{v.name}</option>)}
                    </select>
                </div>

                {/* 3. Danger Zone */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                    <h3 className="font-bold text-red-500 text-xs uppercase tracking-wider mb-3 px-2">Danger Zone</h3>
                    <button 
                        onClick={() => { setDeleteInput(""); setShowDeleteModal(true); }}
                        className="w-full py-4 text-red-600 font-bold text-sm bg-red-50 border border-red-100 rounded-2xl hover:bg-red-100 transition-colors flex items-center justify-center gap-2"
                    >
                        <Trash2 size={18}/> {session ? "Delete Account" : "Reset App"}
                    </button>
                </div>
            </div>
        );
    };
    
    const renderJokeDetail = () => {
        if (!viewingJoke) return null;

        const isAlreadySaved = savedJokes.some(j => j.q === viewingJoke.q);

        const handleSaveJoke = () => {
            if (!isAlreadySaved) {
                const updated = [...savedJokes, viewingJoke];
                setSavedJokes(updated);
                localStorage.setItem('vocabApp_savedJokes', JSON.stringify(updated));
            }
        };

        return (
            <div className="max-w-xl mx-auto space-y-6 pt-6 pb-24 px-1">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4 px-1">
                    <button onClick={() => { setViewingJoke(null); setView('home'); }} className="p-2 -ml-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500">
                        <ArrowLeft size={24} />
                    </button>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800">Joke of the Day</h2>
                        <p className="text-slate-400 text-xs">Daily dose of French humor</p>
                    </div>
                </div>

                {/* Joke Card */}
                <div className="bg-white p-6 rounded-[2.5rem] shadow-lg border border-slate-100 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 to-orange-400"></div>
                    
                    {/* Question Section */}
                    <div className="mb-6">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Question</span>
                        <h3 className="text-2xl font-bold text-slate-800 mt-2 mb-3 leading-snug font-serif italic">
                            "{viewingJoke.q}"
                        </h3>
                        <p className="text-sm text-indigo-500 font-medium bg-indigo-50 py-2 px-3 rounded-lg inline-block">
                            🇬🇧 {viewingJoke.q_en || "Translation coming soon..."}
                        </p>
                        <div className="mt-3">
                            <button onClick={() => speak(viewingJoke.q)} className="p-2 bg-slate-50 rounded-full text-slate-400 hover:text-amber-600 hover:bg-amber-50">
                                <Volume2 size={20}/>
                            </button>
                        </div>
                    </div>

                    {/* Answer Section */}
                    <div className="border-t border-slate-100 pt-6">
                        <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">Punchline</span>
                        <h3 className="text-2xl font-bold text-indigo-600 mt-2 mb-3 leading-snug italic">
                            "{viewingJoke.a}"
                        </h3>
                        <p className="text-sm text-slate-500 bg-slate-50 p-3 rounded-xl">
                            🇬🇧 {viewingJoke.en}
                        </p>
                        
                        <div className="flex justify-center gap-3 mt-4">
                            <button onClick={() => speak(viewingJoke.a)} className="p-3 bg-indigo-50 rounded-full text-indigo-600 hover:bg-indigo-100">
                                <Volume2 size={24}/>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Save Button */}
                <button 
                    onClick={handleSaveJoke}
                    disabled={isAlreadySaved}
                    className={`w-full py-4 rounded-2xl font-bold shadow-lg transition-all flex items-center justify-center gap-2 ${
                        isAlreadySaved 
                        ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
                        : 'bg-amber-500 text-white hover:bg-amber-600 active:scale-95'
                    }`}
                >
                    {isAlreadySaved ? <><Check size={20}/> Saved</> : <><Save size={20}/> Save to Collection</>}
                </button>
            </div>
        );
    };
    
    const renderProfile = () => {
        // --- HIER WURDE DER "IF (!SESSION)" BLOCK ENTFERNT ---
        // Jetzt läuft der Code einfach weiter, auch für Gäste.

        // --- 1. DATEN BERECHNEN ---
        const safeVocab = vocabulary || [];
        
        // Gelernte Wörter (Box > 0)
        const learnedCount = safeVocab.filter(w => userProgress[w.rank]?.box > 0).length;

        // --- CEFR VOCABULARY LEVEL ---
        const getVocabCEFR = (count) => {
            if (count < 500) return { level: "A1", color: "bg-blue-500", next: 500, desc: "Beginner" };
            if (count < 1500) return { level: "A2", color: "bg-sky-500", next: 1500, desc: "Elementary" };
            if (count < 3000) return { level: "B1", color: "bg-emerald-500", next: 3000, desc: "Intermediate" };
            if (count < 5000) return { level: "B2", color: "bg-purple-500", next: 5000, desc: "Upper Intermediate" };
            return { level: "C1+", color: "bg-amber-500", next: 5000, desc: "Advanced" };
        };
        const vocabCEFR = getVocabCEFR(learnedCount);

        // --- CEFR GRAMMAR LEVEL ---
        const getGrammarCEFR = () => {
            let a1Done = 0, a1Total = 0;
            let a2Done = 0, a2Total = 0;
            let b1Done = 0, b1Total = 0;
            let b2Done = 0, b2Total = 0;

            for (const module of GRAMMAR_MODULES) {
                for (const topic of module.topics) {
                    // ALT: const passed = localStorage.getItem(`grammar_passed_${topic.id}`) === 'true';
                    // NEU: Wir nutzen den React State!
                    const passed = grammarProgress[topic.id] === true;
                    if (module.id === 'a1') { a1Total++; if (passed) a1Done++; }
                    if (module.id === 'a2') { a2Total++; if (passed) a2Done++; }
                    if (module.id === 'b1') { b1Total++; if (passed) b1Done++; }
                    if (module.id === 'b2') { b2Total++; if (passed) b2Done++; }
                }
            }

            if (a1Done < a1Total) return { level: "A1", color: "bg-blue-500", progress: a1Done, total: a1Total, desc: "Basics" };
            if (a2Done < a2Total) return { level: "A2", color: "bg-sky-500", progress: a2Done, total: a2Total, desc: "Elementary" };
            if (b1Done < b1Total) return { level: "B1", color: "bg-emerald-500", progress: b1Done, total: b1Total, desc: "Intermediate" };
            if (b2Done < b2Total) return { level: "B2", color: "bg-purple-500", progress: b2Done, total: b2Total, desc: "Upper Intermediate" };
            return { level: "C1+", color: "bg-amber-500", progress: b2Total, total: b2Total, desc: "Advanced" };
        };
        const grammarCEFR = getGrammarCEFR();

        // --- CREATIVE TITLE SYSTEM ---
        const vocabLevel = vocabCEFR.level;
        const grammarLevel = grammarCEFR.level;
        
        const levelToNum = (lvl) => ({ 'A1': 1, 'A2': 2, 'B1': 3, 'B2': 4, 'C1+': 5 }[lvl] || 0);
        const vocabNum = levelToNum(vocabLevel);
        const grammarNum = levelToNum(grammarLevel);
        
        const getCreativeTitle = () => {
            const diff = vocabNum - grammarNum;
            if (vocabNum <= 1 && grammarNum <= 1) {
                if (learnedCount === 0) return { title: "Fresh Start", emoji: "🌱", desc: "Your French journey begins here.", color: "from-slate-400 to-slate-600" };
                return { title: "Curious Tourist", emoji: "📷", desc: "Collecting first impressions.", color: "from-slate-400 to-slate-600" };
            }
            if (diff >= 2) { 
                if (vocabNum >= 4) return { title: "Yoda", emoji: "🧙‍♂️", desc: "Words you have, but grammar you must learn!", color: "from-green-500 to-emerald-700" };
                return { title: "Word Hoarder", emoji: "📚", desc: "Great vocabulary! Now focus on grammar.", color: "from-amber-400 to-orange-600" };
            }
            if (diff <= -2) { 
                return { title: "The Professor", emoji: "🎓", desc: "Great rules knowledge, but you need more words!", color: "from-indigo-500 to-purple-700" };
            }
            return { title: "Adventurer", emoji: "🧭", desc: "You're on your way! Keep going.", color: "from-blue-400 to-indigo-600" };
        };
        const creativeTitle = getCreativeTitle();

        // --- UI RETURN ---
        return (
            <div className="max-w-2xl mx-auto space-y-8 pt-2 pb-24">
                
                {/* HEADER MIT NICKNAME & LEVEL */}
                <div className="flex items-center justify-between px-1">
                    <div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Identity</div>
                        <div className="flex items-center gap-2">
                            {/* Zeige Nickname oder "Guest" */}
                            <h2 className="text-3xl font-bold text-slate-800">{nickname || "Guest"}</h2>
                            
                            {!session && (
                                <span className="bg-slate-200 text-slate-500 text-[10px] px-2 py-1 rounded-full font-bold uppercase tracking-wide">
                                    Guest
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-xs font-bold">
                        Level {Math.floor(learnedCount / 50) + 1}
                    </div>
                </div>

                {/* 1. IDENTITY CARD */}
                <div className={`w-full p-6 rounded-[2rem] shadow-xl text-white bg-gradient-to-br ${creativeTitle.color} relative overflow-hidden group`}>
                    <div className="relative z-10 flex items-center gap-5">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 text-3xl shadow-inner">
                            {creativeTitle.emoji}
                        </div>
                        <div>
                            <div className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Current Title</div>
                            <h3 className="text-2xl font-bold">{creativeTitle.title}</h3>
                        </div>
                    </div>
                    <p className="mt-4 text-white/90 text-sm leading-relaxed bg-black/10 rounded-xl p-3 backdrop-blur-sm">
                        {creativeTitle.desc}
                    </p>
                    <User size={120} className="absolute -right-6 -bottom-8 text-white opacity-10 rotate-12"/>
                </div>

                {/* --- GAST WARNUNG / SIGN UP CALL-TO-ACTION (Nur wenn NICHT eingeloggt) --- */}
                {!session && (
                    <div className="bg-amber-50 border border-amber-200 p-5 rounded-[2rem] relative overflow-hidden">
                        <div className="flex items-start gap-4 relative z-10">
                            <div className="bg-amber-100 text-amber-600 p-3 rounded-2xl shrink-0">
                                <Shield size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-amber-900 text-lg">Unsaved Progress</h3>
                                <p className="text-amber-700/80 text-sm mb-4 leading-relaxed">
                                    You are playing as a Guest. Create an account to backup your data.
                                </p>
                                <button 
                                    onClick={() => setShowAuthModal(true)} 
                                    className="bg-amber-600 text-white px-6 py-3 rounded-xl font-bold text-sm shadow-lg shadow-amber-200 hover:bg-amber-700 transition-all active:scale-95"
                                >
                                    Create Account / Login
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* 2. CURRENTLY LEARNING (STATS) */}
                <div className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-2 mb-4">
                        <GraduationCap size={20} className="text-indigo-600" />
                        <h3 className="font-bold text-slate-800">Currently Learning</h3>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                        {/* Vocabulary Level */}
                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Vocabulary</span>
                                <span className={`text-xs font-bold text-white px-2 py-0.5 rounded-lg ${vocabCEFR.color}`}>
                                    {vocabCEFR.level}
                                </span>
                            </div>
                            <div className="text-lg font-bold text-slate-800 mb-1">{vocabCEFR.desc}</div>
                            <div className="text-xs text-slate-500">
                                {learnedCount} / {vocabCEFR.next} words
                            </div>
                            <div className="mt-2 bg-slate-200 h-1.5 rounded-full overflow-hidden">
                                <div className={`h-full rounded-full ${vocabCEFR.color}`} style={{ width: `${Math.min(100, (learnedCount / vocabCEFR.next) * 100)}%` }}></div>
                            </div>
                        </div>

                        {/* Grammar Level */}
                        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Grammar</span>
                                <span className={`text-xs font-bold text-white px-2 py-0.5 rounded-lg ${grammarCEFR.color}`}>
                                    {grammarCEFR.level}
                                </span>
                            </div>
                            <div className="text-lg font-bold text-slate-800 mb-1">{grammarCEFR.desc}</div>
                            <div className="text-xs text-slate-500">
                                {grammarCEFR.progress} / {grammarCEFR.total} lessons
                            </div>
                            <div className="mt-2 bg-slate-200 h-1.5 rounded-full overflow-hidden">
                                <div className={`h-full rounded-full ${grammarCEFR.color}`} style={{ width: `${Math.min(100, (grammarCEFR.progress / grammarCEFR.total) * 100)}%` }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. MENU BUTTONS */}
                <div>
                    <h3 className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-3 px-1">Menu</h3>
                    <div className="space-y-3">
                        {/* Library Button */}
                        <button onClick={() => setView('library')} className="w-full bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between group active:scale-[0.98] transition-all">
                            <div className="flex items-center gap-4">
                                <div className="bg-indigo-50 text-indigo-600 w-10 h-10 rounded-xl flex items-center justify-center"><BookOpen size={20}/></div>
                                <div className="text-left">
                                    <div className="font-bold text-slate-800">Word Library</div>
                                    <div className="text-xs text-slate-400">View & Search Collection</div>
                                </div>
                            </div>
                            <ChevronRight size={20} className="text-slate-300 group-hover:text-indigo-400"/>
                        </button>

                        {/* Collections Button */}
                        <button onClick={() => setView('collections')} className="w-full bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between group active:scale-[0.98] transition-all">
                            <div className="flex items-center gap-4">
                                <div className="bg-amber-50 text-amber-600 w-10 h-10 rounded-xl flex items-center justify-center"><Box size={20}/></div>
                                <div className="text-left">
                                    <div className="font-bold text-slate-800">Collections</div>
                                    <div className="text-xs text-slate-400">Saved Jokes & More</div>
                                </div>
                            </div>
                            <ChevronRight size={20} className="text-slate-300 group-hover:text-amber-400"/>
                        </button>

                        {/* Settings Button */}
                        <button onClick={() => setView('data-mgmt')} className="w-full bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between group active:scale-[0.98] transition-all">
                            <div className="flex items-center gap-4">
                                <div className="bg-slate-100 text-slate-500 w-10 h-10 rounded-xl flex items-center justify-center"><Settings size={20}/></div>
                                <div className="text-left">
                                    <div className="font-bold text-slate-800">Settings</div>
                                    <div className="text-xs text-slate-400">Account, Data & Audio</div>
                                </div>
                            </div>
                            <ChevronRight size={20} className="text-slate-300"/>
                        </button>
                    </div>
                </div>
            </div>
        );
    };
    
    const renderCollections = () => {
        return (
            <div className="w-full pt-6 pb-24 px-1">
                {/* Scroll to Top Button */}
                {showScrollTop && (
                    <button 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="fixed bottom-24 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-all z-40"
                    >
                        <ChevronRight size={24} className="-rotate-90"/>
                    </button>
                )}
                
                {/* Header */}
                <div className="flex items-center gap-3 mb-6 px-1">
                    <button onClick={() => setView('profile')} className="p-2 -ml-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500">
                        <ArrowLeft size={24} />
                    </button>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800">Collections</h2>
                        <p className="text-slate-400 text-sm">Your saved content</p>
                    </div>
                </div>

                {/* Vertical Tab Buttons */}
                <div className="space-y-3 mb-6">
                    <button 
                        onClick={() => setCollectionsTab('jokes')}
                        className={`w-full p-4 rounded-2xl border transition-all flex items-center justify-between ${
                            collectionsTab === 'jokes'
                            ? 'bg-amber-50 border-amber-200 shadow-sm'
                            : 'bg-white border-slate-100 hover:bg-slate-50'
                        }`}
                    >
                        <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-xl ${
                                collectionsTab === 'jokes' 
                                ? 'bg-amber-100 text-amber-600' 
                                : 'bg-slate-100 text-slate-400'
                            }`}>
                                <Smile size={20}/>
                            </div>
                            <div className="text-left">
                                <div className={`font-bold ${
                                    collectionsTab === 'jokes' ? 'text-amber-900' : 'text-slate-700'
                                }`}>Saved Jokes</div>
                                <div className="text-xs text-slate-400">{savedJokes.length} items</div>
                            </div>
                        </div>
                        {collectionsTab === 'jokes' && <ChevronRight size={20} className="text-amber-400"/>}
                    </button>

                    <button 
                        onClick={() => setCollectionsTab('memes')}
                        className={`w-full p-4 rounded-2xl border transition-all flex items-center justify-between ${
                            collectionsTab === 'memes'
                            ? 'bg-purple-50 border-purple-200 shadow-sm'
                            : 'bg-white border-slate-100 hover:bg-slate-50'
                        }`}
                    >
                        <div className="flex items-center gap-3">
                            <div className={`p-2 rounded-xl ${
                                collectionsTab === 'memes' 
                                ? 'bg-purple-100 text-purple-600' 
                                : 'bg-slate-100 text-slate-400'
                            }`}>
                                <Image size={20}/>
                            </div>
                            <div className="text-left">
                                <div className={`font-bold ${
                                    collectionsTab === 'memes' ? 'text-purple-900' : 'text-slate-700'
                                }`}>Saved Memes</div>
                                <div className="text-xs text-slate-400">{savedMemes.length} items</div>
                            </div>
                        </div>
                        {collectionsTab === 'memes' && <ChevronRight size={20} className="text-purple-400"/>}
                    </button>
                </div>

                {/* Content */}
                {collectionsTab === 'jokes' ? (
                    // Jokes View
                    savedJokes.length > 0 ? (
                        <div className="space-y-3">
                            {savedJokes.map((joke, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => { setViewingJoke(joke); setView('joke-detail'); }}
                                    className="w-full bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:bg-amber-50 transition-all text-left active:scale-[0.98]"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="bg-amber-100 text-amber-600 p-2 rounded-xl shrink-0">
                                            <Smile size={20}/>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-serif italic text-slate-800 line-clamp-2 mb-1">"{joke.q}"</p>
                                            <p className="text-xs text-slate-400">Tap to view full joke</p>
                                        </div>
                                        <ChevronRight size={20} className="text-slate-300 shrink-0"/>
                                    </div>
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center p-12 bg-white rounded-3xl border border-dashed border-slate-200">
                            <Smile size={48} className="mx-auto text-slate-300 mb-4"/>
                            <h3 className="font-bold text-slate-600 mb-2">No Jokes Saved Yet</h3>
                            <p className="text-slate-400 text-sm">Check out the daily joke on your home screen!</p>
                        </div>
                    )
                ) : (
                    // Memes View
                    savedMemes.length > 0 ? (
                        <div className="space-y-3">
                            {savedMemes.map((meme, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm"
                                >
                                    <h3 className="font-bold text-slate-800 mb-3">{meme.title}</h3>
                                    <div className="rounded-xl overflow-hidden bg-slate-100 mb-3">
                                        <img src={meme.url} alt="Meme" className="w-full h-auto object-contain max-h-96"/>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-full">⬆️ {meme.ups}</span>
                                        <button 
                                            onClick={() => {
                                                const updated = savedMemes.filter((_, i) => i !== idx);
                                                setSavedMemes(updated);
                                                localStorage.setItem('vocabApp_savedMemes', JSON.stringify(updated));
                                            }}
                                            className="text-red-400 hover:text-red-600 p-2"
                                        >
                                            <Trash2 size={18}/>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center p-12 bg-white rounded-3xl border border-dashed border-slate-200">
                            <Image size={48} className="mx-auto text-slate-300 mb-4"/>
                            <h3 className="font-bold text-slate-600 mb-2">No Memes Saved Yet</h3>
                            <p className="text-slate-400 text-sm">Visit the Meme Gallery in Explore to save some!</p>
                        </div>
                    )
                )}
            </div>
        );
    };
    
    // Umbenannt von renderLearnedSection zu renderLibrary für Klarheit
    const renderLibrary = () => {
        // HIER KEIN useEffect MEHR! (Der Scroll-Listener ist schon in App definiert)
        
        // Funktion zum Hochscrollen
        const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };

        // Funktion zum Ändern der Sortierung
        const toggleSort = (type) => {
            if (sortType === type) {
                setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
            } else {
                setSortType(type);
                setSortDir('asc');
            }
        };

        // --- DATEN VERARBEITUNG ---
        const safeVocab = vocabulary || [];
        const learnedList = safeVocab.filter(w => userProgress[w.rank]?.box > 0);
        
        const filteredList = learnedList.filter(w => 
            w.french.toLowerCase().includes(librarySearch.toLowerCase()) || 
            (w.english && w.english.toLowerCase().includes(librarySearch.toLowerCase()))
        ).sort((a, b) => {
            let comparison = 0;
            if (sortType === 'rank') {
                comparison = a.rank - b.rank;
            } else {
                comparison = a.french.localeCompare(b.french);
            }
            return sortDir === 'asc' ? comparison : comparison * -1;
        });

        return (
            <div className="w-full pt-6 pb-24 px-1 relative min-h-screen">
                
                {/* Header mit Zurück-Button */}
                <div className="flex items-center gap-3 mb-6 px-1">
                    <button onClick={() => setView('profile')} className="p-2 -ml-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500">
                        <ArrowLeft size={24} />
                    </button>
                    <div>
                        <h2 className="text-2xl font-bold text-slate-800">Collection</h2>
                        <p className="text-slate-400 text-sm">{learnedList.length} words collected</p>
                    </div>
                </div>

                {/* SEARCH & SORT AREA (Sticky) */}
                <div className="sticky top-4 z-30 space-y-3 mb-6">
                    <div className="relative shadow-sm">
                        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input type="text" value={librarySearch} onChange={(e) => setLibrarySearch(e.target.value)} placeholder="Search collection..." className="w-full bg-white border border-slate-200 rounded-2xl pl-12 pr-4 py-4 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
                        {librarySearch && <button onClick={() => setLibrarySearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"><X size={14}/></button>}
                    </div>

                    {/* Sortier Buttons */}
                    <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
                        <button onClick={() => toggleSort('rank')} className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all border ${sortType === 'rank' ? 'bg-indigo-600 text-white border-indigo-600 shadow-md' : 'bg-white text-slate-500 border-slate-200'}`}>
                            <Hash size={14} className={sortType === 'rank' ? 'text-indigo-200' : 'text-slate-400'} /> Rank {sortType === 'rank' && (sortDir === 'asc' ? <ArrowUp size={14}/> : <ArrowDown size={14}/>)}
                        </button>
                        <button onClick={() => toggleSort('alpha')} className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all border ${sortType === 'alpha' ? 'bg-indigo-600 text-white border-indigo-600 shadow-md' : 'bg-white text-slate-500 border-slate-200'}`}>
                            <span>A-Z</span> {sortType === 'alpha' && (sortDir === 'asc' ? <ArrowDown size={14}/> : <ArrowUp size={14}/>)}
                        </button>
                    </div>
                </div>

                {/* LISTE */}
                {learnedList.length > 0 ? (
                    <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden divide-y divide-slate-100 relative z-10">
                        {filteredList.slice(0, 100).map(word => (
                            <button key={word.rank} onClick={() => { setSelectedWord(word); setIsFlipped(false); setAiExamples(null); setView('word-detail'); }} className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors text-left">
                                <div className="flex items-center gap-4">
                                    <span className="text-xs font-mono text-slate-300 w-8">#{word.rank}</span>
                                    <div><div className="font-bold text-slate-800">{word.french}</div><div className="text-xs text-slate-500">{word.english || word.german}</div></div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-lg">Box {userProgress[word.rank]?.box || '?'}</span>
                                    <ChevronRight size={16} className="text-slate-200" />
                                </div>
                            </button>
                        ))}
                        {filteredList.length === 0 && <div className="p-8 text-center text-slate-400 text-sm">No matches found.</div>}
                        {filteredList.length > 100 && <div className="p-3 text-center text-xs text-slate-400 bg-slate-50">...and {filteredList.length - 100} more</div>}
                    </div>
                ) : (
                    <div className="text-center p-10 bg-white rounded-3xl border border-dashed border-slate-200 text-slate-400"><p>Your collection is empty.</p></div>
                )}

                {/* BACK TO TOP BUTTON */}
                {showScrollTop && (
                    <button onClick={scrollToTop} className="fixed bottom-24 right-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg shadow-indigo-200 hover:bg-indigo-700 active:scale-90 transition-all z-50">
                        <ArrowUp size={24} />
                    </button>
                )}
            </div>
        );
    };


    // Helper: Prüfen, ob wir gerade lernen (dann Menu ausblenden)
    const isSessionActive = ['smart-session', 'test-session', 'results'].includes(view);

    // Helper: Content basierend auf dem Tab rendern (wenn wir nicht in einer Session sind)
    const renderTabContent = () => {
        switch (view) {
            // ... Home, Explore, Skills Cases wie vorher ...
            case 'home': case 'smart-config': case 'test-config': return renderHome();
            case 'explore': 
                return renderExplore();
            case 'reader':
                if (readerMode === 'select') {
                    // Falls du im Auswahl-Modus bist, zeig die Library
                    return renderExplore(); 
                }
                if (readerMode === 'reading' && currentStory) {
                    return (
                        <BookReader 
                            currentStory={currentStory}
                            pageIndex={pageIndex}
                            setPageIndex={setPageIndex}
                            saveProgress={saveProgress}
                            setView={setView}
                            setReaderMode={setReaderMode}
                            speak={speak}
                            stopAudio={stopAudio}
                            vocabulary={vocabulary}
                            clickedWord={clickedWord}
                            setClickedWord={setClickedWord}
                            loadingTranslation={loadingTranslation}
                            setLoadingTranslation={setLoadingTranslation}
                        />
                    );
                }
                if (readerMode === 'finish') {
                     return (
                        <div className="h-screen flex flex-col items-center justify-center text-center px-6 pb-20">
                            <div className="text-6xl mb-6">🏆</div>
                            <h2 className="text-3xl font-bold text-slate-800 mb-2">Chapter Complete!</h2>
                            <p className="text-slate-500 mb-8">You finished "{currentStory?.title}".</p>
                            <button onClick={() => { setView('explore'); setSelectedBook(null); }} className="bg-indigo-600 text-white px-8 py-4 rounded-2xl font-bold shadow-lg w-full max-w-sm">Back to Library</button>
                        </div>
                    );
                }
                return null;
            case 'culture': 
                return renderExplore();
            // TAB 3: SKILLS
            case 'skills':
                return renderSkills(); // Zeigt das Hauptmenü
            case 'daily-writer':
                return renderDailyWriterEditor();
            
            case 'translator': // <--- HIER WAR DER FEHLER
                return renderTranslator(); // Muss auf die eigene Translator-Ansicht zeigen
            
            case 'grammar':      
                return renderSkills();
            case 'update-password':
                return <UpdatePasswordScreen onComplete={() => setView('home')} />;    

            // --- PROFILE AREA ---
            case 'profile':
                return renderProfile(); // Das neue Dashboard
            
            case 'library': // <--- WIRD JETZT HIER GEHANDELT
            case 'learned-section':
                return renderLibrary(); 
            
            case 'collections': // <--- NEU: Collections mit Jokes
                return renderCollections();
            
            case 'joke-detail': // <--- NEU: Joke Detail View
                return renderJokeDetail();
            
            case 'data-mgmt':
                return renderDataMgmt();
            
            case 'word-detail':
                return renderWordDetail();
            
            case 'topic-hub': // <--- NEU
                return renderTopicHub();
            case 'chat': // <--- Das müssen wir im Skills-Tab verlinken
                return renderChat();    
            case 'grammar-detail': // <--- NEU
                return <GrammarDetail topicId={selectedGrammarId} onBack={() => setView('skills')} />;    
            
            default: return renderHome();
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col items-center">
            {/* Home Header - Nur auf Home Seite sticky */}
            {view === 'home' && !isSessionActive && renderHomeHeader()}
            
            {/* Main Content Area */}
            {/* pb-24 sorgt dafür, dass Inhalt nicht hinter der Leiste verschwindet */}
            <div className={`w-full max-w-lg md:max-w-2xl px-5 py-6 md:p-8 ${!isSessionActive ? 'pb-28' : ''}`}>
                
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
            {/* --- ONBOARDING WIZARD --- */}
            {showWizard && (
                <OnboardingWizard 
                    session={session} // <--- WICHTIG: Session übergeben!
                    onComplete={(name, level) => {
                        setNickname(name);
                        setShowWizard(false);
                        // Optional: Wenn ein Level gewählt wurde, könnte man hier den userProgress anpassen
                        // Aber das passiert schon durch den Sync beim Login
                    }} 
                />
            )}
            {/* --- DELETE ACCOUNT MODAL --- */}
            {showDeleteModal && (
                <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
                    <div className="bg-white w-full max-w-sm rounded-3xl p-6 shadow-2xl scale-100">
                        <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                            <AlertCircle size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 text-center mb-2">Delete Everything?</h3>
                        <p className="text-slate-500 text-center text-sm mb-6">
                            This action cannot be undone. All your progress, vocabulary, and stats will be lost forever.
                        </p>
                        
                        <div className="bg-slate-50 p-4 rounded-xl mb-6">
                            <label className="block text-xs font-bold text-slate-400 uppercase mb-2">
                                Type <span className="text-slate-800 select-none">DELETE</span> to confirm
                            </label>
                            <input 
                                type="text" 
                                value={deleteInput}
                                onChange={(e) => setDeleteInput(e.target.value)}
                                placeholder="DELETE"
                                className="w-full bg-white border border-slate-200 rounded-lg p-3 font-mono text-center font-bold text-red-600 outline-none focus:border-red-500 transition-colors"
                            />
                        </div>

                        <div className="flex gap-3">
                            <button 
                                onClick={() => {
                                    setShowDeleteModal(false);
                                    setDeleteInput(""); // Input zurücksetzen beim Schließen
                                }}
                                className="flex-1 py-3 bg-slate-100 text-slate-700 rounded-xl font-bold text-sm hover:bg-slate-200 transition-colors"
                            >
                                Cancel
                            </button>
                            <button 
                                disabled={deleteInput !== "DELETE"}
                                onClick={async () => {
                                    // 1. Prüfen ob User eingeloggt ist
                                    if (session) {
                                        // LOGIK FÜR EINGELOGGTE USER (Cloud)
                                        const { error } = await supabase.rpc('delete_user');
                                        if (error) {
                                            alert("Cloud deletion failed: " + error.message);
                                            return; // Abbrechen, nichts lokal löschen
                                        }
                                        await supabase.auth.signOut();
                                    }

                                    // 2. LOGIK FÜR ALLE (Lokal aufräumen)
                                    // Hier wird alles platt gemacht: Fortschritt, Nickname, Onboarding-Status
                                    localStorage.clear(); 
                                    
                                    // State Reset (für sauberen Übergang)
                                    setSession(null);
                                    setShowDeleteModal(false);
                                    
                                    // App neu laden -> Da localStorage leer ist, startet der OnboardingWizard
                                    window.location.reload(); 
                                }}
                                className="flex-1 py-3 bg-red-600 text-white rounded-xl font-bold text-sm hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-red-200"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {/* --- AUTH MODAL FOR GUESTS --- */}
            {showAuthModal && (
                <div className="fixed inset-0 z-[60] bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
                    <div className="bg-white w-full max-w-sm rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                        {/* Close Button */}
                        <button 
                            onClick={() => setShowAuthModal(false)}
                            className="absolute top-4 right-4 p-2 bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 z-10"
                        >
                            <X size={20}/>
                        </button>

                        {/* Wir nutzen wieder AuthScreen, aber sagen ihm, dass er "embedded" ist */}
                        <div className="py-6">
                            <AuthScreen 
                                isEmbedded={true} 
                                onLoginSuccess={() => {
                                    setShowAuthModal(false);
                                    // HIER SPÄTER: Sync Logic aufrufen!
                                    alert("Account linked successfully!");
                                }} 
                            />
                        </div>
                    </div>
                </div>
            )}
            {/* --- SYNC CONFLICT MODAL --- */}
            {syncConflict && (
                <div className="fixed inset-0 z-[80] bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in zoom-in duration-200">
                    <div className="bg-white w-full max-w-sm rounded-3xl p-6 shadow-2xl">
                        <div className="text-center mb-6">
                            <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-amber-600 text-3xl mb-4">⇄</div>
                            <h3 className="text-xl font-bold text-slate-800">Sync Conflict</h3>
                            <p className="text-slate-500 text-sm mt-2">
                                We found different data on this device and in your account. Which one should we keep?
                            </p>
                        </div>

                        <div className="space-y-3">
                            {/* Option 1: Keep Cloud (Download) */}
                            <button 
                                onClick={() => {
                                    setUserProgress(syncConflict.cloud); // Lokal überschreiben
                                    localStorage.setItem('vocabApp_progress', JSON.stringify(syncConflict.cloud));
                                    setSyncConflict(null);
                                    window.location.reload(); // Reload für sauberen Start
                                }}
                                className="w-full bg-indigo-50 border-2 border-indigo-100 p-4 rounded-2xl flex items-center justify-between hover:bg-indigo-100 transition-all group text-left"
                            >
                                <div>
                                    <div className="font-bold text-indigo-900">Keep Cloud Save</div>
                                    <div className="text-xs text-indigo-500">Overwrite this device</div>
                                </div>
                                <div className="bg-white p-2 rounded-full text-indigo-600 font-bold text-xs shadow-sm">
                                    {Object.keys(syncConflict.cloud).length} words
                                </div>
                            </button>

                            {/* Option 2: Keep Local (Upload) */}
                            <button 
                                onClick={async () => {
                                    await overwriteCloud(syncConflict.local); // Cloud überschreiben
                                    setSyncConflict(null);
                                    alert("Cloud updated with local data.");
                                }}
                                className="w-full bg-white border-2 border-slate-100 p-4 rounded-2xl flex items-center justify-between hover:border-slate-300 transition-all group text-left"
                            >
                                <div>
                                    <div className="font-bold text-slate-700">Keep Device Save</div>
                                    <div className="text-xs text-slate-400">Overwrite cloud data</div>
                                </div>
                                <div className="bg-slate-100 p-2 rounded-full text-slate-600 font-bold text-xs">
                                    {Object.keys(syncConflict.local).length} words
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);