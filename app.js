function randomNumber() {
  const result = Math.trunc(Math.random() * 6);
  return result;
}
const heading = document.querySelector("h1");
const firstImage = document.querySelector(".img1");
const secondImage = document.querySelector(".img2");
const button = document.querySelector(".btn");
const player1Score = document.querySelector(".player-1");
const player2Score = document.querySelector(".player-2");
const maxNumber = 20;
const reloadLink = document.querySelector("a");

const imgElements = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];

function setRandomImage(element) {
  let randomNumberImage = randomNumber();
  element.setAttribute("src", imgElements[randomNumberImage]);
  return randomNumberImage;
}
let score1 = 1;
let score2 = 1;

function incrementPlayer1Score() {
  return score1++;
}

function incrementPlayer2Score() {
  return score2++;
}

function resetGame() {
  score1 = 1;
  score2 = 1;
  player1Score.innerHTML = "";
  player2Score.innerHTML = "";
}

function checkWinOrDraw() {
  button.innerHTML = "Roll Dice";
  const newImg1 = setRandomImage(firstImage);
  const newImg2 = setRandomImage(secondImage);
  if (newImg1 > newImg2) {
    heading.innerHTML = `🚩Player 1 Wins`;
    player1Score.innerHTML = incrementPlayer1Score();
  } else if (newImg2 > newImg1) {
    heading.innerHTML = `Player 2 Wins 🚩`;
    player2Score.innerHTML = incrementPlayer2Score();
  } else if (newImg1 === newImg2) {
    heading.innerHTML = `Draw 🏳️`;
  }
  if (score1 >= maxNumber || score2 >= maxNumber) {
    heading.innerHTML += "<br>Game Over!";
    button.innerHTML = "Restart";
    resetGame();
  }
}

button.addEventListener("click", checkWinOrDraw);


