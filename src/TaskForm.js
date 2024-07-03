import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || description === '') {
      setError('Les deux champs sont requis.');
      return;
    }

    const newTask = {
      id: Date.now(),
      name,
      description,
      completed: false,
    };

    addTask(newTask);
    setName('');
    setDescription('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nom de la tâche"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description de la tâche"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Ajouter</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default TaskForm;
