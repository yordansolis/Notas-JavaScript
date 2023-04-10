const d = document; 
const n = navigator; 
export default function webCamp(id) {

    const $video  = d.getElementById(id);

    //console.log(n.mediaDevices.getUserMedia);

    if (n.mediaDevices.getDisplayMedia) {
        n.mediaDevices.getUserMedia({video:true, audio:true})
        .then((stream) => {
            //console.log(stream);
            $video.srcObject = stream; 
            $video.play();
        })

        .catch((err) => {
            $video.insertAdjacentHTML(
                "beforebegin",
                ` <p>Sucedio el siguiente error <mark> ${err} </mark> </p>  `
            ); 
            console.log(`$Sucedio el ssiguiene error:   ${err}`);
        })
    }
    
}