const animales = ["perro" , "gato", "onitorrinco"];
for(let i =0; i < animales.length; i++){
console.log("," +animales[i]); //impre lista
}


const numeros = [11, 12, 23, 22];
for(let i = 0; i < numeros.length; i++){
console.log("," + numeros[i]);
}




const numeros_letras = ["gripe :(" , 12, 23 , 22,];
for(let i =0; i < numeros_letras.length; i++){
console.log("," +numeros_letras[i]);
}



const jhord = 
{
nombre: "jordan",
edad : 23, 
email: "www.sena.com"
}

for(const propiedad in jhord){
console.log(propiedad);
}




const solis = 
{
nombre: "jordan",
edad : 23, 
email: "www.sena.com"
}
for(const propiedad in solis){
console.log(`key: ${propiedad}, Values: ${solis[propiedad]}`);
}





const n1 = [11,12,23 , 22,];
for(const elemt of n1){
console.log(elemt);
}