/*
backtracking + trie without pruning
*/

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
 var findWords = function(board, words) {
  let res = [];
  let root = buildTrie(words);

  var backtrack = function (node, r, c) {
      /* base case: when we hit the leaf */
      if (!node) {
          return;
      }
      if (node.end) {
          res.push(node.end);
          node.end = null;
      }
      if (r < 0 || r >= board.length || c < 0 || c >= board[0].length) {
          return;
      }

      /* start exploration */
      let letter = board[r][c];
      board[r][c] = '#';
      let dirs = [[-1,0],[0,1],[1,0],[0,-1]];
      for (let [i, j] of dirs) {
          backtrack(node[letter],i+r, j+c);
      }
      /* end exploration */
      board[r][c] = letter;
  }


  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
          if (root[board[i][j]]) {
              backtrack(root, i, j)
          }
      }
  }
  return res;
};


var buildTrie = function(words) {
  let root = {};

  for (let word of words) {
      let curr = root;
      for (let char of word) {
          if (!curr[char]) {
              curr[char] = {};
          }
          curr = curr[char];
      }
      curr.end = word;
  }
  return root;
}