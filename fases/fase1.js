function drawFase1(){
  background(fundo1Img);
 
  personagem.draw();
  olhudo1.draw();
  olhudo2.draw();
  if (!PAUSED) {
    personagem.actions();
    olhudo1.move();
    olhudo2.move();
  } 
  drawHud("Fase 1");
}
