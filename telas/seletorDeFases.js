
function drawTelaFases(){  
  
  fase1Btn = drawButton(210, canvas.height/2 - 80, 180, 150, "Fase 1", () =>  TELA = FASE1, TELA == FASES);
  
  fase2Btn = drawButton(fase1Btn.pos.w + fase1Btn.pos.x + 30, fase1Btn.pos.y, fase1Btn.pos.w, 150, "Fase 2", () =>  TELA = CONTROLS, TELA == FASES);
  
  fase3Btn = drawButton(fase1Btn.pos.x, fase1Btn.pos.y+ fase1Btn.pos.h + 30, fase1Btn.pos.w, 150, "Fase 3", () =>  TELA = CREDITS, TELA == FASES);
  
  fase4Btn = drawButton(fase2Btn.pos.x, fase3Btn.pos.y, fase1Btn.pos.w, 150, "Fase 4", () =>  TELA = CREDITS, TELA == FASES);
  
  setInteractives([voltarBtn, fase1Btn, fase2Btn, fase3Btn, fase4Btn]);

}

function onClickFases(){
  if(TELA == FASES){
    fase1Btn?.click();
    fase2Btn?.click();
    fase3Btn?.click();
    fase4Btn?.click();
    
  } else if(voltarBtn?.mouseOn && !PLAYING){
    TELA = MENU;
  }
}