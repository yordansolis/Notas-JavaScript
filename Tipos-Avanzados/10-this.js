console.log(this);
console.log(window);
console.log(this === window);

this.nombre = "Contexto Global";
console.log(this.nombre);

function imprimir() {
console.log(this.nombre);
}
imprimir();


const Obj = { 
    nombre: "Contexto Objeto",
    imprimir: function () {
        console.log(this.nombre);
    }
}
console.log("____");
Obj.imprimir();
console.log("____");

const Obj2 = { 
    nombre: "Contexto Objeto 2",
    imprimir
}
Obj2.imprimir();

const Obj3 = { 
    nombre: "Contexto Objeto",
    imprimir: () => {
        console.log(this.nombre);
    }
}
console.log("____");
Obj3.imprimir();



