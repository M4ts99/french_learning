export async function onRequestGet(context) {
  try {
    // Wir holen die "Top" Posts der "Woche" (Limit 50)
    const response = await fetch("https://www.reddit.com/r/FrenchMemes/top.json?t=week&limit=50", {
      headers: {
        // WICHTIG: Ein User-Agent ist Pflicht, sonst blockt Reddit!
        "User-Agent": "FrenchVocabApp/1.0 (by u/learner)" 
      }
    });

    if (!response.ok) {
      throw new Error(`Reddit API Error: ${response.status}`);
    }

    const data = await response.json();
    
    // Wir filtern sauber
    const memes = data.data.children
      .map(child => child.data)
      .filter(post => 
        post.url && 
        // Nur Bilder zulassen
        (post.url.endsWith('.jpg') || post.url.endsWith('.png') || post.url.endsWith('.jpeg')) &&
        // Kein NSFW (Nicht sicher für Arbeit/Schule)
        !post.over_18
      )
      .map(post => ({
        id: post.id, // WICHTIG für die "Gesehen"-Logik
        title: post.title,
        url: post.url,
        ups: post.ups
      }));

    return new Response(JSON.stringify(memes), {
      headers: { "Content-Type": "application/json" }
    });

  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}