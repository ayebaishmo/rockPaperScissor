const choice = ['rock', 'paper', 'scissors'];
 const random =Math.floor(Math.random() * choice.length);
 const computerSelection = (random, choice[random]);
 console.log(computerSelection);

const playerSelection = 'rock';
console.log(playerSelection)

if(computerSelection === playerSelection) {
 console.log('Draw');
}
else {
 console.log('One of you has won')
}
/*function playRound(playerSelection, computerSelection) {
 if(playerSelection === computerSelection) {
  return('It\'s draw');
 }
 else {
  return('You Lose! Paper beats Rock')
 }
}
playRound();

const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function game() {
 for(let i = 0; i <5; i++) {

 }
 playRound()
}*/