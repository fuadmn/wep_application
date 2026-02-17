import { useReducer, useState } from "react";

// iinitail sate -> data-da aan rabno in aan manage gareeyo
 /// reducer function -> ninkii manage greyn laha data-da

 // sate => maxa hada gacanta ku hayaaa
  // action => maxa gaban rabaa a , waxa soo racinayaa waxa lagabanaayo (type)

const initialState = { count : 0 }

const reducer = (state, action) => {

switch(action.type){
    case 'increment':
        return { count : state.count + 1}
    case 'decrement':
        return { count : state.count - 1}
    case  'reset':
        return initialState;
    default:
        return state;
  }
}





const CounterWithReducuer = () => {

    const  [counter,setCounter] = useState(0);

    const [state, dispatch] = useReducer(reducer,initialState);

    return(
        <div>
             <h2> Count : {state.count}</h2>
            <button onClick={() => dispatch({type: 'decrement'})}>Increment-</button>
           
            <button onClick={() => dispatch({type: "increment"})}>Increment+</button>
            <button onClick={()=> dispatch({type: "reset"})}>Reset</button>
        </div>
    )
}

export default CounterWithReducuer;