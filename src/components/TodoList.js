import React from 'react'
import ToDo from './ToDo'

function TodoList() {
  return (
    <div>
        <h2>ToDos:</h2>
        <ul className='todo-list'>
            < ToDo />
            < ToDo />
        </ul>
    </div>
  )
}

export default TodoList