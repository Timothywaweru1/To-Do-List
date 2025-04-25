import React, { useState } from 'react';

function AddTaskForm({ addTask }) {
  const [taskTitle, setTaskTitle] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (taskTitle.trim()) {
      addTask({ id: Date.now(), title: taskTitle, completed: false });
      setTaskTitle('');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="add-task-container">
  <input
    type="text"
    placeholder="Add a new task"
    value={taskTitle}
    onChange={(e) => setTaskTitle(e.target.value)}
  />
  <button type="submit">Add Task</button>
</form>

  );
}

export default AddTaskForm;