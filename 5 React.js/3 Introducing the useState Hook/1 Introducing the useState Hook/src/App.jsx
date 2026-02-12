import { useState } from "react"

function App(){


  const [count, setCount] = useState(0)

  const increment = () => {
     
    setCount(count + 1)

    console.log(count)
  }

  return(
    <>
    <p>You clicked {count} tomes</p>
    <button onClick={increment}>Click me</button>
    </>
  )
}

export default App;