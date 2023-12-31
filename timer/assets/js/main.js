function relogio() {
    function getTimeFromSeconds(seconds) {
        const date = new Date(seconds * 1000);
        return date.toLocaleTimeString('pr-Br', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    const relogio = document.querySelector('.relogio');
    let seconds = 0;
    let timer;

    function startWatch() {
        timer = setInterval(function () {
            seconds++;
            relogio.innerHTML = getTimeFromSeconds(seconds)
        }, 1000)
    }

    document.addEventListener('click', function (e) {
        const element = e.target;
        if (element.classList.contains('zerar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer);
            relogio.innerHTML = '00:00:00';
            seconds = 0;
        }

        if (element.classList.contains('iniciar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer)
            startWatch();
        }

        if (element.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado')
        }
    });
}

relogio();



