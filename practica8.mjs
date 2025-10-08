// let valores = [2,5,11,7,3,9,8,4,24,36,77];

// let SumaImpares= 0;
// for (let i = 0; i < valores.length; i++) {
//     if (valores[i] % 2 !== 0){
//         SumaImpares += valores[i]

//     }
// }

// console.log("Suma de impares es", SumaImpares);

// Dado un array de palabras, encuentra la(s) palabra(s) que tengan la mayor
// longitud de caracteres.

// let Palabras = ["sol", "luna", "Planeta", "Bicicleta", "Camion"]
// let maxLongitud = 0
// let Resultado = []

// for (let i = 0; i < Palabras.length; i++) {
//     let palabra = Palabras[i];
//     let longitud = [palabra.length];

// if (longitud > maxLongitud) {
//     maxLongitud = longitud;
//     Resultado = [palabra];
// } else if ( palabra.length=== maxLongitud){
//     Resultado.push(palabra);
// }    
// }

// console.log("Palabras más largas:", Resultado);

// Dado un array, rota sus elementos N posiciones hacia la derecha.
// Por ejemplo, con N=2 y [1,2,3,4,5] el resultado será [4,5,1,2,3].

let arr = [1,2,3,4,5]
let N = 2;
let rotamiento = [];

for (let i = 0; i < arr.length; i++) {
    rotamiento[(i + N) % arr.length] = arr[i];

}
console.log("array original es" , arr);
console.log("Array ya rotado es", rotamiento);