/***
 * 
Example 1:
Input:
     1
    /
   2
Output:
[["", "1", ""],
 ["2", "", ""]]

Example 2:
Input:
     1
    / \
   2   3
    \
     4
Output:
[["", "", "", "1", "", "", ""],
 ["", "2", "", "", "", "3", ""],
 ["", "", "4", "", "", "", ""]]

Example 3:
Input:
      1
     / \
    2   5
   / 
  3 
 / 
4 
Output:

[["",  "",  "", "",  "", "", "", "1", "",  "",  "",  "",  "", "", ""]
 ["",  "",  "", "2", "", "", "", "",  "",  "",  "",  "5", "", "", ""]
 ["",  "3", "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]
 ["4", "",  "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]]
 * 
 * 
 */

var printTree = function (root) {

    var height = getHeight(root);
    var width = Math.pow(height, 2) - 1;

    var result = intiAry(height, width);

    fill(root, result, 1, 0, width - 1);

    return result;

    function fill(root, result, level, start, end, ) {
        if (!root) return;

        let mid = Math.floor((start + end) / 2);
        result[level - 1][mid] = root.val.toString();;

        fill(root.left, result, level + 1, start, mid - 1);
        fill(root.right, result, level + 1, mid + 1, end);

    }


    function getHeight(root) {
        if (!root) return 0;
        return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
    }

    function intiAry(height, width) {
        return Array.from({length:height}).map(_ => Array.from({length:width}).map(_ => ""))
    }

};