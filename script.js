let playerScore = 0;
let compScore = 0;
let playerWins;

function getComputerChoice() {
  let choice = ['rock', 'paper', 'scissors'];
 return choice[~~(Math.random() * choice.length)]
}

function singleRound(answer, getComputerChoice) {
let computerSelection= getComputerChoice().toLowerCase();
let playerSelection = answer.toLowerCase();

  if(computerSelection == playerSelection) {
    playerWins = undefined;
  } else if ((computerSelection=='rock' && playerSelection== 'scissors') ||
  (computerSelection=='scissors' && playerSelection== 'paper')||
  computerSelection=='paper' && playerSelection== 'rock')
   {
     playerWins = true;
   } else {
     playerWins = false;
   }
  if(playerWins == true) {
    return alert("You win");
  } else if (playerWins == false) {
    return alert("You loses")
  } else {
    return alert("It's draw");
}
}

// Determine winner of the game

for (let i = 0; i<=5; i++) {
  //prompt the player to choose rock, paper scissor
  let playerSelection = window.prompt("Round " +i+" of 5\n" + "Rock, Paper, or Scissors?","Choose one");
    singleRound(playerSelection, getComputerChoice);
    //calculate scores
    if(playerWins == true) {
      playerScore +=1;
    } else if (playerWins == false) {
      compScore +=1;
    }
    alert("player's score: " + playerScore + " -- Computer's Score: " + compScore);
  }

  //Declare winner of the game 
  if (playerScore > compScore) {
    alert("You are the winner! :-)");
  } else if (compScore > playerScore) {
    alert("You Lost : -(");
  } else {
    alert("It's a tie");
  }