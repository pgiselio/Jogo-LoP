function drawFase1(){
  background(fundo1Img);
  fill(theme.fontColor);
  textSize(25);
  text("Fase 1", canvas.width/2, 30);
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
  interactives.push(pausarBtn);
}
