const colorSelect = document.querySelector("#color");
const selectColor = document.querySelector("#SelectedColor");

const username = document.querySelector("#username");
const cureentUsername = document.querySelector("#cureentUsername");

colorSelect.addEventListener("change", function () {
  console.log("change to", colorSelect.value);
  selectColor.textContent = `Selected Color: ${colorSelect.value}`;
});

username.addEventListener("change", function () {
  console.log("cureent is:", username.value);
  cureentUsername.textContent = `Current Username is: ${username.value}`;
});
