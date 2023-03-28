/*Programa una función que obtenga un numero aleatorio entre 
501 y 600.*/

const miFuncion = (numero) => {
    numero = Math.round((Math.random() * 100) + 500);
    console.log(numero)
}
miFuncion(1);
