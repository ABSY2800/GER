import React, { useState } from 'react';

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [taskName, setTaskName] = useState(task.name);
  const [taskDescription, setTaskDescription] = useState(task.description);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    updateTask({ ...task, name: taskName, description: taskDescription });
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm('Voulez-vous vraiment supprimer cette tâche ?')) {
      deleteTask(task.id);
    }
  };

  const toggleComplete = () => {
    updateTask({ ...task, completed: !task.completed });
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <input
            type="text"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
          <button onClick={handleUpdate}>Mettre à jour</button>
        </div>
      ) : (
        <div>
          <h3 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.name}
          </h3>
          <p>{task.description}</p>
          <button onClick={toggleComplete}>
            {task.completed ? 'Marquer comme non terminé' : 'Marquer comme terminé'}
          </button>
          <button onClick={handleEdit}>Modifier</button>
          <button onClick={handleDelete}>Supprimer</button>
        </div>
      )}
    </div>
  );
};

export default TaskItem;
