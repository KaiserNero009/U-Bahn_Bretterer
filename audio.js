const audio = {
  coin: new Audio("sounds/coin.wav"),
  jump: new Audio("sounds/jump.wav"),
  crash: new Audio("sounds/crash.wav"),
  music: new Audio("sounds/music.mp3"),

  play(sound) {
    if (this[sound]) {
      this[sound].currentTime = 0;
      this[sound].play();
    }
  },

  startMusic() {
    this.music.loop = true;
    this.music.volume = 0.3;
    this.music.play();
  },

  stopMusic() {
    this.music.pause();
    this.music.currentTime = 0;
  }
 
 // already calls audio.startMusic() at start
window.addEventListener("click", () => {
  if (audio.music.paused) audio.startMusic();
});
