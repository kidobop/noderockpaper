const choice = ["rock", "paper", "scissors"];


function getComputerChoice(){
    const randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];
}

const playerSelection = prompt("Enter Rock,Paper or Scissors:");
const playerSelectionLower = playerSelection.toLowerCase();

const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection===computerSelection) {
        return "Its a tie!"
    }
    else if(
        (playerSelection==="rock" && computerSelection==="scissors") ||
        (playerSelection==="scissors" && computerSelection==="paper") ||
        (playerSelection==="paper" && computerSelection==="rock")
    ){
        return `You Won! ${playerSelection} beats ${computerSelection}`;
    } else return `You Lost!  ${computerSelection} beats ${playerSelection}`;
}

console.log(playRound(playerSelection,computerSelection));