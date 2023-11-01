// ������� ��� ������� ��������� �������
function startCountdown(secondsRemaining) {
    // �������� ������� ��� ����������� �������
    const countdownElement = document.getElementById('countdown');

    // ������������� �������� ���������� ������ �������
    const interval = setInterval(function () {
        if (secondsRemaining <= 0) {
            clearInterval(interval);
            countdownElement.innerHTML = 'Countdown finished!';
        } else {
            countdownElement.innerHTML = `${secondsRemaining} second remain`;
            secondsRemaining--;

            // ��������� ������� ��������� ������� � localStorage
            localStorage.setItem('countdown', secondsRemaining);
        }
    }, 1000);
}

// ���������, ���� �� ��������� ������� � localStorage
const savedCountdown = localStorage.getItem('countdown');

if (savedCountdown) {
    const secondsRemaining = parseInt(savedCountdown);
    startCountdown(secondsRemaining);
} else {
    // ���� ��������� ������� �� �������, �������� ����� ������
    const initialSeconds = 3600; // 1 ���
    startCountdown(initialSeconds);
}