
/**
 * @param {number[]} piles
 * @param {number} numberOfOperationsToDo
 * @return {number}
 */
var minStoneSum = function (piles, numberOfOperationsToDo) {
    const MAX_NUMBER_OF_STONES_IN_ONE_PILE = Math.pow(10, 4);
    let numberOfStonesRemaining = 0;
    const pilesFrequency = new Array(MAX_NUMBER_OF_STONES_IN_ONE_PILE + 1).fill(0);
    for (let pile of piles) {
        ++pilesFrequency[pile];
        numberOfStonesRemaining += pile;
    }

    let stonesInPile = MAX_NUMBER_OF_STONES_IN_ONE_PILE;
    while (stonesInPile > 1 && numberOfOperationsToDo > 0) {
        if (pilesFrequency[stonesInPile] > 0) {
            --numberOfOperationsToDo;
            --pilesFrequency[stonesInPile];

            let numberOfStonesToSubtract = Math.floor(stonesInPile / 2);
            ++pilesFrequency[stonesInPile - numberOfStonesToSubtract];
            numberOfStonesRemaining -= numberOfStonesToSubtract;
        } else {
            --stonesInPile;
        }
    }

    return numberOfStonesRemaining;
};
