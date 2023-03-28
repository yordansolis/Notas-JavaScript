let cadena = "lorem Neymar mundo Neymar mundo lorem ella Neymar"; 
//tambien con este
let expReg2 = /Neymar/ig;
// -> esta es una forma mas comoda
// nos trae un arreglo 
console.log(expReg2.test(cadena));//true
console.log(expReg2.exec(cadena));//array




// Con Numeros
let numeros = "1234569";
let expReg3 = /[0-9]/g;// se buca posicion 
console.log(expReg3.test(numeros));




let cant = "lorem mundo mundo lorem eella lorem   ner"; 

let expReg4 = /lorem{2}/ig; 
//>> los conrchetes representan si se repete almenos dos veces , opcional ponerle mas numeros 
console.log(expReg4.test(cant));
