// const estudiante = {
//     DatosPersonales: {
//         Nombre: "Gerardo",
//         Edad: 21, 
//         email: "GerardoPro2019@gmail.com",
//     },
//         Cursos: {
//             LisNombre: "sistemas Operativos",
//             Calificacion: 9,
//             Calificacion2: 10,
//             Calificacion3: 10,
//             Estado: "Aprobado",
//         },
//         Configuracion: {
//             Idioma: "Ingles",
//             Notificaciones: true,
//             UltimoAcceso: "2025-09-31",
//         },
// };

// MOstrar el nombre y email del estudiante 
// console.log(estudiante.DatosPersonales.Nombre);
// console.log(estudiante.DatosPersonales.email);

//Calcular el promedio de las calificaciones del estudiante

// console.log((estudiante.Cursos.Calificacion+estudiante.Cursos.Calificacion2+estudiante.Cursos.Calificacion3)/3);

//Cambiar el idioma de la configuracion 
// estudiante.Configuracion.Idioma = "Español";
// console.log(estudiante.Configuracion.Idioma);
// Actulizar el ultimo acceso con la fecha acual
// estudiante.Configuracion.UltimoAcceso = new Date()
// console.log(estudiante.Configuracion.UltimoAcceso);
// extraer edad y notificaciones en variables separadas 
// const {Edad} = estudiante.DatosPersonales;
// const {Notificaciones} = estudiante.Configuracion.Notificaciones;
// console.log(Edad);
// console.log(Notificaciones);


// console.log(estudiante);

// Una tienda maneja datos de sus Producto:
// Datos (nombre, categoría, precio)
// Stock (cantidad, vendidos, ubicación)
// Reseñas (usuarios con nombre, comentario, puntuación)
// Tareas:
// 1. Mostrar el precio y la ubicación del producto.
// 2. Calcular cuántas unidades quedan en stock.
// 3. Cambiar el nombre del producto.
// 4. Agregar una nueva reseña.
// 5. Extraer categoría y puntuación de la primera reseña.
// 6. Mostrar el producto actualizado.

const Producto = {
    datos: {
   nombre: "GalletaPro",
   categoria: "Galletas",
   precio: 1.50
    },
    stock: {
        Cantidad: 200,
        Vendidos: 20,
        Ubicacion: "Tercer pasillo"
    },
    Reseñas:{
        Usuario:"Henry",
        Comentario: "esta muy delicioso, me encanta",
        Puntuacion: 10,
    }
};


// 1. Mostrar el precio y la ubicación del producto.
console.log(Producto.datos.precio);
console.log(Producto.stock.Ubicacion);
// 2. Calcular cuántas unidades quedan en stock.
console.log(Producto.stock.Cantidad - Producto.stock.Vendidos);
// 3. Cambiar el nombre del producto.
Producto.datos.nombre = "GalletaProMax";
console.log(Producto.datos.nombre);
// 4. Agregar una nueva reseña.
Producto.Reseñas.Usuario = "Gabo";
Producto.Reseñas.Comentario = "esta ProMax la galleta";
Producto.Reseñas.Puntuacion = 9;
console.log(Producto.Reseñas);
// 5. Extraer categoría y puntuación de la primera reseña.
const {categoria} = Producto.datos;
const {Puntuacion} = Producto.Reseñas;
console.log(categoria);
console.log(Puntuacion);
// 6. Mostrar el producto actualizado.
console.log(Producto);

