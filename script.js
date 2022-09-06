// Mathematical Shapes
//a) Write a JavaScript program to find the diagonal of a square where the length of each side is 9.

// function findDiagonal() {
//   let sideLength = 9;
//   return Math.sqrt(2) * sideLength;
// }

// console.log(findDiagonal());
// b) Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6 and 7.

// function areaOfTriangle() {
//   let sideA = 5,
//     sideB = 6,
//     sideC = 7;
//   let semiPerimeter = (sideA + sideB + sideC) / 2;
//   let area = 0;
//   area = Math.sqrt(
//     semiPerimeter *
//       (semiPerimeter - sideA) *
//       (semiPerimeter - sideB) *
//       (semiPerimeter - sideC),
//   );
//   const fixedArea = area.toFixed(2);
//   return fixedArea;
// }

// console.log(areaOfTriangle());

// const circle = (r) => {
//   let circumference = 0,
//     surfaceArea = 0;
//   const PI = 3.14;
//   circumference = 2 * PI * r;
//   surfaceArea = PI * r ** 2;
//   return [circumference, surfaceArea];
// };

// console.log(circle(4));

// // Conditional Statements  & Loops

// //a) Write a JavaScript program that accepts two integers and displays the larger of the two.

// function condition() {
//   let num1 = 9,
//     num2 = 5;
//   if (num1 > num2) {
//     return num1;
//   }
// }

// console.log(condition());

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
const restart = document.querySelector(".restart-btn");
const gameBtns = document.querySelectorAll(".choice-btn");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".modal-content");
const modal = document.querySelector(".modal");
const score = {
  playerScore: 0,
  computerScore: 0,
};

function game(e) {
  restart.style.display = "inline-block";
  const playerSelection = e.target.id.toUpperCase();
  const computerSelection = computerPlay().toUpperCase();
  const winner = playRound(playerSelection, computerSelection);
  finalWinner(winner, computerSelection);
}

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

function finalWinner(winner, computerSelection) {
  if (winner === "Computer Win!") {
    score.computerScore++;
    result.innerHTML = `     
     <h1 class="text-win"> Computer Win</h1>
     <img src="./images/${computerSelection}.svg" id= ${computerSelection} />
            <p>Computer Chose <strong>${computerSelection}</p>`;
  } else if (winner === "Player Win!") {
    score.playerScore++;
    result.innerHTML = `     
     <h1 class="text-win"> Player Win</h1>
     <img src="./images/${computerSelection}.svg" id= ${computerSelection} />
     <p>Computer Chose <strong>${computerSelection}</strong></p>`;
  } else {
    result.innerHTML = `     
     <h1 class="text-win"> It's Draw!!</h1>
     <img src="./images/${computerSelection}.svg" id= ${computerSelection} />
     <p>Computer Chose <strong>${computerSelection}</strong></p>`;
  }
  scoreBoard.innerHTML = `
    <p>Player Score: ${score.playerScore}</p>
    <p>Computer Score: ${score.computerScore}</p>
  `;
  modal.style.display = "block";
}

function restartGame() {
  (score.computerScore = 0), (score.playerScore = 0);
  scoreBoard.innerHTML = `
    <p>Player Score: 0</p>
    <p>Computer Score: 0</p>
  `;
}

function clearModal(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

gameBtns.forEach((choice) => choice.addEventListener("click", game));
window.addEventListener("click", clearModal);
restart.addEventListener("click", restartGame);
