// https://js.checkio.org/en/mission/weak-point/

function weakPoint(matrix){
  const Y_MAX = matrix.length;
  const X_MAX = matrix[0].length;
  
  let minIndexY = 0;
  let minY = matrix[0].reduce( ( prev, curr ) => prev += curr );
  // find weakest y   
  for ( let i = 1; i < Y_MAX; i++) {
    // current rows value 
    let currY = matrix[i].reduce( ( prev, curr ) => prev += curr );
    if ( currY < minY ) {
      minY = currY;
      minIndexY = i;
    }
  }

  // [ [1,2,3], [4,5,6] ] => [ 1,2,3,4,5,6 ];
  let flattenedData = [].concat(...matrix);

  let minIndexX = 0;
  
  // picks 0th values from each row
  let minX = flattenedData.filter( (val, index) => index % X_MAX == 0 ).reduce( (prev, curr) => prev += curr);

  // find weakest x 
  for ( let i = 1; i < X_MAX; i++) {
    // current columns value 
    let currX = flattenedData.filter( (val, index) => index % X_MAX == i ).reduce( ( prev, curr ) => prev += curr );
    if ( currX < minX ) {
      minX = currX;
      minIndexX = i;
    }
  }
  
  return [minIndexY, minIndexX];
}