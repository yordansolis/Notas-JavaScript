async function obtenerDatos(){
    const response = await fetch("http://127.0.0.1:5555/curso.json");
    const json = await response.json();

    console.log(json);
    console.log(json.nombre);
    console.log(json.experiencia);

    json.experiencia.forEach(element => {
        console.log(element.empresa);
    });
    // console.log(JSON.parse(json));//objeto
   // console.log(JSON.stringify(json));//texto
   console.log(json.direccion.pago_agua);
   console.log(json.direccion["pago_agua"]);

}

obtenerDatos();