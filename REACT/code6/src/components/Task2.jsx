import { useState } from "react";

const Task2 = () => {
  const [background, setBackground] = useState(false);

  const backgroundFum = () => {
    if (!background) {
      return {
        backgroundColor: "gray",
        color: "white",
      };
    } else {
      return {
        backgroundColor: "blue",
        color: "white",
      };
    }
  };
  return (
    <div>
      <div
        className="card"
        style={{ ...backgroundFum(), borderRadius: "20px" }}
      >
        <p>{background ? "Gray" : "Blue"}</p>
        {/* <p></p> */}
        <button onClick={() => setBackground(!background)}>
          Change Color in {background ? "Blue" : "Gray"}
        </button>
      </div>
    </div>
  );
};

export default Task2;
