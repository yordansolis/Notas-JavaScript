/**6) Programa una función que dada una String te devuelva el numero que conteien 
*/

const miContador = (cadena) => {
    if (!cadena) console.warn("Amigo el texto esta vacio");
    if (cadena < 1)return console.error("Solo aceptamos valores positovos");
    if (cadena === undefined)return console.warn("Tienes espacios en blando ");
    console.info("El numero de caracteres es " + cadena.length);

}
miContador('Holaquetal');  
miContador(' ');                
miContador();  