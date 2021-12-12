//* ===============
//* === módulos ===
//* ===============

// archivo que "exporta"

// que la constante "sandia" viaje/exportar al archivo app.js
export const sandia = "🍉";

// que la función "pintarPlatano" viaje/exportar al archivo app.js
export function pintarPlatano() {
    console.log("🍌");
}

// que la arrow function "fresa" viaje/exportar al archivo app.js
export const fresa = () => {
    console.log("🍓");
}

// que la clase "" viaje/exportar al archivo app.js
export class Fruta {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

// ======================
// === export default ===
// ======================

// === Sólo se permite "una exportación predeterminada por módulo"  ===
const queso = "🧀";
export default queso;