/*** Modificadores de array */
// Configuración
const myArrays = [18, 64, 99];
myArrays[0] = 45;

//console.log(myArrays);




/****Acedendo a arreglos de arreglos 
@see
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];
  
  const subarray = arr[3];
  const nestedSubarray = arr[3][0];
  const element = arr[3][0][1];

  En este ejemplo, subarray tiene el valor [[10, 11, 12], 13, 14],
   nestedSubarray tiene el valor [10, 11, 12], 
   y element tiene el valor 11.
*/

const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];
  
  //asi obtenemos el valor de 8 
  const myData = myArray[2][1];
  console.log(myData);



//.push() toma uno o más parámetros y los "empuja" al final del arreglo.

// Configuración
const myA = [["John", 23], ["cat", 2]];
myA.push(["dog", 3]);
// Cambia solo el código debajo de esta línea


//.pop() elimina el último elemento de un arreglo y devuelve ese elemento
// Configuración
const myArr = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArr.pop();
// Cambia solo el código debajo de esta línea



//elimina el primer elemento
// Configuración
const valor1 = [["John", 23], ["dog", 3]];
const removedFromMyArra = valor1.shift()



//agregando elemettos
// Configuración
const valor02 = [["John", 23], ["dog", 3]];
valor02.shift();
valor02.unshift(["Paul", 35]);

// Cambia solo el código debajo de esta línea
