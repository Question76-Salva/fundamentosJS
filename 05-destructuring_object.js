// ==============================
// === desctructuring objetos ===
// ==============================

const mascota = {
    nombre: 'Tom',
    edad: 10,
    vivo: true,
    razas: ['peludo', 'negro']
}

// === guardar en una constante una propiedad del objeto ===
const nombreMascota = mascota.nombre;
console.log(nombreMascota);                                                 // Tom


// === desctructuring | capturar las propiedades del objeto y asignarlas como variables para acceder a ellas sin el punto {} ===
const {edad, nombre} = mascota;
console.log(edad);                                                            // 10
console.log(nombre);                                                          // Tom
