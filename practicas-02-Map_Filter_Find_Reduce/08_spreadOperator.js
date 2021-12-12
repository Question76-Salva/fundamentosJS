// =======================
// === spread Operator ===
// =======================

// Permite a un "elemento iterable" tal como un arreglo, objeto o string "ser expandido en lugares donde son esperados".
// Expandir -> hacer una copia de esos elementos
// ...array1 -> trae/haz copia de los elementos del array1
// ...array2 -> trae/haz copia de los elementos del array2
// Es mejor/más dinámico que el "concat" porque se pueden incluir nuevos elementos al nuevo array separados por comas

const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = [...array1, ...array2];

console.log(array3);

