// Mathematical Shapes
//a) Write a JavaScript program to find the diagonal of a square where the length of each side is 9.

function findDiagonal() {
  let sideLength = 9;
  return Math.sqrt(2) * sideLength;
}

console.log(findDiagonal());
// b) Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6 and 7.

function areaOfTriangle() {
  let sideA = 5,
    sideB = 6,
    sideC = 7;
  let semiPerimeter = (sideA + sideB + sideC) / 2;
  let area = 0;
  area = Math.sqrt(
    semiPerimeter *
      (semiPerimeter - sideA) *
      (semiPerimeter - sideB) *
      (semiPerimeter - sideC),
  );
  const fixedArea = area.toFixed(2);
  return fixedArea;
}

console.log(areaOfTriangle());

const circle = (r) => {
  let circumference = 0,
    surfaceArea = 0;
  const PI = 3.14;
  circumference = 2 * PI * r;
  surfaceArea = PI * r ** 2;
  return [circumference, surfaceArea];
};

console.log(circle(4));

// Conditional Statements  & Loops

//a) Write a JavaScript program that accepts two integers and displays the larger of the two.

function condition() {
  let num1 = 9,
    num2 = 5;
  if (num1 > num2) {
    return num1;
  }
}

console.log(condition());

//b) Write a JavaScript program that checks whether an integer is an even or an odd number.

// function oddEven() {
//   let num = prompt();
//   if (num % 2 === 0) {
//     return "The number is Even";
//   } else {
//     return "The number is Odd";
//   }
// }

// oddEven()
/*------------------------------------------------------------------------------------------------------------------------------------------*/






//(Main JavaScript Project):
function computerPlay() {
  let options = ["Rock", "Paper", "Scissors"];
  let random = Math.floor(Math.random() * 3);
  return options[random];
}

function playRound(playerSelection, computerSelection) {
  console.log(`Player**: ${playerSelection}`);
  console.log(`Computer**: ${computerSelection}`);
  if (playerSelection === computerSelection) {
    return "Draw!";
  } else if (
    (computerSelection === "ROCK" && playerSelection === "PAPER") ||
    (computerSelection === "PAPER" && playerSelection === "SCISSORS") ||
    (computerSelection === "SCISSORS" && playerSelection === "ROCK")
  ) {
    return "Player Win!";
  } else if (
    (computerSelection === "SCISSORS" && playerSelection === "PAPER") ||
    (computerSelection === "PAPER" && playerSelection === "ROCK") ||
    (computerSelection === "ROCK" && playerSelection === "SCISSORS")
  ) {
    return "Computer Win!";
  } else {
    return "Please enter valid input.";
  }
}

function game() {
  let computerScore = 0,
    playerScore = 0;

  for (let i = 0; i < 5; i++) {
    const computerSelection = computerPlay().toUpperCase();
    // const playerSelection = prompt().toUpperCase();
    let gameRound = playRound(playerSelection, computerSelection);
    console.log(gameRound);
    let winner = "Computer Win!";
    let winnerP = "Player Win!";
    if (gameRound === winner) {
      computerScore++;
      console.log(`Computer score: ${computerScore}`)
    } else if (gameRound === winnerP) {
      playerScore++;
      console.log(`Player score: ${playerScore}`)
    }
  }
  if (computerScore === playerScore) {
    return "HURRAH!! DRAW!";
  } else if (computerScore > playerScore) {
    return "Oh! Computer Win!";
  } else {
    return "WELL DONE!! Player Win!!";
  }
}

console.log(game());




/*              */

// const element = document.createElement(<p>"Hey I'm red!"</p>); 
// element.style.color = 'red';
// const heading = document.createElement(<h3>"I'm a blue h3!"</h3>); 
// heading.style.color = 'blue';

// const newDiv = document.createElement("div");
// const newHeading = document.createElement(<h1>Hello!</h1>)
// const button = document.createElement(<button>Click me</button>)
// newDiv.appendChild(newHeading);
// newDiv.appendChild(button)
// const main = document.querySelector('#main');

// main.appendChild(newDiv);