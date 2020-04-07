/*****
 * Given two strings s and t , write a function to determine if t is an anagram of s.

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
 * 
 * 
 */

var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    let map = {};

    for (let i = 0; i < s.length; i++) {
        map[s[i]] ? map[s[i]]++ : map[s[i]] = 1
    }

    for (let i = 0; i < t.length; i++) {
        if (map[t[i]]) {
            map[t[i]]--;
        } else {
            return false;
        }

    }
    return true;
}

isAnagram("anagram", "nagaram");
