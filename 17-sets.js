// =================================================
// === sets | estrucutras de datos - colecciones ===
// =================================================

/*
    - similares a los arrays, pero con restricciones (sólo son valores, no son clave valor)
    - no permiten repetición (no admite valores duplicados/repetidos)
    - no tienen orden
    - no se pueden acceder por posición
    - se borra por valor, no por posición
    - es más rápido que un objeto y un array al manejar mucho volumen de datos
    - son iterables
    - se usa mucho para eliminar elementos duplicados (mirar ejemplo de abajo)
    
*/

const carrito = new Set();

// === métodos de Set ===

// agregar elementos
carrito.add('Camisa');
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');

// obtener/saber longitud
console.log(carrito.size);

// comprobar si un valor existe | retorna true o false
console.log(carrito.has('Camisa'));
console.log(carrito.has('Guitarra'));

// eliminar valor
carrito.delete('Disco #3');

// eliminar todos los elementos
//carrito.clear();

// iterar Set
carrito.forEach(producto => console.log(producto));

console.log(carrito);

// === uso frecuente de un Set ===
// del siguiente array 'eliminar los elementos duplicados'
const numeros = [10, 20, 30, 40, 50, 10, 20];

const noDuplicados = new Set(numeros);
console.log(noDuplicados);                      // 10, 20, 30, 40, 50