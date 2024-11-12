import React, { useState } from 'react';

const Todoapp = ({ todos, settodos }) => {
  const [task, setTask] = useState("");

  const Addtodo = () => {
    const data = {
      'name': task
      
    };
    if (task==="") {
      alert('writite something')
      return
    }
    const todosForAdding = [...todos, data];
    localStorage.setItem("Todolist", JSON.stringify(todosForAdding));
    settodos(todosForAdding);
  };

  return (
    <>
      <div className='container text-center mt-5'>
        <h1 className='my-5'>Todo Application In React with local storage</h1>
      </div>
      <div className='text-center'>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className='py-2 w-25 rounded-2 text-success'
          type="text"
          placeholder="Enter Task"
        />
        <button
          onClick={() => Addtodo()}
          className='mx-1 btn btn-primary py-2 '
        >
          Add task
        </button>
      </div>
    </>
  );
};

export default Todoapp;
