const texto = document.querySelector(".text")

const boton = document.querySelector(".button")

boton.innerHTML = "Enviar"

//

let youtube = "https://youtube.com"
let google = "https://google.com"

//

document.body.appendChild(boton)

boton.addEventListener("click", () => {
    this.open(youtube, "_blank")
    this.open(google, "_blank")
    location.reload()
})

//

// let P = prompt("Como estas?")
// let R = confirm("Seguro?")

//

document.addEventListener("keydown", (e) => {
  console.log(`Tecla: ${e.key}` + "<p>");
});
