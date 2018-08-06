// https://js.checkio.org/en/mission/speechmodule/

const FIRST_TEN = ["one", "two", "three", "four", "five", "six", "seven",
                   "eight", "nine"],
      SECOND_TEN = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen",
                    "sixteen", "seventeen", "eighteen", "nineteen"],
      OTHER_TENS = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy",
                    "eighty", "ninety"],
      HUNDRED = "hundred";

function speechModule(num){
    let txt = "";

    let hundreeds = num % 1000 - num % 100;
    if (hundreeds) txt = `${FIRST_TEN[hundreeds / 100 - 1]} ${HUNDRED} `;

    let lesserTens = (num - hundreeds) % 10;
    let upperTens = (num - hundreeds) - lesserTens;

    if (lesserTens || upperTens) {
        if (upperTens > 19) {
                txt +=  `${OTHER_TENS[upperTens/10 - 2]}${lesserTens ? (" " + FIRST_TEN[lesserTens - 1]) : ""}`
            } else if (upperTens > 0) {
                txt += `${SECOND_TEN[lesserTens]}`
            } else {
                txt += `${FIRST_TEN[lesserTens - 1]}`
            }
    }
 
    if (txt[0] == " ") txt = txt.slice(1);
    if (txt[txt.length - 1] == " ") txt = txt.slice(0, -1)

    return txt || "";
}