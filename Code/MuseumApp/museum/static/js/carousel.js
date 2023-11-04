const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;
let intervalId;
var input = document.getElementById('time');
var intervalTime
if (input === null)
    intervalTime = 5000; // »нтервал времени между сменой слайдов (5 секунд)
else
    intervalTime = input.value * 1000;

function startCarousel() {
    intervalId = setInterval(nextSlide, intervalTime);
}

function stopCarousel() {
    clearInterval(intervalId);
}

function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}

// ќбработка событи€ изменени€ фокуса страницы
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        stopCarousel(); // —траница потер€ла фокус, остановить карусель
    } else {
        startCarousel(); // —траница получила фокус, запустить карусель
    }
});

function RestartCarousel(){
    stopCarousel();
    var input = document.getElementById('time');
    if (input === null)
        intervalTime = 5000; // »нтервал времени между сменой слайдов (5 секунд)
    else
        intervalTime = input.value * 1000;
    startCarousel();
}
startCarousel(); // Ќачать карусель при загрузке страницы
