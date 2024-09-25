import React, { useState } from "react";

const Task1 = () => {
  const [on, setOn] = useState(false);
  return (
    <div>
      <h1>{on ? "ON" : "OFF"}</h1>
      <button onClick={() => setOn(!on)}>{on ? "OFF" : "ON"}</button>
    </div>
  );
};

export default Task1;

// (condtion)?"true":"false";
