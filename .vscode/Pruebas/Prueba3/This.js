const Obj = {
    nombre: "Ana",
    saludar() {
        console.log(this.nombre);
    }
}

Obj.saludar()

//

function Persona(params) {
    this.nombre = params;

    setTimeout(() => {
        console.log(this.nombre);
    }, /* 2000      Estos son los segundos*/ );
}

new Persona("Keen")