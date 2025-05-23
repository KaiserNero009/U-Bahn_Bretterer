class PowerUp {
  constructor(type, lane) {
    this.type = type;
    this.x = getLaneX(lane) - 15;
    this.y = -30;
    this.width = 30;
    this.height = 30;
    this.color = type === "jetpack" ? "lime" : "orange";
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

let activePowerUp = null;
let powerupTimer = 0;

function handlePowerUps(dt) {
  if (Math.random() < 0.005) {
    const type = Math.random() < 0.5 ? "magnet" : "jetpack";
    game.powerups = game.powerups || [];
    game.powerups.push(new PowerUp(type, Math.floor(Math.random() * 3)));
  }

  game.powerups = (game.powerups || []).filter(p => {
    if (player.collidesWith(p)) {
      activatePowerUp(p.type);
      return false;
    }
    return p.y < canvas.height;
  });

  if (activePowerUp) {
    powerupTimer -= dt;
    if (powerupTimer <= 0) {
      activePowerUp = null;
    }
  }

  game.powerups?.forEach(p => p.draw(ctx));
}

function activatePowerUp(type) {
  activePowerUp = type;
  powerupTimer = 5;
  audio.play("coin");
}

function isMagnetActive() {
  return activePowerUp === "magnet";
}

function isJetpackActive() {
  return activePowerUp === "jetpack";
}
