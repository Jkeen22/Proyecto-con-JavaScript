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