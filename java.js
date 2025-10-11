const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const images = document.querySelector('.carousel-images');
    let index = 0;
    const totalImages = document.querySelectorAll('.carousel-images img').length;

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
