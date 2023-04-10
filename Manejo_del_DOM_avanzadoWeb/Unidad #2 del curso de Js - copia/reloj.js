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
export function alarm(sound, btnPlay, btnStop) {

    let alarmTiempo;

    //cuando se vaya guardar un documento dle DOM es necesario ponerlo con $
    //creamos una variable con la etiqueta audio del windos para resumir la escritura
    const $alarm = d.createElement("audio");

    //le creamos la etiquets src para el sonido 
    $alarm.src = sound;


    d.addEventListener("click", (e) => {
        if (e.target.matches(btnPlay)) {
            alarmTiempo = setTimeout(() => {
                //play es una propiedad jscript
                $alarm.play();
            }, 2000);

            //asi desabilitamos el btn
            e.target.disabled = true;

        }


        if (e.target.matches(btnStop)) {
            //limpiamos la variable
            clearTimeout(alarmTiempo);
            //metodo de JS
            $alarm.pause();
            //metodo de JS
            $alarm.currentTime = 0;
            //activamos el btn
            d.querySelector(btnPlay).disabled = false;

        }


    });

}