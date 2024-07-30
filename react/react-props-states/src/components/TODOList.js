import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const addTodo = () => {
    setTodos([...todos, { title, text, done: false }]);
    setTitle('');
    setText('');
  };

  const toggleDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
            <h2>{todo.title}</h2>
            <p>{todo.text}</p>
            <button onClick={() => toggleDone(index)}>
              {todo.done ? 'Undo' : 'Done'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;