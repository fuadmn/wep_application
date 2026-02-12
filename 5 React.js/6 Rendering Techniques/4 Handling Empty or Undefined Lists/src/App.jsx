
import { useState } from "react";
function App(){

  // const items = [] 

  // const myInfo = null


  const [myInfo,setInfo] = useState(null)

  
  return(

    <div>
      {/* {
        items.length > 0 ? (
        <ul>
          {
           items.map( items => (
            <li key={items}>{items}</li>
           ))
          }
        </ul>
        ) : <p>No item pound</p>
      } */}
      {
       myInfo ? (<p>{ myInfo.name}</p>) : <p>no info found</p>
      }
     
     </div>
  )
}

export default App;