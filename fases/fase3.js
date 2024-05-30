let inimigosAdicionaisFase3 = 4;

function drawFase3() {
  personagem.velocidade = 10;
  if (inimigos.length < inimigosAdicionaisFase3) {
    inimigos.push(new Olhudo(3, 2));
  }
  inimigos.velocidade=4;
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
