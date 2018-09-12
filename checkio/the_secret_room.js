//https://js.checkio.org/mission/the-secret-room

const DIGITS = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
const TENS = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
const EXP = ["hundred", "thousand", "million", "milliard"];

function buildNumber(n) {
    if (!n) return "";

    if (n < 20) {
        return `${DIGITS[n - 1]}`;
    } else if (n < 100) {
        return `${TENS[~~(n * 0.1) - 2]} ${buildNumber(n % 10)}`.trim();
    } else {
        let pow = `${n}`.length - 1;
        let exp_str = EXP[~~(pow/3)];
        let exp_int = Math.pow(10, pow);

        let pre = buildNumber(~~(n/exp_int));
        let post = buildNumber(n % Math.pow(10, pow));
        return `${pre} ${exp_str} ${post}`.trim();
    }
}
function secretRoom(number) {
    let nums = [];
    let n = 1;

    while( n <= number) { 
        nums.push(buildNumber(n));
        n++;
    }

    return nums.sort().indexOf(buildNumber(n - 1)) + 1;
}