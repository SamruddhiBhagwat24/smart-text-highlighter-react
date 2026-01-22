function TextInput({ value, onChange, onHighlight, loading }) {
  return (
    <>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Paste your text here..."
      />

      <button onClick={onHighlight} disabled={loading}>
        {loading ? "Analyzing…" : "Generate Highlights"}
      </button>
    </>
  );
}

export default TextInput;
