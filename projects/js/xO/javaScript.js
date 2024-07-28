let currentPlayer = 'X';
let boardState = {
    A: ['', '', '', '', '', '', '', '', ''],
    B: ['', '', '', '', '', '', '', '', ''],
    C: ['', '', '', '', '', '', '', '', ''],
    D: ['', '', '', '', '', '', '', '', ''],
    E: ['', '', '', '', '', '', '', '', ''],
    F: ['', '', '', '', '', '', '', '', ''],
    G: ['', '', '', '', '', '', '', '', ''],
    H: ['', '', '', '', '', '', '', '', ''],
    I: ['', '', '', '', '', '', '', '', ''],
};
let gamesCounter = 0;
let xCounter = 0;
let oCounter = 0;
let player1Name = ''; /*=  prompt('שם שחקן של ה - X :'); */
let player2Name = '' /* = prompt('שם שחקן של ה - O :'); */

if (player1Name != '' && player2Name != '') {
    document.getElementById('player-X').innerText = player1Name
    document.getElementById('player-O').innerText = player2Name
} else {
    document.getElementById('player-X').innerHTML = `<i class="fa-solid fa-x fa-spin"></i> - Player`
    document.getElementById('player-O').innerHTML = `<i class="fa-solid fa-o fa-spin text-danger"></i> - Player`
}



function enableAllCells() {
    for (let boardId in boardState) {
        enableBoard(boardId);
    }
}


// פונקציה לטיפול בהזזת שחקן
function insert_X_Y(cellId) {
    let boardId = cellId[0]; // קבל את מזהה הלוח (A עד I)
    let index = parseInt(cellId.slice(1)) - 1; // קבל את אינדקס התא (0 עד 8)

    // בדוק אם התא ריק
    if (boardState[boardId][index] === '') {

        // עדכן את מצב הלוח
        boardState[boardId][index] = currentPlayer;

        let cell = document.getElementById(cellId);

        if (currentPlayer === 'X') {
            disableCellsBasedOnPlayer(cellId);
            cell.style.color = 'blue'
            checkWinner()
        }
        else if (currentPlayer === 'O') {
            disableCellsBasedOnPlayer(cellId);
            cell.style.color = 'red';
            checkWinner()
        }

        // עדכן את ממשק המשתמש כדי להציג X או O בתא שלוחצים
        cell.innerText = currentPlayer;

        // בדוק אם יש מנצח לאחר כל מהלך
        let winner = checkWinner();

        if (winner) {
            handleGameEnd(winner)
        }
        else {
            switchPlayers();
        }
        disableCellsBasedOnPlayer(cellId);
        setBoardColor(cellId);
    }
}

function switchPlayers() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    document.getElementById('turn').innerHTML = currentPlayer;
}



function handleGameEnd(winner) {
    if (winner === 'X') {
        xCounter++;
        document.getElementById('result-left').innerText = xCounter;
        switchPlayers()
    } else if (winner === 'O') {
        oCounter++;
        document.getElementById('result-right').innerText = oCounter;
        switchPlayers()
    }
    // resetBoard();
}


let randomGameChange = () => {
    let lastValue = [];
    let mm = Math.floor(Math.random() * 9) + 1
    let hh = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
    for (let i = 0; i < hh; i++) {
        lastValue.push(hh[i])
    }
    return lastValue
}

// Function to check for a winner
function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (let boardId of Object.keys(boardState)) {
        let cells = boardState[boardId];

        for (let combination of winningCombinations) {
            let [a, b, c] = combination;
            if (cells[a] !== '' && cells[a] === cells[b] && cells[b] === cells[c]) {
                // Disable the board and set its color to 'danger-subtle'
                disableBoard(boardId);
                let colorSet = setBoardColor(boardId, 'dark');
                if (colorSet == 'dark') {
                    disableBoard(boardId);
                    enableBoard(colorSet)
                    // 
                }



                // Return the winner ('X' or 'O')
                return cells[a];
            }
        }
    }


    // Return null if no winner
    return null;
}



// פונקציה לאיפוס הלוח
function resetBoard() {
    for (let boardId in boardState) {
        boardState[boardId] = ['', '', '', '', '', '', '', '', ''];
        let cells = document.querySelectorAll(`#${boardId} .a`);
        cells.forEach(cell => {
            cell.innerText = '';
            cell.style.backgroundColor = '#f8ad30';
            cell.onclick = function () {
                insert_X_Y(cell.id);
            };
        });
    }
    currentPlayer = 'X';
    switchPlayers();
}




