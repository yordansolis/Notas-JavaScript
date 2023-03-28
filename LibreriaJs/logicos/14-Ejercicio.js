/*que se repite una palabra en un texto largo, pe.miFuncion("hola 
mundo adios mundo", "mundo") devolverá 2 */

const miFuncion = (cadena, elemento) => {
     /**Faltarn las validaciones */

    let arrayi = cadena.split(" ");
    let arrayj = elemento.split(" ");
    let contador = 0;

    //usar un for dentro de otro no es muy recomendado  .... solo para casos como este 
    for (let i = 0; i < arrayi.length; i++) {
        for (let j = 0; j < arrayj.length; j++) {
            // console.log(arrayj[j]+ " " + arrayi[i]);
            if (arrayj[j] === arrayi[i]) {
                console.log("se repiten");
                contador++;
            }
        }
    }
    return  console.log(contador);
}
miFuncion("hola mundo adios mundo", "mundo");