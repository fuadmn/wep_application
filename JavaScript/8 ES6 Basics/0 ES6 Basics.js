
// console.log("____________Template Literals__________");

// // ES6 Basics // waxa walbo javascript inaa isku xerikarno  waxam isticmaalenaa (``)

// const name = "Hamuuda";
// const city = "Afgooye";


// const message = `${name} Welcome to ${city}`;

// console.log(message);

// // const oldMessage = "Hello" + "Welcome " + city;

// // console.log(oldMessage);

// console.log("____________Array Destructuring__________");

// // Array Destructuring //waxa qiimo ka la soo baxdaan elmetiga

// const fruits = ["panana", "Apple", "jerry"];

// // const panana = fruits[0];
// // const apple = fruits[1];
// // const jerry = fruits[2];

// const [hamuuda,apple,jerry] = fruits;

// console.log(hamuuda);

// console.log("____________Object Destructuring__________");

// // Object Destructuring

// const  person = {names: "Alice", age: 25, cityy: "Wondderland"}

// const {names, age, cityy} = person;

// // const name = person.name;
// // const age = person.age;
// // const city = person.city;

// console.log(name);

// console.log(age);

// console.log(city);

// console.log("____________Default Parameters__________");

// // Default Parameters //hadaa ibastid Parameters wareer kumaqabo hadii lagu soo basi waayo magacaan Guest istimaal

// function greet (name="Guest"){

//    console.log(`Hello ${name}`);
       
//    }
   
//    greet("Hamuuda");

//    console.log("___________Spread and Rest Operators__________");

// // Spread and Rest Operators // elements hesataa inaasd ku darto markaad rabto 
// // array hestaa inaad ku xerto raba array kale
// //Objact hestaa waxad rabtaainaad ku xerto Objrcts kale


// // Spread Operators
// const numbers = [1,2,3];

// const allNumbers = [...numbers, 5, 10,80];

// console.log(allNumbers);

// // rest Operators

// function sum(...numbers){
//     return  numbers.reduce((total, num) => total + num,0)
// }

// console.log(sum(20,30,50,100,150));



















console.log("____________Template Literals__________");

const wow = "xasan";
const jow = "xasan";

const flat = `${wow} Welecome to ${jow}`;
console.log(flat)
console.log("____________Array Destructuring__________");

const tol = ["xasan","nux","ali"];

const [xasan,nux,ali] = tol;

console.log(xasan)
console.log(nux)
console.log(ali)
console.log("____________Object Destructuring__________");

const hol = {id: 1, name: "xasan"};

const {id,name} = hol;
console.log(id)
console.log(name)
console.log("____________Default Parameters__________");
function greet(name = "Guest"){
   console.log(`"hello " ${name}`)
}
greet()

console.log("___________Spread and Rest Operators__________");

const f = ["xasan","nux","wwe"]

const c = [...f,"warsame","xasaaa"];
console.log(c)


const nu = [1,44,55];

const so = nu.reduce((total, nu) => total + nu , 0)
console.log(so)