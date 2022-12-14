/* 
Realizar una función que reciba una cantidad indeterminada de argumentos de entrada (utilizar Rest Operator) y devuelva la suma de ellos en un array de un sólo elemento. Obtener un array que contenga el resultado de 3 operaciones de suma con argumentos varios, utilizar para ello Spread Operator.
*/

function sumar(...ops) {
    let sum = 0
    for(let op of ops) sum += op
    return [sum]
}

let arrayTotal = [...sumar(1), ...sumar(1,2), ...sumar(1,2,3)]
console.log( arrayTotal );
