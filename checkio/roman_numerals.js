// https://js.checkio.org/en/mission/roman-numerals/ 

function romanNumerals( _number ) {
  let roman = "";
  let number = new Number(_number);
  // [...100, 50, 10...]
  let numAnchors = Object.keys(decRom).sort((a,b) => b - a);
  
  for ( let i = 0; i < numAnchors.length; i++ ) {
    let denominator = numAnchors[i];
    let upperDenominator = i - 1 > -1 ? numAnchors[i - 1] : numAnchors[0];
    let lowerDenominator = i + 1 < numAnchors.length ? numAnchors[i + 1] : -1;
    let denEnters =  ~~( number / denominator );
    // if lower enters == 9 => skip
    if ( lowerDenominator.toString()[0] == 1 && ~~( number / lowerDenominator ) == 9 ) {
      continue;
    }
    //  else if ( denEnters == 9) {
    //     // I X 
    //     roman = roman + decRom[denominator] + decRom[numAnchors[i - 2]];
    //   }

    if  ( denEnters > 0 ) {
      // not LXL ( 50 + 50 - 10 ) but XC ( 100 - 10 )
      if ( denEnters == 9 ) {
        roman = roman + decRom[denominator] + decRom[numAnchors[i - 2]];
      // I, II, III but not IIII ( an exception for thousands )
      } else if ( denEnters < 4 || denominator == 1000 ) {
        roman += decRom[denominator].repeat(denEnters);

      // up on 1 lvl, 50 => 100 || 10 => 50
      } else {
        roman = roman + decRom[denominator] + decRom[upperDenominator];
      } 
    number = number % denominator;
  }
}

  return roman;
}