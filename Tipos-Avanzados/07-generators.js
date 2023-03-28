/**
 * @se
 * interador mas facil  
 * las funciones sirven para volver iterable una funcion
 */

function * iterable(){
    yield "hola";
    console.log("Hola consola");
    yield "hola 2";
    console.log("Sigue mas intrucciones del codigo");
    yield "hola 3";
    yield "hola 4";        
}

let iterador = iterable();
/*para recorrer todo 
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
*/

for (let  y of iterador ) {
    console.log(y);   
}

//lo guarda en un array
const arr = [...iterable()];
console.log(arr);

console.log("-------Usando asoncronica--------");

function cuadrado(valor) {
    setTimeout(() => {
       return console.log({valor,resultado : valor*valor}) 
    }, Math.random() * 1000);
}

function * generador() {
    console.log("iniciando Generador");
    yield cuadrado(0);
    yield cuadrado(1);    
    yield cuadrado(2);
    yield cuadrado(3);
    yield cuadrado(4);
    yield cuadrado(5);
    console.log("Finalizando");
}

let gee = generador();

for(let y of gee){
    console.log(y);
}


