document.addEventListener('DOMContentLoaded', function () {

    setupGame();

    // Listens for which cell has been clicked
    for (let cell of cells) {
        cell.addEventListener('click', function () {

            let col = this.getAttribute('data-col');
            let row = this.getAttribute('data-row');
            let cellMarker = col + row;
            let val = cell.innerHTML;

            //NB Banner messages should be 30 characters or fewer to fit comfortably on screen
            if (endCheck == 16) { //No possible moves left
                banner.innerHTML = `<p>Click 'New Game' to start over</p>`;
            } else if (val == 0 || cellsUnavailable.includes(cellMarker)) { //Empty or grayed-out cell selected
                banner.innerHTML = `<p>Block unavailable. Select a <span id="next">${req}</span></p>`;
                bannerStyle(req);
            } else if (val != req) { //Incorrect value selected
                banner.innerHTML = `<p>Next number must be <span id="next">${req}</span></p>`;
                bannerStyle(req);
            } else {
                cellSelect(col, row, val); //Required value selected
                if (endCheck == 16) {
                    banner.innerHTML = `<p><span id="next">${req}</span> unavailable: GAME OVER</p>`;
                } else {
                    endCheck = 0;
                    banner.innerHTML = `<p>Next <span id="next">${req}</span></p>
                                    <p>Limit <span id="limit">${lim}</span></p>`;
                }
                bannerStyle(req);
            }
        });
    }
});

let banner = document.getElementById('banner'); //Targets the info banner
let grid = document.getElementById('game-area'); //Targets the 4x4 grid 
let cells = grid.children; //Targets the 16 divs within the 4x4 grid
let levelNum = document.getElementById('level'); //Targets the level counter
let blocksNum = document.getElementById('blocks'); //Targets the block counter

let cellsUnavailable = []; //Array used to keep track of selected cells 
let setupCheck; //Variable used to ensure correct setup at game launch
let endCheck; //Variable used to determine if the player is out of moves
let req; //Variable used to ensure cells are selected in the correct order
let lim; //Variable used to set upper value of cells
let lev; //Variable used to track game level
let bloc; //Variable used to track number of blocks cleared

/**
 * Sets up the initial game state. 
 */
function setupGame() {

    //Sets variables to intial values
    cellsUnavailable = [];
    req = 1;
    lim = 5;
    lev = 1;
    bloc = 0;
    endCheck = 0;

    do {
        setupCheck = 0; //Resets check count        
        for (cell of cells) {

            let cellRef = 0; //Ensures no cells are greyed out during setup
            let cellVal = Math.floor(Math.random() * 2);
            cell.innerHTML = cellVal; //Fills cells with values of 0 or 1
            setupCheck = setupCheck + cellVal;

            bannerStyle(req);
            cellStyle(req, cellVal, cellRef);
        }
    } while (setupCheck < 7 || setupCheck > 14); //Prevents a no-win or almost filled grid
}

/**
 * Increases the value of a cell by the value it currently contains.
 * All cells in the same row and column are increased by the same amount.
 * NB: if (val == 1) and if (val == 4) MUST be placed at the top and
 * bottom of the function respectively in order to operate correctly.
 */
function cellSelect(col, row, val) {

    //Resets grayed-out cells when a 1 is clicked
    if (val == 1) {
        cellsUnavailable = [];
    }

    let cellMarker = col + row;
    cellsUnavailable.push(cellMarker); //Makes selected cell unavailable
    req == 4 ? req = 1 : req = req + 1;
    bloc = bloc + 1;
    blocksNum.innerHTML = bloc < 10 ? '0' + bloc : bloc;

    for (cell of cells) {
        let cellColumn = cell.getAttribute('data-col');
        let cellRow = cell.getAttribute('data-row');
        let cellRef = cellColumn + cellRow;
        let currentVal = cell.innerHTML;

        if (cellColumn === col || cellRow === row) { //Finds all cells in the same column and row as the selected cell                              
            newVal = parseInt(currentVal) + parseInt(val); //Calculates new values for cells according to cell selected
            newVal > lim ? cell.innerHTML = newVal - lim : cell.innerHTML = newVal; //Uses modular sum to lim as upper value                       
        }

        cellVal = cell.innerHTML;
        cellStyle(req, cellVal, cellRef);

        if (cellVal != req || cellsUnavailable.includes(cellRef)) {
            endCheck = endCheck + 1;
        }
    }

     //Increases level and limit (max 9) every 16 blocks cleared
    if (val == 4 && bloc % 16 == 0) {
        lev = lev + 1;
        levelNum.innerHTML = lev < 10 ? '0' + lev : lev;
        lim < 9 ? lim = lim + 1 : lim = 9;
    }
}

/**
 * Styles the banner according to the next required value.
 */
function bannerStyle(req) {
    let nextVal = document.getElementById('next');

    if (req == 1) {
        nextVal.style.background = 'crimson';
    } else if (req == 2) {
        nextVal.style.background = 'darkorange';
    } else if (req == 3) {
        nextVal.style.background = 'forestgreen';
    } else if (req == 4) {
        nextVal.style.background = 'royalblue';
    }
}

/**
 * Styles the cell according to its value and
 * whether or not it has already been selected. 
 */
function cellStyle(req, cellVal, cellRef) {

    // Sets cursor style
    if (cellVal != req) {
        cell.style.cursor = 'not-allowed';
    } else {
        cell.style.cursor = 'pointer';
    }

    // Sets text color
    if (cellVal == 0) {
        cell.style.color = 'lightblue';
    } else {
        cell.style.color = 'whitesmoke';
    }

    // Sets background color
    if (cellVal == 0) {
        cell.style.backgroundColor = 'inherit';
    } else if (cellVal == 1) {
        cell.style.backgroundColor = 'crimson';
    } else if (cellVal == 2) {
        cell.style.backgroundColor = 'darkorange';
    } else if (cellVal == 3) {
        cell.style.backgroundColor = 'forestgreen';
    } else if (cellVal == 4) {
        cell.style.backgroundColor = 'royalblue';
    } else {
        cell.style.backgroundColor = 'rebeccapurple';
    }

    // Overides above styles if cell has been already selected
    if (cellsUnavailable.includes(cellRef)) {
        cell.style.color = 'white';
        cell.style.backgroundColor = 'gainsboro';
        cell.style.cursor = 'not-allowed';
    }
}