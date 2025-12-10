#!/usr/bin/env python3
"""
Generiert eine optimierte JavaScript-Lookup-Datei aus franzoesisch_alle_woerter_formatiert.json
Das Output ist ein Object/Map für schnelles O(1) Lookup.
"""

import json

def main():
    # Lade die JSON-Datei
    print("Lade franzoesisch_alle_woerter_formatiert.json...")
    with open('franzoesisch_alle_woerter_formatiert.json', 'r', encoding='utf-8') as f:
        words = json.load(f)
    
    print(f"Geladene Wörter: {len(words)}")
    
    # Erstelle ein Lookup-Dictionary (lowercase key -> english translation)
    lookup = {}
    for entry in words:
        french = entry.get('french', '').lower().strip()
        english = entry.get('english', '')
        
        # Überspringe leere Einträge
        if not french or not english:
            continue
        
        # Nur den ersten Eintrag behalten (falls Duplikate)
        if french not in lookup:
            lookup[french] = english
    
    print(f"Unique Einträge im Lookup: {len(lookup)}")
    
    # Schreibe als JavaScript-Datei
    print("Schreibe fallback_dictionary.js...")
    with open('fallback_dictionary.js', 'w', encoding='utf-8') as f:
        f.write('// Auto-generated Fallback Dictionary für Word Lookup\n')
        f.write('// Quelle: franzoesisch_alle_woerter_formatiert.json\n')
        f.write(f'// Enthält {len(lookup)} Wörter\n\n')
        f.write('const FALLBACK_DICTIONARY = ')
        json.dump(lookup, f, ensure_ascii=False, separators=(',', ':'))
        f.write(';\n')
    
    # Dateigröße prüfen
    import os
    size_mb = os.path.getsize('fallback_dictionary.js') / (1024 * 1024)
    print(f"Fertig! Dateigröße: {size_mb:.2f} MB")

if __name__ == '__main__':
    main()
