let scaleTaxaGO = 0.7;
function drawTelaGameover() {
  push();
  PAUSED = true;
  PLAYING = false;
  background("#4d4d4db7");
  translate(canvas.width / 2, canvas.height / 2 - 100);

  textAlign(CENTER, CENTER);
  scale(scaleTaxaGO);
  if (scaleTaxaGO.toFixed(2) < 1) {
    scaleTaxaGO += 0.005;
  }

  fill(`rgba(000, 000, 000, ${scaleTaxaGO.toFixed(2)})`);
  textSize(80);
  textStyle(BOLD);
  textFont(evilEmpireFont);
  textLeading(60);
  text("G A M E\nO  V  E  R", 0, 0);

  translate(-canvas.width / 2, -139);
  textFont(theme.textFont);
  let goBack = drawButton(
    canvas.width / 2,
    canvas.height / 2 + 80,
    220,
    45,
    "Voltar para o menu",
    () => {
      vidas = 4;
      pontos = 0;
      personagem.reset();
      disparos.forEach((disparo) => {
        disparo.reset();
      });
      inimigos.forEach((inimigo) => {
        inimigo.reset();
      });
      GAMEOVER = false;
      PAUSED = false;
      TELA = MENU;
    },
    GAMEOVER,
    buttonBlackStyle
  );
  setInteractives([goBack]);
  pop();

}
