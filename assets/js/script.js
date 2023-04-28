document.addEventListener('DOMContentLoaded', function () {

    setupGame(); // intialises game setup

    for (let cell of cells) {
        cell.addEventListener('click', function () {
            // listens for cell click and records its column, row, and value
            let col = this.getAttribute('data-col');
            let row = this.getAttribute('data-row');
            let val = cell.innerHTML;
            cellSelect(col, row, val);

        });
    }
});

let grid = document.getElementById('game-area');
let cells = grid.children;

/**
 * Sets up the game by randomly filling the grid with numbers from 0 to 2. 
 */
function setupGame() {

    for (cell of cells) {
        let cellVal = Math.floor(Math.random() * 3); //'5' is not included at setup to prevent an easy win-state
        cell.innerHTML = cellVal;

        cellStyle(cellVal);
    }
}

/**
 * Increases the value of a cell by the value it currently contains.
 * All cells in the same row and column are increased by the same amount.
 * Modular addition is used to prevent an increase beyond 5. 
 */
function cellSelect(col, row, val) {

    for (cell of cells) {

        let cellColumn = cell.getAttribute('data-col');
        let cellRow = cell.getAttribute('data-row');
        let currentVal = cell.innerHTML;

        if (cellColumn === col || cellRow === row) { //Finds all cells in the same column and row as the selected cell 
            newVal = parseInt(currentVal) + parseInt(val); //Calculates new values for cells according to cell selected
            newVal > 5 ? cell.innerHTML = newVal - 5 : cell.innerHTML = newVal; //Uses modular sum to keep range as 1-5

            cellVal = cell.innerHTML;
            cellStyle(cellVal);
        }
    }

    checkWin();
}

/**
 * Styles the cell according to its value.
 */
function cellStyle(cellVal) {

    if (cellVal == 0) {
        cell.style.color = 'lightblue';
    } else {
        cell.style.color = 'whitesmoke';
    }

    if (cellVal == 1) {
        cell.style.backgroundColor = 'crimson';
    } else if (cellVal == 2) {
        cell.style.backgroundColor = 'darkorange';
    } else if (cellVal == 3) {
        cell.style.backgroundColor = 'forestgreen';
    } else if (cellVal == 4) {
        cell.style.backgroundColor = 'royalblue';
    } else if (cellVal == 5) {
        cell.style.backgroundColor = 'rebeccapurple';
    }
}

/**
 * Checks to see if the user has won the game.
 * The game is won by having five 5s in any column/row
 */
function checkWin() {

}