
const prompt=require("prompt-sync")({sigint:true}); 
// Definimos las constantes para los recargos por edad
const recargo1 = 0.10; // 10%
const recargo2 = 0.20; // 20%
const recargo3 = 0.30; // 30%

let nombreAsegurado = prompt("Ingrese nombre del asegurado: ")

// Definimos las variables de entrada
let edad = parseInt(prompt("Ingrese la edad del asegurado: "));

// precio base
let precioBase = 2000;


// Calculamos el recargo por edad del asegurado
let recargoAsegurado = 0;
if (edad >= 18 && edad <= 24) {
  recargoAsegurado = recargo1;
} else if (edad >= 25 && edad <= 49) {
  recargoAsegurado = recargo2;
} else if (edad >= 50) {
  recargoAsegurado = recargo3;
}

let estaCasado = prompt("¿Es casado? (S/N)").toLowerCase() === 's';
let edadConyuge = 0;

// Si el asegurado está casado, pedimos la edad de su cónyuge
if (estaCasado) {
  edadConyuge = parseInt(prompt("Ingrese la edad de su cónyuge: "));
}

// Calculamos el recargo por edad del cónyuge, si aplica
let recargoConyuge = 0;
if (estaCasado && edadConyuge > 0) {
  if (edadConyuge >= 18 && edadConyuge <= 24) {
    recargoConyuge = recargo1;
  } else if (edadConyuge >= 25 && edadConyuge <= 49) {
    recargoConyuge = recargo2;
  } else if (edadConyuge >= 50) {
    recargoConyuge = recargo3;
  }
}

// Si el asegurado tiene hijos, pedimos la cantidad y validamos la edad de cada hijo
let tieneHijos = prompt("¿Tiene hijos? (S/N)").toLowerCase() === 's';
let cantidadHijos;
let recargoHijos = 0;
if (tieneHijos==true) {
  let cantidadHijos = parseInt(prompt("Ingrese la cantidad de hijos: "));
   recargoHijos = cantidadHijos * recargo2;
}
let totalRecargos = recargoAsegurado + recargoConyuge + recargoHijos;

//salida del codigo
alert("total recargo Asegurado: " + (100 *recargoAsegurado.toFixed(2)) + "%\n", "total recargo Conyugue: " + (100 * recargoConyuge.toFixed(2))+ "%\n", "total recargo hijos: " + (100 * recargoHijos.toFixed(2)) + "%\n", "Recargo Total: " + (100 * totalRecargos.toFixed(2)) + "%");
//alert("total recargo Conyugue: " + (100 * recargoConyuge.toFixed(2))+ "%");
//alert("total recargo hijos: " + (100 * recargoHijos.toFixed(2)) + "%");


//alert("Recargo Total: " + (100 * totalRecargos.toFixed(2)) + "%");

let totalCotizacion = precioBase + (precioBase * totalRecargos);

alert("Para el asegurado: " + nombreAsegurado + " la cotización es: " + "Q." + totalCotizacion.toFixed(2) );
