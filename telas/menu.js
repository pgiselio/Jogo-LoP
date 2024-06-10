
function drawTelaMenu(){
  push();
    image(fundoMenuImg, 0, 0, canvas.width , canvas.height, 0, 0, fundoMenuImg.width, canvas.height, COVER);
      
    textFont(evilEmpireFont);
    fill("#000");
    textSize(50);
    text("W I T C H", canvas.width/2, 140);
  pop();


  push();

  fill("#F1F1F1");

  let jogarBtn = drawButton(canvas.width/2, canvas.height/2 - 30, 150, 45, "Jogar", (() =>  TELA = FASES), TELA == MENU, buttonBlackStyle);
  
  let controlesBtn = drawButton(canvas.width/2, jogarBtn.pos.y + jogarBtn.pos.h + 10, 150, 45, "Controles",( () =>  TELA = CONTROLS), TELA == MENU, buttonBlackStyle);
  
  let creditosBtn = drawButton(canvas.width/2, controlesBtn.pos.y + controlesBtn.pos.h + 10, 150, 45, "Créditos", (() =>  TELA = CREDITS), TELA == MENU, buttonBlackStyle);
  
  textStyle(BOLD);
  textSize(15);
  image(keysImg, canvas.width - 180 - 150, canvas.height - 50, 92*0.4, 64*0.4, 0, 0, keysImg.width, 64);
  text("NAVEGAR", canvas.width - keysImg.width*0.8 - 165, canvas.height - 35);

  image(enterKeyImg, canvas.width - 160, canvas.height - 50, enterKeyImg.width*0.4, 64*0.4, 0, 0, enterKeyImg.width, 64);
  text("SELECIONAR", canvas.width - keysImg.width*0.8, canvas.height - 35);

  setInteractives([jogarBtn, controlesBtn, creditosBtn]);
  pop();
}

function onClickMenu(){
  if(TELA != MENU && voltarBtn?.mouseOn && !PLAYING){
    TELA = MENU; 
  }
}