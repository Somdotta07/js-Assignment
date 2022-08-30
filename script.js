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

// console.log(oddEven());

//(Main JavaScript Project):
function computerPlay() {
  let options = ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)];
  return options;
}
console.log(computerPlay().toUpperCase());

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Draw!";
  } else if (playerSelection == "ROCK") {
    return computerSelection == "PAPER" ? "Player Win!" : "Computer Win!";
  } else if (playerSelection == "PAPER") {
    return computerSelection == "SCISSORS" ? "Computer Win!" : "Player Win!";
  } else if (playerSelection == "SCISSORS") {
    return computerSelection == "ROCK" ? "Computer Win!" : "Player Win!";
  }
}
// const playerSelection = prompt().toUpperCase();
// const computerSelection = computerPlay().toUpperCase();
// console.log(playRound(playerSelection, computerSelection));

function game() {
  let computerScore = 0,
    playerScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt().toUpperCase();
    const computerSelection = computerPlay().toUpperCase();
    playRound(playerSelection, computerSelection);
  }
  if ("Computer Win!") {
    computerScore++;
  } else {
    playerScore++;
  }
  return computerScore > playerScore
    ? "Computer is the Winner!!"
    : "Player is the winner!";
}

game();
