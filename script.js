console.log("ROCK PAPER SCISSORS, LETS GO 5 ROUNDS");

// let userChoice = prompt("type rock, paper or scissors");

function cpuChoiceMaker() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return "rock";
    }
    else if (randomNumber === 2) {
        return "paper";
    }
    else if (randomNumber === 3) {
        return "scissors";
    }
}

function userChoiceMaker() {
    let choice = prompt("Type rock, paper or scissors").toLowerCase();
    return choice;
}
function endGame() {
    console.log("***************************")
    console.log("The game has ended.")
    sayScore();
    if (userScore < cpuScore) {
        console.log("You lose.")
    }
    else if (userScore > cpuScore) {
        console.log("You win.")
    }
    else {
        console.log("It's a draw.")
    }
}
let userScore = 0;
let cpuScore = 0;

function sayChoices(userChoice, cpuChoice) {
    console.log(`You chose ${userChoice} and the AI chose ${cpuChoice}.`)
}

function getScore(userChoice, cpuChoice) {
    if (userChoice == "rock" && cpuChoice == "paper") {
        console.log("-> You lose.");
        cpuScore++;
    }

    if (userChoice == "rock" && cpuChoice == "scissors") {
        console.log("-> You win.");
        userScore++;
    }

    if (userChoice == "rock" && cpuChoice == "rock") {
        console.log("-> It's a draw.");
    }

    if (userChoice == "paper" && cpuChoice == "rock") {
        console.log("-> You win.");
        userScore++;
    }

    if (userChoice == "paper" && cpuChoice == "scissors") {
        console.log("-> You lose.");
        cpuScore++;
    }

    if (userChoice == "paper" && cpuChoice == "paper") {
        console.log("-> It's a draw.");
    }

    if (userChoice == "scissors" && cpuChoice == "rock") {
        console.log("-> You lost.");
        cpuScore++;
    }
    if (userChoice == "scissors" && cpuChoice == "paper") {
        console.log("-> You win.");
        userScore++;
    }
    if (userChoice == "scissors" && cpuChoice == "scissors") {
        console.log("-> It's a draw.");
    }

}
function sayScore() {
    console.log("------Scores------")
    console.log(`PLAYER: ${userScore} AI: ${cpuScore}`);
    console.log("------------------")
}

function game() {
    for (let round = 0; round < 5; round++) {
        let cpuChoice = cpuChoiceMaker();
        let userChoice = userChoiceMaker();
        sayChoices(userChoice, cpuChoice);
        getScore(userChoice, cpuChoice);
        sayScore();
    }
    endGame();
}

game();