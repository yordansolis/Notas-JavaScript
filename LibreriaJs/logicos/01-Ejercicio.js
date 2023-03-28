/**
 * Programa una función que dado un array numérico devuelve otro array con los 
 * números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]. 
 
*/

const mi_funcion =(cadena = undefined)=>{ 

if(typeof cadena == "string")console.warn("No aceptamos string");
if(cadena == undefined)console.warn("la cadena esta vacia");

    for(let i = 0;  i <cadena.length; i++ ){
       console.info(Math.pow (cadena[i], 2));
    }
   
}
mi_funcion([1, 4, 5]);  
mi_funcion(" ")
//mi_funcion();