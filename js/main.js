let bonk = false
let boxes = false
function bonkTimer() {
    if (bonk) {
        let audio = new Audio('/assets/Bonkt.mp3')
        audio.play()
    }
}

function enhance(id) {
    // Split the word into letters
    const word = document.getElementById(id);
    const letters = word.innerText.split("");
    // Clear the word
    word.innerText = "";
    // Add each letter as a span
    letters.forEach(letter => {
        const span = document.createElement("span");
        span.innerText = letter;
        span.className = "letter";
        word.appendChild(span);
    });
}
function toggleCollection() {
    boxes = !boxes
    if (boxes) {
        const title = document.getElementById("title")
        title.style.outline = "wheat 3px double"
        title.style.outlineOffset = "5px"
        const boxes = document.getElementsByClassName("boxes")
        boxes[0].style.display = "grid"
        boxes[1].style.display = "grid"
        boxes[2].style.display = "grid"
    } else {
        const title = document.getElementById("title")
        title.style.outline = "none"
        title.style.outlineOffset = "none"
        const boxes = document.getElementsByClassName("boxes")
        boxes[0].style.display = "none"
        boxes[1].style.display = "none"
        boxes[2].style.display = "none"
    }
}
