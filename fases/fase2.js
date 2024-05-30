let inimigosAdicionaisFase2 = 4;

function drawFase2() {
  personagem.velocidade = 10;
  if (inimigos.length < inimigosAdicionaisFase2) {
    inimigos.push(new Olhudo(3, 2));
  }

  parallaxBackground(
    [
      { speed: 0, image: fundoFlorestaSky[0] },
      { speed: 0.4, image: fundoFlorestaSky[1] },
      { speed: 0.5, image: fundoFlorestaSky[2] },
      { speed: 0.6, image: fundoFlorestaSky[3] },
      { speed: 0.9, image: fundoFlorestaSky[4] },
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
