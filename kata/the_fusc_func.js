// https://www.codewars.com/kata/570409d3d80ec699af001bf9

function fusc(n){
    if (n < 2) return n;
  
    let halfN = n * 0.5;
    if (n % 2 == 0) {
      return fusc(halfN);
    } else {
      return fusc(halfN - 0.5) + fusc(halfN + 0.5)
    }
  }