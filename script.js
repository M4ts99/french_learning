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
const Medal = (p) => <Icon {...p} path={<><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></>} />;
const ArrowLeft = (p) => <Icon {...p} path={<><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></>} />;
const ArrowUp = (p) => <Icon {...p} path={<><path d="m18 15-6-6-6 6"/></>} />;
const ArrowDown = (p) => <Icon {...p} path={<><path d="m6 9 6 6 6-6"/></>} />;
const ArrowUpDown = (p) => <Icon {...p} path={<><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></>} />;
const Hash = (p) => <Icon {...p} path={<><line x1="4" x2="20" y1="9" y2="9"/><line x1="4" x2="20" y1="15" y2="15"/><line x1="10" x2="8" y1="3" y2="21"/><line x1="16" x2="14" y1="3" y2="21"/></>} />;
const Ghost = (p) => <Icon {...p} path={<><path d="M9 22a7 7 0 1 0 0-14h6a7 7 0 1 0 0 14z"/><path d="M9 22v-6.63a3.5 3.5 0 0 0-2.06-6.05"/><path d="M15 22v-6.63a3.5 3.5 0 0 0 2.06-6.05"/><circle cx="10" cy="12" r="1"/><circle cx="14" cy="12" r="1"/></>} />;
const Rocket = (p) => <Icon {...p} path={<><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.1 4-1 4-1s-1 2.4-4 4z"/><path d="M12 15v5s3.03-.55 4-2c1.1-1.62 1-4 1-4s-2.4 1-4 4z"/></>} />;
const Sword = (p) => <Icon {...p} path={<><polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5"/><line x1="13" x2="19" y1="19" y2="13"/><line x1="16" x2="20" y1="16" y2="20"/><line x1="19" x2="21" y1="21" y2="19"/></>} />;


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
// --- GRAMMAR DATA ---
const GRAMMAR_MODULES = [
    { 
        id: 'basics', 
        title: 'The Basics', 
        sub: 'Nouns, Articles & Numbers',
        icon: <Box size={24}/>, 
        color: 'bg-blue-50 text-blue-600',
        topics: ['Articles (le/la)', 'Plural Forms', 'Adjectives', 'Numbers 1-100'] 
    },
    { 
        id: 'tenses', 
        title: 'Time Travel', 
        sub: 'Verbs & Tenses',
        icon: <RotateCcw size={24}/>, 
        color: 'bg-purple-50 text-purple-600',
        topics: ['Le Présent', 'Avoir & Être', 'Passé Composé', 'Imparfait', 'Le Futur'] 
    },
    { 
        id: 'structure', 
        title: 'Architecture', 
        sub: 'Sentence Building',
        icon: <Layers size={24}/>, 
        color: 'bg-emerald-50 text-emerald-600',
        topics: ['Asking Questions', 'Negation (ne...pas)', 'Pronouns', 'Prepositions'] 
    }
];


// --- NEW COMPONENTS ---
// --- NEW COMPONENTS ---
const ModernTranslator = () => {
    const [mode, setMode] = useState('translate'); // 'translate' oder 'coach'
    const [direction, setDirection] = useState('fr-en'); // 'fr-en' (Französisch -> Englisch) oder 'en-fr'
    const [input, setInput] = useState('');
    
    // Ergebnis States
    const [translationData, setTranslationData] = useState(null); // Für Translator
    const [correctionData, setCorrectionData] = useState(null);   // Für Coach
    
    const [loading, setLoading] = useState(false);


    // --- LOGIC: TRANSLATE ---
    const handleTranslate = async () => {
        if (!input.trim()) return;
        setLoading(true);
        setTranslationData(null); // Reset
        
        try {
            // Wir sagen dem Backend, in welche Sprache es gehen soll
            const target = direction === 'en-fr' ? 'fr' : 'en';
            
            const res = await fetch('/api/translate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: input.trim(), targetLang: target })
            });
            const data = await res.json();
            setTranslationData(data); // Erwartet: { translation: "...", examples: [...] }
        } catch (err) {
            alert("Translation failed. Check connection.");
        } finally {
            setLoading(false);
        }
    };

    // --- LOGIC: CORRECT ---
    const handleCorrection = async () => {
        if (!input.trim()) return;
        setLoading(true);
        setCorrectionData(null); // Reset

        try {
            const res = await fetch('/api/correct', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: input.trim() })
            });
            const data = await res.json();
            setCorrectionData(data); // Erwartet: { corrected: "...", explanation: "..." }
        } catch (err) {
            alert("Correction failed.");
        } finally {
            setLoading(false);
        }
    };
    const renderTopicHub = () => {
        // Welches Thema wurde gewählt?
        const topicConfig = COLLECTIONS.topics.find(t => t.id === selectedTopicId);
        const content = TOPIC_CONTENT[selectedTopicId]; // Inhalte laden

        if (!topicConfig) return <div>Topic not found</div>;

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
                    
                    <div className="flex flex-col items-center justify-center pt-4 pb-6 bg-gradient-to-b from-emerald-50 to-white rounded-[2.5rem]">
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

    // --- NEU: Custom Switcher Button Design ---
    const SwitcherButton = () => {
        const isFrToEn = direction === 'fr-en';
        
        return (
            <div className="flex items-center gap-2 p-1 bg-white rounded-xl shadow-sm border border-slate-200">
                {/* Linke Sprache (Quelle) */}
                <div className="px-4 py-2 bg-slate-50 rounded-lg text-slate-700 font-bold text-sm flex items-center gap-2 transition-all">
                    {isFrToEn ? '🇫🇷 French' : '🇬🇧/🇩🇪 English/German'}
                </div>
                
                {/* Swap Icon */}
                <button 
                    onClick={() => setDirection(prev => prev === 'en-fr' ? 'fr-en' : 'en-fr')}
                    className="p-2 rounded-full hover:bg-slate-100 text-indigo-500 active:scale-90 transition-all"
                >
                    <RotateCcw size={20} className="text-indigo-600" />
                </button>
                
                {/* Rechte Sprache (Ziel) */}
                <div className="px-4 py-2 bg-slate-50 rounded-lg text-slate-700 font-bold text-sm flex items-center gap-2 transition-all">
                    {isFrToEn ? '🇬🇧 English' : '🇫🇷 French'}
                </div>
            </div>
        );
    };

    return (
        <div className="w-full max-w-xl mx-auto space-y-6">
            
            {/* 1. MODE SWITCHER (Tabs) */}
            <div className="bg-slate-200 p-1 rounded-2xl flex shadow-sm">
                <button 
                    onClick={() => { setMode('translate'); setInput(''); setTranslationData(null); }}
                    className={`flex-1 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${mode === 'translate' ? 'bg-white text-indigo-600 shadow-sm scale-[1.02]' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    <ArrowLeftRight size={18}/> Translator
                </button>
                <button 
                    onClick={() => { setMode('coach'); setInput(''); setCorrectionData(null); }}
                    className={`flex-1 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${mode === 'coach' ? 'bg-white text-emerald-600 shadow-sm scale-[1.02]' : 'text-slate-500 hover:text-slate-700'}`}
                >
                    <MessageSquare size={18}/> Writing Coach
                </button>
            </div>

            {/* 2. INPUT CARD */}
            <div className="bg-white rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 overflow-hidden">
                
                {/* Header mit Controls */}
                <div className="bg-slate-50/80 px-4 py-3 border-b border-slate-100 flex justify-between items-center backdrop-blur-sm">
                    {mode === 'translate' ? (
                        // HIER IST DER NEUE SWITCHER
                        <SwitcherButton />
                    ) : (
                        <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-lg">
                            <PenTool size={16}/> Write in French
                        </span>
                    )}
                    
                    {input && <button onClick={() => setInput('')} className="p-2 bg-slate-200 rounded-full hover:bg-slate-300 text-slate-500 transition-colors"><X size={16}/></button>}
                </div>

                <textarea 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={mode === 'translate' ? "Enter text here..." : "Ecrivez quelque chose en français..."}
                    className="w-full h-40 p-5 text-lg text-slate-700 outline-none resize-none bg-transparent placeholder-slate-400 font-medium"
                />

                <div className="px-4 py-4 border-t border-slate-50 flex justify-end bg-slate-50/50">
                    <button 
                        onClick={mode === 'translate' ? handleTranslate : handleCorrection} 
                        disabled={loading || !input}
                        className={`rounded-xl px-8 py-3 font-bold text-white transition-all flex items-center gap-2 text-base ${
                            loading || !input 
                            ? 'bg-slate-300 cursor-not-allowed' 
                            : mode === 'translate' ? 'bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-200 active:scale-[0.98]' : 'bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-200 active:scale-[0.98]'
                        }`}
                    >
                        {loading ? <RotateCcw className="animate-spin" size={20}/> : <Play size={20} fill="currentColor"/>}
                        {mode === 'translate' ? 'Translate' : 'Check Grammar'}
                    </button>
                </div>
            </div>

            {/* 3. RESULTS AREA (Unverändert, sieht schon gut aus) */}
            
            {/* A) TRANSLATOR RESULT */}
            {mode === 'translate' && translationData && (
                <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
                    {/* Main Translation */}
                    <div className="bg-indigo-50 rounded-3xl border border-indigo-100 p-6 relative shadow-sm">
                        <button onClick={() => speak(translationData.translation)} className="absolute top-4 right-4 p-2 text-indigo-400 hover:text-indigo-700 bg-indigo-100 rounded-full transition-colors"><Volume2 size={20}/></button>
                        <span className="text-xs font-bold text-indigo-300 uppercase tracking-wide block mb-2">Translation</span>
                        <p className="text-3xl text-indigo-900 font-serif leading-snug">{translationData.translation}</p>
                    </div>

                    {/* Auto-Examples */}
                    {translationData.examples && (
                        <div className="bg-white rounded-3xl border border-slate-100 p-5 shadow-md shadow-slate-100/50">
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-4 flex items-center gap-2">
                                <Sparkles size={16} className="text-amber-400"/> Context Examples
                            </h4>
                            <div className="space-y-3">
                                {translationData.examples.map((ex, idx) => (
                                    <div key={idx} className="bg-slate-50 p-4 rounded-xl relative group hover:bg-indigo-50 transition-colors">
                                        <div className="pr-8">
                                            <p className="text-slate-800 font-bold text-lg leading-snug mb-1">{ex.fr}</p>
                                            <p className="text-slate-500 text-sm italic">{ex.en}</p>
                                        </div>
                                        <button onClick={() => speak(ex.fr)} className="absolute right-3 top-3 p-2 text-slate-400 group-hover:text-indigo-600 bg-white rounded-full shadow-sm transition-all opacity-0 group-hover:opacity-100"><Volume2 size={18}/></button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* B) COACH RESULT */}
            {mode === 'coach' && correctionData && (
                <div className="space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
                    {/* Correction */}
                    <div className="bg-emerald-50 rounded-3xl border border-emerald-100 p-6 shadow-sm relative">
                        <button onClick={() => speak(correctionData.corrected)} className="absolute top-4 right-4 p-2 text-emerald-400 hover:text-emerald-700 bg-emerald-100 rounded-full transition-colors"><Volume2 size={20}/></button>
                        <span className="text-xs font-bold text-emerald-400 uppercase tracking-wide block mb-2 flex items-center gap-2"><Check size={16}/> Corrected Version</span>
                        <p className="text-3xl text-emerald-900 font-medium leading-snug">{correctionData.corrected}</p>
                    </div>
                    {/* Explanation */}
                    <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-md shadow-slate-100/50">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wide block mb-2 flex items-center gap-2"><Info size={16}/> Teacher's Note</span>
                        <p className="text-slate-700 text-base leading-relaxed bg-slate-50 p-4 rounded-xl border-l-4 border-indigo-400">{correctionData.explanation}</p>
                    </div>
                </div>
            )}

        </div>
    );
};
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
    //     // State für Scroll-Button
    const [showScrollTop, setShowScrollTop] = useState(false);
    // --- STATE MANAGEMENT ---
    // ... deine anderen States ...
    const [availableVoices, setAvailableVoices] = useState([]); // Liste aller Stimmen
    const [selectedVoiceURI, setSelectedVoiceURI] = useState(null); // Die gewählte Stimme

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
    const renderHome = () => {
        // --- DATEN ---
        const safeVocab = vocabulary || [];
        const totalLearned = safeVocab.filter(w => userProgress[w.rank]?.box > 0).length;
        
        const weakWords = safeVocab.filter(w => {
            const p = userProgress[w.rank];
            return p && (p.box === 1 || (p.wrongCount && p.wrongCount >= 2));
        });
        const hasWeakWords = weakWords.length > 0;

        const now = new Date();
        const hour = now.getHours();
        const dateKey = `${now.getDate()}-${now.getMonth() + 1}`; 
        const dateString = now.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' }).toUpperCase();

        const SPECIAL_DATES = {
            "1-1": { title: "Bonne Année !", icon: "🎉" },
            "14-7": { title: "Fête Nationale !", icon: "🎆" },
            "25-12": { title: "Joyeux Noël !", icon: "🎄" },
        };

        let greeting = hour < 12 ? "Bon matin" : hour < 18 ? "Bonne après-midi" : "Bonsoir";
        let icon = hour < 12 ? "☕" : hour < 18 ? "☀️" : "🌙";

        if (SPECIAL_DATES[dateKey]) {
            greeting = SPECIAL_DATES[dateKey].title;
            icon = SPECIAL_DATES[dateKey].icon;
        }

        // Facts
        const FRANCE_FACTS = [
            "Did you know? French is spoken in 29 countries.",
            "Paris has over 400 parks and gardens.",
            "The Louvre is the most visited museum in the world.",
            "French has no word for 'cheap' (only 'bon marché').",
            "Croissants were actually invented in Austria.",
            "Louis XIX was King of France for just 20 minutes."
        ];
        const dayOfYear = Math.floor(Date.now() / 86400000);
        const dailyFact = FRANCE_FACTS[dayOfYear % FRANCE_FACTS.length];

        // Grammar Tip
        const GRAMMAR_TIPS = [
            { title: "C'est vs. Il est", text: "Use 'C'est' for nouns. Use 'Il est' for adjectives." },
            { title: "Pas de vs. Pas du", text: "After a negative (ne...pas), always use 'de', never 'du'." }
        ];
        const dailyTip = GRAMMAR_TIPS[dayOfYear % GRAMMAR_TIPS.length];

        return (
            <div className="pb-24">
                
                {/* --- STICKY HEADER (Mit Fact) --- */}
                <div className="sticky top-0 z-40 bg-slate-50/95 backdrop-blur-xl border-b border-slate-200 -mx-5 -mt-6 px-6 pt-12 pb-4 mb-5 shadow-sm">
                    
                    <div className="flex justify-between items-start mb-2">
                        <div>
                            <div className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-1 opacity-90">
                                {dateString}
                            </div>
                            <h1 className="text-2xl font-extrabold text-slate-800 leading-tight">
                                {greeting} <span className="ml-1">{icon}</span>
                            </h1>
                        </div>
                        
                        {/* STREAK */}
                        <div className="flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-full border border-slate-200 shadow-sm shrink-0">
                            <Flame size={14} className="text-orange-500 fill-orange-500 animate-pulse" />
                            <span className="font-bold text-slate-700 text-xs">{streak}</span>
                        </div>
                    </div>

                    {/* FACT (Jetzt im Header) */}
                    <div className="mt-3 flex items-start gap-2 opacity-80">
                        <div className="min-w-[3px] h-full bg-indigo-300 rounded-full"></div>
                        <p className="text-xs text-slate-500 italic leading-snug">
                            "{dailyFact}"
                        </p>
                    </div>
                </div>

                {/* --- SCROLLABLE CONTENT --- */}
                <div className="space-y-4 px-1">

                    {/* 1. PROGRESS CARD (Wieder als eigene Karte unter dem Header) */}
                    {(() => {
                        const milestones = [
                            { limit: 100, label: "Foundation", color: "bg-indigo-500" },
                            { limit: 500, label: "Essentials", color: "bg-blue-500" },
                            { limit: 1000, label: "Base", color: "bg-cyan-500" },
                            { limit: 2000, label: "Extension", color: "bg-teal-500" },
                            { limit: 5000, label: "Mastery", color: "bg-emerald-500" },
                        ];
                        let cm = milestones[0];
                        for (let m of milestones) { if (totalLearned < (m.limit * 0.95)) { cm = m; break; } cm = m; }
                        const pct = Math.min(100, (totalLearned / cm.limit) * 100);

                        return (
                            <div className="bg-white px-5 py-4 rounded-[1.5rem] shadow-sm border border-slate-100 relative overflow-hidden flex items-center justify-between">
                                <div className="flex flex-col justify-center gap-1 z-10 w-full">
                                    <div className="flex justify-between items-center">
                                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                                            <Trophy size={14} className="text-amber-500"/>
                                            {cm.label}
                                        </div>
                                        <div className="text-xs font-bold text-slate-700">
                                            {totalLearned} <span className="text-slate-300 font-normal">/ {cm.limit}</span>
                                        </div>
                                    </div>
                                    {/* Balken */}
                                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden mt-1">
                                        <div className={`h-full rounded-full transition-all duration-1000 ease-out ${cm.color}`} style={{ width: `${pct}%` }}></div>
                                    </div>
                                </div>
                            </div>
                        );
                    })()}

                    {/* 2. HERO: START LOOP */}
                    <button 
                        onClick={() => setView('smart-config')} 
                        className="w-full h-44 bg-gradient-to-br from-indigo-600 to-violet-600 text-white p-6 rounded-[2rem] shadow-xl shadow-indigo-200 transition-transform active:scale-[0.98] flex flex-col justify-between relative overflow-hidden group"
                    >
                        <div className="relative z-10 flex justify-between items-start w-full">
                            <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-md">
                                <Play size={28} fill="currentColor" />
                            </div>
                            <div className="bg-indigo-500/30 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-md border border-white/10">
                                Priority
                            </div>
                        </div>
                        <div className="relative z-10 text-left">
                            <h2 className="text-2xl font-bold mb-1">Start Daily Loop</h2>
                            <p className="text-indigo-100 text-sm font-medium opacity-90">Continue your streak.</p>
                        </div>
                        <GraduationCap size={140} className="absolute -right-6 -bottom-6 text-white opacity-10 rotate-[-15deg] group-hover:scale-110 transition-transform duration-500" />
                    </button>

                    {/* 3. REPAIR CARD */}
                    <button 
                        onClick={() => {
                            if (hasWeakWords) {
                                setSessionQueue(weakWords.slice(0, 20));
                                setIsFlipped(false);
                                setSessionResults({ correct: 0, wrong: 0 });
                                setView('smart-session');
                            } else {
                                alert("All words are healthy! Great job.");
                            }
                        }} 
                        className={`w-full p-5 rounded-[2rem] flex items-center justify-between group active:scale-[0.98] transition-all relative overflow-hidden shadow-sm border ${
                            hasWeakWords ? 'bg-rose-50 border-rose-100' : 'bg-emerald-50/50 border-emerald-100/50'
                        }`}
                    >
                        <div className="flex items-center gap-4 z-10">
                            <div className={`w-12 h-12 flex items-center justify-center rounded-2xl transition-colors ${hasWeakWords ? 'bg-rose-100 text-rose-600' : 'bg-emerald-100 text-emerald-600'}`}>
                                {hasWeakWords ? <Activity size={24} /> : <Check size={24} />}
                            </div>
                            <div className="text-left">
                                <h3 className={`font-bold text-lg ${hasWeakWords ? 'text-rose-900' : 'text-emerald-900'}`}>{hasWeakWords ? 'Weak Words' : 'All Good!'}</h3>
                                <p className={`text-xs font-medium ${hasWeakWords ? 'text-rose-700/70' : 'text-emerald-700/70'}`}>{hasWeakWords ? `${weakWords.length} words need repair` : 'No weak words found'}</p>
                            </div>
                        </div>
                        {hasWeakWords && <ChevronRight size={24} className="text-rose-300 z-10" />}
                    </button>

                    {/* 4. DAILY CHALLENGE */}
                    <button 
                        onClick={() => {
                            setTestConfig({ startRank: 1, endRank: 2000, count: 10 }); 
                            startTestSession();
                        }} 
                        className="w-full bg-white border border-slate-100 p-5 rounded-[2rem] shadow-sm flex items-center justify-between group active:scale-[0.98] transition-all"
                    >
                        <div className="flex items-center gap-4">
                            <div className="bg-amber-100 w-12 h-12 flex items-center justify-center rounded-2xl text-amber-600"><Flame size={24} fill="currentColor" /></div>
                            <div className="text-left">
                                <h3 className="font-bold text-slate-800 text-lg">Daily Challenge</h3>
                                <p className="text-slate-400 text-xs font-medium">Earn quick XP • 10 Words</p>
                            </div>
                        </div>
                        <ChevronRight size={24} className="text-slate-200 group-hover:text-amber-400 transition-colors" />
                    </button>

                    {/* 5. GRAMMAR TIP */}
                    <button 
                        onClick={() => setView('skills')} 
                        className="w-full bg-slate-50 border border-slate-200 p-6 rounded-[2rem] text-left active:scale-[0.98] transition-all relative"
                    >
                        <div className="flex items-center gap-2 mb-3">
                            <div className="bg-slate-200 text-slate-500 p-1.5 rounded-lg"><BookOpen size={14} /></div>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tip of the day</span>
                        </div>
                        <h3 className="font-bold text-slate-700 text-lg mb-1">{dailyTip.title}</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">{dailyTip.text}</p>
                    </button>

                </div>
            </div>
        );
    };
    const renderExplore = () => {
        // HINWEIS: Kein useState hier! Wir nutzen "exploreMode" aus der App().

        // Helper: Berechnet den Fortschritt für eine Kategorie
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

        // --- ANSICHT 1: HAUPTMENÜ ---
        if (exploreMode === 'main') {
            return (
                <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-500 pt-6 pb-24 px-1">
                    <div className="flex items-center gap-3 mb-2 px-1">
                        <div className="bg-indigo-100 p-2 rounded-full text-indigo-600"><Compass size={24} /></div>
                        <h2 className="text-2xl font-bold text-slate-800">Explore</h2>
                    </div>

                    {/* Stories */}
                    <button onClick={() => setView('reader')} className="w-full bg-amber-50 border border-amber-100 p-6 rounded-[2rem] text-left active:scale-[0.98] transition-all relative overflow-hidden group shadow-sm">
                        <div className="relative z-10 flex items-start gap-4">
                            <div className="bg-white p-3 rounded-2xl text-amber-500 shadow-sm"><BookCheck size={28} /></div>
                            <div><h3 className="font-bold text-amber-900 text-xl">Reading Room</h3><p className="text-amber-700/70 text-sm font-medium mt-1">Interactive Stories • A1-B1</p></div>
                        </div>
                        <BookOpen size={100} className="absolute -right-4 -bottom-6 text-amber-100 opacity-60 rotate-12 group-hover:scale-110 transition-transform"/>
                    </button>

                    {/* News */}
                    <button onClick={() => setView('culture')} className="w-full bg-rose-50 border border-rose-100 p-6 rounded-[2rem] text-left active:scale-[0.98] transition-all relative overflow-hidden group shadow-sm">
                        <div className="relative z-10 flex items-start gap-4">
                            <div className="bg-white p-3 rounded-2xl text-rose-500 shadow-sm"><Activity size={28} /></div>
                            <div><h3 className="font-bold text-rose-900 text-xl">Culture Feed</h3><p className="text-rose-700/70 text-sm font-medium mt-1">News & Memes from France</p></div>
                        </div>
                        <Sparkles size={100} className="absolute -right-4 -bottom-6 text-rose-100 opacity-60 rotate-12 group-hover:scale-110 transition-transform"/>
                    </button>

                    {/* Vocab Sets */}
                    <button onClick={() => setExploreMode('grammar')} className="w-full bg-indigo-50 border border-indigo-100 p-6 rounded-[2rem] text-left active:scale-[0.98] transition-all relative overflow-hidden group shadow-sm">
                        <div className="relative z-10 flex items-start gap-4">
                            <div className="bg-white p-3 rounded-2xl text-indigo-500 shadow-sm"><Layers size={28} /></div>
                            <div><h3 className="font-bold text-indigo-900 text-xl">Vocabulary Sets</h3><p className="text-indigo-700/70 text-sm font-medium mt-1">Verbs, Nouns, Adjectives</p></div>
                        </div>
                        <ChevronRight size={24} className="absolute right-6 top-1/2 -translate-y-1/2 text-indigo-200" />
                    </button>

                    {/* Topics */}
                    <button onClick={() => setExploreMode('topics')} className="w-full bg-emerald-50 border border-emerald-100 p-6 rounded-[2rem] text-left active:scale-[0.98] transition-all relative overflow-hidden group shadow-sm">
                        <div className="relative z-10 flex items-start gap-4">
                            <div className="bg-white p-3 rounded-2xl text-emerald-500 shadow-sm"><User size={28} /></div>
                            <div><h3 className="font-bold text-emerald-900 text-xl">Real Life Topics</h3><p className="text-emerald-700/70 text-sm font-medium mt-1">Food, Travel, Work & more</p></div>
                        </div>
                        <ChevronRight size={24} className="absolute right-6 top-1/2 -translate-y-1/2 text-emerald-200" />
                    </button>
                </div>
            );
        }

        // --- ANSICHT 2: LISTEN ---
        const activeCollection = exploreMode === 'grammar' ? COLLECTIONS.grammar : COLLECTIONS.topics;
        const pageTitle = exploreMode === 'grammar' ? "Vocab Sets" : "Real Life Topics";

        return (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-300 pt-6 pb-24 px-1 h-full">
                <div className="flex items-center gap-3 mb-2 px-1">
                    <button onClick={() => setExploreMode('main')} className="p-2 -ml-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500">
                        <ArrowLeft size={20} />
                    </button>
                    <h2 className="text-2xl font-bold text-slate-800">{pageTitle}</h2>
                </div>

                <div className="grid gap-3">
                    {activeCollection.map((item) => {
                        const progress = getCategoryProgress(item.ids);
                        const stats = getCategoryStats(item.ids);
                        
                        return (
                            <button 
                                key={item.id} 
                                onClick={() => {
                                    if (exploreMode === 'grammar') {
                                        startCollectionSession(item.ids);
                                    } else {
                                        setSelectedTopicId(item.id);
                                        setView('topic-hub');
                                    }
                                }}
                                className="w-full bg-white p-4 rounded-3xl border border-slate-100 shadow-sm active:scale-[0.98] transition-all flex items-center gap-4 group"
                            >
                                <div className={`w-14 h-14 flex items-center justify-center rounded-2xl shrink-0 ${exploreMode === 'grammar' ? 'bg-indigo-50 text-indigo-600' : 'bg-emerald-50 text-emerald-600'}`}>
                                    {item.icon}
                                </div>
                                <div className="flex-1 text-left">
                                    <div className="flex justify-between items-center mb-1">
                                        <h3 className="font-bold text-slate-800">{item.label}</h3>
                                        <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-2 py-0.5 rounded-full">{stats}</span>
                                    </div>
                                    <div className="text-xs text-slate-400 mb-2">{item.sub}</div>
                                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                                        <div className={`h-full rounded-full transition-all duration-1000 ${exploreMode === 'grammar' ? 'bg-indigo-500' : 'bg-emerald-500'}`} style={{ width: `${progress}%` }}></div>
                                    </div>
                                </div>
                                <ChevronRight size={20} className="text-slate-200 group-hover:text-slate-400 transition-colors"/>
                            </button>
                        );
                    })}
                </div>
            </div>
        );
    };
    const renderSkills = () => {
        // Lokaler State für das Akkordeon (welche Kategorie ist offen?)
        

        const toggleCategory = (id) => {
            setExpandedCategory(expandedCategory === id ? null : id);
        };

        return (
            <div className="space-y-8 animate-in fade-in duration-500 pt-4 pb-24">
                {/* Header */}
                <div className="flex items-center gap-3 mb-2 px-1">
                     <div className="bg-indigo-100 p-2 rounded-full text-indigo-600"><Dumbbell size={24} /></div>
                     <h2 className="text-2xl font-bold text-slate-800">Skill Gym</h2>
                </div>

                {/* 1. HERO: AI CONVERSATION (Chat) */}
                <button 
                    onClick={() => alert("AI Chat coming soon! Imagine chatting with a virtual barista here.")} 
                    className="w-full h-40 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white p-6 rounded-[2rem] shadow-xl shadow-fuchsia-200 transition-transform active:scale-[0.98] relative overflow-hidden group text-left"
                >
                    <div className="relative z-10">
                        <div className="bg-white/20 w-12 h-12 flex items-center justify-center rounded-2xl mb-3 backdrop-blur-md">
                            <MessageSquare size={24} fill="currentColor" />
                        </div>
                        <h3 className="font-bold text-2xl">Conversation Coach</h3>
                        <p className="text-fuchsia-100 text-sm font-medium opacity-90">Roleplay: Ordering Coffee</p>
                    </div>
                    {/* Deko */}
                    <div className="absolute -right-4 -bottom-8 opacity-20 rotate-12 group-hover:scale-110 transition-transform duration-700">
                         <MessageSquare size={120} fill="currentColor"/>
                    </div>
                </button>

                {/* 2. TOOLS ROW */}
                <div>
                    <h3 className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-3 px-1">The Toolbox</h3>
                    <div className="grid grid-cols-2 gap-3">
                        {/* Link zum Translator */}
                        <button 
                            onClick={() => setView('translator')} 
                            className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm active:scale-[0.98] flex flex-col justify-between h-32 text-left group hover:border-indigo-200 transition-all"
                        >
                            <div className="bg-indigo-50 w-10 h-10 flex items-center justify-center rounded-xl text-indigo-600 group-hover:scale-110 transition-transform">
                                <PenTool size={20} />
                            </div>
                            <div>
                                <div className="font-bold text-slate-700">Translator</div>
                                <div className="text-[10px] text-slate-400">Context & Fixes</div>
                            </div>
                        </button>

                        {/* Placeholder Conjugator */}
                        <button 
                            onClick={() => alert("Conjugator coming soon!")} 
                            className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm active:scale-[0.98] flex flex-col justify-between h-32 text-left group hover:border-emerald-200 transition-all opacity-70"
                        >
                            <div className="bg-emerald-50 w-10 h-10 flex items-center justify-center rounded-xl text-emerald-600">
                                <Layers size={20} />
                            </div>
                            <div>
                                <div className="font-bold text-slate-700">Conjugator</div>
                                <div className="text-[10px] text-slate-400">Verb Tables</div>
                            </div>
                        </button>
                    </div>
                </div>

                {/* 3. GRAMMAR LIBRARY (Accordion) */}
                <div>
                    <h3 className="font-bold text-slate-400 text-xs uppercase tracking-wider mb-3 px-1">Grammar Modules</h3>
                    <div className="space-y-3">
                        {GRAMMAR_MODULES.map((module) => {
                            const isOpen = expandedCategory === module.id;
                            return (
                                <div key={module.id} className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden transition-all duration-300">
                                    
                                    {/* Main Card (Click to Expand) */}
                                    <button 
                                        onClick={() => toggleCategory(module.id)}
                                        className="w-full p-5 flex items-center gap-4 text-left active:bg-slate-50 transition-colors"
                                    >
                                        <div className={`w-12 h-12 flex items-center justify-center rounded-2xl ${module.color}`}>
                                            {module.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-slate-800 text-lg">{module.title}</h4>
                                            <p className="text-xs text-slate-400">{module.sub}</p>
                                        </div>
                                        <ChevronRight size={20} className={`text-slate-300 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
                                    </button>

                                    {/* Accordion Content (Sub-List) */}
                                    {isOpen && (
                                        <div className="bg-slate-50 border-t border-slate-100 animate-in slide-in-from-top-2 fade-in duration-200">
                                            {module.topics.map((topic, idx) => (
                                                <button 
                                                    key={idx}
                                                    onClick={() => alert(`Starting drill for: ${topic}`)} 
                                                    className="w-full p-4 pl-[5rem] text-left flex justify-between items-center text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-indigo-600 transition-colors border-b border-slate-100 last:border-0"
                                                >
                                                    {topic}
                                                    <Play size={14} className="opacity-0 hover:opacity-100 text-indigo-400" />
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
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
            {/* Header mit Zurück-Button */}
            <div className="flex items-center gap-3 mb-6 px-1">
                <button 
                    onClick={() => setView('skills')}
                    className="p-2 -ml-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500"
                >
                    <ArrowLeft size={20} className="rotate-[0deg]" />
                </button>
                <div>
                    <h2 className="text-2xl font-bold text-slate-800">AI Tools</h2>
                    <p className="text-slate-400 text-sm">Translation & Correction</p>
                </div>
            </div>

            {/* Deine existierende Translator Komponente */}
            <ModernTranslator />
        </div>
    );
    const fetchAiExamples = async (wordObj) => {
        // Wort-Objekt übergeben statt nur Text, damit wir den Rank haben
        setLoadingExamples(true);
        try {
            const res = await fetch('/api/examples', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ word: wordObj.french })
            });
            const data = await res.json();
            
            if (Array.isArray(data)) {
                // Speichere Ergebnis im Cache unter der ID des Wortes
                setExampleCache(prev => ({
                    ...prev,
                    [wordObj.rank]: data
                }));
                setExamplesVisible(true); // Direkt anzeigen nach Generierung
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

        return (
            <div className="flex flex-col h-full max-w-xl mx-auto w-full pt-4">
                {/* Header mit Fortschritt */}
                <div className="flex items-center justify-between mb-2 pl-1">
                    <button onClick={() => setView('home')} className="p-2 -ml-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors">
                        <X size={24} />
                    </button>
                    <div className="text-sm font-medium text-slate-500 font-mono">{progressText}</div>
                    <div className="w-6"></div> 
                </div>
                
                {!isSmartMode && <div className="w-full bg-slate-200 h-2 rounded-full mb-6"><div className="bg-indigo-600 h-2 rounded-full transition-all duration-300" style={{ width: `${progressPercent}%` }}></div></div>}
                
                {/* DIE KARTE */}
                <div className="bg-white border-2 border-slate-100 rounded-3xl shadow-lg p-6 flex flex-col items-center justify-center min-h-[350px] relative transition-all animate-in fade-in zoom-in duration-300">
                    
                    <div className="absolute top-4 right-4 bg-slate-100 text-slate-400 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Rank #{word.rank}</div>
                    {isSmartMode && userProgress[word.rank] && <div className="absolute top-4 left-4 bg-indigo-50 text-indigo-400 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider flex items-center gap-1"><Layers size={10} /> Box {userProgress[word.rank].box}</div>}

                    {/* --- FRONT: FRANZÖSISCH --- */}
                    <div className="mb-6 text-center w-full relative">
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">French</div>
                        
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 break-words text-center leading-tight">{word.french}</h2>
                            <button 
                                onClick={(e) => { e.stopPropagation(); speak(word.french); }} 
                                className="p-3 bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-100 active:scale-90 transition-all shadow-sm shrink-0"
                            >
                                <Volume2 size={24} />
                            </button>
                        </div>
                        
                        {word.example_fr && (
                            <div className="bg-slate-50 border border-slate-100 p-4 rounded-2xl text-left relative group mx-2">
                                <p className="text-slate-600 italic text-lg leading-relaxed pr-8">"{word.example_fr}"</p>
                                <button 
                                    onClick={(e) => { e.stopPropagation(); speak(word.example_fr); }}
                                    className="absolute right-2 top-2 p-2 text-slate-300 hover:text-indigo-600 hover:bg-white rounded-full transition-colors"
                                >
                                    <Volume2 size={25} />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* --- INTERAKTION / RÜCKSEITE --- */}
                    {!isFlipped ? (
                        <button 
                            onClick={() => setIsFlipped(true)} 
                            className="mt-2 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-indigo-200 transition-all flex items-center gap-2"
                        >
                            <BookOpen size={20} /> Show Translation
                        </button>
                    ) : (
                        <div className="w-full animate-in fade-in duration-300 flex flex-col items-center border-t border-slate-100 pt-6 mt-2">
                            
                            {/* ENGLISCH */}
                            <div className="text-center mb-6 w-full">
                                <div className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-2">English</div>
                                <h3 className="text-3xl font-bold text-indigo-900 mb-2 leading-tight">{word.english || word.german}</h3>
                                {word.example_en && <p className="text-indigo-400 italic text-sm mt-2 px-4">"{word.example_en}"</p>}
                            </div>

                            {/* --- SMART AI GENERATOR --- */}
                            <div className="w-full mb-6 px-2">
                                {(() => {
                                    // Prüfen, ob wir für dieses Wort schon was im Speicher haben
                                    const cachedExamples = exampleCache[word.rank];

                                    // FALL 1: Lädt gerade
                                    if (loadingExamples) {
                                        return (
                                            <div className="w-full py-4 text-center text-amber-500 text-sm font-medium animate-pulse flex justify-center items-center gap-2">
                                                <RotateCcw className="animate-spin" size={16}/> Asking Gemini...
                                            </div>
                                        );
                                    }

                                    // FALL 2: Noch nie generiert -> "Generate" Button
                                    if (!cachedExamples) {
                                        return (
                                            <button 
                                                onClick={() => fetchAiExamples(word)}
                                                className="w-full py-3 bg-amber-50 text-amber-600 rounded-xl font-bold text-sm border border-amber-100 hover:bg-amber-100 transition-colors flex items-center justify-center gap-2"
                                            >
                                                <Sparkles size={16} /> Generate AI Context
                                            </button>
                                        );
                                    }

                                    // FALL 3: Generiert, aber eingeklappt -> "Show" Button
                                    if (!examplesVisible) {
                                        return (
                                            <button 
                                                onClick={() => setExamplesVisible(true)}
                                                className="w-full py-3 bg-indigo-50 text-indigo-600 rounded-xl font-bold text-sm border border-indigo-100 hover:bg-indigo-100 transition-colors flex items-center justify-center gap-2"
                                            >
                                                <BookOpen size={16} /> Show Generated Examples ({cachedExamples.length})
                                            </button>
                                        );
                                    }

                                    // FALL 4: Angezeigt -> Liste rendern
                                    return (
                                        <div className="space-y-3 animate-in fade-in duration-500">
                                            <div className="flex justify-between items-end mb-1 px-1">
                                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">AI Context</span>
                                                <button onClick={() => setExamplesVisible(false)} className="text-[10px] text-indigo-400 font-bold hover:underline">Hide</button>
                                            </div>
                                            {cachedExamples.map((ex, idx) => (
                                                <div key={idx} className="bg-white border border-slate-200 p-3 rounded-xl shadow-sm text-left relative">
                                                    <div className="flex justify-between items-start gap-2">
                                                        <p className="text-slate-700 font-medium text-sm leading-snug pr-6">{ex.fr}</p>
                                                        <button onClick={() => speak(ex.fr)} className="absolute right-2 top-2 text-indigo-300 hover:text-indigo-600 transition-colors">
                                                            <Volume2 size={16} />
                                                        </button>
                                                    </div>
                                                    <p className="text-slate-400 text-xs italic mt-1 border-t border-slate-50 pt-1">{ex.en}</p>
                                                </div>
                                            ))}
                                        </div>
                                    );
                                })()}
                            </div>
                            {/* --- ENDE AI GENERATOR --- */}

                            {isSmartMode ? (
                                <div className="grid grid-cols-4 gap-2 w-full px-1">
                                    {[
                                        { q: 0, label: "Again", color: "bg-red-50 text-red-600 border-red-200", sub: "Recap" },
                                        { q: 1, label: "Hard", color: "bg-amber-50 text-amber-600 border-amber-200", sub: "" },
                                        { q: 2, label: "Good", color: "bg-green-50 text-green-600 border-green-200", sub: "" },
                                        { q: 3, label: "Easy", color: "bg-blue-50 text-blue-600 border-blue-200", sub: "" }
                                    ].map((btn) => {
                                        // Vorausberechnung für das Label (z.B. "3d")
                                        const stats = calculateAnkiStats(userProgress[word.rank], btn.q);
                                        const timeLabel = formatInterval(stats.interval);
                                        
                                        return (
                                            <button 
                                                key={btn.label}
                                                onClick={() => handleResult(btn.q)} 
                                                className={`${btn.color} border p-2 rounded-xl flex flex-col items-center justify-center transition-all active:scale-95 h-20 shadow-sm`}
                                            >
                                                <span className="text-xs font-bold uppercase tracking-tighter opacity-60 mb-1">{timeLabel}</span>
                                                <span className="font-bold text-sm leading-none">{btn.label}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            ) : (
                                // --- TEST MODE BUTTONS (Nur 2) ---
                                <div className="grid grid-cols-2 gap-4 w-full px-2">
                                    <button onClick={() => handleResult(0)} className="bg-red-50 text-red-600 border border-red-100 p-4 rounded-2xl font-bold flex items-center justify-center gap-2 h-20">
                                        <X size={20} /> Missed
                                    </button>
                                    <button onClick={() => handleResult(2)} className="bg-green-50 text-green-600 border border-green-100 p-4 rounded-2xl font-bold flex items-center justify-center gap-2 h-20">
                                        <Check size={20} /> Got it
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        );
    };
    const renderReader = () => {
        
  

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

        const handleWordClick = (e, wordRaw) => {
            e.stopPropagation();
            const textWithoutFormat = wordRaw.replace(/[*_]/g, "");
            const cleanWord = textWithoutFormat.replace(/[.,!?;:"«»()]/g, "").toLowerCase();
            const found = vocabulary.find(v => v.french.toLowerCase() === cleanWord);
            if (found) setClickedWord(found);
            else setClickedWord({ french: textWithoutFormat, english: "Not in dictionary", rank: "?" });
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
                        <div className="h-64 flex flex-col items-center justify-center text-indigo-500 space-y-4">
                            <RotateCcw size={48} className="animate-spin"/>
                            <p className="font-bold animate-pulse">Writing your story...</p>
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

                                {/* LENGTH SLIDER (Neu: 50-500 Wörter) */}
                                <div>
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Story Length</span>
                                        <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-lg uppercase border border-indigo-100">
                                            ~ {storyConfig.length} Words
                                        </span>
                                    </div>
                                    <input 
                                        type="range" min="50" max="500" step="10" 
                                        value={storyConfig.length}
                                        onChange={(e) => setStoryConfig({ ...storyConfig, length: parseInt(e.target.value) })}
                                        className="w-full accent-indigo-600 h-2 bg-slate-100 rounded-lg cursor-pointer"
                                    />
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
                                    <button onClick={() => handleGenerate('Mystery')} className="bg-purple-50 border border-purple-100 p-4 rounded-3xl text-left hover:scale-[1.02] transition-transform h-32 flex flex-col justify-between group">
                                        <div className="bg-white w-10 h-10 flex items-center justify-center rounded-xl text-purple-600 shadow-sm"><Ghost size={20}/></div>
                                        <div><h3 className="font-bold text-purple-900">Mystery</h3></div>
                                    </button>
                                    <button onClick={() => handleGenerate('Sci-Fi')} className="bg-blue-50 border border-blue-100 p-4 rounded-3xl text-left hover:scale-[1.02] transition-transform h-32 flex flex-col justify-between group">
                                        <div className="bg-white w-10 h-10 flex items-center justify-center rounded-xl text-blue-600 shadow-sm"><Rocket size={20}/></div>
                                        <div><h3 className="font-bold text-blue-900">Sci-Fi</h3></div>
                                    </button>
                                    <button onClick={() => handleGenerate('Daily Life')} className="bg-amber-50 border border-amber-100 p-4 rounded-3xl text-left hover:scale-[1.02] transition-transform h-32 flex flex-col justify-between group">
                                        <div className="bg-white w-10 h-10 flex items-center justify-center rounded-xl text-amber-600 shadow-sm"><Coffee size={20}/></div>
                                        <div><h3 className="font-bold text-amber-900">Daily Life</h3></div>
                                    </button>
                                    <button onClick={() => handleGenerate('Fantasy')} className="bg-emerald-50 border border-emerald-100 p-4 rounded-3xl text-left hover:scale-[1.02] transition-transform h-32 flex flex-col justify-between group">
                                        <div className="bg-white w-10 h-10 flex items-center justify-center rounded-xl text-emerald-600 shadow-sm"><Sword size={20}/></div>
                                        <div><h3 className="font-bold text-emerald-900">Fantasy</h3></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            );
        }

        // ... PHASE 2 & 3 (Lesen und Quiz) bleiben genau gleich wie vorher ...
        // (Kopiere einfach den unteren Teil deiner alten Funktion hier rein)
        
        // HIER ZUR SICHERHEIT DER ZWEITE TEIL, damit du Copy-Paste machen kannst:
        
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
                                return <span key={i} onClick={(e) => handleWordClick(e, wordRaw)} className={`inline-block mr-1.5 cursor-pointer rounded px-0.5 transition-colors duration-200 hover:bg-slate-100 hover:text-indigo-600 ${clickedWord?.french === displayText.replace(/[.,!?;:"«»()]/g, "").toLowerCase() ? 'bg-yellow-200 text-slate-900' : ''}`}>{displayText}</span>;
                            })}
                        </div>
                    </div>
                    {clickedWord && (
                        <div className="fixed bottom-24 left-4 right-4 bg-slate-900/95 backdrop-blur-md text-white p-4 rounded-2xl shadow-2xl animate-in slide-in-from-bottom-4 z-50 flex items-center justify-between">
                            <div>
                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">{clickedWord.rank !== "?" ? `Rank #${clickedWord.rank}` : "Unknown"}</div>
                                <div className="text-xl font-bold">{clickedWord.french}</div>
                                <div className="text-slate-300 text-sm italic">{clickedWord.english || clickedWord.german}</div>
                            </div>
                            <div className="flex gap-3">
                                <button onClick={() => speak(clickedWord.french)} className="p-3 bg-white/10 rounded-full hover:bg-white/20"><Volume2 size={20}/></button>
                                <button onClick={() => setClickedWord(null)} className="p-3 text-slate-400 hover:text-white"><X size={20}/></button>
                            </div>
                        </div>
                    )}
                    <button onClick={() => { stopAudio(); setIsSpeaking(false); setReaderMode('quiz'); setQuizAnswers({}); }} className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold shadow-lg flex justify-center items-center gap-2 hover:bg-indigo-700 transition-all">
                        Take Quiz <ArrowLeft size={20} className="rotate-180"/>
                    </button>
                </div>
            );
        }

        // --- PHASE 3: QUIZ (Gleich) ---
        if (readerMode === 'quiz' && currentStory) {
            return (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-300 pt-6 pb-24 px-1">
                    <div className="flex items-center gap-3 mb-2 px-1">
                        <button onClick={() => setReaderMode('reading')} className="p-2 -ml-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500"><ArrowLeft size={20} /></button>
                        <h2 className="text-xl font-bold text-slate-800">Comprehension Check</h2>
                    </div>
                    <div className="space-y-6">
                        {currentStory.quiz.map((q, qIdx) => (
                            <div key={qIdx} className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm">
                                <h3 className="font-bold text-slate-800 mb-4">{q.question}</h3>
                                <div className="space-y-2">
                                    {q.options.map((opt, oIdx) => {
                                        const isSelected = quizAnswers[qIdx] === oIdx;
                                        const isCorrect = q.correctIndex === oIdx;
                                        let btnClass = "bg-slate-50 text-slate-600 border-slate-100";
                                        if (isSelected) { if (isCorrect) btnClass = "bg-green-100 text-green-700 border-green-200 ring-2 ring-green-500"; else btnClass = "bg-red-100 text-red-700 border-red-200"; }
                                        return <button key={oIdx} onClick={() => setQuizAnswers({...quizAnswers, [qIdx]: oIdx})} className={`w-full p-3 rounded-xl text-left text-sm font-medium border transition-all ${btnClass}`}>{opt}</button>;
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
            
            case 'data-mgmt':
                return renderDataMgmt();
            
            case 'word-detail':
                return renderWordDetail();
            
            case 'topic-hub': // <--- NEU
                return renderTopicHub();

            default: return renderHome();
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col items-center">
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