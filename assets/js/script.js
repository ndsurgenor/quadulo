document.addEventListener('DOMContentLoaded', function () {

    setupGame();

});

/**
 * Sets up the game by randomly filling the grid with numbers from 1 to 5.
 */
function setupGame() {
    
    let grid = document.getElementById('game-area');
    let cells = grid.children;

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

function cellSelect(row, col) {
    
}