let bonk = false
function bonkTimer() {
    if (bonk) {
        let audio = new Audio('/assets/Bonkt.mp3')
        audio.play()
    }
}

