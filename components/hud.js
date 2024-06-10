let vidaSprites = [];
let currentLifeSprite = 0;

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
    {
      ...buttonBlackStyle,
      fontSize: 16,
      fontColor: "#CCC",
      hover: { ...buttonBlackStyle.hover, fontColor: "#CCC" },
    }
  );
  // fill("#CCC");
  // textSize(16);
  // text("[Esc]", pausarBtn.pos.x + 10, pausarBtn.pos.y);

  fill(theme.fontColor);
  textSize(25);
  text(faseName, canvas.width / 2, 30);

  //Pontuação
  push();
  textStyle(BOLD);
  textFont("Courier New", 25);
  textAlign(RIGHT, CENTER);
  text(pontos + " pts", canvas.width - 15, 30);
  if (pontos == 300) {
    WIN = true;
  }
  //rank
  if (rankPonto >= 90) {
    rank = "S";
  } else if (rankPonto >= 70) {
    rank = "A";
  } else if (rankPonto >= 50) {
    rank = "B";
  } else {
    rank = "C";
  }
  pop();

  //Vidas
  if (vidaSprites.length <= personagem.vidas) {
      vidaSprites.push(new Sprite(vidasImg, 48, 48, 8));
  }
  if (vidaSprites.length > personagem.vidas){
      vidaSprites.pop();
  }
  
  vidaSprites.forEach((vida, index) => {
    vida.show(pausarBtn.pos.w + 30 + (index * 10), 10)
    vida.imageWidth = 40;
    vida.imageHeight = 40;
  });

  if(currentLifeSprite < personagem.vidas && frameCount%2==0 && !PAUSED && !GAMEOVER && !WIN){
    vidaSprites[currentLifeSprite] && vidaSprites[currentLifeSprite].animate();
  }
  if(currentLifeSprite >= personagem.vidas){
      currentLifeSprite = 0;
  }
  if(vidaSprites[currentLifeSprite] && vidaSprites[currentLifeSprite].currentFrame >= vidaSprites[currentLifeSprite].numFrames - 1){
    vidaSprites[currentLifeSprite].currentFrame = 0;
    currentLifeSprite++;
  }

  if (personagem.vidas == 0) {
    GAMEOVER = true;
    rankPonto = 100;
  }
  if (!PAUSED && !GAMEOVER) {
    setInteractives([pausarBtn]);
  }

  pop();
}
