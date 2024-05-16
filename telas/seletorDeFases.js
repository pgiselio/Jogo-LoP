
function drawTelaFases(){  
  
  fase1Btn = drawButton(140, canvas.height/2 - 50, 150, 150, "Fase 1", () =>  TELA = FASE1);
  
  fase2Btn = drawButton(fase1Btn.pos.w + fase1Btn.pos.x + 30, fase1Btn.pos.y, 150, 150, "Fase 2", () =>  TELA = CONTROLS);
  
  fase3Btn = drawButton(fase2Btn.pos.w + fase2Btn.pos.x + 30, fase1Btn.pos.y, 150, 150, "Fase 3", () =>  TELA = CREDITS);
  
  fase4Btn = drawButton(canvas.width/2, fase3Btn.pos.y + fase3Btn.pos.h + 30, 150, 150, "Fase 4", () =>  TELA = CREDITS);
  
  setInteractives([fase1Btn, fase2Btn, fase3Btn, fase4Btn]);

}

function naveControl(){
  var includeskey = (e) => e == key;
  if(PLAYING){
    if (keybind.up.some(includeskey) && yav>50 && yav <=310) {
      yav=yav-20;
    }
    if (keybind.down.some(includeskey) && yav>=50 && yav <=290) {
      yav=yav+20;
    }
    
    
  }
}
function onClickFases(){
  if(TELA == FASES){
    fase1Btn.click();
    fase2Btn.click();
    fase3Btn.click();
    fase4Btn.click();
    
  } else if(voltarBtn?.mouseOn && !PLAYING){
    TELA = MENU;
  }
}