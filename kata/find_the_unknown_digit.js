// https://www.codewars.com/kata/find-the-unknown-digit

function solveExpression(exp) {
    exp = exp.replace("=", "==").replace("--", "+");
    let expNums = exp.split(/\+|\-|\*|==/);
    
    let a = 0;
    while(a < 10) {
        //"won't be one of the other given digits"
        if (exp.indexOf(a) == -1) {
            let guess = exp.replace(/\?/g, a);
            // assuming 01 == 1 and is a fine notation
            let startsWithDbZero = (a == 0 && expNums.filter(n => n.slice(0, 2) == "??").length > 0);
            if (eval(guess) && !startsWithDbZero) {
                return a;
            }
        }
        a++;
    }
    return -1;
}