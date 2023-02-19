let bonk = false
let boxes = false
let currentSlide = 0
let facts = []
const possibleLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ/%&$#";
let interval = null;

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
    loadFactFile()
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

function loadFactFile() {
    console.log("Loading facts")
    // Load the fact json file from the server
    fetch("/assets/facts.json")
        .then(response => response.json())
        .then(data => {
            facts = data
            console.log(facts)
        });
}

function displayFact() {
    // Get a random fact
    // Display the fact
    document.getElementById("fact").innerText = facts[Math.floor(Math.random() * facts.length)]
}

// On load
window.onload = () => {
    document.querySelector("#box3").onmouseover = event => { // Copied from https://codepen.io/Hyperplexed/pen/rNrJgrd
        console.log("Hovered")
        let iteration = 0;

        clearInterval(interval);

        interval = setInterval(() => {
            event.target.innerText = event.target.innerText
                .split("")
                .map((letter, index) => {
                    if(index < iteration) {
                        return event.target.dataset.value[index];
                    }

                    return letters[Math.floor(Math.random() * 26)]
                })
                .join("");

            if(iteration >= event.target.dataset.value.length){
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);
    }
}