let inimigosAdicionaisFase2 = 4;

function drawFase2() {
  personagem.velocidade = 10;
  inimigos.velocidade = 4;
  if (inimigos.length < inimigosAdicionaisFase2) {
    inimigos.push(new Olhudo(3, 2));
  } 
  inimigos.velocidade = 3;
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
  drawHud("Fase 2");
}
