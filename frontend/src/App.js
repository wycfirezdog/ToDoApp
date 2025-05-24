import logo from './logo.svg';
import './App.css';
import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Todo App</h1>
      <TodoForm onTodoCreated={() => window.location.reload()} />
      <TodoList />
    </div>
  );
};

export default App;