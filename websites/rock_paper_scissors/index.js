function getComputerChoice() {
    // Returns computers choice
    let randomNum = Math.floor(Math.random(3) * 3) + 1;
    
    // Computer Logic
    if (randomNum === 1) {
        return 'Rock'
    } else if (randomNum === 2) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, Scissors? ").toLowerCase();
    return choice.replace(choice[0], choice[0].toUpperCase());
    
};




function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function showScore(){
        return console.log(`Human Score: ${humanScore} Computer Score: ${computerScore}`);
    };

    function playRound(getHumanChoice, getComputerChoice) {
        // Adds a point to whoever wins
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        // Logic
        if (humanChoice === computerChoice) {
            console.log('Draw');
            showScore();
            return;
        } else if (humanChoice === "Rock" && computerChoice === "Scissors" || 
                humanChoice === "Paper" && computerChoice === "Rock" || 
                humanChoice === "Scissors" && computerChoice === "Paper") {
            console.log(`${humanChoice} beats ${computerChoice}!`);
            humanScore++;
            showScore();
            return;
        } else {
            console.log(`${computerChoice} beats ${humanChoice}!`);
            computerScore++;
            showScore();
            return;
        };
    };

    for (let gamesPlayed = 0; gamesPlayed <= 5; gamesPlayed++) {
        playRound(getHumanChoice, getComputerChoice);
        if (gamesPlayed === 5) {
            if (humanScore === computerScore) {
                console.log("Draw!!!")
            } else if (humanScore > computerScore) {
                console.log(`You have won ${humanScore}/5!`)
            } else {
                console.log(`Computer has won ${computerScore}/5!`)
            };
        };
    };
};
























/*let compChoice;
let playerChoice;
document.getElementById("playButton").onclick = function(){
    playerChoice = Number(document.getElementById("playerChoice").value);
    compChoice = Math.floor(Math.random() * 3) + 1;
    
    // Logic
    if (playerChoice === compChoice) {
        document.getElementById("winner").textContent = "Draw"
    } else if (playerChoice === 1 && compChoice === 3) {
        document.getElementById("winner").textContent = "Player Won!"
    } else if (playerChoice === 2 && compChoice === 1) {
        document.getElementById("winner").textContent = "Player Won!"
    } else if (playerChoice === 3 && compChoice === 2) {
        document.getElementById("winner").textContent = "Player Won!"
    } else {
        document.getElementById("winner").textContent = "Computer Won!"
    }
    document.getElementById("choices").textContent = `Player Choice: ${playerChoice} \n Computer Choice: ${compChoice}`;
}; */