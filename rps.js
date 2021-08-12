let winCount = 0;
let loseCount = 0;
let isDraw = false;
const championMessage = "I WANT TO THANK MY MOMMA FOR THIS WIN";
const loserMessage = "THIS GAME ALWAYS SUCKED";

function playRound(playerSelection, computerSelection) {
    let winMessage = "You win, go off KING. " + playerSelection + " wins against " + computerSelection;
    let loseMessage = "It's ok, we'll get them next time. " + playerSelection + " loses to " + computerSelection;
    let draw = "Alright, we'll call it a Draw.  " + playerSelection + " equals " + computerSelection;
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
    return message;
    //console.log("The result is " + winCount + " - " + loseCount);
}

function computerPlay() {
    const plays = ['Rock', 'Paper', 'Scissors'];
    let randIndex = Math.floor(Math.random() * 3);
    return plays[randIndex];
}

const results = document.querySelector('#results');

const computerSide = document.querySelector('.computerSide');
const computerPickedTtile = document.createElement('h1');
computerPickedTtile.textContent = "Computer Picked";
computerSide.appendChild(computerPickedTtile);

const computerChoice = document.createElement('button');
computerChoice.style.color = "red";
const computerChoiceImg = document.createElement('img');
computerChoice.classList.add('button');

const leftdiv = document.createElement('div');
const resultsdiv = document.createElement('div');
const rightdiv = document.createElement('div');

const currentScore = document.createElement('h2');

leftdiv.classList.add('results2');
resultsdiv.classList.add('results');
rightdiv.classList.add('results2');

let numberOfplays = 5;

const btnpressed = document.querySelectorAll('button');
btnpressed.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        let computerSelection = computerPlay();

        computerChoiceImg.setAttribute("src", `./${computerSelection}.jpg`);
        computerChoice.appendChild(computerChoiceImg);
        computerChoice.setAttribute("id", "computerSelection");
        computerSide.appendChild(computerChoice);

        let result = playRound(button.id, computerSelection);
        if (isDraw) {
            isDraw = false;
            numberOfplays++;
        }

        numberOfplays--;


        currentScore.textContent = winCount + " - " + loseCount;

        if (winCount > loseCount + numberOfplays) {
            result = championMessage;
            winCount = 0;
            loseCount = 0;
            numberOfplays = 5;
        }
        else if (loseCount > winCount + numberOfplays) {
            result = loserMessage;
            winCount = 0;
            loseCount = 0;
            numberOfplays = 5;
        }

        resultsdiv
            .textContent = result;
        resultsdiv
            .appendChild(currentScore);
        results.appendChild(leftdiv);
        results.appendChild(resultsdiv
        );
        results.appendChild(rightdiv);
    });
});
