//https://js.checkio.org/en/mission/bigger-together/

function biggerTogether(ints) {
    ints = ints.sort((_a, _b) => {
        let a = _a.toString();
        let b = _b.toString();
        let diff = a.slice(0, b.length) - b.slice(0, a.length);

        if (diff != 0) return diff;

        let lesser = a.length > b.length ? b : a;
        let lenDiff = Math.abs(a.length - b.length);
        // ( 3, 32 ) => "" || 2
        let m = a.slice(b.length, b.length + lenDiff) || b.slice(a.length, a.length + lenDiff);

        let sign = a > b ? 1 : -1;
        return sign * ((m > lesser) ? 1 : -1);
    })
    return ints.slice().reverse().join("") - ints.join("");
}