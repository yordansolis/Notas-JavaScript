/** * 
 * Con el parámetro rest, puedes crear funciones que tomen un número variable de argumentos.
 *  Estos argumentos se almacenan en un arreglo al que se puede acceder más tarde desde
 *  dentro de la función
 */


function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
  }
  console.log(howMany(0, 1, 2));
  console.log(howMany("string", null, [1, 2, 3], { }));

  /*
  La consola mostrará las cad
  enas You have passed 3 arguments. y You have passed 4 arguments..  
  */
  const sum = (...args) => {
    //const args = [x, y, z];
    let total = 0;
    for (let i = 0; i < args.length; i++) {
      total += args[i];
    }
    return total;
  }
  sum(0,1,2);
  
  sum(1,2,3,4);
  sum(5);