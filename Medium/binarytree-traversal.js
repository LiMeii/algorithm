// 中序遍历， left -> root->right

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
var inorderTraversal = function (root) {
    var result = [];

    var tree = node => {
        if (!node) return;
        tree(node.left);
        result.push(node.val);
        tree(node.right);
    }

    tree(root);
    return result;

};

// 前续遍历， root->left->right
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
var preorderTraversal = function (root) {
    var result = [];

    var tree = node => {
        if (!node) return;
        result.push(node.val)
        tree(node.left);
        tree(node.right);
    }
    tree(root);

    return result;

};

//N叉树的前序遍历
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    var result =[];

    var tree = node =>{
        if(!node) return;
        result.push(node.val);
        node.children.map(child=>tree(child));
    }
    tree(root);
    return result;
};

//N叉树的后序遍历

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    var reuslt =[];

    var tree = node =>{
        if(!node) return;
        node.children.map(child=>tree(child));
        reuslt.push(node.val);
    }
    tree(root);
    return reuslt;
};