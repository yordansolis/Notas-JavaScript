/*no son iterabs 
*/
const iterable = [1, 2, 3, 3, 5, 5];

const iterador = iterable[Symbol.iterator]();
console.log(iterable);

console.log(iterador);
/* para no recorrer 1  a uno usamor un bubleo un for
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
*/
let next = iterador.next();

while (!next.done) {
    console.log(next.value);
    next = iterador.next();
}




console.log("---------otra forma -----------");

;

const itera = new Set([1, 2, 3, 3, 5, 5]);
const interaDor = itera[Symbol.iterator]();


let nexT = interaDor.next();

while (!nexT.done) {
    console.log(nexT.value);
    nexT = interaDor.next();
}
