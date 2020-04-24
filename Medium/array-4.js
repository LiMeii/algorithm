/***
Given a binary tree, return the sum of values of its deepest leaves.
 */

var deepestLeavesSum = function (root) {
    var sum = 0, deepestLevel = 0;


    var tree = (node, level) => {
        if (!node) return;

        if (level == deepestLevel) {
            sum += node.val;
        }
        if (level > deepestLevel) {
            deepestLevel = level;
            sum = node.val;
        }

        tree(node.left, level + 1);
        tree(node.right, level + 1);

    }
    tree(root, 0);

    return sum;
};