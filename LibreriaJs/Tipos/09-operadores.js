//operaciones. para operar convertimos los 
//valores con la propiedaad ParseInt
let num1, num, dato1, dato2, suma;
dato1 = window.prompt("Introduce número ?", "0");
num1 = parseInt(dato1);
dato2 = window.prompt("Introduce número ?", "0");
num = parseInt(dato2);
suma = num + num1;
document.write(`la suma es ${suma} `); 