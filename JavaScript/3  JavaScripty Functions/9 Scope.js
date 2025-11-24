// Scope
// wax loyqaanaa Variables kage iteka shaqeeynaa
// Global Scope
// function banaan kiis hadii ladhigo Variables mel kasto ayaa lag istimaalikaraa
// waxkasto oo function ka banaan kiis lagu qeexo waa Global scope

// Global Variable

console.log("-------Global Variable-----------------");

let globalVariable = "I'm Global Variable";

function showVariable() {
  console.log(globalVariable);
}

showVariable();

console.log(globalVariable);

// local Variable

console.log("--------local Variable---------------");

function showLocalVariable() {
  let localVariable = "I m Local Variable";
  console.log(localVariable);
}

// console.log(localVariable);

showLocalVariable();

// Block Scope (ES6):

//let const hadeey yahiin ma soo dhafikaraan Block Scope dhaxdiisa
{
  console.log("-----Block Scope (ES6):--------");

  let myName = "Mc";
  const age = 90;
  var year = 2025;

  // function showLocalVariable(){
  //   let localVariable = "I'm local Variable "
  //     console.log(localVariable);

  // }

  // showLocalVariable();

  let showLocalVariable = function () {
    //function ka nuucaan waxa u dhigmaa var camal
    let localVariable = "I'm local Variable ";
    console.log(localVariable);
  };

  showLocalVariable();
}

showLocalVariable();
console.log(year);
