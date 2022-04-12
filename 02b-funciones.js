// ===========================
// === funciones | parte 2 ===
// ===========================

/*
    función -> conjunto de instrucciones que:
                - realizan una tarea
                - calculan un valor
                - funcionalidad que se repite mucho                

    nombre de la función -> verbo + sustantivo (imprimeMensaje)
    function nombreFuncion(argumentos) {
        cuerpo función;
    }
    nombreFuncion(parámetros);
    formas de crear una función:
*/

// ======================================
// === declaración función sin return ===
// ======================================
// no retorna nada | ejecuta el código del cuerpo de la función
function imprimeMensaje() {
    console.log('Hola soy una función');
}
imprimeMensaje();

// ======================================
// === declaración función con return ===
// ======================================
function calculaPromedioDeTresNumeros(num1, num2, num3) {
    let promedio = (num1 + num2 + num3) / 3;
    return 'El promedio es: ' + promedio + ' euros';
}
console.log(calculaPromedioDeTresNumeros(35, 10, 9));

// otra forma de hacerlo | con 'template literals'
function calcularPromedioDeTresNumerosTemplateLiteral(num1, num2, num3) {
    let promedio = (num1 + num2 + num3) / 3;
    return `El promedio es: ${promedio} euros`;
}
console.log(calcularPromedioDeTresNumerosTemplateLiteral(35, 10, 9));

// ==================================
// === asignar función a variable ===
// ==================================
const calcula = calculaPromedioDeTresNumeros; 
console.log(calcula(35, 10, 9));

// ================================
// === expresión de una función ===
// ================================
const calculaArea = function(ancho, alto) {
    const area = ancho * alto;
    return area;
}
console.log(calculaArea(25, 10));

// ==========================================
// === funciones flecha | arrow functions ===
// ==========================================
const calculaAreaFlecha = (ancho, alto) => {
    const area = ancho * alto;
    return area;
}
console.log(calculaAreaFlecha(25, 10));

// ==========================================
// === funciones flecha | arrow functions ===
// ==========================================
// con sólo 1 parámetro y 1 sóla expresión (sin paréntesis)
const multiplicaNumero = x => x **3;
console.log(multiplicaNumero(10));

// ================================
// === funciones como parámetro ===
// ================================
// funciones como parámetro en otras funciones
const avisaUsuario = (funcion, argumento) => {
    console.log(funcion(argumento));
}

const saludaUsuario = (nombre = 'Amigo') => {
    return `Hola ${nombre}`;
}
avisaUsuario(saludaUsuario, 'Salva');

