const choice = ["rock", "paper", "scissors"];


function getComputerChoice(){
    const randomChoice = Math.floor(Math.random() * choice.length);
    return choice[randomChoice];
}

const playerSelection = prompt("Enter Rock,Paper or Scissors:");
const playerSelectionLower = playerSelection.toLowerCase();
console.log(playerSelectionLower);


const computerSelection = getComputerChoice();
function playRound(playerSelection, computerSelection) {
    
}