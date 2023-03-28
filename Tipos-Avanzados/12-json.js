const json = {
    cadena: "Joordan",
    numero: 24,
    boolean: true,
    arreglo: ["comer", "dormir", "estudiar"],
     objeto:{
        email:"yordan@gmail.com",
        id:2
     },
     estado_civil: true

}

console.log(json);



console.log(JSON.parse("{}"));
console.log(JSON.parse("[1, 2, 3]"));
console.log(JSON.parse("119"));
console.log(JSON.parse("null"));
console.log(JSON.parse("true"));
console.log(JSON.parse("false"));




console.log(JSON.stringify({}));
console.log(JSON.stringify(["comer", "dormir", "estudiar"]));
console.log(JSON.stringify(true));
console.log(JSON.stringify(false    ));

console.log(JSON.stringify(119));
console.log(JSON.stringify(null));
console.log(JSON.stringify(undefined));
console.log(JSON.stringify({x:2, y:3}));


//para imprimir formatos a Json
console.log(JSON.stringify(json));

