// Se tiene el siguiente array de objetos:
let inventario = [
 { nombre: "Espada", precio: 100, cantidad: 1 },
 { nombre: "Poción", precio: 30, cantidad: 3 },
 { nombre: "Escudo", precio: 80, cantidad: 1 }
];

// 1. Muestra todos los items con forEach en el formato:
// "Espada - Precio: 100 -Cantidad: 1"
// 2. Agrega un nuevo objeto al inventario con push:
// { nombre: "Arco", precio: 120, cantidad: 1 }
// 3. Elimina el último objeto del inventario con pop.
// 4. Usa filter para mostrar solo los items con precio mayor a 50.
// 5. Usa map para obtener un array con solo los nombres de los items.
// 6. Usa some para verificar si existe algún item con precio mayor a 100.
// 7. Usa every para verificar si todos los items tienen cantidad mayor a 0.
// 8. Calcula con reduce el valor total del inventario (precio * cantidad).

inventario.forEach(item => {
    console.log(`${item.nombre} - Precio: ${item.precio} - Cantidad: ${item.cantidad}`);
});

inventario.push({nombre: "arco", precio:120, cantidad: 1});
console.log(inventario);

inventario.pop();
console.log(inventario);

const mayor50 = inventario.filter(item => item.precio > 50);
console.log(mayor50);

const nombres = inventario.map(item => item.nombre);
console.log(nombres);

const mayor100 = inventario.some(item => item.precio > 100);
console.log(mayor100);

const mayorCero = inventario.every(item => item.cantidad > 0);
console.log(mayorCero);

const valorTotal = inventario.reduce((total, item) => total + (item.precio * item.cantidad), 0);
console.log(valorTotal);




