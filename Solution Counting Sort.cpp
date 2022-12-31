
#include <vector>
using namespace std;

class Solution {
    
    static const int MAX_NUMBER_OF_STONES_IN_ONE_PILE = 10000;

public:
    //C++20: ... (span<const int> piles, int numberOfOperationsToDo) ...
    int minStoneSum(const vector<int>& piles, int numberOfOperationsToDo) const {
        int numberOfStonesRemaining = 0;

        array<int, MAX_NUMBER_OF_STONES_IN_ONE_PILE + 1 > pilesFrequency{};
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
};
