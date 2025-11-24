

// function delaySimulated(){
//     alert(" Starting user data");
//     return "delay,Simulated";
// }

// console.log("Usrer");

// const user = delaySimulated();

// console.log( user);
// console.log("This message is blocked until user data is fetched.");



function delaySimulated(callback){
    setTimeout(() => {
        console.log("delay,true..");
        const user = "delay.,Simulated";
         callback(user)
    },3000)
}

delaySimulated(function(user){
    console.log(user);
})

