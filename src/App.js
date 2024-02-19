import { useState } from "react";
import AddToDoForm from "./components/AddToDoForm";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

function App() {
  const initialTodos = ["uno", "dos"];
  const [todos, setTodos] = useState(initialTodos);

  function addTodo (todo) {
    setTodos([...todos, todo]);
  }

  return (
    <div className="App">
      < Header />
      < AddToDoForm addTodo={addTodo}/>
      <hr/>
      < TodoList todos={todos}/>
    </div>
  );
}

export default App;
