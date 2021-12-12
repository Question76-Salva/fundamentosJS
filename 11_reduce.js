// ==============
// === reduce ===
// ==============

// método nativo para iterar arrays | son más rápidos que los bucles tradicionales.
// sirve para "realizar operaciones" y aplicarlas a cada uno de los elementos del array, nos devuelve "un valor único".
// parámetros del reduce: (acc, item, index, arr) => {}
// acc -> acumulador | reduce toma una variable que va a estar iterando todos los elementos del array y las operaciones
//                     que vayamos haciendos en cada uno de ellos se van a ir almacenando en esta variable acumuladora.
// item -> elemento actual que está siendo recorrido por la función reduce.
// index -> índice del elemento actual | es la posición del elemento actual y que si necesitamos hacer uso de ella podemos
//          utilizarlo, pero si no lo usamos podemos omitir el uso de este parámetro.      
// arr -> arreglo iterado | referencia al array que estamos iterando.

// vamos a usar siempre los parámetros (acc, item)


// ==============================================================================================================================

const numbers = [2, 4, 6, 8, 10];

const sumaElementosArray = numbers.reduce( (acc, item) => {
    return acc += item;                                                 // suma todos los elementos del array
})

console.log(sumaElementosArray);                                        // 30

// ==============================================================================================================================

const sumaElementosArrayDesdeNumero = numbers.reduce( (acc, item) => {
    return acc += item;                                                 // suma todos los elementos del array, y suma 2 al resul
}, 2)

console.log(sumaElementosArrayDesdeNumero);                                        // 32

// ==============================================================================================================================

const strings = ['Mi', 'nombre', 'es', 'Salvador'];

const concatenarArray = strings.reduce( (acc, item) => {
    return acc += ' ' + item; 
})

console.log(concatenarArray);

// ==============================================================================================================================

const concatenarArrayDesdeValorInicial = strings.reduce( (acc, item) => {
    return acc += ' ' + item; 
}, 'Hola! ');

console.log(concatenarArrayDesdeValorInicial);
