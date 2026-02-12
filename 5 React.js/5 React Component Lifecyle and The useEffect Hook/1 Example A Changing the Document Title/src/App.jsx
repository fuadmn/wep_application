// import { useState } from "react";

// function App(){


//   useState(() =>{
//   document.title = "Mc new Title";  
//   })

//   return <h1>UserEffect</h1>
// }

// export default App;



import { useEffect, useState } from "react";

function App(){

  const [title,setTitle] = useState("Hello, React");
  const [name, setName] = useState ("Hamuuda")

  useEffect(() =>{
  document.title = title; 
  console.log({title})
  },[title]);

  
  return(
   <div>
      <h2>Type to change the document title:</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
   </div>
  )
}

export default App;