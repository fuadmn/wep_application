function delaySimulated(){
    return new Promise((delay,Simulated) => {
        setTimeout(()=>{
         const succuss = true;
         if(succuss){
            delay("delay...")
         }else{
            Simulated("Simulated.....");
         }
        })
    },3000)
}

delaySimulated()
.then((data) => console.log(data))
.catch((err) => console.log(err))
