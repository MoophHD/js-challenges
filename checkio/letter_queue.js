//  https://js.checkio.org/mission/letter-queue/

function letterQueue(commands){
    let str = [];

    commands.forEach(c => {
      if (c.indexOf("PUSH") != -1) {
        str.push(c.split(" ")[1]);
      } else if (c.indexOf("POP") != -1) {
        str.shift();
      }
    })

    return str.join("");
}