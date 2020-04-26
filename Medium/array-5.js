/***
 * 
 * Given an array of integers nums and a positive integer k, find whether it's possible to divide this array into sets of k consecutive numbers
Return True if its possible otherwise return False.

Example 1:

Input: nums = [1,2,3,3,4,4,5,6], k = 4
Output: true
Explanation: Array can be divided into [1,2,3,4] and [3,4,5,6].
Example 2:

Input: nums = [3,2,1,2,3,4,3,4,5,9,10,11], k = 3
Output: true
Explanation: Array can be divided into [1,2,3] , [2,3,4] , [3,4,5] and [9,10,11].
Example 3:

Input: nums = [3,3,2,2,1,1], k = 3
Output: true
Example 4:

Input: nums = [1,2,3,4], k = 3
Output: false
Explanation: Each array should be divided in subarrays of size 3.
 */

var isPossibleDivide = function (nums, k) {
    var map = {}, sortArray = [];

    if (nums % k) return false;

    sortArray = nums.sort((a, b) => a - b);

    sortArray.forEach(e => {
        map[e] = (map[e] || 0) + 1;
    });

    for (let i = 0; i < sortArray.length; i++) {
        let key = sortArray[i];
        if (!map[key]) continue;
        for (let j = 1; j < k; j++) {
            if (map[key] > map[key + j] || !map[key + j]) {
                return false;

            } else {
                map[key + j] = map[key + j] - map[key];
            }
        }
        map[key] = 0;
    }
    return true;
};

isPossibleDivide([3, 3, 2, 2, 1, 1], 3)