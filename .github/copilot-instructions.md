<!-- Copilot / AI agent guidance for the `french_learning` project -->
# Quick orientation for AI coding agents

This file contains focused, actionable guidance so an AI assistant can be productive immediately in this repository.

1) Big picture
- Single-page React app (UMD) served statically via `index.html`. The UI is implemented in `script.js` (loaded with `type="text/babel"`) and uses `vocab.js` as the offline word database.
- Lightweight serverless functions live in `functions/api/*.js`. Those handle `/api/*` routes used by the frontend (e.g. `/api/translate`, `/api/correct`). They are written in the Cloudflare Pages / Workers style and expect `context.env` for secrets.

2) Key files & what to edit
- `index.html`: app entry, loads `vocab.js` then `script.js` (Babel in-browser). No build step required for frontend changes.
- `script.js`: main application. Large file — key zones:
  - State, localStorage keys, and persistence (search for `localStorage.getItem('vocabApp_')`).
  - `COLLECTIONS` and `TOPIC_CONTENT` define curated vocab/topic sets (IDs are `rank` values from `vocab.js`).
  - SM-2-like algorithm: `calculateAnkiStats` — modify here for spaced repetition behavior.
  - API calls: frontend posts to `/api/translate` and `/api/correct` (see handlers in `functions/api`).
- `vocab.js`: canonical offline vocabulary array `vocab_List`. Each entry is an object with `rank`, `french`, `english`, `example_fr`, `example_en`. Ranks are unique IDs and are used across the app.
- `functions/api/*.js`: serverless handlers that call the Generative API. They expect an environment variable `GEMINI_API_KEY`.

3) Data formats and conventions
- Vocab entry: { rank: number, french: string, english: string, example_fr: string, example_en: string }
- `userProgress` (in `script.js`) is stored in `localStorage` under `vocabApp_progress` and keyed by `rank` (e.g. `userProgress[123] = { interval, box, ease, repetitions, nextReview }`).
- `COLLECTIONS.*[].ids` contains arrays of `rank` numbers referencing `vocab_List`.
- IRREGULAR verb map: `IRREGULAR_MAP` maps conjugated forms -> infinitive (used by lookup/conjugation helpers).

4) Serverless / AI integration notes (critical)
- Functions use Cloudflare-style exports `export async function onRequestPost(context)`. They expect `context.env.GEMINI_API_KEY`.
- The handlers call Google Generative Language endpoints. The functions return raw JSON produced by the model (the code strips triple-backticks). Keep that behavior intact — frontend assumes JSON responses matching the handlers' documented format.
- Required environment variable: `GEMINI_API_KEY`. Without it the functions return a 500 or error message.

5) Local development & testing
- Frontend: open `index.html` in a browser or use a simple static server (e.g. VS Code Live Server). No npm install/build is required because React + Babel are loaded from CDN.
- API functions: reproduce/preview them using Cloudflare Pages Functions or Workers. If not available locally, mock the `/api/*` endpoints (return the same JSON structure the function would return) so the frontend can be tested.

6) Common tasks & examples
- Add new vocabulary: append an object to `vocab.js` and ensure `rank` is unique. Update `COLLECTIONS` in `script.js` if you want the word to appear in curated sets.
- Add a new collection: add an entry to `COLLECTIONS` in `script.js` with `ids` referencing `vocab_List` `rank`s.
- Update translation/correction behavior: edit `functions/api/translate.js` or `functions/api/correct.js`. Keep the functions' output JSON shapes:
  - `/api/translate` returns { "translation": string, "examples": [{"fr":...,"en":...}, ...] }
  - `/api/correct` returns { "corrected": string, "explanation": string }
- Example frontend call (exists in `script.js`):
  fetch('/api/translate', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ text: input, targetLang: 'en' }) })

7) Project-specific patterns to preserve
- Ranks are the canonical ID across the app — do not replace them with array indices.
- The app relies heavily on localStorage keys: `vocabApp_vocab`, `vocabApp_progress`, `vocabApp_voice`, `vocabApp_seenMemes`, `vocabApp_streak`. Keep naming consistent.
- UI is built in a single, large `script.js`; prefer small, focused edits rather than wholesale refactors unless you convert the app to a proper build system and keep the runtime behavior identical.

8) Deployment and secrets
- Deploy the static site and the functions together (Cloudflare Pages + Functions or compatible host). Set `GEMINI_API_KEY` in the deployment environment.

If anything in these notes is unclear or you'd like me to expand a section (for example a step-by-step local mock for the `/api/*` endpoints, or extracting `COLLECTIONS` into its own file), tell me which part to expand and I will iterate.
