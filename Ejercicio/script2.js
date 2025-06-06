/**const LibrosLeidos= []
let conteoLibrosLeidos={};

function agregarLibro(titulo) {
    if("Añade un libro a la lista de libros leidos"){
        console.log (`'{titulo}' ha sido añadido a tu lista de libros leídos.`);
        LibrosLeidos.push(titulo);
        }
 }


function mostrarLibrosLeidos() {
if (LibrosLeidos.length > 0) {
console.log("\nTu lista de libros leidos es:");
for (const libro of LibrosLeidos) {
console.log (`- ,${libro}`);
}
} else {
    console.log("\n¡Aún no has leído ningún libro!.");
    }
        }

        //Ejemplo de uso

        agregarLibro("Caperucita");
        agregarLibro("Cenicienta");
        mostrarLibrosLeidos();
*/
// Declaración de los arreglos y objetos
const LibrosLeidos = [];
let conteoLibrosLeidos = {}; // Objeto para contar cuántas veces se ha añadido cada libro

/**
 * Añade un libro a la lista de libros leídos y actualiza su conteo.
 * @param {string} titulo - El título del libro a añadir.
 */
const agregarLibro = (titulo) => {
  if (typeof titulo === 'string' && titulo.trim() !== '') {
    console.log(`'${titulo}' ha sido añadido a tu lista de libros leídos.`);
    LibrosLeidos.push(titulo);

    // Actualiza el conteo de libros leídos
    conteoLibrosLeidos[titulo] = (conteoLibrosLeidos[titulo] || 0) + 1;

  } else {
    console.log("Error: El título del libro debe ser un texto válido.");
  }
};

/**
 * Muestra la lista de libros leídos.
 */
const mostrarLibrosLeidos = () => {
  if (LibrosLeidos.length > 0) {
    console.log("\n--- Tu lista de libros leídos es: ---");
    for (const libro of LibrosLeidos) {
      console.log(`- ${libro}`);
    }
  } else {
    console.log("\n¡Aún no has leído ningún libro en esta lista!");
  }
};

/**
 * Muestra el conteo de cada libro leído.
 */
const mostrarConteoLibros = () => {
  console.log("\n--- Conteo de libros leídos (incluyendo repeticiones): ---");
  const titulosUnicos = Object.keys(conteoLibrosLeidos);

  if (titulosUnicos.length === 0) {
    console.log("No hay libros registrados para mostrar el conteo.");
    return;
  }

  for (const titulo of titulosUnicos) {
    console.log(`- '${titulo}': ${conteoLibrosLeidos[titulo]} vez(es).`);
  }
};


// --- Ejemplo de uso ---
console.log("--- Iniciando el ejemplo de uso ---");

agregarLibro("Caperucita Roja");
agregarLibro("Cenicienta");
agregarLibro("El Patito Feo");
agregarLibro("Caperucita Roja"); // Añadido de nuevo para probar el conteo
agregarLibro(""); // Prueba de validación de entrada (mostrará error)
agregarLibro(123); // Prueba de validación de entrada (mostrará error)

mostrarLibrosLeidos();
mostrarConteoLibros();

console.log("\n--- Fin del ejemplo de uso ---");

