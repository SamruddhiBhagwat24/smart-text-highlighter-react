import { useEffect, useState } from "react";
import TextInput from "../components/TextInput";
import Results from "../components/Results";
import Loader from "../components/Loader";
import useHighlighter from "../hooks/useHighlighter";

export default function Home() {
  const [text, setText] = useState("");
  const [content, setContent] = useState(null);

  const { loading, highlights, highlightText } = useHighlighter();

  //Fetch centralized content
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setContent(data))
      .catch((err) => console.error("Failed to load data.json", err));
  }, []);

  return (
    <div className="container">
      <h1 className="app-title">{content?.title}</h1>
      <p className="tagline">{content?.tagline}</p>

      <TextInput
        onChange={setText}
        placeholder={content?.placeholder}
      />

      <button onClick={() => highlightText(text)}>
       Highlight
    </button>


      <Loader show={loading} />

      <Results highlights={highlights} />
    </div>
  );
}
