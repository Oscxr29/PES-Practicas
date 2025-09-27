
//Dado un texto y una palabra, reemplaza todas las apariciones exactas de esa
// palabra por asteriscos (*) del mismo tamaño.
function ocultarPalabra (texto,palabra) {
    const partes = texto.split (' ');
    const resultado = partes.map (p => 
     p === palabra ? '*'.repeat(palabra.length) : p
    );
    return resultado.join(' ');
}
console.log(ocultarPalabra('Hola mundo, este es un ejercicio de programacion', 'ejercicio')); 
// Verifica si una palabra o frase es palíndroma (es una palabra, frase o
// secuencia que se lee igual de izquierda a derecha que de derecha a izquierda )
// sin ignorar acentos ni signos, pero ignorando mayúsculas/minúsculas y
// espacios.
function esPalindromo(frase) {
    const fraseLimpia = frase.replace(/\s+/g, '').toLowerCase();
    const fraseReversa = fraseLimpia.split('').reverse().join('');
    return fraseLimpia === fraseReversa;

}
console.log(esPalindromo('Anita lava la tina.'));
console.log(esPalindromo('Hola Mundo.'));


