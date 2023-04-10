/***
 * A veces tendrás que probar más de una cosa a la vez. El operador lógico and 
 * (&&) devuelve true si y solo si los operandos a la izquierda y a la derecha son verdaderos.
 * 
 */


function testLogicalAnd(val) {
    // Cambia solo el código debajo de esta línea
  
    if (val <= 50 && val >= 25) {
        return "Yes";
    }
  
    // Cambia solo el código encima de esta línea
    return "No";
  }
  
  testLogicalAnd(50);

// devolverá la cadena Yes si val es menor o igual a 50 y mayor o igual a 25. De lo contrario, devolverá la cadena No.