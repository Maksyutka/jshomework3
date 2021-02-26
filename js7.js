function showTime(a, b, c) {

    if (isNaN(a)) {
        a = "00";
    } else if (a < 10 && a > 0) {
        a = "0" + a;
    }

    if (isNaN(b)) {
        b = "00";
    } else if (b < 10 && b > 0) {
        b = "0" + b;
    }

    if (isNaN(c)) {
        c = "00";
    } else if (c < 10 && c > 0) {
        c = "0" + c;
    }

    return alert(`Текущее вермя: ${a}:${b}:${c}`);
}

let hours = parseInt(prompt("Введите количество часов"));
let minutes = parseInt(prompt("Введите количество минут"));
let seconds = parseInt(prompt("Введите количество секунд"));

showTime(hours, minutes, seconds);


