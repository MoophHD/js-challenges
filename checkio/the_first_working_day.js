//https://js.checkio.org/mission/the-first-working-day/solve/

function vacation(date, days) {
    const MILIS_PER_DAY = 86400000;

    let d0 = new Date(date);
    let d1 = new Date(d0.getTime() + days * MILIS_PER_DAY)
    console.log(d1.getDay())

    if (d1.getDay() == 0) d1 = new Date(d1.getTime() + 1 * MILIS_PER_DAY);
    else if (d1.getDay() == 6) d1 = new Date(d1.getTime() + 2 * MILIS_PER_DAY)

    let y = d1.getFullYear();
    let m = ("0" + (d1.getMonth() + 1)).slice(-2);
    let d = ("0" + d1.getDate()).slice(-2);

    return [y, m, d].join("-");
}