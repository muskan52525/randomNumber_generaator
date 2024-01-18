import React, { useState } from 'react';

import './App.css'

function App() {
  const [click, setClick] = useState([])
  const addNumber=()=>{
    return(
     setClick([
      ...click,
      {
        id: Date.now(),   // Use Date.now() for a unique identifier
        value:Math.random()*10
      }
     ])
    )
  }
  return (
    <>
      <div>
        <ul>
          {click.map(item => (
            <li key={item.id}>{item.value}
            </li>
          ))}
        </ul>
        <button onClick={addNumber}>click</button>
      </div>

    </>
  )
}

export default App
