/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    let queue = [];
    queue.push(root);
    let sum = 0;
    while (queue.length > 0) {
        sum = 0;
        let len=queue.length;
        for (let i=0; i<len; i++) {
            let node = queue.shift();
            sum += node.val;
            if (node.left != null) queue.push(node.left);
            if (node.right != null) queue.push(node.right);
        }
    }
    return sum;
};
