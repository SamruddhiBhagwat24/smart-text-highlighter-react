import { useState } from "react";

export default function TextInput({ onChange , placeholder }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    onChange(e.target.value);
  };

  const words = text.trim() ? text.trim().split(/\s+/).length : 0;

  return (
    <>
      <textarea
        placeholder={placeholder || "Paste your paragraph here..."}
        value={text}
        onChange={handleChange}
      />
      <div className="counter">
        Words: {words} | Characters: {text.length}
      </div>
    </>
  );
}
