let one = undefined;
let tow = undefined;
let three = undefined;
let four = undefined;
let five = undefined;
let six = undefined;
let seven = undefined;
let eight = undefined;
let nine = undefined;

let move = "X";
let lastMove = "O";
function toggleAField(number) {
    const element = document.getElementById(number.toString());
    if (number === 1) {
        if (one === undefined) {
            one = move;
            element.innerHTML = move;
            if (move === "O") {
                move = "X";
                lastMove = "O";
            } else {
                move = "O";
                lastMove = "X";
            }
        }
    }
    if (number === 2) {
        if (tow === undefined) {
            tow = move;
            element.innerHTML = move;
            if (move === "O") {
                move = "X";
                lastMove = "O";
            } else {
                move = "O";
                lastMove = "X";
            }
        }
    }
    if (number === 3) {
        if (three === undefined) {
            three = move;
            element.innerHTML = move;
            if (move === "O") {
                move = "X";
                lastMove = "O";
            } else {
                move = "O";
                lastMove = "X";
            }
        }
    }
    if (number === 4) {
        if (four === undefined) {
            four = move;
            element.innerHTML = move;
            if (move === "O") {
                move = "X";
                lastMove = "O";
            } else {
                move = "O";
                lastMove = "X";
            }
        }
    }
    if (number === 5) {
        if (five === undefined) {
            five = move;
            element.innerHTML = move;
            if (move === "O") {
                move = "X";
                lastMove = "O";
            } else {
                move = "O";
                lastMove = "X";
            }
        }
    }
    if (number === 6) {
        if (six === undefined) {
            six = move;
            element.innerHTML = move;
            if (move === "O") {
                move = "X";
                lastMove = "O";
            } else {
                move = "O";
                lastMove = "X";
            }
        }
    }
    if (number === 7) {
        if (seven === undefined) {
            seven = move;
            element.innerHTML = move;
            if (move === "O") {
                move = "X";
                lastMove = "O";
            } else {
                move = "O";
                lastMove = "X";
            }
        }
    }
    if (number === 8) {
        if (eight === undefined) {
            eight = move;
            element.innerHTML = move;
            if (move === "O") {
                move = "X";
                lastMove = "O";
            } else {
                move = "O";
                lastMove = "X";
            }
        }
    }
    if (number === 9) {
        if (nine === undefined) {
            nine = move;
            element.innerHTML = move;
            if (move === "O") {
                move = "X";
                lastMove = "O";
            } else {
                move = "O";
                lastMove = "X";
            }
        }
    }
    checkWin();
}

function checkWin() {
    if (one === tow && tow === three && one !== undefined) {
        reset();
        document.getElementById("ttt").innerHTML = lastMove + " wins!";
    }
    if (four === five && five === six && four !== undefined) {
        reset();
        document.getElementById("ttt").innerHTML = lastMove + " wins!";
    }
    if (seven === eight && eight === nine && seven !== undefined) {
        reset();
        document.getElementById("ttt").innerHTML = lastMove + " wins!";
    }
    if (one === four && four === seven && one !== undefined) {
        reset();
        document.getElementById("ttt").innerHTML = lastMove + " wins!";
    }
    if (tow === five && five === eight && tow !== undefined) {
        reset();
        document.getElementById("ttt").innerHTML = lastMove + " wins!";
    }
    if (three === six && six === nine && three !== undefined) {
        reset();
        document.getElementById("ttt").innerHTML = lastMove + " wins!";
    }
    if (one === five && five === nine && one !== undefined) {
        reset();
        document.getElementById("ttt").innerHTML = lastMove + " wins!";
    }
    if (three === five && five === seven && three !== undefined) {
        reset();
        document.getElementById("ttt").innerHTML = lastMove + " wins!";
    }
    if (
        one !== undefined &&
        tow !== undefined &&
        three !== undefined &&
        four !== undefined &&
        five !== undefined &&
        six !== undefined &&
        seven !== undefined &&
        eight !== undefined &&
        nine !== undefined
    ) {
        reset();
        document.getElementById("ttt").innerHTML = "Draw! (resetting...)";
    }
}

function reset() {
    one = undefined;
    tow = undefined;
    three = undefined;
    four = undefined;
    five = undefined;
    six = undefined;
    seven = undefined;
    eight = undefined;
    nine = undefined;
    move = "X";
    document.getElementById("1").innerHTML = "-";
    document.getElementById("2").innerHTML = "-";
    document.getElementById("3").innerHTML = "-";
    document.getElementById("4").innerHTML = "-";
    document.getElementById("5").innerHTML = "-";
    document.getElementById("6").innerHTML = "-";
    document.getElementById("7").innerHTML = "-";
    document.getElementById("8").innerHTML = "-";
    document.getElementById("9").innerHTML = "-";
}