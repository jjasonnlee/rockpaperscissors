function getComputerChoice() {
    let choices = Array('Rock','Paper','Scissors');
    let choice = Math.floor(Math.random() * choices.length);
    return choices[choice];
}
function game() {

    function playRound(playerSelection, computerSelection) {
        if ((playerSelection === 'rock' && computerSelection == 'Scissors') || (playerSelection === 'scissors' && computerSelection === 'Paper') || (playerSelection === 'paper' && computerSelection === 'Rock')) {
            playerWin += 1;
            result.textContent = `You won! ${playerSelection} beats ${computerSelection}! Player: ${playerWin} Computer: ${computerWin}`;
        }
        else if ((playerSelection === 'rock' && computerSelection == 'Rock') || (playerSelection === 'scissors' && computerSelection === 'Scissors') || (playerSelection === 'paper' && computerSelection === 'Paper')) {
            result.textContent = `It's a draw! Both of you chose ${computerSelection}! Player: ${playerWin} Computer: ${computerWin}`;
        }
        else if ((playerSelection === 'scissors' && computerSelection == 'Rock') || (playerSelection === 'paper' && computerSelection === 'Scissors') || (playerSelection === 'rock' && computerSelection === 'Paper')) {
            computerWin += 1;
            result.textContent = `You lost! ${computerSelection} beats ${playerSelection}! Player: ${playerWin} Computer: ${computerWin}`;
        }
    }
    computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
    if (playerWin === 5) {
        endresult.textContent = 'Game over! Player has 5 wins!';
        result.append(endresult);
    } else if (computerWin === 5) {
        endresult.textContent = 'Game over! Computer has 5 wins!';
        result.append(endresult);
    }
}

let playerWin = 0;
let computerWin = 0;
const rock = document.querySelector('#button1');
const paper = document.querySelector('#button2');
const scissors = document.querySelector('#button3');
const reset = document.querySelector('#reset');

reset.addEventListener('click', () => {
    playerWin = 0;
    computerWin = 0;
    result.textContent = '';
    endresult.textContent = '';
    resetresult.textContent = 'Reset! Score is now 0 : 0';
    result.append(resetresult);
})

rock.addEventListener('click', () => {
    playerSelection = 'rock';
    game();
});
paper.addEventListener('click', () => {
    playerSelection = 'paper';
    game();
});
scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    game();
})


const result = document.querySelector('div');
const endresult = document.createElement('div');
const resetresult = document.createElement('div');
