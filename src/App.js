import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App() {
  // State
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [headline, setHeadline] = useState('');

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
    headlineChange();
  }, [todos, status]);

  // Functions
  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const headlineChange = () => {
    if (status === 'completed') {
      setHeadline("Things You've Done");
    } else if (status === 'uncompleted') {
      setHeadline('Things You Should Do');
    } else {
      setHeadline('Set Yourself Some Reminders');
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>{headline}</h1>
      </header>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus} />
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
