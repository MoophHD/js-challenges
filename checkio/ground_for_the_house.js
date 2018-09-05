// https://js.checkio.org/mission/ground-for-the-house/

function house(plan) {
    if (plan[0] == "\n") plan = plan.slice(1);
    let getFirstHash = p => {for (let i = 0; i < p.length; i++) if (p[i].indexOf("#") != -1) return i};
    plan = plan.split("\n");
    plan = plan.slice(getFirstHash(plan));
    plan.reverse();
    plan = plan.slice(getFirstHash(plan));

    let reversedPlan = plan.slice();
    for (let y = 0; y < plan.length; y++) {
        for (let x = 0, rowLen = plan[0].length; x < rowLen; x++) {
            if (!reversedPlan[x]) reversedPlan[x] = [];
            console.log(reversedPlan);
            reversedPlan[x][y] = plan[y][x];
        }
    }
    reversedPlan = reversedPlan.slice(getFirstHash(reversedPlan));
    reversedPlan.reverse();
    reversedPlan = reversedPlan.slice(getFirstHash(reversedPlan));

    return reversedPlan.length * reversedPlan[0].length;
}
