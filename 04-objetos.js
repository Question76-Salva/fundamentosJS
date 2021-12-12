// ===============
// === objetos ===
// ===============

// los objetos es lo más utilizado en los frameworks/librerías de js: angular, react, vue
// se le asignan un nombre, se abren con corchetes, cada propiedad se asigna su valor con los dos puntos (no con el igual)
// cada propiedad va separada por una coma (cuando hay más de una), menos al última propiedad
// puede tener distintos tipos de datos -> String, number, boolean, array, otro objeto, función...

const mascota = {
    nombre: 'Tom',
    edad: 10,
    vivo: true
}

// === imprimir todas las propiedades del objeto ===
console.log(mascota);       

// === acceder a la propiedad seleccionada del objeto | nomenclatura del punto ===
console.log(mascota.nombre);    
console.log(mascota.edad);
console.log(mascota.vivo);

// === agregar/asignar nuevas propiedades al objeto ===
mascota.id = 1;
console.log(mascota.id);
console.log(mascota);


mascota.amigos = ['Toby', 'Jake', 'Lee'];
console.log(mascota.amigos);
console.log(mascota.amigos[0]);
console.log(mascota.amigos[1]);
console.log(mascota.amigos[2]);
console.log(mascota);
