const form = document.querySelector("#registerionForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.querySelector("#username").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const confirmPassword = document.querySelector("#confirmPassword").value;

  const error = document.querySelector("#error");

  // username checking

  if (username === "") {
    error.textContent = "Username is required";
    return; //code kan  meshaan ku celi
  }

  error.textContent = "Registered successfully";
});
