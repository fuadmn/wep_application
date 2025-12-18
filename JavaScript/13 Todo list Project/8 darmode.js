const toggleButton = document.querySelector("#mode-toggle");

toggleButton.addEventListener("click", switchMode);

function switchMode() {
  document.body.classList.toggle("dark-mode"); // toggle dark-mode maheesataa haa hadoo dhaho walagaqaadaa ? hadoo dhaho maheesti walasiinaa
  toggleButton.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleButton.textContent = "Toggle Light Mode";

    localStorage.setItem("mode", "dark");

  } else {
    toggleButton.textContent = "Toggle Dark Mode";
    localStorage.setItem("mode", "light");

  }
}

window.addEventListener("DOMContentLoaded", function () {   //window waxa laga wadaa shaashada oo dhan

  //localStorage checking

  const saveMode = localStorage.getItem("mode");

  if (saveMode === "dark") {

    document.body.classList.add("dark-mode");
    toggleButton.classList.add("dark-mode");
    toggleButton.textContent = "Toggle Light Mode"
  } else {
    toggleButton.textContent = "Toggle Dark Mode"

  }

})
