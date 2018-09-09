// https://js.checkio.org/mission/wild-dogs/

function getSlope(p1, p2) {
    return (p2[1] - p1[1]) / (p2[0] - p1[0]);
}

function areCollinear(dots = [], slope) {
    if (dots.length < 3) return true;

    return !dots.slice(2).some(dot => getSlope(dots[0], dot) != slope );
}

function wildDogs(dogs) {
    let longestCollinears = [[]];

    let i = 0, 
        dots = [],
        slope = 0 ;
    while (i < dogs.length - 2) {
        //anchor dots
        dots = [dogs[i], dogs[i + 1]];
        slope = getSlope(dots[0], dots[1]);
        dogs.slice(i + 2).forEach(dot => {
            if (areCollinear([...dots, dot], slope)) {
                dots.push(dot);
            }
        })

        if (dots.length > longestCollinears[0].length) {
            longestCollinears = [dots];
        } else if (dots.length == longestCollinears[0].length) {
            longestCollinears.push(dots);
        }

        i++;
    }
    
    if (longestCollinears[0].length < 2) return 0;
    
    let shortestPath = Infinity;
    longestCollinears.forEach((dots) => {
        
        let slope = getSlope(dots[0], dots[1]);
        // b = y - a * x
        let path = dots[0][1] - slope * dots[0][0];

        shortestPath = Math.min(Math.abs(path), shortestPath);
    })
    
    return shortestPath;
}
