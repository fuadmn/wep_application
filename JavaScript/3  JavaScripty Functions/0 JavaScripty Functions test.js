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



































console.log("___________Function Declaration:_____________");
// function a(){
//     console.log("somali")
// }
// a();

function Declaration (){
    console.log("Declaration");
}
Declaration();
console.log("____Function Parameters and Arguments __________");

// function b(kaal){
//     console.log(  kaal)
// }
// b("qalid");

function Parameters(city){
    console.log(city);
}
Parameters("somalia");
console.log("______Function Parameters and Arguments___________");

// function c(a,b){
//     console.log("hello", a+b)
// }
// c(22,22);

function Arguments(a,b){
    console.log("Hello", a+b);
}
Arguments(2,3);
console.log("__________Function Return Values_____________");

// function d(a,c){
//     return a * c;
// }
// d(22,11)

function Return(a,b){
    console.log(a * b);
    return a * b;
}
Return(100,100)
console.log("________________Function Expression_____________");

// const gaol = function(){
//     console.log("fal")
// }
// gaol()

const Expression = function(){
    console.log("kenya");
}
Expression();

console.log("___________________Arrow Function (ES6)______________");

// const dallo = () =>{
// console.log("loo")
// }
// dallo()

const Arrow = () => {
    console.log("Arrow");
}
Arrow()
console.log("_____________________Scope___________________________");

let mon = "nin";

const bal = () => {
    console.log("var")
}
bal()

const kal = function(){
    let wwe = "kaw";
    console.log(object)
}