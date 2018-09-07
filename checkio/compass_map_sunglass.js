//https://js.checkio.org/mission/compass-map-and-spyglass/

function navigation(seaside) {
    let dots = {};
    let distToY = key => Math.max( Math.abs(dots[key][0] - dots.Y[0]), Math.abs(dots[key][1] - dots.Y[1]) );

    seaside.forEach((row, y) => {
        row.forEach((dot, x) => {
            if (dot !== 0) {
                dots[dot] = [x, y];
            }
        })
    })

    return Object.keys(dots).reduce((accu, dot) => {
        return accu += distToY(dot);
    }, 0)    

}
