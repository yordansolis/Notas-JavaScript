/*COMO VALIDAR LAS ESPRESIONES REGILADRES
>> Es una secuencia de caracteres que forman un patron
de busqueda pricipalmentees utilizada en la busqueda de cadena de texto 
*/
let cadena = "lorem mundo mundo lorem eella ner";
// se puede buscar con este parámetro es una expresión constructora
let expReg = new RegExp("lorem", "");
//let expReg = new RegExp("lorem","ig");
/*i = ignora entre mayusculas y minusculas
g = no solo se queda con 1 si no con todas 
test >> devuelve un true o false
exec >> devuelve un array()
*/
console.log(expReg.test(cadena));// si esta true 
console.log(expReg.exec(cadena));// si esta array