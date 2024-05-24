function drawFase1(){
  paralaxBackground([{speed: 2, image: fundoMenuImg}], PAUSED);
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
