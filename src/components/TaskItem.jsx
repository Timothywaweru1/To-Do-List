import React, { useState } from "react";

function TaskItem({ task, onDelete, onUpdate, toggleTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleEditClick = () => setIsEditing(true);

  const handleChange = (e) => setEditedTitle(e.target.value);

  const handleSave = () => {
    onUpdate(task.id, { ...task, title: editedTitle });
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSave();
  };

  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      {isEditing ? (
        <input
          type="text"
          value={editedTitle}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={handleSave}
          autoFocus
        />
      ) : (
        <span>{task.title}</span>
      )}
      <div className="task-actions">
        <button onClick={handleEditClick}>✏️</button>
        <button onClick={() => onDelete(task.id)}>🗑️</button>
      </div>
    </div>
  );
}

export default TaskItem;