import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', description: '', dueDate: '', priority: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

  const addTask = () => {
    setTasks((prev) => [...prev, newTask]);
    setNewTask({ title: '', description: '', dueDate: '', priority: '' });
  };

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isComplete = true;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
    <h2 className="container-header">Task Management Status</h2>
    <div className="Task-form">
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={newTask.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={newTask.description}
        onChange={handleInputChange}
      />
      <input
        type="date"
        name="dueDate"
        value={newTask.dueDate}
        onChange={handleInputChange}
      />
      <input
        type="text"
        placeholder="Priority"
        name="priority"
        value={newTask.priority}
        onChange={handleInputChange}
      />
      <button onClick={addTask}>Add Task</button>
      </div>
      <ul className="Task-list">
      {tasks.map((task, index) => (
        <li className="list-item" key={index}>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <p>Due Date: {task.dueDate}</p>
        <p>Priority: {task.priority}</p>
        <button onClick={() => completeTask(index)}>Complete</button>&nbsp;
        <button onClick={() => deleteTask(index)}>Delete</button>
      </li>
    ))}
  </ul>
</div>
);
};

export default App;
