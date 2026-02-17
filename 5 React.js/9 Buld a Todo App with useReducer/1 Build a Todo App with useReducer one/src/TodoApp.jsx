const initialState = [];

const reducer = (state, action)  => {
switch(action.type){
    case 'add':
        return[...state, action.payload];
}
}


const TodoApp = () => {
    return(
      <h1>Todo App</h1>
    )
}

export default TodoApp;