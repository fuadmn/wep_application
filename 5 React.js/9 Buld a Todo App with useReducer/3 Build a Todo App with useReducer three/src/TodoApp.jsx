import { useReducer, useState } from "react";

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "toggle":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
    case "delete":
      return state.filter((todo) => todo.id != action.payload);
    default:
      return state;
  }
};

const TodoApp = () => {
  const [state, dispatcch] = useReducer(reducer, initialState);

  const [text, setText] = useState("");

  return <h1>Todo App</h1>;
};

export default TodoApp;
