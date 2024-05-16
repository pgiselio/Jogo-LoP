function drawFase1(){
  background(fundo1);
  fill(theme.fontColor);
  textSize(25);
  text("Fase 1", canvas.width/2, 30);
  image(aviao, xav,yav,70, 70);
  naveActions();
}
