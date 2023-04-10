const d = document; 

export default function contactFromValidectons() {
    
    const $form = d.querySelector(".contacto-form");
    const $inputs = d.querySelectorAll(".contacto-form [required]"); 

    //console.log($inputs);

    $inputs.forEach((input) => {
        const $span = d.createElement("span"); 
        $span.id = input.name; 
        //console.log( $span.id);
        $span.textContent = input.title; 
        $span.classList.add("contacto-form-error", "none");
        input.insertAdjacentElement("afterend", $span) 
    });

    d.addEventListener("keyup", (e) => {
        if (e.target.matches(".contacto-form [required]")) {
            let $input = e.target;  // propiedades js 
            let pattern = $input.pattern || $input.dataset.pattern; 
            

            //console.logH($input, pattern)

            if (pattern && $input.value !=="") {


                let regex = new RegExp(pattern);
                return !regex.exec($input.value)
                ?d.getElementById($input.name).classList.add("is-active")
                :d.getElementById($input.name).classList.remove("is-active");

            }




            if (!pattern) {
                //no tiene patron
                return $input.value === ""
                ?d.getElementById($input.name).classList.add("is-active")
                :d.getElementById($input.name).classList.remove("is-active");
            }

        }
    });



    d.addEventListener("submit", (e) => {
        //e.preventDefault();
        alert("Envio exitoso :)"); 

        const $loader = d.querySelector(".contact-form-loader");
        const $response = d.querySelector(".contact-form-responsive");


        $loader.classList.remove("none"); 

        setTimeout(() => {
        $loader.classList.add("none"); 
        $loader.classList.remove("none");
        $form.reset();

        setTimeout(() => { $response.classList.add("none")}, 3000);
            
        }, 3000);


    });

    
}