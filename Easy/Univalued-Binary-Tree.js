/****
 * 
 * A binary tree is univalued if every node in the tree has the same value.

Return true if and only if the given tree is univalued.

example1:
     1
   /   \
  1     1
 / \   / \
1  1      1

Input: [1,1,1,1,1,null,1]
Output: true

example2:

     2
   /   \
  2     2
 / \ 
 5  2
Input: [2,2,2,5,2]
Output: false
 
 */

/** 
* Definition for a binary tree node.
* function TreeNode(val) {
*     this.val = val;
*     this.left = this.right = null;

*/

/**
* @param {TreeNode} root
* @return {boolean}
*/
var isUnivalTree = function (root) {
    if (root === null) return true;
    if (root.left !== null && root.left.val !== root.val) return false;
    if (root.right !== null && root.right.val !== root.val) return false;

    return isUnivalTree(root.left) && isUnivalTree(root.right);
}
