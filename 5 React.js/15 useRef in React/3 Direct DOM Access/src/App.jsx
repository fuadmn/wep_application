import React, { useRef } from 'react'

import './App.css';

function App ()  {

  const cardRef = useRef(null)

  const handleToggleHighlight = () => {
  if(cardRef.current){
    // cardRef.current.style = "   ";
    cardRef.current.classList.toggle('highlight');
  }
  }

  return (
    <div>
       <div style={{ textAlign: 'center'}}>
        <div id="something" ref={cardRef} className="card">
          <h1>Interactive Card</h1>
          <p>Click the button to toggle the highligh!</p>
        </div>
        <button onClick={handleToggleHighlight}>
          Toggle Highlight
        </button>
       </div>
    </div>
  )
}

export default App;
