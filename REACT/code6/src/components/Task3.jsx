import { useState } from "react";

const Task3 = () => {
  const mainDiv = () => {
    return {
      background: "black",
      color: "white",
      margin: "auto",
      width: "300px",
      textAlign: "center",
      padding: "6px 10px 70px 10px",
      borderRadius: "5px",
    };
  };
  const List = () => {
    return {
      background: "white",
      color: "black",
      marginTop: "10px",
      //   width: "300px",
      //   textAlign: "center",
      padding: "6px 0px",
      borderRadius: "5px",
    };
  };
  const [task, setTask] = useState([]); // array
  const [newTask, setNewTask] = useState(""); // input

  const addTask = () => {
    if (newTask.trim()) {
      setTask([...task, newTask]);
      setNewTask("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };
  return (
    <div style={mainDiv()}>
      <h1>To-Do-List</h1>
      <input
        type="text"
        value={newTask}
        onKeyUp={handleKeyPress}
        onChange={(e) => setNewTask(e.target.value)}
        style={{ padding: "10px", borderRadius: "10px" }}
        placeholder="Enter your Task here..."
      />
      <button
        onClick={addTask}
        style={{ padding: "10px", borderRadius: "10px" }}
      >
        Add
      </button>

      <ol>
        {task.map((x, index) => (
          <li key={index} style={List()}>
            {x}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Task3;
