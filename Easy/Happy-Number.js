/*****
 * 
 * Write an algorithm to determine if a number n is "happy".

A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

Return True if n is a happy number, and False if not.

Example: 

Input: 19
Output: true
Explanation: 
1*1 + 9*9 = 82
8*8 + 2*2 = 68
6*6 + 8*2 = 100
1*1 + 0*0 + 0*0 = 1
 */

var isHappy = function (n, hist = []) {

    let chars = n.toString().split('');

    let sum = chars.reduce((arr, current) => arr + current * current, 0);
    if (sum === 1) return true;
    if (hist.hasOwnProperty(sum)) return false;
    else {
        hist[sum] = true;
        return isHappy(sum, hist);
    }

};
