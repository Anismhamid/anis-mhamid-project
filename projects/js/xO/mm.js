/**
 * Represents the state of the game.
 * <br>
 * Call {@link move} to facilitate player moves. Provides a {@link clone} method to make a deep clone
 * of the state of the game.
 */
class GameState {
    constructor() {
        this.board = [];
        for (let a = 0; a < 3; a++) {
            this.board[a] = [];
            for (let b = 0; b < 3; b++) {
                this.board[a][b] = [];
                for (let i = 0; i < 3; i++) {
                    this.board[a][b][i] = [];
                    for (let j = 0; j < 3; j++) {
                        this.board[a][b][i][j] = null;
                    }
                }
            }
        }

        this.turn = true;


        this.status = true;


        this.lastMove = null;
    }


    clone() {
        const c = new GameState();
        c.board = JSON.parse(JSON.stringify(this.board));
        c.turn = this.turn;
        c.lastMove = this.lastMove === null ? null : this.lastMove.slice();
        c.status = this.status;
        return c;
    }

    static manualClone(state) {
        const c = new GameState();
        c.board = JSON.parse(JSON.stringify(state.board));
        c.turn = state.turn;
        c.lastMove = state.lastMove === null ? null : state.lastMove.slice();
        c.status = state.status;
        return c;
    }

    move(boardRow, boardCol, cellRow, cellCol) {

        // Invalid indices
        if ([boardRow, boardCol, cellRow, cellCol].some(x => x < 0 || x >= 3)) {
            return false;
        }

        // Game Over
        if (this.status !== true) {
            return false;
        }

        // Wrong board
        if (this.lastMove !== null) {
            if (this.lastMove[0] !== boardRow || this.lastMove[1] !== boardCol) {
                return false;
            }
        }

        // Invalid board
        if (!Array.isArray(this.board[boardRow][boardCol])) {
            return false;
        }

        // Occupied cell
        if (this.board[boardRow][boardCol][cellRow][cellCol] !== null) {
            return false;
        }

        this.board[boardRow][boardCol][cellRow][cellCol] = this.turn;
        const smallBoardStatus = GameState.checkTicTacToe(
            this.board[boardRow][boardCol],
            x => typeof x !== "boolean"
        );
        if (smallBoardStatus !== false) {
            this.board[boardRow][boardCol] = smallBoardStatus ? this.turn : null
        }
        if (Array.isArray(this.board[cellRow][cellCol])) {
            this.lastMove = [cellRow, cellCol];
        } else {
            this.lastMove = null;
        }


        const vic = GameState.checkTicTacToe(this.board, x => Array.isArray(x));
        // noinspection JSIncompatibleTypesComparison
        if (vic === null) {
            this.status = null;
        } else if (vic) {
            this.status = false;
        } else {
            this.turn = !this.turn;
        }
        return true;
    }

    /**
     * Check whether a board of tic tac toe has been won
     * @param {(boolean|*)[][]} board The game board
     * @param {Function} tieCondition A function that returns true if a passed board element is empty
     * @returns {?boolean} True if the game is won, false if not, and null for a tie
     */
    static checkTicTacToe(board, tieCondition) {

        function check3(i1, j1, i2, j2, i3, j3) {
            function get(i, j) {
                if (typeof board[i][j] === "boolean") {
                    return board[i][j]
                } else {
                    return null;
                }
            }

            const a = get(i1, j1);
            const b = get(i2, j2);
            const c = get(i3, j3);
            return a !== null && a === b && b === c;
        }

        for (let i = 0; i < 3; i++) {
            if (check3(i, 0, i, 1, i, 2)) {
                return true;
            }
            if (check3(0, i, 1, i, 2, i)) {
                return true;
            }
        }
        if (
            check3(0, 0, 1, 1, 2, 2) ||
            check3(2, 0, 1, 1, 0, 2)
        ) {
            return true;
        }

        // check for tie
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (tieCondition(board[i][j])) {
                    return false;
                }
            }
        }

        return null;
    }
}