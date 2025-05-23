function getLaneX(lane) {
  const laneWidth = canvas.width / 3;
  return lane * laneWidth + laneWidth / 2;
}

function drawLanes(ctx) {
  const laneWidth = canvas.width / 3;
  ctx.fillStyle = "#aaa";
  for (let i = 1; i < 3; i++) {
    ctx.fillRect(i * laneWidth - 1, 0, 2, canvas.height);
  }
}
