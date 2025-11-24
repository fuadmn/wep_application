
// console.log("__________________Arrays and Objects______________________");

// // Arrays and Objects

// // Arrays
// // waa maxay Arrays waa data structure in lagu kediyo value badan hal iyo ka badan

// let name = ["Hamuuda","Kalid","Mc","Omar"];

// console.log(name);
// console.log(name[0]);


// console.log("__________________Array Methods______________________");

//         let names = ["Hamuuda", "Kalid", "Mc", "Omar"];

//         console.log("// before");

//         console.log(names);

//         console.log("//after push");

//         names.push("Farxiyo");

//         console.log(names);

//         console.log("//after pop");

//         names.pop();

//         console.log(names);

//         console.log("// after unshift");

//         names.unshift("Wireless");

//         console.log(names.length);

//         console.log(names);

//         console.log("// after shift");

//         names.shift();

//         console.log(names);

//         console.log(names.length);






// console.log("__________________Objects______________________");

// //Objects
// // properties // key value oo ka kuwan yahay

// let person = {
//                 name : "Hamuuda",
//                 age : 30,
//                 city: "Afgooye",
//             }
            
//             console.log(person.city);
            
//             console.log(person.name);
            
//             console.log(person.age);
            
//             // qaabka array loosoo dawaco
            
//             console.log(person["age"]);
//             console.log(person["name"]);
//             console.log(person["city"]);
            
            
//             let person2 = {
//                 name : "Kalid",
//                 age : 20,
//                 city:"Bosaaso"
//             }
            
//             console.log(person2.city);








// console.log("__________Adding and Modifying Properties.html___________");

//             //Objects
// // properties // key value oo ka kuwwan yahay

// let persons = {
//                 name : "Hamuuda",
//                 age : 30,
//                 city: "Afgooye",
//             }
            
//             // console.log(person.city);
            
//             // console.log(person.name);
            
//             // console.log(person.age);
            
//             // // qaabka array loosoo dawaco
            
//             // console.log(person["age"]);
//             // console.log(person["name"]);
//             // console.log(person["city"]);
            
            
//             let persons2 = {
//                 name : "Kalid",
//                 age : 20,
//                 city:"Bosaaso",
//             }
            
//             console.log(persons2);
            
//             person2.name = "khalid";
            
//             person2.birthDate = "1996-02-20";
            
//             console.log(persons2);
            


            
// console.log("__________Methods in Objects___________");

//     // Methods in Objects // lasocodo function

//     let person3 = {
//                 name : "Kalid",
//                 age : 20,
//                 city:"Bosaaso",
//                 greets : function(){       
//                 console.log('Hi Hwo are you doing', this.city);
//                 //this. waa properti noo ogalaanaayo mesha aan ku dhaxjirno in awoodno inaa istimaalno
//                }
                
//                }
            
            
//             console.log(person3);
            
//             person2.name = "khalid";
            
//             person2.birthDate = "1996-02-20";
            
//             console.log(person3);
            
//             console.log(person3.greets()); //greet() function ka markoo lasodo baraket waxa sooda wacdaa function dhaxdiisa waxa ku jira
            




// console.log("__________Arrays of Objects___________");

//             // Arrays of Objects 

//  let testStudent = ["hamuud", "kalid", "nafisa", "abdi"];

//  let student = [
//     {
//         name : "Hamuuda",
//         class : "CA141",
//         id: "123e",
//         age : 30
//     },
//     {
//        name: "Abdirizak",
//        class: "CA151",
//        id: "123r",
//        age: 29
//     }
// ]
// console.log(student[0].name);

// console.log(student[0].age);

// console.log(student[1].age);





















console.log("__________________Arrays and Objects______________________");

const libreary = ["Math","Arabic","Bio","Chimety"];

console.log(libreary);
console.log(libreary[3]);

console.log("__________________Array Methods______________________");

libreary.push("Phct");
console.log(libreary);
libreary.pop()
console.log(libreary);
libreary.unshift("History")
console.log(libreary);
libreary.shift()
console.log(libreary);
console.log(libreary.length);

console.log("__________________Objects______________________");

const school = {id: 1, name: "xasan", address: "dallo"};
console.log(school);
console.log(school.name);

console.log("__________Adding and Modifying Properties.html__________");

const person = {
   id: 1,
   name: "xasan",
   city: "xamar",
   greet : function(){
     console.log("Hi Hwo are you doing, this.name");
   }
}

console.log(person);

console.log("__________Arrays of Objects___________");


const libr = ["Math","Arabic","Bio","Chimety"];

const schools = [ 
  {id: 1,
     name: "xasan",
      address: "dallo"
    },

     {id: 2,
     name: "deeqo",
      address: "warshiiq"
    }
  ]


  console.log(schools);
  console.log(schools[0].id);
  console.log(schools[1].name);
  