// Spread and Rest Operators // elements hesataa inaasd ku darto markaad rabto
// array hestaa inaad ku xerto raba array kale
//Objact hestaa waxad rabtaainaad ku xerto Objrcts kale

// Spread Operators
const numbers = [1, 2, 3];

const allNumbers = [...numbers, 5, 10, 80];

console.log(allNumbers);

// rest Operators

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(22, 33, 44, 2443, 53454, 25454));
