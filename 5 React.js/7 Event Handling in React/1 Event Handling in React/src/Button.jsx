// import { useState } from "react";

// const Button = ({id}) => {
  
//     const handleClick = (id) => {
//        alert("Button clicked! " + id );
//     }
//     return(
//         <button onClick={() => handleClick(id)}>Click me</button>
//     )
// }

// export default Button;

import { useState } from "react";

const Button = ({id}) => {
  
    const handleClick = (id) => {
       alert("Button clicked! " + id );
    }
    return(
        <button onMouseEnter={() => console.log("Mouse entred")}
        //  onClick={() => handleClick(id)}
        >Click me</button>
    )
}

export default Button;