// https://js.checkio.org/en/mission/the-ship-teams/

function twoTeams(sailors) {
    return [
        Object.keys(sailors).filter(s => sailors[s] < 20 || sailors[s] > 40).sort(),
        Object.keys(sailors).filter(s => sailors[s] >= 20 && sailors[s] <= 40).sort(),
    ];
}