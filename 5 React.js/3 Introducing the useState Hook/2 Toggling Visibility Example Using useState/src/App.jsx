import { useState } from "react"

function App(){

  const [isVisible, setIsVisible] = useState(true);

  const toggle = () => {
    setIsVisible(!isVisible);
  }

  return(
    <>
    <button onClick={toggle}>{isVisible ? 'Hide' : 'Show'} Message</button>
    {isVisible &&  <p>This taggable message</p>}
    
    </>
  )
}

export default App;