const texto = document.querySelector(".text")

document.querySelector(".button1").addEventListener("click", () =>{
    localStorage.setItem("idioma", "es")
    cambiarIdioma()
})

document.querySelector(".button2").addEventListener("click", () =>{
    localStorage.setItem("idioma", "en")
    cambiarIdioma()
})

function cambiarIdioma() {
    
    const idioma = localStorage.getItem("idioma")

    if (idioma === "es") {
        texto.textContent = "Hola, yo soy..."
    } else if (idioma === "en"){
        texto.textContent = "Hello, I'am..."
    }
}

cambiarIdioma()