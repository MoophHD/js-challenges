//https://js.checkio.org/en/mission/brackets/ 

function brackets(expression) {
    let bracketsReg = /(\(|\)|\[|\]|\{|\})/g;
    //get brackets
    let toCheck = expression.match(bracketsReg).join("");
    console.log(toCheck);
    while (toCheck.length) {
        toCheck = toCheck.replace("()","").replace("[]","").replace("{}","");
        if (toCheck.length == 1) return false;
    }

    return true;    
}
