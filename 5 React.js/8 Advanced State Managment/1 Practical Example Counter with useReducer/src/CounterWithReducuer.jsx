import { useState } from "react";

// iinitail sate -> data-da aan rabno in aan manage gareeyo
 /// reducer function -> ninkii manage greyn laha data-da

 // sate => maxa hada gacanta ku hayaaa
  // action => maxa gaban rabaa a , waxa soo racinayaa waxa lagabanaayo (type)

const initialState = { count : 0 }

const reducer = (state, action) => {

switch(action.type){
    case 'incerement':
        return { count : state.count + 1}
    case 'decerement':
        return { count : state.count - 1}
    default:
        return state;
  }
}





const CounterWithReducuer = () => {

    const  [counter,setCounter] = useState(0);

    return(
        <div>
            <button onClick={() => setCounter(counter-1)}>Increment-1</button>
            {counter}
            <button onClick={() => setCounter(counter+1)}>Increment+1</button>
        </div>
    )
}

export default CounterWithReducuer;