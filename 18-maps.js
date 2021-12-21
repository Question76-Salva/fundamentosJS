// =================================================
// === maps | estrucutras de datos - colecciones ===
// =================================================

/*
    - similares a los objetos, pero con restricciones 
    - almacenan pares 'clave-valor'
    - tanto las claves como los valores pueden ser objetos, arrays, tipos primitivos... cualquier tipo
    - son listas ordenadas
    - son más rápidos que un objeto
    - especialmente diseñados para agregar/quitar/recorrer elementos
    - cuando son muy grandes son más rápidos que un objeto
    
*/

const cliente = new Map();

// agregar elementos | clave, valor
cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);

console.log(cliente);

// obtener/saber longitud
console.log(cliente.size);

// comprobar si un valor existe | retorna true o false
console.log(cliente.has('nombre'));

// obtener un valor
console.log(cliente.get('nombre'));

// eliminar valor
cliente.delete('saldo');

// eliminar todos los elementos
//cliente.clear();

console.log(cliente);


// === iniciar un Map con valores | un array que contiene dos arrays dentro ===
const paciente = new Map([ ['nombre', 'paciente'], ['cuarto', 'no definido'] ]);

// agregar valores después de inicializar el Map | con Set
paciente.set('dr', 'Dr Asignado');

// reescribir un valor
paciente.set('nombre', 'Antonio');

// === iterar Map ===

// clave valor
paciente.forEach(datos => console.log(datos));

// clave
paciente.forEach((datos, index) => {
    console.log(index);
})


console.log(paciente);