// Declaración de los arreglos vacíos
const numeros = [];
const textos = [];

// Función declarativa para agregar un valor al arreglo numérico
function agregarNumero(valor) {
  if (typeof valor === 'number') {
    numeros.push(valor);
  } else {
    console.log("El valor ingresado no es un número.");
  }
}

// Función declarativa para agregar un valor al arreglo de strings
function agregarTexto(valor) {
  if (typeof valor === 'string') {
    textos.push(valor);
  } else {
    console.log("El valor ingresado no es un texto.");
  }
}

// Función declarativa para listar los elementos de un arreglo, validando si está vacío
function listarArreglo(arreglo, nombreArreglo) {
  if (arreglo.length === 0) {
    console.log(`${nombreArreglo} está vacío.`);
  } else {
    console.log(`\nContenido de ${nombreArreglo}:`);
    for (const indice in arreglo) {
      console.log(`Posición ${indice}: ${arreglo[indice]}`);
    }
  }
}

// --- Ejemplo de uso ---
agregarNumero(10);
agregarNumero(25);
agregarTexto("Hola");
agregarTexto("Mundo");
agregarNumero("no soy un numero"); // This will trigger the "no es un número" message
agregarTexto(123); // This will trigger the "no es un texto" message


// Listar los arreglos
listarArreglo(numeros, "Arreglo de Números");
listarArreglo(textos, "Arreglo de Textos");

// Example of listing an empty array
const arregloVacio = [];
listarArreglo(arregloVacio, "Arreglo Vacío de Prueba");


//explicacion