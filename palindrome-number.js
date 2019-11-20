var isPalindrome = function (x) {
    var str = String(x).split("").reverse().join("");
    var result = false;
    str == x ? result = true : result = false;
    return result;
};