let vasyukiSlider = document.querySelector('.vasyuki__slider');
let vasyukiSlide = document.querySelectorAll('.vasyuki__slide');
let vasyukiNext = document.querySelector('.vasyuki__btn-next');
let vasyukiPrev = document.querySelector('.vasyuki__btn-prev');
let vasyukiCurrentIndex = 0;

function vasyukiCarousel(index) {
    if (index >= vasyukiSlide.length) {
        vasyukiCurrentIndex = 0;
    } else if (index < 0) {
        vasyukiCurrentIndex = vasyukiSlide.length - 1;
    } else {
        vasyukiCurrentIndex = index;
    }

    const offsetty = -vasyukiCurrentIndex * 100;
    vasyukiSlider.style.transform = `translateX(${offsetty}%)`;
}

vasyukiNext.addEventListener('click', () => {
    vasyukiCarousel(vasyukiCurrentIndex + 1);
});

vasyukiPrev.addEventListener('click', () => {
    vasyukiCarousel(vasyukiCurrentIndex - 1);
});
