/*Herencia prototipica*/
//constructor 
function animal(nombre, genero) {
    //atributos
    this.nombre = nombre;
    this.genero = genero;
}
//metodo
animal.prototype.ladra = function () {
    console.log("gua gua gua");
}
animal.prototype.sonido = function () {
    console.log("cua cua")
}
let foot = new animal("Chachito", "feliz");

console.log(foot);

