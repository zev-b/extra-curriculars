/**
 * Example: input = [5, 3, 6, 2, 4, null, null, 1]
 * 
 *              5
 *             / \
 *            3   6
 *           / \
 *          2   4
 *         /
 *        1 
 */

const kthSmallest = (root, k) => {
    const inOrder = [];
    dfs(root, inOrder);
    return inOrder[k - 1];
}

const dfs = (node, k, inOrder) => {
    if (!node) return;
    dfs(node.left, k, inOrder);
    inOrder.push(node.val);
    dfs(node.right, inOrder);
}


/**
 * Validate Binary Search Tree
 * [ ALL left subtree(s) nodes are less than, All right subtree(s) are greater than. ]
 * 
 *          5
 *         / \
 *        3   7
 *           / \
 *          4   8
 * 
 *  ans: false (Not Valid)
 * 
 * Approach Use recursive DFS and keep track of the max and min that ea node must obey in order for the tree to be valid.
 */

