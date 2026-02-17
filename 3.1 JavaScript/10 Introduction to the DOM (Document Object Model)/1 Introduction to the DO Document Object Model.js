
// getElementById`:** Selects an element by its ID.
// getElementsByClassName`:** Selects elements by their class name.
// getElementsByTagName`:** Selects elements by their tag name.
//querySelector`:** Selects the first element that matches a CSS selector.
//`querySelectorAll`:** Selects all elements that match a CSS selector.

const header = document.getElementById("header"); //singal

console.log(header);
const text = document.getElementsByClassName("text"); //getElementsByClassName marka jamac rabto inaad soo qabato jamac

console.log(text);

const buttons = document.getElementsByTagName("button")[0]; //document kugu xeren

console.log(buttons);
