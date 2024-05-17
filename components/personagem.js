var xPersonagem=40;
var yPersonagem=50;
var xDisparo;
var yDisparo;
var disparoAtivo=false;

function personagem(){
  personagemActions();
  image(aviaoImg, xPersonagem, yPersonagem,70, 70);
}

function personagemActions() {
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
        xDisparo = xPersonagem + 50;
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
  }
  