// https://js.checkio.org/mission/three-points-circle

class Point {
    constructor(x, y) {
        this.x = parseFloat(x);
        this.y = parseFloat(y);
    }
}

function circle(data) {
    //The perpendicular bisectors of two chords meet at the centre.
    data = data.slice(1, -1).split("),(").map(v => v.split(","))

    let a = new Point(data[0][0], data[0][1]);
    let b = new Point(data[1][0], data[1][1]);
    let c = new Point(data[2][0], data[2][1]);

    let abMid = new Point(0.5 * (a.x + b.x), 0.5 * (a.y + b.y));
    let bcMid = new Point(0.5 * (c.x + b.x), 0.5 * (c.y + b.y));
    let abGrad = (b.y - a.y) / (b.x - a.x);
    let bcGrad = (c.y - b.y) / (c.x - b.x);
    let l1Grad = abGrad ? -1/abGrad : 0;
    let l2Grad = bcGrad ? -1/bcGrad : 0;

    let rx, ry;
    // if horizontal
    if (abGrad == 0 || bcGrad == 0) {
        let hor, norm, grad;
        if (abGrad == 0) {
            hor = abMid;
            norm = bcMid;
            grad = l2Grad;
        } else {
            hor = bcMid;
            norm = abMid;
            grad = l1Grad;
        }
   
        rx = hor.x;
        ry = grad * (rx - norm.x ) + norm.y;
    } else {
        rx = (l1Grad * abMid.x - l2Grad * bcMid.x - abMid.y + bcMid.y) / (l1Grad - l2Grad);
        ry = l1Grad * (rx - abMid.x) + abMid.y;
    }

    let r = Math.sqrt((a.x - rx)*(a.x - rx) + (a.y - ry)*(a.y - ry));

    rx = Math.round(rx * 100) /100;
    ry = Math.round(ry * 100) /100;
    r = Math.round(r * 100) / 100;

    return `(x-${rx})^2+(y-${ry})^2=${r}^2`
}