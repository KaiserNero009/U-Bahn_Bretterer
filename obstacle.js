class Obstacle {
  constructor(lane) {
    this.x = getLaneX(lane) - 20;
    this.y = -50;
    this.width = 40;
    this.height = 40;
    this.color = "red";
  }

  update(dt) {
    this.y += game.speed * 60 * dt;
  }

  draw(ctx) {
    this.update(1 / 60);
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

function handleObstacles(dt) {
  if (Math.random() < 0.02) {
    game.obstacles.push(new Obstacle(Math.floor(Math.random() * 3)));
  }

  game.obstacles = game.obstacles.filter(o => o.y < canvas.height);
}
