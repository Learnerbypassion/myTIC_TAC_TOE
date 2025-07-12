console.log("Welcome to tic-tac-toe");
let click = new Audio("uClick.mp3");
let win = new Audio("win.mp3");
let draw = new Audio("draw.mp3");
let bgmusic = new Audio("backgroundmusic.mp3");
let turnO = true;
const wPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
let resetBtn = document.getElementById("reset");
let newGamebtn = document.getElementById("newgame-btn");
const resetGmae = () => {
    turnO = true;
    for (let box of boxes) {
        box.disabled = false;
        document.getElementById("Turn").innerText = "Turn for O";
        document.getElementById("Turn").style.visibility = "visible"
        document.getElementById("imgbox").style.visibility = "hidden";
        document.getElementById("win-msg").style.visibility = "hidden";
        document.getElementById("win-msg").innerHTML = "";
        document.getElementById("newgame-btn").style.visibility = "hidden";
        box.innerHTML = "";
    }
    count = 0;
    winner = 0;
    document.getElementById("Turn").style.width = "45%";

}
resetBtn.addEventListener("click", function () {
    console.log("clicked reset ");
    resetGmae();
    click.play();
});
newGamebtn.addEventListener("click", function () {
    console.log("clicked newGame ");
    resetGmae();
    resetBtn.style.visibility = "visible";
    click.play();
});

let boxes = document.querySelectorAll(".box");
let count = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        click.play();
        console.log("Hi , you clicked ");
        if (turnO) {
            box.innerHTML = "O";
            document.getElementById("Turn").innerText = "Turn for X";
            turnO = false;
        } else {
            box.innerHTML = "X";
            document.getElementById("Turn").innerText = "Turn for O";
            turnO = true;
        }
        box.disabled = true;
        count++;
        checkWinner();
        if (count === 9 && winner != 1) {
            console.log("Draw0");
            document.getElementById("Turn").innerText = "The Game is Draw";
            document.getElementById("Turn").style.width = "60%";
            draw.play();
        }
    });
})
let winner = 0;
const checkWinner = () => {
    for (let pattern of wPattern) {
        console.log(pattern[0], pattern[1], pattern[2]);
        console.log(boxes[pattern[0]].innerHTML, boxes[pattern[1]].innerHTML, boxes[pattern[2]].innerHTML);
        let pos1val = boxes[pattern[0]].innerHTML;
        let pos2val = boxes[pattern[1]].innerHTML;
        let pos3val = boxes[pattern[2]].innerHTML;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                document.getElementById("imgbox").style.visibility = "visible";
                document.getElementById("win-msg").style.visibility = "visible";
                document.getElementById("win-msg").innerHTML = `<h1>Congratulation, The Winner-${pos1val}</h1>`;
                document.getElementById("newgame-btn").style.visibility = "visible";
                win.play();
                document.getElementById("Turn").innerText = "";
                document.getElementById("Turn").style.visibility = "hidden"
                for (let box of boxes) {
                    box.disabled = true;
                }
                resetBtn.style.visibility = "hidden";
                winner = 1;
            }
        }
    }
}

