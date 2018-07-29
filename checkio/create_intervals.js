//https://js.checkio.org/mission/create-intervals

function createIntervals(_data) {
    let data = _data.slice().sort((a, b) => a - b)
    let intervals = [];
    
    let anchor = data[0];
    let last = anchor;
    for (let i = 1; i < data.length + 1; i++) {
        let n = data[i];

        if (n - last != 1) {
                intervals.push([anchor, last]);

                anchor = n;
            }
        last = n;
            
        }


    return intervals;
}