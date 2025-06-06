

const mostrarInformacionUsuario = (nombre, edad, esMexicano) => {
  let mensajeNacionalidad = esMexicano ? "Es mexicano" : "No es mexicano.";
  console.log(`Nombre: ${nombre}`); // Corrected: Use backticks for template literals
  console.log(`Edad: ${edad}`);     // Corrected: Use backticks for template literals
  console.log(`Nacionalidad: ${mensajeNacionalidad}`); // Corrected: Variable name and backticks
};
//ejemplo
mostrarInformacionUsuario("Carlos", 35, true);
mostrarInformacionUsuario("Sarah", 24, false);