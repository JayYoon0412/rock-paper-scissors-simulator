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
    let playerScore = 0;
    let computerScore = 0;
    for (let i=0; i<5; i++) {
        let input = window.prompt("Enter your choice: rock/ paper/ scissors");
        let playerSelection = input.toLowerCase();
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result==="WIN") playerScore++;
        if (result==="LOSE") computerScore++;
        console.log(`Your score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
    }
    if (playerScore>computerScore) console.log("YOU WIN");
    if (playerScore<computerScore) console.log( "YOU LOST");
    else 
        console.log("IT'S A TIE");
}

game();