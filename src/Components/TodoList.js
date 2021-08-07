import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos }) => {
  return (
    <div>
      <div className="todo-container">
        <ul className="todo-list">
          {todos.map((todo) => (
            <Todo text={todo.text} id={todo.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
