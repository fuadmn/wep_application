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

  // mc@dugsiye.com
  const emailPattern = /^[^ ]+@[^ ]+\\.[a-z]{2,3}$/;

  if (!email.match(emailPattern)) {
    error.textContent = "Please enter a valid email address";
    return;
  }

  if (password.length < 8) {
    error.textContent = "Password must be at least 8 characters long.";
    return;
  }

  if (password !== confirmPassword) {
    error.textContent = "Password do not match.";
    return;
  }

  error.textContent = "Registered successfully";
});
