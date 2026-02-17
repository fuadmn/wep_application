const initialState = [

    {id: 1, title: "todo 1", completed: true},
    {id: 2, title: "todo 2", completed: false},
    {id: 3, title: "todo 3", completed: false},
    {id: 4, title: "todo 4", completed: false},
];

const reducer = (state, action)  => {
switch(action.type){
    case 'add':
        return[...state, action.payload];
    case 'toggle':
        return  state.map((todo) =>  todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)
}
}


const TodoApp = () => {
    return(
      <h1>Todo App</h1>
    )
}

export default TodoApp;