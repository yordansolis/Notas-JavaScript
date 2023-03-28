/*
Cree una clase llamada "Modelo" que heredará los métodos de la clase 
"Coche":*/

//padre
class Car {
    constructor(marca) {
        this.carname = marca;
    }
    present() {
        return 'I have a ' + this.carname;
    }
}
//la propiedad extends para heredar Car y en esta clase se le agrega una propiedad mod que sera el color 
class Model extends Car {
    constructor(marca, mod) {
        super(marca);
        this.model = mod;
    }
    show() {
        return this.present() + ', it is a ' + this.model;
    }
}

let myCar = new Model("fortuner", "Blanco");
myCar.show();