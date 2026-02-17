// Callbacks //function function lobaasaayo waxaa loyaqaanaa callbacks
// badanaa waxa lugu yaqanaa shaqooyin xilidane dhacaayo ama shaqooyin qafkaan sameeeye qofkale sidhamtiraayo

// function greet(name){
//     console.log("Hello,", name);
// }

// function processUserInput(callbacks){
//    const name = prompt("Enter your name");
//      callbacks(name)
// }

// processUserInput(greet);

function greet(name) {
  console.log("Hello,", name);
}

function processUserInput(callbacks) {
  const name = prompt("Enter your name");
  callbacks(name);
}

processUserInput(greet);
