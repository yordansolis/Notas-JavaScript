/**
 * Usa funciones flecha para escribir funciones anónimas de manera breve
 *  No necesitamos nombrar estas funciones porque no las reutilizamos en otro lugar.
 */

const myFunc = () => {
    const myVar = "value";
    return myVar;
  }



  /***
   * Cuando la función no posee cuerpo y sólo tiene un valor de retorno, 
   * la sintaxis de "función de flecha", te permite omitir la palabra clave return,
   *  así como los corchetes que rodean el código.
   *  Esto ayuda a simplificar las funciones más pequeñas en sentencias de una sola línea:
   */

  const magic = () =>  new Date();
/**Al igual que una función regular, puedes pasar argumentos a una función flecha.
 */
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);


/** acumilando array */
const myConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(myConcat([1, 2], [3, 4, 5]));

/** parametros anonimos */
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));
console.log(greeting());



/**
Modifica la función increment agregando 
parámetros por defecto para que sume 1 a number si value no se especifica.
 */
const increment = (number, value= 1) => number + value;