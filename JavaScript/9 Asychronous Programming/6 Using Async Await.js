//Async/Await
// Async data waqtigeed qadaneeso la ugeen
// Await waxa laga wadaaa sug inta data ka imaaneeso

function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = false;

      if (success) {
        resolve({ id: 1, name: "john Smith" });
      } else {
        reject("Failed to fetch user data");
      }
    }, 1000);
  });
}

// fetchUserData()
// .then((data) => console.log("User data",data)) //then waa marko seccuss noqdo
// .catch((err) => console.log(err)) //.catch() qabo wixi cilad ah



async function displayUserData() {
  try {   // try and  catch // wixi cilad ah in mel lugu yelo wixi successFull mel lagu yelo
    //succuss
    const user = await fetchUserData();
    console.log(user);
  } catch (err) {
    // error
    console.log(err);
  }
}

displayUserData();
