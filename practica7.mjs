// crear una funcion que reciba un umero u verifique si el numero ingresado por el usuario es un numero primo


function Esprimo (num) {
    if (num <= 1) return false;

    for (let i = 2; i < num ; i++) {
        if (num % i === 0){
            return false 
        }
   
    }
    return true
}
// let verificar = esPrimo;
console.log("Se verifico el numero y es:",Esprimo (11));

// segundo ejercicio

//Crear una función que reciba como parámetro un array de números, hay que
//remover los valores repetidos de dicho array y retornar un nuevo array pero en
//orden inverso al ingresado.

function remover (params){
    let arr = [];

    for (let i = 0 ; i < params.length; i++) {
        if (!arr.includes (params[i])){
            arr.push(params[i])

        }

    }
    return arr.reverse();
}

console.log(remover([1,2,3,3,4,5]));

// Crear una función que retorne un nuevo array con valores pares y positivos
// únicamente (excluyendo el cero), el nuevo array debe estar en el mismo orden
// en que encuentre los valores.


function numeros (parametros){
    let array = [];
    for (let i = 0; i <parametros.length; i++) {
    return parametros.filter (numeros => numeros && numeros % 2=== 0);

    }
}
console.log(numeros([0,-2, 1, 2 -3, 3]));