//* ===============
//* === módulos ===
//* ===============

// === archivo principal | va a recibir todas las frutas | importa ===

import { sandia, pintarPlatano, fresa, Fruta } from "./frutas.js";

console.log(sandia);

pintarPlatano();

fresa();

// === instanciar clase Fruta ===
const cereza = new Fruta("🍒");
console.log(cereza);

// === export default | sólo 1 vez por documento ===
import queso from "./frutas.js";
console.log(queso);