// const verduras = ["brocoli","Cebolla","chile","tomate"];

// console.log(verduras.pop());
// console.log(verduras);
// console.log('el ultimo elemento es: '  ${verduras.pop()}');');


// verduras.unshift("tomate");
// console.log(verduras);

// verduras.unshift("lechuga");
// console.log(verduras);

// verduras.shift()
// console.log(verduras);

// verduras.push("espinaca");
// console.log(verduras);


//ejercicios 
// el heroe encuentra un arco y lo guarda al final de la mochila 
// Encuentra una pocion magica y la guarda al inicio de la mochila
// muestra la mochila despues de estos cambios 

const mochila = ["espada","escudo","pocion de vida"];

mochila.push("arco")
let arco = mochila[mochila.length -1]
console.log("la ultima posicion es: " + arco);

mochila.unshift("pocion magica")
console.log(mochila);

//2 segundo ejercicio
// el heroe decide usae la primera pocion de la mochila 
// el heore pierde el ultimo objeto que tenia
// muestra la mochila despues de estas acciones

mochila.shift();
console.log(mochila);

mochila.pop();
console.log(mochila);

// tercer ejercicio 
// el heroe encuentra dos flechas y las guarda al final 
// encuentra un casco y lo pone al inicio
//decide usar un objeto del iniicio y otro al final de la mochila
//muestra la mochila al final 

mochila.push("flecha1","flecha2");
console.log(mochila);
mochila.unshift("casco")
console.log(mochila);
mochila.shift();
mochila.pop();
console.log(mochila);