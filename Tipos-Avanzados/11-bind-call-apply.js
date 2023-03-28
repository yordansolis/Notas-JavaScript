
console.log(this);

this.lugar ="Contexto Global";

function saludar(saludo, aQuien) {
    console.log(`Hola  ${saludo}   ${aQuien} 
    desde el ${this.lugar} `);
}


saludar("Hola", "Jordis");

const obj = {
    lugar: "Contexto Objeto"
}

saludar.call(obj, "Hola", "Jordan");
saludar.call(null, "Hola", "Jordan");
saludar.call(this, "Hola", "Jordan");

saludar.apply(obj, ["Hola", "Jordan"]);
saludar.apply(null, ["Hola", "Jordan"]);
saludar.apply(this, ["Hola", "Jordan"]);


const persona = {
    nombre:"jordan", 
    saludar:function(){
        console.log(`Hola ${this.nombre}`)
    }
}

persona.saludar();

 
const otraPersona = {
    saludar: persona.saludar.bind(persona)
}

otraPersona.saludar();


