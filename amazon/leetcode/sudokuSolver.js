/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solveSudoku = function(board) {
  canSolveFromCell(0,0,board);
  return board;
};

var canSolveFromCell = (row, col, board) => {
  for (let i = row; i < 9; i++, col = 0) {
      for (let j = col; j < 9; j++) {
          if (board[i][j] !== '.') {
              continue;
          }
          for (let val = 1; val <= 9; val++) {

              if (canPlaceValue(i, j, board, val.toString())) {
                  board[i][j] = val.toString();
                  if (canSolveFromCell(i, j+1, board)) {
                      return true;
                  }
                  board[i][j] = '.';
              }
          }
          return false;
      }
  }
  return true;
}

var canPlaceValue = (row, col, board, c) => {
  let rowStart = Math.floor(row/3) * 3;
  let colStart = Math.floor(col/3) * 3;

  for (let i = 0; i < 9; i++) {
      if (board[i][col] === c || board[row][i] === c) {
          return false;
      }
  }

  for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
          if (board[rowStart + i][colStart + j] === c) {
              return false;
          }
      }
  }
  return true;
}
