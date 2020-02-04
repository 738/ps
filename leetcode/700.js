/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    let cur = root;
    while (cur) {
        if (val === cur.val) {
            return cur;
        } else if (val < cur.val) {
            cur = cur.left;
        } else {
            cur = cur.right;
        }
    }
    return null;
};
