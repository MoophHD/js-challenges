// https://js.checkio.org/mission/matrix-transpose/

function transposeMatrix(data){
    let transposed = [];
  
    for (let y = 0; y < data.length; y++) {
      let row = data[y];
  
      for (let x = 0; x < row.length; x++) {
        if (transposed[x] == undefined) transposed[x] = [];
        transposed[x][y] = row[x];
      }
    }
  
    return transposed;
  }