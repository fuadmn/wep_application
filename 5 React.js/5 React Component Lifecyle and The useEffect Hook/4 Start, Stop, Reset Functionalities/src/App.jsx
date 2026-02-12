import { useState, useEffect} from "react";

const App = () => {

   const [time, setTime] = useState(0);

   const [isRunning,setIsRunning] = useState(false);


   useEffect(() => {
      //1000ms = 1s
      let timerId;
      if(isRunning){
        timerId = setInterval(() => {
         setTime((prev) => prev +1)
      },1000);
      }
      return () => clearInterval(timerId);
      
   },[isRunning]);
    
   const handleStart = () => {
      setIsRunning(true);
   }
   
   const handleStop = () => {
    setIsRunning(false);
   }

   const handleReset = () => {
      setIsRunning(false);
      setTime(0)
   }

   return(
       <div>
         <h1>Stopwatch {time} Stopwatch</h1>
         <button disabled={isRunning} onClick={handleStart}>Start</button>
         <button disabled={!isRunning} onClick={handleStop}>Stop</button>
         <button onClick={handleReset}>Reset</button>
       </div>
   )
}

export default App;