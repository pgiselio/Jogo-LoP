function drawHud(faseName) {
  push();
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

  fill(theme.fontColor);
  textSize(25);
  text(faseName, canvas.width/2, 30);

  //Pontuação
  push();
  textStyle(BOLD);
  textFont('Courier New', 25);
  textAlign(RIGHT, CENTER);
  text(pontos + " pts", canvas.width - 15, 30);
  pop();


  //Vidas
  for(let i = 0; i < vidas; i++){
    image(vidasImg, 50 + (i * 10), 10, 40, 40);
  }
  
  if (vidas == 0) {
    TELA = GAMEOVER;
  }
  interactives.push(pausarBtn);
  pop();
}
