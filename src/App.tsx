
import { useEffect, useState } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import List from './List';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    async function getTodos() {
      const res = await fetch('http://localhost:3004/todos');
      const data = await res.json();
      setTodos(data);
    }
    getTodos();
  }, []);

  const updateTodo = (id: number, completed: boolean) => {
    const newTodos = todos!.map(todo => {
      if (todo.id === id) return ({ ...todo, completed });
      else return todo;
    });
    setTodos(newTodos);
  };

  const deleteTodo = (id: number) => {
    const newTodos = todos!.filter(todo => todo.id !== id);
    setTodos(newTodos);
  };

  const deleteAllFinished = () => {
    const newTodos = todos!.filter(todo => !todo.completed);
    setTodos(newTodos);
  };


  const toggleAll = (isChecked: boolean) => {
    const newTodos = todos!.map(todo => ({ ...todo, completed: isChecked ? true : false }));
    setTodos(newTodos);
  };

  return (
    <div id="root">
      <div className="todo-container">
        <div className="todo-wrap">
          <Header setTodo={(name) => setTodos([...todos, { id: todos.length + 1, name, completed: false }])} />
          <List todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
          <Footer todos={todos} deleteAllFinished={deleteAllFinished} toggleAll={toggleAll} />
        </div>
      </div>
    </div>
  );
}

export default App;


export type Todo = {
  id: number;
  name: string;
  completed: boolean;
};