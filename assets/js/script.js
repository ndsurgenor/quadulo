document.addEventListener('DOMContentLoaded', function () {

    setupGame(); // intialises game setup

    for (let cell of cells) {
        cell.addEventListener('click', function () {
            // listens for cell click and records its column and row references
            let col = this.getAttribute('data-col');
            let row = this.getAttribute('data-row');
            cellSelect(col, row);

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
        let cellValue = Math.floor(Math.random() * 5 + 1);
        cell.innerHTML = cellValue;

        // This step helps prevent too many 5s appearing in the initial grid
        if (cellValue === 5) {
            let cellValue = Math.floor(Math.random() * 5 + 1);
            cell.innerHTML = cellValue;
        }
    }
}

/**
 * Increases the value of a cell by the value it currently contains.
 * All cells in the same row and column are increased by the same amount.
 * Modular addition is used to prevent an increase beyond 5. 
 */
function cellSelect(col, row) {

    console.log(col, row);

}