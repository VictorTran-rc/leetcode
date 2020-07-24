Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

var isValidSudoku = function(board) {
  const map = {};
  
  for (let row = 0; row < 9; row ++) {
    for (let col = 0; col < 9; col ++) {
      const val = board[row][col];
      
      if (val === '.') continue;
      
      const keyRow = `row ${row} has ${val}`;
      const keyCol = `col ${col} has ${val}`;
      const keyBox = `box ${Math.floor(row / 3)}-${Math.floor(col / 3)} has ${val}`;

      if (map[keyRow] || map[keyCol] || map[keyBox]) return false;

      map[keyRow] = true;
      map[keyCol] = true;
      map[keyBox] = true;
    }
  }
  
  return true;
};