// ============
// === json ===
// ============

// persistencia de los datos | guardar datos para después usarlos, sin base de datos
// los datos viajan en formato 'json' | para enviar esta variable 
// tenemos que transformarla a json (texto plano con estructura de objeto js

// =============================================
// === cuando nosostros 'enviamos' los datos ===
// =============================================
// para enviar un dato 'fuera' de nuestro programa tiene que ser en json | convertirlo a json | para que viaje via HTTP

const nombre = 'Salva';
const textoParaEnviar = JSON.stringify(nombre);         // convertir nombre (variable) a json para poder enviar

// vemos como se muestran | antes de transformar y despues de transformar

console.log(nombre);                                    // Salva
console.log(textoParaEnviar);                           // "Salva" -> json | puede viajar de nuestro navegador al servidor


// =========================================================================================================================
// === también podemos hacer esto con objetos                                                                            ===
// =========================================================================================================================

const persona = {
    name: 'Salvador',
    age: 45
}

const personaParaEnviar = JSON.stringify(persona);      // convertir persona (objeto) a json para poder enviar

// vemos como se muestran | antes de transformar y despues de transformar

console.log(persona);                // objeto
console.log(personaParaEnviar);      // texto plano, todo entre comillas menos número, mantine la estructura de objeto    



// ==============================================
// === cuando nosostros 'recibimos' los datos ===
// ==============================================
// para recibir un dato hay que recibirlo en json | después se transforma a lo que se necesite, variable u objeto
// hay que 'parsear' de json a variable o a objeto | hacer proceso contrario

const personaRecibida = JSON.parse(personaParaEnviar);      // parsear/transformar de json a objeto
console.log(personaRecibida);
