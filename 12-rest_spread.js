// =====================
// === rest / spread ===
// =====================

// la sintaxis es colocar ...

// === rest ===

const [primero, ...elResto] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; // destructuring primero "1", guarda el resto del array en "elResto"

console.log(primero);                                   // destructuring -> primero "1"
console.log(elResto);                                   // [2, 3, 4, 5, 6, 7, 8, 9, 0] se crea otra array "elResto"


const yoSalva = {
    nombre: 'Salvador',
    profesion: 'Desarrollador Web',
    esGuapo: true,
    edad: 45
}

const {nombre, ...otrosDatos} = yoSalva;

console.log(nombre);
console.log(otrosDatos);



// === spread | propagación ===
// copiar un array o un objeto a un nuevo array o a un nuevo objeto | nos sirve para fusionar datos que están relacionados
// en diferentes objetos

const empleado = {
    ...yoSalva,
    sueldo: '3k USD',
    proyecto: 'El nuevo facebook',
    tazasDeCafeXDia: 16
}

console.log(empleado);