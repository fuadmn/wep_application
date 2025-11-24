// createElement //element cusub in lagu soo daro
// appendChild  // element website ku jiro in element ku dhaxdarno
// removeChild //element ka sarto

const list = document.querySelector("#list");

function addItem() {
  // Create a new list item

  const newItem = document.createElement("li"); // element cusub sameeno

  //change the content
  newItem.textContent = "New Item";

  list.appendChild(newItem);
}

function removeItem() {}
