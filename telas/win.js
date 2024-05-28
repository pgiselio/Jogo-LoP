let scaleTaxaW = 0.7;
function drawTelaWin() {
  push();
  PAUSED = true;
  PLAYING = false;
  background("#4d4d4db7");
  translate(canvas.width / 2, canvas.height / 2 - 100);

  textAlign(CENTER, CENTER);
  scale(scaleTaxaW);
  if (scaleTaxaW.toFixed(2) < 1) {
    scaleTaxaW += 0.005;
  }

  fill(`rgba(000, 000, 000, ${scaleTaxaW.toFixed(2)})`);
  textSize(80);
  textStyle(BOLD);
  textFont(evilEmpireFont);
  textLeading(60);
  text("V I T O R I A", 0, 0);

  translate(-canvas.width / 2, -139);
  textFont(theme.textFont);
  let goBackW = drawButton(
    canvas.width / 2,
    canvas.height / 2 + 80,
    220,
    45,
    "SELECIONAR FASES",
    () => {
      pontos = 0;
      personagem.reset();
      disparos.forEach((disparo) => {
        disparo.reset();
      });
      inimigos.forEach((inimigo) => {
        inimigo.reset();
      });
      WIN = false;
      PAUSED = false;
      TELA = FASES;
    },
    WIN,
    buttonBlackStyle
  );
  setInteractives([goBackW]);
  pop();

}