function disableCells(cellIds) {
    cellIds.forEach(id => {
        disableBoard(id);

    });
}



// פונקציה להשבתת קליקים בלוח מסוים
function disableBoard(boardId) {
    let cells = document.querySelectorAll(`#${boardId} .a`);
    cells.forEach(cell => {
        cell.onclick = null;
    });
    return boardId
}


let func1 = () => {
    let disableCells2 = disableCells(['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']);
    if (!disableCells2) {
        setBoardColor('A', 'light')
        setBoardColor('B', 'warning');
        setBoardColor('C', 'warning');
        setBoardColor('D', 'warning');
        setBoardColor('E', 'warning');
        setBoardColor('F', 'warning');
        setBoardColor('G', 'warning');
        setBoardColor('H', 'warning');
        setBoardColor('I', 'warning');
    }
}
let func2 = () => {
    let disableCells2 = disableCells(['A', 'B', 'C', 'E', 'F', 'G', 'H', 'I']);
    if (!disableCells2) {
        setBoardColor('D', 'light')
        setBoardColor('A', 'warning');
        setBoardColor('B', 'warning');
        setBoardColor('C', 'warning');
        setBoardColor('E', 'warning');
        setBoardColor('F', 'warning');
        setBoardColor('G', 'warning');
        setBoardColor('H', 'warning');
        setBoardColor('I', 'warning');
    }
}
let func3 = () => {
    let disableCells3 = disableCells(['A', 'B', 'C', 'D', 'E', 'F', 'H', 'I']);
    if (!disableCells3) {
        setBoardColor('G', 'light')
        setBoardColor(['A', 'B', 'C', 'D', 'E', 'F', 'H', 'I']);
    }
}
let func4 = () => {
    let disableCells4 = disableCells(['A', 'C', 'D', 'E', 'F', 'G', 'H', 'I']);
    if (!disableCells4) {
        setBoardColor('B', 'light')
        setBoardColor('A', 'warning');
        setBoardColor('C', 'warning');
        setBoardColor('D', 'warning');
        setBoardColor('E', 'warning');
        setBoardColor('F', 'warning');
        setBoardColor('G', 'warning');
        setBoardColor('H', 'warning');
        setBoardColor('I', 'warning');
    }
}
let func5 = () => {
    let disableCells5 = disableCells(['A', 'B', 'C', 'D', 'F', 'G', 'H', 'I']);
    if (!disableCells5) {
        setBoardColor('E', 'light')
        setBoardColor('A', 'warning');
        setBoardColor('B', 'warning');
        setBoardColor('C', 'warning');
        setBoardColor('D', 'warning');
        setBoardColor('F', 'warning');
        setBoardColor('G', 'warning');
        setBoardColor('H', 'warning');
        setBoardColor('I', 'warning');

    }
}
let func6 = () => {
    let disableCells6 = disableCells(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'I']);
    if (!disableCells6) {
        setBoardColor('H', 'light')
        setBoardColor('A', 'warning');
        setBoardColor('B', 'warning');
        setBoardColor('C', 'warning');
        setBoardColor('D', 'warning');
        setBoardColor('E', 'warning');
        setBoardColor('F', 'warning');
        setBoardColor('G', 'warning');
        setBoardColor('I', 'warning');
    }
}
let func7 = () => {
    let disableCells7 = disableCells(['A', 'B', 'D', 'E', 'F', 'G', 'H', 'I']);
    if (!disableCells7) {

        setBoardColor('C', 'light')
        setBoardColor('A', 'warning');
        setBoardColor('B', 'warning');
        setBoardColor('D', 'warning');
        setBoardColor('E', 'warning');
        setBoardColor('F', 'warning');
        setBoardColor('G', 'warning');
        setBoardColor('H', 'warning');
        setBoardColor('I', 'warning');
    }
}
let func8 = () => {
    let disableCells8 = disableCells(['A', 'B', 'C', 'D', 'E', 'G', 'H', 'I']);
    if (!disableCells8) {

        setBoardColor('F', 'light')
        setBoardColor('A', 'warning');
        setBoardColor('B', 'warning');
        setBoardColor('C', 'warning');
        setBoardColor('D', 'warning');
        setBoardColor('E', 'warning');
        setBoardColor('G', 'warning');
        setBoardColor('H', 'warning');
        setBoardColor('I', 'warning');
    }
}
let func9 = () => {
    let disableCells9 = disableCells(['A', 'B', 'C', 'D', 'E', 'F', 'H']);
    if (!disableCells9) {

        setBoardColor('I', 'light')
        setBoardColor('A', 'warning');
        setBoardColor('B', 'warning');
        setBoardColor('C', 'warning');
        setBoardColor('D', 'warning');
        setBoardColor('E', 'warning');
        setBoardColor('F', 'warning');
        setBoardColor('G', 'warning');
        setBoardColor('H', 'warning');
    }
}

