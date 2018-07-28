//https://js.checkio.org/en/mission/simple-areas/

function simpleAreas(...args) {
    switch(args.length) {
        case(1): {
            return Math.PI * Math.pow(args[0] * .5, 2);
        }
        case(2): {
            return args[0] * args[1];
        }
        case(3): {
            let p = (args[0] + args[1] + args[2]) * .5;
            let areaSqrd = p;
            console.log(areaSqrd);
            args.forEach(side => { 
                areaSqrd = areaSqrd * (p - side) 
            });
            return Math.sqrt(areaSqrd);
        }
        default: {
            return -1;
        }
    }
}