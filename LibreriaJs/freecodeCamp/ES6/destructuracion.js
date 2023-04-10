/*A la variable a se le asigna el primer valor del arreglo,
 y a b se le asigna el segundo valor del arreglo. También podemos acceder 
 al valor en cualquier índice de un arreglo con la desestructuración usando
  comas para alcanzar el índice deseado:*/

const [s, d,,, c] = [1, 2, 3, 4, 5, 6];
console.log(s, d, c);
//La consola mostrará los valores de a, b, y c como 1, 2, 5.


let a = 8, b = 6;
// Cambia solo el código debajo de esta línea

[a, b]=[b, a];
//Array [ 6, 8 ]