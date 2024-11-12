import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Todoapp from './todo-app';
import { useEffect, useState } from 'react';
import Gettodo from './Gettodo';
import WithoutLocal from './Without_local_storage';

function App() {
  const [todos, settodos] = useState([]);

  const fatchalltodos = () => {
    const Todolist = localStorage.getItem('Todolist');
    return Todolist ? JSON.parse(Todolist) : [];
  };

  useEffect(() => {
    const Alldotos = fatchalltodos();
    settodos(Alldotos);
  }, []); // Dependency array should be outside the function body

  return (
    <div>
      <Todoapp todos={todos} settodos={settodos} />
      <Gettodo todos={todos} settodos={settodos} />
      <WithoutLocal/>
    </div>
  );
}

export default App;
