
import haburgerMenu from "./manu_hamburguesa.js";
import {digitalClock, alarm}from "./reloj.js";

//Si son dos funcones se tinene que poner los nombres entre { de las dos funciones }
import { moveBall,shortcuts } from "./teclado.js";

import countdown from "./cuenta_regresiva.js";

import scrollTopBoton from "./boton_scroll.js";

import darkTime from "./tema_oscuro.js";

import resposiveMedia from "./objeto_responsivo.js";

import responsiveTester from "./prueba_responsive.js";

import userDeviceinfo from "./deteccion_dispositivos.js";

import neworkStatus from "./deteccion_red.js";

import webCamp from "./detecion_web_cam.js";

const d = document;

/**@obtiene_los_2_parametros -> classs */
d.addEventListener("DOMContentLoaded", e =>{
   
    haburgerMenu(".panel-btn" ,".panel", ".menu a");
   

    /**cuanod se va selecionar un btn con id se pone #  */
    digitalClock("#reloj","#activar-reloj", "#desactivar-reloj");
    alarm("assets/audio.mp3","#activar-alarma", "#desactivar-alarma");
    
    /**cuando no se requiere seleccion  btn con id no se pone # */
    countdown("countdown", "October 11, 2023 12:00:12 ", "feliz cumpleños");
    
    
    //ps
    scrollTopBoton(".scroll-top-btn");    
    
    
  
    
    resposiveMedia("youtube",
     "(min-width: 1024px)",
  
     `<a href="https://youtu.be/6IwUl-4pAzc" target="_blank">Ver video</a>`, 

      `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc"
       title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
       clipboard-write;encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`);
   
   
       resposiveMedia("gmasp",
    "(min-width: 1024px)",
     "Contenido Movil", 
   "Contendo escritorio");




   responsiveTester("responsive-tester");

   userDeviceinfo("user-device");

/**web camp */
    webCamp("webcam");

});

/**teclas
 * los key son propiedades de Javascritp
 */
d.addEventListener("keydown", (e)=>{
    shortcuts(e);
    moveBall(e, ".ball", ".stage")    

})

/***nota toca sacarla porque no se puede trabajar desde un evento del DOM al otro */

darkTime(".dar-time-btn", "dark-mode");

neworkStatus();