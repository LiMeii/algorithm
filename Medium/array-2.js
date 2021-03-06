/**Given a set of candidate numbers (candidates) (without duplicates) and a target number (target), find all unique combinations in candidates where the candidate numbers sums to target.

The same repeated number may be chosen from candidates unlimited number of times.

Note:

All numbers (including target) will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]
Example 2:

Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]
**/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    var result = [];
    var temp = [];
    for (var i = 0; i < candidates.length; i++) {
        if (candidates[i] <= target) {
            var per = target % candidates[i];
            if (per == 0 && target == candidates[i]) {
                result.push([candidates[i]]);
            } else {
                var count = parseInt(target / candidates[i]);
                temp = [];
                if (per == 0) {
                    for (var j = 0; j <= count; j++) {
                        temp.push(candidates[i]);
                    }
                    result.push[temp];
                } else {
                    var index = candidates.indexOf(per);
                    if (index !== -1) {
                        for (var j = 0; j <= count; j++) {
                            temp.push(candidates[i]);
                        }
                        temp.push(candidates[index]);
                    }
                }
            }
        }
    }
    return result;
};