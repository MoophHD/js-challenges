// https://js.checkio.org/en/mission/long-repeat/

function longRepeat(line) {
  let maxStreak = -1;

  let lastSymbol = "";
  let lastStreak = 0;

  for ( let i = 0; i < line.length; i++ ) {
    let symbol = line[i];
    // the same symbol
    if ( symbol == lastSymbol ) {
      lastStreak++;
    } else {
      if ( lastStreak > maxStreak ) maxStreak = lastStreak;
      lastStreak = 1;
      lastSymbol = symbol;
    }
  }

  if ( lastStreak > maxStreak ) maxStreak = lastStreak;
  
  return maxStreak;
}