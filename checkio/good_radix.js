// https://js.checkio.org/mission/good-radix

function goodRadix(number){
  const MAX_RADIX = 36;
  let guessFrom = Math.max(...number.split("").map(n => parseInt(n, MAX_RADIX)));

  for (let i = guessFrom; i <= MAX_RADIX; i++) {
    let nDec = parseInt(number, i);
  
    if ((nDec / (i - 1)) % 1 == 0) return i;
  }

  return 0;
}