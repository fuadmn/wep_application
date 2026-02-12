import { useState, useEffect} from "react";

const App = () => {

   const [time, setTime] = useState(0)

   useEffect(() => {
      //1000ms = 1s
     const timeId = setInterval(() => {
         // console.log("new way");
         setTime((prev) => prev +1)
      },1000);
 
      return () => clearInterval(timeId);
      
   },[])
    
   return(
       <div>
         <h1>Stopwatch {time} seconds</h1>
         <button>Start</button>
         <button>Stop</button>
         <button>Reset</button>
       </div>
   )
}

export default App;