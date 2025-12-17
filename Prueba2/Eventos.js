boton.addEventListener("click", () => {
  console.log("Hicieron click en el botón");
});   // para saber el click

boton.addEventListener("click", (event) => {
  console.log(event.target);
});

// click       // clic
// mouseenter  // entra el mouse
// mouseleave  // sale
// mousemove   // se mueve

//
