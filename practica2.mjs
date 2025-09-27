// importar el modulo
import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// Crear una función que reciba un número como parámetro y que retorne un
// nuevo array con el cuadrado de los dígitos del número ingresado. Ejemplo
// squareDigits(9119) ➞ [81, 1, 1, 81]

// rl.question("ingrese un numero:",(num) => {
//     const resultado = num.toString().split("").map(n => Math.pow(Number(n),2));
//     console.log("reusltado",resultado);
//     rl.close();
// });

// Crear un programa que reciba un número y lo devuelva con sus cifras invertidas
// rl.question("ingrese un numero:",(num) => {
//     const invertido = num.toString().split("").reverse().join("");
//     console.log("numero invertido",invertido);
//     rl.close();
// });

// Cree una función que reciba un número, su tarea es retornar un array con las
// dos mitades del número. // numberSplit(4) ➞ [2, 2] // numberSplit(11) ➞ [5, 6]
rl.question("ingrese un numero:",(num) => {
    const mitad1 = Math.ceil(num/2);
    const mitad2 = Math.floor(num/2);
const resultado = [mitad1,mitad2];
    console.log("resultado",resultado);
    rl.close();
});


