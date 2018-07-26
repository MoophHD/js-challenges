// https://js.checkio.org/en/mission/x-o-referee///

function xoReferee(_data) {
    const winCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [0,3,6],
        [1,4,7],
        [2,5,8]
    ]

    let flatten = ar => ar.map(el => el.split("")).reduce((accu, curr) => accu.concat(curr))
    let data = flatten(_data.slice());

    for (let i = 0; i < winCombinations.length; i++) {
        let combo = winCombinations[i];
        let product = combo.map(i => data[i]).join("");
        console.log(product)
        if (product == "XXX") {
            return "X";
        } else if (product == "OOO") {
            return "O";
        }
    }

    return "D";
}
