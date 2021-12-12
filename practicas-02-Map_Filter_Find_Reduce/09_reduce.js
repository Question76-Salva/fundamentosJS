// ==============
// === reduce ===
// ==============

// Ejecuta una "función reductora" sobre cada elemento de un array, devolviendo como resultado un único valor.
// El valor devuelto de la "función reductora" se asigna al "acumulador", cuyo valor se recuerda en cada iteración de la matriz
// y, en última instancia, se convierte en el valor final, único y resultante.

// recibe como primer argumento el "acumulador"
// y recibe como segundo argumento el "valorActual"
// en cada iteración/vuelta va a sumar cada elemento con el valor del acumulador

const numeros = [1, 2, 3, 4, 5, 6];

const sumaTodos = numeros.reduce((acumulador, valorActual) => {
    return acumulador + valorActual;
});
console.log(sumaTodos);                     // suma todos los valores del array


// === array de arrays ===

const arrayNumeros = [
    [0, 1],
    [2, 3],
    [4, 5],
];

// "aplanar" este array que esté en un sólo array | sacar los arrays y guardar su contenido en uno

const soloNumeros = arrayNumeros.reduce((acumulador, valorActual) => {
    return acumulador.concat(valorActual);
});
console.log(soloNumeros);                           // [ 0, 1, 2, 3, 4, 5 ] -> aplanar el array


// otra forma de "aplanar"

const arrayPlano = [].concat(...arrayNumeros);
console.log(arrayPlano);                            // [ 0, 1, 2, 3, 4, 5 ] -> aplanar el array

// otra forma de "aplanar"

const arrayPlanoFlat = arrayNumeros.flat();
console.log(arrayPlanoFlat);                        // [ 0, 1, 2, 3, 4, 5 ] -> aplanar el array

