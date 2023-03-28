/*Programa una función que invierta las palabras de una cadena de texto, pe. 
miFuncion("Hola Mundo") devolverá "odnuM aloH".*/


const invertirCadena = (cad) => {

    if (!cad) return console.warn("Falta contenido en la cadena");

    if (cad < 1) return console.warn("Solo aceptamos cadenas");

    let nuevaCadena = ''; //esta variable almacenara la cadena creada 
    for (let i = cad.length - 1; i >= 0; i--) {

        nuevaCadena += cad[i];

    }

    console.log( cad);
    return console.log(nuevaCadena);
}
invertirCadena("I Love JavaScrip ");
invertirCadena(" ");
invertirCadena("-111 ");
//invertirCadena("Hola mundo")