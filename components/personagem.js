
function personagem(){
  personagemActions();
  image(aviaoImg, xPersonagem, yPersonagem,70, 70);
  image(monstroImg,xInimigo, yInimigo,150, 150);
}

function personagemActions() {
    
    let colisao= dist(xPersonagem, yPersonagem, xInimigo, yInimigo);
    let disparo= dist(xDisparo, yDisparo, xInimigo, yInimigo);
    var pausarBtn = drawButton(
      30,
      30,
      40,
      40,
      "||",
      () => (PAUSED = true),
      TELA == FASE1 && !PAUSED,
      { backgroundColor: "#00000050"}
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
        yDisparo = yPersonagem + 35;
        xDisparo= xPersonagem + 50;
      }
      if (disparoAtivo) {
        fill("red");
        ellipse(xDisparo, yDisparo, 10, 5);
        xDisparo = xDisparo + 12;
      }
      if (xDisparo > 640) {
        disparoAtivo = false;
      }
    
       

      if (PLAYING) {
        if (keyIsPressed) {
          if (
            (keyIsDown(keybind.up[0]) || keyIsDown(keybind.up[1])) &&
            yPersonagem > 50 &&
            yPersonagem <= canvas.height - 40
          ) {
            yPersonagem = yPersonagem - 10;
          }
          if (
            (keyIsDown(keybind.down[0]) || keyIsDown(keybind.down[1])) &&
            yPersonagem >= 50 &&
            yPersonagem <= canvas.height - 80
          ) {
            yPersonagem = yPersonagem + 10;
          }
        }
    
      }

    }
   
  if (colisao > 0 && colisao < 50) {
    xInimigo = 500;
    yInimigo = random(70, 600)
  }
  if (disparo > 0 && disparo < 40) {
    xInimigo = 500;
    yInimigo = random(50, 350)
    disparoAtivo = false;
  }
  if (xInimigo > -40){    xInimigo = xInimigo - 2;
  } else {
    xInimigo = 640;
    yInimigo = random(50, 350)
  }
}
