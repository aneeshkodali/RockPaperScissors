// 'Caching the DOM'
// Caching - storing something for future use
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const lizard_div = document.getElementById('l');
const spock_div = document.getElementById('sp');

const choices_div = document.getElementById('choices');

// computer choice function - random choice
function getComputerChoice() {
    const choices = [
        { choice: 'r', beats: 's', losesTo: 'p' },
        { choice: 'p', beats: 'r', losesTo: 's' },
        { choice: 's', beats: 'p', losesTo: 'r' }
    ];

    // generate random number
    const randomNumber = Math.floor(Math.random() * choices.length);

    // return choice based on element of random number in choices array
    return choices[randomNumber];
}

// function to convert choice strings to words
function convertToWord(letter) {
    if (letter === 'r') {
        return 'Rock';
    }
    if (letter === 'p') {
        return 'Paper';
    }
    if (letter === 's') {
        return 'Scissors';
    }
}

// function for when user wins
function win(userChoice, computerChoice) {
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallComputerWord = 'comp'.fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);

    // increase user score
    userScore++;
    // update user score element on page
    userScore_span.innerHTML = userScore;
    // update computer score element on page
    computerScore_span.innerHTML = computerScore;
    // update the result message element on page
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(
        computerChoice
    )}${smallComputerWord}. You win! :)`;

    // add green glow class to div that user clicked on
    userChoice_div.classList.add('green-glow');
    // set timeout so green glow goes away after some time
    // ==> setTimeout(function, time (ms) to wait before doing function)
    // in this case, the 'function' is to remove the green-glow from class list
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

// function for when user loses
function lose(userChoice, computerChoice) {
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallComputerWord = 'comp'.fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);

    // increase computer score
    computerScore++;
    // update user score element on page
    userScore_span.innerHTML = userScore;
    // update computer score element on page
    computerScore_span.innerHTML = computerScore;
    // update the result message element on page
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(
        computerChoice
    )}${smallComputerWord}. You lose :(`;

    // add red glow class to div that user clicked on
    userChoice_div.classList.add('red-glow');
    // set timeout so red glow goes away after some time
    // ==> setTimeout(function, time (ms) to wait before doing function)
    // in this case, the 'function' is to remove the red-glow from class list
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

// function for draw
function draw(userChoice, computerChoice) {
    const smallUserWord = 'user'.fontsize(3).sub();
    const smallComputerWord = 'comp'.fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);

    // update the result message element on page
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(
        computerChoice
    )}${smallComputerWord}. It's a draw`;

    // add gray glow class to div that user clicked on
    userChoice_div.classList.add('gray-glow');
    // set timeout so gray glow goes away after some time
    // ==> setTimeout(function, time (ms) to wait before doing function)
    // in this case, the 'function' is to remove the gray-glow from class list
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

// Define game function - compare user choice ('input') against computer
function game(userChoice) {
    // get computer choice
    const computerChoice = getComputerChoice();


    // Compare user and computer
    // switch (computerChoice) {
    //     case computerChoice.losesTo === userChoice:
    //         win(userChoice, computerChoice.choice);
    //         break;
    //     case computerChoice.beats === userChoice:
    //         lose(userChoice, computerChoice.choice);
    //         break;
    //     default:
    //         draw(userChoice, computerChoice.choice);
    //         break;
    // }
    if (userChoice === computerChoice.losesTo) {
        win(userChoice, computerChoice.choice);
    } else if (userChoice === computerChoice.beats) {
        lose(userChoice, computerChoice.choice);
    } else {
        draw(userChoice, computerChoice.choice);
    }
}

// Add main function (encompases all)
function main() {
    //Add event listeners
    rock_div.addEventListener('click', () => game("r"));

    paper_div.addEventListener('click', () => game("p"));

    scissors_div.addEventListener('click', () => game("s"));

    // choices_div.addEventListener('click', (event) => game(event.target.parentNode.id));
}

main();

// document.addEventListener('DOMContentLoaded', () => {
//     choices_div.addEventListener('click', (event) => game(event.target.parentNode.id));
// });
