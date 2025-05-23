const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let lastTime = 0;
const game = {
  running: true,
  speed: 4,
  obstacles: [],
  coins: [],
};

function resetGame() {
  game.running = true;
  game.obstacles = [];
  game.coins = [];
  player.reset();
  score.reset();
  hideGameOver();
  requestAnimationFrame(gameLoop);
}

function update(dt) {
  player.update(dt);
  handleObstacles(dt);
  handleCoins(dt);
  score.update(dt);
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawLanes(ctx);
  player.draw(ctx);
  game.obstacles.forEach(o => o.draw(ctx));
  game.coins.forEach(c => c.draw(ctx));
  score.draw(ctx);
}

function gameLoop(timestamp) {
  if (!game.running) return;
  let dt = (timestamp - lastTime) / 1000;
  lastTime = timestamp;
  update(dt);
  render();
  requestAnimationFrame(gameLoop);
}

resetGame();
