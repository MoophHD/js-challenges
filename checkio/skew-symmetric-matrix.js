// https://js.checkio.org/mission/skew-symmetric-matrix/

function symmetric(matrix) {
  // look for asymmetria
  for (let i = 0; i < matrix.length; i++) {
    // check the zero
    if (matrix[i][i] != 0) return false;

    for (let j = i + 1; j < matrix.length; j++) {
      let ij = matrix[i][j];
      let ji = matrix[j][i];
      
      if (ij == ji && ij == 0) continue;
      if (ij / ji != -1) return false;
    }
  }
  return true;
}