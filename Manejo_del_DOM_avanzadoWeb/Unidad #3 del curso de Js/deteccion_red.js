
const d = document; 
const w = window;
const n = navigator; 

export default function neworkStatus() {
    
    const isOnLine = () => {
        const $div = d.createElement("div"); 

        if (n.onLine) {
            $div.textContent = "Conexion Reestablecida"; 
            $div.classList.add("online"); 
            $div.classList.remove("offline"); 
        }else{
            $div.textContent = "Conexion Perdida";
            $div.classList.add("offline"); 
            $div.classList.add("online"); 
        }

            /**add al body */
        d.body.insertAdjacentElement("afterbegin", $div); 
       
       
        setTimeout(() => {
            d.body.removeChild($div); 
        }, 2000);
        
        
    }
    

    //*** creamos 2 eventos: para saber si tenemos conexion a la clase */
    w.addEventListener("online", (e) => isOnLine());
    w.addEventListener("offline", (e) => isOnLine());

}