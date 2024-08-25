let humanScore = 0;
let computerScore = 0;

function checkWinner(humanScore, computerScore) {
    const winner = document.querySelector("p");

    if (humanScore === 10) {
        winner.innerText = "Player Won!";
    } else if (computerScore === 10) {
        winner.innerText = "Computer Won";
    }
}

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

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    

    const score = document.querySelector('#score')

    

    // Logic
    if (humanChoice === computerChoice) {
        score.innerText = `Player: ${humanScore} \n Computer ${computerScore}`;
        return;
    } else if (humanChoice === "Rock" && computerChoice === "Scissors" || 
            humanChoice === "Paper" && computerChoice === "Rock" || 
            humanChoice === "Scissors" && computerChoice === "Paper") {
        humanScore++
        score.innerText = `Player: ${humanScore} \n Computer ${computerScore}`;
        return;
    } else {
        computerScore++
        score.innerText = `Player: ${humanScore} \n Computer ${computerScore}`;
        return;
    };
};

function playGame() {
    // Add event listeners so they game plays when you click
document.querySelector(".rock").addEventListener("click", function() {
    playRound('Rock');
    checkWinner(humanScore, computerScore);
});
document.querySelector(".paper").addEventListener("click", function() {
    playRound('Paper');
    checkWinner(humanScore, computerScore);

});
document.querySelector(".scissors").addEventListener("click", function() {
    playRound('Scissors');
    checkWinner(humanScore, computerScore);
});
};

playGame()
