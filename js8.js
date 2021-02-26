function calculate(a, b, c) {
    if (isNaN(a)) {
        a = 0;
    }

    if (isNaN(b)) {
        b = 0;
    }

    if (isNaN(c)) {
        c = 0;
    }

    return alert(a * 3600 + b * 60 + c);
}

let hours = parseInt(prompt("Введите количество часов"));
let minutes = parseInt(prompt("Введите количество минут"));
let seconds = parseInt(prompt("Введите количество секунд"));

calculate(hours, minutes, seconds);