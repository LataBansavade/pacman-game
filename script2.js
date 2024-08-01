


let bubbleBox = "";
const pbtm = document.getElementById("pbtm");
const timerval = document.getElementById("timerval");
const hitval = document.getElementById("hitval");
const scoreval = document.getElementById("scoreval");
let newhit;

function makeBubble() {
    bubbleBox = ""; // Reset bubbleBox
    for (let i = 1; i <87; i++) {
        bubbleBox += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
    }
    pbtm.innerHTML = bubbleBox;
}
makeBubble();

let timer = 60;
let timerint;

function runTimer() {
    timerint = setInterval(function() {
        if (timer > 0) {
            timer--;
            timerval.textContent = timer;
        } else {
            clearInterval(timerint);
            gameOver(true); // Pass true to indicate timer completion
        }
    }, 1000);
}
runTimer();

function getnewhit() {
    newhit = Math.floor(Math.random() * 10);
    hitval.textContent = newhit;
}
getnewhit();

let score = 0;

function increaseScore() {
    score += 10;
    scoreval.textContent = score;
}

function gameOver(isTimeUp) {
    let message = isTimeUp ? `Time's Up! Your score is ${score}` : 'oops!! wrong selection';
    pbtm.innerHTML = `<h1>${message}</h1><button id="tryAgain">Try Again</button>`;
    const tryAgainBtn = document.getElementById("tryAgain");
    tryAgainBtn.addEventListener("click", function() {
        location.reload(); // Reload the page to restart the game
    });
}

pbtm.addEventListener("click", function(details) {
    let Num = Number(details.target.textContent);
    if (Num === newhit) {
        increaseScore();
        makeBubble();
        getnewhit();
    } else {
        clearInterval(timerint);
        gameOver(false); // Pass false to indicate wrong selection
    }
});






