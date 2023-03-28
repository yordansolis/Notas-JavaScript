class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
        this.valor = null;
    }
    age() {
        let date = new Date(); // This will work
        return date.getFullYear() - this.year;
    }
    //clase static 
    static quieenesSomos() {
        console.log("es propiedad ");
    }
    marca() {
        //let marca; myFunction(name) {
        return this.name;
    }
}
//hereda
class Moto extends Car {
    constructor(name, year, modelo) {
        //con el metodo super() dr msnfs s llsmst rl construtor de la clase   padre
        super(name, year);
        this.modelo = modelo;
    }
    moto() {
        return 'Tengo una ' + this.name + ' modelo ' + this.year + " Sdd  "+ this.modelo;
    }
    //Los setrers y getters son metodos especiales que nos permiten establecer y botener los valores de atributos de nuesta clase
    get getValor() {
        return this.valor;
    }
    set setValor(valro) {
        this.valor = valro;
    }
}
MyMoto = new Moto("Bwi fi", 2017, "XXl");
console.log(MyMoto)
console.log(MyMoto.moto());
//MyMoto.moto()
MyMoto.setValor = "3.000.000";
MyMoto.getValor;
Car.quieenesSomos();