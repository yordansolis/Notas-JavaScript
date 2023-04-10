export default function slider(){
    const d = document; 
    const $nextBtn = d.querySelector(".slider-btns .next");
    const $prevtBtn = d.querySelector(".slider-btns .prev");
    const $slides = d.querySelectorAll(".slider-slide");

    let i = 0; 

    d.addEventListener("click", (e) => { 
        //le quitamos el comportamiento por defecto 
        if (e.target === $prevtBtn) {
            e.preventDefault();
            //active inicia en 3 osea que i decrementa 2 
            $slides[i].classList.remove("active");
            i--;
            if (i < 0) {
                /*cuando i sea < 0, retorna todos los valores */
                i = $slides.length - 1; 
            }
            $slides[i].classList.add("active");            
        }
       
       
        //*condicion 2
        if (e.target === $nextBtn) {
            e.preventDefault();
            //active inicia en 3 osea que i decrementa 2 
            $slides[i].classList.remove("active");
            i++;
            if (i >= $slides.length) {
                /*cuando i sea < 0, retorna todos los valores */
                i = 0; 
            }
            $slides[i].classList.add("active");            
        }


    });



}