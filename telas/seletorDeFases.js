
function drawTelaFases(){  
  
  let fase1Btn = drawButton( canvas.width/2 - 100, canvas.height/2 - 100, 180, 150, "Fase 1", () =>  TELA = FASE1, TELA == FASES);
  
  let fase2Btn = drawButton(fase1Btn.pos.w + fase1Btn.pos.x + 30, fase1Btn.pos.y, fase1Btn.pos.w, 150, "Fase 2", () =>  TELA = FASE2, TELA == FASES);
  
  let fase3Btn = drawButton(fase1Btn.pos.x, fase1Btn.pos.y+ fase1Btn.pos.h + 30, fase1Btn.pos.w, 150, "Fase 3", () =>  TELA = CREDITS, TELA == FASES);
  
  let fase4Btn = drawButton(fase2Btn.pos.x, fase3Btn.pos.y, fase1Btn.pos.w, 150, "Fase 4", () =>  TELA = CREDITS, TELA == FASES);
  
  setInteractives([fase1Btn, fase2Btn, fase3Btn, fase4Btn, voltarBtn]);

}

function onClickFases(){
  if(TELA != FASES && voltarBtn?.mouseOn && !PLAYING){
    TELA = MENU; 
  }
}