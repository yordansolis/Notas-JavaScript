console.log(console);
console.error("Esto es un error");
console.warn("Menaje en amarillo");
console.info("menaje informativo");

let nombre = "Jhor", app = "solis";
console.log(nombre);
console.log(app);
console.log(`mi nombre es %s y apellido %s `, nombre, app);
//Limpia la consola
//console.clear();
/*Console*/
let hola;
//confirma un algo 
/*Los cuadros de diálogo son ventanas modales: evitan que el usuario 
acceda al resto de la interfaz del programa hasta que se cierra el cuadro 
de diálogo. Por esta razón, no debe abusar de ninguna función que cree un 
cuadro de diálogo (o ventana modal). Independientemente, hay buenas 
razones*/
hola = confirm("Confirmar");
if (hola === true) {
    console.log("Hola confirme ");
}
// Alerta
hola = alert("alerta")
//Pide datos por consola
hola = prompt("Dame el valor 2", 0);






//Muetra la tableta
console.table(numero);
console.table(vocales);
const perro = {
    nombre: "Bun",
    genero: "macho"
}
console.table(perro);
console.time("tiempo tarda mi cidigo");
const arreglo = Array(1000000);
for (let j = 0; j < arreglo.length; j++) {
    arreglo[j] = j;
}
console.timeEnd("tiempo tarda mi cidigo");
let x = 3,
    y = 2,
    pruebaXY = "se espera que x sea mayor a y";
console.assert(x < y, { x, y, pruebaXY });




console.log(alerta);
console.log(confirmacion);
console.log(aviso);