// https://js.checkio.org/mission/find-sequence/

function sequence(matrix) {
  let len = matrix.length;
  let reg = /([0-9])\1{3,}/;
  let temp;
  
  for (let i = 0; i < len; i++) {
    // horizontal
    if (reg.test(matrix[i].join(""))) return true;
    // vertical
    if (reg.test(matrix.map(row => row[i]).join(""))) return true; 
    // south-east
    if (len - i > 3) {
      temp = i;
      if (reg.test( matrix.map(row => row[temp++]).join(""))) return true;
      // south-west
      temp = len - 1 - i;
      if (reg.test( matrix.map(row => row[temp--]).join(""))) return true;

      // the other lines;
      if (i != 0) {
        temp = 0;
        if (reg.test( matrix.slice(i).map(row => row[temp++]).join(""))) return true;
        temp = len - 1;
        if (reg.test( matrix.slice(i).map(row => row[temp--]).join(""))) return true;
      }
    }
  }
  
  return false;
}