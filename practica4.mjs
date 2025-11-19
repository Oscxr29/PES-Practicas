// Ejercicios
// 1. Tienes un arreglo de estudiantes con sus notas.
// • Obtén un nuevo arreglo solo con los nombres.
// • Filtra los que aprobaron (nota >= 6).
// • Verifica si todos aprobaron.
// • Suma las notas con .reduce().
// 2. Tienes un inventario con productos.
// • Encuentra el producto con precio mayor a 100 usando .find().
// • Encuentra el índice del producto “Laptop”.
// • Verifica si hay algún producto agotado.
// • Obtén un nuevo arreglo con el nombre y el precio con IVA (13%).
// 3. Tienes resultados de una encuesta con puntuaciones del 1 al 10.
// • Calcula el promedio con .reduce().
// • Filtra los que dieron más de 8.
// • Usa .forEach() para mostrar un mensaje con cada puntuación.

// 1. Tienes un arreglo de estudiantes con sus notas.
// • Obtén un nuevo arreglo solo con los nombres.
// • Filtra los que aprobaron (nota >= 6).
// • Verifica si todos aprobaron.
// • Suma las notas con .reduce().

// const estudiantes = [
//     {nombre:"jose",nota:5},
//     {nombre:"Mario", nota:8},
//     {nombre:"Pablo", nota:10}
// ]

// const soloNombre = estudiantes.map((estudiante)=> estudiante.nombre)
// console.log(soloNombre)


// console.log(estudiantes.filter((notas)=> notas.nota>=6))



// const todosAprobados = estudiantes.every(estudiante => estudiante.nota >=6)
// console.log(todosAprobados)

// const sumarnotas = estudiantes.reduce((first, second) => first + second.nota,0);
// console.log(sumarnotas)



// 2. Tienes un inventario con productos.
// • Encuentra el producto con precio mayor a 100 usando .find().
// • Encuentra el índice del producto “Laptop”.
// • Verifica si hay algún producto agotado.
// • Obtén un nuevo arreglo con el nombre y el precio con IVA (13%).

// const inventario = [
//     {nombre:"Laptop", precio:1500, stock:5},
//     {nombre:"Mouse", precio:50, stock:0},
//     {nombre:"Teclado", precio:80, stock:10},
//     {nombre:"Monitor", precio:300, stock:2}
// ];

// // producto mayor a 100
// const mayor100 = inventario.find(producto => producto.precio > 100);
// console.log(mayor100)

// // indice del producto laptop 
// const indiceLaptop = inventario.findIndex(producto => producto.nombre === "Laptop");
// console.log(indiceLaptop)

// // producto agotado 
// const productoAgotado = inventario.some(producto => producto.stock === 0);
// console.log(productoAgotado)

// // Obtén un nuevo arreglo con el nombre y el precio con IVA (13%).
// const precioConIVA = inventario.map(producto => ({
//     nombre: producto.nombre,
//     precioConIVA: (producto.precio * 1.13).toFixed(2)
// }));
// console.log(precioConIVA)


// 3. Tienes resultados de una encuesta con puntuaciones del 1 al 10.
// • Calcula el promedio con .reduce().
// • Filtra los que dieron más de 8.
// • Usa .forEach() para mostrar un mensaje con cada puntuación.

// const encuesta = [7, 9, 10, 5, 8, 6, 4, 10];

// //promedio
// const promedio = encuesta.reduce((acc, score) => acc + score, 0) / encuesta.length;
// console.log(promedio);
// //filtrar mas de 8
// const masDe8 = encuesta.filter(score => score > 8);
// console.log(masDe8);
// //forEach
// encuesta.forEach(score => {
//     console.log(`Puntuación recibida: ${score}`);
// });


