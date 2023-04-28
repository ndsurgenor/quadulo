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
 * Sets up the game by randomly filling the grid with numbers from 1 to 5.
 */
function setupGame() {

    for (cell of cells) {
        let cellValue = Math.floor(Math.random() * 4 + 1);
        cell.innerHTML = cellValue;
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
        newVal = parseInt(currentVal) + parseInt(val); //Calculates new values for cells according to cell selected 

        if (cellColumn === col || cellRow === row) { //Finds all cells in the same column and row as the selected cell 
            newVal > 5 ? cell.innerHTML = newVal - 5 : cell.innerHTML = newVal;
        }
    }
}