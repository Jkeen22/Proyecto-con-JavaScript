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
const f3 = () => {
  document.writeln('Esto es una funcion flecha...')
}
document.writeln(f3())
document.writeln("<p>")
//