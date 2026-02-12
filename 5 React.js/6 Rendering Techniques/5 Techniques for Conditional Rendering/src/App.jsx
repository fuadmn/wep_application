// import { useState } from "react";
// import Greeting from "./Greeting";
// const App = () => {

//   const [isLoggedIn,setIsLoggedIn] = useState(false);
//   return(
//     <Greeting isLoggedIn={isLoggedIn} />
//   )
// }
// export default App;


import { useState } from "react";
import Notification from "./Notification";
const App = () => {

  // const [isLoggedIn,setIsLoggedIn] = useState(false);

  const [unreadMessage,setUnreadMessage] = useState(["Hi how are you?","hey WhatApp"]);
  return(
    <Notification unreadMessage={unreadMessage}/>
  )
}
export default App;