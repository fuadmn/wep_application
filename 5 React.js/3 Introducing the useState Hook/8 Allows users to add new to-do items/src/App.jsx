import { useState  } from "react";

function App(){

  const [todos, setTodos] = useState([])
  const [inputValue,setinputValue] = useState("")

  const handleAddTodo = () => {
    
    if(inputValue.trim() !== ""){
        const newTodo = {
        id: crypto.randomUUID(),
        text: inputValue,
        completed: false,
    }
    setTodos([...todos, newTodo]);
    setinputValue("");
   }
  }

  return(
    <div>
      <h1>Todo List</h1>
      <input type="text" placeholder="Enter a new to-do" onChange={(e) => setinputValue(e.target.value)} value={inputValue}/>
      <button onClick={handleAddTodo}>Add</button>
      <ul>
       {
        todos.map( todos => (
         <li>{todos.text}</li>
        ))
        }
      </ul>
    </div>
  )
}

export default App;