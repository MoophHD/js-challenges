//https://js.checkio.org/en/mission/keys-and-locks/

function reflect(arr) { 
    return arr.map(row => row.reverse()) 
}

function transpose(arr) {
    if (arr.length < 1) return arr;

    return Object.keys(arr[0]).map(function(c) {
        return arr.map(r => r[c]);
    });
}

function rotate(matrix, deg) {
    switch(deg) {
        case(0): return matrix;
        case(90): return reflect(transpose(matrix));
        case(180): return matrix.reverse();
        case(270): return transpose(matrix).reverse();
        default: return 
    }
}

function trim(arr) {
    arr = arr.filter(r => !(r.indexOf("#") == -1));
    arr = reflect(transpose(arr)).filter(r => !(r.indexOf("#") == -1));
    return arr;
}

function areEqual(mat1, mat2) {
    return [].concat(...mat1).join("") == [].concat(...mat2).join("");
}

function keysAndLocks(lock, key) {
    const ANGLES = [0, 90, 180, 270];

    lock = trim(lock.split("\n"));
    key = trim(key.split("\n"));
    
    return ANGLES.some(deg => areEqual(lock, rotate(key, deg)));
}
