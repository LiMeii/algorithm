
/**
 * 
 *
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 */

var longestCommonPrefix = function (strs) {
    var commonPrefix = "";
    if (!strs.length) {
        commonPrefix = "";
    } else if (strs.length === 1) {
        commonPrefix = strs[0];
    } else {
        for (var j = 0; j < strs[0].length; j++) {
            let isSame = false;
            for (var i = 1; i < strs.length; i++) {
                if (!strs[i][j] || strs[0][j] !== strs[i][j]) {
                    isSame = false;
                    break;
                }
                if (strs[i][j] && strs[0][j] === strs[i][j]) {
                    isSame = true;
                }
            }
            if (isSame) {
                commonPrefix = commonPrefix + strs[0][j];
            } else {
                break;
            }
        }
    }
    return commonPrefix;
};

longestCommonPrefix(["aca", "cba"]);