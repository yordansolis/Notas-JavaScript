const jhor = {
    nombre: "Jhordan",
    edad: 24,
    pasatiempos: ["jugar", "comer", "salir de rumba"],
    casado: false,
    contacto: {
    email: "Jhordan@gmal",
    tele: "3226444",
    web: "www.solis.com"
    }, 
    aluda: function(){ 
     console.log("Hola mundo");
        },
        usandoThis: function(){
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} mi 
        pasatiempo: ${this.pasatiempos[2]}
        y ${this.contacto[2]}`);
    }
}

console.log(jhor.nombre);
console.log("Comprometud.? "+jhor.casado);

console.log(jhor.edad);
console.log(jhor.pasatiempos[2]);

jhor.usandoThis();

console.log(Object.keys(jhor));
console.log(Object.values(jhor));
