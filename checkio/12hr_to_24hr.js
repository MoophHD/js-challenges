// https://js.checkio.org/en/mission/time-converter-12h-to-24h/

function timeConverter(t) {
    let time = t => t.map(s => ("0" + ~~(s)).slice(-2)).join(":");

    let hr = parseInt(t.split(" ")[0].split(":")[0]);
    let mn = parseInt(t.split(" ")[0].split(":")[1]);

    let period = t.split(" ")[1];

    if (hr < 12 && period == "p.m.") hr += 12;

    return time([hr, mn]);
}
