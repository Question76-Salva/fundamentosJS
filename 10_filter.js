// ==============
// === filter ===
// ==============

// método nativo para iterar arrays | son más rápidos que los bucles tradicionales.
// nos permite "filtrar" sólo los elementos que deseamos mediante una funcíón y devolverlos en un nuevo array. 

let edades = [20, 16, 28, 17]; 

const mayoresEdad = edades.filter(edad => edad >= 18);                                      // filtrar los mayores de edad
console.log(mayoresEdad);                                                                   // 20, 28
