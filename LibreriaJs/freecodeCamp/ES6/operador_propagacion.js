/**
 *   nos permite expandir arreglos y otras expresiones
 *  en lugares donde se esperan múltiples parámetros o elementos
 */

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);


/**
 * 
 */
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Cambia esta línea

console.log(arr2);