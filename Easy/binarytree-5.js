/****
 * get deepest level of binary tree.
 * 
 */

var getDeepdestLevel = function (root) {

    if (!node) return 0;

    let left = getDeepdestLevel(node.left);
    let right = getDeepdestLevel(node.right);

    return Math.max(left, right) + 1;


}