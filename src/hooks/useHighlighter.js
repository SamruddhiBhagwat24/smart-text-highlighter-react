import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function useHighlighter() {
  const [loading, setLoading] = useState(false);
  const [highlights, setHighlights] = useState([]);
  const [status, setStatus] = useState(""); 

  const highlightText = async (text) => {
    if (!text.trim()) return;

    setLoading(true);
    setHighlights([]);
    setStatus("Analyzing text...");

    try {
      const genAI = new GoogleGenerativeAI(
        import.meta.env.VITE_GEMINI_API_KEY
      );

      const model = genAI.getGenerativeModel({
        model: "models/gemini-2.5-flash",
      });

      const result = await model.generateContent(`
Extract ONLY 5 short, clear points.
Each point on a new line.
No headings. No explanations.

Text:
${text}
      `);

      const raw = result?.response?.text?.() || "";

      const points = raw
        .split("\n")
        .map(line =>
          line.replace(/^[-•*\d.]+\s*/, "").trim()
        )
        .filter(line => line.length > 10)
        .slice(0, 5);

      if (points.length === 0) {
        setStatus("Couldn’t extract highlights this time. Try again.");
      } else {
        setHighlights(points);
        setStatus("");
      }

    } catch (err) {
      console.warn("Gemini temporary issue:", err);
      setStatus("AI is busy. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return { loading, highlights, status, highlightText };
}
