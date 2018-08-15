// https://js.checkio.org/mission/frequency-sorting/

function frequencySorting(nums) {
    // ascending
    nums.sort((a, b) => a - b);
    let frequency = a => nums.lastIndexOf(a) - nums.indexOf(a);
  
    // frequency
    return nums.slice().sort((a, b) => frequency(b) - frequency(a));
  }
  