/**
* @see
* Los números primos son aquel los números enteros que son mayores que 1 y solo son divisibles por 1 y por sí mismos,
 es decir, no tienen otros divisores que los mencionados.Un ejemplo:
 Los primeros números primos son: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
*/
const Mifuction = (numero = undefined) => {

    if (numero === undefined) return console.error("el numero es vacio");

    if (numero < 0) return console.warn("solo aceptamos numero positivos");

    if (numero === 0) return console.warn(`el numero no puede  ser "${numero}" `);

    if (typeof numero !== "number") return console.warn(`el numero esta vacio `);   


    if (numero == 0 || numero == 1 || numero / 4) return console.log(`El ${numero} no es primo `);

    //determina si un numero es primo o no
    for (let x = 2; x < numero / 2; x++) {
        if (numero % x == 0) return false;
    }
    // Si no se pudo dividir por ninguno de los de arriba, sí es primo
    return console.log(`el  ${numero} es primo `);
}

Mifuction();
Mifuction(-1);
Mifuction(1)
Mifuction(0);
Mifuction(11);
Mifuction(2);
Mifuction(4);
Mifuction(8);
Mifuction(12);