/**
 * La sintaxis de desestructuración es una sintaxis especial introducida en ES6,
 *  para asignar los valores directamente desde un objeto
 */

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  }; 
  
  // Obtenemos los valores 
  
 const {today, tomorrow} = HIGH_TEMPERATURES;

 //los cambiamos 
  const {today: highToday } =  HIGH_TEMPERATURES;
  const {tomorrow: highTomorrow } = HIGH_TEMPERATURES;
  


  /* dar nuebos nombres a asgnacion de variabes */ 

  const user = { name: 'John Doe', age: 34 };
  const { name: userName, age: userAge } = user;

  /**
   * Usa sintaxis de desestructuración para asignar variables desde objetos anidados
   */
