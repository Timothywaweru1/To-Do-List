import { useState } from 'react';
import './index.css';
import AddTaskForm from './components/AddTaskForm';
import TaskItem from './components/TaskItem';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
  };

  const handleUpdateTask = (id, updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map(task => (task.id === id ? updatedTask : task))
    );
  };

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="container">
      <header>
        <h1>Task Tracker</h1>
        <p>Write down your tasks</p>
      </header>

      <AddTaskForm addTask={handleAddTask} />

      <div className="tasks-header">Tasks</div>

      <div id="tasks-list">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDelete={handleDeleteTask}
              onUpdate={handleUpdateTask}
              toggleTask={toggleTask}
            />
          ))
        ) : (
          <p className="no-tasks">No tasks yet. Add one above!</p>
        )}
      </div>

      <div className="task-stats">
        {tasks.length === 0
          ? 'No tasks yet'
          : `${tasks.length} task${tasks.length > 1 ? 's' : ''} total`}
      </div>
    </div>
  );
}

export default App;
