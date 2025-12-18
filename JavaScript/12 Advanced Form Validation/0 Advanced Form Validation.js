
const form = document.querySelector("#registerionForm");

const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");

const error = document.querySelector("#error");
const success = document.querySelector("#success");


form.addEventListener("submit", function (event) {
  event.preventDefault();

  error.textContent = "";
  success.textContent = "";

  const isUsernameValid = validateUsername();

  if (!isUsernameValid) {
    username.focus();
    return;
  }

  success.textContent = "Registration successfully!";
})

function validateUsername() {
  if (username.value === "") {
    setError(username, "Username is required");
    return
  } else {
    setSuccess(username);
    return true;
  }
}

function setError(element, massage) {
  element.classList.add("invalid");
  element.classList.remove("valid");
  error.textContent = massage;
}

function setSuccess(element) {
  element.classList.add("valid");
  element.classList.remove("invalid");
}

