const num = parseInt(window.prompt("Enter number of rounds: ", ""));
const panel = document.querySelector(".result-panel");
const container = document.querySelector(".container");
const finalBoard = document.querySelector(".finalBoard");
container.textContent = "Number of Rounds: " + num;

let counter = 0;
let playerSelection = "";
let playerScore = 0;
let computerScore = 0;
const buttons = Array.from(document.querySelectorAll("button"));
buttons.forEach(button => button.addEventListener("click", givePlayerChoice));

function givePlayerChoice(e) {
    if (e.target.id==="r") playerSelection = "rock";
    if (e.target.id==="p") playerSelection = "paper";
    if (e.target.id==="s") playerSelection = "scissors";
    game();
}

function computerPlay () {
    let randNum = Math.floor(Math.random()*3+1);
    if (randNum===1) return "rock";
    if (randNum===2) return "paper";
    if (randNum===3) return "scissors";
}

function playRound(a, b) {
    if (a==="rock"&&b==="scissors") return "WIN";
    if (a==="paper"&&b==="rock") return "WIN";
    if (a==="scissors"&&b==="paper") return "WIN";
    if (a===b) return "TIE";
    else
    return "LOSE"
}

function game() {
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);
    let box = document.createElement("p");
    let scoreKeep = document.createElement("p");
    box.textContent = result;
    box.classList.add("result");
    scoreKeep.classList.add("score");
    panel.appendChild(box);
    if (result==="WIN") playerScore++;
    if (result==="LOSE") computerScore++;
    scoreKeep.textContent = `Your score: ${playerScore} || Computer score: ${computerScore}`;
    panel.appendChild(scoreKeep);
    counter++;
    if (counter===num) finalResult();
}

function finalResult() {
    if (playerScore>computerScore) finalBoard.textContent="YOU WIN!";
    if (playerScore<computerScore) finalBoard.textContent="YOU LOST!";
    if (playerScore===computerScore) finalBoard.textContent="IT'S A TIE!";
}




