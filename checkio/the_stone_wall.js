// https://js.checkio.org/mission/the-stone-wall

function stoneWall(wall) {
    let horizontalWall = [];
    wall = wall.split("\n");
    for (let i = 0; i < wall.length; i++) {
        let row = wall[i];
        for (let j = 0; j < row.length; j++) {
            if (!horizontalWall[j]) horizontalWall[j] = '';
            horizontalWall[j] += row[j];
        }
    }

    let narrowest = -1;
    let maxHoles = -1;
    horizontalWall.forEach((wall, i) => {
        let wallHoles = /0/.test(wall) ? wall.match(/0/g).length : 0;
        if (wallHoles > maxHoles) {
            narrowest = i;
            maxHoles = wallHoles;
        }
    })

    return narrowest;
}