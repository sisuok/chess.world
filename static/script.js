const board = document.getElementById("board");
const turnText = document.getElementById("turn");

let turn = "white";
let selected = null;

const pieces = [
    "♜","♞","♝","♛","♚","♝","♞","♜",
    "♟","♟","♟","♟","♟","♟","♟","♟",
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","","",
    "♙","♙","♙","♙","♙","♙","♙","♙",
    "♖","♘","♗","♕","♔","♗","♘","♖"
];

function drawBoard() {
    board.innerHTML = "";
    pieces.forEach((piece, i) => {
        const square = document.createElement("div");
        square.className = "square " + ((Math.floor(i/8) + i) % 2 === 0 ? "white" : "black");
        square.textContent = piece;
        square.onclick = () => handleClick(i, square);
        board.appendChild(square);
    });
}

function handleClick(index, square) {
    if (selected === null && pieces[index] !== "") {
        selected = index;
        square.classList.add("selected");
    } 
    else if (selected !== null) {
        pieces[index] = pieces[selected];
        pieces[selected] = "";
        selected = null;
        turn = turn === "white" ? "black" : "white";
        turnText.textContent = "Turn: " + (turn === "white" ? "White" : "Black");
        drawBoard();
    }
}

drawBoard();
