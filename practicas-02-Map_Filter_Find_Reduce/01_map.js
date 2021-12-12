// ===========
// === map ===
// ===========

// itera sobre coda elemento de un array y devuelve un nuevo array que contiene los resultados 
// de llamar a la "función callback" en cada elemento.
// map -> siempre lleva un return

// === array de strings ===

const frutas = ["banana", "manzana", "fresa"];

const nuevoArray = frutas.map((item) => {    
    return item;
});
console.log(nuevoArray);                                // recorre el array y almacena el resultado en un nuevo array

// en 1 línea

const nuevoArrayLinea = frutas.map((item) => item);
console.log(nuevoArrayLinea);                            // recorre el array y almacena el resultado en un nuevo array


// === array de objetos ===

const users = [
    { name: "John", age: 34 },
    { name: "Amy", age: 20 },
    { name: "CamperCat", age: 10 },
];

const userNames = users.map((users) => {
    return users.name;                  
});

console.log(userNames);                         // devolver nuevo array con los nombres de los usuarios

const userAges = users.map((users) => users.age);
console.log(userAges);


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPorDos = numeros.map((numeros) =>{
    return numeros * 2;
});
console.log(numerosPorDos);     // devuelve nuevo array con los numeros del array multiplicados por 2
