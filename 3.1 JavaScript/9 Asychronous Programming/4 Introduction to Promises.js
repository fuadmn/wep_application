// Promises // waa qeeb kamid ah object in lagu daraa Asynchronous maqan

// Peding; //marka kuwaad ee shaqada bilaabaneeso ee la sugaayo jawaabta
// waa marka ubreeshinka u dhaco SuccessFully..
// Fulfilled: waa markoo obareeshika si  seufully u dhaco
// Rejected; // warka ee cilad dhacdo

function fetchUserData() {
  return new Promise((resolve, reject) => {  //resolve markoo seccuss o dhacaa //reject marko lilad dhacdo
    setTimeout(() => {
      const success = true
      if (success) {
        resolve({ id: 1, name: "john Smith" });
      } else {
        reject("Failed to fetch user data");
      }
    }, 3000);
  });
}

fetchUserData()
  .then((data) => console.log("User data", data)) //then waa marko seccuss noqdo
  .catch((err) => console.log(err)); //.catch() qabo wixi cilad ah

// console.log(fetchUserData());
