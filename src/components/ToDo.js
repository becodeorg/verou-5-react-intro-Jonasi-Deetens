import React, { useState } from 'react'

function ToDo() {
    const [dragging, setDragging] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 100 });
  
    const handleMouseDown = (e) => {
      setDragging(true);
    };
  
    const handleMouseMove = (e) => {
      if (dragging) {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }
    };
  
    const handleMouseUp = () => {
      setDragging(false);
    };
  
    return (
        <li style={{
            position: 'absolute',
            top: position.y,
            left: position.x,
            cursor: dragging ? 'grabbing' : 'grab',
            padding: '10px',
            color: 'white',
            filter: 'drop-shadow(0 0 4px white)',
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        className='todo'>
            <input type="checkbox" id="todo" name="todo" />
            ToDo</li>
    )
}

export default ToDo