import { useState, useReducer } from "react";

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "toggle":
      return state.map((todo) =>todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo);
    case "delete":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

const TodoApp = () => {
  const [state, dispatcch] = useReducer(reducer, initialState);

  const [text, setText] = useState("");

  const hanleAdd = () => {

     if(text.trim()){
        const newTodo = {
            id: Date.now(),
            text,
            completed: false
        }
        dispatcch({type: "add", payload: newTodo})
        setText('');
        
     }

  }

  return (
   <div>
     <h1>Todo App</h1>
     <div>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter a new Todo"/>
      <button onClick={hanleAdd}>Add</button>
    </div>
    <ul>
      {
        state.map( todo => (
          <li key={todo.id}>
             <span>{todo.text}</span>
             <button>delete</button>
          </li>
        ))
      }
    </ul>
   </div>
    
  )
};

export default TodoApp;
