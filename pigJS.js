var scores, roundScore, activePlayer, dice, gamePlay;
activePlayer = 0;

function initial() {
    gamePlay = true
    scores = [0, 0];
    roundScore = 0;
    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;
    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;
    document.querySelector(".dice").style.display = "none";
    document.querySelector(".player-" + activePlayer + "-panel").classList.remove("winner");
}

function winner() {
    document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
}

initial();

// roll button
document.querySelector(".btn-roll").addEventListener("click", function() {

    if (gamePlay == true) {

        dice = Math.floor(Math.random() * 6) + 1;
        if (dice == 1) {
            roundScore = 0;
            document.querySelector('#current-' + activePlayer).textContent = 0;
            (activePlayer == 1) ? (activePlayer = 0) : (activePlayer = 1);
            document.querySelector(".player-0-panel").classList.toggle("active");
            document.querySelector(".player-1-panel").classList.toggle("active");
        }
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        document.querySelector(".dice").style.display = "block";
        document.querySelector(".dice").src = "dice-" + dice + ".png";
    }
});

//hold button
document.querySelector(".btn-hold").addEventListener("click", function() {
    if (gamePlay == true) {
        scores[activePlayer] += roundScore;
        document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];
        if (scores[activePlayer] >= 100) {
            winner();
            document.getElementById("name-" + activePlayer).textContent = "WINNER";
            gamePlay = false;
        } else {
            roundScore = 0;
            document.querySelector("#current-" + activePlayer).textContent = 0;
            (activePlayer == 1) ? (activePlayer = 0) : (activePlayer = 1);
            document.querySelector(".player-0-panel").classList.toggle("active");
            document.querySelector(".player-1-panel").classList.toggle("active");
        }
    }
});

//new button
document.querySelector(".btn-new").addEventListener("click", initial);