let inimigosAdicionaisFase1 = 4;

function drawFase1() {
  personagem.velocidade = 10;
  if (inimigos.length < inimigosAdicionaisFase1) {
    inimigos.push(new Olhudo(1, 2));
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
      let inimigo = inimigos[2];
      inimigo.moveY();
    }

  }
  drawHud("Fase 1");
}
