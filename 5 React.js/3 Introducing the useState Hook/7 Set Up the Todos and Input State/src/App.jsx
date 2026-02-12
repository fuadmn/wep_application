import { useState  } from "react";


function App(){

  const [todos, setTodos] = useState([])
  const [inputValue,setinputValue] = useState(" ")

  const handleAddTodo = () => {
    
    const newTodo = {
      id: crypto.randomUUID(),
      text: inputValue,
      completed: false,
    }
    console.log(newTodo)
  }


  return(
    <div>
      <h1>Todo List</h1>
      <input type="text" placeholder="Enter a new to-do" onChange={(e) => setinputValue(e.target.value)} value={inputValue}/>
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        <li>Eat Healty</li>
      </ul>
    </div>
  )
}

export default App;