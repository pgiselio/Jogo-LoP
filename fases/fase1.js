function drawFase1() {
  parallaxBackground(
    [
      { speed: 0.4, image: fundoFloresta[0] },
      { speed: 0, image: fundoFloresta[3] },
      { speed: 0.6, image: fundoFloresta[1] },
      { speed: 1, image: fundoFloresta[2] },
    ],
    PAUSED
  );
  personagem.draw();
  olhudo1.draw();
  olhudo2.draw();
  if (!PAUSED) {
    personagem.actions();
    olhudo1.move();
    olhudo2.move();
  }
  drawHud("Fase 1");
}
