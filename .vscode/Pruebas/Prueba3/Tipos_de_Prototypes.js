console.log(Object.getPrototypeOf([]));
console.log(Object.getPrototypeOf({}));
console.log(Object.getPrototypeOf(""));
console.log(Object.getPrototypeOf(1));

const f = function f() {}

console.log(Object.getPrototypeOf(f)); // las funciones no tiene tipos de propiedades