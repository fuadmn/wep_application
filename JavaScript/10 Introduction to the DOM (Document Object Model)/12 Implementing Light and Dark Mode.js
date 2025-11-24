function changeImage() {
  const image = document.querySelector("#image");

  image.setAttribute(
    "src",
    "https://images.unsplash.com/photo-1743068417491-95b9e08a7fbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D"
  );

  //element.style.
  image.style.border = "2px solid red";
  image.style.padding = "10px";
  image.style.backgroundColor = "#cfc2dc";
}

function changeContentStyle() {
  const header = document.querySelector("#header");
  const text = document.querySelector(".text");

  header.style.color = "skyblue";
  text.style.padding = "20px";
  text.style.border = "1px solid black";
  text.style.fontSize = "30px";
}

function setLightMode() {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
}

function setDarkMode() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
}
