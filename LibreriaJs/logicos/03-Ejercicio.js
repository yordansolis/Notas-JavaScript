
//pronto corregir

const invertirCadena = (cad = undefined )=> {
    // si la cadena esta vacida
    //if(cad == undefined)return console.warn("La cadena esta vacia"); 
    // si la da
    //if(isNaN(cad))return console.warn("El valor ingresado es un numero no una cadena!"); 
  
    let nuevaCadena=''; //esta variable almacenara la cadena creada 
      for (let i = 0;  i < cad.length; i++) {
          nuevaCadena += cad[i];
      }
      console.log("Cadena original " + cad);
      return "Invertida es: "+ nuevaCadena;
  }

invertirCadena("-111 ");
invertirCadena("Holamundo");
invertirCadena("suma + 12  esto para Jsva scrtip es una cadena ");
