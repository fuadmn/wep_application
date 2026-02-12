import { useState } from "react"

function App(){

  const [name, setName] = useState("")

const handleChange = (event) => {
  console.log(event.target.value)
  // setName(event.target.value)
}

  return(
    <>
     <input type="text" value={name} onChange={handleChange}/>
     <p>Hello,{name}</p>
    </>
  )
}

export default App;