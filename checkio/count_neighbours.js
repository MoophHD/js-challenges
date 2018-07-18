// https://js.checkio.org/mission/count-neighbours/

function countNeighbours( _data, y, x, range=1 ) {
  // create a copy
  let data = _data.slice();
  // don't count the "1" under at the start coords
  const underStart = data[y][x];
  const len = {
    y: data.length,
    x: data[0].length
  }

  // slice vertically 
  data = data.slice(
    y - range > -1 ? y - range : 0,
    y + range < len.y - 1 ?  y + range + 1 : len.y
  )

  //slice horizontally
  for (let i = 0; i < data.length; i++) {
    let row = data[i];
    
    data[i] = row.slice(
        x - range > -1 ? x - range : 0,
        x + range < len.x - 1 ?  x + range + 1 : len.x
      )
  }

  // flatten the 2d array into 1d
  var flattenedData = [].concat(...data);
  // get the number of "1"s
  return flattenedData.filter(a => a).length - underStart;
}