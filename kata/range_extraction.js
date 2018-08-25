// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript

function solution(list){
    let ranged = [];
    let delta = list[0];
    let inRange = [];
    
    list.push(Number.NEGATIVE_INFINITY)
    list.forEach((n, i) => {
      let thisDelta = n - i;
  
      if (thisDelta !== delta) {
        delta = thisDelta;
  
        if (inRange.length > 2) {
          ranged.push(`${inRange[0]}-${inRange[inRange.length - 1]}`);
        } else {
          ranged.push(...inRange);
        }
        inRange = [];
      }
      
      inRange.push(n);
    })
  
    return ranged.join(",");
  }