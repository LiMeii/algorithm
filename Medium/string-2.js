/***
 * 
 * 
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"
 * 
 */

/**
* @param {string} s
* @return {string}
*/

// 暴力枚举
var longestPalindrome = function (s) {

    function isPalindrome(str) {
        var len = str.length
        var middle = parseInt(len / 2)
        for (var i = 0; i < middle; i++) {
            if (str[i] != str[len - i - 1]) {
                return false
            }
        }
        return true
    }
    var ans = '';
    var max = 0;
    var len = s.length
    for (var i = 0; i < len; i++) {
        for (var r = i + 1; r <= len; r++) {
            var tmpStr = s.substring(i, r)
            if (isPalindrome(tmpStr) && tmpStr.length > max) {
                ans = s.substring(i, r)
                max = tmpStr.length;
            }
        }
    }
    return ans;

};

// 中心扩展
var longestPalindrome = function(s) {
    if(!s || s.length < 2){
        return s;
    }
    let start = 0,end = 0;
    let n = s.length;
    // 中心扩展法
    let centerExpend = (left,right) => {
        while(left >= 0 && right < n && s[left] == s[right]){
            left--;
            right++;
        }
        return right - left - 1;
    }
    for(let i = 0;i < n;i++){
        let len1 = centerExpend(i,i);
        let len2 = centerExpend(i,i+1);
        // 两种组合取最大回文串的长度
        let maxLen = Math.max(len1,len2);
        if(maxLen > end - start){
            // 更新最大回文串的首尾字符索引
            start = i - ((maxLen - 1) >> 1);
            end = i + (maxLen >> 1);
        }
    }
    return s.substring(start,end+1);
};