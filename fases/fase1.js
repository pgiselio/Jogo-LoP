function drawFase1(){
  background(fundo1Img);
  fill(theme.fontColor);
  textSize(25);
  text("Fase 1", canvas.width/2, 30);
  textFont('Courier New', 25);
  text(pontos + " pts", 580, 30)
  personagem.draw();
  olhudo1.draw();
  olhudo2.draw();
  if (!PAUSED) {
    personagem.actions();
    olhudo1.move();
    olhudo2.move();
  }
  var pausarBtn = drawButton(
    30,
    30,
    40,
    40,
    "||",
    () => (PAUSED = true),
    TELA == FASE1 && !PAUSED,
    { backgroundColor: "#00000050" }
  );
  if (contador==0){
    image(vidasImg, 50,10, 40,40);
    image(vidasImg, 60,10, 40,40);
    image(vidasImg, 70,10, 40,40);
    image(vidasImg, 80,10, 40,40);
  }if(contador==1){
      image(vidasImg, 50,10, 40,40);
      image(vidasImg, 60,10, 40,40);
      image(vidasImg, 70,10, 40,40);
  }if(contador==2){
    image(vidasImg, 50,10, 40,40);
    image(vidasImg, 60,10, 40,40);
}
if(contador==3){
  image(vidasImg, 50,10, 40,40);
}if(contador==4){
  //Game over tela
}
  interactives.push(pausarBtn);
  
}
