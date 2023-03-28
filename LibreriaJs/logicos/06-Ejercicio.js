/** ACUMULULADOR 
 *  el acumulador nos sirve para guardar la ferencia de un valor 
 * Problema: Desarrollar un funcion que permita la carga de 5 valores por teclado 
 * y nos muestre posteriormente la suma.
*/
const miSuma = (numero) => {
  // se debe inicilizar la x en 1
  let x = 1;
  let acumulador = 0, valor;
  while (x <= numero) {
    valor = parseInt(prompt('Ingrese valor:'));
    acumulador += valor;
    x = x + 1;
  }
  console.log("la suma es: " + acumulador);
}

let obj = prompt("Ingrese valor");
miSuma(obj);