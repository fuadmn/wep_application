import React, { useEffect, useRef, useState } from 'react'

function App ()  {


  const [count, setCount] = useState(0);
  const PrevCountRef = useRef();

  useEffect(() => {
    PrevCountRef.current = count;
  },[count])

  console.log(PrevCountRef.current)

  return (
    <div>
      <h2>crurrent:{count}</h2>
      <h2>previous: {PrevCountRef.current}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default App;
