// console.log("___________Function Declaration:_____________");


// // Functions and Scope


// // Functions 
// // waa code mel lagu xeraxeray ma in codkeena lasku habeyo ma shaqada halmar qabanaa dib loistimaalaa


// // Function Declaration:
// function greetss() {
//     console.log('Hello World!');
// }

// greetss();




// console.log("____Function Parameters and Arguments __________");

// // Function Parameters and Arguments 
// function greet(name){

//     console.log('Hello ' + name);
    
// }

// greet("Hamuuda");
// greet("Hawo");
// greet("Shukri");
// greet("Karim");




// console.log("____Function Parameters and Arguments____");

// // Function Parameters and Arguments 
// function calculateTotal (price,quantity) {

//     console.log("Total price: $" + price * quantity);
    
// }

// calculateTotal(2,10);
// calculateTotal(5, 2);
// calculateTotal(16, 3);
// calculateTotal(8,5);





// console.log("_______Function Return Values________");

// // Function Return Values 
// //Function wax u soo celiyaa Return Values

// //Return Values Function shaqadoo soo ciliyey in dib logu faideesado

// function add(a,b){
//     // console.log(a + b);
//     return a+b;// return waxa soo ciliyaa ee wax madawaco
    
// }

// // console.log(add(10,30));

// let result = add(10,30);

// console.log(result / 2);





// console.log("________________Function Expression_____________");

// // Function Expression  // Function loodhibaayo Variable guraayo ma   masul ka ah

// const greets = function(name){

//     console.log("Hello " + name);
// }

// greets("Halimo");

// greets("kadijo");




// console.log("_____________________Arrow Function (ES6)_____________");

// // Arrow Function (ES6)
// const salaam = (name) => {

//     console.log("Hello " + name);
    
// }

// salaam("Halimo");






// console.log("_____________________Scope___________________________");

// // Scope 
// // wax loyqaanaa Variables kage iteka shaqeeynaa
// // Global Scope 
// // function banaan kiis hadii ladhigo Variables mel kasto ayaa lag istimaalikaraa
// // waxkasto oo function ka banaan kiis lagu qeexo waa Global scope

// // Global Variable

// console.log("-------Global Variable----------");

// let globalVariable = "I'm Global Variable"

// function showVariable(){

//     console.log(globalVariable);
// }

// showVariable();

// console.log(globalVariable);



// // local Variable

// console.log("--------local Variable-------------");

// function showLocalVariable(){

//     let localVariable = "I m Local Variable";
//     console.log(localVariable);
    
// }

// // console.log(localVariable);

// showLocalVariable();

// // Block Scope (ES6):

// //let const hadeey yahiin ma soo dhafikaraan Block Scope dhaxdiisa 
//  {
//     console.log("-----Block Scope (ES6):------------");
    
//     let  myName = "Mc"; 
//     const age = 90;
//     var year = 2025;

//     // function showLocalVariable(){
//     //   let localVariable = "I'm local Variable "
//     //     console.log(localVariable);
        
//     // }

//     // showLocalVariable();
    
//     let showLocalVariable = function(){ //function ka nuucaan waxa u dhigmaa var camal
//         let localVariable = "I'm local Variable "
//         console.log(localVariable);
        
//     }

//     showLocalVariable();

//  }

//  showLocalVariable();
//  console.log(year);



































console.log("____Function Declaration:______");
// function a(){
//     console.log("somali")
// }
// a();
function dallo(){
    console.log("Somalia")
}

dallo()
console.log("____Function Parameters and Arguments _____");

// function greet(name){

//     console.log('Hello ' + name);
    
// }

// greet("Hamuuda");
// greet("Hawo");
// greet("Shukri");
// greet("Karim");

function jum(name){
    console.log('hello ' + name)
}
jum("xasan")



console.log("____Function Parameters and Arguments_____");

// function add(a,b){
//     // console.log(a + b);
//     return a+b;// return waxa soo ciliyaa ee wax madawaco
    
// }

// // console.log(add(10,30));

// let result = add(10,30);

// console.log(result / 2);

function number(a,b){
    return a + b;
}

console.log(number(10,30));

let result = number(2,30);
console.log(result / 2)


console.log("__Function Return Values___");

// function d(a,c){
//     return a * c;
// }
// d(22,11)

function number(a,b){
    return a * b;
}
number(5,10)

console.log("______Function Expression____");

// const gaol = function(){
//     console.log("fal")
// }
// gaol()

const kalkaak = function(){
    console.log("welcome")
}
kalkaak()

console.log("____Arrow Function (ES6)___");

// const dallo = () =>{
// console.log("loo")
// }
// dallo()

const gul = () => {
console.log("hodon")
}
gul()
console.log("______Scope_________");


//     let  myName = "Mc"; 
//     const age = 90;
//     var year = 2025;

//     // function showLocalVariable(){
//     //   let localVariable = "I'm local Variable "
//     //     console.log(localVariable);
        
//     // }

//     // showLocalVariable();
    
//     let showLocalVariable = function(){ //function ka nuucaan waxa u dhigmaa var camal
//         let localVariable = "I'm local Variable "
//         console.log(localVariable);
        
//     }

//     showLocalVariable();

//  }

//  showLocalVariable();
//  console.log(year);



const kal = function(){
    let wwe = "kaw";
    console.log(object)
}

const monthy = "sandka oo dhan waa 12 bil";
const global = () => {
    console.log(monthy)
}
global()

function localVariable(){
let lacal = "local waxa u ka shaqeeyaa local";
console.log("hello " + lacal)

}

localVariable()