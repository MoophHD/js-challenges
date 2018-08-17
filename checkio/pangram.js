// https://js.checkio.org/mission/stair-steps/

const ALPHABET = "abcdefghijklmnopqrstuvwxyz";

function checkPangram(text){
    return text.toLowerCase().split("").filter((l, i, arr) => arr.indexOf(l) == i).sort().join("").indexOf(ALPHABET) != -1;
}