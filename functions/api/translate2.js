/* functions/api/translate.js */

export async function onRequest(context) {
  // 1. Nur POST-Anfragen erlauben (Sicherheit)
  if (context.request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  try {
    // 2. Das Wort aus dem Frontend empfangen
    const { word, source_lang = 'fr', target_lang = 'en' } = await context.request.json();

    if (!word) {
      return new Response(JSON.stringify({ error: "No word provided" }), { status: 400 });
    }

    // 3. Die Cloudflare AI aufrufen
    // Wir nutzen das Modell M2M100 (sehr gut für Übersetzungen)
    const response = await context.env.AI.run('@cf/meta/m2m100-1.2b', {
      text: word,
      source_lang: source_lang,
      target_lang: target_lang
    });

    // 4. Das Ergebnis zurücksenden
    return new Response(JSON.stringify({ 
      translation: response.translated_text,
      original: word
    }), {
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: "Translation failed", details: err.message }), { status: 500 });
  }
}