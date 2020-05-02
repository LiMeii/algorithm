/**
 * 给定一个二叉树，检查它是否是镜像对称的。

 

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。

    1
   / \
  2   2
 / \ / \
3  4 4  3
 

但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:

    1
   / \
  2   2
   \   \
   3    3

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
 * @return {boolean}
 */

// 递归
var isSymmetric = function (root) {
    if (!root) return true;

    var tree = (left, right) => {
        if (!left && !right) return true;
        if (!left || !right) return false;

        return left.val === right.val && tree(left.left, right.right) && tree(left.right, right.left);
    }

    return tree(root.left, root.right);

}

// bfs
var isSymmetric = function (root) {

    var queue = [];
    if (!root) return true;
    queue.push(root.left, root.right);

    while (queue.length) {
        let left = queue.shift();
        let right = queue.shift();

        if (!left && !right) continue;
        if (!left || !right) return false;
        if (left.val !== right.val) return false;

        queue.push(left.left);
        queue.push(right.right);

        queue.push(left.right);
        queue.push(right.left);

    }

    return true;
}