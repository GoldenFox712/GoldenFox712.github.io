let playerChoice;
let computerChoice;
let playerScore = 0;
let computerScore = 0;

let getPlayerChoice = function(choice){
  playerChoice = choice;
  console.log(playerChoice)
}

const rockButton = document.getElementById("rock")
const paperButton = document.getElementById("paper")
const scissorsButton = document.getElementById("scissors")
rockButton.addEventListener('click', () => getPlayerChoice("rock"))
paperButton.addEventListener('click', () => getPlayerChoice("paper"))
scissorsButton.addEventListener('click', () => getPlayerChoice("scissors"))


function getComputerChoice(){
    
    let number =  Math.floor(Math.random() * ((3 - 1) + 1) + 1);

    if (number == 1)
    return computerChoice = "rock";

    else if (number == 2)
    return computerChoice = "paper";

    else if (number == 3)
    return computerChoice = "scissors";

}



function playRound(){
        
    playerChoice = getPlayerChoice(playerChoice);
    computerChoice = getComputerChoice();

    if (computerChoice == playerChoice)
      return playerScore++, computerScore++;

    else if (computerChoice == "rock" && playerChoice == "paper")
      return playerScore++;

    else if (computerChoice == "paper" && playerChoice == "scissors")
      return playerScore++;

    else if (computerChoice == "scissors" && playerChoice == "rock")
      return playerScore++;

      else
      return computerScore++;
}

function playGame(){

playRound()
playRound()
playRound()
playRound()
playRound()

if(playerScore == computerScore)
return "It's a tie!"

else if(playerScore > computerScore)
return "Victory!"

else if(playerScore < computerScore)
return "Defeat. Try again!"

}



//console.log(playGame())
//console.log(playerScore)
//console.log(computerScore)
//console.log(playerChoice)
//console.log(computerChoice)