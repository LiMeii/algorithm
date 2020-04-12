/**翻转一棵二叉树。

示例：

输入：

     4
   /   \
  2     7
 / \   / \
1   3 6   9
输出：

     4
   /   \
  7     2
 / \   / \
9   6 3   1*
 * 
 * 
 */


var invertTree = function (root) {
    if (root === null) {
        return null;
    } else {
        var temp = invertTree(root.left);
        root.left = invertTree(root.right);
        root.right = temp
    }
    return root;
}