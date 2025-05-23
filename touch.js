let startX = null;

canvas.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

canvas.addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  const diff = endX - startX;
  if (Math.abs(diff) > 30) {
    if (diff > 0 && player.lane < 2) player.lane++;
    else if (diff < 0 && player.lane > 0) player.lane--;
  }
});
