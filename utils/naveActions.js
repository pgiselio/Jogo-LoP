function naveActions() {
  var pausarBtn = drawButton(
    30,
    30,
    40,
    40,
    "||",
    () => (PAUSED = true),
    TELA == FASE1 && !PAUSED,
    { backgroundColor: theme.pallete[1] }
  );
  interactives.push(pausarBtn);
  if (!PAUSED) {
    if (
      (mouseIsPressed ||
        keyIsDown(keybind.shoot[0]) ||
        keyIsDown(keybind.shoot[1])) &&
      !disparoAtivo &&
      !pausarBtn.mouseOn
    ) {
      disparoAtivo = true;
      yd = yav + 35;
      xd = xav + 50;
    }
    if (disparoAtivo) {
      fill("red");
      ellipse(xd, yd, 10, 5);
      xd = xd + 12;
    }
    if (xd > 640) {
      disparoAtivo = false;
    }

    if (PLAYING) {
      if (keyIsPressed) {
        if (
          (keyIsDown(keybind.up[0]) || keyIsDown(keybind.up[1])) &&
          yav > 50 &&
          yav <= canvas.height - 40
        ) {
          yav = yav - 10;
        }
        if (
          (keyIsDown(keybind.down[0]) || keyIsDown(keybind.down[1])) &&
          yav >= 50 &&
          yav <= canvas.height - 80
        ) {
          yav = yav + 10;
        }
      }
    }
  }
}
