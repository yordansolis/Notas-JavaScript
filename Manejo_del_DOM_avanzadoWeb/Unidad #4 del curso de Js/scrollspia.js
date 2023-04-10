export default  function sportSpy(){
    const d = document; 

    const $sections = d.querySelectorAll("section[data-scrol-spy]");
    const cb = (entries) => {
   //     console.log("entrices", entries);
     
    entries.forEach((entry) => {
        //console.log("entry", entry);
        const id= entry.target.getAttribute("id");
        //console.log(id);

        if (entry.isIntersecting) {
            d.querySelector(`a[data-scrol-spy][href="#${id}"]`).classList.add("active");
        }else{
            d.querySelector(`a[data-scrol-spy][href="#${id}"]`).classList.remove("active");

        }


        });

    }


    const observer = new IntersectionObserver(cb, {
        threshold: [0.5, 0.75]
    });

    $sections.forEach((el) => observer.observe(el));
}