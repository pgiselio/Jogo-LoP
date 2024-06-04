let qtdInimigosFase3 = 4;

function drawFase3() {
  if (inimigos.length < qtdInimigosFase2) {
    inimigos.push(new Olhudo(2, 2));
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

    if (inimigos[2]) {
      let inimigo1 = inimigos[2];
      inimigo1.moveY();
    }
    if (inimigos[3]) {
      let inimigo2 = inimigos[3];
      inimigo2.moveY();
    }
  }
  drawHud("Fase 3");
}
