function factorial(a) {
    if (a > 0) {
        console.log(a);
        return a * factorial(a - 1);
    }
    return 1;
}

let num = parseInt(prompt("Введите число"));
alert(factorial(`${num}`)); 