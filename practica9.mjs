import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// 1. Crear un programa que calcule el Índice de Masa Corporal (IMC) de una
// persona y determine su categoría según la OMS.

function IMC(peso, altura) {
    // Calcula el Índice de Masa Corporal (IMC)
    // La fórmula es peso / (altura * altura)
    let calculo = parseFloat(peso / Math.pow(altura, 2));

    console.log(`El índice de masa corporal es de ${calculo.toFixed(2)}`);

    // Clasifica el IMC
    if (calculo < 18.5) {
        console.log("Su índice es un nivel bajo.");
    } else if (calculo < 25) {
        console.log("Su índice es normal.");
    } else if (calculo < 30) {
        console.log("Su índice muestra sobrepeso.");
    } else {
        console.log("Su índice muestra obesidad.");
    }
}

// Solicita al usuario el peso y la altura
rl.question("Ingrese su peso corporal en kg: ", (peso) => {
    rl.question("Ingrese su altura en metros: ", (altura) => {
        // Llama a la función IMC con los valores proporcionados
        IMC(peso, altura);
        // Cierra la interfaz de lectura
        rl.close();
    });
});


// 2. Crear un programa que convierta temperaturas entre Celsius, Fahrenheit y
// Kelvin.

const convert = {
  CF: c => (c * 9 / 5) + 32,
  CK: c => c + 273.15,
  FC: f => (f - 32) * 5 / 9,
  FK: f => (f - 32) * 5 / 9 + 273.15,
  KC: k => k - 273.15,
  KF: k => (k - 273.15) * 9 / 5 + 32
};

rl.question("Ingresa la cantidad de temperatura: ", temperatura => {
  const temp = parseFloat(temperatura);
  rl.question("Selecciona la unidad de temperatura de origen (C/F/K): ", origen => {
    rl.question("Selecciona la unidad de medida a convertir: ", conversion => {
      const key = origen.toUpperCase() + conversion.toUpperCase();
      const result = origen.toUpperCase() === conversion.toUpperCase()
        ? temp
        : convert[key]?.(temp);
      console.log(`Resultado: ${result}`);
      rl.close();
    });
  });
});


