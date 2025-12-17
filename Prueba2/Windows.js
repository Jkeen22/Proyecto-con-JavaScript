const boton = document.querySelector(".button")

// let alerta = alert("Hola");
let Tiempo = setTimeout(() => {}, 1000); 

//

const nuevaVentana = window.open("https://google.com","_blank","width=600,height=400");

nuevaVentana.stop() // mantener la pagina cargando

nuevaVentana.close() // cierra la pagina

if (nuevaVentana.closed) {
  console.log("La ventana esta abierta");
} else {
  console.log("La ventana esta cerrada");
}

//