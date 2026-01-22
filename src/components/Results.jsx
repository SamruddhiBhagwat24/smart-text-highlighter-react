export default function Results({ highlights }) {
  if (!highlights.length) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(highlights.join("\n"));
    alert("Copied to clipboard");
  };

  return (
    <div className="results">
      <h3>✨ Essential Insights</h3>

      <button onClick={handleCopy}>Copy</button>

      {highlights.map((point, i) => (
        <div key={i} className="highlight-box">
          {point}
        </div>
      ))}
    </div>
  );
}
