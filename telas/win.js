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
  let proximaFase;
  if(TELA != FASE3){
    proximaFase = drawButton(
    canvas.width / 2,
    canvas.height / 2 ,
    220,
    45,
    "Próxima fase",
    () => {
      resetaJogo();
      switch (TELA) {
        case FASE1:
          TELA = FASE2;
          break;
        case FASE2:
          TELA = FASE3;
          break;
        case FASE3:
          TELA = FASES;
          break;
      }
    },
    WIN,
    buttonBlackStyle
  );}

  let goBackW = drawButton(
    canvas.width / 2,
    proximaFase ? (proximaFase.pos.y + proximaFase.pos.h + 10) : canvas.height/2,
    220,
    45,
    "Selecionar fase",
    () => {
      resetaJogo();
      TELA = FASES;
    },
    WIN,
    buttonBlackStyle
  );

  
  let goToMenu = drawButton(
    canvas.width / 2,
    goBackW.pos.y + goBackW.pos.h + 10,
    220,
    45,
    "Voltar para o menu",
    () => {
      resetaJogo();
      TELA = MENU;
    },
    WIN,
    buttonBlackStyle
  );

  setInteractives([proximaFase, goBackW, goToMenu]);
  pop();
}
