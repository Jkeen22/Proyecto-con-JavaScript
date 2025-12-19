class animal {
    constructor(animal, especie, edad, color) {
        this.animal = animal
        this.especie = especie
        this.edad = edad
        this.color = color
        this.info = `Este es un ${animal}, raza ${especie}, tiene ${edad} años y es de color ${color}`
    }

    verInfo() {
        document.writeln(this.info + "<p>")
    }
}
const gato = new animal('gato', 'mitico', 4, "blanco")
gato.verInfo()