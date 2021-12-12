// =================================
// === find | método de búsqueda ===
// =================================

// Devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
// No devuelve un array, devuelve un "elemento" (objeto, string, number...)
// Podemos usar "destructuring" para extraer valores del objeto

// === array de objetos ===

const users = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Amy", age: 40 },
    { uid: 3, name: "CamperCat", age: 10 },
];

// buscar a Amy

const amy = users.find((user) => {
    return user.uid === 2;
});
console.log(amy);


// destructuring

const { age } = users.find((user) => {
    return user.uid === 1;
});
console.log(age);
