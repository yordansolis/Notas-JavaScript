/*** cuando quiera que una variable cambie de valor se usa 
 * let de lo contraro const 
 * 
 */

let a = 3;
let b = 17;

a  += 12;
b  += 9 ;
console.log("value a: ",  a ,"value b:", b);

//** ejemplo 2  */
let e = 11;
let j = 9;

// Cambia solo el código debajo de esta línea
e -= 6;
j -= 15;
console.log("value e: ",  e ,"value j:", j);


// Cambia esta línea
const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Cambia esta línea
console.log(myStr);



const mytr = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(mytr);


/**
 

 \comilla simple
\"	comilla doble
\\	barra invertida
\n	línea nueva
\t	tabulador
\r	retorno del carro
\b	límite de palabra
\f	fuente de formulario

 */
const myStrs = "FirstLine\n\t\SecondLine\nThirdLine"; // Cambia esta línea
console.log(myStrs);


const myStr1 = "This is the start." + " This is the end."; // Cambia esta línea
console.log(myStr1);

let myStr2 = "This is the first sentence. ";
myStr2 += "This is the second sentence." 
console.log(myStr2);



// Cambia el código debajo de esta línea
const someAdjective = "hola1";
let myStr4 = "hola2";
myStr4 += someAdjective;
console.log(myStr4);


/********* Numeros de caracteres  */

// Configuración
let lastNameLength = 0;
const lastName = "Lovelace";

// Cambia solo el código debajo de esta línea
lastNameLength = lastName.length;

console.log("Numeros de caracteres: ", lastNameLength);


/*********** segundo ejemplo  */

// Configuración
let firstLetterOfLastName = "";
const lastNa = "Lovelace";

// Cambia solo el código debajo de esta línea
firstLetterOfLastName = lastNa[0]; // Cambia esta línea

/*********** Obteniendo el ultimo valor de una letra:   */
// Configuración
const lastNam = "Lovelace";

// Cambia solo el código debajo de esta línea
const lastLetterOfLastName = lastNam[lastNam.length - 1]; // Cambia esta línea


const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Cambia solo el código debajo de esta línea
const wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " "  + myAdverb + "."; // Cambia esta línea
// Cambia solo el código encima de esta línea

