function calculateTime(a) {
    let hours = Math.floor(a / 60 / 60);
    let minutes = Math.floor(a / 60) - (hours * 60);
    let seconds = a % 60;

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    return alert(`Текущее время: ${hours}:${minutes}:${seconds}`);
}

let time = parseInt(prompt("Введите количество секунд"));

calculateTime(time);