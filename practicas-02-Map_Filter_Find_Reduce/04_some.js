// =================================
// === some | método de búsqueda ===
// =================================

// Comprueba si "al menos" un elemento del array cumple con la condición implementada por la función proporcionada.
// Comprobar si existe o no un elemento. Devuelve true o false.
// Muy útil para validar

// === array de objetos ===

const users = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Amy", age: 40 },
    { uid: 3, name: "CamperCat", age: 10 },
];

const existe = users.some((user) => {
    return user.uid === 2;
});

console.log(existe);                // comprobar si existe el usuario con el id 2