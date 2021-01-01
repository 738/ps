var maxDepth = function(root) {
    if (root) return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    return 0;
};
