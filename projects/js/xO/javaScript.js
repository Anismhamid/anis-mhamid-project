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
            cell.style.color = '#001'

        }
        else if (currentPlayer === 'O') {
            disableCellsBasedOnPlayer(cellId);
            cell.style.color = 'red';
        }


        // עדכן את ממשק המשתמש כדי להציג X או O בתא שלוחצים
        cell.innerText = currentPlayer;





        // בדוק אם יש מנצח לאחר כל מהלך
        let winner = checkWinner();

        if (winner) {
            handleGameEnd(winner)

        } else {
            switchPlayers();

        }
        disableCellsBasedOnPlayer(cellId);
        setBoardColorRed(cellId);
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

// פונקציה לבדיקת זוכה
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
                // disableBoard(boardId);
                setBoardColorRed(boardId, 'success');
                if (boardId == 'A1' || 'C1' || 'D1' || 'E1' || 'F1' || 'G1' || 'H1' || 'I1') {
                    console.log(boardId);
                    disableBoard(['A', 'B', 'C', 'D', 'E', 'G', 'H', 'I'
                    ]);
                }
                return cells[a]; // Return the winner ('X' or 'O')
            }
        }
    }
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
}



let func1 = () => {
    let disableCells2 = disableCells(['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']);
    if (disableCells2) {
        enableBoard('A');
        // resetBbackgroundColor('A');
    } else {
        setBoardColorRed('A', 'light')
        setBoardColorRed('B', 'warning');
        setBoardColorRed('C', 'warning');
        setBoardColorRed('D', 'warning');
        setBoardColorRed('E', 'warning');
        setBoardColorRed('F', 'warning');
        setBoardColorRed('G', 'warning');
        setBoardColorRed('H', 'warning');
        setBoardColorRed('I', 'warning');
    }
}
let func2 = () => {
    let disableCells2 = disableCells(['A', 'B', 'C', 'E', 'F', 'G', 'H', 'I']);
    if (disableCells2) {
        enableBoard('D');
        resetBbackgroundColor('D');
    } else {
        setBoardColorRed('D', 'light')
        setBoardColorRed('A', 'warning');
        setBoardColorRed('B', 'warning');
        setBoardColorRed('C', 'warning');
        setBoardColorRed('E', 'warning');
        setBoardColorRed('F', 'warning');
        setBoardColorRed('G', 'warning');
        setBoardColorRed('H', 'warning');
        setBoardColorRed('I', 'warning');
    }
}
let func3 = () => {
    let disableCells3 = disableCells(['A', 'B', 'C', 'D', 'E', 'F', 'H', 'I']);
    if (disableCells3) {
        enableBoard('G');
        setBoardColorRed('G', 'light')
    } else {
        setBoardColorRed('G', 'light')
        setBoardColorRed(['A', 'B', 'C', 'D', 'E', 'F', 'H', 'I'], 'warning');
    }
}
let func4 = () => {
    let disableCells4 = disableCells(['A', 'C', 'D', 'E', 'F', 'G', 'H', 'I']);
    if (disableCells4) {
        enableBoard('B');
        setBoardColorRed('B', 'danger')
    } else {
        setBoardColorRed('B', 'light')
        setBoardColorRed('A', 'warning');
        setBoardColorRed('C', 'warning');
        setBoardColorRed('D', 'warning');
        setBoardColorRed('E', 'warning');
        setBoardColorRed('F', 'warning');
        setBoardColorRed('G', 'warning');
        setBoardColorRed('H', 'warning');
        setBoardColorRed('I', 'warning');
    }
}
let func5 = () => {
    let disableCells5 = disableCells(['A', 'B', 'C', 'D', 'F', 'G', 'H', 'I']);
    if (disableCells5) {
        enableBoard('E');
        setBoardColorRed('E', 'danger')
    } else {
        setBoardColorRed('E', 'light')
        setBoardColorRed('A', 'warning');
        setBoardColorRed('B', 'warning');
        setBoardColorRed('C', 'warning');
        setBoardColorRed('D', 'warning');
        setBoardColorRed('F', 'warning');
        setBoardColorRed('G', 'warning');
        setBoardColorRed('H', 'warning');
        setBoardColorRed('I', 'warning');
    }
}
let func6 = () => {
    let disableCells6 = disableCells(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'I']);
    if (disableCells6) {
        enableBoard('H');
        setBoardColorRed('H', 'danger')
    } else {
        setBoardColorRed('H', 'light')
        setBoardColorRed('A', 'warning');
        setBoardColorRed('B', 'warning');
        setBoardColorRed('C', 'warning');
        setBoardColorRed('D', 'warning');
        setBoardColorRed('E', 'warning');
        setBoardColorRed('F', 'warning');
        setBoardColorRed('G', 'warning');
        setBoardColorRed('I', 'warning');
    }
}
let func7 = () => {
    let disableCells7 = disableCells(['A', 'B', 'D', 'E', 'F', 'G', 'H', 'I']);
    if (disableCells7) {
        enableBoard('C');
        setBoardColorRed('C', 'danger')
    } else {
        setBoardColorRed('C', 'light')
        setBoardColorRed('A', 'warning');
        setBoardColorRed('B', 'warning');
        setBoardColorRed('D', 'warning');
        setBoardColorRed('E', 'warning');
        setBoardColorRed('F', 'warning');
        setBoardColorRed('G', 'warning');
        setBoardColorRed('H', 'warning');
        setBoardColorRed('I', 'warning');
    }
}
let func8 = () => {
    let disableCells8 = disableCells(['A', 'B', 'C', 'D', 'E', 'G', 'H', 'I']);
    if (disableCells8) {
        enableBoard('F');
        setBoardColorRed('F', 'danger')
    } else {
        setBoardColorRed('F', 'light')
        setBoardColorRed('A', 'warning');
        setBoardColorRed('B', 'warning');
        setBoardColorRed('C', 'warning');
        setBoardColorRed('D', 'warning');
        setBoardColorRed('E', 'warning');
        setBoardColorRed('G', 'warning');
        setBoardColorRed('H', 'warning');
        setBoardColorRed('I', 'warning');
    }
}
let func9 = () => {
    let disableCells9 = disableCells(['A', 'B', 'C', 'D', 'E', 'F', 'H']);
    if (disableCells9) {
        enableBoard('I');
        setBoardColorRed('I', 'danger')
    } else {
        setBoardColorRed('I', 'light')
        setBoardColorRed('A', 'warning');
        setBoardColorRed('B', 'warning');
        setBoardColorRed('C', 'warning');
        setBoardColorRed('D', 'warning');
        setBoardColorRed('E', 'warning');
        setBoardColorRed('F', 'warning');
        setBoardColorRed('G', 'warning');
        setBoardColorRed('H', 'warning');
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
            enableAllCells()
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
function setBoardColorRed(boardId, newColor) {
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
    setBoardColorRed('A', 'warning');
    setBoardColorRed('B', 'warning');
    setBoardColorRed('C', 'warning');
    setBoardColorRed('D', 'warning');
    setBoardColorRed('E', 'warning');
    setBoardColorRed('F', 'warning');
    setBoardColorRed('G', 'warning');
    setBoardColorRed('H', 'warning');
    setBoardColorRed('I', 'warning');
    resetBbackgroundColor('A');

}