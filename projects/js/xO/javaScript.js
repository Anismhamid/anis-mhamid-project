let currentPlayer = "X"
let gamesCounter = 0
let xCounter = 0
let oCounter = 0
var done = []

player1Name =
    prompt("שם שחקן של ה - X :") ||
    `<i class="fa-solid fa-x fa-spin"></i> - Player`
player2Name =
    prompt("שם שחקן של ה - O :") ||
    `<i class="fa-solid fa-o fa-spin text-danger"></i> - Player`
var dark = "dark"
var wonBoards = {}
document.querySelector("#player-X").innerHTML = player1Name
document.querySelector("#player-O").innerHTML = player2Name

let boardState = {
    a: ["", "", "", "", "", "", "", "", ""],
    b: ["", "", "", "", "", "", "", "", ""],
    c: ["", "", "", "", "", "", "", "", ""],
    d: ["", "", "", "", "", "", "", "", ""],
    e: ["", "", "", "", "", "", "", "", ""],
    f: ["", "", "", "", "", "", "", "", ""],
    g: ["", "", "", "", "", "", "", "", ""],
    h: ["", "", "", "", "", "", "", "", ""],
    i: ["", "", "", "", "", "", "", "", ""],
}

// פונקציה לטיפול בהזזת שחקן
function insert_X_Y(cellId) {
    let boardId = cellId[0]
    let index = parseInt(cellId.slice(1)) - 1
    if (boardState[boardId][index] === "") {
        boardState[boardId][index] = currentPlayer
        let cell = document.getElementById(cellId)

        cell.style.color = currentPlayer === "X" ? "blue" : "red"
        cell.innerText = currentPlayer
    }
    if (done == "") {
        disableCellsBasedOnPlayer(cellId)
    }
    let winner = checkWinner()
    if (winner) {
        handleGameEnd(winner)
    } else {
        switchPlayers()
        checkWinner()
    }
    let random = Math.ceil(Math.random() * 9)

    if (done[0] == boardId) {
        let en = enableRandomBoard()
        disableCellsBasedOnPlayer(`${en}${random}`)
        if (en != done[0]) {
            disableCellsBasedOnPlayer(`${en}${random}`)
            console.log(en, done[0])
        }
    } else {
        disableCellsBasedOnPlayer(cellId)
    }
}

function switchPlayers() {
    currentPlayer = currentPlayer === "X" ? "O" : "X"
    document.getElementById("turn").innerHTML = currentPlayer
}

function enableRandomBoard() {
    let availableBoards = Object.keys(boardState).filter(
        (boardId) => !wonBoards[boardId]
    )

    if (availableBoards.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableBoards.length)
        const randomBoardId = availableBoards[randomIndex]
        enableBoard(randomBoardId)
        return randomBoardId
    }
}

let checkWinner = () => {
    let winningCombinationsArr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8], // Win rows
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8], // Win columns
        [0, 4, 8],
        [2, 4, 6], // Win diagonals
    ]

    for (let boardId of Object.keys(boardState)) {
        let cells = boardState[boardId]

        for (let combination of winningCombinationsArr) {
            let [a, b, c] = combination

            // Checking if the combination is have won on  ---\ a , b ,c /---
            if (
                cells[a] !== "" &&
                cells[a] === cells[b] &&
                cells[b] === cells[c]
            ) {
                done.push(boardId)
                setBoardColor(boardId, dark)
                disableBoard(boardId)
                wonBoards[boardId] = true
                return cells[c]
            }
        }
    }
}

function handleGameEnd(winner) {
    if (winner === "X") {
        document.getElementById("result-left").innerText = xCounter += 1
        document.getElementById("result-center").innerText = xCounter += 1
    } else if (winner == "O") {
        document.getElementById("result-right").innerText = oCounter += 1
        document.getElementById("result-center").innerText = xCounter += 1
    } else {
        switchPlayers()
    }
    document.getElementById("result-center").innerText = xCounter += 1
    switchPlayers()
}

let applyColorAndDisableCells = (disableCellsListOfIds, lightCellId) => {
    let donish = done
    try {
        setBoardColor(lightCellId, "light")
        enableBoard(lightCellId)

        for (let boardId of disableCellsListOfIds) {
            if (boardId == lightCellId) {
                checkWinner()
            } else {
                setBoardColor(boardId, "warning")
                disableBoard(boardId)
            }
        }
    } catch (error) {
        console.log(error)
    }
    return lightCellId
}

