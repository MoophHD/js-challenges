// http://www.codewars.com/kata/last-digit-of-a-large-number/javascript

function bigMod(num, div) {
    var tmp = "";
    var i, r;
    for ( i=0; i<num.length ; i++){
        tmp += num.charAt(i);
        r = tmp % div;
        tmp = r.toString(10);
    }
    return tmp / 1;
}

var lastDigit = function(str1, str2){ 
    if (str2 == "0") return 1;

    // grab tails 2 ^
    let lastA = parseInt(str1[str1.length - 1]);
    let tails = [];
    for (let i = 1; i < 5; i++) {
        tails.push(parseInt((Math.pow(lastA, i) + "").slice(-1)));
    }

    // substruct 1 from str2
    let str2_ = str2.split("");
    let last = str2_.length - 1;
    if (str2_[last] == "0"){
        while(str2_[last] == "0") {
            str2_[last] = "9";
            last--;
        }
        str2_[last] = str2_[last] - 1;
    } else {
        str2_[last] = str2_[last] - 1;
    }

    // define the tail
    str2_ = str2_.join("");
    return tails[bigMod(str2_, 4)];
}