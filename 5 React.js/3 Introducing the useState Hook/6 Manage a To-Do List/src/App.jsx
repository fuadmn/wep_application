import { useState  } from "react";

function App(){
  return(
    <div>
      <h1>Todo List</h1>
      <input type="text" placeholder="Enter a new to-do"/>
      <button>Add</button>
      <ul>
        <li>Eat Healty</li>
      </ul>
    </div>
  )
}

export default App;