/* Programa una función que elimine cierto patrón de caracteres de un texto dado,
 pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá "1, 2, 3, 4 y 5.
*/

/
const miFuncion = (cadena1) => {

    let parrafo1 = cadena1.split("");


    for (let i = 0; i < parrafo1.length; i++) {

        expresion = /(\d)/i;
        //console("LL", expresion);
        hallado = parrafo1[i].match(expresion);

        let f = hallado;

        while (f != null) {
            console.log(f);
        }
        console.log(f);
    }
}

miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5");