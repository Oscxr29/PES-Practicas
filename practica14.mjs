import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



// 1) Triángulo de Pascal (usa for anidados)
// function generarTrianguloPascal(n) {
//   if (!Number.isInteger(n) || n <= 0) return [];
//   const tri = [];
//   for (let i = 0; i < n; i++) {
//     const fila = new Array(i + 1).fill(1);
//     for (let j = 1; j < i; j++) { // bucle interno suma los dos valores de arriba
//       fila[j] = tri[i - 1][j - 1] + tri[i - 1][j];
//     }
//     tri.push(fila);
//   }
//   return tri;
// }

// rl.question('Ingrese un número para generar el Triángulo de Pascal: ', (answer) => {
//     const n = parseInt(answer);
//     const triangulo = generarTrianguloPascal(n);
//     console.log(`Triángulo de Pascal de orden ${n}:`);
//     triangulo.forEach(fila => console.log(fila.join(' ')));
//     rl.close();
// });

// 2) Contar vocales (no distingue mayúsculas/minúsculas)
// function contarVocales(texto) {
//   if (typeof texto !== 'string') return 0;
//   const vocales = 'aeiou';
//   let contador = 0;
//   const s = texto.toLowerCase();
//   for (let i = 0; i < s.length; i++) {
//     if (vocales.includes(s[i])) contador++;
//   }
//   return contador;
// }

// rl.question('Ingrese un texto para contar las vocales: ', (answer) => {
//     const numVocales = contarVocales(answer);
//     console.log(`Número de vocales en el texto: ${numVocales}`);
//     rl.close();
// }
// );

// 3) Encontrar el mayor en un array usando for
function encontrarMayor(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return undefined; // Manejo de caso vacío
  let mayor = arr[0]; // Asumimos que el primer elemento es el mayor
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > mayor) mayor = arr[i]; // Actualizamos si encontramos un mayor
  }
  return mayor;
}

rl.question('Ingrese números separados por comas para encontrar el mayor: ', (answer) => {
    const arr = answer.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num)); // Convertir a array de números
    const mayor = encontrarMayor(arr); // Llamar a la función
    console.log(`El número mayor es: ${mayor}`);
    rl.close();
});
