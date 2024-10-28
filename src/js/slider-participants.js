const slidesContainer = document.querySelector('.participants__slides');
const slides = document.querySelectorAll('.participants__slide');
const totalSlides = slides.length;
const num = document.querySelector('.participants__slide_num');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let currentIndex = 0;

// Установка слайдов
const setSlider = (index) => {
    const slidesToShow = window.innerWidth >= 1024 ? 3 : 1;
    if (index >= totalSlides) {
        currentIndex = 0; 
    } else if (index < 0) {
        currentIndex = totalSlides - slidesToShow; 
    } else {
        currentIndex = index;
    }

    // Обновляем номер слайда
    num.innerText = `${Math.floor(currentIndex / slidesToShow) + 1}/${Math.ceil(totalSlides / slidesToShow)}`;

    // Скрываем все слайды и отображаем нужные
    slides.forEach((slide, index) => {
        if (window.innerWidth >= 1024) {
            slide.style.display = (index >= currentIndex && index < currentIndex + slidesToShow) ? 'block' : 'none';
        } else {
            slide.style.display = (index === currentIndex) ? 'block' : 'none';
        }
    });
};


setSlider(currentIndex);

next.addEventListener('click', () => {
    setSlider(currentIndex + (window.innerWidth >= 1024 ? 3 : 1));
});

prev.addEventListener('click', () => {
    setSlider(currentIndex - (window.innerWidth >= 1024 ? 3 : 1));
});

// Обновление слайдера при изменении размера окна
window.addEventListener('resize', () => setSlider(currentIndex));
