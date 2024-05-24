let scaleTaxaGO = 0.7;
function drawTelaGameover() {
  push();
  PLAYING = false;
  background("#4d4d4db7");
  translate(canvas.width / 2, canvas.height / 2 - 100);
  
  textAlign(CENTER, CENTER);
  scale(scaleTaxaGO);
  if (scaleTaxaGO.toFixed(2) < 1) {
    scaleTaxaGO += 0.008;
  }

  fill("#00000090");
  textSize(80);
  textStyle(BOLD);
  textFont(evilEmpireFont);
  textLeading(60)
  text("G A M E\nO  V  E  R", 0 , 0);


  translate(-canvas.width / 2, -139);   
  textFont(theme.textFont);
  let goBack = drawButton(canvas.width / 2, canvas.height / 2 + 80, null, null, "Voltar para o menu", () => TELA = MENU, TELA == GAMEOVER);
  pop();
  
  setInteractives([voltarBtn, goBack]);
}