const disableCellsBasedOnPlayer = (cellId) => {
    switch (cellId) {
        case "a1":
        case "b1":
        case "c1":
        case "d1":
        case "e1":
        case "f1":
        case "g1":
        case "h1":
        case "i1":
            applyColorAndDisableCells(
                ["b", "c", "d", "e", "f", "g", "h", "i"],
                "a"
            )
            break
        case "a2":
        case "b2":
        case "c2":
        case "d2":
        case "e2":
        case "f2":
        case "g2":
        case "h2":
        case "i2":
            applyColorAndDisableCells(
                ["a", "b", "c", "e", "f", "g", "h", "i"],
                "d"
            )
            break
        case "a3":
        case "b3":
        case "c3":
        case "c3":
        case "e3":
        case "f3":
        case "g3":
        case "h3":
        case "i3":
            applyColorAndDisableCells(
                ["a", "b", "c", "d", "e", "f", "h", "i"],
                "g"
            )
            break
        case "a4":
        case "b4":
        case "c4":
        case "d4":
        case "e4":
        case "f4":
        case "g4":
        case "h4":
        case "i4":
            applyColorAndDisableCells(
                ["a", "c", "d", "e", "f", "g", "h", "i"],
                "b"
            )
            break
        case "a5":
        case "b5":
        case "c5":
        case "d5":
        case "e5":
        case "f5":
        case "g5":
        case "h5":
        case "i5":
            applyColorAndDisableCells(
                ["a", "b", "c", "d", "f", "g", "h", "i"],
                "e"
            )
            break
        case "a6":
        case "b6":
        case "c6":
        case "d6":
        case "e6":
        case "f6":
        case "g6":
        case "h6":
        case "i6":
            applyColorAndDisableCells(
                ["a", "b", "c", "d", "e", "f", "g", "i"],
                "h"
            )
            break
        case "a7":
        case "b7":
        case "c7":
        case "d7":
        case "e7":
        case "f7":
        case "g7":
        case "h7":
        case "i7":
            applyColorAndDisableCells(
                ["a", "b", "d", "e", "f", "g", "h", "i"],
                "c"
            )
            break
        case "a8":
        case "b8":
        case "c8":
        case "d8":
        case "e8":
        case "f8":
        case "g8":
        case "h8":
        case "i8":
            applyColorAndDisableCells(
                ["a", "b", "c", "d", "e", "g", "h", "i"],
                "f"
            )
            break
        case "a9":
        case "b9":
        case "c9":
        case "d9":
        case "e9":
        case "f9":
        case "g9":
        case "h9":
        case "i9":
            applyColorAndDisableCells(["a", "b", "c", "d", "e", "f", "h"], "i")
            break
        default:
            break
    }
}

// פונקציה שמקבלת מערך ומוסיפה אותו לפונקצית השבתת קליקים
function disableCells(cellIds) {
    for (let cellId of cellIds) {
        disableBoard(cellId)
    }
    return cellIds
}

// פונקציה שמפעילה את פונקצית המאפשרת את הקליקים
function enableAllCells() {
    for (let boardId in boardState) {
        enableBoard(boardId)
    }
}

// פונקציה להשבתת קליקים בלוח מסוים
function disableBoard(boardId) {
    let cells = document.querySelectorAll(`#${boardId} .cell`)
    cells.forEach((cell) => {
        cell.onclick = null
    })
    return boardId
}

// פונקציה  המקבלת מערך ומאפשרת קליקים על הלוחות
function enableBoard(boardId) {
    let cells = document.querySelectorAll(`#${boardId} .cell`)
    cells.forEach((cell) => {
        if (cell.innerHTML === "") {
            cell.onclick = function () {
                insert_X_Y(cell.id)
            }
        }
    })
    return boardId
}

// פונקציה להגדיר את צבע הרקע של לוח ספציפי לאדום
function setBoardColor(boardId, newColor) {
    let cells = document.querySelectorAll(`#${boardId} .cell`)
    cells.forEach((cell) => {
        cell.classList.remove("bg-light", "bg-warning")
        cell.classList.add(`bg-${newColor}`)
    })
    return newColor
}

function resetGame() {
    resetBoard()
    xCounter = 0
    oCounter = 0
    gamesCounter = 0
    document.getElementById("result-left").innerText = xCounter
    document.getElementById("result-right").innerText = oCounter
    document.getElementById("result-center").innerText = gamesCounter
    document.querySelectorAll(".cell").forEach((cell) => {
        cell.innerText = ""
        cell.style.backgroundColor = "#f8ad30"
    })
    setBoardColor(["a", "b", "c", "d", "e", "f", "g", "h", "i"], "warning")
}

// פונקציה לאיפוס הלוח
function resetBoard() {
    for (let boardId in boardState) {
        boardState[boardId] = ["", "", "", "", "", "", "", "", ""]
        let cells = document.querySelectorAll(`#${boardId} .a`)
        cells.forEach((cell) => {
            cell.innerText = ""
            cell.style.backgroundColor = "white"
            cell.onclick = function () {
                insert_X_Y(cell.id)
            }
        })
    }
    currentPlayer = "X"
}
