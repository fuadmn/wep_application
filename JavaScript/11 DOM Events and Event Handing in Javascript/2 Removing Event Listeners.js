// submit form markaa data ka qaadeesid
//  change // select box marko dorto usarka inaa helikartid is badalada dhacaayo
//  click
// keydown  // userka marko tabto keyboardka lo
// focus

const button = document.querySelector("#myButton");
const removeEvents = document.querySelector("#removeEvents");

// element.addEventListener('')

function handleClick() {
  console.log("Button Clicked");
}

button.addEventListener("click", handleClick);

removeEvents.addEventListener("click", function () {
  button.removeEventListener("click", handleClick); // ka qaad awooda oo heestay ee click da
  console.log("Click event removed");
});

button;
handleClick