
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  
  // Crear una nueva instancia de Persona utilizando el constructor
  var persona1 = new Persona("Juan", 30);
  console.log(persona1.nombre); // "Juan"
console.log(persona1.edad); // 30



//constructor 
function Perro(nombre, genero) {
    //atributos
    this.nombre = nombre;
    this.genero = genero;
    //metodo
    this.ladra = function () {
        console.log("gua gua ")
    }
}
const snnoy1 = new Perro("gatto", "macho");
console.log(snnoy1);
const sapo1 = new Perro("sapo", "macho");
console.log(sapo1);



//*****************************una forma más viable 
//constructor 
function Animal(nombre, genero) {
    //atributos
    this.nombre = nombre;
    this.genero = genero;
}
//metodo
Animal.prototype.ladra = function () {
    console.log("gua gua gua")
}
Animal.prototype.sapo = function () {
    console.log("cua cua")
}
const snnoy = new Animal("gatto", "macho");
console.log(snnoy);
snnoy.ladra()
const sapo = new Animal("sapo", "macho");
console.log(sapo);