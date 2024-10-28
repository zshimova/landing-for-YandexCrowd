let vasyukiSlider = document.querySelector('.vasyuki__slider');
let vasyukiSlides = document.querySelectorAll('.vasyuki__slide');
let vasyukiNext = document.querySelector('.vasyuki__btn-next');
let vasyukiPrev = document.querySelector('.vasyuki__btn-prev');
let vasyukiCurrentIndex = 0;

// Функция для получения всех видимых слайдов
function getVisibleSlides() {
    return Array.from(vasyukiSlides).filter(slide => {
        const computedStyle = window.getComputedStyle(slide);
        return computedStyle.display !== 'none'; // Проверка через getComputedStyle
    });
}

// Функция для управления каруселью
function vasyukiCarousel(index) {
    const visibleSlides = getVisibleSlides();

    if (visibleSlides.length === 0) return; // Если нет видимых слайдов, ничего не делаем

    // Обновляем индекс текущего слайда с учетом видимых слайдов
    if (index >= visibleSlides.length) {
        vasyukiCurrentIndex = 0; // Перейти к первому слайду
    } else if (index < 0) {
        vasyukiCurrentIndex = visibleSlides.length - 1; // Перейти к последнему слайду
    } else {
        vasyukiCurrentIndex = index; // Установить текущий индекс
    }

    // Изменение трансформации слайдера
    const offsetty = -vasyukiCurrentIndex * 100; // Перемещение на 100% для каждого слайда
    vasyukiSlider.style.transform = `translateX(${offsetty}%)`;
}

// Обработчики событий для кнопок
vasyukiNext.addEventListener('click', () => {
    vasyukiCarousel(vasyukiCurrentIndex + 1); // Переход к следующему слайду
});

vasyukiPrev.addEventListener('click', () => {
    vasyukiCarousel(vasyukiCurrentIndex - 1); // Переход к предыдущему слайду
});

// Показать первый видимый слайд при загрузке
vasyukiCarousel(vasyukiCurrentIndex);
