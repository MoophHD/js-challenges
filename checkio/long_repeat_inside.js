// https://js.checkio.org/mission/long-repeat-inside

function repeatInside(line) {
    let pattern = "";
    let subString = "";

    for (let i = 0; i < line.length; i++) {
        pattern += line[i];
        
        if (line.indexOf(pattern) != line.lastIndexOf(pattern)) {
            let r = repeatStart(line, pattern);

            if (r.length / pattern.length != 1 &&
                r.length > subString.length) {
                subString = r;
            }
        } else {
            i -= pattern.length;
            pattern = "";
            line = line.slice(1);
        }
    }

    return subString;
}

function repeatStart(str, pattern) {
    let step = pattern.length;
    let rep = "";
    for (let i = 0; i < str.length; i += step) {
        let p = str.slice(i, i + step);

        if (p == pattern) {
            rep += p;
        } else {
            break;
        }
    }

    return rep;
}
