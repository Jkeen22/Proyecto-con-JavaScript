let num1
let num2

num1 = 10
num2 = 5

function dividir(a, b) {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      reject("No se puede dividir entre 0");
    } else {
      resolve(a / b);
    }
  });
}


async function calcular() {
  try {
    const resultado = await dividir(num1, num2);
    console.log(resultado);
  } catch (error) {
    console.log("Error:", error);
  }
}

calcular();
