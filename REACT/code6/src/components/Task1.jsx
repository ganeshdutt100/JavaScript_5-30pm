import React, { useState } from "react";

const Task1 = () => {
  const [on, setOn] = useState(false);

  const styleFun = () => {
    if (on) {
      return {
        backgroundColor: "red",
        color: "white",
        padding: "40px 90px",
        borderRadius: "10px",
      };
    } else {
      return {
        backgroundColor: "yellow",
        color: "black",
        padding: "40px 90px",
        borderRadius: "10px",
      };
    }
  };

  //   let a =
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eaque iusto dolorem ducimus eum quisquam ratione est sit nostrum, dolore animi eligendi aut beatae voluptates fugit magnam, enim similique itaque.";

  return (
    <div>
      {/* <button onClick={() => setOn(!on)}>{on ? "Hide" : "Show"}</button>

      <p>{on ? a : " "}</p> */}

      {/* <h1>{on ? "ON" : "OFF"}</h1>
      <button onClick={() => setOn(!on)}>{on ? "OFF" : "ON"}</button> */}

      <div className="div" style={styleFun()}>
        <h1>{on ? "Red" : "Yellow"}</h1>
        <button onClick={() => setOn(!on)}>{on ? "Yellow" : "Red"}</button>
      </div>
    </div>
  );
};

export default Task1;

// (condtion)?"true":"false";
