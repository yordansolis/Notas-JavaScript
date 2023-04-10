const d = document;
let ManjedorTimpo;
export function digitalClock(clock, btnPlay, btnStop) {
    
    d.addEventListener("click", (e) => {
     

        if (e.target.matches(btnPlay)) {
            ManjedorTimpo = setInterval(() => {
                let momentoActual = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<p> ${momentoActual} </p>`;
            }, 1000);

            //asi desabilitamos el btn
            e.target.disabled = true;
        }

        /**
         * para detener el relop con stop
         */
        if (e.target.matches(btnStop)) {
            //borramos la consola
            clearInterval(ManjedorTimpo);
            //null desaparece
            d.querySelector(clock).innerHTML = null;
            //si lo borramos activamos el btn del reloj 
            //con esta propiedad
            d.querySelector(btnPlay).disabled = false;
        }
    })
}


//para declarar las clases toca usar export
export function alarm() {

}