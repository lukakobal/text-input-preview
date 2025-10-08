import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState(""); // shrani vneseno besedilo

  const handleChange = (e) => {
    setText(e.target.value); // posodobi text ob vsakem vnosu
  };

  const clearText = () => {
    setText(""); // izbriše vnos
  };

  return (
    <div className="app">
      <h1>📝 Text Preview App</h1>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={handleChange}
      />
      <p className="preview">Preview: {text}</p>
      <button onClick={clearText}>Clear</button>
    </div>
  );
}
