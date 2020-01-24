// chessBoardCellColor codesignal

function chessBoardCellColor(cell1, cell2) {
  cells = [cell1, cell2];
  colors = [];
  // if the first char is % 2 === 1, and the second int is % 2 === 1 then it's brown
  // if the first char is % 2 === 0, and the secondn int is % 2 === 0 then it's brown
  cells.forEach(function(cell) {
    if (
      (cell.charCodeAt(0) % 2 === 1 && cell[1] % 2 === 1) ||
      (cell.charCodeAt(0) % 2 === 0 && cell[1] % 2 === 0)
    ) {
      colors.push(true);
    } else {
      colors.push(false);
    }
  });
  return colors.every(v => v === colors[0]);
}

// someone elses solution

//Get the color (0=black, 1=white) for a given cell
var color = s => (Buffer(s)[0] - s[1]) % 2;

var chessBoardCellColor = (a, b) => color(a) == color(b);
