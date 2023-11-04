const slides = document.querySelectorAll('.carousel-slide');
let currentSlide = 0;
let intervalId;
var input = document.getElementById('time');
var intervalTime
if (input === null)
    intervalTime = 5000; // �������� ������� ����� ������ ������� (5 ������)
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

// ��������� ������� ��������� ������ ��������
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        stopCarousel(); // �������� �������� �����, ���������� ��������
    } else {
        startCarousel(); // �������� �������� �����, ��������� ��������
    }
});

function RestartCarousel(){
    stopCarousel();
    var input = document.getElementById('time');
    if (input === null)
        intervalTime = 5000; // �������� ������� ����� ������ ������� (5 ������)
    else
        intervalTime = input.value * 1000;
    startCarousel();
}
startCarousel(); // ������ �������� ��� �������� ��������
