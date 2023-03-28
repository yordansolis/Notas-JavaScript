/* Programa una función que elimine cierto patrón de caracteres de un texto
dado, pe.miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5") devolverá "1, 2, 3, 4 y 5.
Casi 1*/

const miFuncion = (cadena1) => {

    //los separa
    let parrafo1 = cadena1.split("");
    
    /**Converte todo en string */
    let p = parrafo1.toString();
  
    
    // en este caso la g no se detiene al encontrar la primera 
    //y la i no le impirta entre mayusculas y minisculas 
    expresion = /(\d)/ig;
    hallado = p.match(expresion);
    let f = hallado;
    console.log(f.toString());
}
miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5");
