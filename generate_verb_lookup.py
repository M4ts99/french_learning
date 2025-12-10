# -*- coding: utf-8 -*-
import csv
import json
import codecs

person_mapping = {
    '_1s': 'je', '_2s': 'tu', '_1p': 'nous', '_2p': 'vous',
    '_je': 'je', '_tu': 'tu', '_nous': 'nous', '_vous': 'vous',
    'il_(elle,_on)': 'il/elle/on', 'ils_(elles)': 'ils/elles',
    'masculin_singulier': 'm.sg', 'feminin_singulier': 'f.sg',
    'masculin_pluriel': 'm.pl', 'feminin_pluriel': 'f.pl',
}

def get_tense_and_person(col_name):
    col = col_name.lower()
    tense = None
    person = ''
    
    # Determine tense - order matters! Check specific before general
    if 'subjonctif_imparfait' in col:
        tense = 'Subj. Imperfect'
    elif 'subjonctif' in col:
        tense = 'Subjunctive'
    elif 'passé_simple' in col:
        tense = 'Passé Simple'
    elif 'futur' in col:
        tense = 'Future'
    elif 'imparfait' in col or 'imperfekt' in col:
        tense = 'Imperfect'
    elif 'conditionnel' in col or 'cond_' in col:
        tense = 'Conditional'
    elif 'imperatif' in col:
        tense = 'Imperative'
    elif 'particip' in col or 'partizip' in col:
        tense = 'Participle'
    elif 'présent' in col or 'präsens' in col or 'ind_pr' in col:
        tense = 'Present'
    
    if not tense:
        return None, ''
    
    # Determine person
    for key, val in person_mapping.items():
        if key in col:
            person = val
            break
    
    return tense, person

def main():
    lookup = {}
    
    with codecs.open('app_verb_konjugationen_detail.csv', 'r', encoding='utf-8-sig') as f:
        reader = csv.DictReader(f, delimiter=';')
        columns = reader.fieldnames
        
        for row in reader:
            rank = int(row['rank'])
            infinitive = row['infinitiv']
            
            for col in columns:
                if col in ['rank', 'infinitiv']:
                    continue
                
                form = row[col].strip().lower()
                if not form:
                    continue
                
                tense, person = get_tense_and_person(col)
                if not tense:
                    continue
                
                if form not in lookup:
                    lookup[form] = []
                
                entry = {'infinitive': infinitive, 'rank': rank, 'tense': tense, 'person': person}
                if entry not in lookup[form]:
                    lookup[form].append(entry)
    
            # Add infinitive
            inf = infinitive.strip().lower()
            if inf:
                if inf not in lookup:
                    lookup[inf] = []
                entry = {'infinitive': infinitive, 'rank': rank, 'tense': 'Infinitive', 'person': ''}
                if entry not in lookup[inf]:
                    lookup[inf].append(entry)
    
    print(f'Total unique forms: {len(lookup)}')
    
    # Test cases
    test_words = ['affirme', 'étais', 'suis', 'avoir', 'être', 'parle', 'dit', 'fait', 'vais', 'allons']
    for test in test_words:
        result = lookup.get(test)
        if result:
            best = min(result, key=lambda x: x['rank'])
            print(f"  {test}: rank {best['rank']}, {best['tense']} ({best['person']}) -> {best['infinitive']}")
        else:
            print(f"  {test}: NOT FOUND")
    
    # Write with UTF-8 encoding
    with codecs.open('verb_lookup.js', 'w', encoding='utf-8') as f:
        f.write(f'// Auto-generated verb conjugation lookup - {len(lookup)} forms\n')
        f.write('const VERB_LOOKUP = ')
        f.write(json.dumps(lookup, ensure_ascii=False, indent=None, separators=(',', ':')))
        f.write(';\n')
    
    print('\nCreated verb_lookup.js')
    
    # Verify encoding
    with codecs.open('verb_lookup.js', 'r', encoding='utf-8') as f:
        content = f.read()
        if 'être' in content or 'étais' in content:
            print('Encoding verified: French accents are correct!')
        else:
            print('Warning: Encoding might be incorrect')

if __name__ == '__main__':
    main()
