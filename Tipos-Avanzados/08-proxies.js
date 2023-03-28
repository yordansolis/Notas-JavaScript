const persona = {
    nombre: "",
    apellido: "",
    edad:0 
}

/** en este manejador vamos a controlar las validaciones */
const majenador = {
    //esta propiedad del set es unica del metodo
    
            /**     1. Object.keys -> trae la lista del objeto Persona
               @se  2.	IndexOf -> evalua que exista la propoedad si no exixte trae -1 no existe
                    3. el OBJ recibe el parametro del constructor  
            */
    set(obj, prop, valor){
        //en obje le agragamor la propiedad que nos envian al objeto
        // obj[prop] = valor;
        if (Object.keys(obj).indexOf(prop) === -1) {
            return console.error(`La propiedad "${prop}"
            no existe en el objeto persona`);
        } //-> se puede hacer mucho mas validaciones
    }
}

/**@see los Proxy manejan una vinculacion */
const jor = new Proxy(persona, majenador);
jor.nombre = "Jhordan";
jor.apellido ="Andres Solis";
jor.edad = 35;
jor.email ="@solis.com"
console.log(jor); 
console.log(persona);