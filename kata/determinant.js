// https://www.codewars.com/kata/matrix-determinant/javascript

function getMinor(grid, row, column) {
    grid = Object.keys(grid[0]).map(function(r) {
        return grid[r].filter((val, i) => i != column);
    });

    return grid.filter((val, i) => i != row)
}


function determinant(m) {
    if (m.length == 1) return m[0][0];
    else if (m.length == 2) return m[0][0]*m[1][1] - m[0][1]*m[1][0];

    return m[0].reduce((accu, curr, index) => {
        return accu + Math.pow(-1, index) * determinant(getMinor(m, 0, index)) * curr;
    }, 0)
};