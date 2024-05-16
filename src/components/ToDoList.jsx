import React, { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState([]);
  let [newTask, setNewTask] = useState([]);
  function addTask() {
    newTask = document.getElementById("taskInput").value;
    if (newTask.trim().length > 0) {
      setTask((t) => [...t, newTask]);
      document.getElementById("taskInput").value = "";
    }
  }

  function removeTask(index) {
    setTask(task.filter((_, i) => i !== index));
  }
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];
      setTask(updatedTask);
    }
  }
  function moveTaskDown(index) {
    if (task.length - 1 > 0) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index],
      ];
      setTask(updatedTask);
    }
  }
  return (
    <div>
      <h1>To do list</h1>
      <input type="text" id="taskInput" placeholder="Enter your task...." />
      <button onClick={addTask}>Add task</button>

      <ul>
        {task.map((e, i) => (
          <li key={i}>
            <span>{e}</span>
            <button onClick={() => removeTask(i)}>Delete</button>
            <button onClick={() => moveTaskUp(i)}>Move up</button>
            <button onClick={() => moveTaskDown(i)}>Move down</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
