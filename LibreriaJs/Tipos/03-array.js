const a = [1,false,"app", ["A","M","p"]];

// me imprime el arreglo 
console.log(a);
//me imprime la segunda posicion
console.log(a[2]);
//console.log(a.length);
// de la posicion 3 me escoge el 1
console.log(a[3][1]);
console.log(a[3][2]);



console.log(a);
const fruits = a.join(', ');// crea una cadena 
console.log(fruits);


a.push("Nuevo producot");// agrega un nuevo elemento

a.forEach(function(el, index) {
console.log(` id="${index}">${el} `);
});