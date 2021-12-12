// =======================
// === template string ===
// =======================

// === concatenación ===

const numero = num => 'el número es: ' + num;

const resultado = numero(10);
console.log(resultado);


// === template string ===
// podemos mezclar strings y js (variables) || usar -> `texto  ${variable}`

const suma = (num1, num2) => {
    return `La suma de ambos números es: ${num1 + num2}`;
}

const resultadoDos = suma(10, 20);
console.log(resultadoDos);

