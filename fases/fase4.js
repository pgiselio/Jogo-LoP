let qtdInimigosFase4 = 4;

function drawFase4() {
  if (inimigos.length < qtdInimigosFase4) {
    inimigos.push(new Olhudo(2, 2));
  }
  parallaxBackground(
    [
      { speed: 0.4, image: fundoSunset[0] },
      { speed: 0.7, image: fundoSunset[1] },
      { speed: 0.7, image: fundoSunset[2] },
    ],
    PAUSED
  );
  personagem.draw();
  inimigos.forEach((inimigo) => {
    inimigo.draw();
  });
  if (!PAUSED) {
    personagem.actions();
    inimigos.forEach((inimigo) => {
      inimigo.move();
    
    });

    if (inimigos[2]) {
      let inimigo1 = inimigos[2];
      inimigo1.moveY();
      inimigo1.shootando();
    }
    if (inimigos[3]) {
      let inimigo2 = inimigos[3];
      inimigo2.moveY();
    }
    if (inimigos[1]) {
      let inimigo3 = inimigos[1];
      inimigo3.shootando();
    }
    
  }
  drawHud("Fase 4");
}
