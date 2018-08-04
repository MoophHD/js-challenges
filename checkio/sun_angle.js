// https://js.checkio.org/en/mission/sun-angle/

function sunAngle(dayTime) {
    let t = dayTime.split(':');
    t[0] = parseInt(t[0]);
    t[1] = parseInt(t[1]);
    let hr = t[0] + t[1] / 60;
    if (hr < 6 || hr > 18) return "I don't see the sun!";
    
    return (hr - 6) / 12 * 180;
}