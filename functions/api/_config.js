// Zentrale Konfiguration für alle API-Dateien
// Ändere hier das Modell und es gilt für ALLE APIs!

export const GEMINI_MODEL = "gemini-2.0-flash";

// Hilfsfunktion um die URL zu bauen
export function getGeminiUrl(apiKey) {
  return `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`;
}
