// Higher-Order Array Methods

// forEach // waxaa loistimaalaa array hal mar aad ka dhameesatida hooshaade // tusaale kale list aad hestaa inaad hal shaqo ka qabatid

// callback // method aqbalaayo mwthod

const fruits = ["Apple", "Panana", "Jerry"];

fruits.forEach((fruits) => {
  console.log("I Like " + fruits);
});

console.log("---");

fruits.forEach(function (fruits) {
  console.log("I Like " + fruits);
});
