const gameOverText = document.getElementById("gameOverText");
const restartBtn = document.getElementById("restartBtn");

function endGame() {
  game.running = false;
  gameOverText.style.display = "block";
  restartBtn.style.display = "inline-block";
}

function hideGameOver() {
  gameOverText.style.display = "none";
  restartBtn.style.display = "none";
}

restartBtn.addEventListener("click", () => {
  resetGame();
});
