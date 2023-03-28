//ejercicio que pida por teclado 10 numero y solo imprima los pares 
let operacion1, cp = 0;
for (let numero = 0; numero < 5; numero++) {
    operacion1 = prompt("Ingrese numero");
    if (operacion1 % 2 == 0) {
        cp = cp + 1;
    }
    console.log("los numeros pares son" + cp);
}



//programa que pida numeros del 1 al 8 y solo muestre los pares 
for (let numero = 0; numero < 8; numero++) {
    let operacion = prompt("Ingrese numero");
    if (operacion % 2 == 0) {
        console.log(operacion);
    }
}