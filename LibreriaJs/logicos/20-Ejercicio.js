/*) 
17) Programa una función que dada una fecha válida determine cuantos años 
han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) 
devolverá 35 años (en 2020).
*/
const calculaAno = (fecha = undefined) => {

    if (fecha === undefined) return console.warn(`el año se puede  convertir`);

    if (!(fecha instanceof Date)) return console.warn(`el valor ingresado no es valido`);

    let hoyMenosFecha = new Date().getTime() - fecha.getTime(), aniosEnMs = 1000 * 60 * 60 * 24 * 365;

    let anosHumanos = Math.floor(hoyMenosFecha / aniosEnMs);
    if (Math.sign(anosHumanos) === 1) {
        console.info(`faltan ${Math.abs(anosHumanos)} años para  ${fecha.getFullYear()}`);
        console.info(`Han pasado ${anosHumanos} años desde ${fecha.getFullYear()} `);
    }else{
    }

}
calculaAno();
calculaAno(false);
calculaAno({});
calculaAno(new Date());
calculaAno(new Date(1997, 9, 12));