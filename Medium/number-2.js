/**
 * 递归乘法。 写一个递归函数，不使用 * 运算符， 实现两个正整数的相乘。可以使用加号、减号、位移，但要吝啬一些。
 * 
 * 
 示例1:

 输入：A = 1, B = 10
 输出：10
示例2:

 输入：A = 3, B = 4
 输出：12
 */

/**
* @param {number} A
* @param {number} B
* @return {number}
*/
var multiply = function (A, B) {
    var min = Math.min(A, B);
    var max = Math.max(A, B);
    if (min === 1) return max;
    return max + multiply(min - 1, max);
};