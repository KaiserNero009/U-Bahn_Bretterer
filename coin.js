class Coin {
  constructor(lane) {
    this.x = getLaneX(lane) - 10;
    this.y = -30;
    this.width = 20;
    this.height = 20;
    this.color = "gold";
  }

  update(dt) {
    this.y += game.speed * 60 * dt;
  }

  draw(ctx) {
    this.update(1 / 60);
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x + 10, this.y + 10, 10, 0, 2 * Math.PI);
    ctx.fill();
  }
}

function handleCoins(dt) {
  if (Math.random() < 0.01) {
    game.coins.push(new Coin(Math.floor(Math.random() * 3)));
  }

  game.coins = game.coins.filter(c => c.y < canvas.height);
}
