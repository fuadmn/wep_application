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

  		const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if(!email.match(emailPattern)){
        error.textContent = "please enter a valid email addrss";
        return
      }

  error.textContent = "Registered successfully";
});
