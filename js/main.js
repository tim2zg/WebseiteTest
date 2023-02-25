let bonk = false
let boxes = false
let currentSlide = 0
let facts = [
    "Die Yoruba stammen vom Odua ab.",
    "Die meisten Yoruba leben in Nigeria.",
    "Die Yoruba sind eine der größten Ethnien in Afrika.",
    "Ungefähr 20% der Yoruba leben immer noch ihren traditionellen Glauben.",
    "Die Yoruba haben die höchste Rate an Zwillingsgeburten in Afrika.",
    "75% der Yoruba sind Bauern."
]
const possibleLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ/%&$#";
let interval = null;

function bonkTimer() {
    if (bonk) {
        let audio = new Audio('assets/Bonkt.mp3')
        audio.play()
    }
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

function nextSlide() {
    currentSlide++
    if (currentSlide > 4) {
        currentSlide = 1
    }
    const slides = document.getElementsByClassName("slide")
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slides[currentSlide -1].style.display = "unset"
}

function previousSlide() {
    currentSlide--
    if (currentSlide < 1) {
        currentSlide = 4
    }
    const slides = document.getElementsByClassName("slide")
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    slides[currentSlide -1].style.display = "unset"
}

function animateText() { // animate by the way is a repopulated function
    // Inspirited by https://codepen.io/Hyperplexed/pen/rNrJgrd
    // Get a random fact
    let fact = facts[Math.floor(Math.random() * facts.length)];

    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
        document.getElementById("fact").innerText = fact.split("").map((letter, index) => {
            if(index < iteration) {
                return fact[index];
            } else {
                return possibleLetters[Math.floor(Math.random() * 26)]
            }
        }).join("");

        if(iteration >= fact.length) {
            clearInterval(interval);
        }

        iteration += 1 / 3;
    }, 30);

}
