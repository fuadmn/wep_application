
function fetchUserData(){
    
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const success = false;

            if(success){
                resolve({id: 1, name: "john Smith"});
            }else{
                reject("Failed to fetch user data");
            }
        },1000);
    })
}

// fetchUserData()

// .then((data) => console.log("User data",data)) //then waa marko seccuss noqdo
// .catch((err) => console.log(err)) //.catch() qabo wixi cilad ah




async function displayUserData() {
    try{
        const user = await fetchUserData();
        console.log(user);
    }catch(err){
        (err)
    console.log(err);
    
}
}

displayUserData();