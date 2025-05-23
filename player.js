const player = {
  x: 0,
  y: 500,
  width: 40,
  height: 40,
  lane: 1,
  color: "yellow",
  reset() {
    this.lane = 1;
    this.updatePosition();
  },
  update(dt) {
    this.updatePosition();
    game.obstacles.forEach(o => {
      if (this.collidesWith(o)) endGame();
    });
    game.coins = game.coins.filter(c => {
      if (this.collidesWith(c)) {
        score.coins += 1;
        return false;
      }
      return true;
    });
  },
  updatePosition() {
    this.x = getLaneX(this.lane) - this.width / 2;
  },
  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
  collidesWith(obj) {
    return (
      this.x < obj.x + obj.width &&
      this.x + this.width > obj.x &&
      this.y < obj.y + obj.height &&
      this.y + this.height > obj.y
    );
  }
};
