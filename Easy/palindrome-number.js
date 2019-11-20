
/**
 * 
 *
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 */

var isPalindrome = function (x) {
    var str = String(x).split("").reverse().join("");
    var result = false;
    str == x ? result = true : result = false;
    return result;
};