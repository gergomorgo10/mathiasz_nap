const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const images = document.querySelector('.carousel-images');
    let index = 0;
    let kiir = document.getElementById("eredmeny");
    let dicseretkiir = document.getElementById("dicseret")
    const totalImages = document.querySelectorAll('.carousel-images img').length;
    const dicseret = ["Du warst gut" , "schöne Arbeit", "weiter so mit der guten Arbeit"]
    

    function moveToNext() {
        index = (index + 1) % totalImages;
        images.style.transform = `translateX(-${index * 100}%)`;
    }

    function moveToPrev() {
        index = (index - 1 + totalImages) % totalImages;
        images.style.transform = `translateX(-${index * 100}%)`;
    }

    nextBtn.addEventListener('click', moveToNext);
    prevBtn.addEventListener('click', moveToPrev);

    function getRandomItem(dicseret) {
    const index = Math.floor(Math.random() * dicseret.length);
    return dicseret[index];
   }

    function ausztria_quiz(){
       let elso = document.querySelector('input[name="ausztria1"]:checked').value|0;
       let masodik = document.getElementById("ausztria2").value|0;
       let harmadik = document.querySelector('input[name="ausztria3"]:checked').value|0;
       let negyedik = document.getElementById("ausztria4").value|0;
       let otodik = document.querySelector('input[name="ausztria5"]:checked').value|0;
       let otkerdes = elso + masodik + harmadik + negyedik + otodik;
       if(otkerdes >= 4)
         dicseretkiir.innerHTML = `${getRandomItem(dicseret)}`
       kiir.innerHTML = `Eredmény : 5/${otkerdes}`
    }

    function svajc_quiz(){
       let elso = document.querySelector('input[name="svájc1"]:checked').value|0;
       let masodik = document.getElementById("svájc2").value|0;
       let harmadik = document.querySelector('input[name="svájc3"]:checked').value|0;
       let negyedik = document.getElementById("svájc4").value|0;
       let otodik = document.querySelector('input[name="svájc5"]:checked').value|0;
       let otkerdes = elso + masodik + harmadik + negyedik + otodik;
       if(otkerdes >= 4)
         dicseretkiir.innerHTML = `${getRandomItem(dicseret)}`
       kiir.innerHTML = `Eredmény : 5/${otkerdes}`
    }

    function nemet_quiz(){
       let elso = document.querySelector('input[name="nemet1"]:checked').value|0;
       let masodik = document.getElementById("nemet2").value|0;
       let harmadik = document.querySelector('input[name="nemet3"]:checked').value|0;
       let negyedik = document.getElementById("nemet4").value|0;
       let otodik = document.querySelector('input[name="nemet5"]:checked').value|0;
       let hatodik = document.getElementById("nemet6").value|0;
       let hetedik = document.querySelector('input[name="nemet7"]:checked').value|0;
       let nyolcadik = document.getElementById("nemet8").value|0;
       let kilencedik = document.querySelector('input[name="nemet9"]:checked').value|0;
       let tizedik = document.getElementById("nemet10").value|0;
       let tizkerdes = elso + masodik + harmadik + negyedik + otodik + hatodik + hetedik + nyolcadik + kilencedik + tizedik;
       if(tizkerdes >= 8)
         dicseretkiir.innerHTML = `${getRandomItem(dicseret)}`
       kiir.innerHTML = `Eredmény : 10/${tizkerdes}`
    }
