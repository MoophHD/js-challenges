//https://js.checkio.org/en/mission/repeating-decimals/

function convert(num, den) {
    //:) kmp
    //  wont work if > 16 digits after comma is required 'cause js would give wrong numbers if toFixed > 16
    let n1 = ~~(num / den);
    let n2 = "";
    
    let elli = (num / den - n1).toFixed(50).slice(2).slice(0, -1);
    let anchor = "";
    for (let i = 0; i < elli.length; i++) {
      let a = elli[i];
      // a unique symbol
      if (anchor.length == 0 && elli.indexOf(a) == elli.lastIndexOf(a)) {
        n2 += a;
        elli = elli.slice(1);
        i--;
        
        continue;
      }
      
      if (a == anchor[0]) {
        // check if repeats exactly
        // slice (12312312 => 123123)
        // split by anchor (123123 => ["",""])
        // join and check the length
        if (elli.slice(0, anchor.length * ~~(elli.length / anchor.length)).split(anchor).join("").length == 0) {
          if (anchor != "0") n2 += `(${anchor})`;
          break;
        } else {
          anchor += a;
        }
      } else {
        anchor += a;
      }
      
      if (i == elli.length - 1) {
        n2 += anchor;
      }
      
    }
  
  return `${n1}.${n2}`;
}

