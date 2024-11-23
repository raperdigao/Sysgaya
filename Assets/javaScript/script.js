let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    // Ajusta o índice ao limite do número de slides
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    // Atualiza o carrossel
    const offset = -currentSlide * 100;
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

document.querySelector('.next').addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
    showSlide(currentSlide - 1);
});
