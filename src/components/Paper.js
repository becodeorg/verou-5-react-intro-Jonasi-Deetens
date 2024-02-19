import React, { useState } from 'react'
import AddToDoForm from "./AddToDoForm";
import TodoList from "./TodoList";

function Paper() {
    const initialTodos = [];
    const [todos, setTodos] = useState(initialTodos);
  
    function addTodo (todo) {
      setTodos([...todos, todo]);
    }

    return (
        <div className="paper">
            < AddToDoForm addTodo={addTodo}/>
            < TodoList todos={todos}/>
        </div>
    )
}

export default Paper