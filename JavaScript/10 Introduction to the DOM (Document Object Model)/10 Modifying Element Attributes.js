// setAttribute  / waxa waaye markaan Attribute cusub sameeneeno
// getAttribute  waxa weye markaan Attribute horey u jiray xogka heleeno
// removeAttribute
// style    waxa weye makaaan style waxa ka

function changeImage() {
  const image = document.querySelector("#image");

  const url = prompt("Plaece enter your image url");

  image.setAttribute("src", url);

  // image.setAttribute('src','https://images.unsplash.com/photo-1743068417491-95b9e08a7fbc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D')
}
