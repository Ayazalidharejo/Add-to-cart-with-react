import React from 'react';
import "../src/index.css"
import { Icon } from '@iconify/react';
const Gettodo = ({ todos, settodos }) => {
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    settodos(updatedTodos);
    localStorage.setItem("Todolist", JSON.stringify(updatedTodos));
  };

  return (
    <div className=' maine container'>
      {todos.map((task, index) => (
        <div className='d-flex  shadow my-3 ' key={index}>
          <h1 className='container   mt-2 march'>
            {task.name}  </h1>
            <button  
              onClick={() => deleteTodo(index)}
              className='bg-danger text-white rounded-2 mx-2 px-4 border-0  btn1'
            >
           { <Icon className='fs-3' icon="tdesign:delete-1 "  />}
           Delete 
          </button>
          
        </div>
      ))}
    </div>
  );
};

export default Gettodo;
