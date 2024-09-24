import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <input
        value={count}
        size={1}
        style={{
          borderRadius: "50%",
          width: "30px",
          height: "30px",
          margin: "10px",
          textAlign: "center",
        }}
      ></input>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};

export default UseState;
