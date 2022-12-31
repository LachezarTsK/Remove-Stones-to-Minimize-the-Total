
public class Solution {

    private static final int MAX_NUMBER_OF_STONES_IN_ONE_PILE = (int) Math.pow(10, 4);

    public int minStoneSum(int[] piles, int numberOfOperationsToDo) {
        int numberOfStonesRemaining = 0;
        int[] pilesFrequency = new int[MAX_NUMBER_OF_STONES_IN_ONE_PILE + 1];
        for (int pile : piles) {
            ++pilesFrequency[pile];
            numberOfStonesRemaining += pile;
        }

        int stonesInPile = MAX_NUMBER_OF_STONES_IN_ONE_PILE;
        while (stonesInPile > 1 && numberOfOperationsToDo > 0) {
            if (pilesFrequency[stonesInPile] > 0) {
                --numberOfOperationsToDo;
                --pilesFrequency[stonesInPile];

                int numberOfStonesToSubtract = (stonesInPile / 2);
                ++pilesFrequency[stonesInPile - numberOfStonesToSubtract];
                numberOfStonesRemaining -= numberOfStonesToSubtract;
            } else {
                --stonesInPile;
            }
        }

        return numberOfStonesRemaining;
    }
}
