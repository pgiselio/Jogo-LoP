let qtdInimigosFase1 = 4;

function drawFase1() {
  personagem.velocidade = 10;
  if (inimigos.length < qtdInimigosFase1) {
    inimigos.push(new Olhudo(1, 1));
  }
  parallaxBackground(
    [
      { speed: 0.4, image: fundoFloresta[0] },
      { speed: 0.4, image: fundoFloresta[3] },
      { speed: 0.6, image: fundoFloresta[1] },
      { speed: 1, image: fundoFloresta[2] },
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

  }
  drawHud("Fase 1");
}