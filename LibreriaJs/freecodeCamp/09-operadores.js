/**
 * Si tienes múltiples condiciones que necesitan ser resueltas,
 *  puedes encadenar sentencias if junto con sentencias else if.
 * 
 * 
 * El orden es importante en las sentencias if, else if.

 La función se ejecuta de arriba a abajo,
 por lo que habrá que tener cuidado con qué sentencia va primero.
 */

function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

orderMyLogic(7);




function testSize(num) {
    // Cambia solo el código debajo de esta línea
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    }
    else if (num < 20) {
        return "Large";
    }
    else if (num >= 20) {
        return "Huge";
    }

    return "Change Me";
    // Cambia solo el código encima de esta línea
}

testSize(7);