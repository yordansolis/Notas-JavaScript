const d = document;
let x = 0, y = 0;
export function moveBall(e, ball, stage) {

    const $ball = d.querySelector(ball);
    const $stage = d.querySelector(stage);

    const limitsBall = $ball.getBoundingClientRect (ball);
    const limitsStage = $stage.getBoundingClientRect(stage);
    /**
     * vamos a usar los cruces
     */
   // console.log((e.keyCode));
    //console.log((e.key));

   // console.log(limitsBall, limitsStage);

    switch (e.keyCode) {
        case 37:
            //  "left");
            if (limitsBall.left > limitsStage.left) {
                e.preventDefault();
                x--;
            }
            break;

        case 38:
            //"up");
            if (limitsBall.top > limitsStage.top) {
                e.preventDefault();
                y--;
            }
            break;

        case 39:
            //"rigth");
            if (limitsBall.right < limitsStage.right) {
                e.preventDefault();
                x++;
            }
            break;

        case 40:
            //"dowp");
            if (limitsBall.bottom < limitsStage.bottom) {
                e.preventDefault();
                y++;
            }
            break;

        default:
            break;
    }
    $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;

}



export function shortcuts(e) {
/*
    //e.key los trae el tipo de letra
    console.log((e.key));
    console.log(e.type);
      //e.keyCode nos trae el numero de tecla
     console.log((e.keyCode));
    //devuelve tru si tocamos control
    console.log(( `ctrl:  ${e.ctrlKey} `));
        //devuelve true si presionamos alt
    console.log(( `alt:  ${e.altKey} `));
    console.log(( `ctrl:  ${e.shiftKey} `));


    */    
    //ejemplo usando alt
    if (e.key === "a" && e.altKey) {
        alert("Haz lanzado un alrta con el teclado");
    }

    if (e.key === "c" && e.altKey) {
        alert("Haz lanzado una confirmacion con el teclado");
    }

   if (e.key === "p" && e.altKey) {
        prompt("Haz lanzado aviso con el teclado");
    }
    
}