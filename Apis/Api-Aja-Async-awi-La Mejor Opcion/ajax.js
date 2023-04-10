(() => {
   const d = document;
   const $fetchAsync = d.getElementById("fetch-async");
   const $fragment = d.createDocumentFragment();

   async function getData() {
      try {
         let res = await fetch("https://jsonplaceholder.typicode.com/users");
         //convertimos json en el formato
         let json = await res.json();

         //console.log(res,json);
         //para mandar el error
         // el metodo throw es un metodo de la libreria de fetch para mandar error al cat
         if (!res.ok) throw { status: res.status, statusText: res.statusText };

            /**recorremos para no imprimir de 1  a 1 */
         json.forEach((el) => {
            const $li = d.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li);
         });
         $fetchAsync.appendChild($fragment);


      } catch (err) {

         let message = err.statusText || "Ocurrio un error";
         $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
      } finally {
         console.log("Este mensaje cargara de cualquiero forma");

      }
   }


   //ejecutamos la funcion :)
   getData();
})()