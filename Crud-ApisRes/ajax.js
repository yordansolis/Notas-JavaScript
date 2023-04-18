
(() => {
   /**
    * @see usando libreria de terceros
    */
   const d = document;
   const $fetchAsync = d.getElementById("async-await");
   const $fragment = d.createDocumentFragment();

   async function getData() {
      try {
         let res = await axios.get("https://jsonplaceholder.typicode.com/users");
         let json = await res.data;

         //console.log(res,json);

            /**recorremos para no imprimir de 1  a 1 */
         json.forEach((el) => {
            const $li = d.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li);
         });
         $fetchAsync.appendChild($fragment);


      } catch (err) {

         let message = err.response.statusText || "Ocurrio un error";
         $fetchAsync.innerHTML = `Error ${err.response.status}: ${message}`;
      } finally {
         console.log("Este mensaje cargara de cualquiero forma");

      }
   }


   //ejecutamos la funcion :)
   getData();
})()