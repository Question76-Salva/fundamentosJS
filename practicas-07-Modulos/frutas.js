//* ===============
//* === m贸dulos ===
//* ===============

// archivo que "exporta"

// que la constante "sandia" viaje/exportar al archivo app.js
export const sandia = "馃崏";

// que la funci贸n "pintarPlatano" viaje/exportar al archivo app.js
export function pintarPlatano() {
    console.log("馃崒");
}

// que la arrow function "fresa" viaje/exportar al archivo app.js
export const fresa = () => {
    console.log("馃崜");
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

// === S贸lo se permite "una exportaci贸n predeterminada por m贸dulo"  ===
const queso = "馃";
export default queso;