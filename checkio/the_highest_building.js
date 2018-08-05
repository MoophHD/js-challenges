// https://js.checkio.org/mission/the-highest-building

function highestBuilding(buildings) {
    for (let i = 0; i < buildings.length; i++) {
        let roofs = buildings[i];

        for (let j = 0; j < roofs.length; j++) {
            if (roofs[j] == 1) return [j + 1, buildings.length - i];
        }
    }


    return 0;
}