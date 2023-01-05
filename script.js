const wordElement = document.getElementById("word");
const popup = document.getElementById("popup-container");
const message = document.getElementById("success-message");
const items = document.querySelectorAll(".item");
const wrongLettersElement = document.getElementById("wrong-letters");
const warning = document.getElementById("message");
const PlayAgainBtn = document.getElementById("play-again");
let selectedWord = getRandomWord();
const correctLetters = ["a","j","g","t","i"];
const wrongLetters = [];
function getRandomWord() {
    const words = ["javascript", "galatasaray", "paris", "nadal", "playstation", "software"];
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
    let wrongAnsver=items.length;
    let right=
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
    items.forEach((item, index) => {
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
    warning.classList.add("show");
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
// var hak, can;
// var tahmin, sayac = 0
// var sayi = Math.floor((Math.random() * 10) + 1);
// can = Number(prompt("kaç kerede bileceksiniz"));
// hak = can;
// console.log(sayi);

// while (hak > 0) {
//     hak--;
//     sayac++;
//     tahmin = Number(prompt("Bir Sayı Giriniz"));
//     if (sayi == tahmin) {
//         console.log(`Tebrikler ${sayac} defada bildiniz.`)
//         console.log(`puan: ${100 - (100 / can) * (sayac - 1)}`);
//         break;
//     } else if (sayi > tahmin) {

//         console.log("Tahmininizi arttırın");
//     } else {
//         console.log("tahmininizi azaltın");
//     }
//     if (hak == 0) {
//         console.log('Hakkınız bitti. sayı :' + sayi);
//     }
// }

// var welcome=document.getElementById("welcome");
// // message.classList="alert alert-success show fade";
// // message.innerHTML="success message"
// var bsAlert= new bootstrap.Alert(welcome)
// welcome.addEventListener("close.bs.alert",function(){
//   console.log("alert kapanıyor...");
// });
// welcome.addEventListener("closed.bs.alert",function(){
//   console.log("alert kapandı");
// });
//   setTimeout(function(){
//       bsAlert.close();
//   },2000)




