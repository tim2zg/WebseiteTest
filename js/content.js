// On document ready without jQuery

let quellen = null;
document.addEventListener("DOMContentLoaded", function() {
    // Load quellen file from server it has the same name as the html file
    let path = window.location.pathname;
    let page = path.split("/").pop();
    let filename = page.split(".")[0];
    fetch("/assets/" + filename + ".json")
        .then(response => response.json())
        .then(data => {
            quellen = data
            console.log(quellen)
        });

    // Split the text into phrases
    const phrases = document.getElementById("text").textContent.split(".")
    // Split into spans
    let counter = 0;
    const spans = phrases.map(phrase => {
        if (phrase.length === 0) {
            return null
        } else {
            counter++
            const span = document.createElement("span")
            span.innerText = phrase + "."
            span.id = counter.toString()
            return span
        }
    });

    // Add hover event to the spans
    spans.forEach(span => {
        if (span === null) {

        } else {
            span.addEventListener("mouseover", function() {
                // Get the id of the span
                let id = span.id
                // Make the span wheat
                span.style.color = "wheat"
                // Get the quellen Liste with the id
                let htmlQuellenListe = document.getElementById("quellenliste")
                // Clear the quellen Liste
                htmlQuellenListe.innerHTML = ""
                // Get the quellen from the quellen object
                let quellenListe = quellen[id]["quellen"]
                // Add the quellen to the quellen Liste
                for (let i in quellenListe) {
                    // Create a li element with a a element inside
                    let li = document.createElement("li")
                    let a = document.createElement("a")

                    a.href = quellenListe[i]
                    a.innerText = i

                    li.appendChild(a)
                    htmlQuellenListe.appendChild(li)
                }
                // Get the html img element
                let img = document.getElementById("img")
                // Set the src of the img element
                img.src = quellen[id]["image"]
                img.onclick = function() {
                    window.open(quellen[id]["image"], "_blank")
                }
            })
            span.addEventListener("mouseout", function() {
                // Make the span black
                span.style.color = "white"
            });
        }
    });

    // Clear the text
    document.getElementById("text").textContent = ""
    // Append the spans
    spans.forEach(span => {
        if (span === null) {
        } else {
            document.getElementById("text").appendChild(span)
        }
    });

});