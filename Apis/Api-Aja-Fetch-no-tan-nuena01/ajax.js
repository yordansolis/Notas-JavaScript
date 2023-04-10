(() => {
   const d = document;
   const $fetch = d.getElementById("fetch");
   const $fragment = d.createDocumentFragment();

   fetch("https://jsonplaceholder.typicode.com/users")
      //si es ok se enia al json y es : false se envia el error con Promise
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
         //console.log(json);
         json.forEach((el) => {
            const $li = d.createElement("li");
            $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
            $fragment.appendChild($li);
         });
         $fetch.appendChild($fragment);
      })
      .catch((err) => {
         // console.log("error");
         let message = err.statusText || "Ocurrio un error";
         $fetch.innerHTML = `Error ${err.status}: ${message}`;
      })
      .finally(() => {
         console.log("Este mensaje cargara de cualquiero forma");
      })

})()