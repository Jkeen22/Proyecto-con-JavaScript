try {
  let palabra = prompt("Dime la palabra");
  let K1 = palabra.split(" ");
  let array = K1.length;
  let arrR = {};
  let arrT = [];

  // let contador = 0;

  for (let p of K1) {
    arrR[p] ? arrR[p]++ : (arrR[p] = 1);
    arrT.push(arrR[p]);
  }
} catch (error) {
  alert("Combo maximo");
}
