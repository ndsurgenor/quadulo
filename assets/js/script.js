document.addEventListener('DOMContentLoaded', function () {
    
    setupGame();

});

function setupGame() {

    let grid = document.getElementById('game-area');
    let cells = grid.children;    

    for (cell of cells) {
        let cellValue = Math.floor(Math.random() * 4 + 1);
        cell.innerHTML = cellValue;
    }
}