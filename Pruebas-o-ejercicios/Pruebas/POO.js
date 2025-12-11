class animal {
    constructor(animal, especie, edad, color) {
        this.animal = animal
        this.especie = especie
        this.edad = edad
        this.color = color
        this.info = `Este es un ${animal} raza ${especie} tiene ${edad} años y es de color ${color}`
    }
}

let perro = new animal('perro', 'pastor aleman', 5, 'negro')

document.writeln(perro)