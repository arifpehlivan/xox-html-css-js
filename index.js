const boxs = document.querySelectorAll(".box");
const playerText = document.getElementById("player");
let player = "X";
let gameOver = false;
let winner;

function startGame() {
    playerText.textContent = `Player ${player}`;
    boxs.forEach(box => box.addEventListener("click", () => {

        if (box.textContent === "") {
            box.textContent = player;
            changePlayer();
            tie();
        }

        if (player === "X") {
            box.style.color = "white";

        } else {
            box.style.color = "black";
        }
        if (gameOver) {
            playerText.textContent = `Game is over ${winner} won`;
            boxs.forEach(box => box.style.pointerEvents = "none");
        }
    }))
}

function changePlayer() {
    win();
    tie();
    if (player === "X") {
        player = "O";
        playerText.textContent = `Player ${player}`;
        playerText.style.color = "white";
        return;
    } else if (player === "O") {
        player = "X";
        playerText.textContent = `Player ${player}`;
        playerText.style.color = "black";
    }
}

function win() {
    let row1 = boxs[0].textContent == boxs[1].textContent &&
        boxs[1].textContent == boxs[2].textContent && boxs[0].textContent !== "";
    let row2 = boxs[3].textContent == boxs[4].textContent &&
        boxs[4].textContent == boxs[5].textContent && boxs[3].textContent !== "";
    let row3 = boxs[6].textContent == boxs[7].textContent &&
        boxs[7].textContent == boxs[8].textContent && boxs[6].textContent !== "";

    let col1 = boxs[0].textContent == boxs[3].textContent &&
        boxs[3].textContent == boxs[6].textContent && boxs[0].textContent !== "";
    let col2 = boxs[1].textContent == boxs[4].textContent &&
        boxs[4].textContent == boxs[7].textContent && boxs[1].textContent !== "";
    let col3 = boxs[2].textContent == boxs[5].textContent &&
        boxs[5].textContent == boxs[8].textContent && boxs[2].textContent !== "";

    let dia1 = boxs[0].textContent == boxs[4].textContent &&
        boxs[4].textContent == boxs[8].textContent && boxs[0].textContent !== "";
    let dia2 = boxs[2].textContent == boxs[4].textContent &&
        boxs[2].textContent == boxs[6].textContent && boxs[2].textContent !== "";

    if (row1 || row2 || row3 || col1 || col2 || col3 || dia1 || dia2) {
        gameOver = true;
    }
    if (row1) {
        boxs[0].style.background = "red";
        boxs[1].style.background = "red";
        boxs[2].style.background = "red";
        return winner = boxs[0].textContent;
    }
    if (row2) {
        boxs[3].style.background = "red";
        boxs[4].style.background = "red";
        boxs[5].style.background = "red";
        return winner = boxs[3].textContent;
    }
    if (row3) {
        boxs[6].style.background = "red";
        boxs[7].style.background = "red";
        boxs[8].style.background = "red";
        return winner = boxs[6].textContent;
    }
    if (col1) {
        boxs[0].style.background = "red";
        boxs[3].style.background = "red";
        boxs[6].style.background = "red";
        return winner = boxs[0].textContent;
    }
    if (col2) {
        boxs[1].style.background = "red";
        boxs[4].style.background = "red";
        boxs[7].style.background = "red";
        return winner = boxs[3].textContent;
    }
    if (col3) {
        boxs[2].style.background = "red";
        boxs[5].style.background = "red";
        boxs[8].style.background = "red";
        return winner = boxs[6].textContent;
    }
    if (dia1) {
        boxs[0].style.background = "red";
        boxs[4].style.background = "red";
        boxs[8].style.background = "red";
        return winner = boxs[0].textContent;
    }
    if (dia2) {
        boxs[2].style.background = "red";
        boxs[4].style.background = "red";
        boxs[6].style.background = "red";
        return winner = boxs[2].textContent;
    }
}
function tie() {
    const values = [];
    boxs.forEach(box => values.push(box.textContent));
    console.log(values);
    if (!values.includes("")) {
        playerText.textContent = "Tie";
        boxs.forEach(box => box.style.pointerEvents = "none");
    }
}
startGame()