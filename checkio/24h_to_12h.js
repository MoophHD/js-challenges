//https://js.checkio.org/mission/time-converter-24h-to-12h

function timeConverter(dayTime) {
    let res = "";
    let d = dayTime.split(':');

    if (parseInt(d[0]) > 11) {
        if (d[0] != 12) d[0] -= 12;
        d[1] += " p.m.";
    } else {
        if (d[0] == 0) d[0] = 12;
        d[1] += " a.m.";
    }

    if (d[0].length == 2 && d[0] < 10) d[0] = d[0].slice(1, 2);

    return d.join(":");
}