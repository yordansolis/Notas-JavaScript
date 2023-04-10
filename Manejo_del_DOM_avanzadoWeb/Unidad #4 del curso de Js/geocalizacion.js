

/**
 * 
w ->contesto global que controla la ventana de nuestro navegador
d ->estructura html que nos permite acceder a nos nodos de nuestro documento
n ->caracteristicas del dispositivo o del user



enable -> para hacer que el hardware lo trababe lo mejor posible
esta propiedad toma un valor de null  al ponerla true mejora
time-> toma el timepo de respuesta
-> maxim evita que se guarde en cache 


 */
const d = document;
const n = navigator;
export default function getGeolocarion(id) {
    const $id = d.getElementById(id);

   const options = {
    enableHighAccuracy:true,
    timeout:5000,
    maximumAge:0
    };


    const success = (position) => {
        let coords = position.coords;
        console.log(position);

         
         $id.innerHTML = `<p> Tu posicion actual es: </p>
         <ul> 
           <li>Latitud: <b>${coords.latitude}</b> </li>
           <li>Longitud: <b>${coords.longitude}</b> </li>
           <li>Latitud: <b>${coords.accuracy}</b> Metros </li>
         </ul>
         <a href="https://www.google.com/maps/@${coords.latitude},${coords.latitude}, 
         20z" target="_blank" rel="noopener"> Ver en google maps</a>`;

        console.log(coords.accuracy);
        };
        
    const error = (err) => { 
        console.log(err);
        $id.innerHTML = `<p> <mark>Error ${err.code}:  ${err.message} </mark> </p>`;
    };
    
    n.geolocation.getCurrentPosition(success, error, options);


}