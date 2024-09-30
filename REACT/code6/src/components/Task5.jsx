import { useState } from "react";

const Task5 = () => {
  const [text, setText] = useState("");

  const handleUpperCase = () => {
    setText(text.toUpperCase());
  };
  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };
  const handleClearCase = () => {
    setText("");
  };

  const onChangeValue = (e) => setText(e.target.value);
  return (
    <div>
      <textarea
        value={text}
        onChange={onChangeValue}
        name=""
        id=""
        rows="10"
        cols="50"
      ></textarea>
      <br />
      <button onClick={handleUpperCase}>UpperCase</button>
      <button onClick={handleLowerCase}>LowerCase</button>
      <button onClick={handleClearCase}>Clear</button>
    </div>
  );
};

export default Task5;
