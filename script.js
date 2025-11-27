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
//const INITIAL_DATA = vocab_List;
const BottomNav = ({ activeTab, onTabChange }) => {
    const tabs = [
        { id: 'home', label: 'Home', icon: <HomeIcon size={24} /> },
        { id: 'library', label: 'Library', icon: <BookOpen size={24} /> },
        { id: 'grammar', label: 'Translator', icon: <PenTool size={24} /> }, // <--- NEU
        { id: 'stats', label: 'Profile', icon: <User size={24} /> },
        
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

    // Initial Load & Persistence
// Initial Load & Persistence
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
    const calculateAnkiStats = (currentStats, quality) => {
        // quality: 0=Again (Missed), 1=Hard, 2=Good, 3=Easy
        
        let interval = currentStats?.interval ?? 0;
        let ease = currentStats?.ease ?? 2.5;
        let repetitions = currentStats?.repetitions ?? 0;
        
        let nextInterval;
        let nextRepetitions = repetitions + 1;

        // --- SZENARIO 1: RESET (Vergessen) ---
        if (quality === 0) {
            nextInterval = 0; // Zurück auf "Neu"
            nextRepetitions = 0; // Zähler resetten
            ease = Math.max(1.3, ease - 0.2); // Strafe: Das Wort gilt als schwieriger (Ease sinkt)
        }
        // --- SZENARIO 2: NEUES WORT (Erstes Lernen) ---
        else if (interval === 0) {
            if (quality === 1) nextInterval = 0; // Hard bleibt bei Neu (nochmal üben)
            else if (quality === 2) nextInterval = 1; // Good = 1 Tag
            else nextInterval = 4; // Easy = 4 Tage
        } 
        // --- SZENARIO 3: WIEDERHOLUNG (Review) ---
        else {
            // Ease Factor anpassen
            // Hard(-0.15), Good(0), Easy(+0.15)
            let easeMod = (quality === 1) ? -0.15 : (quality === 3) ? 0.15 : 0;
            let nextEase = Math.max(1.3, ease + easeMod);
            
            // Intervall Berechnung (Exponential)
            // Hard: x1.2
            // Good: x Ease (z.B. x2.5)
            // Easy: x Ease x 1.3 (z.B. x3.25)
            let factor = (quality === 1) ? 1.2 : (quality === 3 ? nextEase * 1.3 : nextEase);
            
            nextInterval = Math.ceil(interval * factor);
            ease = nextEase;
        }

        return { 
            interval: nextInterval,
            // WICHTIG: Wenn nextInterval 0 ist (bei Missed), ist auch box 0.
            // Die Statistik zählt nur box > 0. Damit fliegt es raus!
            box: nextInterval, 
            ease: ease, 
            repetitions: nextRepetitions,
            nextReview: Date.now() + (nextInterval * 24 * 60 * 60 * 1000) 
        };
    };

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
    const speak = (text) => {
        if (!text) return;
        
        // Stoppt vorherige Sprachausgabe (falls man schnell klickt)
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'fr-FR'; // WICHTIG: Französisch erzwingen
        utterance.rate = 0.9;     // Etwas langsamer (0.9x), damit man es gut versteht
        utterance.pitch = 1;      // Normale Tonhöhe

        // Optional: Versuch, eine "Google" oder "Siri" Stimme zu finden (klingt besser)
        const voices = window.speechSynthesis.getVoices();
        // Wir suchen nach Stimmen die "fr" (französisch) im Code haben
        const frVoice = voices.find(v => v.lang.includes('fr'));
        if (frVoice) utterance.voice = frVoice;

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
    const renderHome = () => (
        <div className="space-y-8 animate-in fade-in duration-500 pt-4 pb-8">
            {/* 1. HEADER & INFO */}
            <div>
                <h1 className="text-3xl font-bold text-slate-800 mb-4">Bonjour! 👋</h1>
                <div className="bg-indigo-50 border border-indigo-100 p-5 rounded-2xl relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 text-indigo-700 font-bold mb-1 text-xs uppercase tracking-wide">
                            <Info size={14} /> Why Frequency?
                        </div>
                        <p className="text-indigo-900/80 text-sm leading-relaxed font-medium">
                            The top <strong className="text-indigo-900">2,000 words</strong> make up <strong className="text-indigo-900">80%</strong> of French text. Master the foundation first.
                        </p>
                    </div>
                    {/* Deko im Hintergrund */}
                    <div className="absolute -right-6 -bottom-10 opacity-10 text-indigo-900 rotate-12">
                         <BarChart3 size={100} />
                    </div>
                </div>
            </div>

            {/* 2. MAIN ACTIONS (Training & Test) */}
            <div className="grid grid-cols-2 gap-4">
                 <button onClick={() => setView('smart-config')} className="col-span-2 bg-indigo-600 text-white p-6 rounded-3xl shadow-lg shadow-indigo-200 transition-transform active:scale-[0.98] flex flex-col items-center text-center relative overflow-hidden group">
                    <div className="bg-white/20 p-3 rounded-full mb-3 group-hover:scale-110 transition-transform"><Play size={28} fill="currentColor" /></div>
                    <div>
                        <div className="font-bold text-xl">Start Loop</div>
                        <div className="text-indigo-100 text-xs mt-0.5">Personalized Training</div>
                    </div>
                    <GraduationCap size={120} className="absolute -left-4 -bottom-4 opacity-10 rotate-[-15deg]" />
                </button>

                <button onClick={() => setView('test-config')} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm active:scale-[0.98] transition-transform">
                    <div className="bg-amber-100 w-10 h-10 flex items-center justify-center rounded-xl text-amber-600 mb-3"><BookOpen size={20} /></div>
                    <div className="font-bold text-slate-700">Quick Test</div>
                </button>
                
                <button onClick={() => setView('stats')} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm active:scale-[0.98] transition-transform">
                    <div className="bg-emerald-100 w-10 h-10 flex items-center justify-center rounded-xl text-emerald-600 mb-3"><BarChart3 size={20} /></div>
                    <div className="font-bold text-slate-700">My Stats</div>
                </button>
            </div>

            {/* 3. NEW: GRAMMAR TYPES (Horizontal Scroll) */}
            <div>
                <div className="flex items-center justify-between mb-3 px-1">
                    <h3 className="font-bold text-slate-700 text-lg">By Type</h3>
                </div>
                <div className="flex gap-3 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                    {COLLECTIONS.grammar.map((c) => (
                        <button 
                            key={c.id}
                            onClick={() => startCollectionSession(c.ids)}
                            className={`min-w-[140px] p-4 rounded-2xl border transition-all active:scale-95 text-left flex flex-col justify-between h-32 ${c.color}`}
                        >
                            <div className="bg-white/60 w-fit p-2 rounded-lg backdrop-blur-sm">{c.icon}</div>
                            <div>
                                <div className="font-bold leading-tight">{c.label}</div>
                                <div className="text-[10px] opacity-70 mt-1">{c.sub}</div>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* 4. NEW: TOPICS (Horizontal Scroll) */}
            <div>
                <div className="flex items-center justify-between mb-3 px-1">
                    <h3 className="font-bold text-slate-700 text-lg">By Topic</h3>
                </div>
                <div className="flex gap-3 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                    {COLLECTIONS.topics.map((c) => (
                        <button 
                            key={c.id}
                            onClick={() => startCollectionSession(c.ids)}
                            className="min-w-[110px] bg-white p-3 rounded-2xl border border-slate-100 shadow-sm active:scale-95 transition-all text-center flex flex-col items-center gap-3 h-28 justify-center"
                        >
                            <div className="text-slate-400 bg-slate-50 p-3 rounded-full">{c.icon}</div>
                            <div className="font-bold text-sm text-slate-700 leading-tight">{c.label}</div>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
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
            <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500 pt-4">
                
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
                        <div className="bg-emerald-100 text-emerald-600 p-3 rounded-2xl shrink-0"><RotateCcw size={24} /></div>
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

                    {/* MANUAL SECTION - Jetzt groß und bedienbar */}
                     <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-5">
                         <div className="flex items-center gap-2 mb-4 text-slate-500">
                             <Settings size={18} />
                             <span className="font-bold text-sm uppercase tracking-wide">Custom Range</span>
                         </div>
                         
                         <div className="flex items-center gap-3 mb-4">
                            <div className="flex-1">
                                <div className="text-[10px] text-slate-400 font-bold mb-1 ml-1">FROM</div>
                                <input type="number" value={smartConfig.rangeStart} onChange={(e) => setSmartConfig({...smartConfig, rangeStart: parseInt(e.target.value)})} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-center text-lg font-bold font-mono focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
                            </div>
                            <span className="text-slate-300 font-bold text-xl mt-4">-</span>
                            <div className="flex-1">
                                <div className="text-[10px] text-slate-400 font-bold mb-1 ml-1">TO</div>
                                <input type="number" value={smartConfig.rangeEnd} onChange={(e) => setSmartConfig({...smartConfig, rangeEnd: parseInt(e.target.value)})} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-center text-lg font-bold font-mono focus:bg-white focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
                            </div>
                         </div>

                         <button onClick={startSmartSession} className="w-full bg-indigo-50 hover:bg-indigo-100 text-indigo-600 py-3 rounded-xl font-bold transition-colors flex justify-center items-center gap-2">
                            Start Custom Session <ChevronRight size={16} />
                         </button>
                    </div>

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
            <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500 pt-4">
                
                {/* Header */}
                <div className="flex items-center gap-3 mb-6 pl-1">
                    <button onClick={() => setView('home')} className="p-2 -ml-2 hover:bg-slate-200 rounded-full transition-colors">
                        <RotateCcw size={20} className="text-slate-500" />
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
                        <div className="p-2 bg-white border border-slate-200 rounded-full"><RotateCcw size={16} /></div>
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
                        <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-300 flex flex-col items-center border-t border-slate-100 pt-6 mt-2 w-full">
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
                                {loadingExamples && <div className="w-full py-4 text-center text-amber-500 text-sm font-medium animate-pulse flex justify-center items-center gap-2"><RotateCcw className="animate-spin" size={16}/> generating...</div>}
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
                        <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-300 flex flex-col items-center border-t border-slate-100 pt-6 mt-2">
                            
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
    
    const renderStats = () => {
        const milestones = [
            { limit: 100, label: "Foundation", desc: "Survival Vocabulary", color: "bg-indigo-400" },
            { limit: 500, label: "Essentials", desc: "Daily Conversation", color: "bg-indigo-500" },
            { limit: 1000, label: "Base", desc: "Solid Understanding", color: "bg-violet-500" },
            { limit: 2000, label: "Extension", desc: "Fluent Expression", color: "bg-fuchsia-500" },
            { limit: 5000, label: "Mastery", desc: "Native-like Nuance", color: "bg-pink-500" },
        ];

        // --- RESET LOGIC ---
        const handleHardReset = () => {
            // 1. Sicherheitsabfrage
            if (window.confirm("DEBUG: Are you sure you want to delete ALL learning progress? This cannot be undone.")) {
                // 2. PIN Abfrage
                const pin = window.prompt("Enter Debug PIN to confirm reset:");
                
                if (pin === "1999") {
                    setUserProgress({}); // State komplett leeren
                    localStorage.removeItem('vocabApp_progress'); // Speicher leeren
                    alert("System Reset: All words set to 'unknown'. Stats cleared.");
                    setView('home'); // Zurück zum Start
                } else if (pin !== null) {
                    alert("❌ Access Denied: Wrong PIN.");
                }
            }
        };

        return (
            <div className="space-y-6 animate-in fade-in duration-500 pt-4 pb-24">
                {/* Header */}
                <div className="flex items-center gap-3 mb-2 px-1">
                     <div className="bg-indigo-100 p-2 rounded-full text-indigo-600"><BarChart3 size={24} /></div>
                     <h2 className="text-2xl font-bold text-slate-800">Frequency Profile</h2>
                </div>

                {/* Progress Bars */}
                <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 space-y-6">
                    {milestones.map((m) => {
                        const pct = getStatsForRange(m.limit);
                        return (
                            <div key={m.limit}>
                                <div className="flex justify-between items-end mb-2">
                                    <div>
                                        <div className="font-bold text-slate-700 flex items-center gap-2">
                                            {m.label} 
                                            <span className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded">Top {m.limit}</span>
                                        </div>
                                        <div className="text-xs text-slate-400">{m.desc}</div>
                                    </div>
                                    <div className="font-bold text-lg text-slate-800">{pct}%</div>
                                </div>
                                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                                    <div 
                                        className={`h-full rounded-full transition-all duration-1000 ${m.color}`} 
                                        style={{ width: `${pct}%` }}
                                    ></div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                
                {/* Quote */}
                <div className="text-center p-4 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                    <p className="text-xs text-slate-500 italic">
                        "Focus on the Foundation first. The first 1000 words account for 85% of daily speech."
                    </p>
                </div>

                {/* --- DEBUG SECTION (Danger Zone) --- */}
                <div className="mt-8 pt-8 border-t border-slate-200 px-2">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 text-center">Developer Zone</p>
                    <button 
                        onClick={handleHardReset}
                        className="w-full bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 p-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-colors"
                    >
                        <Trash2 size={18} /> Factory Reset App
                    </button>
                </div>
            </div>
        );
    };
    const renderLearnedSection = () => {
        // 1. Daten filtern
        const learnedList = vocabulary.filter(w => userProgress[w.rank] && userProgress[w.rank].box > 0);
        
        // Such-Logik
        const filteredList = learnedList.filter(w => 
            w.french.toLowerCase().includes(librarySearch.toLowerCase()) || 
            (w.english && w.english.toLowerCase().includes(librarySearch.toLowerCase())) ||
            (w.german && w.german.toLowerCase().includes(librarySearch.toLowerCase()))
        ).sort((a, b) => a.rank - b.rank);

        return (
            <div className="max-w-2xl mx-auto space-y-6 animate-in fade-in duration-500 pt-2 pb-24">
                
                {/* HEADER & SUCHE */}
                <div className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 sticky top-2 z-30">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                            <button onClick={() => setView('home')} className="p-2 -ml-2 hover:bg-slate-100 rounded-full"><RotateCcw size={20} className="text-slate-500" /></button>
                            <h2 className="text-xl font-bold text-slate-800">Library</h2>
                        </div>
                        {/* Kleiner Review Button */}
                        {learnedList.length > 5 && (
                            <button 
                                onClick={() => setShowReviewModal(true)}
                                className="bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 hover:bg-emerald-200 transition-colors"
                            >
                                <Play size={14} fill="currentColor"/> Review
                            </button>
                        )}
                    </div>

                    {/* Suchleiste */}
                    <div className="relative">
                        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input 
                            type="text" 
                            value={librarySearch}
                            onChange={(e) => setLibrarySearch(e.target.value)}
                            placeholder="Search French or English..." 
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                        />
                        {librarySearch && (
                            <button onClick={() => setLibrarySearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
                                <X size={14} />
                            </button>
                        )}
                    </div>
                </div>

                {/* REVIEW MODAL (Popup) */}
                {showReviewModal && (
                    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in">
                        <div className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl animate-in zoom-in-95">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="font-bold text-lg text-slate-800">Start Review</h3>
                                <button onClick={() => setShowReviewModal(false)} className="p-2 bg-slate-100 rounded-full hover:bg-slate-200"><X size={18}/></button>
                            </div>
                            
                            <div className="mb-6">
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-slate-500">Words count</span>
                                    <span className="font-bold text-emerald-600">{reviewCount}</span>
                                </div>
                                <input 
                                    type="range" min="5" max={Math.min(50, learnedList.length)} step="5" 
                                    value={reviewCount} onChange={(e) => setReviewCount(parseInt(e.target.value))} 
                                    className="w-full accent-emerald-600 h-2 bg-slate-100 rounded-lg" 
                                />
                            </div>

                            <button 
                                onClick={() => { setShowReviewModal(false); startReviewSession(); }} 
                                className="w-full bg-emerald-600 text-white py-3 rounded-xl font-bold hover:bg-emerald-700 transition-colors flex justify-center items-center gap-2"
                            >
                                <Play size={18} fill="currentColor"/> Let's Go
                            </button>
                        </div>
                    </div>
                )}

                {/* LISTE */}
                {learnedList.length > 0 ? (
                    <div className="space-y-2">
                        <div className="px-2 text-xs font-bold text-slate-400 uppercase tracking-wide flex justify-between">
                            <span>{filteredList.length} Results</span>
                            <span>Total: {learnedList.length}</span>
                        </div>
                        
                        {filteredList.length > 0 ? (
                            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden divide-y divide-slate-100">
                                {filteredList.slice(0, 100).map(word => ( // Begrenzt auf 100 für Performance
                                    <button 
                                        key={word.rank} 
                                        onClick={() => {
                                            setSelectedWord(word);
                                            setIsFlipped(false);
                                            setAiExamples(null);
                                            setView('word-detail');
                                        }}
                                        className="w-full flex items-center justify-between p-4 hover:bg-indigo-50/50 transition-colors text-left group"
                                    >
                                        <div className="flex items-center gap-4">
                                            <span className="text-xs font-mono text-slate-400 w-8">#{word.rank}</span>
                                            <div>
                                                <div className="font-bold text-slate-800">{word.french}</div>
                                                <div className="text-xs text-slate-500 truncate max-w-[150px] md:max-w-xs opacity-70 group-hover:opacity-100 transition-opacity">
                                                    {word.english || word.german}
                                                </div>
                                            </div>
                                        </div>
                                        <ChevronRight size={16} className="text-slate-200 group-hover:text-indigo-300" />
                                    </button>
                                ))}
                                {filteredList.length > 100 && (
                                    <div className="p-3 text-center text-xs text-slate-400 italic">
                                        ...and {filteredList.length - 100} more matches. Keep searching!
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="text-center py-10 text-slate-400">
                                <Search size={32} className="mx-auto mb-2 opacity-20"/>
                                <p>No words found matching "{librarySearch}"</p>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="text-center p-8 bg-slate-50 rounded-2xl border border-dashed border-slate-300 text-slate-500">
                        Library is empty. <br/>Start training to fill it!
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
                return renderStats();

            case 'settings':
            case 'grammar':
                return renderGrammar();
            case 'data-mgmt':
                return renderDataMgmt(); // Oder ein erweitertes Settings-Menü
            case 'word-detail': // <--- NEU
                return renderWordDetail();

            case 'library':
            case 'learned-section':
                return renderLearnedSection();
            
            default:
                return renderHome();
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col items-center">
            {/* Main Content Area */}
            {/* pb-24 sorgt dafür, dass Inhalt nicht hinter der Leiste verschwindet */}
            <div className={`w-full max-w-lg md:max-w-2xl px-5 py-6 md:p-8 ${!isSessionActive ? 'pb-28' : ''}transition-all duration-300 ease-in-out`}>
                
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