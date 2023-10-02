const choice = ["rock", "paper", "scissors"];


function getComputerChoice(){
    const randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];
}

const round = prompt("Enter no of rounds:");


const computerSelection = getComputerChoice();
let playerScore=0,computerScore=0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection===computerSelection) {
        return "Its a tie!"
    }
    else if(
        (playerSelection==="rock" && computerSelection==="scissors") ||
        (playerSelection==="scissors" && computerSelection==="paper") ||
        (playerSelection==="paper" && computerSelection==="rock")
    ){
        playerScore++;
        return `You Won! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        return `You Lost!  ${computerSelection} beats ${playerSelection}`;
    }
}

function game() {
    for (let index = 0; index <= round; index++) {
        const playerSelection = prompt("Enter Rock,Paper or Scissors:");
        const playerSelectionLower = playerSelection.toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log(`Your score is ${playerScore}`);
}


console.log(game());