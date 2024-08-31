const slider = document.querySelector('.slider');
const sliders = document.querySelectorAll('.slider img');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function showSlider(index) {
    if (index >= sliders.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = sliders.length - 1;
    } else {
        currentIndex = index;
    }

    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    showSlider(currentIndex + 1);
});
prevBtn.addEventListener('click', () => {
    showSlider(currentIndex - 1);
});
