import { useState } from "react"



const App = () => {

  const [inputValue, setInputValue] = useState("");
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("submitted",inputValue);

    // form sub
  }

  const handleChange = (event) => {
    
    setInputValue(event.target.value);

  }


  return (
   <form onSubmit={handleSubmit}>
    <input type="text" value={inputValue} onChange={handleChange} />
    <button type="submit">Submit</button>
   </form>
  )
}

export default App
