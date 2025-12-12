const RangoInput = document.querySelector(".texto")

const Rango = RangoInput.getAttribute("type")

document.writeln("<p>" + Rango + "<p>")

//

RangoInput.setAttribute("type", "text")

//

const editable = document.querySelector(".editable")

editable.setAttribute("contentEditable", "true")

//

document.writeln(RangoInput.className + "<p>")

//

document.writeln(RangoInput.value + "<p>")

//

const ArchivoFoto = document.querySelector(".fotos")

ArchivoFoto.accept = "image/png"

//

const mintext = document.querySelector(".input1")

mintext.setAttribute("minlength", "10")

mintext.required = " "

//

//esto va con css

const tamaño = document.querySelector(".patata")

tamaño.classList.add("grande")

tamaño.style.color = "blue"


//////////////////////////////////////////////////////////////////////////////////////////////


const Parrafo = document.createElement("H1")
Parrafo.innerHTML = "Hola, como vas?"
document.body.appendChild(Parrafo)