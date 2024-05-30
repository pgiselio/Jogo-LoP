function drawHud(faseName) {
  push();
  var pausarBtn = drawButton(
    60,
    30,
    80,
    40,
    "       ||",
    () => (PAUSED = true),
    PLAYING && !PAUSED && !GAMEOVER && !WIN,
    buttonBlackStyle
  );
  var escIdentifierBtn = drawButton(
    45,
    30,
    40,
    30,
    "Esc",
    undefined,
    PLAYING && !PAUSED && !GAMEOVER && !WIN,
    {...buttonBlackStyle, fontSize: 16, fontColor: "#CCC", hover: {...buttonBlackStyle.hover, fontColor: "#CCC"}}
  );
  // fill("#CCC");
  // textSize(16);
  // text("[Esc]", pausarBtn.pos.x + 10, pausarBtn.pos.y);

  fill(theme.fontColor);
  textSize(25);
  text(faseName, canvas.width/2, 30);

  //Pontuação
  push();
  textStyle(BOLD);
  textFont('Courier New', 25);
  textAlign(RIGHT, CENTER);
  text(pontos + " pts", canvas.width - 15, 30);
  if (pontos == 300 ) {
    WIN = true;
  }
  pop();


  //Vidas
  for(let i = 0; i < personagem.vidas; i++){
    image(vidasImg, pausarBtn.pos.w + 30 + (i * 10), 10, 40, 40);
  }
  
  if (personagem.vidas == 0) {
    GAMEOVER = true;
  }
  if(!PAUSED && !GAMEOVER){
    setInteractives([pausarBtn]);
  }
  
  pop();
}
