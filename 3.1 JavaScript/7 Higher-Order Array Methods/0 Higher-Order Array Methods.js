
// console.log("_______________Higher-Order Array Methods__________");

// // Higher-Order Array Methods 

// // forEach // waxaa loistimaalaa array hal mar aad ka dhameesatida hooshaade // tusaale kale list aad hestaa inaad hal shaqo ka qabatid


// // callback // method aqbalaayo metodkale


// const fruits = ["Apple", "Panana", "Jerry"];

// fruits.forEach((fruits) => {
//     console.log("I Like " + fruits);
    
// })


// console.log("----------------------------------------");

// fruits.forEach(function(fruits) {
//     console.log("I Like " + fruits);
    
// })

// console.log("_______________map() Method__________");

// // map() // waxa u sameeyaa new array o shaqo ka gaban kartid

// const number = [2,3,4,5];

// const newNumber = number.map((number) => number *2) 
// console.log(newNumber);


// // console.log("---");

// // fruits.forEach(function(fruits) {
// //     console.log("I Like " + fruits + " " + index);
    
// // })

// console.log("_______________filter() Method__________");

// //filter() method // waxaa lagu filtergareeyaa liska 
//  // tudaalee waxad arabtaa inaad kala reebto dad list arday gacata ku heesaa waxa rabtaa liska dadka bontadood ka badan yahay 60 dad kale iska soo rebto

//  const numbers = [1,2,3,4,5,6];

//  const eventNumber = numbers.filter((number) => number % 2 === 0)
//  console.log(eventNumber);
 

//  const score = [40,50,60,70,80,90];

//  const pass = score.filter((score) => score >= 60)

//  console.log(pass);
 

//  console.log("_______________reduce() Method__________");


//  // 6 reduce() Method  // list array udhiibe waxad u ku siinaa hal resulting ka soo baxay 

// const numberss = [1,2,3,4,5];

// const sum = numberss.reduce((total, num) => total + num,0)
//     console.log(sum);
    






















    
console.log("_______________Higher-Order Array Methods__________");

const HigherOrder = ["xasan","ali","nux"];
HigherOrder.forEach((HigherOrder) => {
   console.log(HigherOrder)
})

console.log("_______________map() Method__________");

const number = [1,2,3,4,5,6,7,8,9,10]
const eventNumber = number.map((number) => number* 5 )
console.log(eventNumber)

console.log("_______________filter() Method__________");

const numbers = [1,2,3,4,5,6,7,8,9,10]

const yallo = numbers.filter((numbers) => numbers % 2 === 0);
console.log(yallo)
 console.log("_______________reduce() Method__________");
 
 const cuma = numbers.reduce((total, num) => total + num, 0)
 console.log(cuma)