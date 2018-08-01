//https://js.checkio.org/mission/wrong-family/

function isFamily(tree) {
    let t = {};
    
    tree.forEach( tie => {
        let pap = tie[0];
        let son = tie[1];

        if (!t.hasOwnProperty(pap)) t[pap] = [];
        t[pap].push(son);

        if (!t.hasOwnProperty(son)) t[son] = [];
    })

    // sort by number of children
    let tKeys = Object.keys(t).sort((a, b) => t[a].length - t[b].length);
    
    let fatherless = 0;
    mainLoop: for (let i = 0; i < tKeys.length; i++) {
        let sonNm = tKeys[i];

        // look for the father
        let farCount = 0;
        for (let j = 0; j < tKeys.length; j++) {
            if (j == i && j != tKeys.length - 1) continue;
            let farNm = tKeys[j];
            if (t[farNm].indexOf(sonNm) != -1) farCount++;

            if (j == tKeys.length - 1) {
                if (farCount == 1) {
                    continue mainLoop;
                } else if (farCount == 0) {
                    fatherless++;
                } 
                else {
                    return false;
                }
            }
        }
    }
    return fatherless == 1;
    

}

