function f1(a, b) {
  return a + b;
}
document.writeln(f1(1, 3));
document.writeln("<p>");
//

let f2 = function (c, d) {
  return c * d;
};
document.writeln(f2(1, 5));
document.writeln("<p>");
//

const f3 = nombre => document.writeln(`Esto es una funcion flecha con ${nombre}`)
f3("Keen")
document.writeln("<p>")
//

function f4(a, b) {
  return a + b;
}
let suma = f4(1,3)
document.writeln(suma);
document.writeln("<p>");