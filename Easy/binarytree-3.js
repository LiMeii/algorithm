/****
 * 
 * 
Given a binary search tree (BST) with duplicates, find all the mode(s) (the most frequently occurred element) in the given BST.

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.
 * 


 For example:
Given BST [1,null,2,2],

   1
    \
     2
    /
   2
 

return [2].

Note: If a tree has more than one mode, you can return them in any order.

Follow up: Could you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).
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

// 映入map，暴力递归所有节点
var findMode = function (root) {
    var max = -Infinity, map = {}, result = [];

    var tree = node => {
        if (!node) return;
        map[node.val] = (map[node.val] || 0) + 1;
        if (map[node.val] > max) max = map[node.val];
        tree(node.left);
        tree(node.right);
    }
    tree(root);

    Object.keys(map).forEach(e => {
        map[e] === max ? result.push(e) : "";
    });

    return result;
};

// 中序遍历

var findMode = function (root) {
    var max = -Infinity, pre = null, count = 1, result = [];

    var tree = node => {
        if (!node) return;

        tree(node.left);

        if (pre) {
            count = pre.val === node.val ? count + 1 : 1;
        }
        if (count >= max) {
            count > max ? result = [] : "";
            result.push(node.val);
            max = count;
        }

        pre = node;

        tree(node.right);
    }

    tree(root);

    return result;
};