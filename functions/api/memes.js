export async function onRequestGet(context) {
  try {
    // Wir holen die "Hot" Posts von r/FrenchMemes
    const response = await fetch("https://www.reddit.com/r/FrenchMemes/hot.json?limit=30", {
      headers: {
        "User-Agent": "FrenchLearningApp/1.0" // Reddit braucht das, sonst blockieren sie
      }
    });

    if (!response.ok) {
      throw new Error("Reddit API unreachable");
    }

    const data = await response.json();
    
    // Wir filtern nur echte Bilder heraus (keine Videos, keine reinen Text-Links)
    const memes = data.data.children
      .map(child => child.data)
      .filter(post => 
        post.url && 
        (post.url.endsWith('.jpg') || post.url.endsWith('.png') || post.url.endsWith('.jpeg')) &&
        !post.over_18 // Keine NSFW Inhalte
      )
      .map(post => ({
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