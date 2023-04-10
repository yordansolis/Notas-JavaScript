/**
 * 
 * . Para asegurar que tu información no cambie, JavaScript provee una función Object.
 * freeze para prevenir la mutación de datos.
 */

function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // EVITE QUE LOS VALORES CAMPUEN
   Object.freeze(MATH_CONSTANTS); 
   //Object.freeze(MATH_CONSTANTS); 
  
  
    // Cambia solo el código encima de esta línea
      MATH_CONSTANTS.PI = 212;
  
    try {
      MATH_CONSTANTS.PI = 100;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();

console.log(PI);


  /**
   * En este desafío vas a utilizar Object.freeze para prevenir el cambio
   *  de constantes matemáticas. Necesitas congelar el objeto MATH_CONSTANTS 
   * para que nadie pueda alterar el valor de PI, añadir o borrar propiedades
   */