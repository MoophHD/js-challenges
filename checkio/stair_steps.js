// https://js.checkio.org/en/mission/stair-steps/

// dynamic

function stair(numbers) {
    let pmax = [0];
  
    let i, n = numbers.length;
    for (i = 0; i < n; i++) {
      let st1, st2;
      st1 = pmax[i] + numbers[i];
  
      if (i == 0) {
        st2 = Number.NEGATIVE_INFINITY;
      } else {
        st2 = pmax[i - 1] + numbers[i];
      }
  
      pmax.push(Math.max(st1, st2));
    }
  
    console.log(pmax);
  }
  
  
  stair([-11, 69, 77, -51, 23, 67, 35, 27, -25, 95]);
  
  
  /*
  // recursion
  
  function stair(numbers) {
    return bestPath([0, ...numbers, 0]).reduce((a, b) => a + b, 0);
  }
  
  function bestPath(numbers) {
    if (!numbers.length) return 0;
    if (numbers.length < 3) return numbers;
  
    if (numbers[1] > 0) {
      return [numbers[0], ...bestPath(numbers.slice(1))];
    } else {
      let skipOne = bestPath(numbers.slice(1)).reduce((a, b) => a + b, 0) > bestPath(numbers.slice(2)).reduce((a, b) => a + b, 0);
        return [numbers[0], ...bestPath(skipOne ? numbers.slice(1) : numbers.slice(2)) ]
    }
  }
  
  */