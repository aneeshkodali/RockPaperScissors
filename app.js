// 'Caching the DOM'
// Caching - storing something for future use
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// computer choice function - random choice
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    // generate random number
    const randomNumber = Math.floor(Math.random()*choices.length);

    // return choice based on element of random number in choices array
    return choices[randomNumber];
}

// function to convert choice strings to words
function convertToWord(letter) {
    if (letter==="r") {return "Rock"};
    if (letter==="p") {return "Paper"};
    if (letter==="s") {return "Scissors"};
}

// function for when user wins
function win(userChoice, computerChoice) {
    
    // increase user score
    userScore++;
    // update user score element on page
    userScore_span.innerHTML = userScore;
    // update computer score element on page
    computerScore_span.innerHTML = computerScore;
    // update the result message element on page 
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallComputerWord}. You win! :)`;
}

// function for when user loses
function lose(userChoice, computerChoice) {

    // increase computer score
    computerScore++;
    // update user score element on page
    userScore_span.innerHTML = userScore;
    // update computer score element on page
    computerScore_span.innerHTML = computerScore;
    // update the result message element on page 
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallComputerWord}. You lose :(`;

}

// function for draw
function draw(userChoice, computerChoice) {
    // update the result message element on page 
    const smallUserWord = "user".fontsize(3).sub();
    const smallComputerWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallComputerWord}. It's a draw`;

}

// Define game function - compare user choice ('input') against computer
function game(userChoice) {

    // get computer choice
    const computerChoice = getComputerChoice();
    
    // Compare user and computer
    switch (userChoice + computerChoice) {
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "ps":
        case "rp":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }

}

// Add main function (encompases all)
function main () {

    //Add event listeners
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    })
}

main();
