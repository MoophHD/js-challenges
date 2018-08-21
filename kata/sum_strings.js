// https://www.codewars.com/kata/sum-strings-as-numbers/train/javascript

function sumStrings(a,b) {
    a = a.split("").reverse().map(s => parseInt(s));
    b = b.split("").reverse().map(s => parseInt(s));
    let n1 = a.length > b.length ? a : b;
    let n2 = n1 == a ? b : a;
  
    let result = [];
    let remainder = 0;
    for (let i = 0; i < n1.length; i++) {
      let sum = n1[i] + (n2[i] || 0) + remainder;
      remainder = ~~(sum / 10);
      result.push(sum % 10);
    }
  
    if (remainder) result.push(remainder);
  
    while(result[result.length - 1] == 0) {
      result.pop();
    }
    
    return result.reverse().join("");
  }
  