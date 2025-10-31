import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// IIFE: Immediately Invoked Function Expression

// usando run code

// (function () {
//     console.log("Me ejecuto al instante");
// })();


// ambito privado
// (function () {
//     const holas = "soy privadito"
//      var contador = 0:
//     console.log(holas);
// })();

// console.log(holas);

// var contador = 0;



// (function (nombre ,edad ) {
//     console.log(`Hola ${nombre}, tienes ${edad} anios`);
// })("oscar", 19)



// function normal() {
//     console.log(arguments);
// }

// normal(1,3,`Pepe`)

//function arrow

// const arrow =() => {  // no imprime , diferencia entre funcion normal y funcion flecha
//     console.log(arguments);
// }

// arrow(1,3,`Pepe`)


// const persona1 = {
//     nombre: "Ana",
//     Tareas: ["tarea1", "tarea2", "tarea3"],
//     mostrarTareas: function() {
//         this.Tareas.forEach(function => (Tareas) {
//             console.log(`${this.nombre}: ${Tareas}`);
            
//         });
//     }
// } esto da error poe que no puedes acceder al nombre


// const persona1 = {
//     nombre: "Ana",
//     Tareas: ["tarea1", "tarea2", "tarea3"],
//     mostrarTareas: function() {
//         this.Tareas.forEach((Tareas) => {
//             console.log(`${this.nombre}: ${Tareas}`);
            
//         });
//     }
// }

// persona1.mostrarTareas();

// ejercicios de la practica 

// const reproductorMusica = {
//  canciones: ["Canción 1", "Canción 2", "Canción 3"],
//  cancionActual: 0,

//   reproducir: () => {
//     console.log(`reproduciendo: ${reproductorMusica.canciones[reproductorMusica.cancionActual]}`);
//  },
//  siguiente: function () {
//     this.cancionActual = (this.cancionActual +1) % this.canciones.length;
//     console.log(`Siguiente cancion: ${this.canciones[this.cancionActual]}`);
//  },

//  anterior: function () {
//     this.cancionActual = (this.cancionActual -1);
//     console.log(`la anterior cancion es: ${this.canciones[this.cancionActual]}`);
    
//  }
//  };

// reproductorMusica.reproducir();
// reproductorMusica.siguiente();
// reproductorMusica.anterior();

// Ejercicio 2:
// Crea un módulo de validación usando IIFE que exponga métodos para validar:
// • Email (debe contener @ y .)
// • Contraseña (mínimo 6 caracteres)
// • Edad (mayor o igual a 18)
// Las funciones auxiliares deben ser privadas.
// Tests (deben funcionar):
// console.log(validacion.validarEmail("usuario@email.com")); // true
// console.log(validacion.validarEmail("usuario")); // false
// console.log(validacion.validarPassword("123456")); // true
// console.log(validacion.validarPassword("123")); // false
// console.log(validacion.validarEdad(25)); // true
// console.log(validacion.validarEdad(15)); // false

const validacion = (function () {
    function esEmailValido(email) {
        if (typeof email !== "string") return false; // Verifica que sea una cadena
        const s = email.trim();
        return s.includes("@") && s.includes("."); // Verifica que contenga "@" y "."
    }
    function esPasswordValida(password) {
        return typeof password === "string" && password.length >= 6; // minimo 6 caracteres
    }
    function esEdadValida(edad) {
        return Number(edad) >= 18;
    }

    return {
        validarEmail: esEmailValido,
        validarPassword: esPasswordValida,
        validarEdad: esEdadValida
        // Expone las funciones públicas
    };
})(); 


console.log(validacion.validarEmail("oscar@programador.com")); // da true 
console.log(validacion.validarPassword("123456")); //  da true
console.log(validacion.validarPassword("123")); // da false
console.log(validacion.validarEdad(20)); // da true
console.log(validacion.validarEdad(15)); // da  false



