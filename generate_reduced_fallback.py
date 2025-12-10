#!/usr/bin/env python3
"""
Erstellt eine reduzierte Version des Fallback-Dictionaries für das Deployment.
Behält nur die wichtigsten Wörter, um die Dateigröße zu reduzieren.
"""

import json
import re

def main():
    # Lade die JSON-Datei
    print("Lade franzoesisch_alle_woerter_formatiert.json...")
    with open('franzoesisch_alle_woerter_formatiert.json', 'r', encoding='utf-8') as f:
        words = json.load(f)

    print(f"Geladene Wörter: {len(words)}")

    # Filtere die Wörter
    filtered_words = []
    for entry in words:
        french = entry.get('french', '').lower().strip()
        english = entry.get('english', '')

        # Überspringe leere Einträge
        if not french or not english:
            continue

        # Filtere problematische Wörter
        if any(char in french for char in ['/', '*', '@', '#', '%', '^', '&', '+', '=', '|', '{', '}', '[', ']', '<', '>', '?']):
            continue

        # Behalte nur Wörter mit 2-20 Buchstaben
        if not (2 <= len(french) <= 20):
            continue

        # Behalte nur Wörter ohne Zahlen
        if any(char.isdigit() for char in french):
            continue

        # Behalte nur Wörter mit gültigen Zeichen
        if not re.match(r'^[a-zàâäéèêëïîôöùûüÿç\'-]+$', french):
            continue

        filtered_words.append(entry)

        # Begrenze auf 50.000 Wörter für kleinere Datei
        if len(filtered_words) >= 50000:
            break

    print(f"Gefilterte Wörter: {len(filtered_words)}")

    # Erstelle ein Lookup-Dictionary
    lookup = {}
    for entry in filtered_words:
        french = entry.get('french', '').lower().strip()
        english = entry.get('english', '')

        # Überspringe Duplikate
        if french not in lookup:
            lookup[french] = english

    print(f"Unique Einträge im Lookup: {len(lookup)}")

    # Schreibe als JavaScript-Datei
    print("Schreibe fallback_dictionary_reduced.js...")
    with open('fallback_dictionary_reduced.js', 'w', encoding='utf-8') as f:
        f.write('// Auto-generated Reduced Fallback Dictionary für Word Lookup\n')
        f.write('// Quelle: franzoesisch_alle_woerter_formatiert.json (reduziert)\n')
        f.write(f'// Enthält {len(lookup)} Wörter\n\n')
        f.write('const FALLBACK_DICTIONARY = ')
        json.dump(lookup, f, ensure_ascii=False, separators=(',', ':'))
        f.write(';\n')

    # Dateigröße prüfen
    import os
    size_mb = os.path.getsize('fallback_dictionary_reduced.js') / (1024 * 1024)
    print(f"Fertig! Dateigröße: {size_mb:.2f} MB")

    # Ersetze die große Datei mit der kleinen
    print("Ersetze fallback_dictionary.js...")
    import shutil
    shutil.move('fallback_dictionary_reduced.js', 'fallback_dictionary.js')

    final_size = os.path.getsize('fallback_dictionary.js') / (1024 * 1024)
    print(f"Finale Dateigröße: {final_size:.2f} MB")

if __name__ == '__main__':
    main()
