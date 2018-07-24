//https://js.checkio.org/en/mission/brackets/ 

function brackets(expression) {
    let bracketsReg = /(\(|\)|\[|\]|\{|\})/g;
    //get brackets
    let toCheck = expression.match(bracketsReg);
    // no brackets => no mistake :0
    if (!toCheck) return true;
    toCheck = toCheck.join("");

    while (toCheck.length) {
        let lengBeforeReducing = toCheck.length;
        toCheck = toCheck.replace("()","").replace("[]","").replace("{}","");

        if (lengBeforeReducing == toCheck.length) return false;
    }

    return true;    
}
