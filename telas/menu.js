function drawTelaMenu(){
  fill(theme.fontColor);
  textSize(35);
  text("MENU", canvas.width/2, 140);
  
  jogarBtn = drawButton(canvas.width/2, canvas.height/2 - 30, 150, 45, "Jogar", (() =>  TELA = FASES), TELA == MENU);
  
  controlesBtn = drawButton(canvas.width/2, jogarBtn.pos.y + jogarBtn.pos.h + 10, 150, 45, "Controles",( () =>  TELA = CONTROLS), TELA == MENU);
  
  creditosBtn = drawButton(canvas.width/2, controlesBtn.pos.y + controlesBtn.pos.h + 10, 150, 45, "Créditos", (() =>  TELA = CREDITS), TELA == MENU);
  
  setInteractives([jogarBtn, controlesBtn, creditosBtn]);
  
}

function onClickMenu(){
  if(TELA == MENU){
    jogarBtn.click();
    controlesBtn.click();
    creditosBtn.click();
    
  } else if(voltarBtn?.mouseOn && !PLAYING){
    TELA = MENU;
  }
}