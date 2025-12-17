const promesa = new Promise(resolve => {
    setTimeout(() => resolve('Ya esta preparado la/el...'), 2000)
})

promesa.then( resultadoDentro => {
    console.log(resultadoDentro);
})