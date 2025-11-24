
// by Id
const header = document.querySelector("#header");

console.log(header);
//by name
const text = document.querySelector(".text");

console.log(text);

//by tag name
const buttons = document.querySelector("button");

console.log(buttons);

// textContent waxay badaleesaa text ku dhaxjiro elementiga
// innerHTML   waxa waaye inaad badasho body waxa ku dhaxjiro inaad badasho weye

function changeContent() {
  // console.log("changeContent called");
  header.textContent = "Welcome to the DOM";
}

function ChangeElement() {
  text.innerHTML = `Hi welcome to my website <strong> consider to like my website </strong>`;
}
