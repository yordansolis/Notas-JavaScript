 //no son iterables 
const smap = new WeakSet();

let valor1 = {"valor1":1};
let valor2 = {"valor2":2};
let valor3 = {"valor3":3};

smap.add(valor1);
smap.add(valor2);

console.log(smap);

console.log(smap.has(valor1));
console.log(smap.has(valor3));

smap.delete(valor2);

console.log(smap);


smap.add(valor1);
smap.add(valor3);
console.log(smap);

setInterval(()=> console.log(smap), 1000);


