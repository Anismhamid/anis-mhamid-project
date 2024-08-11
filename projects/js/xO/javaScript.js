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






// פונקציה לטיפול בהזזת שחקן
function insert_X_Y(cellId) {
    let boardId = cellId[0];
    let index = parseInt(cellId.slice(1)) - 1;

    if (boardState[boardId][index] === '') {
        boardState[boardId][index] = currentPlayer;
        let cell = document.getElementById(cellId);

        cell.style.color = currentPlayer === 'X' ? 'blue' : 'red';
        cell.innerText = currentPlayer;

        let winner = checkWinner();
        if (winner) {
            handleGameEnd(winner);
        } else {
            switchPlayers();
        }

        disableCellsBasedOnPlayer(cellId);
        setBoardColor(cellId);
    }
}



function switchPlayers() {
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    document.getElementById('turn').innerHTML = currentPlayer
}




function handleGameEnd(winner) {
    if (winner === 'X') {
        xCounter++;
        document.getElementById('result-left').innerText = xCounter;
    } else if (winner === 'O') {
        oCounter++;
        document.getElementById('result-right').innerText = oCounter;
    }
    switchPlayers()
}




let randomCharToUpdateBoardColor = (charArray) => {
    if (charArray.length === 0) return;

    let randomIndex = Math.floor(Math.random() * charArray.length);
    let randomChar = charArray[randomIndex];

    setBoardColor(randomChar, 'light');
    enableBoard(randomChar);

    return randomChar;
};







let checkWinner = () => {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    const boardCharMap = {
        A: ["B", "C", "D", "E", "F", "G", "H", "I"],
        B: ["A", "C", "D", "E", "F", "G", "H", "I"],
        C: ["A", "B", "D", "E", "F", "G", "H", "I"],
        D: ["A", "B", "C", "E", "F", "G", "H", "I"],
        E: ["A", "B", "C", "D", "F", "G", "H", "I"],
        F: ["A", "B", "C", "D", "E", "G", "H", "I"],
        G: ["A", "B", "C", "D", "E", "F", "H", "I"],
        H: ["A", "B", "C", "D", "E", "F", "G", "I"],
        I: ["A", "B", "C", "D", "E", "F", "G", "H"]
    };


    for (let boardId of Object.keys(boardState)) {
        let cells = boardState[boardId];
        for (let combination of winningCombinations) {
            let [a, b, c] = combination;
            if (cells[a] != "" && cells[a] === cells[b] && cells[b] === cells[c]) {

                let setBoardColors =setBoardColor(boardId, 'dark');
                let boards = disableBoard(boardId);


                let colorUpdateArray = boardCharMap[boardId];
                for (let disabledboards of boards) {
                    if (disabledboards == 'A' || setBoardColors == 'dark') {
                        randomCharToUpdateBoardColor(colorUpdateArray)
                        disableBoard(boardId);
                    }else{
                        setBoardColor(boardId, 'warning');
                        disableBoard(boardId);
                    }
                }
            }
        }
    }
    return null; // return null if no winner
};





const applyColorAndDisableCells = (disableCellsListOfIds, lightCellId) => {
    if (disableCellsListOfIds && disableCellsListOfIds.length > 0) {
        let setBoardColors = setBoardColor(lightCellId, 'light');
        enableBoard(lightCellId);
        for (let cellIds of disableCellsListOfIds) {
            if (cellIds == lightCellId && setBoardColors == 'dark') {

            } else {
                setBoardColor(cellIds, 'warning');
                disableBoard(cellIds);
            }
        }
    }
    return { disableCellsListOfIds, lightCellId };
};




const disableCellsBasedOnPlayer = (cellId) => {
    switch (cellId) {
        case 'A1': case 'B1': case 'C1': case 'D1': case 'E1': case 'F1': case 'G1': case 'H1': case 'I1':
            applyColorAndDisableCells(['B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'], 'A');
            break;
        case 'A2': case 'B2': case 'C2': case 'D2': case 'E2': case 'F2': case 'G2': case 'H2': case 'I2':
            applyColorAndDisableCells(['A', 'B', 'C', 'E', 'F', 'G', 'H', 'I'], 'D');
            break;
        case 'A3': case 'B3': case 'C3': case 'D3': case 'E3': case 'F3': case 'G3': case 'H3': case 'I3':
            applyColorAndDisableCells(['A', 'B', 'C', 'D', 'E', 'F', 'H', 'I'], 'G');
            break;
        case 'A4': case 'B4': case 'C4': case 'D4': case 'E4': case 'F4': case 'G4': case 'H4': case 'I4':
            applyColorAndDisableCells(['A', 'C', 'D', 'E', 'F', 'G', 'H', 'I'], 'B');
            break;
        case 'A5': case 'B5': case 'C5': case 'D5': case 'E5': case 'F5': case 'G5': case 'H5': case 'I5':
            applyColorAndDisableCells(['A', 'B', 'C', 'D', 'F', 'G', 'H', 'I'], 'E');
            break;
        case 'A6': case 'B6': case 'C6': case 'D6': case 'E6': case 'F6': case 'G6': case 'H6': case 'I6':
            applyColorAndDisableCells(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'I'], 'H');
            break;
        case 'A7': case 'B7': case 'C7': case 'D7': case 'E7': case 'F7': case 'G7': case 'H7': case 'I7':
            applyColorAndDisableCells(['A', 'B', 'D', 'E', 'F', 'G', 'H', 'I'], 'C');
            break;
        case 'A8': case 'B8': case 'C8': case 'D8': case 'E8': case 'F8': case 'G8': case 'H8': case 'I8':
            applyColorAndDisableCells(['A', 'B', 'C', 'D', 'E', 'G', 'H', 'I'], 'F');
            break;
        case 'A9': case 'B9': case 'C9': case 'D9': case 'E9': case 'F9': case 'G9': case 'H9': case 'I9':
            applyColorAndDisableCells(['A', 'B', 'C', 'D', 'E', 'F', 'H'], 'I');
            break;
        default:
            break;
    }


}

// פונקציה שמקבלת מערך ומוסיפה אותו לפונקצית השבתת קליקים
function disableCells(cellIds) {
    for (let cellId of cellIds) {
        disableBoard(cellId);
    }
};


// פונקציה שמפעילה את פונקצית המאפשרת את הקליקים 
function enableAllCells() {
    for (let boardId in boardState) {
        enableBoard(boardId);
    }
}


// פונקציה להשבתת קליקים בלוח מסוים
function disableBoard(boardId) {
    let cells = document.querySelectorAll(`#${boardId} .a`);
    cells.forEach(cell => {
        cell.onclick = null;
    });
    return boardId
}


// פונקציה  המקבלת מערך ומאפשרת קליקים על הלוחות
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
        cell.classList.remove('bg-light', 'bg-warning');
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
    setBoardColor(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'], 'warning');
}

// פונקציה לאיפוס הלוח
function resetBoard() {
    for (let boardId in boardState) {
        boardState[boardId] = ['', '', '', '', '', '', '', '', ''];
        let cells = document.querySelectorAll(`#${boardId} .a`);
        cells.forEach(cell => {
            cell.innerText = '';
            cell.style.backgroundColor = 'white';
            cell.onclick = function () {
                insert_X_Y(cell.id);
            };
        });
    }
    currentPlayer = 'X';
}


