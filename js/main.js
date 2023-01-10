const splitWords = id  => { // Yes I know could be done on the server side, but im to lazy to write it all down .-.
    const element = document.getElementById(id),
        text = element.innerText.split(" ");

    element.innerText = "";

    text.forEach(letter => {
        const span = document.createElement("span");
        span.innerText = letter;
        span.className = "letter";
        element.appendChild(span);
    });
}
let bonk = false
function bonkTimer() {
    if (bonk) {
        let audio = new Audio('/assets/Bonkt.mp3')
        audio.play()
    }
}

