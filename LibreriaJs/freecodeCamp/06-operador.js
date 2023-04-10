

/******
 * Si los valores que se comparan no son del mismo tipo, 
 * el operador de igualdad == realizará una conversión de tipo y luego evaluará los valores.
 * Sin embargo, el operador de estricta igualdad === comparará tanto el tipo de datos como el valor tal como es
 *  sin convertir un tipo a otro.
 * @see___  3 == '3' devuelve true 
 * @see___   3 === '3' devuelve false 
 * puedes determinar el tipo de una variable o un valor con el operador:
 * @see typeof,  
 */


// Configuración
function compareEquality(a, b) {
    if (a === b) { // Cambia esta línea
      return "Equal";
    }
    return "Not Equal";
  }
  
  compareEquality(10, "10");


  
  /****
   * @see !=   decir que no es igual -> devuelve false
   */
// Setup
    function testNotEqual(val) {
        if (val != 99) { // Change this line
        return "Not Equal";
        }
        return "Equal";
    }
    
    testNotEqual(10);


  /**
   * @see !== estricta desigualdad -> devielve flase
   */


  /**
   * @Mayor_o_igual <=  >= 
   */

  /**
   * @see || devuelve true si cualquiera de los operandos es true. De lo contrario, devuelve false
   */

  function testLogicalOr(val) {
    // Cambia solo el código debajo de esta línea
  
    if (val <= 9 ||val > 20 ) {
      return "Outside";
    }
  
  
    // Cambia solo el código encima de esta línea
    return "Inside";
  }
  
  testLogicalOr(0);
  testLogicalOr(9);
  testLogicalOr(10);
  testLogicalOr(15);
  testLogicalOr(19);
  testLogicalOr(20);
  testLogicalOr(21);
  testLogicalOr(22);