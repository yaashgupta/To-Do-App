import React, { useState } from 'react';

const TaskInput = ({ onAdd }) => {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task.trim()) {
      onAdd(task);
      setTask("");
    } else {
      alert("Task cannot be empty!");
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Enter a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        style={{ padding: '10px', marginRight: '10px', width: '250px' }}
      />
      <button onClick={handleAdd} style={{ padding: '10px' }}>Add Task</button>
    </div>
  );
};

export default TaskInput;
