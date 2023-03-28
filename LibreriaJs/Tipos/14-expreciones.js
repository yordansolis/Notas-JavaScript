/*
Se utilizan principalmente para la búsqueda de patrones de cadenas de 
caracteres u operaciones de sustituciones.
::son una secuencia de caracteres que forman un patrón de búsqueda, 
principalmente para la búsqueda de patrones de caracteres, 
Paginas oficiales para comprender cualquier ejericio 
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expres
sions
Explicaacion: https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular
*/
const a = [1,false,"app", ["A","M","p"]];
let cadena = 
" ipsum dolor sit amet consectetur adipisicing elit. Corporis iusto porro voluptatibus molestias odit nostrum! Veritatis temporibus quos aspernatur nulla ad! Est ipsam voluptates error soluta, velit do necessitatibus optio!";
//cuentra la palabra em y como resultado devuelve true 
let re = new RegExp("em","i"); 
// como no encuentra lorem responde un null
let re2 = /lorem/; 
console.log(re2.test(cadena));
console.log(re2.exec(cadena)); 
/*https://es.wikipedia.org/wiki/Expresi%C3%B3n_regular*/