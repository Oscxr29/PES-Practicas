import readline from 'readline'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// function adivinaElnumero() {
//     const numerosecreto = Math.floor(Math.random() * 10) + 1;
//     let intentos = 3;
    
//     console.log('Adivina el número del 1 al 10. Tienes solo 3 intentos');
    
//     function preguntar() {
//         if (intentos === 0) {
//             console.log(`Game over. El número era ${numerosecreto}`);
//             rl.close();
//             return;
//         }

//         rl.question(`Intentos restantes: ${intentos}. Ingresa tu número: `, (respuesta) => {
//             let numeroUsuario = Number(respuesta);
//             if (isNaN(numeroUsuario)) {
//                 console.log('Valor no válido, ingrese un número');
//                 preguntar();
//                 return;
//             }

//             if (numeroUsuario === numerosecreto) {
//                 console.log('Felicidades, adivinaste el número');
//                 rl.close();
//             } else if (numeroUsuario < numerosecreto) {
//                 console.log('El número es mayor');
//                 intentos--;
//                 preguntar();
//             } else {
//                 console.log('El número es menor');
//                 intentos--;
//                 preguntar();
//             }
//         });
//     }

//     preguntar();    
// }

// adivinaElnumero();


// 2. Piedra, Papel o Tijeras
// Descripción:
// Implementa el clásico juego de Piedra, Papel o Tijeras contra la computadora en
// formato de mejor de 3 rondas.
// Requisitos Técnicos:
// • Jugar al mejor de 3 rondas
// • Validar que la entrada del usuario sea una opción válida
// • Generar elección aleatoria de la CPU
// • Aplicar las reglas clásicas del juego:
// • Piedra gana a Tijeras
// • Tijeras gana a Papel
// • Papel gana a Piedra
// • Llevar registro del puntaje por ronda
// • Anunciar al ganador final del juego



function jugarPiedraPapelTijeras() {
    const opciones = ['Piedra', 'Papel', 'Tijeras'];
  // puntajes 
    let puntajeUsuario = 0;
    let puntajeCPU = 0;
    let rondas = 3; // Juego al mejor de 3 rondas
    
 

  
    console.log('¡Bienvenido a Piedra, Papel o Tijeras!');
    console.log('Juega contra la CPU al mejor de 3 rondas.');
   

    function jugarRonda(rondaActual) {
        if (rondaActual > rondas) {
           
            console.log(`Juego terminado. Puntaje final - Usuario: ${puntajeUsuario}, CPU: ${puntajeCPU}`);
          
            // Anunciar al ganador final del juego
            if (puntajeUsuario > puntajeCPU) {
                console.log('🎉 ¡Felicidades! Has ganado el juego. 🎉');
            } else if (puntajeCPU > puntajeUsuario) {
                console.log('😔 La CPU ha ganado el juego. ¡Mejor suerte la próxima vez!');
            } else {
                console.log('🤝 El juego terminó en empate.');
            }
            console.log('===========================================\n');
            rl.close();
            return;
        }

        // Solicitar la elección del usuario
        rl.question(`\n Ronda ${rondaActual} - Elige Piedra, Papel o Tijeras: `, (respuesta) => {
            const eleccionUsuario = respuesta.trim();
            
            if (!opciones.includes(eleccionUsuario)) {
                console.log('Opción no válida. Por favor elige exactamente: Piedra, Papel o Tijeras (con mayúscula inicial).');
                jugarRonda(rondaActual); // Repetir la misma ronda
                return;
            }

            // Generar elección aleatoria de la CPU
            const eleccionCPU = opciones[Math.floor(Math.random() * opciones.length)];
            console.log(` La CPU eligió: ${eleccionCPU}`);

            if (eleccionUsuario === eleccionCPU) {
                console.log(' Empate en esta ronda.');
            }
            else if ((eleccionUsuario === 'Piedra' && eleccionCPU === 'Tijeras') ||  // Piedra gana a Tijeras
                     (eleccionUsuario === 'Tijeras' && eleccionCPU === 'Papel') ||   // Tijeras gana a Papel
                     (eleccionUsuario === 'Papel' && eleccionCPU === 'Piedra')) {    // Papel gana a Piedra
                console.log('¡Ganaste esta ronda!');
                puntajeUsuario++; // Incrementar puntaje del usuario
            } else {
                console.log('La CPU gana esta ronda.');
                puntajeCPU++; // Incrementar puntaje de la CPU
            }

            console.log(`Puntaje actual - Usuario: ${puntajeUsuario}, CPU: ${puntajeCPU}`);
            
            jugarRonda(rondaActual + 1);
        });
    }


    jugarRonda(1);
}

// Iniciar el juego
jugarPiedraPapelTijeras();