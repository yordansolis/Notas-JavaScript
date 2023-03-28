try {
    console.log("En el Try se agrega el codigo de error");
}catch(error){
    console.log("Cact, captura cualquier error surgido o lanzado en el try");
}finally{
    console.log("El bloque finaly se ejecutara siempre al final de un bloque try-catch");
}




/*Este es el mas recomentado y se usa para errores logicos, como por 
ejemplo aveces necesitamos recibir datos pero recibimos otros */
try{
console.log("En el Try se agrega el codigo de erro variable_noh_definida ");

}catch(error){
console.log("Cact, captura cualquier error surgido o lanzado en el  try");
}finally{
console.log("El bloque finaly se ejecutara siempre al final de un bloque try-catch");
}




/*****     EJEMPLO                ***** */

/* este ejemplo no se impremi ningun error*/
try{
console.log("En el Try se agrega el codigo de erro ");
variable_noh_definida;
}catch(error){
console.log("Cact, captura cualquier error surgido o lanzado en el  try");
console.log(error);
}finally{
console.log("El bloque finaly se ejecutara siempre al final de un  bloque try-catch");
}
