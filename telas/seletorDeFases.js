
function drawTelaFases(){
  push()
  imageMode(CENTER); 
  
  image(fasesPreview[0], canvas.width/2 - 100, canvas.height/2 - 100, 180, 135);
  let fase1Btn = drawButton( canvas.width/2 - 100, canvas.height/2 - 100, 180, 135, "Fase 1", () =>  TELA = FASE1, TELA == FASES, buttonSeletorDeFasesStyle);
  
  image(fasesPreview[1], fase1Btn.pos.w + fase1Btn.pos.x + 30, fase1Btn.pos.y, 180, 135);
  let fase2Btn = drawButton(fase1Btn.pos.w + fase1Btn.pos.x + 30, fase1Btn.pos.y, fase1Btn.pos.w, 135, "Fase 2", () =>  TELA = FASE2, TELA == FASES, buttonSeletorDeFasesStyle);
  
  image(fasesPreview[2], fase1Btn.pos.x, fase1Btn.pos.y+ fase1Btn.pos.h + 30, 180, 135);
  let fase3Btn = drawButton(fase1Btn.pos.x, fase1Btn.pos.y+ fase1Btn.pos.h + 30, fase1Btn.pos.w, 135, "Fase 3", () =>  TELA = FASE3, TELA == FASES, buttonSeletorDeFasesStyle);
  
  let fase4Btn = drawButton(fase2Btn.pos.x, fase3Btn.pos.y, fase1Btn.pos.w, 135, "Fase 4", () =>  TELA = CREDITS, TELA == FASES);

  textFont(evilEmpireFont);
  textSize(20);
  fill("#fff");
  text("R a n k:    ", fase1Btn.pos.x, fase1Btn.pos.y + 50);
  text("R a n k:    ", fase2Btn.pos.x, fase2Btn.pos.y + 50);
  text("R a n k:    ", fase3Btn.pos.x, fase3Btn.pos.y + 50);
  text("R a n k:    ", fase4Btn.pos.x, fase4Btn.pos.y + 50);
  fill("#EEE4B1");
  textStyle(BOLD);
    text(
      "              " + (saveManager.getRank(0) != 0 ? saveManager.getRank(0) : "?"),
      fase1Btn.pos.x,
      fase1Btn.pos.y + 50
    );
    text(
      "              " + (saveManager.getRank(1) != 0 ? saveManager.getRank(1) : "?"),
      fase2Btn.pos.x,
      fase2Btn.pos.y + 50
    );
    text(
      "              " + (saveManager.getRank(2) != 0 ? saveManager.getRank(2) : "?"),
      fase3Btn.pos.x,
      fase3Btn.pos.y + 50
    );
    text(
      "              " + (saveManager.getRank(3) != 0 ? saveManager.getRank(3) : "?"),
      fase4Btn.pos.x,
      fase4Btn.pos.y + 50
    );

  pop();
  setInteractives([fase1Btn, fase2Btn, fase3Btn, fase4Btn, voltarBtn]);

}

function onClickFases(){
  if(TELA != FASES && voltarBtn?.mouseOn && !PLAYING){
    TELA = MENU; 
  }
}