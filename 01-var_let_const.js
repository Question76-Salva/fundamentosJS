// =================================
// === "var" vs "let" vs "const" ===
// =================================

// =========================================================================================================================
// var => al declarar la variable "edad" con un valor podemos volver a declarar esa variable con otro valor.
// problema: estamos declarando dos veces una varible y le estamos cambiando el valor | imaginemos que tenmos mucho código
// y declaramos muchas variables... podemos olvidar que hemos declarado una o varias variables y por accidente más adelante 
// en un código muy extenso podemos volver a declarar esa variable con otro valor y cambiarlo | xxx peligro xxx
// var -> está en deshuso, no usar!!! tiene la "debilidad" de poder declarar dos veces la misma variable
// =========================================================================================================================

var edad = 10;
var edad = 20;
console.log(edad);           // 20


var edad2 = 10;             // 10
if(true) {
    var edad2 = 20;
    console.log(edad2);     // 20 -> dentro de la condición se modificó su valor
}
console.log(edad2);         // 20 -> el valor se modificó, de 10 a 20, le afecta tanto dentro como fuera de la condición


// =========================================================================================================================
// let => la variable sólo se puede declarar una vez, pero más adelante cuando lo necesitemos podemos modificar su valor.
// let no permite declarar dos veces la misma variable, pero si nos permite modificar su valor
// =========================================================================================================================

let age = 10;
age = 20;
console.log(age);             // 20


let age2 = 10;             // 10
if(true) {
    let age2 = 20;
    console.log(age2);     // 20 -> dentro de la condición se modificó su valor a 20 | solo vive dentro del "scope"
}
console.log(age2);         // 10 -> por fuera de la condición mantiene su valor original a 10


// =========================================================================================================================
// const -> es una "constante", o sea, su valor no va a cambiar con el tiempo
// con una constante no podemos sobrescribir su valor.
// =========================================================================================================================

const cantidad = 10;

const cantidad2 = 10;             // 10
if(true) {
    let cantidad2 = 20;
    console.log(cantidad2);     // 20 -> las constantes también viven dentro de un "scope"
}
console.log(cantidad2);         // 10 -> por fuera de la condición mantiene su valor original a 10


// ===============================================================================================================================
// === excepción "const" | queremos agregar otro valor al array | y agregar otro valor a un objeto ===
// las "const" cuando son arrays u objetos pueden ser mofificadas dentro de sus propiedades, o agregar nuevas
// ===============================================================================================================================

const arrayNumeros = [10, 20, 30];
arrayNumeros.push(40);                  // con este método para los arrays si permite modificar el valor de una constante
console.log(arrayNumeros);

const persona = {
    nombre: 'Salva',
    edad: 45
}

persona.edad = 46;                      // podemos modificar el valor de una constante tipo objeto
persona.pais = 'España';                // podemos agregar un nuevo valor a la constante tipo objeto

console.log(persona);
