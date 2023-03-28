 //no son iterables 
 const wmap = new WeakMap();

 let valor1 = {};
 let valor2 = {};
 let valor3 = {};
 
 wmap.set(valor1, 1);
 wmap.set(valor2, 2);
 
 console.log(wmap);
 
 console.log(wmap.has(valor1));
 console.log(wmap.has(valor3));

 console.log(wmap.get(valor1));
 console.log(wmap.get(valor3));

 wmap.set(valor2, 2);
 wmap.set(valor3,  3);
 console.log(wmap);
 
 
 wmap.set(valor1);
 wmap.set(valor3);
 console.log(wmap);
 
 setInterval(()=> console.log(wmap), 1000);
 
 
 