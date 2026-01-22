import { useState } from "react";

export default function useHighlighter() {
  const [loading, setLoading] = useState(false);
  const [highlights, setHighlights] = useState([]);

  const highlightText = async (text, style) => {
    if (!text.trim()) return;

    setLoading(true);
    setHighlights([]);

    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${
          import.meta.env.VITE_GEMINI_API_KEY
        }`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    text: `
Summarize the text below into ONLY the most important ideas.
Rules:
- Rephrase
- Max 5 points
- New line per point
Text:
${text}
                    `
                  }
                ]
              }
            ]
          })
        }
      );

      const data = await res.json();
      const geminiText =
        data?.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!geminiText) return;

      const points = geminiText
        .split("\n")
        .map(p => p.replace(/^[-•*\d.]+\s*/, "").trim())
        .filter(Boolean)
        .slice(0, 5);

      setHighlights(points);
    } catch (err) {
      console.error(err);
      alert("Gemini API failed");
    } finally {
      setLoading(false);
    }
  };

  return { loading, highlights, highlightText };
}
