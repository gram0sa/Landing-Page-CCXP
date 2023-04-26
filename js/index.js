
function countDown() {
    const day = document.getElementById('dia');
    const hour = document.getElementById('hora');
    const minute = document.getElementById('minuto');
    const second = document.getElementById('segundo');
    
    const lancamento = '28 May 2023';
    
    const dataLanc = new Date(lancamento);
    const today = new Date();

    const secondTotal = (dataLanc - today) / 1000;
    const finalDay = Math.floor(secondTotal / 60 / 60 / 24);
    const finalHours = Math.floor(secondTotal / 60 / 60) % 24;
    const finalMinutes = Math.floor(secondTotal / 60) % 60;
    const finalSeconds = Math.floor(secondTotal) % 60;

    const formattedDay = formatTime(finalDay);
    const formattedHour = formatTime(finalHours);
    const formattedMinutes = formatTime(finalMinutes);
    const formattedSeconds = formatTime(finalSeconds);

    day.innerHTML = `${formattedDay} Dias<br>`
    hour.innerHTML = `${formattedHour} Horas<br>`
    minute.innerHTML = `${formattedMinutes} Minutos<br>`
    second.innerHTML = `${formattedSeconds} Segundos<br>`
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countDown();
setInterval(countDown, 1000);