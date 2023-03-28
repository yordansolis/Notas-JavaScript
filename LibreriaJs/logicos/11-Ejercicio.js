/*Programa una función que dada una String te devuelva un Array 
de textos separados por cierto caracter, pe. miFuncion('hola que tal', 
' ') devolverá ['hola', 'que', 'tal']*/

const text = (cadena) => {

    let convertir = cadena.split(' ');
    
    return console.info(convertir);
}
let leer = text("hola que tal");

