function comparison(a, b) {
    if (a < b) {
        return alert(-1);
    } else if (a > b) {
        return alert(1);
    } else {
        return alert(0);
    }
}

let firstNum = parseInt(prompt("Введите первое число"));
let secondNum = parseInt(prompt("Введите второе число"));

comparison(`${firstNum}`, `${secondNum}`);
