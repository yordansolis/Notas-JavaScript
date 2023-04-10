const d = document;
export default function countdown(id, limitDate, finalMenssage) {

    const $countdown= d.getElementById(id);
    const countdownDate = new Date(limitDate).getTime();
  
    let countdownTempo = setInterval(() => {
        let now = new Date().getTime();
        let limitTime = countdownDate - now; 
        let days = Math.floor(limitTime / (1000* 60 * 60 *24));
        let hours = ("0" + Math.floor((limitTime % (1000 * 60 * 60 * 24))/ (1000*60 *60))).slice(-2);
        let minutes = ("0" + Math.floor((limitTime % (1000 * 60 * 60 ))/ ( 1000 * 60))).slice(-2);
        let segunds = ("0" + Math.floor((limitTime % (1000 * 60))/  1000 )).slice(-2);
        
        $countdown.innerHTML = `<h3>Faltan ${days} dias ${hours}  horas ${minutes} minutos ${segunds}  segundos </h3>`;
        
        if (limitTime < 0 ) {
            clearInterval(countdownTempo); 
            $countdown.innerHTML = `<h3> ${finalMenssage}    </h3>`;
        }

    }, 1000);
  
}