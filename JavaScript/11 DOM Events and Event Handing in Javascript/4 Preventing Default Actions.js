
const form = document.querySelector("#myForm");

const forMessage = document.querySelector("#forMessage");

form.addEventListener("submit", function (event) {
  //event wax u hayaa infarmeshin dheri ah oo ku sabsan event markaas dhacoyo
  event.preventDefault(); // preventDefault waxa laga wadaa refareesh ka oo sameenoyo ka hor istaga
  console.log("submitted...");

  forMessage.textContent = "Form submision prevented";
});
