function drawTelaPause(){
  push();
  rectMode(CENTER);
  PLAYING = false;
  background("#4d4d4db7");
  fill("#00000050");
  stroke("#EEE4B1")
  strokeWeight(3)
  rect(canvas.width/2, canvas.height/2 + 10, 330, 280, 10)
  fill("#EEE4B1")
  textSize(30);
  stroke("black")
  textStyle(BOLD);
  textFont(evilEmpireFont);
  text("J O G O", canvas.width/2, canvas.height/2 - 100 );
  text("P A U S A D O", canvas.width/2, canvas.height/2 - 70 );
  textFont('Arial');

  let continuar = drawButton(canvas.width/2, canvas.height/2  - 15, 250, 40, "Continuar jogo", () => PAUSED = false, PAUSED && !GAMEOVER);
  let controls = drawButton(canvas.width/2, canvas.height/2 + 35, 250, 40, "Controles", ()=> {TELA = CONTROLS; PAUSED = false}, PAUSED && !GAMEOVER);
  let menu = drawButton(canvas.width/2, canvas.height/2 + 85, 250, 40, "Voltar para o menu", ()=> {TELA = MENU ; PAUSED = false}, PAUSED && !GAMEOVER);
  setInteractives([continuar, controls, menu]);
  pop();
}