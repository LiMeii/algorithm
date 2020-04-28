/*
问题：一步可以爬1、2或3级台阶，问爬n级台阶有多少种走法
递推式：f(n)=f(n-1)+f(n-2)+f(n-3) 
1、假设爬到n-1级，向上一次走一级即可，所以有f(n-1)种走法 
2、假设爬到n-2级，向上一次走两级即可，所以有f(n-2)种走法 
3、假设爬到n-3级，向上一次走三级即可，所以有f(n-3)种走法 
以上三种情况是不懂得，所以总走法为以上三种情况之和
为什么包含了n-4的情况，因为最多一次走3级，n-4走1,2或3级分别对应以上三种情况，已经计算在内了 
*/

function climbStaris(n) {
    if (n == 0) {
        return 0;
    }
    else if (n == 1) {
        return 1;
    }
    else if (n == 2) {
        return 2;
    }
    else if (n == 3) {
        return 4
    }
    else {

        return climbStaris(n - 1) + climbStaris(n - 2); + climbStaris(n - 3);;
    }
}

climbStaris(5);

/**
 * 
一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。

答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

示例 1：

输入：n = 2
输出：2
示例 2：

输入：n = 7
输出：21
提示：

0 <= n <= 100
 * 
 */


/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
    if (n == 1) return 1;
    if (n == 2) return 2;

    var n1 = 1, n2 = 2, n3 = 1;
    for (let i = 3; i <= n; i++) {
        n3 = (n1 + n2) % 1000000007;
        n1 = n2;
        n2 = n3;

    }

    return n3;
}

/**
 * 泰波那契序列 Tn 定义如下： 

T0 = 0, T1 = 1, T2 = 1, 且在 n >= 0 的条件下 Tn+3 = Tn + Tn+1 + Tn+2

给你整数 n，请返回第 n 个泰波那契数 Tn 的值。

示例 1：

输入：n = 4
输出：4
解释：
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4
示例 2：

输入：n = 25
输出：1389537

 */

// 暴力递归，会超时
var tribonacci = function (n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    if (n == 2) return 1;
    return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);

}

// 枚举
var tribonacci = function (n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    if (n == 2) return 1;

    var n0 = 0, n1 = 1; n2 = 1, n3 = 0;

    for (let i = 3; i <= n; i++) {
        n3 = n0 + n1 + n2;
        n0 = n1;
        n1 = n2;
        n2 = n3;
    }

    return n3;
}