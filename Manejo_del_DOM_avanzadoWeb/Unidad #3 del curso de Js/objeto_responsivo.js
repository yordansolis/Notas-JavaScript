const d = document; 
const w = window; 


export default function resposiveMedia(id, mq, mobileContent, desktopContent ) {
   let breakpoin = w.matchMedia(mq);
   
   const responsive = (e) => {
    if (e.matches) {
        d.getElementById(id).innerHTML = desktopContent;
    }
    else{
        d.getElementById(id).innerHTML = mobileContent;
    }


    console.log(breakpoin);
   };

   breakpoin.addListener(responsive); 
   responsive(breakpoin);
}