/*4) Programa una función que repita un texto X veces, pe. 
miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mund*/
const cadena = (texto, numero) => {
    
    if (!texto || !numero) return "Oye te falta un texto";

    if (texto < 1 || numero < 1) return console.warn("Solo aceptamos valores positivos")
    
    if (texto > 50 || numero > 50) return console.error("Oye no puedes superar el limite generaras un bucle : D ");

    for (let i = 0; i < numero; i++) {
        console.log(texto);
    }
}
cadena("Hola mundo", 3);
cadena("Hola ", 70); 