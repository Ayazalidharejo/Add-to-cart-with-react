import React, { useState } from 'react';

function WithoutLocal() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className='mt-5' style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Todo App without Local storage</h1>
      <input className='w-25 mt-4 py-2 rounded-2'
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button className='py-2 ms-2 px-4 btn  btn-primary fw-bold' onClick={addTodo}>Add task</button>

      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ margin: '10px 0' }}>
            {todo}{' '}
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WithoutLocal;