let disableCellsBasedOnPlayer = function (cellId) {
    enableAllCells()
    switch (cellId) {
        case 'A1': case 'B1': case 'C1': case 'D1': case 'E1': case 'F1': case 'G1': case 'H1': case 'I1':
            func1()
            checkWinner()
            break;
        case 'A2': case 'B2': case 'C2': case 'D2': case 'E2': case 'F2': case 'G2': case 'H2': case 'I2':
            func2()
            checkWinner()
            break;
        case 'A3': case 'B3': case 'C3': case 'D3': case 'E3': case 'F3': case 'G3': case 'H3': case 'I3':
            func3()
            checkWinner()
            break;
        case 'A4': case 'B4': case 'C4': case 'D4': case 'E4': case 'F4': case 'G4': case 'H4': case 'I4':
            func4()
            checkWinner()
            break;
        case 'A5': case 'B5': case 'C5': case 'D5': case 'E5': case 'F5': case 'G5': case 'H5': case 'I5':
            func5()
            checkWinner()
            break;
        case 'A6': case 'B6': case 'C6': case 'D6': case 'E6': case 'F6': case 'G6': case 'H6': case 'I6':
            func6()
            checkWinner()
            break;
        case 'A7': case 'B7': case 'C7': case 'D7': case 'E7': case 'F7': case 'G7': case 'H7': case 'I7':
            func7()
            checkWinner()
            break;
        case 'A8': case 'B8': case 'C8': case 'D8': case 'E8': case 'F8': case 'G8': case 'H8': case 'I8':
            func8()
            checkWinner()
            break;
        case 'A9': case 'B9': case 'C9': case 'D9': case 'E9': case 'F9': case 'G9': case 'H9': case 'I9':
            func9()
            checkWinner()
            break;

        default:
            break;
    }
}




// פונקציה לאפשר לחיצות על כל הלוחות

function enableBoard(boardId) {
    let cells = document.querySelectorAll(`#${boardId} .a`);
    cells.forEach(cell => {
        if (cell.innerHTML === '') {
            cell.onclick = function () {
                insert_X_Y(cell.id);
            };
        }
    });
}




// פונקציה להגדיר את צבע הרקע של לוח ספציפי לאדום
function setBoardColor(boardId, newColor) {
    let cells = document.querySelectorAll(`#${boardId} .a`);
    cells.forEach(cell => {
        cell.classList.remove('bg-light');
        cell.classList.add(`bg-${newColor}`);
    });
    return newColor;
}




function resetGame() {
    resetBoard();
    enableAllCells()
    xCounter = 0;
    oCounter = 0;
    gamesCounter = 0;
    document.getElementById('result-left').innerText = xCounter;
    document.getElementById('result-right').innerText = oCounter;
    document.getElementById('result-center').innerText = gamesCounter;
    document.querySelectorAll('.a').forEach(cell => {
        cell.innerText = '';
        cell.style.backgroundColor = '#f8ad30'
    });
    setBoardColor('A', 'warning');
    setBoardColor('B', 'warning');
    setBoardColor('C', 'warning');
    setBoardColor('D', 'warning');
    setBoardColor('E', 'warning');
    setBoardColor('F', 'warning');
    setBoardColor('G', 'warning');
    setBoardColor('H', 'warning');
    setBoardColor('I', 'warning');
}



// Add event listeners for all cells
let eventListener = () => {
    let id = '';
    document.querySelectorAll('.a').forEach(cell => {
        cell.addEventListener('click', function () {
            // insert_X_Y(cell.id);
            id = ''
            id += cell.id
            console.log(id);
        });
    });

    return id
}
eventListener()