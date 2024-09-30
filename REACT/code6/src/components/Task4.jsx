import React, { useState } from "react";

const Task4 = () => {
  const [text, setText] = useState("");

  const handleUpperCase = () => {
    setText(text.toUpperCase());
  };

  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };

  const handleClearText = () => {
    setText("");
  };

  const handleCapitalize = () => {
    const capitalizedText = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setText(capitalizedText);
  };

  return (
    <div>
      <textarea
        name="textArea"
        id="textArea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows="10"
        cols="50"
        placeholder="Enter your text here"
      ></textarea>
      <br />
      <button onClick={handleUpperCase}>UpperCase</button>
      <button onClick={handleLowerCase}>LowerCase</button>
      <button onClick={handleClearText}>Clear Text</button>
      <button onClick={handleCapitalize}>Capitalize</button>
    </div>
  );
};

export default Task4;
