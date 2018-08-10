// https://js.checkio.org/mission/morse-clock/

function morseClock(data) {
    let intToMorse = i => i.toString(2).split("").map(b => b == 0 ? "." : "-").join("");
    let fin = [];

    data = data.split(":").map(n => ("0" + n).slice(-2));
    for (let i = 0; i < data.length; i++) {
        let chunck = data[i].split("");

        chunck.forEach((n, j) => {
            let morse = intToMorse(parseInt(n));
            
            if (j == 0) {
                if (i == 0) {
                    fin[i] = ("." + morse).slice(-2);
                } else {
                    fin[i] = (".." + morse).slice(-3);
                }
            } else {
                fin[i] += " " + ("..." + morse).slice(-4);
            }


        })
    }

    return fin.join(" : ");
}