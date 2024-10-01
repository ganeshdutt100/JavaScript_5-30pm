import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect hook called");
    // cleanup function
    // return () => {
    //   console.log("cleanup function called");
    // };
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
};

export default UseEffect;
