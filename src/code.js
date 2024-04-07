document.addEventListener('DOMContentLoaded', function () {
    let hours = 0;
    let minutes = 0;
    let seconds = 0;
    let timer;

    function updateTimer() {
        document.querySelector('.timer').textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    function startTimer() {
        if (!timer) {
            timer = setInterval(function () {
                seconds++;
                if (seconds === 60) {
                    seconds = 0;
                    minutes++;
                    if (minutes === 60) {
                        minutes = 0;
                        hours++;
                    }
                }
                updateTimer();
            }, 1000);
        }
    }

    function stopTimer() {
        if (timer) {
            clearInterval(timer);
            timer = null;
        }
    }

    function resetTimer() {
        stopTimer();
        hours = 0;
        minutes = 0;
        seconds = 0;
        updateTimer();
    }

    document.getElementById('Start').addEventListener('click', startTimer);
    document.getElementById('Stop').addEventListener('click', stopTimer);
    document.getElementById('Reset').addEventListener('click', resetTimer);

    updateTimer();
});
