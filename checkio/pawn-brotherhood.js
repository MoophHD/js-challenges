// https://js.checkio.org/mission/pawn-brotherhoo

function safePawns(data) {
    return data.filter(p => {
        let l = p[0].charCodeAt(0);
        let n = parseInt(p[1]);
  
        return  data.indexOf(String.fromCharCode(l + 1) + (n - 1)) != -1 || 
                data.indexOf(String.fromCharCode(l - 1) + (n - 1)) != -1
    }).length;
}
