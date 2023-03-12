 
//main Js
let playerscore = 0;
let computerscore = 0;

function getComputerChoice(){
  const options = ['rock', 'paper', 'scissors'];
  return options[Math.floor(Math.random() * options.length)];  
}

const rock = document.getElementById('Rock');
const paper = document.getElementById('Paper');
const scissors = document.getElementById('Scissors');
const result = document.getElementById('result');
const reloadbtn = document.getElementById('Reload-icon')

function showResult(playerChoice, computerChoice) {
  const resultString = `You chose ${playerSelection}, and the computer chose ${computerChoice}.`;
  result.textContent = resultString;
}

function Round(playerSelection) {
  let computerSelection = getComputerChoice();
  
  if (playerSelection === computerSelection) {
      document.getElementById('game-output').innerHTML = "It's a draw, choose again.";
      document.getElementById('game-output').style.color = "black";
  }
  else if ((playerSelection === "scissors" && computerSelection === "paper") ||
             (playerSelection === "rock" && computerSelection === "scissors") ||    
             (playerSelection === "paper" && computerSelection === "rock")) {
      playerscore++;
      document.getElementById('game-output').innerHTML = `You win! ${playerSelection} beats ${computerSelection}.`;
      document.getElementById('game-output').style.color = "green";
      document.getElementById('human-score').innerHTML = playerscore;
  } else {
      computerscore++;
      document.getElementById('game-output').textContent = `You lost! ${computerSelection} beats ${playerSelection}.`;
      document.getElementById('game-output').style.color = "red";
      document.getElementById('CPU-score').innerHTML = computerscore;
  }

}
rock.addEventListener('click', () => {
  game("rock");
});

paper.addEventListener('click', () => {
  game("paper");
});

scissors.addEventListener('click', () =>{
  game("scissors");
});

function game(playeroption){ 
    let player = playeroption;
    Round(player);
   if(playerscore === 5){
    document.getElementById('cpu-choice').textContent= "You put on an amazing performance WoW! Congrats!";
    document.getElementById('cpu-choice').style.color= "green";
    document.getElementById('cpu-choice').style.fontSize = "1.8em";
    document.getElementById('game-output').innerHTML = "";
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
   } else if(computerscore === 5){
    document.getElementById('cpu-choice').innerHTML= "you lost , train more you're fucking loser !";
    document.getElementById('cpu-choice').style.color= "red";
    document.getElementById('cpu-choice').style.fontSize = "1.8em";
    document.getElementById('game-output').innerHTML = "";
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
   }
}


function whoswinner(playeroption) {
  let player = playeroption;
  Round(player);
  game();
}
reloadbtn.addEventListener('click', function(){
     location.reload();
}) 