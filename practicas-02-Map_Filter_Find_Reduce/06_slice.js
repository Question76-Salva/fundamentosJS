// =============
// === slice ===
// =============

// Devuelve una "copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin" (fin no incluido).
// El array original no se modificar√°.

const animals = ["Cat", "Dog", "Tiger", "Zebra"];
//                 0     [1       2]        3

const arrayNuevo = animals.slice(1, 3);
console.log(arrayNuevo);                    // devuelve array con Dog y Tiger | parametros -> 1 (inicio) 3 (fin no incluido)