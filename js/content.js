// On document ready without jQuery

document.addEventListener("DOMContentLoaded", function() {
    // Split the text into phrases
    const phrases = document.getElementById("text").textContent.split(".")
    // Split into spans
    let counter = 0;
    const spans = phrases.map(phrase => {
        counter++
        const span = document.createElement("span")
        span.innerText = phrase
        span.id = counter.toString()
        return span
    });

    // Add hover event to the spans
    spans.forEach(span => {
        span.addEventListener("mouseover", function() {
            console.log("Hovered" + span.id)
        })
    });

    // Clear the text
    document.getElementById("text").textContent = ""
    // Append the spans
    spans.forEach(span => {
        document.getElementById("text").appendChild(span)
    });

});