const d = document;
const w = window;
console.log(w.pageXOffset);
export default function scrollTopBoton(btn) {

    const $scrollBtn = d.querySelector(btn);
    /** scroll  es una propiedad de Js */
    w.addEventListener("scroll", (e) => {
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
          
    
        if (scrollTop > 600) {
            //Removemos de la clase
            $scrollBtn.classList.remove("hideen");
        }else{
            $scrollBtn.classList.add("hideen");

            //si se quiere saber los numetos
            //console.log(w.pageXOffset, d.documentElement.scrollTop);
        }
    }); 



    d.addEventListener("click" , (e) => { 

        if (e.target.matches(btn)) {
            //comportamiento con animacion con js
            w.scroll( {  
            behavior:"smooth",
            top:0
        });
        }

    })
    
}