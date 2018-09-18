// https://www.codewars.com/kata/validate-sudoku-with-size-nxn/javascript

var Sudoku = function(data) {
    let sudoSize = data.length;
    let lilSquareSize = Math.sqrt(sudoSize);
    let target = Array.from(Array(sudoSize).keys());
    target = [...target.slice(1), sudoSize].join("");

    transpose = (arr) => {
        return Object.keys(arr[0]).map(function(c) {
            return arr.map(r => r[c]);
        });
    }
    return {
        isValid: function() {
            if (data.some(row => row.length != sudoSize)) return false;
            if (transpose(data)
                .some(row => row.sort((a, b) => a - b).join("") != target)) return false;
            if (data
                .some(row => row.slice().sort((a, b) => a - b).join("") != target)) return false;

            for (let i = 0; i < sudoSize; i += lilSquareSize) {
                let ySlice = data.slice(i, i + lilSquareSize);
                for (let j = 0; j < sudoSize; j += lilSquareSize) {
                    let lilSquare = transpose(ySlice).slice(j, j + lilSquareSize);
                    lilSquare = lilSquare.reduce((accu, curr) => { return [...accu, ...curr]}, []);
                    if (lilSquare.sort((a, b) => a - b).join("") != target) return false;
                }
            }    
              
            return true;
        }
    };
};