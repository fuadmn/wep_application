// const Greeting = ({isLoggedIn}) => {
//     // #Option 1
//     if(isLoggedIn){
//         return <h1>Welcome bacl!</h1>
//     }else{
//         return <h1>Please sing in.</h1> 
//     }
// }
// export default Greeting;


const Greeting = ({isLoggedIn}) => {
     // #Option 1
        return <h1>{isLoggedIn ?"Welcome bacl!" : "Please sing in."}</h1>

}
export default Greeting;