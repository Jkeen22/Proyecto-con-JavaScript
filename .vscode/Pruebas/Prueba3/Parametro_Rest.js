const ARR = ((...numero) => {
    console.log(numero);
})

ARR(1,2,3,4,5)

//

const ARR2 = ((nombre, edad, ...hobbies) => {
    return {
        nombre,
        edad,
        hobbies
    }
})

ARR2("Jean Keen", 23, "Karate", "Basketball", "Dormir")