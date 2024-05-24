
function drawTelaMenu(){
  push();
  let buttonMenuStyle = {
    backgroundColor: "#00000090",
    fontSize: 22,
    hover: {
      backgroundColor: "#000000",
      fontColor: "#FFF",
    },
  }

  image(fundoMenuImg, 0, 0, canvas.width , canvas.height, 0, 0, fundoMenuImg.width, canvas.height, COVER);
  
  fill(theme.fontColor);
  textSize(35);
  text("O JOGO", canvas.width/2, 140);
  
  jogarBtn = drawButton(canvas.width/2, canvas.height/2 - 30, 150, 45, "Jogar", (() =>  TELA = FASES), TELA == MENU, buttonMenuStyle);
  
  controlesBtn = drawButton(canvas.width/2, jogarBtn.pos.y + jogarBtn.pos.h + 10, 150, 45, "Controles",( () =>  TELA = CONTROLS), TELA == MENU, buttonMenuStyle);
  
  creditosBtn = drawButton(canvas.width/2, controlesBtn.pos.y + controlesBtn.pos.h + 10, 150, 45, "Créditos", (() =>  TELA = CREDITS), TELA == MENU, buttonMenuStyle);
  
  setInteractives([jogarBtn, controlesBtn, creditosBtn]);
  pop();
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