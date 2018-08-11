// https://js.checkio.org/en/mission/bird-language/

function translate(phrase){
    return phrase
    .replace(/(b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|x|z|w)(a|e|i|o|u|y)/gi, "$1")
    .replace(/(aaa|eee|iii|ooo|uuu|yyy)/gi, m => m.slice(-1));
}
