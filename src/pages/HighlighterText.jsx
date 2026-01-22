import { useState } from "react";
import TextInput from "../components/TextInput";
import Results from "../components/Results";
import Loader from "../components/Loader";
import useHighlighter from "../hooks/useHighlighter";

function HighlighterText() {
  const [text, setText] = useState("");

  const { highlights, loading, status, highlightText } = useHighlighter();

  return (
    <div className="page-container">
      <h1 className="app-title">Text Highlighter</h1>

      <p className="subtitle">
        Paste your text below and generate key highlights using AI.
      </p>

      <TextInput
        value={text}
        onChange={setText}
        onHighlight={() => highlightText(text)}
        disabled={loading}
      />

      <Loader show={loading} />

      <Results
        highlights={highlights}
        loading={loading}
        status={status}
      />
    </div>
  );
}

export default HighlighterText;
