function timer(id, deadline) {
        // Timer
        // Определение разницы между дедлайном и текущей датой
        function getTimeRemaining(endtime) {
            let days, hours, minutes, seconds;
            const t = Date.parse(endtime) - Date.parse(new Date());
    
            // Обработка отриц. значений
            if (t <= 0) {
                days = 0;
                hours = 0;
                minutes = 0;
                seconds = 0;
            } else {
                days = Math.floor( (t/(1000*60*60*24)) ),
                hours = Math.floor( (t/(1000*60*60) % 24) ),
                minutes = Math.floor( (t/1000/60) % 60 ),
                seconds = Math.floor( (t/1000) % 60 );
            }
            return {t, days, hours, minutes, seconds};
        }
        // Ставим нули перед цифрой
        function getZero(num){
            if (num >= 0 && num < 10) { 
                return '0' + num;
            } else {
                return num;
            }
        }
        // Установка таймера на страницу(для работы со всеми таймерами на страницах, а не с одним)
        function setClock(selector, endtime) {
            const timer = document.querySelector(selector),
                days = timer.querySelector("#days"),
                hours = timer.querySelector('#hours'),
                minutes = timer.querySelector('#minutes'),
                seconds = timer.querySelector('#seconds'),
                // обновление каждую сек
                timeInterval = setInterval(updateClock, 1000);
            // Вызываем, чтобы не было миганий с изнач. датой(из-за задержки)
            updateClock();
            // Обновление таймера каждую сек. 
            function updateClock() {
                const t = getTimeRemaining(endtime);
                // Помещение рассчитанных значений на стр.
                days.innerHTML = getZero(t.days);
                hours.innerHTML = getZero(t.hours);
                minutes.innerHTML = getZero(t.minutes);
                seconds.innerHTML = getZero(t.seconds);
                // Остановка таймера
                if (t.total <= 0) {
                    clearInterval(timeInterval);
                }
            }
        }
    
        setClock(id, deadline);
}

export default timer;