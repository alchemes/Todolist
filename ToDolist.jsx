import React, { useState } from "react";
function ToDoLists() {
  const [tasks, setTasks] = useState([]);
  const [newtask, setNewTasks] = useState("");
  function handleInputchange(event) {
    setNewTasks(event.target.value);
  }
  const sty = {
    padding: "10px",
    margin: "5px 3px",
    border: "none",
    fontWeight: "bold",
    backgroundColor: "lightBlue",
    color: "white",
    borderRadius: "5px",
  };
  const styy = {
    padding: "10px",
    margin: "5px 5px",
    border: "none",
    fontWeight: "bold",
    backgroundColor: "lightGreen",
    color: "white",
    borderRadius: "5px",
  };
  const styl = {
    margin: "150px",
    backgroundColor: "gray",
    width: "400px",
  };
  const s = {
    marginLeft: "30px",
    marginRight: "10px",
    paddingLeft: "25px",
  };
  const ss = {
    padding: "10px 70px",
  };
  function addtask() {
    if (newtask.trim() !== "") {
      setTasks((t) => [...t, newtask]);
      setNewTasks("");
    }
  }
  function deletetask(index) {
    setTasks(tasks.filter((_, i) => i !== index));
  }
  function movetaskup(index) {
    if (index > 0) {
      const updatedtasks = [...tasks];
      [updatedtasks[index], updatedtasks[index - 1]] = [
        updatedtasks[index - 1],
        updatedtasks[index],
      ];
      setTasks(updatedtasks);
    }
  }
  function movetaskdown(index) {
    if (index < tasks.length - 1) {
      const updatedtasks = [...tasks];
      [updatedtasks[index], updatedtasks[index + 1]] = [
        updatedtasks[index + 1],
        updatedtasks[index],
      ];
      setTasks(updatedtasks);
    }
  }
  return (
    <div style={styl}>
      <h1 style={ss}>To Do List</h1>
      <div>
        <input
          style={s}
          type="text"
          placeholder="enter a task.."
          value={newtask}
          onChange={handleInputchange}
        />
        <button style={styy} onClick={addtask}>
          add
        </button>
        <ol style={s}>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button style={sty} onClick={() => deletetask(index)}>
                delete
              </button>
              <button style={sty} onClick={() => movetaskup(index)}>
                up
              </button>
              <button style={sty} onClick={() => movetaskdown(index)}>
                down
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
export default ToDoLists;
