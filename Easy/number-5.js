/**
 * 
 * 你正在使用一堆木板建造跳水板。有两种类型的木板，其中长度较短的木板长度为shorter，长度较长的木板长度为longer。你必须正好使用k块木板。编写一个方法，生成跳水板所有可能的长度。

返回的长度需要从小到大排列。

输入：
shorter = 1
longer = 2
k = 3
输出： {3,4,5,6}
 */

/**
* @param {number} shorter
* @param {number} longer
* @param {number} k
* @return {number[]}
*/
var divingBoard = function (shorter, longer, k) {
    var result = [], i = k;
    if (k == 0) return [];
    if (shorter == longer) return [shorter * k];
    if (shorter < longer) {
        while (i >= 0) {
            result.push(shorter * i + longer * (k - i));
            i--;
        }
        return result;
    }

}
