//https://js.checkio.org/mission/an-oil-pie

function greatestCommonDivisor(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
  
  function dividePie(groups){
      let pie = [1, 1];
  
      let droneAmount = groups.reduce((acc, curr) => acc += Math.abs(curr),0)
      groups.forEach((drones) => {
          if (drones > 0) {
              if (pie[1] != droneAmount) {
                  // 3/4 - 2/6 => (3*6 - 2*4)/(6*4)
                  drones *= pie[1];
                  pie[0] *= droneAmount;
                  pie[1] *= droneAmount;
                  pie[0] -= drones;
              } else {
                  pie[0] -= drones;
              }
          } else {
              drones = Math.abs(drones);
              console.log(pie);
              pie[0] *= (droneAmount-drones);
              pie[1] *= droneAmount;
              console.log(pie);
              
          }
      })
      let gcd = greatestCommonDivisor(pie[0], pie[1]);
      pie[0] /= gcd;
      pie[1] /= gcd;
  
      return pie;
  }