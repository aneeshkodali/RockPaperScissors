// 'Caching the DOM'
// Caching - storing something for future use
const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const compueterScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
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

// Define game function - compare user choice ('input') against computer
function game(userChoice) {
    
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
