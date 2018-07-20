// https://js.checkio.org/en/mission/roman-numerals/ 
// reversed, 'cause im dumb lol

const romDec = {
  "I": 1,
  "V": 5,
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
}
// roman to decimal
function romanNumerals(number) {
  let decNumber = 0;
  let lastNum = number[0];

  for ( let i = 1; i < number.length; i++ ) {
    let num = number[i];
    
    let numDec = romDec[num];
    let lastDec = romDec[lastNum];
    // if current number is more or equal to the last one
    // add up VI => 5 + 1
    if ( numDec < lastDec || numDec == lastDec) {
      decNumber += lastDec;
      lastNum = num;
    // if less 
    // substruct IV => 5 - 1
    } else {
      decNumber -= lastDec;
      lastNum = num;
    }
  }
  decNumber += romDec[lastNum];

  return decNumber;
}

romanNumerals("MMMCMXCIX");