const saluda = () => console.log("saludar");
saluda("solis")


const numeros = [1, 2, 3, 4, 5];
numeros.forEach((el, index) => console.log(`${el} nuemro ${index}`));


// cuando recibimos parametros 
const hola = (nombre) => console.log(`Hola ${nombre}`);
hola("Yordan");



// cuando recibimos parametros para expresar, no necesitamos usar return
const suma = (a, b,) => a + b;
console.log(suma(13, 4));
//para recorrer buques 
const n1 = [1, 2, 3, 4, 5];
n1.forEach((el, index) => console.log(`${el} nuemro ${index}`)); 