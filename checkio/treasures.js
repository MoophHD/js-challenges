// https://js.checkio.org/mission/treasures/

function treasures(info, limit) {
    let pack = {"golden coin": 0, "silver coin": 0, "ruby": 0};

    limit *= 1000;
    let treasureByValue = Object.keys(info)
        .sort((obj1, obj2) => (info[obj2].price / info[obj2].weight) - (info[obj1].price / info[obj1].weight));

    let i = 0;
    while(i < treasureByValue.length && limit > 0) {
        let name = treasureByValue[i];
        let { weight, amount } = info[name];
        let intoPackAmount = Math.min(limit / weight, amount);
        pack[name] = intoPackAmount;

        limit -= intoPackAmount * weight;

        i++;
    }

    return Object.keys(pack).reduce((accu, prevName) => {
        return pack[prevName] > 0 ? [...accu, `${prevName}: ${pack[prevName]}`] : accu;
    }, [])
}
