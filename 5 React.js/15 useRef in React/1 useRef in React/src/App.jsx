import { useRef, useEffect } from 'react';

const App = () => {


  const inputRef = useRef(null);

  console.log(inputRef);
   // Immutable (State)
    // Mutable (useRef)

    useEffect(() =>{
    if (inputRef.current) {
      inputRef.current.focus();
    }
    },[]);

  return(
   <div>
     <input ref={inputRef} type="text" placeholder='Focus on mount!'/>
   </div>
  )
}

export default App;