/**
 * Programa una función que dado un array devuelva el número mas alto y el más 
 * bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60]. 
 */

const miFuncion = (cadena = undefined) =>{

    for(let i = 0;  i <cadena.length; i++ ){
        
        let valorMax= Math.max( cadena[i]);
        let valorMin= Math.min( cadena[i]);
        console.log(valorMax, valorMin);
   
   }
}

miFuncion([1, 4, 5, 99, -60]);