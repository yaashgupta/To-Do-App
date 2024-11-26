import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (description) => {
    const newTask = {
      id: Date.now(),
      description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div id="root">
      <div className="todo-container">
        <h1>To-Do List</h1>
        <TaskInput onAdd={addTask} />
        <TaskList tasks={tasks} onComplete={completeTask} onDelete={deleteTask} />
      </div>
    </div>
  );
};

export default App;
