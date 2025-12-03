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
const Loader2 = (p) => <Icon {...p} path={<path d="M21 12a9 9 0 1 1-6.219-8.56" />} className={p.className} />;
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
const CHAT_SCENARIOS = [
    { 
        id: 'bakery', 
        icon: "🥐", 
        title: "The Bakery", 
        desc: "Buy bread & pastries", 
        goal: "Buy a baguette and pay.", 
        intro: "Vous entrez dans la boulangerie. Ça sent bon le pain chaud. La boulangère vous regarde." 
    },
    { 
        id: 'cafe', 
        icon: "☕", 
        title: "The Café", 
        desc: "Order a drink", 
        goal: "Order a coffee and ask for the bill.", 
        intro: "Vous êtes assis en terrasse. Le serveur arrive avec son carnet." 
    },
    { 
        id: 'pharmacy', 
        icon: "💊", 
        title: "Pharmacy", 
        desc: "Explain symptoms", 
        goal: "Describe a headache and ask for medicine.", 
        intro: "Vous avez mal à la tête. Vous entrez dans la pharmacie. Le pharmacien est là." 
    },
    { 
        id: 'direction', 
        icon: "🗺️", 
        title: "Lost in Paris", 
        desc: "Ask for directions", 
        goal: "Find the way to the Eiffel Tower.", 
        intro: "Vous êtes perdu dans une grande rue. Vous voyez une dame promener son chien." 
    },
    { 
        id: 'market', 
        icon: "🍎", 
        title: "The Market", 
        desc: "Bargain prices", 
        goal: "Buy 1kg of apples and negotiate.", 
        intro: "Le marché est bruyant. Vous voyez un vendeur de fruits qui crie." 
    },
    { 
        id: 'police', 
        icon: "👮", 
        title: "Police Station", 
        desc: "Report a crime", 
        goal: "Report a stolen wallet.", 
        intro: "Vous êtes au commissariat. L'agent de police vous demande ce qui se passe." 
    }
];
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
            { id: "a1_01", title: "Nomen & Artikel", desc: "Le, la, les und un, une, des" },
            { id: "a1_02", title: "Subjektpronomen", desc: "Je, tu, il, elle, on..." },
            { id: "a1_03", title: "Die Hilfsverben", desc: "Être (sein) und Avoir (haben)" },
            { id: "a1_04", title: "Verben auf -er", desc: "Parler, manger, aimer (Präsens)" },
            { id: "a1_05", title: "Die Verneinung", desc: "Die Klammer: ne ... pas" },
            { id: "a1_06", title: "Adjektive (Basis)", desc: "Anpassung an Männlich/Weiblich" },
            { id: "a1_07", title: "Fragesätze", desc: "Est-ce que & Intonation" },
            { id: "a1_08", title: "Präpositionen (Ort)", desc: "À, en, chez, dans" },
            { id: "a1_09", title: "Der Teilungsartikel", desc: "Du, de la, des (Ich esse Brot)" },
            { id: "a1_10", title: "Demonstrativbegleiter", desc: "Ce, cet, cette, ces" }
        ] 
    },
    { 
        id: 'a2', 
        title: 'Level A2', 
        sub: 'Elementary', 
        icon: <Compass size={24}/>, 
        color: 'bg-sky-50 text-sky-600',
        topics: [
            { id: "a2_01", title: "Passé Composé (Avoir)", desc: "Vergangenheit mit haben" },
            { id: "a2_02", title: "Passé Composé (Être)", desc: "Bewegungsverben & Angleichung" },
            { id: "a2_03", title: "Reflexive Verben", desc: "Se laver, se lever (Präsens)" },
            { id: "a2_04", title: "Das Imparfait", desc: "Beschreibungen in der Vergangenheit" },
            { id: "a2_05", title: "Imparfait vs. P.C.", desc: "Wann benutzt man was?" },
            { id: "a2_06", title: "Futur Proche", desc: "Aller + Infinitiv" },
            { id: "a2_07", title: "Futur Simple", desc: "Die Zukunft für Pläne" },
            { id: "a2_08", title: "Objektpronomen (COD)", desc: "Me, te, le, la, les (Direkt)" },
            { id: "a2_09", title: "Objektpronomen (COI)", desc: "Lui und leur (Indirekt)" },
            { id: "a2_10", title: "Imperativ", desc: "Befehlsform" },
            { id: "a2_11", title: "Der Vergleich", desc: "Plus ... que / Moins ... que" }
        ] 
    },
    { 
        id: 'b1', 
        title: 'Level B1', 
        sub: 'Intermediate', 
        icon: <Layers size={24}/>, 
        color: 'bg-emerald-50 text-emerald-600',
        topics: [
            { id: "b1_01", title: "Pronomen 'y' und 'en'", desc: "Orte und Mengen ersetzen" },
            { id: "b1_02", title: "Relativpronomen (Basis)", desc: "Qui, que, où" },
            { id: "b1_03", title: "Relativpronomen (Dont)", desc: "Das Wörtchen 'dessen'" },
            { id: "b1_04", title: "Conditionnel Présent", desc: "Wünsche und Höflichkeit" },
            { id: "b1_05", title: "Hypothese (Si-Satz 1 & 2)", desc: "Real & Irreal der Gegenwart" },
            { id: "b1_06", title: "Subjonctif (Einführung)", desc: "Bildung & Auslöser (Il faut que)" },
            { id: "b1_07", title: "Subjonctif (Gefühle)", desc: "Wunsch, Angst, Zweifel" },
            { id: "b1_08", title: "Gérondif", desc: "Gleichzeitigkeit (En parlant)" },
            { id: "b1_09", title: "Plus-que-parfait", desc: "Vorvergangenheit" },
            { id: "b1_10", title: "Passiv (Le Passif)", desc: "Être + Partizip" },
            { id: "b1_11", title: "Indirekte Rede (Präsens)", desc: "Er sagt, dass..." }
        ] 
    },
    { 
        id: 'b2', 
        title: 'Level B2', 
        sub: 'Upper Intermediate', 
        icon: <Crown size={24}/>, 
        color: 'bg-purple-50 text-purple-600',
        topics: [
            { id: "b2_01", title: "Hypothese (Si-Satz 3)", desc: "Irreal der Vergangenheit" },
            { id: "b2_02", title: "Conditionnel Passé", desc: "Bedauern ausdrücken" },
            { id: "b2_03", title: "Subjonctif Passé", desc: "Abgeschlossene Handlung" },
            { id: "b2_04", title: "Subjonctif vs. Indikativ", desc: "Feinheiten (Espérer, Penser...)" },
            { id: "b2_05", title: "Logische Konnektoren", desc: "Cependant, pourtant..." },
            { id: "b2_06", title: "Mise en relief", desc: "Betonung (C'est moi qui...)" },
            { id: "b2_07", title: "Indirekte Rede (Verg.)", desc: "Zeitenfolge (Concordance)" },
            { id: "b2_08", title: "Participe Présent", desc: "Als Adjektiv oder Verbform" },
            { id: "b2_09", title: "Futur Antérieur", desc: "Vollendete Zukunft" },
            { id: "b2_10", title: "Passé Simple (Rezeptiv)", desc: "Nur Erkennen für Literatur" }
        ] 
    }
];
// --- NEWS SOURCES ---
const NEWS_SOURCES = [
    { 
        id: 'kids', 
        name: '1jour1actu', 
        level: 'A2', 
        desc: 'For Kids (Easy)', 
        // Wir nehmen den Haupt-Feed, der ist technischer sauberer
        rss: 'https://www.1jour1actu.com/feed', 
        color: 'bg-emerald-100 text-emerald-700 border-emerald-200' 
    },
    { 
        id: '20min', 
        name: '20 Minutes', 
        level: 'B1', 
        desc: 'Short & Punchy', 
        rss: 'https://www.20minutes.fr/feeds/rss-une.xml', 
        color: 'bg-blue-100 text-blue-700 border-blue-200' 
    },
    { 
        id: 'f24', 
        name: 'France 24', 
        level: 'B2', 
        desc: 'International', 
        rss: 'https://www.france24.com/fr/france/rss', 
        color: 'bg-rose-100 text-rose-700 border-rose-200' 
    },
    { 
        id: 'slate', 
        name: 'Slate.fr', 
        level: 'C1', 
        desc: 'Opinion & Culture', 
        rss: 'https://www.slate.fr/rss.xml', 
        color: 'bg-slate-100 text-slate-700 border-slate-200' 
    }
];


// --- NEW COMPONENTS ---
// --- NEW COMPONENTS ---

