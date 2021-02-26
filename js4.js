function calc(a, b) {
    if (!isNaN(b)) {
        return a * b;
    } else {
        return a * a;
    }
}

let firstNum = parseInt(prompt("Введите первое число"));
let secondNum = parseInt(prompt("Введите второе число"));
alert(calc(firstNum, secondNum));