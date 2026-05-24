const Greeting = ( {currentUser,role,age}) => {

    return(
        <>
            <h1>Hello, {currentUser}</h1>
            <span>Your role is : { role}</span>
            <span>Your age is : {age}</span>
         </>
        
    )
}

export default Greeting;