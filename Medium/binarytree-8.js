/**
 * 给定一个二叉树，在树的最后一行找到最左边的值。

示例 1:

输入:

    2
   / \
  1   3

输出:
1
 

示例 2:

输入:

        1
       / \
      2   3
     /   / \
    4   5   6
       /
      7

输出:
7
 
注意: 您可以假设树（即给定的根节点）不为 NULL。

 */


/**
* Definition for a binary tree node.
* function TreeNode(val) {
*     this.val = val;
*     this.left = this.right = null;
* }
*/
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findBottomLeftValue = function (root) {
    var res = [];

    var tree = (node, level) => {
        if (!node) return;
        res[level] = node.val;
        tree(node.right, level + 1);
        tree(node.left, level + 1);
    }

    tree(root, 0);

    return res.pop();

};