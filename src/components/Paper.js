import React, { useState } from 'react'
import AddToDoForm from "./AddToDoForm";
import TodoList from "./TodoList";

function Paper() {
    const initialTodos = [];
    const [id, setId] = useState(0);
    const [todos, setTodos] = useState(initialTodos);
  
    function addTodo (todo) {
        setTodos([...todos, { id: id, title: todo, completed: false }]);
        setId(id + 1);
    }

    function removeTodo (todo) {
        const todoIndex = todos.indexOf(todo.id);
        console.log(id + " " + todo.id);
        console.log(todoIndex);
        if (todoIndex != -1) todos.splice(todoIndex, 1);
    }

    return (
        <div className="paper">
            < AddToDoForm addTodo={addTodo}/>
            < TodoList todos={todos} removeTodo={removeTodo}/>
        </div>
    )
}

export default Paper