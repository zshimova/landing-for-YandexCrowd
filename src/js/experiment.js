let exSlider = document.querySelector('.experiment-slider');
let exSlides = document.querySelectorAll('.experiment-slider__slide');
let exNext = document.getElementById('exNextBtn');
let exPrev = document.getElementById('exPrevBtn');
let exIndex = 0;

function exy(index) {
    if (index >= exSlides.length) {
        exIndex = 0;
    } else if (index < 0) {
        exIndex = exSlides.length - 1;
    } else {
        exIndex = index;
    }

    const offset = -exIndex * 100;
    exSlider.style.transform = `translateX(${offset}%)`;
}

exNext.addEventListener('click', () => {
    exy(exIndex + 1);
});

exPrev.addEventListener('click', () => {
    exy(exIndex - 1);
});
