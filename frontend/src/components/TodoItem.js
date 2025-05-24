// src/components/TodoItem.js
import React from 'react';

const TodoItem = ({ todo, onDelete }) => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <p>Status: {todo.completed ? 'Completed' : 'Not Completed'}</p>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;