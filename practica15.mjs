import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const numberSecreto = Math.floor(Math.random() * 10) + 1

let intento

function preguntar() {
  rl.question('Adivina el número (1-10): ', (respuesta) => {
    intento = parseInt(respuesta)

    if (intento === numberSecreto) {
      console.log(`¡Correcto! El número era ${numberSecreto}.`)
      rl.close()
    } else {
      console.log('¡Incorrecto! Intenta otra vez:')
      preguntar()
    }
  });
}

preguntar();




//Ejercicio 2.


// let suma = 0

// function pedirNumero() {
//   rl.question('Ingresa un número: ', (entrada) => {
//     const numero = parseInt(entrada)

//     if (isNaN(numero)) {
//       console.log('Por favor ingresa un número válido.')
//       pedirNumero()
//       return
//     }

//     suma = suma + numero

//     console.log(`Suma actual: ${suma}`)

//     if (suma > 100) {
//       console.log(`¡Límite alcanzado! Suma total: ${suma}`)
//       rl.close()
//     } else {
//       pedirNumero()
//     }
//   })
// }

// pedirNumero()


//Ejercicio 3.


// function pedirContraseña() {
//   rl.question('Ingresa una contraseña: ', (password) => {
//     while (
//       password.length < 8 ||       
//       !/[A-Z]/.test(password) ||      
//       !/[0-9]/.test(password)
//     ) {
//       console.log('La contraseña debe tener:')
//       console.log('- Al menos 8 caracteres')
//       console.log('- Al menos una mayúscula')
//       console.log('- Al menos un número');
//       return pedirContraseña();
//     }

//     console.log('¡Contraseña válida! Registro completado.');
//     rl.close();
//   });
// }

// pedirContraseña();


//Ejercicio 4.


// let saldo = 1000

// function menu() {
//   console.log('1. Retirar\n2. Depositar\n3. Consultar saldo\n4. Salir')
//   rl.question('Elige una opción: ', (opcion) => {
//     if (opcion === '1') {
//       rl.question('Monto a retirar: ', (monto) => {
//         saldo -= parseFloat(monto)
//         console.log(`Saldo: $${saldo}`)
//         menu()
//       })
//     } else if (opcion === '2') {
//       rl.question('Monto a depositar: ', (monto) => {
//         saldo += parseFloat(monto)
//         console.log(`Saldo: $${saldo}`)
//         menu()
//       })
//     } else if (opcion === '3') {
//       console.log(`Saldo: $${saldo}`)
//       menu()
//     } else if (opcion === '4') {
//       console.log('¡Hasta luego!')
//       rl.close()
//     } else {
//       console.log('Opción inválida')
//       menu()
//     }
//   })
// }

// menu()


