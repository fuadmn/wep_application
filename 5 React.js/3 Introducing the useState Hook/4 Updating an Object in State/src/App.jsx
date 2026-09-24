import { useState } from "react";
const App = () => {

  const [user, setUser] = useState({name: "Alice", age: 25 });
  
  return (
    <div>
      <p>Name : {user.name}, Age : {user.age}</p>
    </div>
  )
}

export default App


// import { useState } from "react"

// function App(){

//  const [user, setUser] = useState({name: "Alice", age: 25 , bio: "Full stack"});

//   const updateAge = () => { 
//     setUser({...user, age: user.age +1 })
//   }

//   return(
//     <>
//       <p>Name : {user.name}, Age : {user.age}, Bio : {user.bio}</p>
//        <button onClick={updateAge}>Increase Age</button>
//     </>
//   )
// }

// export default App;