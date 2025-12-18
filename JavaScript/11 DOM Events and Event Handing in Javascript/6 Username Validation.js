const form = document.querySelector("#registerionForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.querySelector("#username").value; // value waxa u sameenaa in xogta ku jirta lasoo aqriyo
  const email = document.querySelector("#email").value;
  const confirmPassword = document.querySelector("#confirmPassword").value;

  const error = document.querySelector("#error");

  // username checking

  if (username === '') {
    // user name hadii wax ku jirin waxad soo dawacdaa
    error.textContent = "Username is required";
    return; //code kan meshaan ku jooji waxa ka danbeeya yan lo gudbin
  }

  error.textContent = "Registered successfully";
});
