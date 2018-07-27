//https://js.checkio.org/mission/super-root

function superRoot(number) {
    let from = 1;
    let to = number;
    let medium = (1 + number) * .5;
    let mediumPow = Math.pow(medium, medium);

    while(mediumPow.toFixed(4) != number) {
        if (mediumPow > number) {
            to = medium;
        } else if (mediumPow < number) {
            from = medium;
        }

        medium = (from + to) * .5;
        mediumPow = Math.pow(medium, medium);
    }

    return medium;
}
