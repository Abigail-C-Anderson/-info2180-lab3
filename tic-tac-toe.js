"use strict";
window.onload=function () {
    let boardSquares=document.getElementById("board").children
    for (let count=0;count<boardSquares.length;count++) {
        boardSquares[count].className="square"
    }
}