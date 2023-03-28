/*Programa una función que reciba un número y evalúe si es 
capicúa o no(que se lee igual en un sentido que en otro), pe.
    miFuncion(2002) devolverá true.
// capia signica que un numero de sea alreves igual que alderecho 

*/
const capicua = (numero = 0) => {

    if (!numero) return console.warn("No ingresaste numero");

    if (typeof numero !== "number") return console.error(`el valor "${numero}" ingresado, Noo es numero `);

    //converte el numero en un string
    numero = numero.toString();
    
    /*lo convierte en un arreglo separado para poverlo invertir,
    * lo invierte,*
    *los convierte en una cadena de texto sin espacios */ 
    let alReves = numero.split("").reverse().join("");
    

    return ((numero) === alReves)
        ? console.info(`Si es capicua  "${numero}"  ---   "${alReves}" `)
        : console.info(`NO es capicua "${numero}" --- "${alReves}" `)
}
capicua("");
capicua("19");
capicua({});
capicua(18.99);
capicua(2002);