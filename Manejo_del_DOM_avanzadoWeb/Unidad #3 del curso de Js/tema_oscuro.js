export default function darkTime(btn, classDark) {
    const d = document;
    const ls = localStorage;  

    const $themeBtn = d.querySelector(btn);
    //asi seleccionamos atributos de una etiqueta que hallamos puesto
    const $selectors = d.querySelectorAll("[data-dark]");

    //aqui vemos a los atributos que le hallamos puesto la etiqueta dark
    console.log($selectors);

    let moon = "🌙";
    let sun = "☀️"; 



    /**  creamos 2 funciones idependientes */
    const lightMode = () => {
        $selectors.forEach((el) => el.classList.remove(classDark));
        $themeBtn.textContent = moon;
        //****** Creamos dos variables local storge***** */
        ls.setItem("theme", "light");
    }

    const darkMode = () => {
        $selectors.forEach((el) => el.classList.add(classDark));
        $themeBtn.textContent = sun;
        //****** Creamos dos variables local storge***** */
        ls.setItem("theme", "dark");
    }





    d.addEventListener("click", (e) => {
        if (e.target.matches(btn)) {

            //console.log("**** Styles *******");
            //console.log($themeBtn.textContent);

            if ($themeBtn.textContent === moon) {
               darkMode();
            }else{
               lightMode();
            }
        }
    });




    /***usamos el localStorge para guardar las variables
     * y asignarlas a las clases :)
     */

    d.addEventListener("DOMContentLoaded", (e) => {
        console.log(ls.getItem("theme"));

        if (ls.getItem("theme") === null) {
            ls.setItem("theme", "light");
        }


        if (ls.getItem("theme") === "light") {
            lightMode();
        }


        if (ls.getItem("theme") === "dark") {
            darkMode();
        }

    });

    
}