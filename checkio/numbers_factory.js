// https://js.checkio.org/en/mission/number-factory/

function numbersFactory(number){
    let fractions = []
    // GET PRIMES
    for (let i = 2; i <= number/i; i++) {
        while (number % i === 0) {
            fractions.push(i);

            number /= i;
        }
    }

    if (number > 1) fractions.push(number);
    if (fractions.find(a => a > 9)) return 0;
    
    // MERGE PRIMES INTO DIGITS
    let lastMergeable = Math.max(fractions.lastIndexOf(2), fractions.lastIndexOf(3));

    // 2s and 3s
    let toMerge = fractions.slice(0, lastMergeable + 1).sort((a, b) => b - a);
    toMerge = toMerge.length % 2 == 0 ?  toMerge.sort((a, b) => a - b) : toMerge.sort((a, b) => b - a);

    // if is not even, ignore the 1st number
    for (let i = 1; i < toMerge.length; i++) {
        let prime = toMerge[i];
        let prevPrime = toMerge[i - 1];
        
        let multiple = prime * prevPrime;

        if (multiple < 10) {
            toMerge[i] = multiple;
            toMerge[i - 1] = "";
        }
    }

    return parseInt([...toMerge, ...fractions.slice(lastMergeable + 1)].sort((a, b) => a - b).join(""));
}
