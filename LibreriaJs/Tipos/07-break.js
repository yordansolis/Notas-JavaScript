/** Este programa es una mala practica pero se entiende para que sirve el 
ciclo wile
* le enviamos un paramatro que sean 5 veces que se ejetute el programa
*/
let tienda = (producto, unidad) => {
    let cont = 0;
    let cantidad = 0, num1 = 0, suma = 0;
    //DESDE QUI INICIA EL BUCLE
    while (cont <= unidad) {
        //PEDIMOS LOS DATOS POR CONSOLA
        cantidad = prompt("Dime cuantas unidades quieres limite maximo" + unidad);
        let num1 = parseInt(cantidad);
        //sibe como contador para un bucle lo que tenia mas lo que se viene 
        suma += num1;
        console.log(suma);
        if (suma > unidad) {
            console.warn("Finalizo la compra lo maximo es " + unidad);
            break;
        } if (suma === unidad) {
            return    console.log("Feliz compra: " + producto + suma);
        }
        
         cont++;
    }

}
tienda("Sueter polo ", 5)