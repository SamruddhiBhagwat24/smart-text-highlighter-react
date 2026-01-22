export default function Results({ highlights, loading, error }) {
  if (loading) return null;

  if (error) {
    return <p className="error-text">{error}</p>;
  }

  if (!highlights.length) {
    return <p className="muted-text">No highlights generated yet.</p>;
  }

  return (
    <div className="results-card">
      <h2 className="results-title">Essential Insights</h2>

      <ul className="results-list">
        {highlights.map((item, idx) => (
          <li key={idx} className="result-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
