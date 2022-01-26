/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var goodNodes = function(root) {
  let goodNodes = 0;

  let dfs = (node, currVal) => {
      if (!node) {
          return;
      }
      if (node.val >= currVal) {
          goodNodes++;
          currVal = node.val;
      }
      dfs(node.left, currVal);
      dfs(node.right, currVal);
      return goodNodes;
  }
  return dfs(root,-Infinity);
};