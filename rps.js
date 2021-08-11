let winCount = 0;
let loseCount = 0;
let isDraw = false;

const btn = document.querySelectorAll('.button');
btn.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
      alert("SHEEEEEEEESH");
    });
  });

function playRound(playerSelection, computerSelection) {
    let winMessage = "You win, go off KING. " + playerSelection + " wins against " + computerSelection;
    let loseMessage = "It's ok, we'll get them next time. " + playerSelection + " loses to " + computerSelection;
    let draw = "a draw????? " + playerSelection + " equals " + computerSelection;
    let message = "";

    if (playerSelection == computerSelection) {
        message = draw;
        isDraw = true;
    }

    else if (playerSelection == 'Scissors') {
        if (computerSelection == 'Paper') {
            message = winMessage;
            winCount += 1;
        }
        else {
            message = loseMessage;
            loseCount += 1;
        }
    }
    else if (playerSelection == 'Paper') {
        if (computerSelection == 'Rock') {
            message = winMessage;
            winCount += 1;
        }
        else {
            message = loseMessage;
            loseCount += 1;
        }
    }
    else if (playerSelection == 'Rock') {
        if (computerSelection == 'Scissors') {
            message = winMessage;
            winCount += 1;
        }
        else {
            message = loseMessage;
            loseCount += 1;
        }
    }

    else {
        message = playerSelection + " is not a valid play";
        isDraw = true;
    }
    console.log(message);
    console.log("The result is " + winCount + " - " + loseCount);
}

function computerPlay() {
    const plays = ['Rock', 'Paper', 'Scissors'];
    let randIndex = Math.floor(Math.random() * 3);
    return plays[randIndex];
}

function game() {

    let playerSelection = prompt("Choose: ").toLowerCase();
    playerSelection = playerSelection.replace(playerSelection[0], playerSelection[0].toUpperCase())
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    if (isDraw) {
        isDraw = false;
        return game();
    }

    if (winCount > loseCount) {
        console.log("GANHAMOS: " + winCount + " - " + loseCount + " CRRRRRRRRRRRRRRRRRRL ");
    }
    else {
        console.log("Também nunca gostei deste jogo: " + winCount + " - " + loseCount);
    }
}

game();
