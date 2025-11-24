 
 async function reedAddress() {
    console.log("reead Addrress");
    const response = await fetch('./10 29Exercise.json');
    const data = await response.json('./10 29Exercise.json')
    console.log("response:", data);
    
 }

 reedAddress();
 