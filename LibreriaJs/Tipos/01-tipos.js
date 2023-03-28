let nombre_completo = "Jhordan Andres Asprilla";
let texto = nombre_completo.length;

console.log("El numero de palabras es: ", texto);

let texto01 = nombre_completo.toUpperCase();
console.log("Texto en mayuscula", texto01);



let texto02 = nombre_completo.toLowerCase();
console.log("Texto en minuscula ", texto02);



let texto03 = "Hola mi nombre es jordan y estoy feliz";
console.log("resultado de busqueda: ", texto03.includes("feliz"));



/***se utiliza para convertir una cadena de texto en un arreglo de subcadenas,   */
let texto04 = nombre_completo.split(" ");
console.log("El texto separado: ", texto04);


/**
 * se utiliza para unir los elementos de un arreglo en una cadena
 *  de texto separada por un separador específico O si se quiere sin espacio join()
 */
var frutas = ["manzana", "banana", "naranja"];
var frutasString = frutas.join(", ");
console.log("resultado: ", frutasString); // "manzana,banana,naranja"



let nombre = "Jhordan";
let apellido = "solis";
console.log("Hola mi nombre es " + nombre + " " + apellido);
let saludo = `Si  un gusto ${nombre} tqm ${apellido} `;
console.log(saludo); 



let numeros = [12, 15, true];

numeros = numeros.toString();

console.log(numeros);
