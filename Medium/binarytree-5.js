/****
 * Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its minimum depth = 2.
 * 
 * 
 */

var minDepth = function (root) {
    if (!root) return 0;
    var queue = [{ node: root, deep: 1 }];

    while (queue.length) {
        let current = queue.shift();
        if (!current.node.left && !current.node.right) {
            return current.deep;
        } else {
            if (current.node.left) queue.push({ node: current.node.left, deep: current.deep + 1 });
            if (current.node.right) queue.push({ node: current.node.right, deep: current.deep + 1 });
        }
    }
};


//recursion

var minDepth = function (root) {
    if (!root) return 0;
    var result = Infinity;

    var tree = (node, level) => {
        if (!node.left && !node.right) result = Math.min(result, level);
        if (node.left) tree(node.left, level + 1);
        if (node.right) tree(node.right, level + 1);
    }

    tree(root, 1);

    return result;
}