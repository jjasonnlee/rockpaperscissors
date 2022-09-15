function getComputerChoice() {
    let choices = Array('Rock','Paper','Scissors');
    let choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if ((playerSelection === 'rock' && computerSelection == 'scissors') || (playerSelection === 'scissors' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'rock')) {
        return `You won! ${playerSelection} beats ${computerSelection}`;
    }
    else if ((playerSelection === 'rock' && computerSelection == 'rock') || (playerSelection === 'scissors' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'paper')) {
        return `It's a draw! Both of you chose ${computerSelection}`;
    }
    else if ((playerSelection === 'scissors' && computerSelection == 'rock') || (playerSelection === 'paper' && computerSelection === 'scissors') || (playerSelection === 'rock' && computerSelection === 'paper')) {
        return `You lost! ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playerchoice = prompt('Rock, paper or scissors? ');
        console.log(playRound(playerchoice,getComputerChoice()));
    }
}


