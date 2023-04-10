
import haburgerMenu from "./manu_hamburguesa.js";
import {digitalClock, alarm}from "./reloj.js";
const d = document;

/**@obtiene_los_2_parametros -> classs */
d.addEventListener("DOMContentLoaded", e =>{
    haburgerMenu(".panel-btn" ,".panel", ".menu a");
    digitalClock("#reloj","#activar-reloj", "#desacivar-reloj");
});

