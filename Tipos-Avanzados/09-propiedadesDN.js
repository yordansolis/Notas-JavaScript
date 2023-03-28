const obUsuario ={}
console.log(obUsuario);

const usuario = ["jordan", "neymar", "cristiano", "lacace"];

usuario.forEach((usuario, index) => obUsuario[`id_ ${index}`] = usuario); 

console.log(obUsuario);



console.log("------Ejemplo 2-------");

let alatori= Math.round(Math.random() * 100 + 5);

const ObjetoUser = {
    propiedad: "Valor", 
    [`id_ ${alatori}`]: "Valor aletorio"
};
console.log(obUsuario);
