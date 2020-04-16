/*****
 * 
 * 199. Binary Tree Right Side View

Given a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

Example:

Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
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
 * @return {number[]}
 */
var rightSideView = function (root) {
    var result = [];
    if (!root) return [];

    dfs(root, 0);

    function dfs(node, deep) {
        if (!node) return;
        if (result[deep]) {
            result.push(node.val);
        }
        dfs(node.right, deep + 1);
        dfs(node.left, deep + 1);
    }

    return result;
};

