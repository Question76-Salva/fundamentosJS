// ===========
// === map ===
// ===========

// método nativo para iterar arrays | son más rápidos que los bucles tradicionales.
// "itera" sobre un array y ejecuta una función de condición sin alterar el array principal, ya que "devuelve un nuevo array"
// con los elementos después de haber aplicado la función.

const numbers = [65, 44, 12, 4];

const multiplicaPorDiez = numbers.map(number => number * 10);       // multiplica cada elemento del array por 10
console.log(multiplicaPorDiez);