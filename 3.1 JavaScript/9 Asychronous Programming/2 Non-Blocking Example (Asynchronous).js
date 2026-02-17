// Asynchronous Non-blocking // waa code and ku xayireenin dadka ka dabeeyo shaqadooda ineey qabsadaan asigane inoo qabsado shaqadiisa

// setTimeout //code kan xiliga fulineesid waqti ku xirtid weye

// 1000ms 1 second

console.log("Imediate fetch");

function getUserData(callback) {
  setTimeout(() => {
    console.log("After 3 second");
    // console.log('nin kaan markey shaqadiisa dhamaato maxa lagu ulinaa')
    const user = { id: 1, name: "john Smith" };
    callback(user);
  }, 3000);
}

console.log("Starting to fetch user data");

getUserData(function (user) {
  console.log(user);
});

console.log("This message shows up immediately");
