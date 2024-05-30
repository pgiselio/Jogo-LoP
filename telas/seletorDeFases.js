
function drawTelaFases(){
  push()
  imageMode(CENTER); 
  
  image(fasesPreview[0], canvas.width/2 - 100, canvas.height/2 - 100, 180, 135);
  let fase1Btn = drawButton( canvas.width/2 - 100, canvas.height/2 - 100, 180, 135, "Fase 1", () =>  TELA = FASE1, TELA == FASES, buttonSeletorDeFasesStyle);
  
  image(fasesPreview[1], fase1Btn.pos.w + fase1Btn.pos.x + 30, fase1Btn.pos.y, 180, 135);
  let fase2Btn = drawButton(fase1Btn.pos.w + fase1Btn.pos.x + 30, fase1Btn.pos.y, fase1Btn.pos.w, 135, "Fase 2", () =>  TELA = FASE2, TELA == FASES, buttonSeletorDeFasesStyle);
  
  let fase3Btn = drawButton(fase1Btn.pos.x, fase1Btn.pos.y+ fase1Btn.pos.h + 30, fase1Btn.pos.w, 135, "Fase 3", () =>  TELA = FASE3, TELA == FASES);
  
  let fase4Btn = drawButton(fase2Btn.pos.x, fase3Btn.pos.y, fase1Btn.pos.w, 135, "Fase 4", () =>  TELA = CREDITS, TELA == FASES);
  pop();
  setInteractives([fase1Btn, fase2Btn, fase3Btn, fase4Btn, voltarBtn]);

}

function onClickFases(){
  if(TELA != FASES && voltarBtn?.mouseOn && !PLAYING){
    TELA = MENU; 
  }
}