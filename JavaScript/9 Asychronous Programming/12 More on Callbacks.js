
function operate(a, b, callbacks) {
  return callbacks(a, b);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

console.log("Addtition", operate(2, 3, add));
console.log("subtracttion", operate(20, 10, subtract));
