
// import { useEffect, useState } from "react";

// function App(){

//  const [width,setWidth] = useState(window.innerWidth);
  
//   return(
//    <div>
//       <p>Window Width: {width}</p>
//    </div>
//   )
// }

// export default App;



import { useEffect, useState } from "react";

function App(){

 const [width,setWidth] = useState(window.innerWidth);
  
 useEffect(() => {
 const handleResuze = () => setWidth(window.innerWidth);

 window.addEventListener("resize", handleResuze);

 return() => {
  window.addEventListener("resize",handleResuze);
 }
 },[]);

  return(
   <div>
      <p>Window Width: {width}px</p>
   </div>
  )
}

export default App;