/*
Sets es un arreglo mejorado de javaScrip
-Que solo acepta valores unicos

-- no es un arreglo, se debe convertir


Array.from en JavaScript se utiliza para crear un nuevo array a partir de una secuencia iterable
*/

const set = new Set([1, 1, 2, 3, 3, 4, 5, true, true, true, false, "Hola", "hola"]);
console.log(set);
console.log(set.size);
console.log(set);

console.log("Recoriendo set: ");

set.delete("Hola");
//comproba de que un valor este
console.log("se encuentra ? ", set.has(true));
for (item of set) {
    console.log(item);
}

console.log("--------");
console.log(set[0]);
/**para recorrerlo como array tenemos que convertirlo con Array.from */
let arr = Array.from(set);

console.log(arr[0]);



//funcionan como arreglo pero no lo son  

const set2 = new Set();
set2.add(1);
set2.add(2);
set2.add(1);
set2.add("jordan");
set2.add("jordan");
set2.add(true);
set2.add(true);
set2.add(false);
console.log("Recoriendo set2: ");
set2.forEach(item => console.log(item));


//limpia 
set2.clear();
console.log(set2);


