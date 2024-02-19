import React from 'react'

function AddToDoForm() {
  return (
    <div>
        <label for="todo">New To Do: </label>
        <input type="text" id="todo" name="todo" placeholder="Your todo"></input><br />
        <button type='submit'>Add</button>
    </div>
  )
}

export default AddToDoForm