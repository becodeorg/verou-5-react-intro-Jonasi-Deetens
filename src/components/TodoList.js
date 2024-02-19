import React from 'react'

function TodoList({todos}) {
  return (
    <div>
        <h2>ToDos:</h2>
        <ul>
          {todos.map((todo) => (
            <li>
              <input type="checkbox" /> {todo}
            </li>
          ))}
        </ul>
    </div>
  )
}

export default TodoList