// document.querySelector(".guess").value = 12;

const rng = () => Math.trunc(Math.random() * 1000);
let randomNumber = rng();
let score = 20;
let highscore = 0;
let gameOver = false;
let messageEl = document.querySelector(".message");

const changeMessage = (message) => {
  messageEl.textContent = message;
};

const changeScore = (score) => {
  document.querySelector(".score").textContent = score;
};

const processGame = () => {
  const guess = document.querySelector(".guess").value;

  if (!guess) {
    changeMessage("Invalid input.");
  } else if (guess == randomNumber) {
    changeMessage("🎊 Correct Number!");
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector("body").style.backgroundColor = "#60b437";
    document.querySelector(".check").classList.toggle("disabled");
    gameOver = true;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess != randomNumber) {
    changeMessage(guess > randomNumber ? "Too high" : "Too low");
    changeScore(--score);
    if (score < 1) {
      changeMessage("YOU LOST THE GAME!");
      document.querySelector(".check").classList.toggle("disabled");
      gameOver = true;
      document.querySelector(".number").textContent = randomNumber;
    }
  }
};

// on check button click
document.querySelector(".check").addEventListener("click", processGame);
document.addEventListener("keydown", (e) => {
  if (e.key == "Enter" && !gameOver) processGame();
});

// on reset button click
document.querySelector(".again").addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = "var(--bs-gray-900)";
  document.querySelector(".number").textContent = "?";
  changeMessage("START GUESSING!");
  score = 20;
  changeScore(score);
  randomNumber = rng();
  document.querySelector(".check").classList.toggle("disabled");
  gameOver = false;
});
