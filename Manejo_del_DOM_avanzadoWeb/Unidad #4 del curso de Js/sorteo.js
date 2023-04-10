const d = document;

export default function droW(btn, selector) {
    
    //ANONIMA
    const getWinner = (selector) => {
        const $players = d.querySelectorAll(selector);
        const random = Math.floor(Math.random() *  $players.length);
        const winner = $players[random];
        /*
        console.log("-> ", winner);
        console.log("**********");
        console.log($players);
        console.log("**********");
        console.log(random);
        */
        return `El Ganador is ${winner.textContent}`;
    }



    d.addEventListener("click", (e) => {
        if (e.target.matches(btn)) {
            let restul = getWinner(selector); 
            alert(restul); 
            
        }
    })
}

/*


    const getWinner = (selector) => {
        const $players = d.querySelectorAll(selector);
        const random = Math.floor(Math.random() *  $players.length);
        const winner = $players[random];
      
        return `El Ganador is ${winner.textContent}`;
    }
    
    //getWinner("idName" #clado ·atributo)
    */