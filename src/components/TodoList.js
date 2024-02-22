import React from 'react'

function TodoList({todos, removeTodo}) {
  return (
    <div>
        <h2>ToDos:</h2>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input type="checkbox" checked={todo.completed} onChange={() => console.log('do')} /> {todo.title}
              <button onClick={() => removeTodo(todo)}> X </button>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default TodoList