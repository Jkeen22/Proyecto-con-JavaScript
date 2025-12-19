let contador;
contador = 0;

let respuesta;
//
for (i = 0; i < 50; i++) {
  contador++;
  document.writeln(contador);
}
document.writeln("<p>");
//
while (contador < 100) {
  contador++;
  document.writeln(contador);
}
document.writeln("<p>");
//
// do {
//   respuesta = prompt("Haz practicado JavaScript? ").toLocaleLowerCase();
// } while (respuesta !== "si");

// document.writeln("Esta bien");
// document.writeln("<p>");
//
let array;

array = new Array("Pablo", "Juan");

for (const ARR in array) {
  document.writeln(ARR);
}
document.writeln("<p>");
//
for (const element of array) {
  document.writeln(element);
}
document.writeln("<p>");
