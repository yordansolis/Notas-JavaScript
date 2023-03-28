/*Programa una función que corte el número de caracteres de una 
cadena de texto, pe. miFuncion("Hola Mundo") devolverá ("Hola ").
Desarrollo */


const recortarTexto = (cadena = "", long = undefined) => (!cadena)
  ? console.warn("No ingreso un texto")
  : (long === undefined)
    ? console.warn("No ingreso la logitud")
    : console.info(cadena.slice(0, long));

recortarTexto("Hola mundo", 4);
recortarTexto();
recortarTexto("Hola");
recortarTexto("", 5)
