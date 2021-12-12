// =================
// === funciones ===
// =================

// === función clásica ===

function sumar(num) {
    console.log(num);                                                   // 10
}

sumar(10);

// ===============================================================================================================================
// === arrow function | reducen bastante el código ===
// con sólo un parámetro se puede omitir los paréntesis del parémtro | y si es una sóla línea puede ir todo junto, y sin el return
// con más de un parámetro hay que colocar los paréntesis a los parámetros
// ===============================================================================================================================

const sumarDos = (num1, num2) => {
    console.log(num1 + num2);                
}

sumarDos(20, 30);                                                        // 50

// ===============================================================================================================================
// === retorno de valores en la función === | lo que se retorna se guarda en una constante | y después pintarlo por consola
// ===============================================================================================================================

const sumarRetorna = (num1, num2) => {
    return (num1 + num2);
}

const resultado = sumarRetorna(30, 40);
console.log(resultado);                                                 // 70


// ===============================================================================================================================


const sumarRetornaDos = (num1, num2) => (num1 + num2);
const resultadoDos = sumarRetornaDos(40, 50);
console.log(resultadoDos);                                              // 90


// ===============================================================================================================================


const mensaje = nombre => {
    return 'hola soy ' + nombre;
}

const resultadoMensaje = mensaje('Salva');                              
console.log(resultadoMensaje);                                                  // hola soy Salva


// ===============================================================================================================================


const mensajeDos = nombre => 'hola soy de nuevo ' + nombre;
const resultadoMensajeDos = mensajeDos('Salva');
console.log(resultadoMensajeDos);                                               // hola soy de nuevo Salva


// ===============================================================================================================================


const sumaTres = num => {
    console.log(num + 3);                                                       // a "num" le suma 3
}

sumaTres(9);                                                                    // 12


// ===============================================================================================================================


const sumaTresDos = (num = 0) => {
    console.log(num + 3);                           // asígna 0 al parámetro si no se envia argumento en la invocación
}

sumaTresDos();                                                                  // 0 + 3 => 3
