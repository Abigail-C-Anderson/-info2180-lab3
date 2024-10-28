"use strict";
let currentState=[]
function clicker(square) {
    if (currentState.length==0 || currentState=="O")
    {
       square.innerHTML="X"
       currentState[0]="X"
       square.classList.add("X")
       
    }
    else if (currentState==("X"))
    {
        square.innerHTML="O"
        currentState[0]="O"
        square.classList.add("O")
        
    }
 }

function addHover (square) {
    square.classList.add("hover")
 }

function removeHover (square) {
    square.classList.remove("hover")
 }

window.onload=function () {
    let boardSquares=document.getElementById("board").children
    for (let count=0;count<boardSquares.length;count++) {
        boardSquares[count].className="square"
        boardSquares[count].setAttribute("onclick","clicker(this)")
        boardSquares[count].setAttribute("onmouseover","addHover(this)")
        boardSquares[count].setAttribute("onmouseout","removeHover(this)")
    }
}