//Constants & Variables
const banner = document.getElementById('banner'); //Targets the info banner
const grid = document.getElementById('game-grid'); //Targets the 4x4 grid 
const cells = grid.children; //Targets the 16 divs within the 4x4 grid
const levelNum = document.getElementById('level'); //Targets the level counter
const blocksNum = document.getElementById('blocks'); //Targets the block counter
const buttons = document.getElementsByTagName('button'); //Targets the buttons
const over = document.getElementById('game-over'); //Targets the hidden game-over div
const scoreMessage = document.getElementById('score-message'); //Targets high-score message 
const levelBest = document.getElementById('level-best'); //Targets the high-score level display
const blocksBest = document.getElementById('blocks-best'); //Targets the high-score block display
const confirmation = document.getElementById('confirmation'); //Targets the hidden confirmation div
const rules = document.getElementById('rules-text'); //Targets the hidden rules-text div

let cellsUnavailable = []; //Array used to keep track of selected cells
let setupCheck; //Variable used to ensure correct setup at game launch
let endCheck; //Variable used to determine if the player is out of moves
let cell; //Variable used to define a single cell within the grid
let req; //Variable used to ensure cells are selected in the correct order
let lim; //Variable used to set upper value of cells
let lev; //Variable used to track game level
let bloc; //Variable used to track number of blocks cleared
let levHigh; //Variable used to track highest level achieved
let blocHigh; //Variable used to track highest number of blocks cleared

/**
 * Cell and button listeners for click events placed within a 'DOMContentLoaded'
 * listener to allow the HTML to fully load before implementing.
 * Identical function from 'Code Institute - Love Maths' tutorial used as template.
 */
document.addEventListener('DOMContentLoaded', function () {

    setupGame();
    levHigh = 0;
    blocHigh = 0;

    // Listens for selection of a numbered cell
    for (let cell of cells) {
        cell.addEventListener('click', function () {

            let col = this.getAttribute('data-col');
            let row = this.getAttribute('data-row');
            let cellMarker = col + row;
            let val = cell.innerHTML;

            //NB Banner messages must be 30 characters or fewer to fit comfortably on screen!
            if (endCheck == 16) { //Cell slected when no possible moves left
                banner.innerHTML = `<h2>Click <span id="banner-ng">New Game</span> to start over</h2>`;
            } else if (val == 0 || cellsUnavailable.includes(cellMarker)) { //Empty or greyed-out cell selected
                banner.innerHTML = `<h2>Block unavailable. Select a <span id="next">${req}</span></h2>`;
                bannerStyle(req);
            } else if (val != req) { //Incorrect value selected
                banner.innerHTML = `<h2>Next number must be <span id="next">${req}</span></h2>`;
                bannerStyle(req);
            } else {
                cellSelect(col, row, val); //Required value selected
                if (endCheck == 16) { //Game Over state
                    recordBest(lev, bloc);
                    banner.innerHTML = `<h2>Required <span id="next">${req}</span> is unavailable</h2>`;
                    grid.style.animation = 'fade 1.5s forwards';
                    over.style.display = 'block';
                } else { //Game continues
                    endCheck = 0;
                    banner.innerHTML = `<h2>Next <span id="next">${req}</span></h2>
                                    <h2>Limit <span id="limit">${lim}</span></h2>`;
                }
                bannerStyle(req);
            }
        });
    }

    // Listens for selection of a particular button
    for (let button of buttons) {
        button.addEventListener('click', function () {

            let type = this.getAttribute('data-type');

            if (type === 'new-game' && endCheck != 16) {
                confirmation.style.display = 'block';
                rules.style.display = 'none';
            } else if (type === 'new-game' && endCheck == 16 || type === 'yes') {
                banner.innerHTML = `<h2>Click any <span id="next">1</span> to begin</h2>`;
                grid.style.animation = 'none';
                over.style.display = 'none';
                confirmation.style.display = 'none';
                setupGame();
            } else if (type === 'no') {
                confirmation.style.display = 'none';
            } else if (type === 'rules') {
                over.style.display = 'none';
                confirmation.style.display = 'none';
                rules.style.display = 'block';
            } else if (type === 'got-it') {
                grid.style.animation = 'none';
                rules.style.display = 'none';
            } else if (type === 'view-grid') {
                grid.style.animation = 'none';
                over.style.display = 'none';
            }
        });
    }
});

/**
 * Sets up the initial game state and resets
 * certain variables to their original values. 
 */
function setupGame() {

    //Variable and counter reset
    endCheck = 0;
    cellsUnavailable = [];
    req = 1;
    lim = 5;
    lev = 1;
    bloc = 0;
    levelNum.innerHTML = '0' + lev;
    blocksNum.innerHTML = '0' + bloc;

    do {
        setupCheck = 0;

        for (cell of cells) {

            let cellRef = 0; //Ensures no cells are greyed-out during setup
            let cellVal = Math.floor(Math.random() * 2);
            cell.innerHTML = cellVal; //Fills cells with values of 0 or 1
            setupCheck = setupCheck + cellVal;

            bannerStyle(req);
            cellStyle(req, cellVal, cellRef);
        }
    } while (setupCheck < 7 || setupCheck > 14); //Prevents a 'no-win' or almost filled grid
}

/**
 * Increases the value of a cell by the value it currently contains.
 * All cells in the same row and column are increased by the same amount.
 * NB: statements 'if (val == 1)' and 'if (val == 4)' MUST be placed at the
 * top and bottom of the function respectively in order to operate correctly.
 */
function cellSelect(col, row, val) {

    //Resets greyed-out cells when a 1 is clicked
    if (val == 1) {
        cellsUnavailable = [];
    }

    let cellMarker = col + row;
    cellsUnavailable.push(cellMarker); //Makes selected cell unavailable
    req = req == 4 ? 1 : ++req;
    bloc = ++bloc;
    blocksNum.innerHTML = bloc < 10 ? '0' + bloc : bloc;

    for (cell of cells) {
        let cellColumn = cell.getAttribute('data-col');
        let cellRow = cell.getAttribute('data-row');
        let cellRef = cellColumn + cellRow;
        let currentVal = cell.innerHTML;

        if (cellColumn === col || cellRow === row) { //Finds all cells in the same column and row as the selected cell                              
            let newVal = parseInt(currentVal) + parseInt(val); //Calculates new values for cells according to the selected cell
            cell.innerHTML = newVal > lim ? newVal - lim : newVal; //Uses modular arithmetic to set lim as upper value                       
        }

        let cellVal = cell.innerHTML;
        cellStyle(req, cellVal, cellRef);

        if (cellVal != req || cellsUnavailable.includes(cellRef)) {
            endCheck = ++endCheck;
        }
    }

    //Increases level and limit (max 9) every 16 blocks cleared
    if (val == 4 && bloc % 16 == 0) {
        lev = ++lev;
        levelNum.innerHTML = lev < 10 ? '0' + lev : lev;
        lim = lim < 9 ? ++lim : 9;
    }
}

/**
 * Checks for a new highscore and, if found,
 * displays it as part of the GAME OVER message.
 */
function recordBest(lev, bloc) {
    
    if (bloc > blocHigh) {
        levHigh = lev;
        blocHigh = bloc;
        scoreMessage.innerHTML = '<i class="fa-solid fa-medal"></i> New High Score!';
        levelBest.innerHTML = levHigh < 10 ? '0' + levHigh : levHigh;
        blocksBest.innerHTML = blocHigh < 10 ? '0' + blocHigh : blocHigh;
    } else {
        scoreMessage.innerHTML = 'Current High Score';
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