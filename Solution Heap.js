
//const {PriorityQueue} = require('@datastructures-js/priority-queue');
/**
 * @param {number[]} piles
 * @param {number} numberOfOperationsToDo
 * @return {number}
 */
var minStoneSum = function (piles, numberOfOperationsToDo) {
    let numberOfStonesRemaining = 0;
    const maxHeap = new MaxPriorityQueue({compare: (x, y) => y - x});
    for (let pile of piles) {
        maxHeap.enqueue(pile);
        numberOfStonesRemaining += pile;
    }

    while (numberOfOperationsToDo-- > 0 && maxHeap.front() > 0) {
        let currentPile = maxHeap.dequeue();
        let numberOfStonesToSubtract = Math.floor(currentPile / 2);
        numberOfStonesRemaining -= numberOfStonesToSubtract;
        currentPile -= numberOfStonesToSubtract;
        maxHeap.enqueue(currentPile);
    }

    return numberOfStonesRemaining;
};
