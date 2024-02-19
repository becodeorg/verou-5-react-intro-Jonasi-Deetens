import { useState } from "react";
import AddToDoForm from "./components/AddToDoForm";
import TodoList from "./components/TodoList";
import Header from "./components/Header";

function App() {
  const initialTodos = [];
  const [todos, setTodos] = useState(initialTodos);

  function addTodo (todo) {
    setTodos([...todos, todo]);
  }

  return (
    <div className="App">
      < Header />
      <main className="main">
        <picture className="plant-picture">
          <img className="plant-image" src={require("./plant.png")} alt="top down view picture of a plant 1" width="200px" height="200px"/>
        </picture>
        <div className="paper">
          < AddToDoForm addTodo={addTodo}/>
          < TodoList todos={todos}/>
        </div>
        <picture className="plant-picture">
          <img className="plant-image" src={require("./plant.png")} alt="top down view picture of a plant 2" width="200px" height="200px"/>
        </picture>
      </main>
      <picture className="chair-picture">
        <img className="chair-image" src={require("./chair.png")} alt="top down view picture of a chair" width="300px" height="300px"/>
      </picture>
    </div>
  );
}

export default App;
