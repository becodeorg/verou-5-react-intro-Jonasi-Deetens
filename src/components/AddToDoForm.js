import React, { useRef } from 'react'

function AddToDoForm({addTodo}) {
  const inputRef = useRef();

  function submit()
  {
    const todoInput = inputRef.current;
    addTodo(todoInput.value);

    todoInput.value = '';
  }

  return (
    <div>
        <label for="todo">New To Do: </label>
        <input ref={inputRef} type="text" id="todo" name="todo" placeholder="Your todo"></input><br />
        <button onClick={submit}>Add</button>
    </div>
  )
}

export default AddToDoForm