const p1Button = document.getElementById('p1Button');
const p2Button = document.getElementById('p2Button');
const p1Display = document.getElementById('p1Display');
const p2Display = document.getElementById('p2Display');
const selectElement = document.getElementById('playTo');
const message = document.getElementById('message');

let score1 = 0;
let score2 = 0;

function addScore(player) {
    const maxScore = parseInt(selectElement.value);

    if (player === 1) {
        score1 += 1;
        p1Display.innerText = score1;

        if (score1 === maxScore) {
            message.innerText = "Player 1 vencedor";
            disableButtons()
        }
    } else if (player === 2) {
        score2 += 1;
        p2Display.innerText = score2;

        if (score2 === maxScore) {
            message.innerText = "Player 2 vencedor";
            disableButtons()
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
}

function disableButtons(){
    p1Button.disabled = true;
    p2Button.disabled = true;
}