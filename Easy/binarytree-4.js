/****
 * 
 * 判断一颗二叉树，是不是BST.
 */

var isBinarySearchTree = function (root) {

    // 中序遍历

    var ary = [];
    var tree = node => {
        if (!node) return;

        tree(node.left);

        ary.push(node.val);

        tree(node.right);
    }
    tree(root);

    for (let i = 0; i < ary.length - 1; i++) {
        if (ary[i] >= ary[i + 1]) return false;
    }

    return true;
}