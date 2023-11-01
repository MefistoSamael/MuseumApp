// Функция для запуска обратного отсчета
function startCountdown(secondsRemaining) {
    // Получаем элемент для отображения отсчета
    const countdownElement = document.getElementById('countdown');

    // Устанавливаем интервал обновления каждую секунду
    const interval = setInterval(function () {
        if (secondsRemaining <= 0) {
            clearInterval(interval);
            countdownElement.innerHTML = 'Countdown finished!';
        } else {
            countdownElement.innerHTML = `${secondsRemaining} second remain`;
            secondsRemaining--;

            // Сохраняем текущее состояние отсчета в localStorage
            localStorage.setItem('countdown', secondsRemaining);
        }
    }, 1000);
}

// Проверяем, есть ли состояние отсчета в localStorage
const savedCountdown = localStorage.getItem('countdown');

if (savedCountdown) {
    const secondsRemaining = parseInt(savedCountdown);
    startCountdown(secondsRemaining);
} else {
    // Если состояние отсчета не найдено, начинаем новый отсчет
    const initialSeconds = 3600; // 1 час
    startCountdown(initialSeconds);
}