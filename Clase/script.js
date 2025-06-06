//Codigo Inicial

// Array para guardar los destinos
let destinos = [];

// Función para registrar un destino de viaje
const registrarDestino = (destino, fecha, transporte) => {
    // TODO: Crear un objeto con los datos del destino
    const nuevoViaje = {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        costo: calcularCosto(destino, transporte)
    };

    destinos.push(nuevoViaje);
}

// Función para calcular el costo del viaje
const calcularCosto = (destino, transporte) => {
    let costoBase = 0;

    // Costo base por destino
    if (destino === "Paris") {
        costoBase = 500;
    } else if (destino === "Londres") {
        costoBase = 400;
    } else if (destino === "New York") {
        costoBase = 600;
         } else if (destino === "Chicago") {
        costoBase = 900;
          } else if (destino === "L.A.") {
        costoBase = 1000;
        
    }


    // Costo adicional por tipo de transporte
    if (transporte === "Avión") {
        costoBase += 200;
    } else if (transporte === "Tren") {
        costoBase += 100;
        } else if (transporte === "Bas") {
        costoBase += 700;
    }

    return costoBase;
}

// Función para mostrar el itinerario de los viajes registrados
const mostrarItinerario = () => {
    // TODO: Recorrer el arreglo de destinos y mostrar la información de cada uno
    for (let i = 0; i < destinos.length; i++) {
        const viaje = destinos[i];
        console.log("Destino: " + viaje.destino);
        console.log("Fecha: " + viaje.fecha);
        console.log("Transporte: " + viaje.transporte);
        console.log("Costo: $" + viaje.costo);
        console.log("---------------------------");
    }
}


// Iniciar la aplicación
function iniciarApp() {
    // Ejemplo de cómo registrar destinos
    registrarDestino("Chicago", "2024-06-15", "Avión");
    registrarDestino("Londres", "2024-07-01", "Tren");
    registrarDestino("L.A.", "2024-06-15", "Avión");
    registrarDestino("L.A.", "2024-06-15", "Bas");

    // Mostrar el itinerario de los viajes
    mostrarItinerario();
}

// Ejecutar la aplicación
iniciarApp();
