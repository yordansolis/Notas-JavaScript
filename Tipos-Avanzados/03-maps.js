/*
Es una coleccion de dato como un objeto primivo 
-->tampoco es un arreglo
-->se puede usar: para catalogos
-> cosas establicidad 
*/

const mapa = new Map();
mapa.set("nombre", "Jordan");
mapa.set("apellido", "solis");
mapa.set("edad", 17);

console.log(mapa);

//trae el numero de elementos
console.log(mapa.size);

//comprueba si existe
console.log(mapa.has("email"));

//obtiene los valores
console.log(mapa.get("nombre"));

//se sobre escribe el valor
mapa.set("nombre", "jordan andres");


console.log(mapa.get("nombre"));


mapa.delete("apellido");

console.log(mapa);

for (let [key, value] of mapa) {
    console.log(`Llave: ${key}, Valor: ${value}`);
}


const mapa2 = new Map([
    ["nombre", "Tunay"],
    ["edad", 20],
    ["animal", "gato"],
    [null, "nulo"],
]);

console.log(mapa2);


