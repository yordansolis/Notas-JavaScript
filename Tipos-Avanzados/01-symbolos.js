/*los simbolos se usar para crear propiedades privadas del objeto
Muy util para cread propiedades privadas dentro de un objeto.
si valor es unico
*/
const NOMBRE = Symbol("nombre");
const SALUDAR = Symbol("saludar");

const persona={
  [NOMBRE]:"jhordan",
  edad:17
}

console.log(persona);
//se utiliza para crear propiedades Unicas
persona.NOMBRE= "Andres Asprilla";

console.log(persona);
console.log(persona[NOMBRE]);
console.log(persona.NOMBRE);


console.log(Object.getOwnPropertySymbols(persona));

let id = Symbol("id");
let id2 = Symbol("id");
console.log(id === id2);

persona[SALUDAR] = function () {
console.log("Hola mundo")  
}
persona[SALUDAR]();
for(let propiedad in persona){
  console.log(propiedad);
  console.log(persona[propiedad]);
}

