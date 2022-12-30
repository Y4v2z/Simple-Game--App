const wordElement = document.getElementById("word");
const popup = document.getElementById("popup-container");
const message = document.getElementById("success-message");
const items = document.querySelectorAll(".item");
const wrongLettersElement = document.getElementById("wrong-letters");
const warning = document.getElementById("message");
const PlayAgainBtn = document.getElementById("play-again");
let selectedWord = getRandomWord();
const correctLetters = ["a"];
const wrongLetters = [];
function getRandomWord() {
    const words = ["javascript", "galatasaray", "paris", "nadal", "playsatation", "software"];
    return words[Math.floor(Math.random() * words.length)];
};
function displayWord() {
    wordElement.innerHTML = `
    ${selectedWord.split("").map(letter => `
    <div class="letter">
       ${correctLetters.includes(letter) ? letter : ""}
    </div>

    `).join("")}
     
    `;
    const w = wordElement.innerText.replace(/\n/g, "");
    if (w === selectedWord) {
        popup.style.display = 'flex';
        message.innerText = "Congratulations. You Won:)"
    }
}
function upDateWrongLetters() {
    wrongLettersElement.innerHTML = `
    ${wrongLetters.length > 0 ? `<h3>Wrong Letters</h3>` : ""}
    ${wrongLetters.map(letter => `<span>${letter}</span>`)}    
    `;
    items.forEach(item, index => {
        const errorCount = wrongLetters.length;
        if (index < errorCount) {
            item.style.display = "block";
        } else {
            item.style.display = "none";

        }
    })
    if (wrongLetters.length === items.length) {
        popup.style.display = 'flex';
        message.innerText = "You Lost :("

    }
};
function displayWarning() {
    warning.classList("show");
    setTimeout(() => {
        warning.classList.remove("show");
    }, 2000);
}
PlayAgainBtn.addEventListener("click", function () {
    correctLetters.splice(0);
    wrongLetters.splice(0);
    selectedWord = getRandomWord();
    displayWord();
    upDateWrongLetters();
    popup.style.display = "none";
})
window.addEventListener("keydown", function (e) {
    if ((e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode = 222)) {
        const letter = e.key;
        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter);
                displayWord();
            } else {
                displayWarning();
            }
        } else {
            if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);
                upDateWrongLetters();
            } else {
                displayWarning();
            }
        }
    }
})
displayWord();