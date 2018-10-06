//https://js.checkio.org/mission/feed-pigeons/solve/

function pigeons(seeds) {
    let pigeons = "";

    let cycle = 1;
    while(seeds > 0) {
        let seedsAfterElder = seeds - pigeons.length;
        if (seedsAfterElder > 0) {
            if (seedsAfterElder - cycle > 0) {
                pigeons += "p".repeat(cycle);
            } else {
                pigeons += "p".repeat(seedsAfterElder)
            }
        }
        
        seeds -= pigeons.length;

        cycle++;
    }

    return pigeons.length;
}
