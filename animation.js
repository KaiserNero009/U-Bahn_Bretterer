player.sprite = new Image();
player.sprite.src = "sprites/player_run.png";
player.frame = 0;

player.draw = function (ctx) {
  this.updatePosition();
  this.frame += 0.25;
  const frameIndex = Math.floor(this.frame) % 4;
  ctx.drawImage(
    this.sprite,
    frameIndex * 40, 0, 40, 40, // Source
    this.x, this.y, 40, 40      // Destination
  );
};
