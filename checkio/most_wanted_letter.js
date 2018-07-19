// https://js.checkio.org/mission/most-wanted-letter/

function mostWanted(_data) {
  let data = _data.slice().toLowerCase();
  let glossary = {};

  for ( let i = 0; i < data.length; i++ ) {
    let symbol = data[i];
    // is not an english letter or already registered in the glossary
    if ( symbol.codePointAt(0) < 97 
        || symbol.codePointAt(0) > 122
        || glossary.hasOwnProperty( symbol )) {
      continue;
    }

    let reg = new RegExp(symbol, "g");
    glossary[symbol] = data.match(reg).length;

    // add to the glossar if not already set
    // if (!glossary.hasOwnProperty( symbol )) {
    //   glossary[symbol] = 0;
    // }
    // glossary[symbol] = glossary[symbol] + 1;
  } 

  let maxEntrances = -1;
  let maxLetter = "";
  //iterate through the keys 
  for ( let letter of Object.keys(glossary) ) {
    // has more entrances
    if ( glossary[letter] > maxEntrances ) {
      maxLetter = letter;
      maxEntrances =  glossary[letter];
      // same entrances
    } else if (  glossary[letter] == maxEntrances ) {
      // earlier in the alphabet
      if ( letter.codePointAt(0) < maxLetter.codePointAt(0) ) {
        maxLetter = letter;
      }
    }
  }
  return maxLetter;
}
