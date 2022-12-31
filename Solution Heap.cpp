
#include <queue>
#include <vector>
using namespace std;

class Solution {
    
public:
    //C++20: ... (span<const int> piles, int numberOfOperationsToDo) ...
    int minStoneSum(const vector<int>& piles, int numberOfOperationsToDo) const {
        int numberOfStonesRemaining = 0;
        priority_queue<int> maxHeap;
        for (int pile : piles) {
            maxHeap.push(pile);
            numberOfStonesRemaining += pile;
        }

        while (numberOfOperationsToDo-- > 0 && maxHeap.top() > 0) {
            int currentPile = maxHeap.top();
            maxHeap.pop();
            int numberOfStonesToSubtract = currentPile / 2;
            numberOfStonesRemaining -= numberOfStonesToSubtract;
            currentPile -= numberOfStonesToSubtract;
            maxHeap.push(currentPile);
        }

        return numberOfStonesRemaining;
    }
};
