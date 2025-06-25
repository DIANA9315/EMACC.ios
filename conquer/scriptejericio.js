/*const numbers = [3, 8, 2, 10, 5, 7];*/
function merge(A, B, resultado){
    let punteroA = 0; //i
    let punteroB = 0;//j

    while (punteroA !=A.lenght)
    // TODO: Agregar la condición del caso base
    if (arreglo.length === 1  ) {
        return arr[0];
    }

    // TODO: Dividir el arreglo en dos mitades
    let mid = Math.floor(arreglo.length)/2;
    let left = arreglo.slice(0, mid);
    let right = arreglo.slice(mid, arreglo.length);
    // TODO: Llamar recursivamente a la función para ambas mitades
    let leftMax = /* llamada recursiva */;
    let rightMax = /* llamada recursiva */;

    // TODO: Combinar las soluciones comparando los máximos
    return /* máximo entre leftMax y rightMax */;
}
// Ejemplo de entrada
const numbers = [3, 8, 2, 10, 5, 7];
console.log(findMax(numbers)); // Salida esperada: 10