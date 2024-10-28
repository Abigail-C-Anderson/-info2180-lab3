"use strict";

let currentState = [];
let isWinner = false;
let currentColumn, currentDiagonal, currentRow;

let rowPositions = {};
let columnPositions = {};
let diagonalPositions = {};

function clicker(square) {
    if (currentState.length == 0 || currentState[0] == "O") {
        square.textContent = "X";
        square.classList.add("X");
        currentState[0] = "X";
    } else if (currentState[0] == "X") {
        square.textContent = "O";
        square.classList.add("O");
        currentState[0] = "O";
    }

    currentRow = rowPositions[square.id];
    currentColumn = columnPositions[square.id];
    currentDiagonal = diagonalPositions[square.id];

    if (checkRow(rs[currentRow], currentState[0]) || checkColumn(cs[currentColumn], currentState[0]) || checkDiagonal(ds[currentDiagonal], currentState[0])) {
        isWinner = true;
    }

    if (isWinner) {
        let status = document.getElementById("status");
        status.classList.add("you-won");
        status.textContent = "Congratulations! " + currentState[0] + " is the Winner!";
    }
}

function addHover(square) {
    square.classList.add("hover");
}

function removeHover(square) {
    square.classList.remove("hover");
}

function checkRow(row, player) {
    for (let count = 0; count < row.length; count++) {
        if (!document.getElementById(row[count]).classList.contains(player)) {
            return false;
        }
    }
    return true;
}

function checkColumn(column, player) {
    for (let count = 0; count < column.length; count++) {
        if (!document.getElementById(column[count]).classList.contains(player)) {
            return false;
        }
    }
    return true;
}

function checkDiagonal(diagonal, player) {
    if (diagonal != null) {
        for (let count = 0; count < diagonal.length; count++) {
            if (!document.getElementById(diagonal[count]).classList.contains(player)) {
                return false;
            }
        }
        return true;
    }
    return false;
}

// Possible winning combinations
let rs = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let cs = [[1, 4, 7], [2, 5, 8], [3, 6, 9]];
let ds = [[1, 5, 9], [3, 5, 7]];

window.onload = function () {
    let boardSquares = document.getElementById("board").children;
    for (let count = 0; count < boardSquares.length; count++) {
        boardSquares[count].className = "square";
        boardSquares[count].setAttribute("onclick", "clicker(this)");
        boardSquares[count].setAttribute("onmouseover", "addHover(this)");
        boardSquares[count].setAttribute("onmouseout", "removeHover(this)");

        let idTracker = count + 1;
        boardSquares[count].setAttribute("id", idTracker);

        // Computing the diagonal's possible position
        if (idTracker == 1 || idTracker == 5 || idTracker == 9) {
            diagonalPositions[boardSquares[count].id] = 0;
        }
        if (idTracker == 3 || idTracker == 5 || idTracker == 7) {
            diagonalPositions[boardSquares[count].id] = 1;
        }

        // Computing the column's possible position
        if (idTracker == 1 || idTracker == 4 || idTracker == 7) {
            columnPositions[boardSquares[count].id] = 0;
        }
        if (idTracker == 2 || idTracker == 5 || idTracker == 8) {
            columnPositions[boardSquares[count].id] = 1;
        }
        if (idTracker == 3 || idTracker == 6 || idTracker == 9) {
            columnPositions[boardSquares[count].id] = 2;
        }

        // Computing the row's possible position
        if (idTracker <= 3) {
            rowPositions[boardSquares[count].id] = 0;
        }
        if (idTracker > 3 && idTracker <= 6) {
            rowPositions[boardSquares[count].id] = 1;
        }
        if (idTracker > 6 && idTracker <= 9) {
            rowPositions[boardSquares[count].id] = 2;
        }
    }
};