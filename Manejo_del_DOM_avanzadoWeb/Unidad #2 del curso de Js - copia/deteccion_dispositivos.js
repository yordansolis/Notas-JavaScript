const d  = document, n = navigator, au = n.userAgent; 


export default function userDeviceinfo(id) {
    const $id = d.getElementById(id);

    const isMobile = {
        android: () => au.match(/android/i),
        ios:() => au.match(/iphone|ipad|ipod/i),
        windows: () => au.match(/windows phone/i),
        any:function () {
            return this.android ||this.ios || this.windows();
        }
    };

   const  isDeskto = {
    linux: () => au.match(/linux/i),
    mac:() => au.match(/mac os/i),
    windows: () => au.match(/windows nt/i),
    any:function () {
        return this.linux ||this.mac || this.windows();
    }
   };

   const isBrowser = {

    chrome: () => au.match(/chrome/i),
    safari:() => au.match(/safari/i),
    linux: () => au.match(/linux/i),
    firefox:() => au.match(/firefox/i),
    opera:() => au.match(/opera|opera mini/i),
    ie:() => au.match(/msie|iemobile/i),
    mac:() => au.match(/mac os/i),
    edga:() => au.match(/edga/i),
    any:function () {
        return(     
            this.ie ||
            this.edga ||
            this.chrome ||
            this.safari ||
            this.linux ||
            this.firefox ||
            this.mac     ||

            this.opera()
            );     
    }
   };


   /*
   console.log(au);
   console.log(isMobile);
   console.log(isDeskto);

   */


   /*****  Contenido exclusivo   **** */

   if (isBrowser.chrome()) {
    $id.innerHTML = `<p><mark> Este contenido solo es para chrome </mark></p>`;
   }

   if (isBrowser.firefox()) {
    $id.innerHTML = `<p><mark> Este contenido solo es para firefox </mark></p>`;
   }

   if (isBrowser.linux()) {
    $id.innerHTML = `<p><mark> Este contenido solo es para linux </mark></p>`;
   }

   if (isBrowser.mac()) {
    $id.innerHTML = `<p><mark> Este contenido solo es para mac </mark></p>`;
   }

   if (isDeskto.windows()) {
    $id.innerHTML = `<p><mark> Este contenido solo es para chrome </mark></p>`;
   }
   

   /*******Si se quiere reduccionar como 
    * sitios que generan descargas ******* */
   if (isMobile.android()) {
    window.location.href = "https://jonmircha.com";
   }

}