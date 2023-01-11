const splitWords = id  => { // Yes I know could be done on the server side, but im to lazy to write it all down .-.
    const elements = document.getElementsByClassName(id)
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i]
        const text = element.innerText
        const words = text.split('')
        element.innerHTML = words.map(word => `<span class="letter">${word}</span>`).join(' ')
    }

}
let bonk = false
function bonkTimer() {
    if (bonk) {
        let audio = new Audio('/assets/Bonkt.mp3')
        audio.play()
    }
}