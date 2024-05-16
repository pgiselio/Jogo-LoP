function naveActions(){
    var pausarBtn = drawButton(30, 30, 40, 40, "||", () =>  PAUSED = true, TELA == FASE1 && !PAUSED, {backgroundColor: theme.pallete[1]});
    interactives.push(pausarBtn);
    var includeskey = (e) => e == key;
    if (!PAUSED) {
      if ((mouseIsPressed || keybind.shoot.some(includeskey)) && !disparoAtivo && !pausarBtn.mouseOn) {
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
            keybind.up.some(includeskey) &&
            yav > 50 &&
            yav <= canvas.height - 40
          ) {
            yav = yav - 10;
          } else if (
            keybind.down.some(includeskey) &&
            yav >= 50 &&
            yav <= canvas.height - 80
          ) {
            yav = yav + 10;
          }
        }
      }
    }
  }