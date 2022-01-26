/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function(n) {
  let validBoards = [];
  solve(0, n, [], validBoards);
  return validBoards;
};

var solve = (row, n, colPlacements, validBoards) => {
  /* base case */
  if (row === n) {

      validBoards.push(generateBoardFromPlacements(colPlacements,n));
      return;
  }
  for (let col = 0; col < n; col++) {
      colPlacements.push(col);
      if (isValid(colPlacements)) {
          solve(row + 1, n, colPlacements, validBoards);
      }
      colPlacements.pop();
  }
}

var isValid = (colPlacements) => {
  let currRow = colPlacements.length - 1;

  /* check placements of Qs on previous row */
  for (let ithQ = 0; ithQ < currRow; ithQ++) {
      let absColDist = Math.abs(colPlacements[ithQ] - colPlacements[currRow]);
      let absRowDist = Math.abs(ithQ - currRow);

      if (absColDist === 0 || (absColDist === absRowDist)) {
          return false;
      }
  }
  return true;
}

var generateBoardFromPlacements = (colPlacements,n) => {
  let board = [];
  let totalItemsPlaced = colPlacements.length;

  for (let row = 0; row < totalItemsPlaced; row++) {
      let str = "";
      for (let col = 0; col < n; col++) {
          if (col === colPlacements[row]) {
              str += 'Q';
          } else {
              str += '.';
          }
      }
      board.push(str);
  }
  return board;
}
