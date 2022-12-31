
import java.util.Comparator;
import java.util.PriorityQueue;

class Solution {

    public int minStoneSum(int[] piles, int numberOfOperationsToDo) {
        int numberOfStonesRemaining = 0;
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Comparator.reverseOrder());
        for (int pile : piles) {
            maxHeap.add(pile);
            numberOfStonesRemaining += pile;
        }

        while (numberOfOperationsToDo-- > 0 && maxHeap.peek() > 0) {
            int currentPile = maxHeap.poll();
            int numberOfStonesToSubtract = currentPile / 2;
            numberOfStonesRemaining -= numberOfStonesToSubtract;
            currentPile -= numberOfStonesToSubtract;
            maxHeap.add(currentPile);
        }

        return numberOfStonesRemaining;
    }
}
