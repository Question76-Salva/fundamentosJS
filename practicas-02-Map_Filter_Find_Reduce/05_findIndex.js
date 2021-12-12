// ======================================
// === findIndex | método de búsqueda ===
// ======================================

// Devuelve el "índice" del primer elemento de un array que cumpla con la función de prueba proporcionada. 
// En caso contrario devuelve -1 (si no existe).
// Muy útil para validar

// === array de objetos ===

const users = [
    { uid: 1, name: "John", age: 34 },
    { uid: 2, name: "Amy", age: 40 },
    { uid: 3, name: "CamperCat", age: 10 },
];

const indice = users.findIndex((user) => {
    return user.uid === 2;
});
console.log(indice);                    // devuelve el ínidce (posición del array) del elemento 


