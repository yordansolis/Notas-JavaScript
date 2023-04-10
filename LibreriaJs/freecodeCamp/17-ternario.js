/**
 * 
 * La sintaxis es a ? b : c, donde a es la condición, 
 * b es el código a ejecutar cuando la condición devuelve true, 
 * y c  es el código a ejecutar cuando la condición devuelve false.
*/


function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" 
      : (a > b) ? "a is greater" 
      : "b is greater";
  }

findGreaterOrEqual(2, 4); 


