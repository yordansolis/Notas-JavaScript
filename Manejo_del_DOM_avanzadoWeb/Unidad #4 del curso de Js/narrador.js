export default function speechNarrador() {
    const d =document;
    const w = window; 
    const $speechSelect = d.getElementById("speech-select");
    const $spechTextareta = d.getElementById("spech-text"); 
    const $spechBtn = d.getElementById("speech-btn"); 
    const spechMessage = new SpeechSynthesisUtterance();

    let voices = []; 

    d.addEventListener("DOMContentLoaded", (e) => {
        //console.log(spechMessage);
        w.speechSynthesis.addEventListener("voiceschanged", (e) => {
            voices = w.speechSynthesis.getVoices(); 

            voices.forEach((voice) => {
                const $option = d.createElement("option"); 
                $option.value = voice.name; 
                $option.textContent = `${voice.name} *** ${voice.lang}`;

                $speechSelect.appendChild($option);

            })

        })
    });

    d.addEventListener("change", (e) =>{ 
        if (e.target === $speechSelect) {
            spechMessage.voice == voices.find(
                (voice) => voice.name === e.target.value
            );
        }
    });

    d.addEventListener("click", (e) => {
        if (e.target === $spechBtn) {
             spechMessage.text = $spechTextareta.value; 
             w.speechSynthesis.speak(spechMessage);
        }
    });


    
}