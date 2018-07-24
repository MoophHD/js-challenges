//https://js.checkio.org/mission/broken-clock

const toSecond = {
    "second": 1,
    "minute": 60,
    "hour": 3600
}

function brokenClock(startingTime, wrongTime, _errorDescription) {
    let errorDescription = _errorDescription.split(" ");
    // try value itself or cut the last symbol (s)
    const shiftValue = toSecond[errorDescription[1]] || toSecond[errorDescription[1].slice(0, -1)];
    // in seconds
    const shiftAmount = parseInt(errorDescription[0]) * shiftValue;
    const shiftPerValue = toSecond[errorDescription[4]] || toSecond[errorDescription[4].slice(0, -1)];
    const shiftPer = errorDescription[3] * shiftPerValue;

    let wrongSecs = getSecs(wrongTime);
    let startSecs = getSecs(startingTime)
    let shiftSecs = (wrongSecs - startSecs) / ( 1 + shiftAmount / shiftPer );

    shiftSecs = ~~(shiftSecs.toFixed(7));

    // build date from secs
    let t = new Date(1970, 0, 1);
    t.setSeconds(shiftSecs + startSecs);

    let hr = t.getHours() > 9 ? t.getHours() : "0" + t.getHours();
    let min = t.getMinutes() > 9 ? t.getMinutes() : "0" + t.getMinutes();
    let sec = t.getSeconds() > 9 ? t.getSeconds() : "0" + t.getSeconds();
    
    return `${hr}:${min}:${sec}`
}

// 00:00:00 format
function getSecs( dt ) {
    let _dt = dt.split(":");
    return +_dt[0] * 3600 + +_dt[1] * 60 + +_dt[2];
}