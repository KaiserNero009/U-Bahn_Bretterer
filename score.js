const score = {
  distance: 0,
  coins: 0,
  update(dt) {
    this.distance += dt * 10;
    document.getElementById("scoreText").textContent = 
      `Score: ${Math.floor(this.distance)} | Coins: ${this.coins}`;
  },
  draw(ctx) {},
  reset() {
    this.distance = 0;
    this.coins = 0;
  }
};
