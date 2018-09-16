// https://js.checkio.org/mission/safe-code


function safeCode(equation) {
    equation = equation.replace("=", "==").replace("--", "+");

    let i = -1;
    while(i < 10) {
        i++;
        if (equation.indexOf(i) == -1) {
            if (i == 0 && equation.split(/\+|\-|\*|==/).some(num => num[0] == "#")) continue;

            if (eval(equation.replace(/#/g, i))) return i;
        }
    }

    return -1;
}