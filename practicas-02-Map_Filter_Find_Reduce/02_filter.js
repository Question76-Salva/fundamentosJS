// ==============
// === filter ===
// ==============

// Crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

// === array de objetos ===

const users = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Amy", age: 40 },
    { uid: 3, name: "CamperCat", age: 10 },
];

const mayoresDeTreinta = users.filter((item) => {
    return item.age > 30;
});
console.log(mayoresDeTreinta);                      // filtrar y devolver un nuevo array con los mayores de 30


// podemos usarlo para "eliminar" elementos de un array | o no incluirlo en el resultado

const userFiltrado = users.filter((item) => {
    return item.uid !== 3;
});

console.log(userFiltrado);                  // devuelve todos los elementos que su id sea distinto a 3





