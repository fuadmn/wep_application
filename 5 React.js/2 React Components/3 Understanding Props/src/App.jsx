// import Greeting from './Greeting'
// function App(){
//         const currentUser = "Xasan";
//          const  role = "Admin";
//     return(
//         <>
//           <Greeting currentUser={currentUser}
//           role={role}/>

//           <Greeting currentUser={currentUser}
//           role={role}/>
//         </>
//     )
// }

// export default App;




 import Greeting from './Greeting'
 
 function App(){     
    return(
        <>
          <Greeting currentUser={"Hamuuda"}
          role={"Super Admin"}
          age={19}
          />

          <Greeting currentUser={"Kalid"}
          role={"Student"}/>
        </>
    )
}

export default App;