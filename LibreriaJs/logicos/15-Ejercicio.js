/**Programa una funcion  que valide que una palabra es palidromo
 * 
 * 
 * 
 * Una palabra palíndroma es una palabra que se lee igual de izquierda a derecha que de derecha a izquierda.
 *  Es decir, es una palabra que tiene la misma forma y significado si se lee de adelante hacia atrás o de atrás hacia
 *  adelante.Algunos ejemplos de palabras palíndromas en español son "reconocer", "radar", "salas" y "somos".
 */


const miFuncion = (cadena) => {
/**faltaron los condicionales :( */
    
    //los separa
    let texto = cadena.split("");
    //los pone al reves 
    let alReves = texto.reverse();
    //los une
    let text_invertido = alReves.join("");

    //si son iguales true
    return (cadena === text_invertido)
        ? console.log("Si es palidromo: " +   text_invertido)
        : console.log("no es palabra: " + text_invertido);
}
miFuncion("salas");
miFuncion("holaMundo");