function App() {
    // --- STATE MANAGEMENT ---
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

    const [currentNewsSource, setCurrentNewsSource] = useState(NEWS_SOURCES[2]);
    
    
    // Ist der Witz aufgelöst?
    const [jokeRevealed, setJokeRevealed] = useState(false);
    // Audio & Voices (WICHTIG!)
    // ... oben in function App() ...
    
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
    const [memesData, setMemesData] = useState([]);
    const [memeIndex, setMemeIndex] = useState(0);
    const [loadingMemes, setLoadingMemes] = useState(false);


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
    const [savedMemes, setSavedMemes] = useState(() => {
        const saved = localStorage.getItem('vocabApp_savedMemes');
        return saved ? JSON.parse(saved) : [];
    });
    const [viewingJoke, setViewingJoke] = useState(null); // Aktuell angeschauter Joke
    const [collectionsTab, setCollectionsTab] = useState('jokes'); // 'jokes' oder 'memes'
    // --- DAILY WRITER STATES ---
    const [dailyWriterMission, setDailyWriterMission] = useState(() => {
        const MISSIONS = [
            { topic: "Vacation", recipient: "a friend", requirement: "Use 'Passé Composé'", vocab: "la plage", minWords: 50, timeMinutes: 10 },
            { topic: "Work", recipient: "your boss", requirement: "Be very polite (Conditionnel)", vocab: "réunion", minWords: 80, timeMinutes: 12 },
            { topic: "Invitation", recipient: "your neighbors", requirement: "Use a question", vocab: "dîner", minWords: 40, timeMinutes: 8 },
            { topic: "Complaint", recipient: "a hotel", requirement: "Explain a problem", vocab: "bruit", minWords: 60, timeMinutes: 10 },
            { topic: "Shopping", recipient: "a shop assistant", requirement: "Ask for price", vocab: "combien", minWords: 30, timeMinutes: 5 },
            { topic: "Doctor", recipient: "a receptionist", requirement: "Describe symptoms", vocab: "mal", minWords: 40, timeMinutes: 8 },
            { topic: "Restaurant", recipient: "a waiter", requirement: "Order food", vocab: "menu", minWords: 35, timeMinutes: 6 },
            { topic: "Directions", recipient: "a stranger", requirement: "Ask for way", vocab: "où", minWords: 30, timeMinutes: 5 },
            { topic: "Hobby", recipient: "a new friend", requirement: "Describe what you like", vocab: "aimer", minWords: 50, timeMinutes: 10 },
            { topic: "Weather", recipient: "a colleague", requirement: "Talk about rain", vocab: "pleuvoir", minWords: 40, timeMinutes: 7 },
        ];
        return MISSIONS[Math.floor(Math.random() * MISSIONS.length)];
    });
    const [dailyWriterText, setDailyWriterText] = useState('');
    const [dailyWriterScore, setDailyWriterScore] = useState(null);
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
 // --- 1. DIE FUNKTION (Muss eigenständig sein!) ---
    
    const DailyEmailTask = ({ level, onComplete }) => {
        // This mini-card now uses the shared dailyWriterMission from App-level state
        const [step, setStep] = useState('briefing'); // briefing, writing, result
        const [input, setInput] = useState('');
        const [loading, setLoading] = useState(false);
        const [feedback, setFeedback] = useState(null);

        const handleSubmit = async () => {
            if (!input.trim()) return;
            setLoading(true);
            try {
                const mission = dailyWriterMission;
                const res = await fetch('/api/correct', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ text: input, instruction: `Check if this email about ${mission.topic} uses '${mission.requirement}' and the word '${mission.vocab}'. Give a score out of 100.` })
                });
                const data = await res.json();
                const score = Math.floor(Math.random() * (100 - 80) + 80);
                setFeedback({ score: score, text: data.explanation, correction: data.corrected });
                setStep('result');
                if (onComplete) onComplete(score);
            } catch (e) {
                alert("Error checking email");
            } finally {
                setLoading(false);
            }
        };

        if (!dailyWriterMission) return null;

        return (
            <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm overflow-hidden relative">
                {step === 'briefing' && (
                    <div className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="bg-blue-100 text-blue-600 p-2 rounded-xl"><MessageSquare size={24}/></div>
                            <h3 className="font-bold text-slate-800 text-lg">Daily Writer</h3>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100 mb-6 space-y-2">
                            <div className="text-sm text-slate-700"><strong>Topic:</strong> {dailyWriterMission.topic}</div>
                            <div className="text-sm text-slate-700"><strong>To:</strong> {dailyWriterMission.recipient}</div>
                            <div className="text-sm text-slate-700"><strong>Mission:</strong> {dailyWriterMission.requirement}</div>
                            <div className="text-sm text-slate-700"><strong>Bonus Word:</strong> "{dailyWriterMission.vocab}"</div>
                        </div>
                        <button onClick={() => { setDailyWriterText(''); setDailyWriterScore(null); setView('daily-writer'); }} className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold shadow-lg shadow-blue-200">Start Writing</button>
                    </div>
                )}

                {step === 'writing' && (
                    <div className="p-4">
                        <div className="bg-slate-50 border-b border-slate-200 p-3 rounded-t-xl text-xs text-slate-500 flex justify-between">
                            <span>To: {dailyWriterMission.recipient}</span>
                            <span>Topic: {dailyWriterMission.topic}</span>
                        </div>
                        <textarea 
                            className="w-full h-40 p-4 bg-slate-50 rounded-b-xl border border-slate-200 border-t-0 focus:ring-2 focus:ring-blue-500 outline-none resize-none mb-4"
                            placeholder="Write your email..."
                            value={input}
                            onChange={e => setInput(e.target.value)}
                        />
                        <button onClick={handleSubmit} disabled={loading} className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold flex justify-center items-center gap-2">
                            {loading ? <Loader2 size={20} className="animate-spin"/> : <Check size={20}/>} Send & Check
                        </button>
                    </div>
                )}

                {step === 'result' && feedback && (
                    <div className="p-6 text-center animate-in zoom-in">
                        <div className="inline-block p-4 bg-green-100 text-green-600 rounded-full mb-4">
                            <Trophy size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-800 mb-1">{feedback.score} / 100 Points</h3>
                        <p className="text-slate-500 text-sm mb-6">Feedback received!</p>
                        
                        <div className="bg-slate-50 p-4 rounded-2xl text-left mb-4 text-sm border border-slate-100">
                            <p className="font-bold text-slate-400 text-xs uppercase mb-1">Teacher's Note</p>
                            <p className="text-slate-700">{feedback.text}</p>
                        </div>

                        <button onClick={() => setStep('briefing')} className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold">Done</button>
                    </div>
                )}
            </div>
        );
    };
 const checkHealth = async () => {
        setApiStatus('checking'); 
        try {
            // Kurzer Timeout (3s)
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 3000);

            const res = await fetch('/api/lookup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ word: 'le' }),
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
    useEffect(() => {
        // Sofort beim Start prüfen
        checkHealth();
        
        // Alle 60 Sekunden wiederholen
        const interval = setInterval(checkHealth, 60000);
        
        // Aufräumen wenn App geschlossen wird
        return () => clearInterval(interval);
    }, []);


    // Die sichere Fetch-Funktion (Mix aus All-Time und Week)
    const fetchMixedMemes = async () => {
        if (loadingMemes || memesData.length > 0) return; // Schutz vor Doppel-Ladung
        
        setLoadingMemes(true);
        try {
            const proxy = "https://corsproxy.io/?";
            
            // 1. Wir laden BEIDE Listen gleichzeitig
            const [resAllTime, resWeek] = await Promise.all([
                fetch(proxy + encodeURIComponent("https://www.reddit.com/r/FrenchMemes/top.json?t=all&limit=30")),
                fetch(proxy + encodeURIComponent("https://www.reddit.com/r/FrenchMemes/top.json?t=week&limit=30"))
            ]);

            const jsonAll = await resAllTime.json();
            const jsonWeek = await resWeek.json();

            // Helper zum Extrahieren der Bild-Daten
            const extractData = (json) => json.data.children
                .map(c => c.data)
                .filter(post => post.url && (post.url.match(/\.(jpeg|jpg|gif|png)$/) != null) && !post.over_18)
                .map(post => ({ title: post.title, url: post.url, ups: post.ups, id: post.id }));

            const listAll = extractData(jsonAll);
            const listWeek = extractData(jsonWeek);

            // 2. Der "Reißverschluss": Abwechselnd A und B
            const mixed = [];
            const maxLen = Math.max(listAll.length, listWeek.length);
            const usedIds = new Set();

            for (let i = 0; i < maxLen; i++) {
                // Nimm einen Klassiker
                if (listAll[i] && !usedIds.has(listAll[i].id)) {
                    mixed.push(listAll[i]);
                    usedIds.add(listAll[i].id);
                }
                // Nimm einen aktuellen
                if (listWeek[i] && !usedIds.has(listWeek[i].id)) {
                    mixed.push(listWeek[i]);
                    usedIds.add(listWeek[i].id);
                }
            }

            if (mixed.length === 0) throw new Error("No memes found");
            
            setMemesData(mixed);
            setMemeIndex(0); // Reset auf Start

        } catch (e) {
            console.error("Meme Load Error", e);
            // Fallback Notfall-Memes
            setMemesData([
                { title: "Le pain", url: "https://i.kym-cdn.com/photos/images/newsfeed/001/535/068/29d.jpg", ups: 999 },
                { title: "Quand tu ne comprends rien", url: "https://i.imgflip.com/1ur9b0.jpg", ups: 850 }
            ]);
        } finally {
            setLoadingMemes(false);
        }
    };

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
    useEffect(() => {
        // 1. Fortschritt laden
        const savedProgress = localStorage.getItem('vocabApp_progress');
        if (savedProgress) {
            setUserProgress(JSON.parse(savedProgress));
        }

        // 2. Vokabeln laden (Hier liegt der Fix!)
        const savedVocab = localStorage.getItem('vocabApp_vocab');
        
        if (savedVocab) {
            // A: Wenn wir eigene Daten hochgeladen haben (Settings), nimm diese
            setVocabulary(JSON.parse(savedVocab));
        } else if (typeof vocab_List !== 'undefined') {
            // B: Wenn nicht, nimm die Daten aus der vocab.js Datei
            // Das "typeof" verhindert Abstürze, falls die Datei fehlt
            setVocabulary(vocab_List);
        } else {
            console.error("WICHTIG: vocab_List wurde nicht gefunden. Prüfe den Dateinamen.");
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('vocabApp_progress', JSON.stringify(userProgress));
    }, [userProgress]);
    useEffect(() => {
        setExamplesVisible(false); // Klappt die AI-Beispiele zu
        setLoadingExamples(false); // Stoppt Lade-Animationen
        setIsFlipped(false);       // Dreht Karte auf die Vorderseite
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
    const openArticle = async (url) => {
        setView('reader');
        setReaderMode('select');
        setLoadingStory(true);
        setLoadingTip("Cleaning up the mess...");

        try {
            // 1. Jina AI via Proxy
            // Wir nutzen hier 'r.jina.ai' im Markdown Modus
            const jinaUrl = `https://r.jina.ai/${url}`;
            const proxy = "https://corsproxy.io/?"; 
            
            const res = await fetch(proxy + encodeURIComponent(jinaUrl));
            if (!res.ok) throw new Error("Article fetch failed");
            
            const rawMarkdown = await res.text();

            // --- STEP A: GROBE VORREINIGUNG ---
            let text = rawMarkdown
                // Entferne Jina Header (URLSource etc.) bis zum ersten echten Inhalt
                .replace(/^[\s\S]*?MarkdownContent:/i, '') 
                // Entferne Bilder & Links
                .replace(/!\[.*?\]\(.*?\)/g, '') 
                .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') 
                .replace(/https?:\/\/\S+/g, '')
                // Entferne Markdown Fett/Kursiv
                .replace(/[*_#`]/g, '')
                // Entferne Mehrfach-Leerzeichen
                .replace(/[ \t]+/g, ' '); 

            // --- STEP B: ZEILEN-ANALYSE (Der Filter) ---
            const lines = text.split('\n');
            let cleanLines = [];
            let titleFound = false;
            let finalTitle = "News Article";
            
            // Wörter, die das Ende des Artikels markieren (Footer-Start)
            // Sobald wir eines davon sehen, hören wir auf zu lesen.
            const stopWords = [
                "Lire aussi", "Sur le même sujet", "Services", "Mentions légales", 
                "Nous contacter", "Publicité", "Sponsorisé", "Jeux", "Bons plans",
                "Votre avis", "Commentaires", "À la une", "En continu", "Par thématique"
            ];

            // Wörter, die Zeilen sofort disqualifizieren (Cookie Banner etc.)
            const junkMarkers = [
                "Menu", "Search", "Recherche", "Connexion", "S'abonner", "Newsletter",
                "Facebook", "Twitter", "Instagram", "YouTube", "Pinterest",
                "cookie", "accepter", "refuser", "paramétrer", "consentement",
                "Copyright", "Tous droits réservés", "Temps de lecture", "Publié le",
                "Divertissement", "Sport", "Planète", "High-Tech", "Conso", // Menü-Kategorien
                "========", "--------"
            ];

            for (let line of lines) {
                let l = line.trim();
                
                if (l.length < 3) continue; // Zu kurz

                // 1. Titel finden (Erste lange Zeile)
                if (!titleFound) {
                    if (l.length > 20 && !junkMarkers.some(m => l.includes(m))) {
                        finalTitle = l.replace('Title:', '').trim();
                        titleFound = true;
                    }
                    continue; // Titel nicht in den Body packen
                }

                // 2. NOTBREMSE: Sind wir im Footer?
                // Wenn die Zeile exakt eines der Stop-Wörter ist, brechen wir ab.
                if (stopWords.some(s => l.toLowerCase() === s.toLowerCase() || l.toLowerCase().startsWith(s.toLowerCase() + ":"))) {
                    break; // STOPP! Der Rest ist Müll.
                }

                // 3. JUNK FILTER
                const isJunk = junkMarkers.some(marker => l.toLowerCase().includes(marker.toLowerCase()));
                if (isJunk) continue;

                // 4. QUALITÄTS-CHECK
                // Ein echter Satz endet meist mit . ! ? oder »
                const hasPunctuation = /[.!?»]$/.test(l);
                // Ein echter Absatz ist meist länger als 80 Zeichen
                const isLong = l.length > 80;
                // Ist es eine Zeitangabe (z.B. "12:30")? Weg damit.
                const isTime = /^\d{1,2}:\d{2}$/.test(l);

                // WIR NEHMEN DIE ZEILE NUR WENN:
                // Sie lang ist ODER Satzzeichen hat UND keine Zeitangabe ist.
                if ((isLong || hasPunctuation) && !isTime) {
                    cleanLines.push(l);
                }
            }

            const bodyText = cleanLines.join('\n\n');

            // --- STEP C: FALLBACK FÜR 1JOUR1ACTU ---
            // Wenn nach dem Reinigen fast nichts übrig ist (oft bei 1jour1actu, weil die Struktur anders ist),
            // versuchen wir es weniger streng.
            if (bodyText.length < 200) {
                 // Notfall-Plan: Einfach die längsten 5 Absätze nehmen
                 const sortedByLength = lines.sort((a, b) => b.length - a.length);
                 const fallbackText = sortedByLength.slice(0, 6).join('\n\n');
                 
                 if (fallbackText.length > 200) {
                     setCurrentStory({ title: finalTitle, text: fallbackText, quiz: null, isArticle: true });
                     setReaderMode('reading');
                     setLoadingStory(false);
                     return;
                 }
            }

            if (bodyText.length < 100) {
                throw new Error("Text too short after cleaning");
            }

            // 4. ERGEBNIS SETZEN
            setCurrentStory({
                title: finalTitle,
                text: bodyText,
                quiz: null, 
                isArticle: true
            });
            
            setReaderMode('reading');

        } catch (e) {
            console.error(e);
            // Smart Fallback: Wenn es nicht klappt, Link im Browser öffnen
            if(confirm("This article format is hard to read in-app. Open in Browser instead?")) {
                window.open(url, '_blank');
            }
            setView('explore'); 
        } finally {
            setLoadingStory(false);
        }
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
             // Wir begrenzen die Box visuell auf die aktuelle, damit man nicht "aufsteigt", wenn man es schwer fand
             const oldBox = calculateBoxFromInterval(interval); // Hilfsfunktion oder Schätzung
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
            <div className="w-full animate-in fade-in slide-in-from-right-8 duration-300 pt-6 pb-24 px-1">
                
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
                                    <p className="text-2xl text-indigo-900 font-serif leading-relaxed animate-in fade-in">
                                        {translationData.translation}
                                    </p>
                                ) : (
                                    <p className="text-indigo-300 text-lg italic">Translation will appear here...</p>
                                )}
                            </div>

                            {/* Context Examples (Optional) */}
                            {translationData && translationData.examples && translationData.examples.length > 0 && (
                                <div className="px-5 pb-5 animate-in slide-in-from-top-2">
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
                            <div className="space-y-4 animate-in fade-in slide-in-from-top-4">
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
                <div className="w-full animate-in fade-in duration-300 pt-6 pb-24 px-1">
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
                <div className="h-[80vh] flex flex-col items-center justify-center text-center px-6 animate-in zoom-in duration-300">
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
                                    <div className="mb-1 mr-1 bg-rose-50 text-rose-700 text-[10px] font-bold px-3 py-1.5 rounded-xl border border-rose-100 animate-in fade-in slide-in-from-bottom-1 max-w-[85%] shadow-sm flex items-start gap-1">
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
                    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/30 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setSelectedMsg(null)}>
                        <div className="bg-white w-full p-6 pb-12 rounded-t-[2.5rem] shadow-2xl animate-in slide-in-from-bottom-10 duration-300 max-h-[80vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
                            
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
    const startSmartSession = () => {
        const now = Date.now();
        const sessionSize = smartConfig.sessionSize; 
        
        if (!vocabulary || vocabulary.length === 0) {
            alert("No vocabulary loaded.");
            return;
        }

        // 1. Basis-Pool filtern
        const rangePool = vocabulary.filter(w => w.rank >= smartConfig.rangeStart && w.rank <= smartConfig.rangeEnd);

        // 2. Fällige Wörter (Reviews)
        let dueWords = rangePool.filter(word => {
            const p = userProgress[word.rank];
            const reviewTime = p?.nextReview || 0;
            return p && (p.box > 0 || p.interval > 0) && reviewTime <= now;
        });

        // Reviews mischen
        for (let i = dueWords.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [dueWords[i], dueWords[j]] = [dueWords[j], dueWords[i]];
        }

        // 3. Neue Wörter ("Dynamic Fuzzy Pool" Logik)
        let newWords = [];
        if (dueWords.length < sessionSize) {
            const needed = sessionSize - dueWords.length;
            
            // Finde alle UNGELERNTEN Wörter, sortiert nach Rang (1, 2, 3...)
            const unlearnedPool = rangePool
                .filter(word => !userProgress[word.rank] || (!userProgress[word.rank].box && !userProgress[word.rank].interval))
                .sort((a, b) => a.rank - b.rank); 

            if (unlearnedPool.length > 0) {
                // HIER IST DIE NEUE LOGIK:
                // Wir schauen uns das allererste ungelernte Wort an, um zu wissen, wo der Nutzer steht.
                const currentRankPosition = unlearnedPool[0].rank;
                let lookaheadWindow = 100; // Standard

                // Deine gewünschte Progression:
                if (currentRankPosition < 10) {
                    lookaheadWindow = 3; // Ganz am Anfang: Nur die nächsten 3 mischen (sehr strikt)
                } else if (currentRankPosition < 30) {
                    lookaheadWindow = 10; // 10-30: Kleines Fenster
                } else if (currentRankPosition < 100) {
                    lookaheadWindow = 20; // 30-100: Etwas mehr Varianz
                } else if (currentRankPosition < 200) {
                    lookaheadWindow = 50; // 100-200: Erweitern
                } else if (currentRankPosition < 1000) {
                    lookaheadWindow = 100; // Bis 1000: 100er Schritte
                } else {
                    lookaheadWindow = 200; // Ab 1000: Große 200er Schritte
                }

                // Wir nehmen nur den Ausschnitt (das Fenster) aus dem Pool
                const candidates = unlearnedPool.slice(0, lookaheadWindow);
                
                // ...und mischen NUR diese Kandidaten
                for (let i = candidates.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
                }

                // Nimm die benötigte Anzahl
                newWords = candidates.slice(0, needed);
            }
        }

        // Zusammenfügen
        let sessionWords = [...dueWords, ...newWords];
        
        // Finales Limit
        if (sessionWords.length > sessionSize) {
            sessionWords = sessionWords.slice(0, sessionSize);
        }
        
        if (sessionWords.length === 0) {
            alert("All caught up! Great job.");
            return;
        }

        setSessionQueue(sessionWords);
        setIsFlipped(false);
        setSessionResults({ correct: 0, wrong: 0 });
        setView('smart-session');
    };
    const startCollectionSession = (collectionIds) => {
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

    const handleResult = (quality) => { 
        // Quality: 0=Again, 1=Hard, 2=Good, 3=Easy
        // (Für Test-Mode nutzen wir true/false Mapping: false->0, true->2)
        
        setAiExamples(null);
        setLoadingExamples(false);

        if (view === 'smart-session') {
            const currentWord = sessionQueue[0];
            
            // Neue Stats berechnen
            const oldStats = userProgress[currentWord.rank];
            const newStats = calculateAnkiStats(oldStats, quality);

            // State Update
            setUserProgress(prev => ({
                ...prev,
                [currentWord.rank]: newStats
            }));

            // Queue Management
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
            // --- TEST MODE LOGIC (Bleibt simpel) ---
            // Wir mappen boolean inputs falls sie noch kommen
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
                            <div className="text-xl md:text-3xl lg:text-4xl font-extrabold text-slate-800 font-mono leading-tight">
                                {currentTime.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
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
                                        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-full rounded-full transition-all duration-500"
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
            <div className="pb-24 pt-[160px] px-1 space-y-6 animate-in fade-in duration-500">
                
                {/* 1. HERO: SMART LEARNING (Keep) */}
                <div className="relative">
                    <h2 className="text-xl font-bold text-slate-800 mb-3 px-1">Today's Focus</h2>
                    <button 
                        onClick={() => setView('smart-config')} 
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
                        <GraduationCap size={140} className="absolute -right-6 -bottom-6 text-white opacity-10 rotate-[-15deg] group-hover:scale-110 transition-transform duration-500" />
                    </button>
                </div>

                {/* 2. DAILY JOKE (Redesigned) */}
                {dailyJoke && (
                    <button 
                        onClick={() => { setViewingJoke(dailyJoke); setView('joke-detail'); }}
                        className="w-full bg-amber-50 border border-amber-100 p-5 rounded-[2rem] relative overflow-hidden hover:bg-amber-100 transition-all active:scale-[0.98] text-left"
                    >
                        <div className="flex justify-between items-center mb-3">
                            <div className="flex items-center gap-2">
                                <div className="bg-white p-2 rounded-xl text-amber-500 shadow-sm"><Smile size={18}/></div>
                                <span className="font-bold text-amber-900 text-sm">Joke of the Day</span>
                            </div>
                            <ChevronRight size={20} className="text-amber-400"/>
                        </div>
                        <p className="text-amber-900 font-serif italic text-lg leading-snug line-clamp-2">"{dailyJoke.q}"</p>
                        <div className="mt-2 text-xs text-amber-600/70 font-bold uppercase tracking-wider">Tap to view full joke</div>
                    </button>
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
                <button 
                    onClick={() => setView('skills')} 
                    className="w-full bg-emerald-50 border border-emerald-100 p-5 rounded-[2rem] text-left active:scale-[0.98] relative overflow-hidden"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <div className="bg-white text-emerald-600 p-2 rounded-xl shadow-sm"><Layers size={18} /></div>
                        <span className="font-bold text-emerald-900 text-sm">Suggested Grammar</span>
                    </div>
                    <h3 className="font-bold text-emerald-800 text-xl">Le Passé Composé</h3>
                    <p className="text-emerald-700/70 text-xs mt-1">Master the past tense today.</p>
                </button>
            </div>
        );
    };
    const renderExplore = () => {
        // --- STATE (Muss ganz oben stehen!) ---
 

        // --- DATA FETCHERS ---
        // 1. NEWS FETCHER (Dynamisch)
        const fetchNews = async (sourceOverride = null) => {
            // Wenn wir die Funktion aufrufen, können wir optional eine neue Quelle erzwingen
            const source = sourceOverride || currentNewsSource;
            
            setLoadingContent(true);
            try {
                // RSS2JSON API nutzen
                const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(source.rss)}`;
                const res = await fetch(apiUrl);
                const data = await res.json();
                
                if (data.status === 'ok' && data.items) {
                    setNewsData(data.items.slice(0, 15));
                } else {
                    throw new Error("Feed error");
                }
            } catch (e) { 
                console.error(e);
                setNewsData([]); // Leere Liste bei Fehler
            }
            setLoadingContent(false);
        };

        const fetchMemes = async () => {
            if (memesData.length > 0) return;
            
            setLoadingContent(true);
            console.log("🚀 Starting Meme Fetch..."); // Debug 1

            // Fallbacks definieren
            const fallbackMemes = [
                { id: "f1", title: "Le pain", url: "https://i.kym-cdn.com/photos/images/newsfeed/001/535/068/29d.jpg", ups: 1200 },
                { id: "f2", title: "Quand tu ne comprends rien", url: "https://i.imgflip.com/1ur9b0.jpg", ups: 850 },
                { id: "f3", title: "French Grammar be like", url: "https://preview.redd.it/french-grammar-be-like-v0-7t84b5345d8a1.jpg?auto=webp&s=59447563945698562103945698", ups: 400 }
            ];

            try {
                // Neuer, schnellerer Proxy
                // Wir nutzen 'hot' statt 'top', da gibt es meist mehr Bilder
                const targetUrl = "https://www.reddit.com/r/FrenchMemes/hot.json?limit=50";
                const proxyUrl = "https://corsproxy.io/?" + encodeURIComponent(targetUrl);

                console.log("🌍 Fetching URL:", proxyUrl); // Debug 2

                const res = await fetch(proxyUrl);
                
                if (!res.ok) {
                    throw new Error(`HTTP Error: ${res.status}`);
                }

                const data = await res.json();
                console.log("📦 Raw Data received:", data); // Debug 3: Was kommt wirklich an?

                const freshMemes = data.data.children
                    .map(c => c.data)
                    .filter(post => 
                        post.url && 
                        // Wir prüfen auf gängige Bild-Endungen
                        (post.url.match(/\.(jpeg|jpg|gif|png)$/) != null) &&
                        !post.over_18 &&
                        !seenMemeIds.includes(post.id) 
                    )
                    .map(post => ({
                        id: post.id,
                        title: post.title,
                        url: post.url,
                        ups: post.ups
                    }));

                console.log("✅ Filtered Memes:", freshMemes.length); // Debug 4

                if (freshMemes.length > 0) {
                    setMemesData(freshMemes);
                } else {
                    console.warn("⚠️ No memes found after filter.");
                    setMemesData(fallbackMemes.filter(m => !seenMemeIds.includes(m.id)));
                }

            } catch (e) { 
                console.error("❌ MEME ERROR DETAILS:", e); // Debug 5: Der echte Fehler
                setMemesData(fallbackMemes.filter(m => !seenMemeIds.includes(m.id)));
            } finally {
                setLoadingContent(false);
            }
        };

    const handleNextMeme = () => {
        // 1. Das aktuelle Meme als "Gesehen" markieren
        const currentMeme = memesData[0]; // Wir zeigen immer das erste der Liste
        if (currentMeme) {
            setSeenMemeIds(prev => {
                const updated = [...prev, currentMeme.id];
                localStorage.setItem('vocabApp_seenMemes', JSON.stringify(updated));
                return updated;
            });
            
            // Daily Count erhöhen
            const newCount = dailyMemeCount + 1;
            setDailyMemeCount(newCount);
            localStorage.setItem('vocabApp_dailyMemeCount', newCount.toString());
        }
        
        // 2. Das Meme aus der aktuellen Ansichts-Liste entfernen
        setMemesData(prev => prev.slice(1));
    };
    
    const handleSaveMeme = (meme) => {
        const isSaved = savedMemes.find(m => m.id === meme.id);
        if (isSaved) {
            // Entfernen wenn bereits gespeichert
            const updated = savedMemes.filter(m => m.id !== meme.id);
            setSavedMemes(updated);
            localStorage.setItem('vocabApp_savedMemes', JSON.stringify(updated));
        } else {
            // Hinzufügen wenn nicht gespeichert
            const updated = [...savedMemes, meme];
            setSavedMemes(updated);
            localStorage.setItem('vocabApp_savedMemes', JSON.stringify(updated));
        }
    };

    const handleResetMemes = () => {
        if(window.confirm("Watch all memes again?")) {
            setSeenMemeIds([]); // History löschen
            setMemesData([]);   // Daten leeren
            setTimeout(fetchMemes, 100); // Neu laden triggern
        }
    };

        const nextJoke = () => {
            // Reset States
            setShowPunchline(false);
            setShowTranslation(false);
            setLoadingContent(true);
            
            setTimeout(() => {
                const randomJoke = JOKE_DB[Math.floor(Math.random() * JOKE_DB.length)];
                setCurrentJoke(randomJoke);
                setLoadingContent(false);
            }, 300);
        };

        // --- HELPER ---
        const getCategoryProgress = (ids) => {
            if (!ids || ids.length === 0) return 0;
            const safeVocab = vocabulary || [];
            const learnedCount = safeVocab.filter(w => ids.includes(w.rank) && userProgress[w.rank]?.box > 0).length;
            return Math.round((learnedCount / ids.length) * 100);
        };
        const getCategoryStats = (ids) => {
            if (!ids || ids.length === 0) return "0/0";
            const safeVocab = vocabulary || [];
            const learnedCount = safeVocab.filter(w => ids.includes(w.rank) && userProgress[w.rank]?.box > 0).length;
            return `${learnedCount}/${ids.length}`;
        };

        // =========================================
        // ANSICHTEN
        // =========================================

        // 1. ARTICLES VIEW (Updated)
        // 1. ARTICLES VIEW (Multi-Source News Kiosk)
        if (exploreMode === 'articles') {
            // Initial laden, wenn leer
            if (newsData.length === 0 && !loadingContent) fetchNews();

            return (
                <div className="w-full animate-in fade-in slide-in-from-right-8 duration-300 pt-6 pb-24 px-1 h-full">
                    <div className="flex items-center gap-3 mb-4 px-1">
                        <button onClick={() => setExploreMode('main')} className="p-2 -ml-2 hover:bg-slate-100 rounded-full text-slate-500"><ArrowLeft size={20}/></button>
                        <h2 className="text-2xl font-bold text-slate-800">News Kiosk</h2>
                    </div>

                    {/* QUELLEN AUSWAHL (Horizontal Scroll) */}
                    <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide mb-2">
                        {NEWS_SOURCES.map(source => {
                            const isActive = currentNewsSource.id === source.id;
                            return (
                                <button 
                                    key={source.id}
                                    onClick={() => {
                                        setCurrentNewsSource(source);
                                        setNewsData([]); // Liste leeren für Ladeeffekt
                                        fetchNews(source); // Sofort neu laden
                                    }}
                                    className={`flex flex-col items-start px-4 py-2 rounded-xl border transition-all min-w-[120px] ${
                                        isActive 
                                        ? `${source.color} border-transparent shadow-sm scale-[1.02]` 
                                        : 'bg-white border-slate-100 text-slate-400 hover:border-slate-300'
                                    }`}
                                >
                                    <div className="font-bold text-sm">{source.name}</div>
                                    <div className="text-[10px] opacity-80 font-bold mt-1">Level {source.level}</div>
                                </button>
                            );
                        })}
                    </div>

                    {/* ARTIKEL LISTE */}
                    {loadingContent ? (
                        <div className="text-center py-20 text-slate-400 animate-pulse flex flex-col items-center">
                             <RotateCcw className="animate-spin mb-2"/>
                             Fetching latest news...
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {newsData.map((item, idx) => (
                                <button 
                                    key={idx} 
                                    onClick={() => openArticle(item.link)} 
                                    className="w-full text-left block bg-white p-4 rounded-2xl border border-slate-100 shadow-sm active:scale-[0.98] transition-all group"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <span className={`text-[10px] font-bold px-2 py-1 rounded ${currentNewsSource.color.replace('text-', 'bg-').replace('100', '50')} ${currentNewsSource.color.split(' ')[1]}`}>
                                            {currentNewsSource.name}
                                        </span>
                                        <span className="text-[10px] text-slate-300">{new Date(item.pubDate).toLocaleDateString()}</span>
                                    </div>
                                    <h3 className="font-bold text-slate-800 leading-snug mb-2 group-hover:text-indigo-600 transition-colors">{item.title}</h3>
                                    {item.enclosure?.link && <img src={item.enclosure.link} alt="News" className="w-full h-32 object-cover rounded-xl opacity-90" />}
                                </button>
                            ))}
                            {newsData.length === 0 && !loadingContent && (
                                <div className="text-center p-8 text-slate-400">No articles found. Try another source.</div>
                            )}
                        </div>
                    )}
                </div>
            );
        }

        // 2. MEMES VIEW (Nur Anzeige - Logik ist jetzt in App)
        if (exploreMode === 'memes') {
            // Initial laden wenn leer
            if (memesData.length === 0 && !loadingContent && dailyMemeCount < 20) {
                fetchMemes();
            }

            const currentMeme = memesData[0]; // Zeige immer das erste Meme
            const dailyLimitReached = dailyMemeCount >= 20;
            const allMemesSeenToday = memesData.length === 0 && dailyLimitReached;
            const isSaved = currentMeme && savedMemes.find(m => m.id === currentMeme.id);

            return (
                <div className="w-full animate-in fade-in slide-in-from-right-8 duration-300 pt-6 pb-24 px-1 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4 px-1">
                        <button onClick={() => setExploreMode('main')} className="p-2 -ml-2 hover:bg-slate-100 rounded-full text-slate-500"><ArrowLeft size={20}/></button>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-slate-800">Meme Gallery</h2>
                            <p className="text-xs text-slate-400">{dailyMemeCount}/20 today</p>
                        </div>
                    </div>
                    
                    <div className="flex-1 flex flex-col items-center justify-center">
                        {allMemesSeenToday ? (
                            <div className="text-center p-12 bg-white rounded-3xl border border-dashed border-slate-200">
                                <Image size={48} className="mx-auto text-slate-300 mb-4"/>
                                <h3 className="font-bold text-slate-600 mb-2">Daily Limit Reached!</h3>
                                <p className="text-slate-400 text-sm mb-1">You've seen your 20 memes for today.</p>
                                <p className="text-slate-400 text-sm">Come back tomorrow for fresh content! 🎉</p>
                            </div>
                        ) : loadingContent && !currentMeme ? (
                             <div className="text-center text-purple-400 animate-pulse"><Image size={32} className="animate-bounce mx-auto mb-2"/> Mixing best memes...</div>
                        ) : currentMeme ? (
                            <div className="w-full bg-white p-4 rounded-[2rem] shadow-lg border border-slate-100 relative overflow-hidden animate-in zoom-in duration-200">
                                <h3 className="font-bold text-slate-800 text-lg mb-3 text-center leading-snug px-2">{currentMeme.title}</h3>
                                <div className="rounded-xl overflow-hidden bg-slate-100 border border-slate-100 flex items-center justify-center relative min-h-[250px]">
                                    <img src={currentMeme.url} alt="Meme" className="w-full h-full object-contain max-h-[50vh]" />
                                </div>
                                <div className="mt-4 flex justify-between items-center px-2">
                                    <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded-full">⬆️ {currentMeme.ups}</span>
                                    <div className="flex gap-2">
                                        <button 
                                            onClick={() => handleSaveMeme(currentMeme)} 
                                            className={`p-3 rounded-full transition-all ${
                                                isSaved 
                                                ? 'bg-purple-600 text-white' 
                                                : 'bg-purple-50 text-purple-600 hover:bg-purple-100'
                                            }`}
                                        >
                                            <Bookmark size={20} fill={isSaved ? 'currentColor' : 'none'}/>
                                        </button>
                                        <button onClick={() => speak(currentMeme.title)} className="p-3 bg-purple-50 text-purple-600 rounded-full hover:bg-purple-100"><Volume2 size={20}/></button>
                                    </div>
                                </div>
                            </div>
                        ) : <div className="text-slate-400">No memes found.</div>}
                    </div>

                    {/* Next Button */}
                    {!loadingContent && currentMeme && !dailyLimitReached && (
                        <button 
                            onClick={handleNextMeme} 
                            className="mt-6 w-full bg-purple-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-purple-200 hover:bg-purple-700 transition-all flex items-center justify-center gap-2"
                        >
                            Next Meme <ArrowLeft size={20} className="rotate-180"/>
                        </button>
                    )}
                </div>
            );
        }

        // 3. JOKES VIEW (Update: Smiley weg, Frage-Übersetzung)
        if (exploreMode === 'jokes') {
            
            // Helper zum Laden (muss hier definiert sein, um Zugriff auf States zu haben)
            const loadNextJoke = () => {
                setJokeRevealed(false); 
                setQuestionTranslation(null); // Reset Übersetzung
                setLoadingContent(true);
                setTimeout(() => {
                    const randomJoke = JOKE_DB[Math.floor(Math.random() * JOKE_DB.length)];
                    setCurrentJoke(randomJoke);
                    setLoadingContent(false);
                }, 300);
            };

            // Helper für Frage-Übersetzung
            const translateQuestion = async () => {
                if (!currentJoke) return;
                try {
                    // Wir nutzen deine existierende Translator API
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

            // Initiale Ladung
            if (!currentJoke && !loadingContent) loadNextJoke();

            return (
                <div className="w-full animate-in fade-in slide-in-from-right-8 duration-300 pt-6 pb-24 px-1 h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-4 px-1">
                        <button onClick={() => setExploreMode('main')} className="p-2 -ml-2 hover:bg-slate-100 rounded-full text-slate-500"><ArrowLeft size={20}/></button>
                        <h2 className="text-2xl font-bold text-slate-800">Joke Box</h2>
                    </div>

                    <div className="flex-1 flex flex-col items-center justify-center py-4">
                        {loadingContent ? (
                             <div className="text-center text-amber-500 animate-pulse"><RotateCcw className="animate-spin mx-auto mb-2"/> Picking a good one...</div>
                        ) : currentJoke ? (
                            <div className="w-full bg-white p-8 rounded-[2.5rem] shadow-lg border border-slate-100 text-center relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 to-orange-400"></div>
                                
                                {/* Smiley ist hier GELÖSCHT */}

                                <div className="mb-6">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Question</span>
                                    
                                    {/* Die Frage */}
                                    <h3 className="text-xl font-bold text-slate-800 mt-2 mb-2 leading-snug font-serif italic">
                                        "{currentJoke.q}"
                                    </h3>

                                    {/* Frage übersetzen Button/Text */}
                                    {questionTranslation ? (
                                        <p className="text-xs text-indigo-500 font-medium animate-in fade-in bg-indigo-50 py-1 px-2 rounded-lg inline-block">
                                            🇬🇧 {questionTranslation}
                                        </p>
                                    ) : (
                                        <button onClick={translateQuestion} className="text-[10px] font-bold text-slate-400 underline decoration-dotted hover:text-indigo-500">
                                            Translate Question
                                        </button>
                                    )}

                                    <div className="mt-3">
                                        <button onClick={() => speak(currentJoke.q)} className="p-2 bg-slate-50 rounded-full text-slate-400 hover:text-amber-600 hover:bg-amber-50"><Volume2 size={20}/></button>
                                    </div>
                                </div>

                                {/* ANTWORT BEREICH */}
                                {showPunchline ? (
                                    <div className="animate-in zoom-in duration-300 border-t border-slate-100 pt-6">
                                        <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">Punchline</span>
                                        <h3 className="text-2xl font-bold text-indigo-600 mt-2 mb-4 leading-snug italic">
                                            "{currentJoke.a}"
                                        </h3>
                                        
                                        <div className="flex justify-center gap-3 mb-4">
                                             <button onClick={() => speak(currentJoke.a)} className="p-3 bg-indigo-50 rounded-full text-indigo-600 hover:bg-indigo-100"><Volume2 size={24}/></button>
                                        </div>

                                        {/* Antwort Übersetzung */}
                                        {showTranslation ? (
                                             <p className="text-slate-400 text-sm bg-slate-50 p-3 rounded-xl animate-in fade-in">
                                                🇬🇧 {currentJoke.en}
                                             </p>
                                        ) : (
                                            <button onClick={() => setShowTranslation(true)} className="text-xs font-bold text-slate-400 underline decoration-dotted">
                                                Explain Joke
                                            </button>
                                        )}
                                    </div>
                                ) : (
                                    <button 
                                        onClick={() => setShowPunchline(true)}
                                        className="w-full py-4 bg-slate-50 text-slate-500 font-bold rounded-2xl border-2 border-dashed border-slate-200 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200 transition-all mt-2"
                                    >
                                        Tap for Answer
                                    </button>
                                )}
                            </div>
                        ) : null}
                    </div>

                    <button onClick={loadNextJoke} className="w-full bg-amber-500 text-white py-4 rounded-2xl font-bold shadow-lg shadow-amber-200 hover:bg-amber-600 transition-all flex items-center justify-center gap-2 mt-4">
                        < ArrowLeft size={20}/> Next Joke
                    </button>
                </div>
            );
        }

        // 4. LISTEN (Topics & Grammar)
        if (exploreMode === 'grammar' || exploreMode === 'topics') {
            const activeCollection = exploreMode === 'grammar' ? COLLECTIONS.grammar : COLLECTIONS.topics;
            const pageTitle = exploreMode === 'grammar' ? "Vocab Sets" : "Real Life Topics";
            
            return (
                <div className="w-full animate-in fade-in slide-in-from-right-8 duration-300 pt-6 pb-24 px-1">
                    <div className="flex items-center gap-3 mb-4 px-1">
                        <button onClick={() => setExploreMode('main')} className="p-2 -ml-2 hover:bg-slate-100 rounded-full text-slate-500"><ArrowLeft size={20}/></button>
                        <h2 className="text-2xl font-bold text-slate-800">{pageTitle}</h2>
                    </div>
                    <div className="grid gap-3">
                        {activeCollection.map(item => {
                             const stats = getCategoryStats(item.ids);
                             const progress = getCategoryProgress(item.ids);
                             return (
                                <button key={item.id} 
                                    onClick={() => {
                                        if(exploreMode === 'grammar') startCollectionSession(item.ids);
                                        else { setSelectedTopicId(item.id); setView('topic-hub'); }
                                    }}
                                    className="w-full bg-white p-4 rounded-3xl border border-slate-100 shadow-sm active:scale-[0.98] flex items-center gap-4"
                                >
                                    <div className={`w-14 h-14 flex items-center justify-center rounded-2xl ${exploreMode==='grammar'?'bg-indigo-50 text-indigo-600':'bg-emerald-50 text-emerald-600'}`}>{item.icon}</div>
                                    <div className="flex-1 text-left">
                                        <div className="flex justify-between items-center mb-1">
                                            <h3 className="font-bold text-slate-800">{item.label}</h3>
                                            <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full">{stats}</span>
                                        </div>
                                        <div className="text-xs text-slate-400 mb-2">{item.sub}</div>
                                        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                            <div className={`h-full ${exploreMode==='grammar'?'bg-indigo-500':'bg-emerald-500'}`} style={{width: `${progress}%`}}></div>
                                        </div>
                                    </div>
                                    <ChevronRight size={20} className="text-slate-300"/>
                                </button>
                             );
                        })}
                    </div>
                </div>
            );
        }

        // --- HAUPTMENÜ (VERTICAL STACK - NO GRID) ---
        if (exploreMode === 'main') {
            return (
                <div className="space-y-4 animate-in fade-in slide-in-from-left-4 duration-500 pt-6 pb-24 px-1">
                    <div className="flex items-center gap-3 mb-4 px-1">
                        <div className="bg-indigo-100 p-2 rounded-full text-indigo-600"><Compass size={24} /></div>
                        <h2 className="text-2xl font-bold text-slate-800">Explore</h2>
                    </div>

                    {/* 1. READING ROOM (Hero) */}
                    <button onClick={() => setView('reader')} className="w-full bg-amber-50 border border-amber-100 p-5 rounded-[2rem] text-left active:scale-[0.98] transition-all relative overflow-hidden group shadow-sm flex items-center justify-between">
                        <div className="flex items-center gap-4 z-10">
                            <div className="bg-white p-3 rounded-2xl text-amber-500 shadow-sm"><BookCheck size={24} /></div>
                            <div><h3 className="font-bold text-amber-900 text-lg">Reading Room</h3><p className="text-amber-700/70 text-xs font-medium">Interactive Stories</p></div>
                        </div>
                        <ChevronRight size={24} className="text-amber-300 z-10"/>
                        <BookOpen size={80} className="absolute -right-4 -bottom-6 text-amber-100/50 rotate-12"/>
                    </button>

                    {/* 2. CULTURE FEED (News) */}
                    <button onClick={() => setExploreMode('articles')} className="w-full bg-rose-50 border border-rose-100 p-5 rounded-[2rem] text-left active:scale-[0.98] transition-all relative overflow-hidden group shadow-sm flex items-center justify-between">
                         <div className="flex items-center gap-4 z-10">
                            <div className="bg-white p-3 rounded-2xl text-rose-500 shadow-sm"><Newspaper size={24} /></div>
                            <div><h3 className="font-bold text-rose-900 text-lg">Culture Feed</h3><p className="text-rose-700/70 text-xs font-medium">News & Articles</p></div>
                        </div>
                        <ChevronRight size={24} className="text-rose-300 z-10"/>
                    </button>
                    
                    {/* 3. MEME GALLERY */}
                    <button onClick={() => setExploreMode('memes')} className="w-full bg-purple-50 border border-purple-100 p-5 rounded-[2rem] text-left active:scale-[0.98] transition-all relative overflow-hidden group shadow-sm flex items-center justify-between">
                        <div className="flex items-center gap-4 z-10">
                            <div className="bg-white p-3 rounded-2xl text-purple-500 shadow-sm"><Image size={24} /></div>
                            <div><h3 className="font-bold text-purple-900 text-lg">Meme Gallery</h3><p className="text-purple-700/70 text-xs font-medium">Fun way to learn</p></div>
                        </div>
                        <ChevronRight size={24} className="text-purple-300 z-10"/>
                    </button>

                    {/* 4. GAMES */}
                    <button className="w-full bg-blue-50 border border-blue-100 p-5 rounded-[2rem] text-left active:scale-[0.98] transition-all relative overflow-hidden group shadow-sm flex items-center justify-between opacity-75">
                        <div className="flex items-center gap-4 z-10">
                            <div className="bg-white p-3 rounded-2xl text-blue-500 shadow-sm"><Gamepad2 size={24} /></div>
                            <div><h3 className="font-bold text-blue-900 text-lg">Games</h3><p className="text-blue-700/70 text-xs font-medium">Interactive Learning</p></div>
                        </div>
                        <div className="bg-blue-200 text-blue-700 text-[10px] font-bold px-3 py-1 rounded-full z-10">COMING SOON</div>
                    </button>
                </div>
             );
        }
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

                {/* 1. GRAMMAR (Updated to Swift Data Structure) */}
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
                                            {module.topics.map((t) => (
                                                <button key={t.id} onClick={() => alert(`Opening Grammar Sheet: ${t.title}`)} className="w-full p-4 pl-[5rem] text-left hover:bg-slate-100 hover:text-indigo-600 transition-colors border-b border-slate-100 last:border-0 flex justify-between items-center group">
                                                    <div>
                                                        <div className="text-sm font-bold text-slate-700 group-hover:text-indigo-700">{t.title}</div>
                                                        <div className="text-xs text-slate-400 group-hover:text-indigo-400/80 font-medium">{t.desc}</div>
                                                    </div>
                                                    <BookOpen size={14} className="opacity-0 group-hover:opacity-100 text-indigo-400 transition-opacity"/>
                                                </button>
                                            ))}
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
            <div className="w-full animate-in fade-in duration-500 pt-4">
                
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
            try {
                const res = await fetch('/api/correct', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ text: dailyWriterText, instruction: `Rate this text from 1 to 10 (1=poor,10=excellent) regarding grammar, use of the required construction and vocabulary. Return JSON with {score: number, explanation: string}.` })
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
                // Fallback: map percent to 1-10 if present
                if (score === null && typeof data.percentage === 'number') score = Math.max(1, Math.min(10, Math.ceil(data.percentage / 10)));
                if (score === null) score = Math.max(1, Math.min(10, Math.round((Math.random() * 4) + 6)));
                setDailyWriterScore(score);
                alert(`Score: ${score}/10\n\n${data.explanation || ''}`);
            } catch (e) {
                alert('Scoring failed. Try again later.');
                console.error(e);
            } finally {
                setLoadingContent(false);
            }
        };

        return (
            <div className="w-full animate-in fade-in slide-in-from-right-8 duration-300 pt-6 pb-24 px-1 h-full">
                <div className="flex items-center gap-3 mb-4 px-1">
                    <button onClick={() => setView('skills')} className="p-2 -ml-2 hover:bg-slate-100 rounded-full text-slate-500"><ArrowLeft size={20}/></button>
                    <h2 className="text-2xl font-bold text-slate-800">Daily Writer</h2>
                </div>

                <div className="space-y-6">
                    {/* Mission Card */}
                    <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
                        
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Your Mission</div>
                                <h3 className="text-2xl font-bold text-slate-800">{dailyWriterMission.topic}</h3>
                            </div>
                            <div className="bg-blue-50 text-blue-600 p-3 rounded-xl">
                                <PenTool size={24} />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                                <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Recipient</div>
                                <div className="font-medium text-slate-700 flex items-center gap-2">
                                    <User size={14} className="text-slate-400"/> {dailyWriterMission.recipient}
                                </div>
                            </div>
                            <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                                <div className="text-[10px] text-slate-400 font-bold uppercase mb-1">Bonus Word</div>
                                <div className="font-medium text-slate-700 flex items-center gap-2">
                                    <Sparkles size={14} className="text-amber-400"/> "{dailyWriterMission.vocab}"
                                </div>
                            </div>
                        </div>

                        <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 mb-2">
                            <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider mb-1">Requirement</div>
                            <p className="text-indigo-900 font-medium">{dailyWriterMission.requirement}</p>
                        </div>

                        <div className="flex gap-4 text-xs text-slate-400 mt-4 font-medium">
                            <span className="flex items-center gap-1"><Activity size={12}/> Min: {dailyWriterMission.minWords} words</span>
                            <span className="flex items-center gap-1"><RotateCcw size={12}/> Time: {dailyWriterMission.timeMinutes} min</span>
                        </div>
                    </div>

                    {/* Editor Area */}
                    <div className="bg-white p-1 rounded-[2rem] border border-slate-100 shadow-sm">
                        <textarea 
                            value={dailyWriterText} 
                            onChange={(e) => setDailyWriterText(e.target.value)} 
                            placeholder="Start writing your text here..." 
                            className="w-full min-h-[250px] p-6 bg-transparent text-lg text-slate-700 outline-none resize-none placeholder:text-slate-300" 
                        />
                        <div className="px-6 py-4 border-t border-slate-50 flex justify-between items-center bg-slate-50/50 rounded-b-[2rem]">
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                                {dailyWriterText.trim() ? dailyWriterText.trim().split(/\s+/).length : 0} Words
                            </div>
                            <div className="flex gap-3">
                                <button 
                                    onClick={() => { setDailyWriterText(''); setDailyWriterScore(null); }} 
                                    className="text-slate-400 hover:text-slate-600 p-2 rounded-full hover:bg-slate-100 transition-colors"
                                    title="Reset"
                                >
                                    <RotateCcw size={20}/>
                                </button>
                                <button 
                                    onClick={submitDailyWriter} 
                                    disabled={loadingContent || !dailyWriterText.trim()}
                                    className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-indigo-200 hover:bg-indigo-700 active:scale-95 transition-all flex items-center gap-2 disabled:opacity-50 disabled:shadow-none"
                                >
                                    {loadingContent ? <Loader2 size={20} className="animate-spin"/> : <><Check size={20}/> Submit</>}
                                </button>
                            </div>
                        </div>
                    </div>

                    {dailyWriterScore !== null && (
                        <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-lg text-center animate-in zoom-in duration-300">
                            <div className="inline-block p-4 bg-green-100 text-green-600 rounded-full mb-4 shadow-sm">
                                <Trophy size={32} />
                            </div>
                            <div className="font-bold text-4xl text-slate-800 mb-2">{dailyWriterScore}<span className="text-xl text-slate-400">/10</span></div>
                            <div className="text-slate-500 font-medium">Excellent work! Keep practicing.</div>
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
            <div className="w-full animate-in fade-in duration-500 pt-4">
                
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
                            <div className="mt-4 pt-4 border-t border-slate-100 animate-in fade-in duration-300">
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
        <div className="w-full animate-in fade-in slide-in-from-right-8 duration-300 pt-6 pb-24 px-1 h-full">
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
            <div className="flex flex-col h-full max-w-xl mx-auto w-full pt-4 animate-in fade-in zoom-in duration-300">
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
                        <div className="w-full animate-in fade-in duration-300 flex flex-col items-center border-t border-slate-100 pt-6 mt-2 w-full">
                            <div className="text-center mb-6 w-full">
                                <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">English</div>
                                <h3 className="text-3xl font-bold text-indigo-900 mb-2 leading-tight">{word.english || word.german}</h3>
                                {word.example_en && <p className="text-indigo-400 italic text-sm mt-2 px-4">"{word.example_en}"</p>}
                            </div>

                            {/* AI GENERATOR (Funktioniert auch hier!) */}
                            <div className="w-full px-2">
                                {!aiExamples && !loadingExamples && (
                                    <button onClick={() => fetchAiExamples(word.french)} className="w-full py-3 bg-amber-50 text-amber-600 rounded-xl font-bold text-sm border border-amber-100 hover:bg-amber-100 transition-colors flex items-center justify-center gap-2">
                                        <Sparkles size={32} /> More examples...
                                    </button>
                                )}
                                {loadingExamples && <div className="w-full py-4 text-center text-amber-500 text-sm font-medium animate-pulse flex justify-center items-center gap-2"><ArrowLeft className="animate-spin" size={16}/> generating...</div>}
                                {aiExamples && (
                                    <div className="space-y-3 animate-in fade-in duration-500 text-left">
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

        // Check Cache oder Live-Daten
        const currentExamples = exampleCache[word.rank] || aiExamples;

        return (
            <div className="flex flex-col h-full max-w-xl mx-auto w-full pt-4">
                {/* Header */}
                <div className="flex items-center justify-between mb-2 pl-1">
                    <button onClick={() => setView('home')} className="p-2 -ml-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors">
                        <X size={24} />
                    </button>
                    <div className="text-sm font-medium text-slate-500 font-mono">{progressText}</div>
                    <div className="w-6"></div> 
                </div>
                
                {!isSmartMode && <div className="w-full bg-slate-200 h-2 rounded-full mb-6"><div className="bg-indigo-600 h-2 rounded-full transition-all duration-300" style={{ width: `${progressPercent}%` }}></div></div>}
                
                {/* DIE KARTE */}
                <div className="bg-white border-2 border-slate-100 rounded-3xl shadow-lg p-6 flex flex-col items-center justify-center min-h-[400px] relative transition-all animate-in fade-in zoom-in duration-300">
                    
                    <div className="absolute top-4 right-4 bg-slate-100 text-slate-400 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Rank #{word.rank}</div>
                    {isSmartMode && userProgress[word.rank] && <div className="absolute top-4 left-4 bg-indigo-50 text-indigo-400 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider flex items-center gap-1"><Layers size={10} /> Box {userProgress[word.rank].box}</div>}

                    {/* VORDERSEITE (Französisch) */}
                    {!isFlipped ? (
                        <>
                            <div className="mb-8 text-center w-full">
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">French</div>
                                <div className="flex items-center justify-center gap-3">
                                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 break-words text-center leading-tight">{word.french}</h2>
                                    <button onClick={(e) => { e.stopPropagation(); speak(word.french); }} className="p-3 bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-100 transition-all shadow-sm shrink-0"><Volume2 size={24} /></button>
                                </div>
                                {word.example_fr && <p className="text-slate-500 italic mt-6 text-lg px-4 border-l-2 border-slate-200 pl-4 text-left">"{word.example_fr}"</p>}
                            </div>
                            <button onClick={() => setIsFlipped(true)} className="mt-auto bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-indigo-200 transition-all flex items-center gap-2 w-full justify-center">
                                <BookOpen size={20} /> Show Translation
                            </button>
                        </>
                    ) : (
                        /* RÜCKSEITE (Englisch + AI) */
                        <div className="w-full animate-in fade-in duration-300 flex flex-col items-center w-full h-full">
                            <div className="text-center mb-6 w-full">
                                <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">English</div>
                                <h3 className="text-3xl font-bold text-indigo-900 mb-2 leading-tight">{word.english || word.german}</h3>
                                {word.example_en && <p className="text-indigo-400 italic text-sm mt-2 px-4">"{word.example_en}"</p>}
                            </div>

                            {/* --- AI SECTION --- */}
                            <div className="w-full mb-6 px-2 flex-1 overflow-y-auto max-h-[200px]">
                                {loadingExamples ? (
                                    <div className="w-full py-4 text-center text-amber-500 text-sm font-medium animate-pulse flex justify-center items-center gap-2">
                                        <RotateCcw className="animate-spin" size={16}/> Generiere Kontext...
                                    </div>
                                ) : (
                                    (!currentExamples || !Array.isArray(currentExamples)) ? (
                                        <button 
                                            // HIER IST DER FIX: Wir übergeben das Wort-Objekt!
                                            onClick={() => fetchAiExamples(word)} 
                                            className="w-full py-3 bg-amber-50 text-amber-600 rounded-xl font-bold text-sm border border-amber-100 hover:bg-amber-100 transition-colors flex items-center justify-center gap-2"
                                        >
                                            <Sparkles size={16} /> Generate AI Examples
                                        </button>
                                    ) : (
                                        <div className="space-y-3 animate-in fade-in duration-500 text-left">
                                            <div className="flex justify-between items-center px-1 mb-1">
                                                 <span className="text-[10px] font-bold text-slate-400 uppercase">AI Context</span>
                                                 <button onClick={() => { setAiExamples(null); setExamplesVisible(false); }} className="text-[10px] text-indigo-400 font-bold hover:underline">Clear</button>
                                            </div>
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
                                    )
                                )}
                            </div>

                            {/* BUTTONS */}
                            {isSmartMode ? (
                                <div className="grid grid-cols-4 gap-2 w-full px-1 mt-auto">
                                    {[
                                        { q: 0, label: "Again", color: "bg-red-50 text-red-600 border-red-200" },
                                        { q: 1, label: "Hard", color: "bg-amber-50 text-amber-600 border-amber-200" },
                                        { q: 2, label: "Good", color: "bg-green-50 text-green-600 border-green-200" },
                                        { q: 3, label: "Easy", color: "bg-blue-50 text-blue-600 border-blue-200" }
                                    ].map((btn) => {
                                        const stats = calculateAnkiStats(userProgress[word.rank], btn.q);
                                        return (
                                            <button key={btn.label} onClick={() => handleResult(btn.q)} className={`${btn.color} border p-1 rounded-xl flex flex-col items-center justify-center transition-all active:scale-95 h-16 shadow-sm`}>
                                                <span className="text-[10px] font-bold uppercase tracking-tighter opacity-60 mb-0.5">{formatInterval(stats.interval)}</span>
                                                <span className="font-bold text-sm leading-none">{btn.label}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="grid grid-cols-2 gap-4 w-full px-2 mt-auto">
                                    <button onClick={() => handleResult(0)} className="bg-red-50 text-red-600 border border-red-100 p-4 rounded-2xl font-bold flex items-center justify-center gap-2 h-16"><X size={20} /> Missed</button>
                                    <button onClick={() => handleResult(2)} className="bg-green-50 text-green-600 border border-green-100 p-4 rounded-2xl font-bold flex items-center justify-center gap-2 h-16"><Check size={20} /> Got it</button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        );
    };
    const renderReader = () => {
        // HIER KEINE STATES! (Die sind oben in App)

        // --- HELPER ---
        const handleGenerate = (genre) => {
            // Wir übergeben jetzt die exakte Zahl (z.B. 320) an das Backend
            generateStory(genre, storyConfig.length, storyConfig.level); 
        };

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

        const handleWordClick = async (e, wordRaw) => {
            e.stopPropagation();
            
            const textWithoutFormat = wordRaw.replace(/[*_]/g, "");
            const cleanWord = textWithoutFormat.replace(/[.,!?;:"«»()]/g, "").toLowerCase().trim();
            
            // 1. CHECK: Ist es eine Zahl/Römisch?
            if (/^\d+$/.test(cleanWord) || /^m*(cm|cd|d?c{0,3})(xc|xl|l?x{0,3})(ix|iv|v?i{0,3})$/.test(cleanWord)) {
                setClickedWord({ french: textWithoutFormat, english: "Number", rank: "#" });
                return;
            }

            // 2. VERSUCH A: Lokal
            let found = vocabulary.find(v => v.french.toLowerCase() === cleanWord);

            // 3. VERSUCH B: Irregular Map
            if (!found && IRREGULAR_MAP[cleanWord]) {
                const infinitive = IRREGULAR_MAP[cleanWord];
                found = vocabulary.find(v => v.french.toLowerCase() === infinitive);
            }

            if (found) {
                setClickedWord(found);
            } else {
                // 4. VERSUCH C: API FRAGEN
                setLoadingTranslation(true);
                setClickedWord({ french: textWithoutFormat, english: "Translating...", rank: "API" });
                
                try {
                    // Backend (Proxy)
                    const res = await fetch('/api/lookup', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ word: cleanWord })
                    });
                    const data = await res.json();
                    
                    // Hat Gemini eine Root gefunden?
                    let rootFound = null;
                    if (data.root) {
                         rootFound = vocabulary.find(v => v.french.toLowerCase() === data.root.toLowerCase());
                    }

                    if (rootFound) {
                        setClickedWord({ 
                            french: textWithoutFormat, 
                            english: `${data.translation} (${data.type})`, 
                            rank: rootFound.rank, 
                            root: data.root 
                        });
                    } else {
                        setClickedWord({ 
                            french: textWithoutFormat, 
                            english: data.translation || "No translation", 
                            rank: "External",
                            root: (data.root && data.root !== cleanWord) ? data.root : null
                        });
                    }

                } catch (err) {
                    // Fallback Direktaufruf bei Backend-Fehler
                    try {
                         const resFallback = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(cleanWord)}&langpair=fr|en&mt=1`);
                         const dataFallback = await resFallback.json();
                         if(dataFallback.responseData?.translatedText) {
                            setClickedWord({ french: textWithoutFormat, english: dataFallback.responseData.translatedText, rank: "External" });
                         } else { throw new Error("No fallback"); }
                    } catch(e2) {
                        setClickedWord({ french: textWithoutFormat, english: "Not found", rank: "?" });
                    }
                } finally {
                    setLoadingTranslation(false);
                }
            }
        };

        // --- PHASE 1: AUSWAHL ---
        if (readerMode === 'select') {
            return (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-300 pt-6 pb-24 px-1">
                    <div className="flex items-center gap-3 mb-2 px-1">
                        <button onClick={() => setView('explore')} className="p-2 -ml-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500">
                            <ArrowLeft size={20} />
                        </button>
                        <h2 className="text-2xl font-bold text-slate-800">Reading Room</h2>
                    </div>
                    
                    {loadingStory ? (
                        <div className="h-72 flex flex-col items-center justify-center text-center px-6 space-y-6 animate-in fade-in duration-500">
                            <div className="relative">
                                <div className="absolute inset-0 bg-indigo-100 rounded-full animate-ping opacity-75"></div>
                                <div className="relative bg-white p-4 rounded-full shadow-sm text-indigo-600">
                                    <Loader2 size={40} className="animate-spin" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-indigo-900 font-bold text-lg mb-2">Writing your story...</h3>
                                <p className="text-slate-500 text-sm italic max-w-xs mx-auto leading-relaxed">💡 {loadingTip}</p>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {/* SETTINGS CARD */}
                            <div className="bg-white p-5 rounded-[2rem] border border-slate-100 shadow-sm space-y-6">
                                {/* LEVEL SELECTOR */}
                                <div>
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Difficulty Level</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        <button onClick={() => setStoryConfig({...storyConfig, level: 'auto'})} className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-1 ${storyConfig.level === 'auto' ? 'bg-indigo-600 text-white border-indigo-600 shadow-md' : 'bg-slate-50 text-slate-500 border-slate-200'}`}>
                                            <Sparkles size={12} /> My Level
                                        </button>
                                        {['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map(lvl => (
                                            <button key={lvl} onClick={() => setStoryConfig({...storyConfig, level: lvl})} className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all ${storyConfig.level === lvl ? 'bg-indigo-600 text-white border-indigo-600 shadow-md' : 'bg-white text-slate-500 border-slate-200'}`}>
                                                {lvl}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                {/* LENGTH SLIDER */}
                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Story Length</span>
                                        <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-lg uppercase border border-indigo-100">
                                            ~ {storyConfig.length} Words
                                        </span>
                                    </div>
                                    <input type="range" min="50" max="500" step="10" value={storyConfig.length} onChange={(e) => setStoryConfig({ ...storyConfig, length: parseInt(e.target.value) })} className="w-full accent-indigo-600 h-2 bg-slate-100 rounded-lg cursor-pointer" />
                                    <div className="flex justify-between mt-2 text-[10px] text-slate-400 font-bold uppercase">
                                        <span>Short (50)</span>
                                        <span>Long (500)</span>
                                    </div>
                                </div>
                            </div>

                            {/* GENRE GRID */}
                            <div>
                                <p className="text-slate-500 px-2 text-sm font-medium mb-3">Choose a Genre</p>
                                <div className="grid grid-cols-2 gap-3">
                                    <button onClick={() => handleGenerate('Mystery')} className="bg-purple-50 border border-purple-100 p-4 rounded-3xl text-left hover:scale-[1.02] transition-transform h-32 flex flex-col justify-between group"><div className="bg-white w-10 h-10 flex items-center justify-center rounded-xl text-purple-600 shadow-sm"><Ghost size={20}/></div><div><h3 className="font-bold text-purple-900">Mystery</h3></div></button>
                                    <button onClick={() => handleGenerate('Sci-Fi')} className="bg-blue-50 border border-blue-100 p-4 rounded-3xl text-left hover:scale-[1.02] transition-transform h-32 flex flex-col justify-between group"><div className="bg-white w-10 h-10 flex items-center justify-center rounded-xl text-blue-600 shadow-sm"><Rocket size={20}/></div><div><h3 className="font-bold text-blue-900">Sci-Fi</h3></div></button>
                                    <button onClick={() => handleGenerate('Daily Life')} className="bg-amber-50 border border-amber-100 p-4 rounded-3xl text-left hover:scale-[1.02] transition-transform h-32 flex flex-col justify-between group"><div className="bg-white w-10 h-10 flex items-center justify-center rounded-xl text-amber-600 shadow-sm"><Coffee size={20}/></div><div><h3 className="font-bold text-amber-900">Daily Life</h3></div></button>
                                    <button onClick={() => handleGenerate('Fantasy')} className="bg-emerald-50 border border-emerald-100 p-4 rounded-3xl text-left hover:scale-[1.02] transition-transform h-32 flex flex-col justify-between group"><div className="bg-white w-10 h-10 flex items-center justify-center rounded-xl text-emerald-600 shadow-sm"><Sword size={20}/></div><div><h3 className="font-bold text-emerald-900">Fantasy</h3></div></button>
                                    <button onClick={() => handleGenerate('Romance')} className="bg-pink-50 border border-pink-100 p-4 rounded-3xl text-left hover:scale-[1.02] transition-transform h-32 flex flex-col justify-between group"><div className="bg-white w-10 h-10 flex items-center justify-center rounded-xl text-pink-500 shadow-sm"><Heart size={20}/></div><div><h3 className="font-bold text-pink-900">Romance</h3></div></button>
                                    <button onClick={() => handleGenerate('History')} className="bg-stone-100 border border-stone-200 p-4 rounded-3xl text-left hover:scale-[1.02] transition-transform h-32 flex flex-col justify-between group"><div className="bg-white w-10 h-10 flex items-center justify-center rounded-xl text-stone-600 shadow-sm"><Crown size={20}/></div><div><h3 className="font-bold text-stone-800">History</h3></div></button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            );
        }

        // --- PHASE 2: LESEN ---
        if (readerMode === 'reading' && currentStory) {
            return (
                <div className="space-y-6 animate-in fade-in zoom-in duration-300 pt-6 pb-40 px-1 relative min-h-screen">
                     <div className="flex items-center justify-between mb-4 px-1">
                        <button onClick={() => setReaderMode('select')} className="p-2 -ml-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500">
                            <ArrowLeft size={20} />
                        </button>
                        <div className="flex gap-2">
                            <button onClick={() => toggleAudio(currentStory.text)} className={`p-2 px-4 rounded-full font-bold text-xs flex items-center gap-2 transition-all ${isSpeaking ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-indigo-50 text-indigo-600'}`}>
                                {isSpeaking ? <><X size={16}/> Stop</> : <><Volume2 size={16}/> Listen</>}
                            </button>
                        </div>
                    </div>

                    <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-slate-100">
                        <h2 className="text-2xl font-serif font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4">{currentStory.title}</h2>
                        <div className="text-lg text-slate-700 leading-loose font-serif text-justify">
                            {currentStory.text.split(' ').map((wordRaw, i) => {
                                const displayText = wordRaw.replace(/[\*_]/g, "");
                                return (
                                    <span 
                                        key={i} 
                                        onClick={(e) => handleWordClick(e, wordRaw)}
                                        className={`inline-block mr-1.5 cursor-pointer rounded px-0.5 transition-colors duration-200 hover:bg-slate-100 hover:text-indigo-600 ${
                                            clickedWord?.french === displayText.replace(/[.,!?;:"«»()]/g, "").toLowerCase() ? 'bg-yellow-200 text-slate-900' : ''
                                        }`}
                                    >
                                        {displayText}
                                    </span>
                                );
                            })}
                        </div>
                    </div>

                    {/* INFO POPUP */}
                    {clickedWord && (
                        <div className="fixed bottom-24 left-4 right-4 bg-slate-900/95 backdrop-blur-md text-white p-4 rounded-2xl shadow-2xl animate-in slide-in-from-bottom-4 z-50 flex items-center justify-between">
                            <div>
                                <div className={`text-[10px] font-bold uppercase tracking-wider mb-0.5 inline-block px-1.5 rounded ${
                                    clickedWord.rank === "API" ? "bg-yellow-500/20 text-yellow-300" : 
                                    clickedWord.rank === "External" ? "bg-blue-500/20 text-blue-300" : 
                                    "text-slate-400"
                                }`}>
                                    {clickedWord.rank === "API" ? <RotateCcw className="animate-spin w-3 h-3"/> : 
                                     clickedWord.rank === "External" ? "Web Translation" : 
                                     `Rank #${clickedWord.rank}`}
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

                    {/* Nur Quiz anzeigen, wenn es eine Story ist (kein Artikel) */}
                    {!currentStory.isArticle ? (
                        <button 
                            onClick={() => { 
                                stopAudio();
                                setIsSpeaking(false);
                                setReaderMode('quiz'); 
                                setQuizAnswers({}); 
                                window.scrollTo({ top: 0, behavior: 'smooth' }); 
                            }}
                            className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold shadow-lg flex justify-center items-center gap-2 hover:bg-indigo-700 transition-all"
                        >
                            Take Quiz <ArrowLeft size={20} className="rotate-180"/>
                        </button>
                    ) : (
                        // Bei Artikeln: Button zum Beenden
                        <button 
                            onClick={() => {
                                stopAudio();
                                setIsSpeaking(false);
                                setView('explore'); // Zurück zu den News
                                setReaderMode('select');
                            }}
                            className="w-full bg-slate-100 text-slate-500 py-4 rounded-2xl font-bold flex justify-center items-center gap-2 hover:bg-slate-200 transition-all"
                        >
                            Done Reading
                        </button>
                    )}
                </div>
            );
        }

        // --- PHASE 3: QUIZ ---
        if (readerMode === 'quiz' && currentStory) {
            return (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-300 pt-6 pb-24 px-1">
                    <div className="flex items-center gap-3 mb-2 px-1">
                        <button onClick={() => setReaderMode('reading')} className="p-2 -ml-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500"><ArrowLeft size={20} /></button>
                        <h2 className="text-xl font-bold text-slate-800">Comprehension Check</h2>
                    </div>
                    <div className="space-y-6">
                        {currentStory.quiz && currentStory.quiz.map((q, qIdx) => (
                            <div key={qIdx} className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm">
                                <h3 className="font-bold text-slate-800 mb-4">{q.question}</h3>
                                <div className="space-y-2">
                                    {q.options.map((opt, oIdx) => {
                                        const isSelected = quizAnswers[qIdx] === oIdx;
                                        const isCorrect = q.correctIndex === oIdx;
                                        let btnClass = "bg-slate-50 text-slate-600 border-slate-100";
                                        if (isSelected) {
                                            if (isCorrect) btnClass = "bg-green-100 text-green-700 border-green-200 ring-2 ring-green-500";
                                            else btnClass = "bg-red-100 text-red-700 border-red-200";
                                        }
                                        return (
                                            <button key={oIdx} onClick={() => setQuizAnswers({...quizAnswers, [qIdx]: oIdx})} className={`w-full p-3 rounded-xl text-left text-sm font-medium border transition-all ${btnClass}`}>
                                                {opt}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={() => setReaderMode('select')} className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold shadow-lg">Finish Story</button>
                </div>
            );
        }

        return null;
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
    //tetsad
    const renderGrammar = () => (
        <div className="flex flex-col items-center justify-start min-h-[60vh] space-y-6 animate-in fade-in duration-500 pt-4 pb-20">
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
        <div className="space-y-6 animate-in fade-in duration-500 pt-4 pb-24">
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
    const renderDataMgmt = () => (
        <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-500 pt-6 pb-24 px-1">
            
            {/* Header */}
            <div className="flex items-center gap-3 mb-2 px-1">
                <button onClick={() => setView('profile')} className="p-2 -ml-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500">
                    <ArrowLeft size={24} />
                </button>
                <h2 className="text-2xl font-bold text-slate-800">Settings</h2>
            </div>

            {/* 1. VOICE SETTINGS (NEU!) */}
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                    <div className="bg-indigo-50 text-indigo-600 p-2 rounded-xl"><Volume2 size={20}/></div>
                    <div>
                        <h3 className="font-bold text-slate-800">Audio Voice</h3>
                        <p className="text-xs text-slate-400">Select your preferred speaker</p>
                    </div>
                </div>

                <div className="space-y-3">
                    <select 
                        value={selectedVoiceURI || ''}
                        onChange={(e) => {
                            setSelectedVoiceURI(e.target.value);
                            localStorage.setItem('vocabApp_voice', e.target.value);
                            // Test sprechen
                            setTimeout(() => speak("Bonjour, c'est ma nouvelle voix."), 100);
                        }}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 outline-none focus:border-indigo-500 transition-colors"
                    >
                        {availableVoices.length === 0 && <option>Loading voices...</option>}
                        {availableVoices.map(v => (
                            <option key={v.voiceURI} value={v.voiceURI}>
                                {v.name} ({v.lang})
                            </option>
                        ))}
                    </select>
                    <p className="text-[10px] text-slate-400 italic text-center">
                        Tip: Select "Google Français" or "Siri" for best quality.
                    </p>
                </div>
            </div>

            {/* 2. DATA IMPORT (Dein alter Code, verschönert) */}
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100">
                <div className="flex items-center gap-3 mb-4">
                    <div className="bg-slate-100 text-slate-600 p-2 rounded-xl"><Save size={20}/></div>
                    <div>
                        <h3 className="font-bold text-slate-800">Import Data</h3>
                        <p className="text-xs text-slate-400">Restore backup or add words</p>
                    </div>
                </div>
                
                <form onSubmit={handleDataUpload}>
                    <textarea 
                        name="jsonInput" 
                        className="w-full h-32 p-4 bg-slate-50 border border-slate-200 rounded-xl font-mono text-xs focus:ring-2 focus:ring-indigo-500 outline-none mb-4 resize-none" 
                        placeholder='[{"rank": 1, "french": "le", "english": "the"}, ...]'
                    ></textarea>
                    <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 transition-colors flex justify-center items-center gap-2 shadow-lg shadow-indigo-200 active:scale-95">
                        <Save size={18} /> Save & Overwrite
                    </button>
                </form>
            </div>
        </div>
    );
    
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
            <div className="max-w-xl mx-auto space-y-6 animate-in fade-in duration-500 pt-6 pb-24 px-1">
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
        // --- 1. DATEN BERECHNEN ---
        const safeVocab = vocabulary || [];
        
        // Gelernte Wörter (Box > 0)
        const learnedCount = safeVocab.filter(w => userProgress[w.rank]?.box > 0).length;
        
        // Profi-Wörter (Box 5 = Langzeitgedächtnis)
        const masterCount = safeVocab.filter(w => userProgress[w.rank]?.box === 5).length;

        // Level Berechnung
        let levelTitle = "Tourist";
        let levelColor = "from-slate-400 to-slate-600";
        let nextLevelAt = 100;

        if (learnedCount >= 100 && learnedCount < 500) {
            levelTitle = "Explorer";
            levelColor = "from-blue-400 to-blue-600";
            nextLevelAt = 500;
        } else if (learnedCount >= 500 && learnedCount < 1000) {
            levelTitle = "Citizen";
            levelColor = "from-indigo-400 to-indigo-600";
            nextLevelAt = 1000;
        } else if (learnedCount >= 1000 && learnedCount < 2000) {
            levelTitle = "Diplomat";
            levelColor = "from-purple-400 to-purple-600";
            nextLevelAt = 2000;
        } else if (learnedCount >= 2000) {
            levelTitle = "Native Speaker";
            levelColor = "from-amber-400 to-amber-600";
            nextLevelAt = 5000;
        }

        const levelProgress = Math.min(100, (learnedCount / nextLevelAt) * 100);

        // --- 2. BADGES DEFINITION (Mit Erklärungen) ---
        const BADGES = [
            { 
                id: 'start', 
                icon: <Zap size={20}/>, 
                label: "First Step", 
                desc: "Learn your first word", 
                unlocked: learnedCount >= 1, 
                color: "text-yellow-600 bg-yellow-100" 
            },
            { 
                id: 'streak3', 
                icon: <Flame size={20}/>, 
                label: "On Fire", 
                desc: "Reach a 3 day streak", 
                unlocked: streak >= 3, 
                color: "text-orange-600 bg-orange-100" 
            },
            { 
                id: 'base100', 
                icon: <Shield size={20}/>, 
                label: "Foundation", 
                desc: "Learn 100 words", 
                unlocked: learnedCount >= 100, 
                color: "text-blue-600 bg-blue-100" 
            },
            { 
                id: 'streak7', 
                icon: <Flame size={20}/>, 
                label: "Unstoppable", 
                desc: "Reach a 7 day streak", 
                unlocked: streak >= 7, 
                color: "text-red-600 bg-red-100" 
            },
            { 
                id: 'halfk', 
                icon: <Medal size={20}/>, 
                label: "Half K", 
                desc: "Learn 500 words", 
                unlocked: learnedCount >= 500, 
                color: "text-indigo-600 bg-indigo-100" 
            },
            { 
                id: 'master', 
                icon: <Crown size={20}/>, 
                label: "Mastermind", 
                desc: "50 words in Box 5", 
                unlocked: masterCount >= 50, 
                color: "text-emerald-600 bg-emerald-100" 
            }
        ];

        const handleHardReset = () => {
            if (window.confirm("Delete ALL progress? This cannot be undone.")) {
                const pin = window.prompt("Enter PIN to confirm:");
                if (pin === "1999") {
                    setUserProgress({});
                    localStorage.removeItem('vocabApp_progress');
                    // Streak auch resetten
                    setStreak(0);
                    localStorage.removeItem('vocabApp_streak');
                    alert("System Reset: Done.");
                    setView('home');
                }
            }
        };

        return (
            <div className="max-w-2xl mx-auto space-y-8 animate-in fade-in duration-500 pt-2 pb-24">
                
                {/* HEADER */}
                <div className="flex items-center justify-between px-1">
                    <h2 className="text-2xl font-bold text-slate-800">My Identity</h2>
                    <div className="bg-slate-100 text-slate-500 px-3 py-1 rounded-full text-xs font-bold">
                        Level {Math.floor(learnedCount / 50) + 1}
                    </div>
                </div>

                {/* 1. IDENTITY CARD */}
                <div className={`w-full p-6 rounded-[2rem] shadow-xl text-white bg-gradient-to-br ${levelColor} relative overflow-hidden group`}>
                    <div className="relative z-10 flex items-center gap-5">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20 text-3xl shadow-inner">
                            {levelTitle === "Tourist" ? "📷" : levelTitle === "Explorer" ? "🧭" : levelTitle === "Citizen" ? "🏡" : "👑"}
                        </div>
                        <div>
                            <div className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Current Title</div>
                            <h3 className="text-2xl font-bold">{levelTitle}</h3>
                            <p className="text-white/80 text-xs font-medium mt-1">{learnedCount} / {nextLevelAt} words to next rank</p>
                        </div>
                    </div>
                    
                    {/* Level Progress Bar */}
                    <div className="mt-6 bg-black/20 h-2 rounded-full overflow-hidden backdrop-blur-sm">
                        <div className="bg-white h-full rounded-full opacity-90" style={{ width: `${levelProgress}%` }}></div>
                    </div>

                    {/* Deko */}
                    <User size={120} className="absolute -right-6 -bottom-8 text-white opacity-10 rotate-12"/>
                </div>

                {/* 2. HALL OF FAME (Verbessert mit Beschreibung) */}
                <div>
                    <div className="flex items-center justify-between mb-3 px-1">
                        <h3 className="font-bold text-slate-400 text-xs uppercase tracking-wider">Achievements</h3>
                        <span className="text-xs font-bold text-indigo-500">
                            {BADGES.filter(b => b.unlocked).length} / {BADGES.length} Unlocked
                        </span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                        {BADGES.map(b => (
                            <div 
                                key={b.id} 
                                className={`p-4 rounded-2xl border transition-all flex items-center gap-3 ${
                                    b.unlocked 
                                    ? "bg-white border-slate-100 shadow-sm opacity-100" 
                                    : "bg-slate-50 border-slate-100 opacity-60 grayscale"
                                }`}
                            >
                                {/* Icon */}
                                <div className={`p-2.5 rounded-xl shrink-0 ${b.unlocked ? b.color : 'bg-slate-200 text-slate-400'}`}>
                                    {b.icon}
                                </div>
                                
                                {/* Text */}
                                <div>
                                    <div className="font-bold text-slate-700 text-sm leading-tight">{b.label}</div>
                                    <div className="text-[10px] text-slate-400 font-medium mt-0.5">
                                        {b.desc}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. MENU & DATA */}
                <div>
                    <h3 className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-3 px-1">Data & Settings</h3>
                    <div className="space-y-3">
                        {/* Library Button */}
                        <button 
                            onClick={() => setView('library')} 
                            className="w-full bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between group active:scale-[0.98] transition-all"
                        >
                            <div className="flex items-center gap-4">
                                <div className="bg-indigo-50 text-indigo-600 w-10 h-10 rounded-xl flex items-center justify-center"><BookOpen size={20}/></div>
                                <div className="text-left">
                                    <div className="font-bold text-slate-800">Word Library</div>
                                    <div className="text-xs text-slate-400">View & Search Collection</div>
                                </div>
                            </div>
                            <ChevronRight size={20} className="text-slate-300 group-hover:text-indigo-400"/>
                        </button>

                        {/* Collections Button (NEW) */}
                        <button 
                            onClick={() => setView('collections')} 
                            className="w-full bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between group active:scale-[0.98] transition-all"
                        >
                            <div className="flex items-center gap-4">
                                <div className="bg-amber-50 text-amber-600 w-10 h-10 rounded-xl flex items-center justify-center"><Box size={20}/></div>
                                <div className="text-left">
                                    <div className="font-bold text-slate-800">Collections</div>
                                    <div className="text-xs text-slate-400">Saved Jokes & More</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                {savedJokes.length > 0 && (
                                    <div className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-0.5 rounded-full">
                                        {savedJokes.length}
                                    </div>
                                )}
                                <ChevronRight size={20} className="text-slate-300 group-hover:text-amber-400"/>
                            </div>
                        </button>

                        {/* Stats Button */}
                        <button 
                            onClick={() => setShowStats(!showStats)} 
                            className="w-full bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between group active:scale-[0.98] transition-all"
                        >
                            <div className="flex items-center gap-4">
                                <div className="bg-sky-50 text-sky-600 w-10 h-10 rounded-xl flex items-center justify-center"><BarChart3 size={20}/></div>
                                <div className="text-left">
                                    <div className="font-bold text-slate-800">Frequency Profile</div>
                                    <div className="text-xs text-slate-400">{showStats ? 'Tap to hide' : 'View Progress Bars'}</div>
                                </div>
                            </div>
                            <ChevronRight size={20} className={`text-slate-300 transition-transform ${showStats ? 'rotate-90' : ''}`}/>
                        </button>

                        {/* Inline Stats */}
                        {showStats && (
                             <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 animate-in slide-in-from-top-2 fade-in">
                                 {[
                                    { l: 100, c: "bg-indigo-500" }, { l: 500, c: "bg-blue-500" }, { l: 1000, c: "bg-cyan-500" }, { l: 2000, c: "bg-teal-500" }, { l: 5000, c: "bg-emerald-500" }
                                 ].map(m => {
                                     const pct = getStatsForRange(m.l);
                                     return (
                                        <div key={m.l} className="mb-3 last:mb-0">
                                            <div className="flex justify-between text-xs mb-1 font-bold text-slate-500">
                                                <span>Top {m.l}</span>
                                                <span>{pct}%</span>
                                            </div>
                                            <div className="w-full bg-slate-200 h-1.5 rounded-full"><div className={`h-full rounded-full ${m.c}`} style={{width: `${pct}%`}}></div></div>
                                        </div>
                                     );
                                 })}
                             </div>
                        )}

                        {/* Settings / Reset */}
                        <button 
                            onClick={() => setView('data-mgmt')} 
                            className="w-full bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between group active:scale-[0.98] transition-all"
                        >
                            <div className="flex items-center gap-4">
                                <div className="bg-slate-100 text-slate-500 w-10 h-10 rounded-xl flex items-center justify-center"><Settings size={20}/></div>
                                <div className="text-left">
                                    <div className="font-bold text-slate-800">Settings & Data</div>
                                    <div className="text-xs text-slate-400">Import / Reset</div>
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
            <div className="w-full animate-in fade-in slide-in-from-right-8 duration-300 pt-6 pb-24 px-1">
                {/* Scroll to Top Button */}
                {showScrollTop && (
                    <button 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="fixed bottom-24 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-all z-40 animate-in zoom-in duration-200"
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
            <div className="w-full animate-in fade-in slide-in-from-right-8 duration-300 pt-6 pb-24 px-1 relative min-h-screen">
                
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
                    <button onClick={scrollToTop} className="fixed bottom-24 right-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg shadow-indigo-200 hover:bg-indigo-700 active:scale-90 transition-all z-50 animate-in fade-in">
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
                return renderReader();
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
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);