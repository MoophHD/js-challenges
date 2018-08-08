// https://js.checkio.org/en/mission/short-string-conversion/

function stepsToConvert(ln1, ln2) {
    ln1 = ln1.split("");
    ln2 = ln2.split("");

    let steps = 0;

    while (ln1.join("") != ln2.join("")) {
        if (ln1[0] != undefined) {
            if (ln1[0] !== ln2[0]) {
                steps++;

                if (ln1[0] == ln2[1]) {
                    //insert
                    ln2.shift();
                } else if (ln1[1] == ln2[0]) {
                    // delete 
                    ln1.shift();
                } else {
                    // replace            
                }
                
            }
        } else {
            //insert
            steps++;
        }

        ln1.shift();
        ln2.shift();
    }
    return steps;
}
