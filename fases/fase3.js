let qtdInimigosFase3 = 4;

function drawFase3() {
  if (inimigos.length < qtdInimigosFase2) {
    inimigos.push(new Olhudo(2, 2));
  }
  parallaxBackground(
    [
      { speed: 0.4, image: fundoMar[0] },
      { speed: 0.8, image: fundoMar[3] },
      { speed: 0.0, image: fundoMar[1] },
      { speed: 0.5, image: fundoMar[2] },
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
