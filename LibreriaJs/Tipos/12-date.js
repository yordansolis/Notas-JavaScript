// es una libreria para el manejo orario: https://momentjs.com/
//el mes completo con dia mes ect 
console.log(Date());
let fecha = new Date();
//el mes
console.log(fecha.getDate());
//deia de la semanana D L M J V S 0-1-2-3-4-5-6en 0 1 2 3 4 5 6 7 8 .. 
//los dias del mes inciia 
//console.log(fecha.getDay());
//console.log(fecha.getMonth());
// nos trae el año 
console.log(fecha.getFullYear());
//nos traer minutos 
console.log(fecha.getMinutes());
//el mes completo con dia mes ect 
console.log(fecha.toString());
//mes dia año
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());
/*Si se quiere hacer otra hora se utiliza los metotod get*/
console.log(fecha.getTimezoneOffset());
console.log(fecha.getUTCDate());
console.log(Date.now());

//trae los segundo
console.log("ejemplo2");
console.log(Date.now());

let cumple = new Date(1998, 11, 12);
console.log(cumple);

