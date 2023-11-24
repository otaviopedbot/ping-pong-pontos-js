const p1Button = document.getElementById('p1Button');
const p2Button = document.getElementById('p2Button');
const p1Display = document.getElementById('p1Display');
const p2Display = document.getElementById('p2Display');
const selectElement = document.getElementById('playTo');
const message = document.getElementById('message');

let score1 = 0;
let score2 = 0;
let currentMaxScore = 0;


selectElement.addEventListener('change', function () {
    reset();
    currentMaxScore = parseInt(selectElement.value);
});


function addScore(player) {

    const maxScore = parseInt(selectElement.value);

    if (player === 1) {
        score1 += 1;
        p1Display.innerText = score1;

        if (score1 == maxScore) {
            message.innerText = "Player 1 vencedor";
            p1Display.classList.add("green");
            p2Display.classList.add("red");
            disableButtons();
        }
    } else if (player === 2) {
        score2 += 1;
        p2Display.innerText = score2;

        if (score2 == maxScore) {
            message.innerText = "Player 2 vencedor";
            p2Display.classList.add("green");
            p1Display.classList.add("red");
            disableButtons();
        }
    }
}

function reset() {
    score1 = 0;
    score2 = 0;
    message.innerText = "";
    p1Display.innerText = score1;
    p2Display.innerText = score2;
    p1Button.disabled = false;
    p2Button.disabled = false;
    p1Display.classList.remove("green");
    p1Display.classList.remove("red");
    p2Display.classList.remove("green");
    p2Display.classList.remove("red");
}

function disableButtons() {
    p1Button.disabled = true;
    p2Button.disabled = true;
}
