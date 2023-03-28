/*
Programa una función que dada una cadena de texto cuente el número de 
vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, 
Consonantes: 5. 
*/
const miCadena = (cadena = undefined) => {

    let vocales = 0;
    let Consonantes = 0;

    //quitamos los espacios
    procesado = cadena.replace(/\s+/g, '');
    
    //la convertidos en un arreglo  para recorrerla en un FOR 
    let buscaCanea = procesado.split("");
    
    
    for (let letra of buscaCanea) {
     
        if (/[aeiouáéíóúü]/.test(letra)) {
            vocales++;
        } else if (/[bcfedwiw]/) {
            Consonantes++
        }
    }
    return console.log(vocales);
}
miCadena(" Hola Mundo ")